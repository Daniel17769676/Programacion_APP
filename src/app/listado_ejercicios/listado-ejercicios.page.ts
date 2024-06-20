import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listado-ejercicios',
  templateUrl: './listado-ejercicios.page.html',
  styleUrls: ['./listado-ejercicios.page.scss'],
})
export class ListadoEjerciciosPage implements OnInit {

  ejercicios: any[] = [];

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.fetchejercicios();
    
  }

  fetchejercicios(){
    //Realizamos la peticion a la API

    //URL de API NO LOGRADA: https://api.api-ninjas.com/v1/exercises?muscle=

    this.http.get('https://mindicador.cl/api').subscribe((data: any) => {
      //Cuando la peticion sea exitosa, guardamos los datos en la variable ejercicios


      //imprimimos en consola los datos obtenidos
      console.log(Response);

      //Transformamos los datos obtenidos
      //y asignamos los datos transformados a la variable ejercicios

      this.ejercicios = this.transformData(Response);
    });

  }

  transformData(data: any): any []{

    const result = [];


    //Recorremos el arreglo de ejercicios
    for (const key in data){

    
      if (data.hasOwnProperty(key) && typeof data[key] === 'object')
        {

          result.push(data[key]);
        }
      }

      return result;

  }









}
