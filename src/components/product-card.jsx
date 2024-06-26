// src/components/ProductCard.jsx
import React from "react";

export const ProductCard = ({
  cardImg,
  title,
  janr,
  starImg,
  headphone,
  book,
}) => {
  return (
    <div className="product-card">
      <img src={cardImg} alt={`${title} image`} />
      <div className="product-content">
        <div className="title">{title}</div>
        <div className="janr">{janr}</div>
        <div className="svgs">
          <img src={starImg} alt="star" className="star" />
          <div className="svgss">
            <img src={headphone} alt="headphone" className="headphone" />
            <img src={book} alt="book" className="book" />
          </div>
        </div>
      </div>
    </div>
  );
};

// import React from "react";

// export const ProductCard = ({
//   cardImg,
//   title,
//   janr,
//   starImg,
//   headphone,
//   book,
// }) => {
//   return (
//     <div className="product-card">
//       <img src="{cardImg}" />
//       <div className="product-content">
//         <div className="title">{title}</div>
//         <div className="janr">{janr}</div>
//         <div className="svgs">
//           <img src="{starImg}" alt="star" className="star" />
//           <div className="svgss">
//             <img src="{headphone}" alt="star" className="headphone" />
//             <img src="{book}" alt="star" className="book" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
