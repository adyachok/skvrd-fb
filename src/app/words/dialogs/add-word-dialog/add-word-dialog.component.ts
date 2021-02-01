import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import * as _ from 'lodash';
import { Word } from '../../models/word';

@Component({
  selector: 'app-add-word-dialog',
  templateUrl: './add-word-dialog.component.html',
  styleUrls: ['./add-word-dialog.component.css']
})
export class AddWordDialogComponent implements OnInit {

  word: Word

  constructor(protected dialogRef: NbDialogRef<AddWordDialogComponent>) { 
    this.word = new Word(undefined, ['']);
  }

  close(save: boolean) {
    if (save) {
      const foreign = this.word.foreign;
      const translations = this.word.translations;
      const foreignCondition = foreign && foreign.length
      const translationsCondition = translations.length > 0 && this.checkTranslationsOnEmpty(translations)
      if (!foreignCondition && !translationsCondition) {
        save = false;
        this.word = undefined;
      }
    }    
    this.dialogRef.close({saved: save, addWord: this.word});
  }

  checkTranslationsOnEmpty(translations) {
    const translationsLength = _.map(translations, (t) => t.length);
    const minTranslation = _(translationsLength).sortBy().sortedUniq().head();
    return minTranslation > 0
  }

  addTranslation(evt) {
    evt.target.hidden = true;
  }

  ngOnInit(): void {
  }

}
