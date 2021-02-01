import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Dictionary } from '../../models/dictionary';



@Component({
  selector: 'app-merge-dialog',
  templateUrl: './merge-dialog.component.html',
  styleUrls: ['./merge-dialog.component.css']
})
export class MergeDialogComponent implements OnInit {

  dicts: Dictionary[]
  newDictName: string = undefined


  constructor(protected dialogRef: NbDialogRef<MergeDialogComponent>) { }

  close(isMergeApproved: boolean) {
    if (!this.newDictName && isMergeApproved) {
      return;
    }
    this.dialogRef.close({approved: isMergeApproved, newName: this.newDictName});
  }

  ngOnInit(): void {
  }

}
