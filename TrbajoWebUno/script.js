let intentosdeacceso = 3;

function iniciarSesion(event){
    event.preventDefault(); 
    
    const usuario = document.getElementById('username').value;
    const contrasena = document.getElementById('password').value;

    if(usuario === 'Arney' && contrasena === '1234'){
        alert('Arney ha iniciado sesión correctamente');
        window.location.href = 'menu.html';
    } else {
        intentosdeacceso--;

        if (intentosdeacceso > 0) {
            alert(`Credenciales incorrectas. Intentos restantes: ${intentosdeacceso}`);
        } else {
            alert("Has agotado tus intentos de inicio de sesión.");
            window.location.href = 'index.html';
        }
    }
}

function registrarUsuario(){
    location.href = 'registro-usuario.html';
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    if (correo !== '' && password !== ''){
        alert("Usuario registrado correctamente");
    }
    else {
        alert("No se pudo registrar el usuario");
    }
}


let proveedores = [];

function registrarProveedor() {
    const nombre = document.getElementById('nombre').value;
    const nit = document.getElementById('nit').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre && nit && direccion && telefono) {
        alert('Proveedor registrado correctamente');

        const proveedor = {
            nombre: nombre,
            nit: nit,
            direccion: direccion,
            telefono: telefono
        };

        proveedores.push(proveedor);

        document.getElementById('nombre').value = '';
        document.getElementById('nit').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('telefono').value = '';

        actualizarListaProveedores();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function actualizarListaProveedores() {
    const listaProveedores = document.getElementById('listaProveedores');
    listaProveedores.innerHTML = '';

    proveedores.forEach((proveedor, index) => {
        const li = document.createElement('li');
        li.textContent = `Proveedor ${index + 1}: Nombre: ${proveedor.nombre}, Teléfono: ${proveedor.telefono}, Dirección: ${proveedor.direccion}, NIT: ${proveedor.nit}`;
        listaProveedores.appendChild(li);
    });
}

function mostrarEstadisticasProveedores() {
    const cantidadIngresos = proveedores.length;
    const promedioRegistros = cantidadIngresos / 1; 
    
    let opciones = {Proveedores: cantidadIngresos};
    let opcionMas = "Proveedores";
    let opcionMenos = "Proveedores";

    // Calcular la opción con más ingresos
    for (let opcion in opciones) {
        if (opciones[opcion] > opciones[opcionMas]) {
            opcionMas = opcion;
        }
        if (opciones[opcion] < opciones[opcionMenos]) {
            opcionMenos = opcion;
        }
    }

    const resultados = `
        Cantidad de ingresos: Proveedores - ${cantidadIngresos}
        Promedio de registros: Proveedores - ${promedioRegistros}
        Opción con más ingresos: ${opcionMas}
        Opción con menos ingresos: ${opcionMenos}
    `;

    alert(resultados);
}


let clientes = [];

function registrarCliente() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;

    if (nombre && telefono && direccion && correo) {
        alert('Cliente registrado correctamente');

        const cliente = {
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            correo: correo
        };

        clientes.push(cliente);

        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('correo').value = '';

        actualizarListaClientes();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function actualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    clientes.forEach((cliente, index) => {
        const li = document.createElement('li');
        li.textContent = `Cliente ${index + 1}: Nombre: ${cliente.nombre}, Teléfono: ${cliente.telefono}, Dirección: ${cliente.direccion}, Correo: ${cliente.correo}`;
        listaClientes.appendChild(li);
    });
}

function mostrarEstadisticasClientes() {
    const cantidadIngresos = clientes.length;
    const promedioRegistros = cantidadIngresos / 1; 
    
    let opciones = {Clientes: cantidadIngresos};
    let opcionMas = "Clientes";
    let opcionMenos = "Clientes";

    // Calcular la opción con más ingresos
    for (let opcion in opciones) {
        if (opciones[opcion] > opciones[opcionMas]) {
            opcionMas = opcion;
        }
        if (opciones[opcion] < opciones[opcionMenos]) {
            opcionMenos = opcion;
        }
    }

    const resultados = `
        Cantidad de ingresos: Clientes - ${cantidadIngresos}
        Promedio de registros: Clientes - ${promedioRegistros}
        Opción con más ingresos: ${opcionMas}
        Opción con menos ingresos: ${opcionMenos}
    `;

    alert(resultados);
}


let productos = [];

function RegistrarProducto() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const valorUnitario = parseFloat(document.getElementById('valor_unitario').value);

    if (nombre && descripcion && cantidad && valorUnitario) {
        alert('Producto registrado correctamente');

        const producto = {
            nombre: nombre,
            descripcion: descripcion,
            cantidad: cantidad,
            valorUnitario: valorUnitario
        };

        productos.push(producto);

        document.getElementById('nombre').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('valor_unitario').value = '';

        actualizarListaProductos();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function actualizarListaProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `Producto ${index + 1}: 
            Nombre: ${producto.nombre}, 
            Descripción: ${producto.descripcion}, 
            Cantidad: ${producto.cantidad}, 
            Valor Unitario: ${producto.valorUnitario}`;
        listaProductos.appendChild(li);
    });
}

function mostrarEstadisticasProductos() {
    const cantidadIngresos = productos.length;
    const promedioRegistros = cantidadIngresos / 1; 
    
    let opciones = {Productos: cantidadIngresos};
    let opcionMas = "Productos";
    let opcionMenos = "Productos";

    // Calcular la opción con más ingresos
    for (let opcion in opciones) {
        if (opciones[opcion] > opciones[opcionMas]) {
            opcionMas = opcion;
        }
        if (opciones[opcion] < opciones[opcionMenos]) {
            opcionMenos = opcion;
        }
    }

    const resultados = `
        Cantidad de ingresos: Productos - ${cantidadIngresos}
        Promedio de registros: Productos - ${promedioRegistros}
        Opción con más ingresos: ${opcionMas}
        Opción con menos ingresos: ${opcionMenos}
    `;

    alert(resultados);
}


function irAlMenu() {
    window.location.href = "menu.html";
}

function irAlInicio() {
    window.location.href = "index.html";
}


