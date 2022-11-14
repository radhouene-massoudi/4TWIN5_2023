import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserSeance10Component } from './update-user-seance10.component';

describe('UpdateUserSeance10Component', () => {
  let component: UpdateUserSeance10Component;
  let fixture: ComponentFixture<UpdateUserSeance10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserSeance10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserSeance10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
