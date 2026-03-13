import Card from "./Components/Card";
import ProductCard from "./Components/ProductCard";

const App = () => {
  // const data = [
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/84/20/82/8420829bd36d33eb912543f97174b5cb.jpg",
  //     juice_name: "Orange Juice",
  //     ingredients: ["Fresh Oranges", "Sugar", "Ice"],
  //     price: 80,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/62/28/d0/6228d0af8369c15b8211e566aca604e4.jpg",
  //     juice_name: "Apple Juice",
  //     ingredients: ["Fresh Apples", "Honey", "Ice"],
  //     price: 90,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/81/5f/d1/815fd1a10ddab3a475bbe73b63a85784.jpg",
  //     juice_name: "Mango Juice",
  //     ingredients: ["Mango", "Milk", "Sugar"],
  //     price: 120,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/ad/2d/bd/ad2dbd862da797dc0895120d4c802ea0.jpg",
  //     juice_name: "Watermelon Juice",
  //     ingredients: ["Watermelon", "Mint", "Ice"],
  //     price: 70,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/3d/b6/0f/3db60f1ddded8d33f637258387f4df29.jpg",
  //     juice_name: "Pineapple Juice",
  //     ingredients: ["Pineapple", "Lemon", "Sugar"],
  //     price: 100,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/1200x/66/f6/ea/66f6eaf97872a7cbba406341ae4fe973.jpg",
  //     juice_name: "Pomegranate Juice",
  //     ingredients: ["Pomegranate", "Black Salt", "Ice"],
  //     price: 130,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/12/12/0c/12120c15bdb101ff44e088c094d4fd32.jpg",
  //     juice_name: "Carrot Juice",
  //     ingredients: ["Carrot", "Ginger", "Lemon"],
  //     price: 85,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/2d/0c/b6/2d0cb60e647c7aa5f50cb632eec82e6a.jpg",
  //     juice_name: "Strawberry Juice",
  //     ingredients: ["Strawberries", "Milk", "Sugar"],
  //     price: 140,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/736x/6b/b3/c7/6bb3c79e6d060b48617a2ff14193e959.jpg",
  //     juice_name: "Banana Smoothie",
  //     ingredients: ["Banana", "Milk", "Honey"],
  //     price: 110,
  //   },
  //   {
  //     photo:
  //       "https://i.pinimg.com/1200x/07/64/a6/0764a653192a11d809a6f7849bf28e84.jpg",
  //     juice_name: "Mixed Fruit Juice",
  //     ingredients: ["Apple", "Banana", "Orange", "Mango"],
  //     price: 150,
  //   },
  // ];

  const product = [
    {
      product_photo:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Sony_logo.svg",
      product_name: "Sony WH-1000XM5 Headphones",
      price: 34999,
      tagline: "Silence the world",
      details:
        "Premium noise-cancelling headphones with cinematic studio sound and luxurious comfort.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      product_name: "Apple Watch Series 9",
      price: 41900,
      tagline: "Future on your wrist",
      details:
        "Luxury smartwatch with advanced health tracking and stunning always-on display.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/JBL_logo.svg",
      product_name: "JBL Charge 5 Speaker",
      price: 15999,
      tagline: "Powerful cinematic sound",
      details:
        "High-power portable speaker delivering deep bass and immersive audio.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0d/Logitech_logo.svg",
      product_name: "Logitech G Pro Gaming Mouse",
      price: 8999,
      tagline: "Precision in every move",
      details:
        "Professional esports gaming mouse with ultra-fast response and precision tracking.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Samsonite_logo.svg",
      product_name: "Samsonite Pro Backpack",
      price: 6999,
      tagline: "Travel like a professional",
      details:
        "Premium laptop backpack built with sleek design and durable materials.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Corsair_logo.svg",
      product_name: "Corsair RGB Mechanical Keyboard",
      price: 18999,
      tagline: "Feel the power of keys",
      details:
        "High-performance mechanical keyboard with immersive RGB lighting.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
      product_name: "Xiaomi Smart Band 8",
      price: 4999,
      tagline: "Track every heartbeat",
      details:
        "Elegant fitness tracker with AMOLED display and advanced health insights.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1625842268584-8f3296236761",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Anker_logo.svg",
      product_name: "Anker USB-C Power Hub",
      price: 4999,
      tagline: "One hub. Endless power",
      details:
        "Premium multi-port USB-C hub designed for professionals and creators.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1601737487795-dab272f52420",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      product_name: "Samsung Portable SSD T7",
      price: 14999,
      tagline: "Speed meets elegance",
      details:
        "Ultra-fast portable SSD with sleek metallic design and secure storage.",
    },
    {
      product_photo:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      company_logo:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Philips_logo.svg",
      product_name: "Philips Smart LED Desk Lamp",
      price: 3999,
      tagline: "Light your creativity",
      details:
        "Modern LED desk lamp with adjustable lighting and eye-care technology.",
    },
  ];

  return (
    <>
      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {data.map(function (juice) {
          return <Card data={juice} />;
        })}
      </section> */}

      <section className="flex items-center flex-wrap py-4 px-6 gap-6 justify-center">
        {product.map(function (data) {
          return <ProductCard data={data} />;
        })}
      </section>
    </>
  );
};

export default App;
