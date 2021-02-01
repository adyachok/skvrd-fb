import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDictDialogComponent } from './delete-dict-dialog.component';

describe('DeleteDictDialogComponent', () => {
  let component: DeleteDictDialogComponent;
  let fixture: ComponentFixture<DeleteDictDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDictDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDictDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
