import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NotificationInjectService } from './modules/notification-inject/notification-inject.service';
import { NotificationClassesService } from './modules/notification-classes/notification-classes.service';
import { NotificationInjectorService } from './modules/notification-injector/notification-injector.service';

import { NotificationAction } from './notification';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent {
	constructor(
		private readonly notificationInjectService: NotificationInjectService,
		private readonly notificationClassesService: NotificationClassesService,
		private readonly notificationInjectorService: NotificationInjectorService
	) {}

	public onTransactionClick(): void {
		this.notificationInjectService.onNotification({ action: NotificationAction.TransactionSuccess });
	}

	public onVerificationClick(): void {
		this.notificationInjectService.onNotification({ action: NotificationAction.VerificationApproved });
	}
}
