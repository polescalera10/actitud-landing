import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import React from "react";
import { InlineWidget } from "react-calendly";

function contacto() {
  return (
    <>
      <Head>
        <title>Pide una cita</title>
      </Head>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col justify-between lg:py-5">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:leading-tight lg:text-5xl">
                  ¡Activa tu cambio hacia una vida saludable ya!
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-black">
                  Adopta enfoques científicamente respaldados para potenciar tu
                  bienestar y salud
                </p>

                <img
                  className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                  alt=""
                />

                <img
                  className="hidden w-full translate-x-24 translate-y-8 md:block"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                  alt=""
                />
              </div>

              <div className="hidden md:mt-auto md:block">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <blockquote className="mt-6">
                  <p className="text-lg leading-relaxed text-black">
                    El programa de nutrición y hábitos saludables de Actitud
                    Plan ha transformado mi vida gracias a su sólido respaldo
                    científico y seguimiento personalizado. Su enfoque adaptado
                    a mis necesidades individuales me permitió perder peso,
                    mejorar mi energía, salud y calidad de vida. Recomiendo
                    encarecidamente este programa a quienes busquen un cambio
                    duradero y efectivo en sus vidas.
                  </p>
                </blockquote>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-semibold text-black">
                      Mercedes Soler
                    </p>
                    <p className="mt-px text-sm text-gray-400">
                      Clienta satisfecha
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="lg:pl-12">
              <div className="overflow-hidden bg-white rounded-md">
                <div className="p-6 sm:p-10">
                  <h3 className="text-3xl font-semibold text-black">
                    Pide una cita
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Selecciona la fecha que mejor te venga para que empecemos
                    con tu nuevo Actitud Plan
                  </p>
                  <InlineWidget url="https://calendly.com/polescalera10/60min" />
                </div>
              </div>
            </div> */}

            <div className="md:hidden">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-black">
                  El programa de nutrición y hábitos saludables de Actitud Plan
                  ha transformado mi vida gracias a su sólido respaldo
                  científico y seguimiento personalizado. Su enfoque adaptado a
                  mis necesidades individuales me permitió perder peso, mejorar
                  mi energía, salud y calidad de vida. Recomiendo
                  encarecidamente este programa a quienes busquen un cambio
                  duradero y efectivo en sus vidas.
                </p>
              </blockquote>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-black">
                    Josep Soler
                  </p>
                  <p className="mt-px text-sm text-gray-400">
                    Clienta satisfecha
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default contacto;
