import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: './about/about.module#AboutModule' }]),
  Shell.childRoutes([{ path: 'StandardAttributeValueRecommendation', loadChildren: './StandardAttributeValueRecommendation/StandardAttributeValueRecommendation.module#StandardAttributeValueRecommendationModule' }]),
  Shell.childRoutes([{ path: 'useradministration', loadChildren: './useradministration/useradministration.module#UserAdministrationModule' }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
