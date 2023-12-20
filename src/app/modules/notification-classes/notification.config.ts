import { NotificationConfig } from './notification';
import { NotificationAction } from '../../notification';
import { TransactionNotification } from './transaction-notification';
import { VerificationNotification } from './verification-notification';

export const notificationConfig: NotificationConfig = {
	[NotificationAction.TransactionFailed]: TransactionNotification,
	[NotificationAction.TransactionSuccess]: TransactionNotification,

	[NotificationAction.VerificationApproved]: VerificationNotification,
	[NotificationAction.VerificationDenied]: VerificationNotification,
};
