import { Injector } from '@angular/core';
import { NotificationAction, NotificationData, NotificationRedirect } from '../../notification';

export interface Notification {
	redirect(data: NotificationData, injector: Injector): NotificationRedirect;
}

export type NotificationConfig = Record<NotificationAction, Notification>;
