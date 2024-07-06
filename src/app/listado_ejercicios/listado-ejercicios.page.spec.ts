import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoEjerciciosPage } from './listado-ejercicios.page';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('ListadoEjerciciosPage', () => {
  let component: ListadoEjerciciosPage;
  let fixture: ComponentFixture<ListadoEjerciciosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient]
    });    
    fixture = TestBed.createComponent(ListadoEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
