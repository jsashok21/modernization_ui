import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdcComponent } from '../adc/adc.component';
import { ClcComponent } from '../clc/clc.component';
import { CliComponent } from '../cli/cli.component';
import { PinComponent } from '../pin/pin.component';
import { RrvComponent } from '../rrv/rrv.component';
import { SpinnerService } from '../services/spinner.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { NgIf } from '@angular/common';
import { RqstEntryService } from '../rqst-entry.service';

@Component({
  selector: 'app-rqst-entry',
  imports: [MatListModule, FormsModule, ReactiveFormsModule, CliComponent, RrvComponent,PinComponent,AdcComponent,ClcComponent, MatButtonModule,NgIf],
  templateUrl: './rqst-entry.component.html',
  styleUrl: './rqst-entry.component.scss'
})
export class RqstEntryComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 5;
  form: FormGroup;
  requestTypes = [
    { value: 'CLI', name: 'Credit Line Increase' },
    { value: 'RRV', name: 'Risk Review' },
    { value: 'PIN', name: 'PIN Change' },
    { value: 'ADC', name: 'Additional Card' },
    { value: 'CLC', name: 'Cash Line Change' },
  ];
  requestTypesCtrl = new FormControl();
  subs = new Subscription();
  selectedRqs: String[] = []
  constructor(private route: Router,private spinnySvc: SpinnerService, private rqstSvc: RqstEntryService) {
    this.form = new FormGroup({
      requestTypes: this.requestTypesCtrl,
    });
  }

  ngOnInit(): void {
    this.subs.add(this.form.get('requestTypes')?.valueChanges.subscribe(rq => {
      this.selectedRqs = rq;
    }))
  }
  openSnackBar() {
    this.rqstSvc.setSelectedRequests(this.selectedRqs);
      this.spinnySvc.adjustSpinnerDisp(true);
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds * 1000,
      });
      setTimeout(() => {
        this.spinnySvc.adjustSpinnerDisp(false);
        this.route.navigate(['decision']);
      }, 10000);
  
    }
}
