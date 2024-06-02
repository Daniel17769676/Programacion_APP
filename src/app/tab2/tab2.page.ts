import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

 //Variables que van a recibir los datos del crear rutina
  nombreRutina: string = "";
  tipoRutina: string = "";
  duracionRutina: any = 0;
  diasRutina: any = 0;
  ejerciciosRutina: string = "";
  repeticionesRutina: number = 0;
  seriesRutina: number = 0;
  descansoRutina: any = 0;
  observacionesRutina: string = "";


  constructor(private router: Router, private activaterouter: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {

  }


 //Funcion para boton crear rutina
  anadirRutina(){
      this.router.navigate(['/tabs/tab3']);
      this.enviarDatosTabs3();
    }


  //Definimos la funcion para enviar los datos a tab3
 enviarDatosTabs3() {
    let navigationExtras: NavigationExtras = {
      state: {
        envia_tab2_nombreRutina: this.nombreRutina,
        envia_tab2_tipoRutina: this.tipoRutina,
        envia_tab2_duracionRutina: this.duracionRutina,
        envia_tab2_diasRutina: this.diasRutina,
        envia_tab2_ejerciciosRutina: this.ejerciciosRutina,
        envia_tab2_repeticionesRutina: this.repeticionesRutina,
        envia_tab2_seriesRutina: this.seriesRutina,
        envia_tab2_descansoRutina: this.descansoRutina,
        envia_tab2_observacionesRutina: this.observacionesRutina
        }
    }
    this.router.navigate(['/tabs/tab3'], navigationExtras);//Con esta linea de codigo se envian los datos a la pagina tab1
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: [ 'OK' ] //Boton para cerrar el mensaje      
    });
    await alert.present();
  }

  //Funcion para mostrar los datos
  MostrarDatosTab2() {this.presentAlert
    
    ('Su rutina es:\n' +
      'NOMBRE: ' + this.nombreRutina + '\n' +
      'TIPO: ' + this.tipoRutina + '\n' +
      'DURACION: ' + this.duracionRutina + '\n' +
      'DIAS: ' + this.diasRutina + '\n' +
      'EJERCICIOS: ' + this.ejerciciosRutina + '\n' +
      'REPETICIONES: ' + this.repeticionesRutina + '\n' +
      'SERIES: ' + this.seriesRutina + '\n' +
      'DESCANSO: ' + this.descansoRutina + '\n' +
      'OBSERVACIONES: ' + this.observacionesRutina);
  }


  //Funcion para limpiar los datos
  LimpiarDatosTab2() {
    this.nombreRutina = '';
    this.tipoRutina = '';
    this.duracionRutina = 0;
    this.diasRutina = 0;
    this.ejerciciosRutina = '';
    this.repeticionesRutina = 0;
    this.seriesRutina = 0;
    this.descansoRutina = 0;
    this.observacionesRutina = '';
  }


}
