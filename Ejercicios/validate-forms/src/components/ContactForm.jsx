import React from "react";
import { useForms } from "d:/Nueva carpeta (2)/Keycode/Ejercicios/validate-forms/src/hooks/useForms";
import { Loader } from './Loader';
import Mail from './Mail';

const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

const validaciones = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }
  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email = "El campo no tiene el formato de un correo electrónico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones = "El campo debe tener mínimo 1 carácter y máximo 255 caracteres";
  }

  return errorsFormulario;
};

const ContactForm = () => {
  const { form, errores, cargando, bd, respuesta, manejadorCambios, manejadorSalidaInput, enviarFormulario } = useForms(
    valorDefecto,
    validaciones
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg space-y-7 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Formulario de Contacto</h1>

        <form onSubmit={enviarFormulario} className="space-y-4">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 text-left">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Escribe tu nombre..."
              value={form.nombre}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errores.nombre && (
              <p className="flex items-center text-sm text-red-600 mt-1">
                {/* Ícono de advertencia */}
                <svg className="h-5 w-5 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 001-1v-1a1 1 0 00-2 0v1a1 1 0 001 1zm0-3a1 1 0 00.707-.293l4-4a1 1 0 00-1.414-1.414L10 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4A1 1 0 0010 15z" clipRule="evenodd" />
                </svg>
                {errores.nombre}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Escribe tu correo electrónico..."
              value={form.email}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errores.email && (
              <p className="flex items-center text-sm text-red-600 mt-1">
                <svg className="h-5 w-5 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 001-1v-1a1 1 0 00-2 0v1a1 1 0 001 1zm0-3a1 1 0 00.707-.293l4-4a1 1 0 00-1.414-1.414L10 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4A1 1 0 0010 15z" clipRule="evenodd" />
                </svg>
                {errores.email}
              </p>
            )}
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 text-left">Asunto</label>
            <input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="Asunto..."
              value={form.asunto}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errores.asunto && (
              <p className="flex items-center text-sm text-red-600 mt-1">
                <svg className="h-5 w-5 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 001-1v-1a1 1 0 00-2 0v1a1 1 0 001 1zm0-3a1 1 0 00.707-.293l4-4a1 1 0 00-1.414-1.414L10 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4A1 1 0 0010 15z" clipRule="evenodd" />
                </svg>
                {errores.asunto}
              </p>
            )}
          </div>

          {/* Observaciones */}
          <div>
            <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700 text-left">Observaciones</label>
            <textarea
              name="observaciones"
              id="observaciones"
              placeholder="Escribe tus observaciones..."
              cols={50}
              rows={5}
              value={form.observaciones}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errores.observaciones && (
              <p className="flex items-center text-sm text-red-600 mt-1">
                <svg className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 001-1v-1a1 1 0 00-2 0v1a1 1 0 001 1zm0-3a1 1 0 00.707-.293l4-4a1 1 0 00-1.414-1.414L10 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4A1 1 0 0010 15z" clipRule="evenodd" />
                </svg>
                {errores.observaciones}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={cargando}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${cargando ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {cargando ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>

        {cargando && <Loader />}
        {respuesta && <Mail datos={bd} />}
      </div>
    </div>
  );
};

export default ContactForm;
