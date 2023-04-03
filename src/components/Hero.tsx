import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
              Cambia tus hábitos,
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-green-500"></span>
                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  cambia tu vida
                </h1>
              </div>
            </h1>

            <p className="mt-8 text-base text-black sm:text-xl">
              Te ayudo a lograr tus objetivos de salud y bienestar a través de
              planes de alimentación adaptados a tus necesidades individuales.
              Marca la diferencia en tu salud y estilo de vida. Comienza a dar
              los primeros pasos hacia una nutrición saludable y sostenible.
            </p>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Link href="/contacto" legacyBehavior>
                <a className="rounded-full inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-500 hover:bg-green-600 focus:bg-green-600">
                  Pide una cita
                </a>
              </Link>

              {/* <a
                href="#"
                title=""
                className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
              >
                <svg
                  className="w-10 h-10 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill="#F97316"
                    stroke="#F97316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch video
              </a> */}
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden ">
            <Image
              fill
              className="rounded-xl shadow-xl object-cover"
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="nutricion cambio de habitos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
