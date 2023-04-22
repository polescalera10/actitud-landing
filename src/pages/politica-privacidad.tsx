import Head from "next/head";

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Actitud Plan - Política de Privacidad</title>
        <meta
          name="description"
          content="Actitud Plan - Escuela de baile y comunidad joven"
        />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <section className="px-4 py-44 mx-auto max-w-7xl ">
        <div className="mb-24 text-left md:text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mb-5 text-base text-gray-500 md:text-lg">{`Actualizado: Enero ${new Date().getFullYear()}`}</p>
        </div>
        <div className="mx-auto prose">
          <p className="my-4">
            En Actitud Plan, accesible desde www.actitudplan.com, una de
            nuestras principales prioridades es la privacidad de nuestros
            visitantes. Esta Política de Privacidad documenta cómo Actitud Plan
            recopila, utiliza y protege su información personal cuando utiliza
            nuestro sitio web.
          </p>
          <p className="my-4">
            <strong>Información que es recogida</strong>
          </p>
          <p className="my-4">
            Nuestro sitio web podrá recoger información personal por ejemplo:
            Nombre,&nbsp; información de contacto como&nbsp; su dirección de
            correo electrónica e información demográfica. Así mismo cuando sea
            necesario podrá ser requerida información específica para procesar
            algún pedido o realizar una entrega o facturación.
          </p>
          <p className="my-4">
            <strong>Uso de la información recogida</strong>
          </p>
          <p className="my-4">
            Nuestro sitio web emplea la información con el fin de proporcionar
            el mejor servicio posible, particularmente para mantener un registro
            de usuarios, de pedidos en caso que aplique, y mejorar nuestros
            productos y servicios. &nbsp;Es posible que sean enviados correos
            electrónicos periódicamente a través de nuestro sitio con ofertas
            especiales, nuevos productos y otra información publicitaria que
            consideremos relevante para usted o que pueda brindarle algún
            beneficio, estos correos electrónicos serán enviados a la dirección
            que usted proporcione y podrán ser cancelados en cualquier momento.
          </p>
          <p className="my-4">
            Actitud Plan está altamente comprometido para cumplir con el
            compromiso de mantener su información segura. Usamos los sistemas
            más avanzados y los actualizamos constantemente para asegurarnos que
            no exista ningún acceso no autorizado.
          </p>
          <p className="my-4">
            <strong>Cookies</strong>
          </p>
          <p className="my-4">
            Una cookie se refiere a un fichero que es enviado con la finalidad
            de solicitar permiso para almacenarse en su ordenador, al aceptar
            dicho fichero se crea y la cookie sirve entonces para tener
            información respecto al tráfico web, y también facilita las futuras
            visitas a una web recurrente. Otra función que tienen las cookies es
            que con ellas las web pueden reconocerte individualmente y por tanto
            brindarte el mejor servicio personalizado de su web.
          </p>
          <p className="my-4">
            Nuestro sitio web emplea las cookies para poder identificar las
            páginas que son visitadas y su frecuencia. Esta información es
            empleada únicamente para análisis estadístico y después la
            información se elimina de forma permanente. Usted puede eliminar las
            cookies en cualquier momento desde su ordenador. Sin embargo las
            cookies ayudan a proporcionar un mejor servicio de los sitios web,
            estás no dan acceso a información de su ordenador ni de usted, a
            menos de que usted así lo quiera y la proporcione directamente
            noticias. Usted puede aceptar o negar el uso de cookies, sin embargo
            la mayoría de navegadores aceptan cookies automáticamente pues sirve
            para tener un mejor servicio web. También usted puede cambiar la
            configuración de su ordenador para declinar las cookies. Si se
            declinan es posible que no pueda utilizar algunos de nuestros
            servicios.
          </p>
          <p className="my-4">
            <strong>Enlaces a Terceros</strong>
          </p>
          <p className="my-4">
            Este sitio web pudiera contener en laces a otros sitios que pudieran
            ser de su interés. Una vez que usted de clic en estos enlaces y
            abandone nuestra página, ya no tenemos control sobre al sitio al que
            es redirigido y por lo tanto no somos responsables de los términos o
            privacidad ni de la protección de sus datos en esos otros sitios
            terceros. Dichos sitios están sujetos a sus propias políticas de
            privacidad por lo cual es recomendable que los consulte para
            confirmar que usted está de acuerdo con estas.
          </p>
          <p className="my-4">
            <strong>Control de su información personal</strong>
          </p>
          <p className="my-4">
            En cualquier momento usted puede restringir la recopilación o el uso
            de la información personal que es proporcionada a nuestro sitio
            web.&nbsp; Cada vez que se le solicite rellenar un formulario, como
            el de alta de usuario, puede marcar o desmarcar la opción de recibir
            información por correo electrónico. &nbsp;En caso de que haya
            marcado la opción de recibir nuestro boletín o publicidad usted
            puede cancelarla en cualquier momento.
          </p>
          <p className="my-4">
            Esta compañía no venderá, cederá ni distribuirá la información
            personal que es recopilada sin su consentimiento, salvo que sea
            requerido por un juez con un orden judicial.
          </p>
          <p className="my-4">
            Actitud Plan Se reserva el derecho de cambiar los términos de la
            presente Política de Privacidad en cualquier momento.
          </p>
          <p className="my-4">
            <strong>Contacto</strong>
          </p>
          <p className="my-4">
            Si tiene preguntas o inquietudes sobre nuestra Política de
            Privacidad, no dude en ponerse en contacto con nosotros a través de
            nuestro formulario de contacto en www.actitudplan.com/contacto.
          </p>
          <p className="my-4">
            Al utilizar nuestro sitio web, usted acepta nuestra Política de
            Privacidad y consiente la recopilación, uso y divulgación de su
            información personal según lo descrito en esta política.{" "}
          </p>
        </div>
      </section>
    </>
  );
}
