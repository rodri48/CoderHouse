import React, { useContext, useState } from "react";
import { CantContext } from "../components/CantContext";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Cart() {
  const { canti, finalCounter, booleano, idCarrito } = useContext(CantContext);
  // eslint-disable-next-line no-unused-vars
  const [cantidad, setCantidad] = canti;
  const [cantidadFinal, setCantidadFinal] = finalCounter;
  const [idCart, setCart] = idCarrito;
  // eslint-disable-next-line no-unused-vars

  const [addToCart, setAddToCart] = booleano;

  let totalPrice = 0;

  for (let i = 0; i < cantidadFinal.length; i++) {
    totalPrice = totalPrice + cantidadFinal[i].price;
  }

  const [lgShow, setLgShow] = useState(false);

  let totalProducto = [];

  for (let i = 0; i < cantidadFinal.length; i++) {
    totalProducto = cantidadFinal[i];
  }

  const borrarItem = (cantidadFinal) => {
    const productos = cantidadFinal.filter(
      (productos) => productos.id !== totalProducto.id
    );
    /*  console.log(cantidadFinal[0].id, "-----------------"); */

    setCantidadFinal(productos);
  };

  return (
    <div>
      {cantidadFinal.map((producto, index) => {
        return (
          <div class="col-sm-12 col-md-10 col-md-offset-1">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Autorizado</th>
                  <th>Cantidad</th>
                  <th class="text-center">Precio</th>
                  <th class="text-center">Total</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="col-md-6">
                    <div class="media">
                      <img
                        class="media-object "
                        src={producto.imagen}
                        style={{ width: "72px", height: "72px" }}
                        alt=""
                      />

                      <div class="media-body">
                        <h4 class="media-heading">
                          <p> {producto.articulo} </p>
                        </h4>

                        <span>Status: </span>
                        <span class="text-success">
                          <strong>tiempo de entrega 2-3 dias</strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="col-md-1 text-left">
                    <strong class="label label-success ">Authorized</strong>
                  </td>
                  <td class="col-md-1" style={{ textAlign: "center" }}>
                    {/* cantidad carrrito */}
                    <strong> {cantidad} </strong>
                  </td>
                  <td class="col-md-1 text-center">
                    <strong> {producto.price} $ </strong>
                  </td>
                  <td class="col-md-1 text-center">
                    <strong>{cantidad * producto.price}</strong>
                  </td>
                  <td class="col-md-1">
                    <button
                      onClick={() => borrarItem(cantidadFinal)}
                      type="button"
                      class="btn btn-danger"
                    >
                      <span class="fa fa-remove"></span> Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <tbody>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                <h5>Subtotal</h5>
              </td>
              <td class="text-right">
                <h5>
                  <strong>{totalPrice * cantidad} </strong>
                </h5>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                <h5>Precio de envio </h5>
              </td>
              <td class="text-right">
                <h5>
                  <strong>Gratis</strong>
                </h5>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                <h3>Total</h3>
              </td>

              <td class="text-right">
                <h3>
                  <strong> {totalPrice * cantidad} </strong>
                </h3>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td></td>
              <td>
                <button
                  onClick={() => setLgShow(true)}
                  type="button"
                  class="btn btn-success"
                >
                  Pagar <span class="fa fa-play"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="py-5 text-center">
              <h2>Metodo de pago</h2>
              <p class="lead">
                Por favor coloque sus datos y finalice su compra y recibira su
                producto en el plazo acordado
              </p>
            </div>

            <div class="row">
              <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">tu carrito</span>
                  <span class="badge badge-secondary badge-pill">3</span>
                </h4>

                {cantidadFinal.map((producto, index) => {
                  return (
                    <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 class="my-0">{producto.articulo} </h6>
                          <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$12</span>
                      </li>
                    </ul>
                  );
                })}

                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                  </li>
                </ul>

                <form class="card p-2">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promo code"
                    />
                    <div class="input-group-append">
                      <button type="submit" class="btn btn-secondary">
                        Aplicar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Direccion de facturacion</h4>
                <form class="needs-validation" novalidate>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName">Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="username">Email</label>
                    <div class="input-group">
                      <div class="input-group-prepend"></div>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Email"
                        required
                      />
                      <div
                        class="invalid-feedback"
                        style={{ style: "width: 100%" }}
                      >
                        Tu email es obligatorio
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="email">
                      Telefono <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder=""
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="address">Direccion</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="calle 77"
                      required
                    />
                    <div class="invalid-feedback">
                      Porfavor ingrese la direccion de entrega
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="address2">
                      Direccion 2 <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address2"
                      placeholder=""
                    />
                  </div>

                  <div class="row">
                    <div class="col-md-5 mb-3">
                      <label for="country">Pais</label>
                      <select
                        class="custom-select d-block w-100"
                        id="country"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Argentina</option>
                        <option>Uruguay</option>
                        <option>Bolivia</option>
                        <option>Paraguay</option>
                      </select>
                      <div class="invalid-feedback">
                        Por favor elija un pais valido
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="state">Ciudad</label>
                      <select
                        class="custom-select d-block w-100"
                        id="state"
                        /*  required */
                      >
                        <option value="">Choose...</option>
                        <option>Buenos aires</option>
                        <option>Montevideo</option>
                        <option>Santa cruz</option>
                        <option>Asuncion</option>
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="zip">c.postal</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Codigo postal es requerido
                      </div>
                    </div>
                  </div>
                  <hr class="mb-4" />
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="same-address"
                    />
                    <label class="custom-control-label" for="same-address">
                      Mi direccion de facturacion es la misma que la de entrega
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="save-info"
                    />
                    <label class="custom-control-label" for="save-info">
                      Guardar esta informacion para futuras compras
                    </label>
                  </div>
                  <hr class="mb-4" />

                  <h4 class="mb-3">Metodo de pago</h4>

                  <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        class="custom-control-input"
                        checked
                        required
                      />
                      <label class="custom-control-label" for="credit">
                        Tarjeta de credito
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        class="custom-control-input"
                        required
                      />
                      <label class="custom-control-label" for="debit">
                        Tarjeta de debito
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        class="custom-control-input"
                        required
                      />
                      <label class="custom-control-label" for="paypal">
                        Paypal
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="cc-name">Nombre en la Tarjeta</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small class="text-muted">
                        Nombre completo que se muestra en la tarjeta
                      </small>
                      <div class="invalid-feedback">
                        Nombre de la tarjeta es requerido
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="cc-number">
                        Numero de la tarjeta de credito
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        El numero de la tarjeta de credito es requerido
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <label for="cc-expiration">Expiracion</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        fecha de expiracion es requerido
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="cc-cvv">CVV</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Codigo de seguridad requerido
                      </div>
                    </div>
                  </div>
                  <hr class="mb-4" />
                  {/* <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  > */}
                  <Link
                    style={{
                      textDecoration: "none",
                      padding: "10px",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#ffffff",
                      backgroundColor: "#1883ba ",
                      borderRadius: "6px",
                      border: "2px solid #0016b0",
                    }}
                    to="/thankyou"
                  >
                    Realizar compra
                  </Link>
                  {/* </button> */}
                </form>
              </div>
            </div>

            <footer class="my-5 pt-5 text-muted text-center text-small">
              <p class="mb-1">&copy; 2021 R&M</p>
            </footer>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Cart;

{
  /* //SUBTOTAL */
}
{
  /* {cantidad * producto.precio} */
}

{
  /* <h1> {cantidadFinal[0].precio} </h1> */
}
