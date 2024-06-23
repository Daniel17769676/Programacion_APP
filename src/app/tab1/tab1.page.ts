import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {


  //Variables para guardar los datos del usuario que inicia sesion desde la BBDD
  usuario_bbdd: any = "";    
  nombre_bbdd: any = ""; 
  peso_bbdd: any = "";
  estatura_bbdd: any = "";
  sexo_bbdd: any = "";
  edad_bbdd: any = "";
  
  constructor(private router: Router, private activaterouter: ActivatedRoute) { 
   
  }

  ngOnInit() {

    //Se obtienen los datos del usuario de la base de datos
    this.usuario_bbdd = localStorage.getItem('usuario');
    this.nombre_bbdd = localStorage.getItem('nombre');
    this.peso_bbdd = localStorage.getItem('peso');
    this.estatura_bbdd = localStorage.getItem('estatura');
    this.sexo_bbdd = localStorage.getItem('sexo');
    this.edad_bbdd = localStorage.getItem('edad');

      }

  // Función que redirige a la página tab2
  IrTab2(){
    this.router.navigate(['/tabs/tab2']);
  }

  //Funcion para ir a la pagina de ejercicios
  ListadoEjercicios(){
    this.router.navigate(['/listado-ejercicios']);
  }
  
  AbrirCamara(){
    this.router.navigate(['/camera']);
  }

  AbrirMapa(){
    this.router.navigate(['/map']);
  }

}
