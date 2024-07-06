import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { registroPage } from './registro.page';
import { of } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbserviceService } from '../services/servicio-db.service';

describe('registroPage', () => {
  let component: registroPage;
  let fixture: ComponentFixture<registroPage>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => '123' 
      }
    },
    params: of({ id: '123' })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({      
      declarations: [registroPage],
      providers:[{ provide: ActivatedRoute, useValue: activatedRouteMock, SQLite, DbserviceService}]
    }).compileComponents();
    fixture = TestBed.createComponent(registroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
