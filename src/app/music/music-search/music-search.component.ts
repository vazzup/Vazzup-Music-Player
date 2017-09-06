import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	// Define Component
	selector: 'music-search',
	templateUrl: './music-search.component.html',
	styleUrls: ['./music-search.component.css'],
})

export class MusicSearchComponent {
	// Write Class of Component
	track: string;	// Track variable of type string
	@Input() tracks: any[];	// Tracks array of any datatype

	@Output() update = new EventEmitter();	// update EventEmitter
	@Output() query = new EventEmitter();	// query EventEmitter

	search(event) {
		// Function called when primeNG autocomplete is updated
		this.query.emit(event.query);
	}

	select(track) {
		// Function called when primeNG autocomplete item is selected
		this.update.emit(track);
	}
}
