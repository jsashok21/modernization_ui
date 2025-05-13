import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-rrv',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './rrv.component.html',
  styleUrl: './rrv.component.scss'
})
export class RrvComponent {
  readonly panelOpenState = signal(true);
  private fb = inject(FormBuilder);
  rrvForm: FormGroup = this.fb.group({
    accountNum: ['8765432087354']
  });
}
