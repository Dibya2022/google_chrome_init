import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-blue-900 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-blue-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "How do I make Chrome my default web browser?",
      a: "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome. Find specific instructions for your device here.",
    },
    {
      q: "What are Chrome's safety settings?",
      a: "Chrome uses cutting-edge safety and security features to help you manage your safety. Use Safety Check to instantly audit for compromised passwords, safe browsing status and any available Chrome updates. Learn more about safety and security on Chrome.",
    },
    {
      q: "What is Chrome’s password manager?",
      a: "Chrome uses Google Password Manager, which makes it simple to save, manage and protect your passwords online. It also helps you create strong, unique passwords for every account you use. Learn more about Google Password Manager.",
    },
    {
      q: "How do I add a browser extension to Chrome?",
      a: "It’s easy to add extensions to Chrome for desktop. Simply visit the Chrome Web Store, find and select the extension you want, and click Add to Chrome. Some extensions might need additional permissions. To use the extension, click on its icon to the right of the address bar. Learn more about extensions.",
    },
    {
      q: "How do I update Chrome?",
      a: "Normally updates happen in the background when you close and reopen your computer's browser. If you haven’t closed your browser in a while, you might see a pending update. Learn more about Chrome updates.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-5xl 0 font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
