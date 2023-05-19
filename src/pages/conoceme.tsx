import Head from "next/head";
import React from "react";

function conoceme() {
  return (
    <>
      <Head>
        <title>Hola! Soy Montse</title>
      </Head>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Guío a las personas hacia hábitos alimenticios{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-actitud-default"></span>
                <span className="relative"> saludables y equilibrados</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <img
              className="w-full mx-auto sm:max-w-xs"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"
              alt=""
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Hola! Soy Montse, Dra en ciencias biológicas.
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Licenciada y doctorada en ciencias biológicas por la Universidad
                de Barcelona. Llevo más de veinte años dedicándome a la
                investigación, principalmente relacionada con la genética
                molecular y la microbiota. He cursado el Máster en Nutrición y
                Salud en la Universidad Abierta de Cataluña y estoy titulada
                como terapeuta nutricional por la Health Science Academy y la
                International Open Academy.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                He tenido el privilegio de trabajar en numerosos proyectos en
                prestigiosos centros de investigación de nuestro país, así como
                en el extranjero, entre ellos la Universidad de Nottingham en el
                Reino Unido, La Universidad de Cornell en los Estados Unidos, la
                Universidad de Western Australia y la Curtin University, ambas
                en Australia. Más de una veintena de publicaciones científicas
                avalan mi trabajo
              </p>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">
                ¿Cuál es mi objetivo?
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Desde 2017, pongo mi conocimiento sobre nutrición y salud al
                servicio de las personas para transferir conocimientos que
                ayuden a mantener un estilo de vida saludable, haciendo un
                acompañamiento profesional y efectivo para la implementación de
                hábitos saludables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default conoceme;
