import { Component } from '@angular/core';
import { IconButtonComponent } from '../../common/components/icon-button/icon-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [IconButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private router : Router) { }

handleClick(){
  this.router.navigate(['menuler-page']);
}
}
