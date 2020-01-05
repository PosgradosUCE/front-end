import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html',
  styleUrls: ['footer.css'],
})

export class FooterComponent {

  public autor: any = {
    nombre: 'Posgrados',
    tipo: 'FING',
  };
}
