import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  public selectedLOB: string = "";
  public selectedTimeView: string = "";

  constructor() { }
}
