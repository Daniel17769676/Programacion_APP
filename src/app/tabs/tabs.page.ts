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

  //Metodo para ir a la pagina home (registro) desde TABS
  GoHome(){
    this.router.navigate(['/home']);
  }

}
