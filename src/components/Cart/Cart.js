import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart,removeAll}) => {
    //conditional rendering
    //1. element variable
    //2. ternary operator, condition ? true:false
    //3. && operator
    //4. || operator
    let command;
    if(cart.length===0){
        command = <p>Please add at least 1 item</p>
    }
    else if(cart.length===1){
        command = <p>Please add more</p>
    }
    else{
        command= <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
            {
                cart.map(tShirt=><p>
                    
                    {tShirt.name}
                    < button onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                    </p> )
            }
            {cart.length===0 || <p className='orange'>Continue buying..</p>}
            {cart.length===3 && <div className='orange'>
                <h3>You Added 3 items</h3>
                <p>Add more..</p>
                </div>}
            {command}
            {cart.length<2 ? <p>Keep adding</p> : <button onClick={()=>removeAll()}>Remove All</button>}
            {cart.length>=1 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;