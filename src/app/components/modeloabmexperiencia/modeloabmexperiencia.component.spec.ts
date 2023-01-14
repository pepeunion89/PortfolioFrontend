import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloabmexperienciaComponent } from './modeloabmexperiencia.component';

describe('ModeloabmexperienciaComponent', () => {
  let component: ModeloabmexperienciaComponent;
  let fixture: ComponentFixture<ModeloabmexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloabmexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloabmexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
