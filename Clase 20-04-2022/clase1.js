// OBJETO LITERAL

const persona={
    nombre:"Gustavo",
    apellido:"Rdorgiez",
    esDocente: true,
    geolocalizacion:{
        lat:2323,
        lng:3434,
    },
    getNombreCompleto(){
        return '$(this.nombre) $(this.apellido)'
    }

}

console.log(persona.getNombreCompleto());