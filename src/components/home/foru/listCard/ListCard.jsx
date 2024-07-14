import React, { useEffect, useState } from "react";
import { Card } from "../../../elements/Card";
import data from "../../../../Product";
export const ListCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

//   format harga 
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  //untuk meng limit map
  const limitedProducts = products.slice(0, 10);
  return (
    <div className="grid grid-cols-6 gap-3">
        {/* kalo mau di limit ganti products jadi limitedProducts */}
      {products.map((product) => (
        <Card
            key={product.id}
          image={product.image}
          nama={product.name}
          harga={formatPrice(product.price)}
          daerah={product.daerah}
          rating={product.rating}
          terjual={product.terjual}
        />
      ))}
    </div>
  );
};
