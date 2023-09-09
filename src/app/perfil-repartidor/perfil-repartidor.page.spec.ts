import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilRepartidorPage } from './perfil-repartidor.page';

describe('PerfilRepartidorPage', () => {
  let component: PerfilRepartidorPage;
  let fixture: ComponentFixture<PerfilRepartidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilRepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
