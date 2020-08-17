import React,{FormEvent, useState} from 'react';

function ProductForm(){

    const [name,setName] = useState('');
    function handleCreateProduct(e:FormEvent){
        e.preventDefault
    }
    return(
        <div id="product-form" className="container">
            <h1>Product Form</h1>
        <main>
            <form onSubmit={handleCreateProduct}>
                <input type="text" name="name" placeholder="Name" value={name}
                onChange={(e)=>{}}
                />
            </form>
        </main>
        </div>
    );
}  

export default ProductForm;