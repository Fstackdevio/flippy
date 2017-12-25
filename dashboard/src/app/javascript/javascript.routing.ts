import { Routes } from '@angular/router';

import { JavascriptComponent } from './javascript.component';


export const JavascriptRoutes: Routes = [{
  path: '',
  component: JavascriptComponent,
  data: {
    heading: 'javascript'
  }
}];
