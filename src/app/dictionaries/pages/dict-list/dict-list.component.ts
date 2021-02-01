import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DeleteDictDialogComponent } from '../../dialogs/delete-dict-dialog/delete-dict-dialog.component';
import { EditDictDialogComponent } from '../../dialogs/edit-dict-dialog/edit-dict-dialog.component';
import { MergeDialogComponent } from '../../dialogs/merge-dialog/merge-dialog.component';
import { Dictionary } from '../../models/dictionary';
import { DictService } from '../../services/dict.service';

@Component({
  selector: 'app-dict-list',
  templateUrl: './dict-list.component.html',
  styleUrls: ['./dict-list.component.css']
})
export class DictListComponent implements OnInit {
  data: Dictionary[]
  ableMerge: boolean = false;

  constructor(
    private dictionariesService: DictService, 
    private dialogService: NbDialogService) { }

  toggle(event) {
    this.ableMerge = this.data.filter(dict => dict.checked).length > 1;
  }

  edit(evt, id) {
    const toEdit = this.data.filter(dict => dict.id === id);
    if (toEdit.length > 0) {
      // No batch edit will be supported for dictionaries
      const editDictionary = toEdit[0];
      this.openEditDialog(this.copy(editDictionary));
    }
    
  }

  openEditDialog(editDictionary: Dictionary) {
    this.dialogService.open(EditDictDialogComponent, { context: { dict: editDictionary } })
      .onClose.subscribe(result => {
        if (result.save) {
          const toSave = this.data.filter(dict => dict.id === result.editedDict.id);
          if (toSave.length > 0) {
            const toSaveDict = toSave[0];
            const toSaveIdx = this.data.indexOf(toSaveDict);
            this.data[toSaveIdx] = result.editedDict;
          }
        }
      });
  }

  delete(evt, id) {
    // Get dictionary

    const toDelete = this.data.filter(dict => dict.id === id);
    if (toDelete.length > 0) {
      // No batch delete will be supported for dictionaries
      const dictToDelete = toDelete[0];
      this.openDeleteDialog(dictToDelete);
    }
  }

  openDeleteDialog(dictToDelete: Dictionary) {
    this.dialogService.open(DeleteDictDialogComponent, { context: { dict: dictToDelete } })
      .onClose.subscribe((isDeleteApproved) => {
        if (isDeleteApproved) {
          const dictToDeleteIdx = this.data.indexOf(dictToDelete);
          if (dictToDeleteIdx !== -1) {
            this.data.splice(dictToDeleteIdx, 1);
            console.log(this.data);
          }
        }
      });
  }

  merge(evt) {
    const toMerge = this.data.filter((dict: Dictionary) => dict.checked);
    console.log(toMerge);
    this.openMergeDialog(toMerge);
  }

  openMergeDialog(mergeDictionaries: Dictionary[]) {
    this.dialogService.open(MergeDialogComponent, { context: { dicts: mergeDictionaries } })
      .onClose.subscribe(result => console.log(result));
  }

  copy(obj: any) {
    return JSON.parse(JSON.stringify(obj))
  }

  ngOnInit(): void {
    this.dictionariesService.getAllDictionaries()
      .subscribe((dicts) => this.data = dicts)
  }

}
