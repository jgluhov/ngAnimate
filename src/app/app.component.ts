import { Component } from '@angular/core';
import { trigger, transition, keyframes, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('shockwaveJump', [
      transition('* => play', [
        animate('1s ease-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.08)', offset: 0.4 }),
          style({ transform: 'scale(0.98)', offset: 0.5 }),
          style({ transform: 'scale(1.02)', offset: 0.55 }),
          style({ transform: 'scale(0.98)', offset: 0.6 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'ngAnimate';

  handleClick(btn: HTMLButtonElement) {
    btn.dataset.animationState =
      btn.dataset.animationState === 'play' ? 'stop' : 'play';
  }
}
