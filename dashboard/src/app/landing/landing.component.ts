import { Component } from '@angular/core';
import { FormModule } from 'app/form/form.module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  displayform:boolean = false;

  goToFeatures() {
    document.getElementById('features').scrollIntoView({
      behavior: 'smooth'
    });
  }
  goToWorks() {
    document.getElementById('works').scrollIntoView({
      behavior: 'smooth'
    });
  }
  goToAbout() {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    });
  }
  signUp() {
    document.getElementById('SignUp').scrollIntoView({
      behavior: 'smooth'
    });
  }
  signIn() {
    document.getElementById('SignIn').scrollIntoView({
      behavior: 'smooth'
    })
  }
  displayforms() {
    this.displayform = !this.displayform;
  }

}
