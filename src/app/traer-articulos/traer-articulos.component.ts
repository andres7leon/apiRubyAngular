import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './../services/articulo.service';

@Component({
  selector: 'app-traer-articulos',
  templateUrl: './traer-articulos.component.html',
  styleUrls: ['./traer-articulos.component.css']
})
export class TraerArticulosComponent implements OnInit {

	articulos:any;
  idPutArticulo:any;
  editar:boolean;
  errores:boolean;
  articuloPut:any;
  msjError:string;

  constructor(private _articulosServices:ArticuloService) {
    this.articulos = [{titulo:"",contenido:""}]
    this.idPutArticulo=null;
    this.editar = false;
    this.errores = false;
    this.msjError ='';
    this.articuloPut = {titulo:"",contenido:"",id:""}
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

  showModificarArticulo(id){

    this.articuloPut.id = JSON.stringify(id);
    this.editar = !this.editar;
    this.errores = false;

  }

  modificarArticulo(){

    console.log("this.articuloPut",this.articuloPut)
    this.errores = false;

    if(this.articuloPut.titulo !== '' && this.articuloPut.contenido !== ''){
      this._articulosServices.modificarArticulo(this.articuloPut).subscribe(
      respuesta=>{
        console.log("respuesta",respuesta)
        this.articuloPut = {titulo:"",contenido:"",id:""}
        this.editar = !this.editar;
        this.traerArticulos()
      },
      error=>{
        console.log("error put")
        this.errores = true;
        this.msjError = 'Este usuario no tiene permiso para modificar este articulo';
      })
    }else{
      this.errores = true;
      this.msjError = 'Por favor valide los campos';

    }


  }



    
}
