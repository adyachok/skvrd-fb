import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDictDialogComponent } from './edit-dict-dialog.component';

describe('EditDictDialogComponent', () => {
  let component: EditDictDialogComponent;
  let fixture: ComponentFixture<EditDictDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDictDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDictDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
