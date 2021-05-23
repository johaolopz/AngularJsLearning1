import { Component } from '@angular/core';

@Component({
  selector: 'app-root',    /*Este nombre es del tag del index.html*/
  templateUrl: './app.component.html', /*Plantilla html*/
  styleUrls: ['./app.component.scss']  /*Hojas de estilo, podemos cambiarla a .css .scss .sass .less en archivo angular.json*/
})
export class AppComponent {
  title = 'Project1';
}
