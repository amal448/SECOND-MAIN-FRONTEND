import useFetch from "../../../hooks/useFetch";
import React, { useState } from 'react'


const PayButton = ({ items }) => {
    // const PayButton = () => {

    // console.log("paymentItems9876554333", items)
    const postRequest = useFetch('POST')


    const handleClick = () => {
        console.log('*************************')
        // e.preventDefault();
        // console.log("items in pay", items)

        postRequest('/user/create-checkout-session', items).then((payment) => {

            if (payment.data.url) {

                // window.location.href=payment.data.url
            }

        }).catch((error) => {
            return error
        })

    }
    return (
        <div>
            <button onClick={handleClick}>Pay</button>
        </div>
    );

}
export default PayButton
    // function handleClick() {
    //     console.log('Hellooo ');
    // }
