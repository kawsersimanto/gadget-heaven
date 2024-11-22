import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const CategoryButton = ({ children, setActive }) => {
  return (
    <button
      className={cn(
        "sm:py-3 sm:px-[22px] py-2 px-4 sm:text-base text-sm rounded-[32px] w-full text-light-gray-200 duration-300 transition-colors ease-in-out text-start",
        setActive
          ? "bg-primary text-white"
          : "bg-white-gray-100 hover:bg-primary hover:text-white"
      )}
    >
      {children}
    </button>
  );
};

CategoryButton.propTypes = {
  children: PropTypes.node.isRequired,
  setActive: PropTypes.bool,
};

export default CategoryButton;
