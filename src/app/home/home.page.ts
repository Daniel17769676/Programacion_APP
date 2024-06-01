import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router'; //Se importa NavigationExtras para poder enviar datos a la pagina home
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
  edad: number = 0;
  nivelActividad: string = "";
  diasSemana: number = 0;
  animationState: boolean = false;


  constructor(private router: Router, private activateroute: ActivatedRoute, private alertController: AlertController) {


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
      buttons: [ 'OK' ] //Boton para cerrar el mensaje      
    });
    await alert.present();
  }

  //Funcion para mostrar los datos
  MostrarDatos(){ this.presentAlert
        ('Su datos son:\n' +
        'NOMBRE: ' + this.nombre + '\n' +
        'APELLIDO: ' + this.apellido + '\n' +
        'EDAD: ' + this.edad + '\n' +
        'PESO: ' + this.peso + '\n' +
        'ESTATURA: ' + this.estatura + '\n' +
        'SEXO: ' + this.sexo + '\n' +
        'NIVEL DE ACTIVIDAD: ' + this.nivelActividad + '\n' +
        'DIAS A LA SEMANA: ' + this.diasSemana + '\n');          
      }
  
  
  //Funcion para limpiar los datos
  LimpiarDatos() {
    this.nombre = '';
    this.apellido = '';
    this.peso = 0;
    this.estatura = 0;
    this.sexo = '';
    this.edad = 0;
    this.nivelActividad = '';
    this.diasSemana = 0;
  }

  //Funcion para ir al login o cerrar sesion
  IrLogin() {
    this.router.navigate(['/login']);
  }


  //Funcion para ir a las paginas Tab1, Tab2, Tab3
  IrTabs() {
    this.router.navigate(['/tabs']);
  }

  //Definimos la funcion para enviar los datos a la pagina tab1
  enviarDatosTabs1() {
    let navigationExtras: NavigationExtras = {
      state: {
        envia_usu_home_nombre: this.nombre,
        envia_usu_home_apellido: this.apellido,
        envia_usu_home_peso: this.peso,
        envia_usu_home_estatura: this.estatura,
        envia_usu_home_sexo: this.sexo,
        envia_usu_home_edad: this.edad,
        envia_usu_home_nivelActividad: this.nivelActividad,
        envia_usu_home_diasSemana: this.diasSemana
      }
    }
    this.router.navigate(['/tabs/tab1'], navigationExtras);//Con esta linea de codigo se envian los datos a la pagina tab1
  }


  //FUNCION PARA IR A TAB1
  IrTab1() {
    this.router.navigate(['/tabs/tab1']);
    this.enviarDatosTabs1();
  }

}
    

