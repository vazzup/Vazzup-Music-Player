// Third party imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
// PrimeNG autocomplete for search
import { AutoCompleteModule } from 'primeng/primeng';

// Custom imports
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicFooterCoeponent } from './music-footer/music-footer.component';
import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';

@NgModule({
	imports: [
		// Define imports
		FormsModule,
		AutoCompleteModule,
		HttpModule,
		CommonModule
	],
	exports: [
		// Expose components
		MusicSearchComponent,
		MusicDetailsComponent,
		MusicPlayerComponent,
		MusicProgressComponent,
		MusicFooterComponent
	],
	declarations: [
		// Declare components
		MusicSearchComponent,
		MusicDetailsComponent,
		MusicPlayerComponent,
		MusicProgressComponent,
		MusicFooterComponent
	],
	providers: [
		// Services
		ApiService,
		MusicService
	],
})

export class MusicModule { }

