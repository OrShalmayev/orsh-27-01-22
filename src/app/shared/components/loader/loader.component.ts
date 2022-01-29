import { Component } from "@angular/core";

@Component({
  selector: 'app-loader',
  template: `
  <p class="loader">Loading...</p>
    <!-- <div class="box">
        <div class="loader"></div>
    </div> -->
  `,
  styles:[`
    /* .loader {
        border-radius: 50%;
        box-shadow: inset 0 0 0 .1em red, -.5em -.5em 0 -.4em red, 0 -.7em 0 -.4em red, .5em -.5em 0 -.4em red, -.5em .5em 0 -.4em red, 0 .7em 0 -.4em red, .5em .5em 0 -.4em red, -.7em 0 0 -.4em red, .7em 0 0 -.4em red;
        animation: 5s loader linear infinite;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } */
  
  `]
})
export class LoaderComponent {
}