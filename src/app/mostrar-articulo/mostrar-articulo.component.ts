import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './../services/articulo.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {

	articulo:any;
	
  constructor(private _articuloService:ArticuloService, private ruta:ActivatedRoute) {
  	this.articulo = {nombre:'',contenido:''}
  }

  ngOnInit() {
  	this.ruta.params.subscribe(parametros=>{
  		this.articulo = this._articuloService.mostrarArticulo(parametros['id']).
	  	subscribe(respuesta=>{
	  		this.articulo = respuesta;
	  	},error=>{
	  		console.log("error",error)
	  	});
  	},error=>{})

  	
  }

}
