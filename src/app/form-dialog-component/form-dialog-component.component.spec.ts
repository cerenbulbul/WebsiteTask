import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogComponentComponent } from './form-dialog-component.component';

describe('FormDialogComponentComponent', () => {
  let component: FormDialogComponentComponent;
  let fixture: ComponentFixture<FormDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
