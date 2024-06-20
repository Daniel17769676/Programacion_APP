import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {

    //Definimos variables que van a recibir los datos del home/registro
        recibe_usu_home_nombre: any = "";
        recibe_usu_home_apellido: any = "";
        recibe_usu_home_peso: any = "";
        recibe_usu_home_estatura: any = "";
        recibe_usu_home_sexo: any = "";
        recibe_usu_home_edad: any = "";
        recibe_usu_home_nivelActividad: any = "";
        recibe_usu_home_diasSemana: any = "";

        //Variables persistentes/ Paso 01: Se declaran las variables persistentes
        recibe_usu_home_nombre_persistente: any = "";
        recibe_usu_home_peso_persistente: any = "";
        recibe_usu_home_estatura_persistente: any = "";
        recibe_usu_home_sexo_persistente: any = "";
        
        


   

  constructor(private router: Router, private activaterouter: ActivatedRoute) { 

    //Recibimos los datos del home/registro
    this.activaterouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.recibe_usu_home_nombre = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_nombre'];
        this.recibe_usu_home_apellido = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_apellido'];
        this.recibe_usu_home_peso = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_peso'];
        this.recibe_usu_home_estatura = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_estatura'];
        this.recibe_usu_home_sexo = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_sexo'];
        this.recibe_usu_home_edad = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_edad'];
        this.recibe_usu_home_nivelActividad = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_nivelActividad'];
        this.recibe_usu_home_diasSemana = this.router.getCurrentNavigation()?.extras?.state?.['envia_usu_home_diasSemana'];



        //Se reciben los datos del home/registro y se guardan en el LOCAL STORAGE/Paso 02: Se guardan los datos en el LOCAL STORAGE
        localStorage.setItem('recibe_usu_home_nombre_persistente', this.recibe_usu_home_nombre);
        localStorage.setItem('recibe_usu_home_peso_persistente', this.recibe_usu_home_peso);
        localStorage.setItem('recibe_usu_home_estatura_persistente', this.recibe_usu_home_estatura);
        localStorage.setItem('recibe_usu_home_sexo_persistente', this.recibe_usu_home_sexo);
        
        console.log();
      }
    })

  }

  ngOnInit() {

    //Cuando carga la pagina se obtienen los datos del LOCAL STORAGE/Paso 03: Se obtienen los datos del LOCAL STORAGE
    this.recibe_usu_home_nombre_persistente = localStorage.getItem('recibe_usu_home_nombre_persistente');
    this.recibe_usu_home_peso_persistente = localStorage.getItem('recibe_usu_home_peso_persistente');
    this.recibe_usu_home_estatura_persistente = localStorage.getItem('recibe_usu_home_estatura_persistente');
    this.recibe_usu_home_sexo_persistente = localStorage.getItem('recibe_usu_home_sexo_persistente');
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


}
