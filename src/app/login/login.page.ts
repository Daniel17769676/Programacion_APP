import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  password: string = "";

  public progress = 0; // Variable para la barra de progreso
  private intervalId: any; // Variable para almacenar el intervalo

  constructor(private alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }


  login() {

    this.startProgress(); // Iniciar la barra de progreso al hacer login


    if (this.usuario.trim() == 'Daniel' && this.password.trim() == '1234') {
      //this.presentAlert('Correcto'); Cambiamos esta funcion para que redireccione a la pagina home y lo hace con NavigationExtras
      let navigationExtras: NavigationExtras = {
        //State es un objeto que se puede enviar a la siguiente pagina, en este caso se envia el usuario y la contraseña a la pagina home
        state: {
          usuarioEnviado: this.usuario, //En este caso usuarioEnviado se inicializa con this.usuario y this.usuario es el usuario que se ingreso en el input
          passwordEnviado: this.password
        }
        
      }

      setTimeout(() => {


      this.router.navigate(['/home'], navigationExtras);//Con esto se redirecciona a la pagina home

    }, 5000); // Tiempo para la demostración de la barra de progre


    }
    else {
      this.presentAlert('Incorecto');

      this.stopProgress(); // Detener la barra de progreso en caso de error

    }


  }

  //El presentAlert sirve para mostrar un mensaje en pantalla

  async presentAlert(message: string) {
      const alert = await this.alertController.create({
    header: 'Error',
    message: message,
    buttons: ['OK']
  });

    await alert.present();
  }

 // Método para iniciar la barra de progreso
 startProgress() {
  this.progress = 0;
  this.intervalId = setInterval(() => {
    this.progress += 0.01;
    if (this.progress >= 1) {
      clearInterval(this.intervalId);
    }
  }, 50);
}

// Método para detener la barra de progreso
stopProgress() {
  clearInterval(this.intervalId);
  this.progress = 0;
}



}
