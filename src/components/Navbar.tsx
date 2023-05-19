import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    { text: "Conóceme", slug: "conoceme" },
    { text: "Servicios", slug: "servicios" },
    { text: "Blog", slug: "blog" },
    { text: "Biblioteca", slug: "biblioteca" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link legacyBehavior href="/">
                  <a className="">Logo</a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md lg:hidden hover:text-actitud-default focus:text-actitud-default focus:bg-green-100 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden space-y-4">
                  <>
                    {navigation.map((item, index) => (
                      <Link legacyBehavior key={index} href={`/${item.slug}`}>
                        <a className="w-full px-4 py-2 -ml-4 text-base font-semibold text-black rounded-md hover:text-actitud-default focus:text-actitud-default focus:bg-green-100 focus:outline-none">
                          {item.text}
                        </a>
                      </Link>
                    ))}
                    <Link legacyBehavior href="/contacto">
                      <a className="rounded-full w-full inline-flex items-center justify-center py-2.5 text-base font-semibold text-black border-2 border-black hover:border-actitud-default hover:bg-actitud-default hover:text-white transition-all duration-200 focus:bg-black focus:text-white">
                        Pide una cita
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link legacyBehavior href={`/${menu.slug}`}>
                  <a className="inline-block px-4 py-2 text-base font-semibold text-black no-underline rounded-md hover:text-actitud-default focus:text-actitud-default focus:bg-actitud-lighter focus:outline-none">
                    {menu.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link legacyBehavior href="/contacto">
            <a className="rounded-full inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:border-actitud-default hover:bg-actitud-default hover:text-white transition-all duration-200 focus:bg-black focus:text-white">
              Pide una cita
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
