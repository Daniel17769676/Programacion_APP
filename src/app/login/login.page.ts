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

  constructor(private alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }


  login() {
    if (this.usuario.trim() == 'daniel' && this.password.trim() == '1234') {
      //this.presentAlert('Correcto'); Cambiamos esta funcion para que redireccione a la pagina home y lo hace con NavigationExtras
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
        
      }
      this.router.navigate(['/home'], navigationExtras);//Con esto se redirecciona a la pagina home



    }
    else {
      this.presentAlert('Incorecto');
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

}
