import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;
  errores = true;

  constructor(private _usuarioService:UsuarioService, private router:Router) {
  	this.formulario = {
  		user:{
  			name:"",
  			email:"",
  			password:"",
  			password_confirmation:""
  		}
  	}
    this.errores = false;
  }

  ngOnInit() {
  }

  crearCuenta(){
    console.log(this.formulario)
    this.errores = false;
    this._usuarioService.crearCuenta(this.formulario)
    .subscribe(respuesta=>{
      let objAuth:any = {
        auth:{
          email:this.formulario.user.email,
          password:this.formulario.user.password
        }
      }
      this._usuarioService.iniciarSesion(objAuth).
      subscribe(respuesta=>{
        localStorage.setItem('SessionToken',respuesta.jwt);
      },error=>{
        console.log("error al iniciar sesion")
      })
      this.router.navigate(['/']);
    },error=>{
      console.log("Error",error);
      this.errores = true;
    });
  }


}
