import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

	formulario:any;
	errores:boolean;

  constructor(private _usuariosService:UsuarioService, private router:Router) {
  	this.formulario = {
  		auth: {
  			email:"",
  			password:""
  		}
  	}
  	this.errores = false;
  }

  ngOnInit() {
  }

  iniciarSesion(){
  	this.errores = false;
  	this._usuariosService.iniciarSesion(this.formulario)
  	.subscribe(respuesta=>{
  		localStorage.setItem('SessionToken',respuesta.jwt);
  		this.router.navigate(['/']);
  	},error=>{
  		console.log("Error",error);
  		this.errores = true;
  	});
  }

}
