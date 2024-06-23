import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'category', component: SingleCategoryComponent },
  // {path: 'about', component: AboutUs},
  { path: 'terms-condition', component: TermsAndConditionComponent },
  { path: 'contact', component: ContactUsComponent },
];
