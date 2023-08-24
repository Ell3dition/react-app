import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/customStyles.css";
import { products } from "../data/products";

const product = products[0]

export const ShoppingPage = () => {

 
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            initialValues={{
              count:4,
              maxCount:10
            }}
          >
            {
              ({reset, increaseBy, count, isMaxCountReached})=>(
                <>
                  <ProductImage className="custom-image" />
                  <ProductTitle title="Cafe" className="text-white" />
                  <ProductButtons className="custom-buttons" />

                  <button onClick={reset}>Reset</button>
                  <button onClick={()=>increaseBy(-2)}>-2</button>
                  {
                    !isMaxCountReached &&  <button onClick={()=>increaseBy(2)}>+2</button>
                  }
                 
                  <span>{count}</span>
                </>
              )
            }

          
          </ProductCard>
    </div>
  );
};
