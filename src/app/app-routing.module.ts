import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'presentation', component: PresentationComponent },
  // { path: 'tarifs', component: TarifsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirige vers la présentation par défaut
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
