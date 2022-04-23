function openracion (n1,n2,operador)
{

    switch(operador) {

        case"+":
        return n1+n2;

        case"-":
        return n1-n2;

        case"*":
        return n1*n2;

        case"/":
        return n1/n2;

            default:
            return 0;
    }

}

function saludar (nombre)
{
    
    return `HOLA GUSTAVO`;
    
    
}

module.exports= {
    iva:12,
    fun1:openracion,
    saludar,
}