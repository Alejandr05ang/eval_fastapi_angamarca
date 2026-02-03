from pydantic import BaseModel
from typing import Optional

class VehiculoBase(BaseModel):
    placa: str
    propietario: str
    marca: str
    fabricacion: int
    valor_comercial: float

class VehiculoCreate(VehiculoBase):
    pass

class VehiculoUpdate(BaseModel):
    placa: Optional[str] = None
    propietario: Optional[str] = None
    marca: Optional[str] = None
    fabricacion: Optional[int] = None
    valor_comercial: Optional[float] = None
    impuesto: Optional[float] = None
    codigo_revision: Optional[str] = None

class Vehiculo(VehiculoBase):
    impuesto: float
    codigo_revision: str

    class Config:
        from_attributes = True

def calculo_impuesto(valor_comercial: float, fabricacion: int, marca: str) -> float:
    tasa_impuesto = 0.025
    if fabricacion < 2010:
        tasa_impuesto += 0.010
    impuesto = valor_comercial * tasa_impuesto
    if marca[0].lower() in ['a', 'e', 'i', 'o', 'u']:
        if impuesto <= 30:
            impuesto = 0
        else:
            impuesto -= 30
    return impuesto

def codigo_revision(placa: str, propietario: str, fabricacion: int) -> str:
    nombre = propietario.split(" ")
    codigo = placa[:3] + str(len(nombre[0])) + str(fabricacion)[-1:]
    return codigo

def verificar_placa(placa: str) -> bool:
    if placa[3] == '-':
        return True
    return False