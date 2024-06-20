import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-ejercicios',
  templateUrl: './listado-ejercicios.page.html',
  styleUrls: ['./listado-ejercicios.page.scss'],
})
export class ListadoEjerciciosPage implements OnInit {

  ejercicios: any[] = [];

  private apiKey = 'W5Tr51bwx5YkfrrB58GXFQ==5ZGHhvarZJnEXaO4';//COD API PRIVADA

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchejercicios();
    
  }

  fetchejercicios(){

    const url = `https://api.api-ninjas.com/v1/exercises`;//COD API PRIVADA
    const headers = { 'X-Api-Key': this.apiKey }//COD API PRIVADA


    //Realizamos la peticion a la API


    this.http.get(url, { headers }).subscribe((Response: any) =>{
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

  IraHome(){
    this.router.navigate(['/tabs/tab1']);
  }
  
  salir(){
    this.router.navigate(['//login']);
  }
  
  
}
