import { Link } from "react-router-dom";

const Footer = () => {
  const menuSections = [
    {
      title: "Services",
      items: [
        { name: "Product Support", path: "/" },
        { name: "Order Tracking", path: "/" },
        { name: "Shipping & Delivery", path: "/" },
        { name: "Returns", path: "/" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", path: "/" },
        { name: "Careers", path: "/" },
        { name: "Contact", path: "/" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Terms of Service", path: "/" },
        { name: "Privacy Policy", path: "/" },
        { name: "Cookie Policy", path: "/" },
      ],
    },
  ];

  return (
    <footer className="py-[100px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-[32px] font-bold">Gadget Heaven</h2>
          <p className="text-light-gray-200 text-center">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="my-8" />
        <div className="flex sm:flex-nowrap flex-wrap sm:items-center sm:justify-center lg:gap-[168px] sm:gap-20 gap-10">
          {menuSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col lg:items-center lg:justify-center"
            >
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="flex flex-col gap-2 sm:items-center">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-light-gray-200 font-normal transition-colors duration-300 ease-in-out hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
