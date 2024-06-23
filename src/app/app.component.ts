import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { CategoryNavbarComponent } from "./layouts/category-navbar/category-navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { PostCardComponent } from "./layouts/post-card/post-card.component";
import { SubscriptionComponent } from "./subscription/subscription.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, FooterComponent, PostCardComponent, SubscriptionComponent]
})
export class AppComponent {
  title = 'blog-app';
}
