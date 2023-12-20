import { Injectable, Injector, runInInjectionContext } from '@angular/core';
import { NotificationData } from '../../notification';
import { notificationConfig } from './notification.config';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class NotificationInjectService {
	public readonly config = notificationConfig;

	constructor(
		private readonly router: Router,
		private readonly injector: Injector
	) {}

	public async onNotification(data: NotificationData): Promise<void> {
		const item = this.config[data.action];
		const { routerLink, queryParams } = runInInjectionContext(this.injector, () => item.redirect(data));

		this.router.navigate([routerLink], { queryParams });
	}
}
