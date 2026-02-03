import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMatriculaVehicular } from './registro-matricula-vehicular';

describe('RegistroMatriculaVehicular', () => {
  let component: RegistroMatriculaVehicular;
  let fixture: ComponentFixture<RegistroMatriculaVehicular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMatriculaVehicular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMatriculaVehicular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
