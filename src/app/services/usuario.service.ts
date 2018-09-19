import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	private url:string;

	private encabezados:any;

  constructor(private http:HttpClient) {
  	this.url = "https://apidocumentospiensadigital.herokuapp.com";
  	this.encabezados = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
  }

  iniciarSesion(auth:any):Observable<any>{
  	return this.http.post<any>(this.url+'/user_token',auth,this.encabezados);
  }

  crearCuenta(user):Observable<any>{
    return this.http.post<any>(this.url+'/users',user)
  }

}
