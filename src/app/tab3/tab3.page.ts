import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  //Definimos variables que van a recibir los datos del crear rutina
  recibe_tab2_nombreRutina: string = "";
  recibe_tab2_tipoRutina: string = "";
  recibe_tab2_duracionRutina: any = 0;
  recibe_tab2_diasRutina: any = 0;
  recibe_tab2_ejerciciosRutina: string = "";
  recibe_tab2_repeticionesRutina: number = 0;
  recibe_tab2_seriesRutina: number = 0;
  recibe_tab2_descansoRutina: any = 0;
  recibe_tab2_observacionesRutina: string = "";

  constructor(private router: Router, private activaterouter: ActivatedRoute) {
    this.activaterouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.recibe_tab2_nombreRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_nombreRutina'];
        this.recibe_tab2_tipoRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_tipoRutina'];
        this.recibe_tab2_duracionRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_duracionRutina'];
        this.recibe_tab2_diasRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_diasRutina'];
        this.recibe_tab2_ejerciciosRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_ejerciciosRutina'];
        this.recibe_tab2_repeticionesRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_repeticionesRutina'];
        this.recibe_tab2_seriesRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_seriesRutina'];
        this.recibe_tab2_descansoRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_descansoRutina'];
        this.recibe_tab2_observacionesRutina = this.router.getCurrentNavigation()?.extras?.state?.['envia_tab2_observacionesRutina'];
        console.log();
      }
    }
    )
  }

  ngOnInit() {
  }

}
