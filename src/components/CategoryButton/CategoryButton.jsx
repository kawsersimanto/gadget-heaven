import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const CategoryButton = ({ category, setActive, handleCategoryClick }) => {
  return (
    <button
      className={cn(
        "sm:py-3 sm:px-[22px] py-2 px-4 sm:text-base text-sm rounded-[32px] flex-shrink-0 text-light-gray-200 duration-300 transition-colors ease-in-out text-start",
        setActive
          ? "bg-primary text-white"
          : "bg-white-gray-100 hover:bg-primary hover:text-white"
      )}
      onClick={() => handleCategoryClick(category)}
    >
      {category?.name}
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  setActive: PropTypes.bool,
  handleCategoryClick: PropTypes.func,
};

export default CategoryButton;
