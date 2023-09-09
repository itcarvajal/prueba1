import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPaquetesPage } from './crear-paquetes.page';

describe('CrearPaquetesPage', () => {
  let component: CrearPaquetesPage;
  let fixture: ComponentFixture<CrearPaquetesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearPaquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
