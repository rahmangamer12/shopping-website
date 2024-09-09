// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <Link href={`/product/${product.id}`}>
        <Link href={""}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-700">{product.title}</h3>
          <p className="text-gray-500">{product.price}</p>
        </Link>
      </Link>
    </div>
  );
};

export default ProductCard;
