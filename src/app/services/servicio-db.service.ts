import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public db!: SQLiteObject 
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private sqlite: SQLite, private toastController: ToastController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.initDataBase();
    });
  }

  private initDataBase() {
    this.sqlite.create({
      name: 'danieldb.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
      this.isDBReady.next(true);
      this.presentToast('Base de datos creada con éxito');
    })
    .catch(error => {
      console.error('Error al abrir la base de datos:', error);
      this.presentToast('Error al abrir la base de datos: ' + error);
      this.isDBReady.next(false);
    });
  }

  private createTables() {
    if (this.db) {
      this.db.executeSql(
        'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, password TEXT, nombre TEXT, peso TEXT, estatura TEXT, sexo TEXT, edad TEXT)', [])
        .then(() => this.presentToast('Tabla usuarios creada con éxito'))
        .catch(error => {
          console.error('Error al crear tabla usuarios:', error);
          this.presentToast('Error al crear tabla usuarios: ' + error);
        });
    } else {
      console.error('La base de datos no está inicializada.');
      this.presentToast('Error: Base de datos no inicializada');
    }
  }

  validarUsuario(usuario: string, password: string) {
    if (this.db) {
      return this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password])
        .then((res) => {
          if (res.rows.length > 0) {
            return res.rows.item(0);
          } else {
            return null;
          }
        })
        .catch(error => {
          console.error('Error al validar usuario:', error);
          this.presentToast('Error al validar usuario por credenciales: ' + error);
          throw error;
        });
    } else {
      this.presentToast('Error: Ingrese Usuario y Contraseña');
      console.error('La base de datos no está inicializada.');
      return Promise.reject('Base de datos no inicializada');
    }
  }

  insertUsuario(usuario: string, password: string, nombre: string, peso: string, estatura: string, sexo: string, edad: string) {
    if (this.db) {
      return this.db.executeSql('INSERT INTO usuarios (usuario, password, nombre, peso, estatura, sexo, edad) VALUES (?,?,?,?,?,?,?);',
        [usuario, password, nombre, peso, estatura, sexo, edad])
        .then(() => this.presentToast('Usuario insertado con éxito'))
        .catch(error => {
          console.error('Error al insertar usuario:', error);
          this.presentToast('Error al insertar usuario: ' + error);
          throw error;
        });
    } else {
      console.error('La base de datos no está inicializada.');
      this.presentToast('Error: Base de datos no inicializada');
      return Promise.reject('Base de datos no inicializada');
    }
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getIsDBReady() {
    return this.isDBReady.asObservable();
  }
}

