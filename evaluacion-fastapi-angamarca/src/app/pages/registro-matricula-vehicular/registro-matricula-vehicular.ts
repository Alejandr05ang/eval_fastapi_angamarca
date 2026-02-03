import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionMatriculaVehicular } from '../../services/gestion-matricula-vehicular';
import { Matricula_vehicular } from '../../domains/Matricula-vehicular';

@Component({
  selector: 'app-registro-matricula-vehicular',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-matricula-vehicular.html',
  styleUrl: './registro-matricula-vehicular.css',
})
export class RegistroMatriculaVehicular {
  placa: string = '';
  propietario: string = '';
  marca: string = '';
  fabricacion: number = 0;
  valor_comercial: number = 0;
  mensaje: string = '';

  constructor(private gestionService: GestionMatriculaVehicular){}

  guardar(){
    const matricula: Matricula_vehicular = {
      placa: this.placa,
      propietario: this.propietario,
      marca: this.marca,
      fabricacion: this.fabricacion,
      valor_comercial: this.valor_comercial,
      impuesto: 0,
      codigo_revision: ''
    };

    this.gestionService.create(matricula).subscribe({
      next: (response) => {
        this.mensaje = 'Matrícula registrada exitosamente';
        this.limpiar();
      },
      error: (error) => {
        this.mensaje = 'Error al registrar la matrícula';
        console.error(error);
      }
    });
  }

  limpiar(){
    this.placa = '';
    this.propietario = '';
    this.marca = '';
    this.fabricacion = 0;
    this.valor_comercial = 0;
  }
}
