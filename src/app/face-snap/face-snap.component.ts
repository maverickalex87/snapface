import { Component, OnInit, Input } from '@angular/core';
import { UrlCreationOptions } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { NgIf, NgStyle, NgClass, UpperCasePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, UpperCasePipe, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'

})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;


  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if(this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oups Unsnap!';
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
