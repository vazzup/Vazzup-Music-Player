import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'music-player',
	templateUrl: './music-player.component.html',
	styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent {
	// If song is paused or playing
	@Input() paused;
	// Controls
	@Output() backward = new EventEmitter();
	@Output() pauseplay = new EventEmitter();
	@Output() forward = new EventEmitter();
	@Output() random = new EventEmitter();
	@Output() stop = new EventEmitter();
}

