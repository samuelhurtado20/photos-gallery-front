import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent,
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent,
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent,
  },
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
