import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import '../styles/customStyles.css'

const PRODUCT = {
  id: "1",
  title: "coffe",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={PRODUCT} className="bg-dark text-white">
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title="Cafe" className='text-white' />
          <ProductCard.Buttons className='custom-buttons'  />
        </ProductCard>

        <ProductCard product={PRODUCT} className="bg-dark text-white">
          <ProductImage className='custom-image' />
          <ProductTitle title="Cafe" className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={PRODUCT} style={{background:'#70D1F8'}}>
          <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
          <ProductTitle title="Cafe" style={{fontWeight:'bold'}}/>
          <ProductButtons style={{display:'flex' , justifyContent:'end'}} />
        </ProductCard>
      </div>
    </div>
  );
};
