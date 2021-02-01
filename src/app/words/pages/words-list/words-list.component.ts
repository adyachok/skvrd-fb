import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddWordDialogComponent } from '../../dialogs/add-word-dialog/add-word-dialog.component';
import { DeleteWordDialogComponent } from '../../dialogs/delete-word-dialog/delete-word-dialog.component';
import { EditWordDialogComponent } from '../../dialogs/edit-word-dialog/edit-word-dialog.component';
import { Word } from '../../models/word';
import * as _ from "lodash";

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

  words: Word[];

  constructor(private dialogService: NbDialogService) {
    this.words = [
      new Word('mother', ['мама', 'матуся', 'мамуся']),
      new Word('go', [
        'обставина',
        'спроба',
        'ходьба',
        'брати на себе',
        'подаватися',
        'сходити',
        'іти',
        'податися',
        'функціонувати',
        'їздити',
        'подітися',
        'ходити'
      ]),
      new Word('do', [
        'дія',
        'розвага',
        'угода',
        'вдіяти',
        'діяти',
        'завдавати',
        'робити',
        'творити',
        'чинити',
        'виконати'
      ])
    ]
  }

  edit(evt, wordIndex) {
     // console.log(i);
     const editedWord = _.cloneDeep(this.words[wordIndex]);
     this.openEditDialog(editedWord, wordIndex);
  }

  openEditDialog(editWord: Word, wordIndex: number) {
    this.dialogService.open(EditWordDialogComponent, { context: { word: editWord } })
      .onClose.subscribe(result => {
        if (result.save) {
          this.words[wordIndex] = result.editedWord;
        }
      });
  }

  delete(evt, wordIndex: number) {
    this.dialogService.open(DeleteWordDialogComponent, 
      { context: { word: this.words[wordIndex].foreign } })
            .onClose.subscribe(result => {
          if (result) {
            this.words.splice(wordIndex, 1);
          }
      })
  }

  addWord(evt) {
    this.dialogService.open(AddWordDialogComponent).onClose.subscribe(result => {
      if (result && result.saved) {
        // add new word
      }
    })
  }


  ngOnInit(): void {
  }

}
