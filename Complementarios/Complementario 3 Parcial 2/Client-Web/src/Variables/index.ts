export function variables(){
    const Id = document.querySelector<HTMLInputElement>('#Id')!;
    const Placa = document.querySelector<HTMLInputElement>('#Placa')!;
    const NumeroBus = document.querySelector<HTMLInputElement>('#NumeroBus')!;
    const Capacidad = document.querySelector<HTMLInputElement>('#Capacidad')!;
    const Estado = document.querySelector<HTMLInputElement>('#Estado')!;
    const Contraseña = document.querySelector<HTMLInputElement>('#Contraseña')!;
    const CedChofer = document.querySelector<HTMLInputElement>('#CedChofer')!;
    const NombresChofer = document.querySelector<HTMLInputElement>('#NombresChofer')!;
    const Nuevo = document.querySelector<HTMLButtonElement>('#Nuevo')!;
    const Grabar = document.querySelector<HTMLButtonElement>('#Grabar')!;
    const Consultar = document.querySelector<HTMLButtonElement>('#Consultar')!;
    const Cuerpo = document.querySelector<HTMLDivElement>('#Cuerpo')!;
    return ({Id,Placa,NumeroBus,Capacidad,Estado,Contraseña,CedChofer,NombresChofer,Nuevo,Grabar,Consultar,Cuerpo})
    }