import PropTypes from "prop-types";

const Faq = ({ question, answer }) => {
  return (
    <div className="collapse collapse-plus bg-purple-200">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
