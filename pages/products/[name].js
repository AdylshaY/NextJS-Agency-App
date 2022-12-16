import React from "react";
import { data } from "../../data";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        {product.images.map((image) => (
          <div key={image.id} className={styles.imageContainer}>
            <Image
              src={image.url}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const product = data.filter((item) => item.name === name)[0];

  return {
    props: { product },
  };
};

export default Product;
