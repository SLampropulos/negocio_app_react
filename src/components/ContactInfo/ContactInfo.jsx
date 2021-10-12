import React from 'react'

function ContactInfo({idCompra, mail}) {
    return (
        <div>
            <h1>Feliciatacions se a realizado su compra!</h1>
            <h4>Su id de compra es: {idCompra}</h4>
            <p>Se le comunicara por medio de su mail, {mail}</p>

        </div>
    )
}

export default ContactInfo
