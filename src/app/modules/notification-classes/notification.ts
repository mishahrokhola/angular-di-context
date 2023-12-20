import { Type } from '@angular/core';
import { NotificationAction, NotificationData, NotificationRedirect } from '../../notification';

export abstract class Notification {
	public abstract redirect(data: NotificationData): NotificationRedirect;
}

export type NotificationConfig = Record<NotificationAction, Type<Notification>>;
