import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const slideDownUpAnimation = trigger('slideDownUp', [
    transition(':enter', [
        style({ height: 0 }), 
        animate('{{animationDelay}}ms', keyframes([
            style({ opacity: 1, transform: 'translateY(-300px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 0.5 }),
        ]))
    ], { params: { animationDelay: 1 } }),
    transition(':leave', [animate(500, style({ height: 0 }))]),
]);