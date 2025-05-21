"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubmitMessageButton = () => {
  const [pending, setPending] = useState(false);

  return pending ? (
    <button
      disabled
      className="bg-blue-300 text-white font-bold py-2 px-4 rounded-full w-[300px] flex items-center justify-center animate-pulse"
    >
      Завантаження...
    </button>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-[300px] focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="submit"
      disabled={pending}
      onClick={() => setPending(true)}
    >
      <FaPaperPlane className="mr-2" />
      Надіслати
    </button>
  );
};

export default SubmitMessageButton;
