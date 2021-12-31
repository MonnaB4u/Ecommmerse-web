import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;

    // console.log(cart);

    const total = cart.reduce((total, prd) => total + prd.price, 0);
    //     let total=0;
    //    for (let i = 0; i < cart.length; i++) {
    //        const product = cart[i];
    //        total = total + product.price;
    //    }
    let shipping = 0;
    if (total > 200) {
        shipping = 0
    } else if (total >= 100) {
        shipping = 20;
    } else if (total >= 150) {
        shipping = 10;
    }
    const tax = (total % 10).toFixed(2)
    const grandtotal = (total + shipping + Number(tax))
    const grandtotalAgain = grandtotal.toFixed(2)


    const { ID } = useParams();
    const findId = cart.find(product => product.key.toString() === ID)
    // const findName = cart.find(product => product.name.toString())

    const navigation = useNavigate()

    const handleOrder = () => {
        if (cart.length === 0) {
            alert("Please Add to Cart First Before You Order ")
        } else {
            navigation(`/confirmOrder${findId.key}`)
        }
    }

    return (
        <div className="border mx-4 mt-3">
            <div className="m-3 col">
                <p className="h4">Product Summary {cart.length}</p>
                <small>Name: { }</small>
                <p className="h6">Total price: ${grandtotalAgain} </p>
                <p className="h6">Shipping Cost:$ {shipping} </p>
                <p className="h6"> Tax + Vat : {tax} </p>
                <button onClick={() => handleOrder(findId)} className="addCartbtn bg-danger text-white my-3 mx-3">Order Confirm</button>
            </div>


            <p>{ }</p>
        </div>
    );
};

export default Cart;
