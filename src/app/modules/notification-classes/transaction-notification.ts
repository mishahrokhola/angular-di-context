import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { UserService } from '../../user.service';
import { NotificationData, NotificationRedirect } from '../../notification';

@Injectable({
	providedIn: 'root',
})
export class TransactionNotification implements Notification {
	constructor(private readonly userService: UserService) {}

	public redirect(data: NotificationData): NotificationRedirect {
		return { routerLink: '/transaction', queryParams: { action: data.action, userId: this.userService.user.id } };
	}
}
