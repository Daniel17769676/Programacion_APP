import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router'; //Se importa NavigationExtras para poder enviar datos a la pagina home
import { AlertController } from '@ionic/angular';
import { DbserviceService } from '../services/servicio-db.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class registroPage implements OnInit {

  usuario: any = "";
  password: any = "";
  nombre: any = "";
  peso: any = "";
  estatura: any = "";
  sexo: any = "";
  edad: any = "";
  animationState: boolean = false;

  //Variable persistente
  usuarioRebidoPersistente: any = "";//Paso 01: Se declara la variable persistente


  isDBReady: boolean = false;


  constructor(private router: Router,
    private activateroute: ActivatedRoute,
    private alertController: AlertController,
    private dbservice: DbserviceService) { }

  ngOnInit() { //El ngOnInit es un metodo que se ejecuta cuando se inicia la pagina

    this.dbservice.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady) {

      }

    });

    //Con estas lineas de codigo se obtienen los datos del LOCAL STORAGE
    this.usuario = localStorage.getItem('usuario');
    this.password = localStorage.getItem('password');
    this.nombre = localStorage.getItem('nombre');
    this.edad = localStorage.getItem('edad');
    this.peso = localStorage.getItem('peso');
    this.estatura = localStorage.getItem('estatura');
    this.sexo = localStorage.getItem('sexo');
    //this.usuarioRecibido = localStorage.getItem('usuario');

    //this.usuarioRebidoPersistente = localStorage.getItem('usuarioRebidoPersistente');//Paso 03: Se obtiene el dato del LOCAL STORAGE

  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK'] //Boton para cerrar el mensaje      
    });
    await alert.present();
  }

  //Funcion para mostrar los datos
  MostrarDatos() {
    if (this.usuario.trim() === '' || this.password.trim() === '' || this.nombre.trim() === '' || this.edad.trim() === '' || this.peso.trim() === '' || this.estatura.trim() === '' || this.sexo.trim() === '') {
    this.presentAlert('Campos vacíos');
    console.log('Campos vacíos');
    } else {
      console.log('Datos mostrados');
      this.presentAlert(
        'Sus datos son:\n' +
        'USUARIO: ' + this.usuario + '\n' +
        'PASSWORD: ' + this.password + '\n' +
        'NOMBRE: ' + this.nombre + '\n' +
        'EDAD: ' + this.edad + '\n' +
        'PESO: ' + this.peso + '\n' +
        'ESTATURA: ' + this.estatura + '\n' +
        'SEXO: ' + this.sexo + '\n'
      );  
      console.log('Datos mostrados');  
    }    
  }



  //Funcion para limpiar los datos
  LimpiarDatos() {
    this.usuario = '';
    this.password = '';
    this.nombre = '';
    this.peso = '';
    this.estatura = '';
    this.sexo = '';
    this.edad = '';
  }

  //Funcion para ir al login o cerrar sesion
  salir() {
    localStorage.clear();//Se limpian los datos del LOCAL STORAGE al cerrar sesion
    console.log('Se limpia el local storage');
    this.router.navigate(['/login']);
    console.log('Navega a login');
  }

  //FUNCION PARA IR A TAB1-HOME Y ENVIAR LOS DATOS
  home() {
    this.router.navigate(['/tabs/tab1']);
    //this.enviarDatosTabs1();
  }


  guardar() {
    if (this.usuario.trim() === '' || this.password.trim() === '' || this.nombre.trim() === '') {
      this.presentAlert('Error: Usuario  password y nombre vacios');
    } else {
      this.guardarDatos();
      this.presentAlert('Datos gurdados exitosamente, saliendo de registro...').then(() => {
        this.salir();
      });
    }
  }

  guardarDatos() {
    this.dbservice.insertUsuario(this.usuario, this.password, this.nombre, this.peso, this.estatura, this.sexo, this.edad)
      .then(() => {
        //this.presentAlert('Datos guardados exitosamente');
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:' + error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      });
  }



}


