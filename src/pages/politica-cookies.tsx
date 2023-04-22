import React from "react";
import Head from "next/head";

function politicaCookies() {
  return (
    <>
      <Head>
        <title>Actitud Plan - Política de Cookies</title>
        <meta
          name="description"
          content="Actitud Plan - Escuela de baile y comunidad joven"
        />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <section className="px-4 py-44 mx-auto max-w-7xl ">
        <div className="mb-24 text-left md:text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Política de Cookies
          </h1>
          <p className="mb-5 text-base text-gray-500 md:text-lg">{`Actualizado: Enero ${new Date().getFullYear()}`}</p>
        </div>
        <div className="mx-auto prose">
          <p className="my-4">
            En Actitud Plan, accesible desde www.actitudplan.com, utilizamos
            cookies para mejorar la experiencia de nuestros visitantes y
            proporcionarles un sitio web más personalizado. Esta Política de
            Cookies explica qué son las cookies, cómo las utilizamos y cómo
            puede gestionarlas.
          </p>
          <p className="my-4">
            <strong>¿Qué son las cookies?</strong>
          </p>
          <p className="my-4">
            Las cookies son pequeños archivos de texto que se almacenan en su
            dispositivo cuando visita un sitio web. Estos archivos permiten que
            un sitio web recuerde sus preferencias, rastree su navegación y
            recopile información sobre su comportamiento en línea.
          </p>
          <p className="my-4">
            <strong>Cookies que utilizamos</strong>
          </p>
          <p className="my-4">
            Actitud Plan utiliza dos tipos de cookies: cookies propias y cookies
            de terceros. Las cookies propias son aquellas que colocamos en su
            dispositivo para mejorar la funcionalidad de nuestro sitio web. Las
            cookies de terceros son aquellas colocadas por otros sitios web o
            servicios que utilizamos para mejorar su experiencia en nuestro
            sitio web.
          </p>
          <p className="my-4">
            Actitud Plan está altamente comprometido para cumplir con el
            compromiso de mantener su información segura. Usamos los sistemas
            más avanzados y los actualizamos constantemente para asegurarnos que
            no exista ningún acceso no autorizado.
          </p>
          <p className="my-4">
            <strong>Cookies propias</strong>
          </p>
          <p className="my-4">
            Cookies de preferencias: Estas cookies nos permiten recordar sus
            preferencias y personalizar su experiencia en nuestro sitio web.
          </p>
          <p className="my-4">
            Cookies de seguridad: Utilizamos estas cookies para mantener segura
            su información y proteger nuestro sitio web de actividades
            maliciosas.
          </p>
          <p className="my-4">
            <strong>Cookies de terceros</strong>
          </p>
          <p className="my-4">
            Google Analytics: Utilizamos Google Analytics para recopilar
            información sobre cómo los visitantes utilizan nuestro sitio web,
            como las páginas visitadas y el tiempo que pasan en ellas. Esta
            información nos ayuda a mejorar nuestro sitio web y a ofrecer una
            mejor experiencia al usuario. Puede obtener más información sobre
            las cookies de Google Analytics en la Política de privacidad de
            Google.
          </p>
          <p className="my-4">
            Calendly: Utilizamos Calendly para facilitar la programación de
            citas y consultas en nuestro sitio web. Calendly utiliza cookies
            para recordar sus preferencias y proporcionar un servicio más
            personalizado. Puede obtener más información sobre las cookies de
            Calendly en la Política de privacidad de Calendly.{" "}
          </p>
          <p className="my-4">
            <strong>Gestionar sus preferencias de cookies</strong>
          </p>
          <p className="my-4">
            Puede configurar su navegador para bloquear o eliminar cookies en
            cualquier momento. Sin embargo, tenga en cuenta que algunas
            funciones de nuestro sitio web podrían verse afectadas si
            deshabilita las cookies.
          </p>
          <p className="my-4">
            Para obtener información sobre cómo administrar las preferencias de
            cookies en su navegador, consulte la documentación de su navegador o
            visite las siguientes páginas:
          </p>
          <p className="my-4">
            Google Chrome Mozilla Firefox Safari Microsoft Edge Opera
          </p>
          <p className="my-4">
            Al utilizar nuestro sitio web, usted acepta el uso de cookies según
            lo descrito en esta política.
          </p>
        </div>
      </section>
    </>
  );
}

export default politicaCookies;
