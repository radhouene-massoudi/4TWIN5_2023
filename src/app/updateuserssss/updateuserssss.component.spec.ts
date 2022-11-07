import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserssssComponent } from './updateuserssss.component';

describe('UpdateuserssssComponent', () => {
  let component: UpdateuserssssComponent;
  let fixture: ComponentFixture<UpdateuserssssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserssssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserssssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
