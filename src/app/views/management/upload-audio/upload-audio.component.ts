import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-audio',
  templateUrl: './upload-audio.component.html',
  styleUrls: ['./upload-audio.component.scss']
})
export class UploadAudioComponent implements OnInit {
  current = 1;
  
  constructor() { }

  ngOnInit() {
  }

}
