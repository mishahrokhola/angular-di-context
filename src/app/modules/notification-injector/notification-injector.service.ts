import { Injectable, Injector } from '@angular/core';
import { NotificationData } from '../../notification';
import { notificationConfig } from './notification.config';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class NotificationInjectorService {
	public readonly config = notificationConfig;

	constructor(
		private readonly router: Router,
		private readonly injector: Injector
	) {}

	public onNotification(data: NotificationData): void {
		const item = this.config[data.action];
		const { routerLink, queryParams } = item.redirect(data, this.injector);

		this.router.navigate([routerLink], { queryParams });
	}
}
