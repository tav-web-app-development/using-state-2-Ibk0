import React, { useState } from "react";
import "../App.css"

export default function CheckoutForm({setShowCheckout}) {
    const [billingAddress, setBillingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
    });

    const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);
    const [shippingAddress, setShippingAddress] = useState({ ...billingAddress });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingAddress({ ...billingAddress, [name]: value.trim() });
    };

    const handleCheckboxChange = (e) => {
        setUseShippingAsBilling(e.target.checked);
        if (e.target.checked) {
            setShippingAddress({ ...billingAddress });
        }
    };

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress({ ...shippingAddress, [name]: value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCheckout(false);
        console.log("Submitted", { billingAddress, shippingAddress });
        alert(`Your address is saved!`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <div className="checkout-form">
            <h2>Billing Address</h2>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={billingAddress.firstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={billingAddress.lastName} onChange={handleChange} required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={billingAddress.address} onChange={handleChange} required />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={billingAddress.city} onChange={handleChange} required />
                </label>
                <label>
                    State:
                    <input type="text" name="state" value={billingAddress.state} onChange={handleChange} required />
                </label>
                <label>
                    PostalCode:
                    <input type="text" name="postalCode" value={billingAddress.postalCode} onChange={handleChange} required />
                </label>
            </div>
            {!useShippingAsBilling && (
                <div className="checkout-form">
                    <h2>Shipping Address</h2>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={shippingAddress.firstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={shippingAddress.lastName} onChange={handleChange} required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={shippingAddress.address} onChange={handleChange} required />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={shippingAddress.city} onChange={handleChange} required />
                </label>
                <label>
                    State:
                    <input type="text" name="state" value={shippingAddress.state} onChange={handleChange} required />
                </label>
                <label>
                    PostalCode:
                    <input type="text" name="postalCode" value={shippingAddress.postalCode} onChange={handleChange} required />
                </label>
            </div>
            )}
            <label>
                <input type="checkbox" checked={useShippingAsBilling} onChange={handleCheckboxChange} />
                Use shipping address as billing address
            </label>
            <button type="submit" >Submit</button>
        </form>
    );
}
