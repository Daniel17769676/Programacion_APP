import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

    //Definimos variables que van a recibir los datos del home/registro
        recibe_usu_home_nombre: string = "";
        recibe_usu_home_apellido: string = "";
        recibe_usu_home_peso: number = 0;
        recibe_usu_home_estatura: number = 0;
        recibe_usu_home_sexo: string = "";
        recibe_usu_home_edad: number = 0;
        recibe_usu_home_nivelActividad: string = "";
        recibe_usu_home_diasSemana: number = 0;
   

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

        console.log();
      }
    })

  }

  ngOnInit() {
  }

  // Función que redirige a la página tab2
  IrTab2(){
    this.router.navigate(['/tabs/tab2']);
  }

}
