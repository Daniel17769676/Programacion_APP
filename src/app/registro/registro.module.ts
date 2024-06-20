import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { registroPage } from './registro.page';

import { registroPageRoutingModule } from './registro-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    registroPageRoutingModule
    
  ],
  declarations: [registroPage]
})
export class registroPageModule {}
