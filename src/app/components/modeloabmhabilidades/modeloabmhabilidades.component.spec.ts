import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloabmhabilidadesComponent } from './modeloabmhabilidades.component';

describe('ModeloabmhabilidadesComponent', () => {
  let component: ModeloabmhabilidadesComponent;
  let fixture: ComponentFixture<ModeloabmhabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloabmhabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloabmhabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
