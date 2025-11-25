import './Product.css';

// Ensure the props are destructured correctly
function Product({title , price, feature, features}){
    const list = feature.map((feature)=> <li>{feature}</li>)
    return (
    <div className="Product">
        <h3>{title}</h3>
        <h5>Product Price : {price}</h5>
        <h5>Feature(Array): {list}</h5>
        <h5>Feature(Object): {features.a}</h5>
    </div>
    );
}

export default Product;