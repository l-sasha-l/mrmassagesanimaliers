import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ContactComponent } from './contact/contact.component';

// const routes: Routes = [
//   { path: '', component: PresentationComponent },
//   { path: '', component: TarifsComponent },
//   { path: '', component: ContactComponent },
//   { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirige vers la présentation par défaut
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
