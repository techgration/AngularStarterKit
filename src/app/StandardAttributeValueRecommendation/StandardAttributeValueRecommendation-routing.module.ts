import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { StandardAttributeValueRecommendationComponent } from './StandardAttributeValueRecommendation.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: StandardAttributeValueRecommendationComponent, data: { title: extract('StandardAttributeValueRecommendation') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class StandardAttributeValueRecommendationRoutingModule {}
