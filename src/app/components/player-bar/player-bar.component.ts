import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultPlyrDriver } from '../../classes/default-plyr-driver';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss'],
})
export class PlayerBarComponent implements OnInit {
  @ViewChild('plyrAudio') plyerAudio: ElementRef;

  constructor(private plyrDriver: DefaultPlyrDriver) {}

  ngOnInit() {
    this.plyrDriver.create({
      videoElement: this.plyerAudio.nativeElement,
      options: {
        controls: ['restart', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume']
      },
    });
  }
}
