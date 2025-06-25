# 📱 Programaciòn movil

![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?logo=capacitor&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

**Proyecto académico**: Aplicación móvil híbrida desarrollada con:  
- **Ionic Angular 8.2** + **Angular 17** (Material)  
- **Capacitor 6** para funcionalidades nativas en Android  
- Base de datos local con **SQLite**  

---

## 🚀 El proyecto incluye

- 📷 Cámara: @capacitor/camera

- 🌍 Geolocalización: @capacitor/geolocation

- 💾 Almacenamiento: SQLite (cordova-sqlite-storage)

---

## 🛠️ Stack Tecnológico

| Categoría       | Tecnologías                                                                 | Versión       |  
|-----------------|-----------------------------------------------------------------------------|---------------|  
| **Framework**   | [![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)](https://ionicframework.com/docs/angular) [Ionic Angular 8.2](https://ionicframework.com/docs/angular) + [![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)](https://angular.io/) [Angular 17](https://angular.io/)  | 8.2.2 / 17.3.9|  
| **Nativo**      | [![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?logo=capacitor&logoColor=white)](https://capacitorjs.com/) [Capacitor 6](https://capacitorjs.com/) (Android, Cámara, Geolocalización, SQLite) | 6.0.0         |  
| **UI**          | [![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)](https://material.angular.io/) [Angular Material 17](https://material.angular.io/) + [![Ionicons](https://img.shields.io/badge/Ionicons-79E3F2?logo=ionicons&logoColor=white)](https://ionicons.com/) [Ionicons 7](https://ionicons.com/) | -             |  
| **Lenguaje**    | [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [TypeScript 5.2](https://www.typescriptlang.org/)  | 5.2           |  
| **Base Datos**  | [![SQLite](https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white)](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-db-storage/) [Cordova SQLite Storage](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-db-storage/) | 6.1.0         |  
| **Testing**     | [![Jasmine](https://img.shields.io/badge/Jasmine-8A4184?logo=jasmine&logoColor=white)](https://jasmine.github.io/) [Jasmine](https://jasmine.github.io/) + [![Karma](https://img.shields.io/badge/Karma-0E4B56?logo=karma&logoColor=white)](https://karma-runner.github.io/) [Karma](https://karma-runner.github.io/) | 5.1.0 / 6.4.0 |  


---

## ⚙️ Instalación

### Requisitos previos
- Node.js 18+
- Android Studio (para builds nativos)
- Instalar dependencias: ```npm install```
- Capacitor CLI: ```npm install -g @capacitor/cli```
- Configurar plataforma Android: ```npx cap add android```
- 
---

## 🖥 Desarrollo
- Servidor de desarrollo (hot-reload): ```npm start```
- Build para producción: ```npm run build```
- Sincronizar con Android: ```npx cap sync android```

---

## 📦 Dependencias Clave  
```bash
# Nativas (Capacitor)  
@capacitor/camera ^6.0.1  
@capacitor/geolocation ^6.0.0  
cordova-sqlite-storage ^6.1.0  

# UI  
@angular/material ^17.3.9  
ionicons ^7.0.0
```
