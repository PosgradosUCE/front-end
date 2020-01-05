import {Component, OnInit} from '@angular/core';
import {Usuario} from './usuario';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {

  titulo: string = "Por favor Sign in!";
  usuario: Usuario;

  constructor(private authService: AuthService, private route: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      alert("ya estas autenticado");
      this.route.navigate(['/posgrado/inicio'])
    }
  }

  public login(): void {
    console.log(this.usuario);
    if (this.usuario['username'] == null || this.usuario['password'] == null) {
      alert('error de login');

      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);

      let usuario = this.authService.usuario;

      this.route.navigate(['posgrado/inicio']);
      alert('login exitoso ' + usuario['username']);
    },
      err => {
      if (err.status == 400) {
        alert("usuario o clave incorrecta");
      }
      },
      );
  }

}
