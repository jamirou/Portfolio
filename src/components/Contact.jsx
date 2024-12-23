import React from "react";

const Contact = () => {
  return (
    <div
      name="contacto"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contacto
          </p>
          <p className="py-6">Envía el formulario para contactarme</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/08a617cf-40fa-4569-a553-5b0e61a23677"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-gray-500 to-black-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Conversemos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;