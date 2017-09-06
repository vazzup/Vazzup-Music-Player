import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

	clientId = '[CLIENT_ID]'

	constructor(
		private http: Http
	) {}

	get(url, attachClientId?) {
		// Should attach client id if the attachToken is true
		let u;
		attachClientId ? u = this.prepareUrl(url) : u = url;
		// Returns an observable for the HTTP GET request
		return this.http.get(u);
	}

	prepareUrl(url) {
		// Attach client d to stream url
		return `${url}?client_id=${this.clientId}`
	}

}
