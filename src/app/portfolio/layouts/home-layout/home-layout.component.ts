import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { IntroComponent } from "../../components/intro/intro.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { AboutComponent } from "../../components/about/about.component";
import { FooterComponent } from "../../../shared/footer/footer.component";


@Component({
  selector: 'app-store-front-layout',
  imports: [RouterOutlet, NavbarComponent, IntroComponent, ProjectsComponent, AboutComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent {}
