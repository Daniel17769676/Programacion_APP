import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from '../services/servicio-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private alertController: AlertController,
              private router: Router,
              private dbservice: DbserviceService) { }

  usuario: any = "";
  password: any = "";
  sesionactiva: any = "";
  mensaje: any = "";

  public progress = 0; // Variable para la barra de progreso
  private intervalId: any; // Variable para almacenar el intervalo



  ngOnInit() { // Método que se ejecuta al iniciar la página

    /*
    this.sesionactiva = localStorage.getItem('sesionactiva'); // Se obtiene el valor de la variable sesionactiva del localStorage
    if (this.sesionactiva == 'SI') 
    { 
      this.mensaje('Sesión activa'); // Si la variable es igual a 'SI' se muestra un mensaje
    }
    else
    {
      this.mensaje('Sesión NO activa'); // Si la variable es igual a 'NO' se muestra un mensaje
    }
*/
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }



  async login() {

    this.startProgress(); // Iniciar la barra de progreso al hacer login      

    //Validar usuario en la base de datos
    const usuario = await this.dbservice.validarUsuario(this.usuario, this.password);
    if (usuario) {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
      }
      //setTimeout(() => {
        this.router.navigate(['tabs/tab1'], navigationExtras);//Con esto se redirecciona a la pagina home
      //}, 5000); // Tiempo barra de progreso
    } else {
      //Usuario no encontrado
      this.presentAlert('Usuario o contraseña incorrectos');
    }
  }

  CrearCuenta()
  {
    this.router.navigate(['/home']); // Redireccionar a la página de registro
  }




  //El presentAlert sirve para mostrar un mensaje en pantalla

 

  // Método para iniciar la barra de progreso
  startProgress() {
    this.progress = 0;
    this.intervalId = setInterval(() => {
      this.progress += 0.01;
      if (this.progress >= 1) {
        clearInterval(this.intervalId);
      }
    }, 30);
  }

  // Método para detener la barra de progreso
  stopProgress() {
    clearInterval(this.intervalId);
    this.progress = 0;
  }

}