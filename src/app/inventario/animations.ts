import { trigger,state,style,transition,animate,AnimationEntryMetadata } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const slide: AnimationEntryMetadata = 
    trigger('routeAnimation',[
        state('*',style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter',[
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.3s ease-in')
        ]),
        transition(':leave',[
            animate('0.3s ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ]);