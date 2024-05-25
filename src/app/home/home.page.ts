import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  
  usuarioRecibido: string = "";
  passwordRecibido: string = "";
  nombre: string = "";
  apellido: string = "";
  animationState: boolean = false;
  SelectedOption: string = "";
  SelectedDate: string = "";

  constructor(private router: Router, private activateroute: ActivatedRoute, private alertController: AlertController ) {


    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        console.log();

      }
    })

  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    }); 

    await alert.present();
  }


  MostrarDatos() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Por favor llene todos los campos');
    } else {
      this.presentAlert('Su nombre es: ' + this.nombre + ' ' +this.apellido + ' ' + ',' + ' su fecha de nacimiento es: ' + this.SelectedDate + ' ' + 'y' + ' su nivel educacional es: ' + this.SelectedOption);
    }
  }

  LimpiarDatos() {
       this.nombre = '';
    this.apellido = '';
    this.SelectedOption = '';
    this.SelectedDate = '';
  
  }

}
