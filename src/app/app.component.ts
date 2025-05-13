import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgClass } from '@angular/common';
import { SpinnerService } from './services/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavigationComponent, MatProgressSpinnerModule, NgClass]
})
export class AppComponent implements OnInit {
  isSpinnerOn: boolean
  constructor(private spinnySvc: SpinnerService) {

  }
  ngOnInit(): void {
    this.spinnySvc.spinnerOn.subscribe(data => this.isSpinnerOn = data);
  }
}
