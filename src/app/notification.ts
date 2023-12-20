import { Params } from '@angular/router';

export enum NotificationAction {
	TransactionSuccess = 'transaction_success',
	TransactionFailed = 'transaction_failed',

	VerificationApproved = 'verification_approved',
	VerificationDenied = 'verification_denied',
}

export interface NotificationData {
	action: NotificationAction;
}

export interface NotificationRedirect {
	routerLink: string;
	queryParams?: Params;
}
