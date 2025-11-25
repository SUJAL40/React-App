import Product from "./Product.jsx";

function ProductTab(){
  let option = ["hi-tech ", "durable ", "fast"];
  let opt2 = {a: "hi-tech ", b: " durable"};

    return (
      <div>
        <Product title="Phone" price={30000} feature={option} features={opt2}/>
        <Product title="Laptop" price={60000} feature={option} features={opt2}/>
        <Product title="Tab" price={50000} feature={option} features={opt2}/>
      </div>
    );  
}

export default ProductTab;