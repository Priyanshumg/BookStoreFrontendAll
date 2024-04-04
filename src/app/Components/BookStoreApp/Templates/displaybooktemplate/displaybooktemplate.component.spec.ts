import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybooktemplateComponent } from './displaybooktemplate.component';

describe('DisplaybooktemplateComponent', () => {
  let component: DisplaybooktemplateComponent;
  let fixture: ComponentFixture<DisplaybooktemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaybooktemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaybooktemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
