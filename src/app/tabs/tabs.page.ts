import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  //Metodo para ir a la pagina registro desde TABS
  Registro(){
    this.router.navigate(['/registro']);
  }


    //Funcion para ir al login o cerrar sesion
    CerrarSesionTabs() {
      this.router.navigate(['/login']);
      localStorage.clear();//Se limpia el local storage al cerrar sesion
      }
    

}
