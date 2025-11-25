import './Product.css';
import Price from './Price.jsx';

function Product({title,idx}){
    let oldPrice = ["12,495","11,900","1,599","599"];
    let newPrice = ["10,999","9,999","1,299","499"];
    let description =[
        ["8,000 DPI","5 Buttons"],
        ["Intituive surface","Design for iPad Pro"],
        ["Design for iPad Pro","Intituive surface"],
        ["wireless","compact design"]
    ];
    return (
    <div className="Product">
       <h4>{title}</h4>
       <p>{description[idx][0]}</p>
       <p>{description[idx][1]}</p>
       <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
    );
}

export default Product;