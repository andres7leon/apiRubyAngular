import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './../services/articulo.service';

@Component({
  selector: 'app-traer-articulos',
  templateUrl: './traer-articulos.component.html',
  styleUrls: ['./traer-articulos.component.css']
})
export class TraerArticulosComponent implements OnInit {

	articulos:any;
  putArticulo:any;
  idPutArticulo:any;

  constructor(private _articulosServices:ArticuloService) {
    this.articulos = [{titulo:"",contenido:""}]
  	this.putArticulo = [{titulo:"",contenido:""}]
    this.idPutArticulo=null;
  }

  ngOnInit() {
  	this.traerArticulos();
  }

  traerArticulos(){
    this._articulosServices.traerArticulos().subscribe(respuesta => {
      this.articulos = respuesta;
      console.log("respuesta",respuesta)
    },error=>{
      console.log("error",error)
    })
  }

  eliminarArticulo(id){

    let confirmar:boolean=confirm("Esta Seguro");

    if(confirm){
      this._articulosServices.eliminarArticulo(id).subscribe(respuesta=>{
        console.log("respuesta",respuesta)

        this.traerArticulos();

      },error=>{
        console.log("error",error)
      })
    }
  }

  modificarArticulo(){

    console.log("entraaa enviar por la url y por el cuerpo")

    /*this._articulosServices.modificarArticulo(this.putArticulo).subscribe(
      respuesta=>{
        console.log("respuesta",respuesta)
      },
      error=>{
        console.log("error put")
      })*/
  }

}
