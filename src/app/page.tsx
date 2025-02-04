import Image from "next/image";
import styles from "./page.module.css";

import CardProductComponent from "../app/components/Product/CardProduct/CardProductComponent";
import Products from "../app/utils/jsons/Products";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          
          <div className="list_products">
          {Products.map((product) => {
            return <CardProductComponent key={product.id} product={product} />;
          })}
          </div>
          

        
       </main>
      </div>
    </>
  );
}
