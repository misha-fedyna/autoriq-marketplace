import SubmitMessageButton from "./SubmitMessageButton";

const ContactUsForm = () => {
  return (
    <div className="bg-white max-w-fit p-3 rounded-lg shadow-md ml-5">
      <h3 className="text-2xl font-bold mb-3 text-blue-500 text-center">
        Contact Us
      </h3>
      <form>
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
            placeholder="Enter your name"
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
            placeholder="Enter your email"
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
            placeholder="Enter your phone number"
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
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <SubmitMessageButton />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
