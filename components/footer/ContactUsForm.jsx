import SubmitMessageButton from "./SubmitMessageButton";

const ContactUsForm = () => {
  return (
    <form className="mx-[80px] max-sm:mx-[35px]">
      <input type="hidden" id="property" name="property" />
      <input type="hidden" id="recipient" name="recipient" />
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Ім'я:
        </label>
        <input
          className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Введіть ім'я"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Пошта:
        </label>
        <input
          className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Введіть пошту"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Телефон:
        </label>
        <input
          className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          name="phone"
          type="text"
          placeholder="Введіть номер телефону"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="body"
        >
          Повідомлення:
        </label>
        <textarea
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 h-20 w-[300px] focus:outline-none focus:shadow-outline"
          id="body"
          name="body"
          placeholder="Введіть повідомлення"
        ></textarea>
      </div>
      <div>
        <SubmitMessageButton />
      </div>
    </form>
  );
};

export default ContactUsForm;
