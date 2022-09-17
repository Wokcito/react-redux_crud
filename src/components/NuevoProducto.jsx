import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions de Redux
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
    // State del componente
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);

    // Utilizar useDispatch, es una función que te crea una función, no se usa directamente
    const dispatch = useDispatch();

    // Manda llamar el action de productoAction
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    // Cuando el usuario haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        // Validar formulario
        if (nombre.trim() === "" || precio <= 0) {
            return;
        }

        // si no hay errores

        // crear nuevo producto
        agregarProducto({
            nombre,
            precio,
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 ">
                <div className="card p-2">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>
                    </div>

                    <form onSubmit={submitNuevoProducto}>
                        <div>
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                value={precio}
                                onChange={(e) => setPrecio(Number(e.target.value))}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100 m-1">
                            AGREGAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;
