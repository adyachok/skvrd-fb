import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbInputModule, NbCheckboxModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DictListComponent } from './dictionaries/pages/dict-list/dict-list.component';
import { FormsModule } from '@angular/forms';
import { MergeDialogComponent } from './dictionaries/dialogs/merge-dialog/merge-dialog.component';
import { EditDictDialogComponent } from './dictionaries/dialogs/edit-dict-dialog/edit-dict-dialog.component';
import { DeleteDictDialogComponent } from './dictionaries/dialogs/delete-dict-dialog/delete-dict-dialog.component';
import { WordsListComponent } from './words/pages/words-list/words-list.component';
import { EditWordDialogComponent } from './words/dialogs/edit-word-dialog/edit-word-dialog.component';
import { DeleteWordDialogComponent } from './words/dialogs/delete-word-dialog/delete-word-dialog.component';
import { AddWordDialogComponent } from './words/dialogs/add-word-dialog/add-word-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DictListComponent,
    MergeDialogComponent,
    EditDictDialogComponent,
    DeleteDictDialogComponent,
    WordsListComponent,
    EditWordDialogComponent,
    DeleteWordDialogComponent,
    AddWordDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    FormsModule,
    NbIconModule,
    NbDialogModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
