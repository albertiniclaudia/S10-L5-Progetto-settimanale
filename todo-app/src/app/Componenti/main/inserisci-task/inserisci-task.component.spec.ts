import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciTaskComponent } from './inserisci-task.component';

describe('InserisciTaskComponent', () => {
  let component: InserisciTaskComponent;
  let fixture: ComponentFixture<InserisciTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
