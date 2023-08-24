import { CSSProperties, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

import {
  Product,
  ProductContextProps,
  OnChangeArg,
  InitialValues,
  ProductCardHandlers,
  
} from "../interfaces/interfaces";


export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers)=> JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args:OnChangeArg)=>void
  value?:number
  initialValues?: InitialValues
 }
   

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues}: Props) => {
  const { counter, increaseBy, maxCount,isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues});
  return (
    <Provider value={{ counter, increaseBy, product, maxCount}}>
      <div className={`${styles.productCard} ${className}`} style={style}>
          {children({
            count: counter,
            isMaxCountReached,
            increaseBy,
            product,
            reset,
            maxCount: initialValues?.maxCount
          })
        }
      </div>
    </Provider>
  );
};
