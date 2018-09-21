import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { UsuarioService } from './services/usuario.service'
import { ArticuloService } from './services/articulo.service'
import { SesionGuard } from './guards/sesion.guard';

import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { TraerArticulosComponent } from './traer-articulos/traer-articulos.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';


const rutas:Routes = [
  {path:'',component:InicioComponent},
  {path:'crear_cuenta',component:CrearCuentaComponent},
  {path:'articulo/:id',component:MostrarArticuloComponent,canActivate:[SesionGuard]},
	{path:'articulos',component:TraerArticulosComponent,canActivate:[SesionGuard]},
  {path:'crear_articulo',component:CrearArticuloComponent,canActivate:[SesionGuard]},
  {path:'iniciar_sesion',component:IniciarSesionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    InicioComponent,
    CabeceraComponent,
    PiePaginaComponent,
    CrearCuentaComponent,
    TraerArticulosComponent,
    MostrarArticuloComponent,
    CrearArticuloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [UsuarioService,ArticuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
