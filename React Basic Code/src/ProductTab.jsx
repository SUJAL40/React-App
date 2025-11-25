import Product from "./Product.jsx";

function ProductTab(){
      return (
      <div>
        <Product title="Phone" price={30000} />
        <Product title="Laptop" price={60000} />
        </div>
    );  
}

export default ProductTab;