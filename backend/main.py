from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models
import schemas
import database
import service

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Evaluación Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_vehiculo_service(db: Session = Depends(database.get_db)):
    return service.VehiculoService(db)

@app.get("/vehiculos/", response_model=List[schemas.Vehiculo])
def read_vehiculos(service: service.VehiculoService = Depends(get_vehiculo_service)):
    return service.get_lista()

@app.get("/vehiculos/{placa}", response_model=schemas.Vehiculo)
def read_vehiculo(placa: str, service: service.VehiculoService = Depends(get_vehiculo_service)):
    db_vehiculo = service.get_placa(placa)
    if db_vehiculo is None:
        raise HTTPException(status_code=404, detail="Vehiculo no encontrado")
    return db_vehiculo

@app.post("/vehiculos/", response_model=schemas.Vehiculo, status_code=status.HTTP_201_CREATED)
def crear_vehiculo(vehiculo: schemas.VehiculoCreate, vehiculo_service: service.VehiculoService = Depends(get_vehiculo_service)):
    try:
        return vehiculo_service.create(vehiculo)
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

