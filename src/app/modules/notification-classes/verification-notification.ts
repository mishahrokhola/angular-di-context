import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { NotificationData, NotificationRedirect } from '../../notification';

@Injectable({
	providedIn: 'root',
})
export class VerificationNotification implements Notification {
	public redirect(data: NotificationData): NotificationRedirect {
		return { routerLink: '/verification', queryParams: { action: data.action } };
	}
}
