import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2Page } from './tab2.page';
import { ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';


describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

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
      declarations: [Tab2Page],
      providers:[{ provide: ActivatedRoute, useValue: activatedRouteMock }]
    }).compileComponents(); 
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
