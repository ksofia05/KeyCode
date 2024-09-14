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
    <div className="justify-start items-start">
      <div className="w-full max-w-lg space-y-10 rounded-2xl p-6 shadow-2xl ml-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Formulario de Contacto</h1>

        <form onSubmit={enviarFormulario} className="space-y-4">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 text-left">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Escribe tu nombre..."
              value={form.nombre}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className=" placeholder:text-gray-600 mt-1 block w-full p-2 border bg-transparent border-transparent rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 "
            />
            {errores.observaciones && (
            <p className="flex items-center text-sm text-red-600 mt-1">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
              {errores.observaciones}
            </p>
          )}

          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 text-left">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Escribe tu correo electrónico..."
              value={form.email}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="placeholder:text-gray-600 mt-1 block w-full p-2 border bg-transparent border-transparent rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"            />
            {errores.observaciones && (
            <p className="flex items-center text-sm text-red-600 mt-1">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
              {errores.observaciones}
            </p>
          )}

          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-gray-900 text-left">Asunto</label>
            <input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="Asunto..."
              value={form.asunto}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="placeholder:text-gray-600 mt-1 block w-full p-2 border bg-transparent border-transparent rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errores.observaciones && (
            <p className="flex items-center text-sm text-red-600 mt-1">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
              {errores.observaciones}
            </p>
          )}
          </div>

          {/* Observaciones */}
          <div>
            <label htmlFor="observaciones" className="block text-sm font-medium text-gray-900 text-left">Observaciones</label>
            <textarea
              name="observaciones"
              id="observaciones"
              placeholder="Escribe tus observaciones..."
              cols={50}
              rows={5}
              value={form.observaciones}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="placeholder:text-gray-600 mt-1 block w-full p-2 border bg-transparent border-transparent rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errores.observaciones && (
            <p className="flex items-center text-sm text-red-600 mt-1">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
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
