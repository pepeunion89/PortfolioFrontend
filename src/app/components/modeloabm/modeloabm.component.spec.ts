import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloabmComponent } from './modeloabm.component';

describe('ModeloabmComponent', () => {
  let component: ModeloabmComponent;
  let fixture: ComponentFixture<ModeloabmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloabmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloabmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
