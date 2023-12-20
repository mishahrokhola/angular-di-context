import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	public readonly user = { id: 11, name: 'Misha' };
}
