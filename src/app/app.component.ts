import { Component, OnInit,} from '@angular/core';
import { CommonModule, UpperCasePipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sample' })
export class SamplePipe implements PipeTransform {
  transform(input: string): string {
        return `${input} from sample pipe`;
  }
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'My best frind',
        description: 'Mon ami du couer',
        imageUrl: 'https://images.unsplash.com/photo-1706306611201-305dba63850e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createDate: new Date,
        snaps: 250,
        location: 'Paris'
      },

      {
        title: 'My second friend',
        description: 'je fait des bettise avec',
        imageUrl: 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createDate: new Date(),
        snaps: 3000,
        location: 'Marseille'
      },

      {
        title: 'My team',
        description: 'Boots team',
        imageUrl: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createDate: new Date(),
        snaps: 125
      },
      {
        title: 'We are only us!',
        description: 'Hollidays with the guys :)',
        imageUrl: 'https://images.unsplash.com/photo-1533254012848-644c18f39289?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createDate: new Date(),
        snaps: 90,
        location: 'Inde'
      },

      {
        title: 'Sisters',
        description: 'Relax...',
        imageUrl: 'https://images.unsplash.com/photo-1555791019-72d3af01da82?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createDate: new Date(),
        snaps: 190,
        location: 'Normandie'
      },

      {
        title: 'I will not say a word!',
        description: 'Secret',
        imageUrl: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createDate: new Date(),
        snaps: 200
      }
    ]

  }
}
