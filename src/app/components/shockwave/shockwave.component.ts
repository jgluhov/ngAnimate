import { Component } from '@angular/core';
import { trigger, transition, style, useAnimation, AnimationEvent, state } from '@angular/animations';
import { shockwaveJumpAnimation } from './shockwave.animation';

enum AnimationStates {
  PLAY_1 = 'play-1',
  PLAY_2 = 'play-2',
  STOP = 'stop'
}
@Component({
  selector: 'app-shockwave',
  templateUrl: './shockwave.component.html',
  styleUrls: ['./shockwave.component.scss'],
  animations: [
    trigger('shockwaveJump', [
      transition(`* => ${AnimationStates.PLAY_1}`, [ useAnimation(shockwaveJumpAnimation) ]),
      transition(`* => ${AnimationStates.PLAY_2}`, [ useAnimation(shockwaveJumpAnimation) ]),
      state(AnimationStates.STOP, style({ transform: 'scale(1)' }))
    ])
  ]
})
export class ShockwaveComponent {
  isAnimating = false;
  animationState = AnimationStates.STOP;

  handleClick(evt: Event) {
    evt.stopPropagation();

    this.isAnimating = !this.isAnimating;
    this.toggleAnimationState();
  }

  onDone({ fromState }: AnimationEvent) {
    if (fromState === 'void') {
      return;
    }

    this.toggleAnimationState();
  }

  toggleAnimationState() {
    if (this.isAnimating) {
      this.animationState = this.animationState === AnimationStates.PLAY_1 ?
        AnimationStates.PLAY_2 : AnimationStates.PLAY_1;
    } else {
      this.animationState = AnimationStates.STOP;
    }
  }

}
