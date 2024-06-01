import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private router: Router, private activaterouter: ActivatedRoute) { }

  ngOnInit() {
  }


 //Funcion para boton crear rutina
  anadirRutina(){
    this.router.navigate(['/tabs/tab3']);
    }



}
