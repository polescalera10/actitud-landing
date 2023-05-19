import React, { useState } from "react";
import { sendEmail } from "../libs/api";

export type IMessage = {
  name: string;
  email: string;
  comment: string;
};

type FormElement = HTMLInputElement | HTMLTextAreaElement;

const CLEAN_FORM = {
  name: "",
  email: "",
  comment: "",
};

function ContactForm() {
  const [message, setMessage] = useState<IMessage>(CLEAN_FORM);

  const handleChange = (e: React.FormEvent<FormElement>) => {
    console.log(message);
    setMessage({ ...message, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!message.name) {
      return false;
    }
    if (
      !message.email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.email)
    ) {
      return false;
    }
    if (!message.comment) {
      return false;
    }
    await sendEmail(message);
    setMessage(CLEAN_FORM);
    console.log("hello");
  };

  return (
    <form className="flex w-full max-w-lg space-x-3">
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow">
        <div className="mb-6 text-3xl font-light text-center text-gray-800">
          Contacta a través de email
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className="relative">
              <input
                onChange={handleChange}
                value={message.name}
                type="text"
                id="name"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-actitud-dark focus:border-transparent"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                id="email"
                value={message.email}
                onChange={handleChange}
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-actitud-dark focus:border-transparent"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-actitud-dark focus:border-transparent"
                id="comment"
                value={message.comment}
                onChange={handleChange}
                placeholder="Escribe tu comentario..."
                name="comment"
                rows={5}
                cols={40}
              ></textarea>
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button
              onClick={handleSubmit}
              className="rounded-full w-full inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-actitud-default hover:bg-actitud-dark focus:bg-actitud-dark"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
