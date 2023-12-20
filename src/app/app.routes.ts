import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'transaction',
		loadComponent: () =>
			import('./modules/transaction/pages/transaction/transaction.component').then(m => m.TransactionComponent),
	},
	{
		path: 'verification',
		loadComponent: () =>
			import('./modules/verification/pages/verification/verification.component').then(
				m => m.VerificationComponent
			),
	},
];
