import '../App.css';
import { useEffect, useState } from 'react';
import { Bookmarks, CartCheck, Share } from 'react-bootstrap-icons';

function ProductDetail() {

    const [productData, setproductData] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState();

        useEffect(() => {
            const fetchData = async () => {
                const result = await fetch('https://fakestoreapi.com/products/1');
                const res = await result.json();
                console.log(res);
                setproductData(res);
            }
            fetchData();
        },[])

    return(
        <div className='product'>
            <h1 className='centered'>Product Detail</h1>
            <div className='boxed-container '>
                <div className='productdetail'>
                    <div className='productImage'>
                        <img src={productData.image} alt='productImage' width={300} height={300} />
                    </div>
                    <div className='productDescription'>
                        <p className='category'><Bookmarks /> {productData.category}</p>
                        <h1>{productData.title}</h1>
                        <p className='content'>{productData.description}</p>
                        {/* <p>{productData.rating.rate} / 5 Total Reviews:{productData.rating.count} </p> */}
                        <h4 className='price'>Price: ${productData.price}</h4>
                        <div className='ctaHolder'>
                            <button>Add to Cart <CartCheck/> </button> &nbsp;
                            <button>Share Product <Share /> </button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;