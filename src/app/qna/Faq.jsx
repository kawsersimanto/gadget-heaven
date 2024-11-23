import { Helmet } from "react-helmet";
import Faq from "../../components/faq/Faq";

const Qna = () => {
  // Array of FAQs
  const faqList = [
    {
      question: "What is the warranty on your gadgets?",
      answer: "All gadgets come with a one-year warranty.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
      question: "Can I return a product if I'm not satisfied?",
      answer: "Yes, you can return products within 30 days of purchase.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email.",
    },
    {
      question: "Do you offer discounts on bulk purchases?",
      answer:
        "Yes, we offer special discounts for bulk purchases. Contact us for more details.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Gadget Heaven | QNA</title>
        <meta
          name="description"
          content="Explore the latest gadgets on Gadget Heaven."
        />
      </Helmet>
      <div className="py-20 bg-primary">
        <div className="container">
          <h2 className="text-white text-center mb-4 lg:text-[32px] text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-white max-w-[796px] mx-auto">
            We&apos;re here to help you with any questions you may have about
            our products and services.
          </p>
        </div>
      </div>
      <section className="my-14">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            {faqList.map((faq, index) => (
              <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Qna;
