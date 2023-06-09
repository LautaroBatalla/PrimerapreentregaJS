console.log("Esta conectado")
function calcularCostoTotal(productos) {
    let costoTotal = 0;
  
    for (let i = 0; i < productos.length; i++) {
      costoTotal += productos[i].precio * productos[i].cantidad;
    }
  
    return costoTotal;
  }
  
  function solicitarCantidad(nombreProducto) {
    let cantidad;
    do {
      cantidad = parseInt(prompt(`${nombreProducto}:`), 10);
    } while (isNaN(cantidad) || cantidad < 0);
  
    return cantidad;
  }
  
  function main() {
    const productos = [
      { nombre: "Banana", precio: 10.0, cantidad: 0 },
      { nombre: "Papa", precio: 5.0, cantidad: 0 },
      { nombre: "Kiwi", precio: 20.0, cantidad: 0 },
      // Agrega más productos según tus necesidades
    ];
  
    console.log("Ingrese la cantidad de cada producto:");
  
    for (let i = 0; i < productos.length; i++) {
      productos[i].cantidad = solicitarCantidad(productos[i].nombre);
    }
  
    const costoTotal = calcularCostoTotal(productos);
  
    console.log(`\nEl costo total de los productos seleccionados es: $${costoTotal}`);
  }
  
  main();
  