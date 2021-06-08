import React from "react";

function Info() {
  return (
    <div>
      <div
        class="container-fluid last-part "
        style={{ backgroundColor: "#0d6efd" }}
      >
        <div class="container">
          <div class="row">
            <div class="col my-4">
              <h1>Servicio</h1>
              <hr class="divider light my-4" />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-3">
              <h2>Envios</h2>
              <i class="fas fa-truck fa-3x"></i>
              <p>
                Envios gratuitos sin ningun costo, en cualquier parte de
                sudamerica!
              </p>
            </div>

            <div class="col-12 col-lg-3">
              <h2>Descuentos</h2>
              <i class="fas fa-percent fa-3x"></i>
              <p>
                Por cada 3 pedidos the 100$ el cuarto tiene un descuento del 50%
              </p>
            </div>

            <div class="col-12 col-lg-3">
              <h2>Empaquetado</h2>
              <i class="fas fa-box-open fa-3x"></i>
              <p>
                Empaquetado seguro anti golpes. si el producto es fragil esta
                protegido!
              </p>
            </div>

            <div class="col-12 col-lg-3">
              <h2>Comunicacion</h2>
              <i class="fas fa-comments   fa-3x"></i>
              <p>Comunicacion directa en caso de retraso o reclamos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
