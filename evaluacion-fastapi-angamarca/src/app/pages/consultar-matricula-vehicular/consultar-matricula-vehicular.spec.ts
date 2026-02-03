import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMatriculaVehicular } from './consultar-matricula-vehicular';

describe('ConsultarMatriculaVehicular', () => {
  let component: ConsultarMatriculaVehicular;
  let fixture: ComponentFixture<ConsultarMatriculaVehicular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarMatriculaVehicular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarMatriculaVehicular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
