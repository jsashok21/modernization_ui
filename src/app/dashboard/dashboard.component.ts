import { Component } from '@angular/core';
import { SummaryComponent } from "../summary/summary.component";
import { BarchartComponent } from '../barchart/barchart.component';
import { DonutComponent } from '../donut/donut.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [SummaryComponent, BarchartComponent, DonutComponent, MatCardModule, MatButtonModule, MatDivider]
})
export class DashboardComponent {
}
