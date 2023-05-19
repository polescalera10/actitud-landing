import React from "react";
import { FcApproval, FcDiploma1, FcFinePrint, FcSearch } from "react-icons/fc";

function Features() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <FcSearch size={40} />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Evidencia Científica
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Assessoramiento multidisciplinario basado en la evidencia
              científica
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-amber-100 rounded-full">
              <FcFinePrint size={40} />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Formación Actualitzada
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Formación constantemente actualizada en los últimos avances
              científicos
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-purple-100 rounded-full">
              <FcDiploma1 size={40} />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Formación Reconocida
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Transferéncia de conocimientos desde la titulación y formación
              académica reconocida
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
              <FcApproval size={40} />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Compromiso de Éxito
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Acompañamiento personalizado y compromiso de éxito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
