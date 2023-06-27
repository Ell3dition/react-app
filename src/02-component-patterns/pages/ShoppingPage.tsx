import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

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
        <ProductCard product={PRODUCT}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={PRODUCT}>
          <ProductImage />
          <ProductTitle title="Cafe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
