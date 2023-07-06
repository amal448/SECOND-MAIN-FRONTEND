import useFetch from "../../../hooks/useFetch";
import React, { useState } from 'react'


const PayButton = ({ items }) => {
    // const PayButton = () => {

    console.log("Items in payButton", items)
    const postRequest = useFetch('POST')


    const handleClick = () => {

        try{

            console.log('*************************')
    
            // e.preventDefault();
            // console.log("items in pay", items)
    
            postRequest('/user/create-checkout-session', items).then((payment) => {
    
                console.log("payment",payment)
                if (payment.url) {
    
                    window.location.href=payment.url
                }
    
            }).catch((error) => {
                console.log("error is corrected",error);
                return error
            })


        }catch(error){
            console.log("error is occured here",error)
        }

    }
    // const  handleClick=()=>{
    //     console.log('Hellooo its meeeeeeeeeeeeeeeee');
    // }
    return (
        <div>
            <button type="button" onClick={handleClick}>Pay</button>
        </div>
    );

}
export default PayButton
