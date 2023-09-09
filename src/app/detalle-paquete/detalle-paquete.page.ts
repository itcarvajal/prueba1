import { Component, OnInit } from '@angular/core';
import { PaquetesService } from '../paquetes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-paquete',
  templateUrl: './detalle-paquete.page.html',
  styleUrls: ['./detalle-paquete.page.scss'],
})
export class DetallePaquetePage implements OnInit {

  paquetes: any[] = [];

  constructor(
    private router:Router,
    private paquetesServices:PaquetesService
  ) { }

  ngOnInit() {
    this.paquetes = this.paquetesServices.obtenerPaquetes();
  }
  Atras6(){
    this.router.navigateByUrl('/home')
  }

}
