import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab3Page } from './tab3.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  const activatedRouteMock = {
    params: of({ id: '123' }) 
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab3Page],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
