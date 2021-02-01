import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Word } from '../../models/word';


@Component({
  selector: 'app-edit-word-dialog',
  templateUrl: './edit-word-dialog.component.html',
  styleUrls: ['./edit-word-dialog.component.css']
})
export class EditWordDialogComponent implements OnInit {

  word: Word;

  constructor(protected dialogRef: NbDialogRef<EditWordDialogComponent>) { }

  close(save: boolean) {
    this.dialogRef.close({save: save, editedWord: this.word});
  }

  deleteTranslation(evt, index) {
    this.word.translations.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
