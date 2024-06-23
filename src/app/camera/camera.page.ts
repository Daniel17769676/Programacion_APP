import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
  }


  async takePicture() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });


      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto.webPath!);


      // Si deseas mostrar la imagen inmediatamente, puedes establecerla en el template
      // <img [src]="image" *ngIf="image">
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

  IraHome() {
    this.router.navigate(['/tabs/tab1']);
  }

  salir() {
    this.router.navigate(['//login']);
  }


}
