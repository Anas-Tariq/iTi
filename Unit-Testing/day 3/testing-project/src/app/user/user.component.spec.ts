import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserserviceService } from '../services/userservice.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test that when the button in ts file  clicked, the value of (isOn) variable will be true', () => {
    var btn = debugElement.query(By.css('#clickedBtn'));
    btn.triggerEventHandler('click', null);
    expect(component.isOn).toEqual(true);

    btn.triggerEventHandler('click', null);
    expect(component.isOn).toEqual(false);
  });

  it('test that when the clicked function in ts file called , the value of (isOn) variable will be true', () => {
    component.clicked();
    expect(component.isOn).toEqual(true);

    component.clicked();
    expect(component.isOn).toEqual(false);
  });
});

///////////////////////////
