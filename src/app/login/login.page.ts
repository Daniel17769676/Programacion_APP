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
  mensaje: any = "";
  
  ngOnInit() { // Método que se ejecuta al iniciar la página

    this.usuario = ""; // Limpiar el campo de usuario
    this.password = ""; // Limpiar el campo de contraseña

  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  CrearCuenta() {
    this.router.navigate(['/registro']); // Redireccionar a la página de registro
  }

  async login() {

    //Validar usuario en la base de datos
    const usuario = await this.dbservice.validarUsuario(this.usuario, this.password);
    if (usuario) {     
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
      };
 
      this.router.navigate(['tabs/tab1'], navigationExtras);//Con esto se redirecciona a la pagina home
    } else {
      //Usuario no encontrado
      this.presentAlert('Usuario o contraseña incorrectos');
    }     

  }


}