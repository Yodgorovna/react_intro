// src/App.jsx
import React from "react";
import "./App.css";
import { ProductCard } from "./components/product-card";

function App() {
  const products = [
    {
      cardImg: "./src/images/1984.png",
      title: "1984",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/RichDad.png",
      title: "Rich dad poor dad",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/kod8.png",
      title: "Код 8",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/kiz.png",
      title: "Даниел КИЗ",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/beparvolik.png",
      title: "Бепарволикнинг но...",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
  ];

  const audioproducts = [
    {
      cardImg: "./src/images/ego.png",
      title: "1984",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/rokit.png",
      title: "Rich dad poor dad",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/beparvolik.png",
      title: "Бепарволикнинг но...",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/stellite.png",
      title: "Код 8",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
    {
      cardImg: "./src/images/cite.png",
      title: "Даниел КИЗ",
      janr: "SIYOSAT, FANTASTIKA",
      starImg: "./src/images/svg/star.svg",
      headphone: "./src/images/svg/headphone-line.svg",
      book: "./src/images/svg/booksvg.svg",
    },
  ];

  return (
    <div className="product-section">
      <h1 className="section-title">Янги қўшилганлар</h1>
      <div className="product-cards">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            cardImg={product.cardImg}
            title={product.title}
            janr={product.janr}
            starImg={product.starImg}
            headphone={product.headphone}
            book={product.book}
          />
        ))}
      </div>
      <h1 className="section-title">Аудио китоблар</h1>
      <div className="product-cards">
        {audioproducts.map((product, index) => (
          <ProductCard
            key={index}
            cardImg={product.cardImg}
            title={product.title}
            janr={product.janr}
            starImg={product.starImg}
            headphone={product.headphone}
            book={product.book}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import { ProductCard } from "./components/product-card";

// function App() {
//   const products = [
//     {
//       cardImg: "./src/images/1984.png",
//       title: "1984",
//       janr: "SIYOSAT, FANTASTIKA",
//       starImg: "../src/images/svg/star.svg",
//       headphone: "./src/images/svg/headphone-line.svg",
//       book: "./src/images/svg/booksvg.svg",
//     },
//     {
//       cardImg: "./src/images/1984.png",
//       title: "1984",
//       janr: "SIYOSAT, FANTASTIKA",
//       starImg: "./src/images/svg/star.svg",
//       headphone: "./src/images/svg/headphone-line.svg",
//       book: "./src/images/svg/booksvg.svg",
//     },
//     {
//       cardImg: "./src/images/1984.png",
//       title: "1984",
//       janr: "SIYOSAT, FANTASTIKA",
//       starImg: "./src/images/svg/star.svg",
//       headphone: "./src/images/svg/headphone-line.svg",
//       book: "./src/images/svg/booksvg.svg",
//     },
//     {
//       cardImg: "./src/images/1984.png",
//       title: "1984",
//       janr: "SIYOSAT, FANTASTIKA",
//       starImg: "./src/images/svg/star.svg",
//       headphone: "./src/images/svg/headphone-line.svg",
//       book: "./src/images/svg/booksvg.svg",
//     },
//     {
//       cardImg: "./src/images/1984.png",
//       title: "1984",
//       janr: "SIYOSAT, FANTASTIKA",
//       starImg: "./src/images/svg/star.svg",
//       headphone: "./src/images/svg/headphone-line.svg",
//       book: "./src/images/svg/booksvg.svg",
//     },
//   ];
//   return (
//     <div className="product-cars">
//       {products.map((product, index) => (
//         <ProductCard
//           key={index}
//           cardImg={products.cardImg}
//           title={products.title}
//           janr={products.janr}
//           starImg={products.starImg}
//           headphone={products.headphone}
//           book={products.book}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
