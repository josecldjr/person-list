import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePersonButtonComponent } from './save-person-button.component';

describe('SavePersonButtonComponent', () => {
  let component: SavePersonButtonComponent;
  let fixture: ComponentFixture<SavePersonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePersonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
