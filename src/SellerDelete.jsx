import { useForm } from "react-hook-form";
import cart from "./images/shopping-cart.png";
import SellerNavbar from "./Components/SellerNavbar";
import './css/SellerAddItem.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    itemName: yup.string().required("Item Name should be required please"),
    category: yup.string().required(),
    serialNo: yup.string().required(),
    sellingPrice: yup.number().positive().required(),
    quantity: yup.number().positive().required(),
    date: yup.string().required(),



});

function SellerDelete (){
    const { register, handleSubmit, formState:{errors } }= useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
    };
    return (
        <div>
            {/*Header Start*/}


            <div id="top-bar" >
                <div id="top-bar1">
                    <img id="image" alt="cart" src={cart} width="70"/>
                    <div id="shopping">Shopping.com</div>
                    <a id="link" href="/signUpMain"><div id="signUp"><div id="signUp11">Sign Up</div></div></a>
                    <a id="link" href="/firstPage"><div id="login"><div id="login11">Login</div></div></a>
                </div>
            </div>

            <div id="head">
                <div id="head1">
                    <div id="navigation-bar">
                        <a id="link" href="/home"><div id="welcome">Welcome</div></a>
                        <a id="link" href="/fashion"><div id="item">Items</div></a>
                        <a id="link" href="/cart"><div id="cart">Shopping Cart</div></a>
                        <a id="link" href="/home"><div id="contact">About us</div></a>
                    </div>
                </div>
            </div>

            <SellerNavbar/>

            <div className="App">
                <div className="Form">
                    <div className="title">Seller Item Page</div>
                    <div className="inputs">
                        <form onSubmit={handleSubmit(submitForm)}>
                            <label>Item Name</label>
                            <input
                                id="input1"
                                type="text"
                                name="itemName"
                                {...register('itemName')}
                                placeholder="Item Name..."
                            />
                            <p> {errors.itemName?.message} </p>


                            <label className="l2">Category</label>
                            <input
                                id="input2"
                                type="text"
                                name="category"
                                placeholder="Category..."
                                {...register('category')}
                            />
                            <p> {errors.category?.message} </p>


                            <label className="l3">Serial No</label>
                            <input
                                id="input3"
                                type="number"
                                name="serialNo"
                                placeholder="Serial No..."
                                {...register('serialNo')}
                            />
                            <p> {errors.serialNo?.message} </p>


                            <label className="l4">Selling Price</label>

                            <input
                                id="input4"
                                type="number"
                                name="sellingPrice"
                                placeholder="Selling Price..."
                                {...register('sellingPrice')}
                            />
                            <p> {errors.sellingPrice?.message} </p>


                            <label className="l5">Quantity</label>
                            <input
                                id="input5"
                                type="number"
                                name="quantity"
                                placeholder="Quantity..."
                                {...register('quantity')}
                            />
                            <p> {errors.quantity?.message} </p>


                            <label className="l6">Date</label>
                            <input
                                id="input6"
                                type="string"
                                name="date"
                                placeholder="Date..."
                                {...register('date')}
                            />
                            <p> {errors.date?.message} </p>

                            <button type="submit" id="Add" >DELETE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SellerDelete;




