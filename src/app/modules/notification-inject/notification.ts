import { NotificationAction, NotificationData, NotificationRedirect } from '../../notification';

export interface Notification {
	redirect(data: NotificationData): NotificationRedirect;
}

export type NotificationConfig = Record<NotificationAction, Notification>;
