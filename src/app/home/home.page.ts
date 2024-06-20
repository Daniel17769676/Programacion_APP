import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router'; //Se importa NavigationExtras para poder enviar datos a la pagina home
import { AlertController } from '@ionic/angular';
import { DbserviceService } from '../services/servicio-db.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
  
export class HomePage implements OnInit{

  //usuarioRecibido: any = "";
  //passwordRecibido: string = "";
  usuario: any = "";
  password: any = "";
  nombre: any = "";
  apellido: any = "";
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
              private dbservice: DbserviceService) { 

    /*
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];


        //Con estas lineas de codigo se RECIBE el dato de usuario del LOGIN y se guarda en el LOCAL STORAGE
        localStorage.setItem('usuarioRebidoPersistente', this.usuarioRecibido);//Paso 02: Se guarda el dato en el LOCAL STORAGE




        console.log();

    

      }
    })
      */

  }

  ngOnInit() { //El ngOnInit es un metodo que se ejecuta cuando se inicia la pagina

    this.dbservice.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady){
       
      }

    });
  
    //Con estas lineas de codigo se obtienen los datos del LOCAL STORAGE
    this.usuario = localStorage.getItem('usuario');
    this.password = localStorage.getItem('password');
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
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
      buttons: [ 'OK' ] //Boton para cerrar el mensaje      
    });
    await alert.present();
  }

  //Funcion para mostrar los datos
  MostrarDatos(){ this.presentAlert
        ('Su datos son:\n' +
        'USUARIO: ' + this.usuario + '\n' +
        'PASSWORD: ' + this.password + '\n' +
        'NOMBRE: ' + this.nombre + '\n' +        
        'EDAD: ' + this.edad + '\n' +
        'PESO: ' + this.peso + '\n' +
        'ESTATURA: ' + this.estatura + '\n' +
        'SEXO: ' + this.sexo + '\n'
        );


        //Con estas lineas de codigo se guardan los datos en el LOCAL STORAGE
        localStorage.setItem('usuario', this.usuario);
        localStorage.setItem('password', this.password);        
        localStorage.setItem('nombre', this.nombre);
        localStorage.setItem('apellido', this.apellido);
        localStorage.setItem('edad', this.edad);
        localStorage.setItem('peso', this.peso);
        localStorage.setItem('estatura', this.estatura);
        localStorage.setItem('sexo', this.sexo);
      //localStorage.setItem('usuario', this.usuarioRecibido);
      }
  
  
  //Funcion para limpiar los datos
  LimpiarDatos() {
    this.usuario = '';
    this.password = '';
    this.nombre = '';
    this.apellido = '';
    this.peso = '';
    this.estatura = '';
    this.sexo = '';
    this.edad = '';
  }

  //Funcion para ir al login o cerrar sesion
  CerrarSesionHome() {
    localStorage.clear();//Se limpian los datos del LOCAL STORAGE al cerrar sesion
    this.router.navigate(['/login']);
    console.log('Sesion cerrada');
    
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
        envia_usu_home_edad: this.edad
      }
    }
    this.router.navigate(['/tabs/tab1'], navigationExtras);//Con esta linea de codigo se envian los datos a la pagina tab1
  }


  //FUNCION PARA IR A TAB1-HOME Y ENVIAR LOS DATOS
  IrTab1() {
    this.router.navigate(['/tabs/tab1']);
    this.enviarDatosTabs1();
  }


  guardar() {
    if (this.usuario.trim() === '' || this.password.trim() === '' || this.nombre.trim() === '') {
      this.presentAlert('Error: Usuario  password y nombre vacios');
    } else {
      this.guardarDatos();  
    }
  } 

  guardarDatos() {
    this.dbservice.insertUsuario(this.usuario, this.password, this.nombre, this.peso, this.estatura, this.sexo, this.edad)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:'+ error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      });
  }
  

}
    

