import './Product.css';

function Product({title , price}){
    let styles = {backgroundColor: price>30000?"lightRed":""};
    return (
    <div className="Product" style={styles}>
        <h3>{title}</h3>
        <h5>Product Price : {price}</h5>
        {price>30000 ? <p>Discount:5%</p>:null}
    </div>
    );
}

export default Product;