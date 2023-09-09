import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'repartidores',
    loadChildren: () => import('./repartidores/repartidores.module').then( m => m.RepartidoresPageModule)
  },
  {
    path: 'crear-repartidor',
    loadChildren: () => import('./crear-repartidor/crear-repartidor.module').then( m => m.CrearRepartidorPageModule)
  },
  {
    path: 'crear-paquetes',
    loadChildren: () => import('./crear-paquetes/crear-paquetes.module').then( m => m.CrearPaquetesPageModule)
  },
  {
    path: 'ingreso-paquetes',
    loadChildren: () => import('./ingreso-paquetes/ingreso-paquetes.module').then( m => m.IngresoPaquetesPageModule)
  },
  {
    path: 'perfil-repartidor',
    loadChildren: () => import('./perfil-repartidor/perfil-repartidor.module').then( m => m.PerfilRepartidorPageModule)
  },
  {
    path: 'detalle-paquete',
    loadChildren: () => import('./detalle-paquete/detalle-paquete.module').then( m => m.DetallePaquetePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
