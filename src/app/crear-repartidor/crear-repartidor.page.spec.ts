import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearRepartidorPage } from './crear-repartidor.page';

describe('CrearRepartidorPage', () => {
  let component: CrearRepartidorPage;
  let fixture: ComponentFixture<CrearRepartidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
