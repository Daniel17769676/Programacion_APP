import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1Page } from './tab1.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => '123'
      }
    },
    params: of({ id: '123' })
  };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }]
    }).compileComponents();
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
