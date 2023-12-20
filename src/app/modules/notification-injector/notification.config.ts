import { Injector } from '@angular/core';
import { UserService } from '../../user.service';
import { NotificationConfig } from './notification';
import { NotificationAction, NotificationData, NotificationRedirect } from '../../notification';

export const notificationConfig: NotificationConfig = {
	[NotificationAction.TransactionFailed]: {
		redirect: (data: NotificationData, injector: Injector): NotificationRedirect => ({
			routerLink: '/transaction',
			queryParams: { action: data.action, userId: injector.get(UserService).user.id },
		}),
	},
	[NotificationAction.TransactionSuccess]: {
		redirect: (data: NotificationData, injector: Injector): NotificationRedirect => ({
			routerLink: '/transaction',
			queryParams: { action: data.action, userId: injector.get(UserService).user.id },
		}),
	},

	[NotificationAction.VerificationApproved]: {
		redirect: (data: NotificationData): NotificationRedirect => ({
			routerLink: '/verification',
			queryParams: { action: data.action },
		}),
	},
	[NotificationAction.VerificationDenied]: {
		redirect: (data: NotificationData): NotificationRedirect => ({
			routerLink: '/verification',
			queryParams: { action: data.action },
		}),
	},
};
