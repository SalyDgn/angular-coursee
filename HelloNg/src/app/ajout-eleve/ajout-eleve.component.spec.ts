import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEleveComponent } from './ajout-eleve.component';

describe('AjoutEleveComponent', () => {
  let component: AjoutEleveComponent;
  let fixture: ComponentFixture<AjoutEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEleveComponent]
    });
    fixture = TestBed.createComponent(AjoutEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
