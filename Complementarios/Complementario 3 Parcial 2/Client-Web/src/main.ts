import './style.css'
import { cuerpo } from './html'
import { variables } from './Variables'
import { nuevo, consultar, grabar } from './func'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = cuerpo

const ejemplo=variables();
const [Id,Placa,NumeroBus, Capacidad,Estado,Contraseña,CedChofer,NombresChofer, Nuevo,Grabar,Consultar,Cuerpo] = 
[ejemplo.Id, ejemplo.Placa, ejemplo.NumeroBus,ejemplo.Capacidad, ejemplo.Estado,ejemplo.Contraseña
  ,ejemplo.CedChofer,ejemplo.NombresChofer,ejemplo.Nuevo,ejemplo.Grabar,ejemplo.Consultar,ejemplo.Cuerpo]

  Nuevo.addEventListener('click', () => {

    nuevo(Id,Placa,NumeroBus,Capacidad,CedChofer,NombresChofer,Estado,Contraseña)

  })

  Consultar.addEventListener('click', () => {

    consultar(Id,Placa,Estado,NumeroBus,Capacidad,CedChofer,NombresChofer,Contraseña,Cuerpo)

  })

  Grabar.addEventListener('click', () => {

    grabar(Id,Placa,Estado,NumeroBus,Capacidad,CedChofer,NombresChofer,Contraseña,Cuerpo)

  })