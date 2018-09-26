import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private url:string;
  private encabezados:any;

  constructor(private http:HttpClient) {
  	
  	this.url = "http://apidocumentospiensadigital.herokuapp.com/articulos";
  	this.encabezados = {
  		headers: new HttpHeaders({
  			'Content-Type': 'application/json',
  			'Authorization': 'Bearer '+ localStorage.getItem("SessionToken")
  		})
  	}

  }


  // GET articulos
  traerArticulos():Observable<any>{
  	return this.http.get<any>(this.url,this.encabezados);
  }

  mostrarArticulo(id):Observable<any>{
    return this.http.get<any>(this.url+'/'+id, this.encabezados)
  }

  crearArticulo(articulo):Observable<any>{
    let params = JSON.stringify(articulo);
    return this.http.post<any>(this.url,params,this.encabezados)
  }

  modificarArticulo(articulo){
    let params = JSON.stringify(articulo)
    return this.http.put<any>(this.url+'/'+articulo.id,params,this.encabezados)
  }

  eliminarArticulo(id):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id, this.encabezados)
  }

}
