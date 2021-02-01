import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-delete-word-dialog',
  templateUrl: './delete-word-dialog.component.html',
  styleUrls: ['./delete-word-dialog.component.css']
})
export class DeleteWordDialogComponent implements OnInit {

  word: string;

  constructor(protected dialogRef: NbDialogRef<DeleteWordDialogComponent>) { }

  close(isDeleteApproved: boolean) {
    this.dialogRef.close(isDeleteApproved);
  }

  ngOnInit(): void {
  }

}
