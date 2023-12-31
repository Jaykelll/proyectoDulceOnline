import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Componentes/Footer";
import ContentHeader from "../../Componentes/ContentHeader";
const Verificacion = () => {
  return (
    <div className="wrapper">
        <center>
        <div className="content-wrapper">
            <ContentHeader
                titulo={"¿Como vas a iniciar sesión?"}
                breadCrumb1={"Login"}
                breadCrumb2={"Crear Cuenta"}
                ruta1={"/login"}
            />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-8">
                            <div className="small-box bg-red">
                                <div className="inner">
                                    <h3>Administrador</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-laptop"></i>
                                </div>
                                <Link to={"/crearCuentaAdministrador"} className="small-box-footer">
                                    Crear Cuenta <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-8">
                            <div className="small-box bg-orange">
                                <div className="inner">
                                    <h3>Cliente</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-laptop"></i>
                                </div>
                                <Link to={"/crear-cuenta"} className="small-box-footer">
                                    Crear Cuenta <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>      
        </center>
        <Footer></Footer>
    </div>
);
};

export default Verificacion;

