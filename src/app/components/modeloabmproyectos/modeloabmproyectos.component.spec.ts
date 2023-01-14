import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloabmproyectosComponent } from './modeloabmproyectos.component';

describe('ModeloabmproyectosComponent', () => {
  let component: ModeloabmproyectosComponent;
  let fixture: ComponentFixture<ModeloabmproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloabmproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloabmproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
