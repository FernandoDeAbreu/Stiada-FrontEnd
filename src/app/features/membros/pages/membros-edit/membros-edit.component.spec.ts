import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosEditComponent } from './membros-edit.component';

describe('MembrosEditComponent', () => {
  let component: MembrosEditComponent;
  let fixture: ComponentFixture<MembrosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembrosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
