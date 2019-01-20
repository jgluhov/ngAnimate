import { transition, state } from '@angular/animations';
import {
  animation,
  keyframes,
  animate,
  style
} from '@angular/animations';

export const shockwaveJumpAnimation = animation([
  animate('{{ time }} {{ timing }}', keyframes([
    style({ transform: 'scale(1)', offset: 0 }),
    style({ transform: 'scale(1.08)', offset: 0.4 }),
    style({ transform: 'scale(0.98)', offset: 0.5 }),
    style({ transform: 'scale(1.02)', offset: 0.55 }),
    style({ transform: 'scale(0.98)', offset: 0.6 }),
    style({ transform: 'scale(1)', offset: 1 })
  ]))
], { params: {
  time: '1s',
  timing: 'ease-out'
}});
