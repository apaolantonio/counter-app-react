import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo = "Soy un subtitulo" }) => {
  // const saludo = "Hola mundo saludo";
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
