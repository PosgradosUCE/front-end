import {Component} from '@angular/core';
import {AuthService} from '../usuarios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
})
export class HeaderComponent {

  public titulo: string = 'Posgrados';

  constructor(private authService: AuthService, private router: Router) {

  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    alert("Ha cerrado sesion con exito");

  }
}
