import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosDetailsComponent } from './membros-details.component';

describe('MembrosDetailsComponent', () => {
  let component: MembrosDetailsComponent;
  let fixture: ComponentFixture<MembrosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembrosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
