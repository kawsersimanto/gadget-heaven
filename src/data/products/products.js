const products = [
  {
    product_id: "L001",
    product_title: "MacBook Pro 14-inch",
    category: "Laptops",
    price: 1999,
    description: "Powerful performance with M2 Pro chip.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.7,
  },
  {
    product_id: "L002",
    product_title: "Dell XPS 13",
    product_image: "/products/dell.jpg",
    category: "Laptops",
    price: 1199,
    description: "Lightweight and powerful laptop for everyday use.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.5,
  },
  {
    product_id: "L003",
    product_title: "HP Spectre x360",
    product_image: "/products/hp.jpg",
    category: "Laptops",
    price: 1499,
    description: "Versatile 2-in-1 laptop with powerful features.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.6,
  },
  {
    product_id: "P002",
    product_title: "Samsung Galaxy S23 Ultra",
    product_image: "/products/samsung-phone.jpg",
    category: "Phones",
    price: 1199,
    description: "Experience top-tier performance with Galaxy S23 Ultra.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.9,
  },
  {
    product_id: "P003",
    product_title: "Google Pixel 8 Pro",
    product_image: "/products/pixel.jpg",
    category: "Phones",
    price: 999,
    description: "Advanced AI capabilities with Google Tensor G3 chip.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.7,
  },
  {
    product_id: "P004",
    product_title: "OnePlus 11 Pro",
    product_image: "/products/oneplus.jpg",
    category: "Phones",
    price: 899,
    description: "Flagship performance with ultra-smooth display.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.6,
  },
  {
    product_id: "S001",
    product_title: "Apple Watch Series 9",
    product_image: "/products/apple-watch-ultra.jpg",
    category: "Smart Watches",
    price: 399,
    description: "Ultimate health and fitness companion.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.8,
  },
  {
    product_id: "S002",
    product_title: "Samsung Galaxy Watch 6",
    // product_image: "/products/samsung-galaxy-watch.jpg",
    category: "Smart Watches",
    price: 329,
    description: "Advanced health monitoring and fitness features.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.5,
  },
  {
    product_id: "S003",
    product_title: "Fitbit Sense 2",
    product_image: "/products/google-fitbit-sense.jpg",
    category: "Smart Watches",
    price: 299,
    description: "Comprehensive health and wellness tracking.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.4,
  },
  {
    product_id: "S004",
    product_title: "Garmin Venu 2",
    product_image: "/products/germin-venu.jpg",
    category: "Smart Watches",
    price: 349,
    description: "High-quality GPS smartwatch with health monitoring.",
    specification: `<ul>
      <li>14-inch Liquid Retina XDR display</li>
      <li>M2 Pro chip</li>
      <li>16GB RAM</li>
      <li>512GB SSD</li>
      <li>Battery life up to 17 hours</li>
    </ul>`,
    availability: true,
    rating: 4.6,
  },
];

export default products;
