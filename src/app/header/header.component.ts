import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1>Angular - Spring</h1>
  `

})
export class HeaderComponent {

}
