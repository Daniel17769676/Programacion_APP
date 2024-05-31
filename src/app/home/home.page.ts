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
  peso: number = 0;
  estatura: number = 0;
  sexo: string = "";
  fechaNacimiento: Date = new Date();
  nivelActividad: string = "";
  diasSemana: number = 0;
  animationState: boolean = false;
  

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

  //Funcion para mostrar los datos
  MostrarDatos() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Por favor llene todos los campos');
    } else {
      this.presentAlert('Su datos son:\n' +
                        'NOMBRE: '+ this.nombre + '\n'+
                        'APELLIDO: ' +this.apellido + '\n'+
                        'FECHA NACIMIENTO: '+ this.fechaNacimiento + '\n' +
                        'PESO: ' + this.peso + '\n' +
                        'ESTATURA: ' + this.estatura + '\n' +
                        'SEXO: ' + this.sexo + '\n' +
                        'NIVEL DE ACTIVIDAD: ' + this.nivelActividad + '\n' +
                        'DIAS A LA SEMANA: ' + this.diasSemana + '\n');
    }
  }

  //Funcion para limpiar los datos
  LimpiarDatos() {
    this.nombre = '';
    this.apellido = '';
    this.peso = 0;
    this.estatura = 0;
    this.sexo = '';
    this.fechaNacimiento = new Date();
    this.nivelActividad = '';
    this.diasSemana = 0;
 
  }

  //Funcion para ir al login o cerrar sesion
  IrLogin() {
    this.router.navigate(['/login']);
  }

}
