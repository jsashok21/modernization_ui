import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-adc',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './adc.component.html',
  styleUrl: './adc.component.scss'
})
export class AdcComponent {
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
  adcForm: FormGroup = this.fb.group({
    accountNum: ['8765432087354'],
    creditLimit: ['$5000'],
    cardsNo: ['3'],
    cashLimit: ['$2000'],
    addrLn1: '1211 LEEWAY DRIVE',
    addrLn2: [''],
    addrZip: ['90011'],
    addrCity: ['San Deigo'],
    addrState: ['California'],
    addrCnty: ['United States']
  });
}
