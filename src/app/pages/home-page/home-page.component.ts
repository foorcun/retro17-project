import { Component } from '@angular/core';
import { IconButtonComponent } from '../../common/components/icon-button/icon-button.component';

@Component({
  selector: 'app-home-page',
  imports: [IconButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


handleClick(){
  alert('Button clicked!');
}
}
