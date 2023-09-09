import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoPaquetesPage } from './ingreso-paquetes.page';

describe('IngresoPaquetesPage', () => {
  let component: IngresoPaquetesPage;
  let fixture: ComponentFixture<IngresoPaquetesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoPaquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
