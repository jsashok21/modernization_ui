import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RqstEntryService {

  constructor() { }
  selectedReq: String[];
  setSelectedRequests(rqs: String[]): void {
    this.selectedReq = rqs;
  }
  getSelectedReqs(): String[] {
    return this.selectedReq;
  }
}
