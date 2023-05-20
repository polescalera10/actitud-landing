import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            ¡Descubre el Secreto de una Vida Saludable y Plena!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Conviértete en la mejor versión de ti mismo con nuestra guía
            personalizada de nutrición y hábitos saludables
          </p>
        </div>
      </div>
    </section>
  );
};

const servicesData = [
  {
    image: "https://dummyimage.com/720x600",
    title:
      "🍏 ¿Listo para alcanzar el bienestar y la vitalidad que siempre has deseado? 🏃‍♂️",
    text: "Nuestro equipo de expertos en nutrición y estilo de vida saludable está aquí para responder tus preguntas y acompañarte en tu viaje hacia una vida más sana. Con un enfoque personalizado y adaptable a tus necesidades, te brindamos las herramientas necesarias para transformar tu vida de manera efectiva. ¡Es hora de disfrutar de una vida llena de energía y vitalidad!",
  },
  {
    image: "https://dummyimage.com/720x600",
    title: "🥗 ¿Quieres perder peso sin caer en dietas insostenibles? 💪",
    text: "Aprende a comer de forma saludable y equilibrada, integrándolo en tu rutina diaria y dejando atrás las dietas difíciles de mantener. Nos adaptamos a tus necesidades y ritmo, brindándote apoyo constante en tu camino hacia un estilo de vida más balanceado y saludable.",
  },
  {
    image: "https://dummyimage.com/720x600",
    title:
      "💪 ¿Buscas un programa personalizado para incorporar hábitos saludables y perder peso? 🌟",
    text: "Nuestro plan de 13 semanas, totalmente adaptado a tus necesidades, te guiará en la adquisición de hábitos saludables y te acompañará en la pérdida de peso. ¡Embárcate en este viaje transformador y descubre el poder de un estilo de vida equilibrado!",
  },
];

function Services() {
  return (
    <div>
      <Title />
      {servicesData.map((service, key) => {
        return (
          <section key={`service-${key}`} className="body-font mb-8">
            <div
              className={`space-y-8 mx-auto flex ${
                key % 2 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col items-center`}
            >
              <div
                className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ${
                  key % 2 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={service.image}
                />
              </div>
              <div className="space-y-6 lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                  {service.title}
                </h3>
                {service.text.split(".").map((text, k) => (
                  <p
                    key={`service-${key}-${k}`}
                    className="leading-relaxed text-lg"
                  >
                    {text}
                  </p>
                ))}
                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                  <Link legacyBehavior href="/contacto">
                    <a className="rounded-full inline-flex items-center justify-center px-5 py-2.5 text-lg font-semibold text-black border-2 border-black hover:border-actitud-default hover:bg-actitud-default hover:text-white transition-all duration-200 focus:bg-black focus:text-white">
                      Pide una cita
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Services;
