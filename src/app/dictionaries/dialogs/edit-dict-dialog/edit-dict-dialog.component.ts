import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Dictionary } from '../../models/dictionary';


@Component({
  selector: 'app-edit-dict-dialog',
  templateUrl: './edit-dict-dialog.component.html',
  styleUrls: ['./edit-dict-dialog.component.css']
})
export class EditDictDialogComponent implements OnInit {
  
  dict: Dictionary;

  constructor(protected dialogRef: NbDialogRef<EditDictDialogComponent>) { }

  close(save: boolean) {
    this.dialogRef.close({save: save, editedDict: this.dict});
  }

  ngOnInit(): void {
  }

}
