import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RqstEntryService } from '../rqst-entry.service';

@Component({
  selector: 'app-decision',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.scss'
})
export class DecisionComponent implements OnInit {
  constructor(private rqsSvc: RqstEntryService) { }
  selectedRqs: String[];
  ngOnInit(): void {
    this.selectedRqs = this.rqsSvc.getSelectedReqs();
  }
}
