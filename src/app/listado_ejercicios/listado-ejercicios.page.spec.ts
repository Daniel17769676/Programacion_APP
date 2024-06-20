import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoEjerciciosPage } from './listado-ejercicios.page';

describe('ListadoEjerciciosPage', () => {
  let component: ListadoEjerciciosPage;
  let fixture: ComponentFixture<ListadoEjerciciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
