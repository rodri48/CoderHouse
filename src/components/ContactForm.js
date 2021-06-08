import React from "react";

function ContactForm() {
  return (
    <div>
      <div class="form-wrapper">
        <div class="container form-page-center">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <h1 class="pb-5 text-center">
                Contactanos y dejanos tu consulta
              </h1>
              <form action="/action_page.php">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="fname"
                        placeholder="Nombre"
                        name="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="lname"
                        placeholder="Apellido"
                        name="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="dsname"
                        placeholder="Email"
                        name="Dive Store Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Direccion"
                        name="Store Number"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Codigo postal"
                        name="Member"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Pais"
                        name="Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Telefono"
                        name="Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <button
                      type="button"
                      class="btn btn-success btn-block btn-lg text-uppercase"
                    >
                      Enviar
                    </button>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <div class="form-group w-md-25 float-md-right"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
