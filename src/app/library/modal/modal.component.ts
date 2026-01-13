import { Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ChangePage } from '../../components/container-pages/i-type-page';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DataModal {
  title: string,
  description: string,
  activeSecondaryButton: boolean,
  primaryButtonName: string,
  secondaryButtonName?: string
}

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {


  @Output() modalEmit: EventEmitter<any> = new EventEmitter<any>;

  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  readonly dialogRef = inject(MatDialogRef<ModalComponent>);
  dataModal: DataModal = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {

  }

  primaryButtonClicked(): void {
    this.dialogRef.close(false); // Fecha retornando falso
  }

  secondaryButtonClicked(): void {
    this.dialogRef.close(true); // Fecha retornando verdadeiro
  }


}
