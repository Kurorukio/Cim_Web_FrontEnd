import { Component, OnInit , OnDestroy , ChangeDetectorRef } from '@angular/core';
import { AddClientComponent } from '../add-client/add-client.component';
import { UpdateComponentComponent } from '../update-component/update-component.component';
import { SearchClientComponent } from '../search-client/search-client.component';
import {MatDialog  } from '@angular/material/dialog';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-client-toolbar',
  templateUrl: './client-toolbar.component.html',
  styleUrls: ['./client-toolbar.component.css']
})
export class ClientToolbarComponent implements OnInit   {
  visibleSidebar1: any;

  constructor(private matDialog: MatDialog , private primengConfig: PrimeNGConfig) { }
 

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  openDialogAdd() {
    const diagref = this.matDialog.open(AddClientComponent, {
     width: '1000px',
     height: '1000px',
     disableClose: true ,
     panelClass: 'custom-modalbox',} )
 }
 openDialogUpdate() {
   const diagref = this.matDialog.open(UpdateComponentComponent, {
    width: '1000px',
    height: '1000px',
    disableClose: true,
    panelClass: 'custom-modalbox',} )
}
SearchDialogUpdate() {
 const diagref = this.matDialog.open(SearchClientComponent, {
  width: '1000px',
  height: '1000px',
  disableClose: true,
  panelClass: 'custom-modalbox',} )
}

}
