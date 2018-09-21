import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './../services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

	articulo:any;

  constructor(private _articulosService:ArticuloService, private router:Router) { 

  	this.articulo = {titulo:'',contenido:''}

  }

  ngOnInit() {
  }


  crearArticulo(){

  	this._articulosService.crearArticulo(this.articulo).subscribe(
  		respuesta=>{
  			console.log("creado con exito2",respuesta)
  			this.router.navigate(['/articulo',respuesta.id])
  		},
  		error=>{
  			console.log("error al crear")	
  		});

  }

}
