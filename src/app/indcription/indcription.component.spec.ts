import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndcriptionComponent } from './indcription.component';

describe('IndcriptionComponent', () => {
  let component: IndcriptionComponent;
  let fixture: ComponentFixture<IndcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndcriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
