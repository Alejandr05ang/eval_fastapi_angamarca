from sqlalchemy.orm import Session
import repository
import models
import schemas

class VehiculoService:
    def __init__(self, db: Session):
        self.repo = repository.VehiculoRepository(db)

    def get_lista(self):
        return self.repo.find_lista()

    def get_placa(self, placa: str):
        return self.repo.find_placa(placa)

    def create(self, vehiculo_data: schemas.VehiculoCreate):
        if not schemas.verificar_placa(vehiculo_data.placa):
            raise ValueError("Formato de placa inválido. Debe tener un guion en el medio (ej: ABC-123)")
        
        impuesto = schemas.calculo_impuesto(
            vehiculo_data.valor_comercial,
            vehiculo_data.fabricacion,
            vehiculo_data.marca
        )
        codigo_rev = schemas.codigo_revision(
            vehiculo_data.placa,
            vehiculo_data.propietario,
            vehiculo_data.fabricacion
        )
        
        vehiculo = models.Vehiculo(
            placa=vehiculo_data.placa,
            propietario=vehiculo_data.propietario,
            marca=vehiculo_data.marca,
            fabricacion=vehiculo_data.fabricacion,
            valor_comercial=vehiculo_data.valor_comercial,
            impuesto=impuesto,
            codigo_revision=codigo_rev
        )
        return self.repo.save(vehiculo)