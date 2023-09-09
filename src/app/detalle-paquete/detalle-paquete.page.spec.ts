import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePaquetePage } from './detalle-paquete.page';

describe('DetallePaquetePage', () => {
  let component: DetallePaquetePage;
  let fixture: ComponentFixture<DetallePaquetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallePaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
