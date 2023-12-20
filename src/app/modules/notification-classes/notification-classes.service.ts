import { Injectable, Injector } from '@angular/core';
import { NotificationData } from '../../notification';
import { notificationConfig } from './notification.config';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class NotificationClassesService {
	public readonly config = notificationConfig;

	constructor(
		private readonly router: Router,
		private readonly injector: Injector
	) {}

	public onNotification(data: NotificationData): void {
		const item = this.config[data.action];
		const itemNotification = this.injector.get(item);
		const { routerLink, queryParams } = itemNotification.redirect(data);

		this.router.navigate([routerLink], { queryParams });
	}
}
