import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  //Definimos variables que van a recibir los datos del crear rutina
  recibe_tab2_nombreRutina: any = "";
  recibe_tab2_tipoRutina: any = "";
  recibe_tab2_duracionRutina: any = "";
  recibe_tab2_diasRutina: any = "";
  recibe_tab2_ejerciciosRutina: any = "";
  recibe_tab2_repeticionesRutina: any = "";
  recibe_tab2_seriesRutina: any = "";
  recibe_tab2_descansoRutina: any = "";
  recibe_tab2_observacionesRutina: any = "";



  //Variables persistentes
  nombreRutinaPersistente: any = "";
  tipoRutinaPersistente: any = "";
  duracionRutinaPersistente: any = "";
  diasRutinaPersistente: any = "";
  ejerciciosRutinaPersistente: any = "";
  repeticionesRutinaPersistente: any = "";
  seriesRutinaPersistente: any = "";
  descansoRutinaPersistente: any = "";
  observacionesRutinaPersistente: any = "";



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


        //Se reciben los datos de tab2 y se guardan en el LOCAL STORAGE
        localStorage.setItem('nombreRutinaPersistente', this.recibe_tab2_nombreRutina);
        localStorage.setItem('tipoRutinaPersistente', this.recibe_tab2_tipoRutina);
        localStorage.setItem('duracionRutinaPersistente', this.recibe_tab2_duracionRutina);
        localStorage.setItem('diasRutinaPersistente', this.recibe_tab2_diasRutina);
        localStorage.setItem('ejerciciosRutinaPersistente', this.recibe_tab2_ejerciciosRutina);
        localStorage.setItem('repeticionesRutinaPersistente', this.recibe_tab2_repeticionesRutina);
        localStorage.setItem('seriesRutinaPersistente', this.recibe_tab2_seriesRutina);
        localStorage.setItem('descansoRutinaPersistente', this.recibe_tab2_descansoRutina);
        localStorage.setItem('observacionesRutinaPersistente', this.recibe_tab2_observacionesRutina);

        console.log();
      }
    }
    )
  }

  ngOnInit() {

     //Cuando carga la pagina se obtienen los datos del LOCAL STORAGE
    this.nombreRutinaPersistente = localStorage.getItem('nombreRutinaPersistente');
    this.tipoRutinaPersistente = localStorage.getItem('tipoRutinaPersistente');
    this.duracionRutinaPersistente = localStorage.getItem('duracionRutinaPersistente');
    this.diasRutinaPersistente = localStorage.getItem('diasRutinaPersistente');
    this.ejerciciosRutinaPersistente = localStorage.getItem('ejerciciosRutinaPersistente');
    this.repeticionesRutinaPersistente = localStorage.getItem('repeticionesRutinaPersistente');
    this.seriesRutinaPersistente = localStorage.getItem('seriesRutinaPersistente');
    this.descansoRutinaPersistente = localStorage.getItem('descansoRutinaPersistente');
    this.observacionesRutinaPersistente = localStorage.getItem('observacionesRutinaPersistente');


  }

}
