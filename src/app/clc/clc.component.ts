import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-clc',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './clc.component.html',
  styleUrl: './clc.component.scss'
})
export class ClcComponent {
  readonly panelOpenState = signal(true);
  private fb = inject(FormBuilder);
  addressData = {
    addrLn1: '1211 LEEWAY DRIVE',
    addrLn2: [''],
    addrZip: ['90011'],
    addrCity: ['San Deigo'],
    addrState: ['California'],
    addrCnty: ['United States']
  }
  clcReqForm: FormGroup = this.fb.group({
    accountNum: ['8765432087354'],
    clcLimit: [''],
    newCreditLimit: ['$7000'],
    cashLimit: ['$2000']
  });
  ngOnInit(): void {
  }
}
