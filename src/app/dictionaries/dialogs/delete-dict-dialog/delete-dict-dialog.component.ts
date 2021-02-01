import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Dictionary } from '../../models/dictionary';


@Component({
  selector: 'app-delete-dict-dialog',
  templateUrl: './delete-dict-dialog.component.html',
  styleUrls: ['./delete-dict-dialog.component.css']
})
export class DeleteDictDialogComponent implements OnInit {
  
  dict: Dictionary

  constructor(protected dialogRef: NbDialogRef<DeleteDictDialogComponent>) { }

  close(isDeleteApproved: boolean) {
    this.dialogRef.close(isDeleteApproved);
  }

  ngOnInit(): void {
  }

}
