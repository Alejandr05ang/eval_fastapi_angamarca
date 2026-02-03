import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionMatriculaVehicular } from '../../services/gestion-matricula-vehicular';
import { Matricula_vehicular } from '../../domains/Matricula-vehicular';

@Component({
  selector: 'app-consultar-matricula-vehicular',
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar-matricula-vehicular.html',
  styleUrl: './consultar-matricula-vehicular.css',
})
export class ConsultarMatriculaVehicular implements OnInit {
  matriculas: Matricula_vehicular[] = [];
  matriculaEditando: Matricula_vehicular | null = null;
  mensaje: string = '';

  constructor(private gestionService: GestionMatriculaVehicular){}

  ngOnInit(){
    this.cargarMatriculas();
  }

  cargarMatriculas(){
    this.gestionService.getMatriculas().subscribe({
      next: (data) => {
        this.matriculas = data;
      },
      error: (error) => {
        console.error('Error al cargar matrículas:', error);
      }
    });
  }

  editar(matricula: Matricula_vehicular){
    this.matriculaEditando = { ...matricula };
  }

  actualizar(){
    if(this.matriculaEditando){
      this.gestionService.update(this.matriculaEditando.placa, this.matriculaEditando).subscribe({
        next: (response) => {
          this.mensaje = 'Matrícula actualizada exitosamente';
          this.matriculaEditando = null;
          this.cargarMatriculas();
        },
        error: (error) => {
          this.mensaje = 'Error al actualizar la matrícula';
          console.error(error);
        }
      });
    }
  }

  cancelar(){
    this.matriculaEditando = null;
    this.mensaje = '';
  }
}
