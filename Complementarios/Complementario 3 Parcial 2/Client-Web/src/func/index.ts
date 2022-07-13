import { httpAxios } from "../axios";
import axios from "axios";
import { IResBus,Bus } from "../Interfaces/IBuses";


export function nuevo(id: HTMLInputElement,Capacidad: HTMLInputElement , Placa: HTMLInputElement , Estado: HTMLInputElement, NumeroBus: HTMLInputElement, CedChofer: HTMLInputElement,  NombresChofer: HTMLInputElement, Contraseña: HTMLInputElement,){
    id.value= ""
    Placa.value = ""
    Estado.value = ""
    NumeroBus.value = ""
    Capacidad.value = ""
    Contraseña.value = ""
    CedChofer.value = ""
    NombresChofer.value = ""
}

export async function consultar(id: HTMLInputElement , Placa: HTMLInputElement , Estado: HTMLInputElement, NumeroBus: HTMLInputElement, Capacidad: HTMLInputElement, CedChofer: HTMLInputElement,  NombresChofer: HTMLInputElement, Contraseña: HTMLInputElement, Cuerpo: HTMLDivElement){
    
    const resbuses: IResBus = (await httpAxios.get<IResBus>('buses')).data
    const { datos } = resbuses
    const tabla = document.createElement('table')
    tabla.id = "tabla"
    tabla.border = "1"

    for (const dato of datos) {
        const row = tabla.insertRow();
        const celda = row.insertCell();
        celda.innerHTML = `<button class="boton" value='${dato._id}'>${dato.Placa}</button>`
        const celda2 = row.insertCell();
        celda2.innerHTML = `${dato.NumeroBus}`
    }
    Cuerpo.innerHTML = ""
    Cuerpo.appendChild(tabla)

    document.querySelectorAll('.boton').forEach((ele: Element) => {
        ele.addEventListener('click', async () => {
            try {
                const { data } = await httpAxios.get<Bus>(`buses/${(ele as HTMLButtonElement).value}`)
                Placa.value = data.Placa.toString();
                NumeroBus.value = data.NumeroBus.toString();
                Contraseña.value = data.Contraseña.toString();
                Capacidad.value = data.Capacidad.toString();
                CedChofer.value = data.CedChofer.toString();
                NombresChofer.value = data.NombresChofer.toString();
                Estado.value = String (data.Estado)
                id.value = data._id!
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })
    })

}

function asignarValores( Placa: HTMLInputElement , NumeroBus: HTMLInputElement, Capacidad: HTMLInputElement, CedChofer: HTMLInputElement,  NombresChofer: HTMLInputElement, Contraseña: HTMLInputElement){
    const data: Bus = {
        Placa: Placa.value,
        NumeroBus:(NumeroBus.value),
        Capacidad: Number(Capacidad.value),
        CedChofer: (CedChofer.value),
        NombresChofer: (NombresChofer.value),
        Contraseña:(Contraseña.value),
    }
    return data;
}

export async function grabar(id: HTMLInputElement , Placa: HTMLInputElement , Estado: HTMLInputElement, NumeroBus: HTMLInputElement, Capacidad: HTMLInputElement, CedChofer: HTMLInputElement,  NombresChofer: HTMLInputElement, Contraseña: HTMLInputElement, Cuerpo: HTMLDivElement){
    
    const data = asignarValores(Placa,NumeroBus,Capacidad,CedChofer,NombresChofer,Contraseña);
    if (id.value.trim().length > 0)//se usa para eliminar espacios
    {
        const resbus: Bus = await (await httpAxios.put<Bus>(`buses/${id.value}`, data)).data
        alert(`El producto ${resbus.Placa} fue modificado con exito`);
        consultar(id,Placa,Estado,NumeroBus,Capacidad,CedChofer,NombresChofer,Contraseña,Cuerpo)
        nuevo(id,Placa,NumeroBus,Capacidad,CedChofer,NombresChofer,Estado,Contraseña)
        return;
    }
    try {
        const resbus: Bus = await (await httpAxios.post<Bus>(`buses`, data)).data
        alert(`El producto ${resbus.Placa} fue insertado con exito`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error en axios");
        }
        console.log(error);
    }

}