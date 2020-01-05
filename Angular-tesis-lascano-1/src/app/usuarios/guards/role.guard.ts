import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root',
})

export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.isAuthenticated()) {
      this.route.navigate(['/login'])
      return false;
    }

    let role = route.data['role'] as string;
    if (this.authService.hasRole(role)) {
      return true;
    }
    alert("No tienes acceso a este recurso");
    return false;
  }

}
