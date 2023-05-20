import { GetServerSideProps } from "next";
import React from "react";
import Head from "next/head";
import { graphConnect } from "@/config/hygraph";
import { getBibliotecasQuery } from "@/libs/queries";
import { IBiblioteca } from "@/libs/types";

interface IBibliotecaProps {
  bibliotecas: IBiblioteca[];
}

const Biblioteca = ({ bibliotecas }: IBibliotecaProps) => {
  return (
    <>
      <Head>
        <title>Biblioteca - Actitud Plan</title>
      </Head>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Cantidad de artículos científicos relacionados con el{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-actitud-default"></span>
                <span className="relative"> Actitudo Plan</span>
              </span>
            </h2>
          </div>
        </div>
      </section>

      {bibliotecas &&
        bibliotecas.map((link) => (
          <a key={link.id} target="_blank" href={link.link}>
            <div className="shadow-lg rounded-2xl bg-white p-4">
              <div className="flex-row gap-4 flex">
                <span className="text-lg font-medium text-black">
                  {link.title}
                </span>
              </div>
            </div>
          </a>
        ))}
    </>
  );
};

export default Biblioteca;

export const getServerSideProps: GetServerSideProps = async () => {
  const data: { bibliotecas: IBiblioteca[] } = await graphConnect.request(
    getBibliotecasQuery
  );
  const bibliotecas = data.bibliotecas;

  return { props: { bibliotecas } };
};
