import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  	
  	constructor(private router:Router){

  	}

  	canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    	if(localStorage.getItem("SessionToken")){
    		return true;
    	}else{
    		this.router.navigate(['/iniciar_sesion']);
    		return false;
    	}
  	}
}
