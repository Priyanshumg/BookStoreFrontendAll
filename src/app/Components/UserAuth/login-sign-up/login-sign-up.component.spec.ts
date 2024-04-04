import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignUPComponent } from './login-sign-up.component';

describe('LoginSignUPComponent', () => {
  let component: LoginSignUPComponent;
  let fixture: ComponentFixture<LoginSignUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSignUPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSignUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
