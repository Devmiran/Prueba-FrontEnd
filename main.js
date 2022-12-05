class persona {
    constructor(nombre, referencia, categoria) {
        this.nombre = nombre
        this.categoria = categoria
        this.referencia = referencia
    }
}

class interfaz {
    añadirPersona(personas) {
        const lista = document.getElementById('personas-form')
        const elemento = document.createElement('div')
        elemento.innerHTML = `<div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>: ${persona.nombre}
            <strong>referencia</strong>: ${persona.referencia}
            <strong>categoria</strong>:${persona.categoria}
            <a href="#" class="btn btn-danger" name="eliminar">ELIMINAR</a>
        </div>
    </div>`

        lista.appendChild(elemento)
        this.dejarblanco()
    }

    dejarblanco() {
      document.getElementById('personas-form').reset()
    }

    eliminarPersonas(elemento){
        if(elemento.name==='eliminar'){
            elemento.parentElement.parentElement.remove()
        }
    }

  

  
}

//EVENTO QUE INTERACTUAN DESDE EL HTML
document.getElementById('personas-form').addEventListener('submit',evento=>{
    evento.preventDefault()
    const nombre=nombre.getElementById('nombre').value
    const referencia=referencia.getElementById('referencia').value
    const categoria=categoria.getElementById('categoria').value

    const personas=new persona(nombre,referencia,categoria)
    const Interfaz=new interfaz 
    if (nombre==='' || referencia==='' || categoria===''){
        alert('CAMPOS VACIOS')
    }else {
      Interfaz.añadirPersona(personas)
     
    }
})


document.getElementById('agregar').addEventListener('click', evento=>{
    const Interfaz1=new interfaz
    Interfaz1.eliminarPersonas(evento.target)
    

  
})