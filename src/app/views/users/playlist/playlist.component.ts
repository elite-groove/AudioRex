import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Beauty%20Flow.mp3'
    },
    {
      title: 'Audio Two Title',
      link: 'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Half%20Mystery.mp3'
    },
    {
      title: 'Audio Three Title',
      link: 'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Magic%20Scout%20-%20Cottages.mp3'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
