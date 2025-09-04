import React from 'react'

const Shipping = () => {
  return (
    <div>
         <div className="main-container flex flex-col md:w-[70vw] w-[90vw] m-auto mt-14 justify-center items-center gap-8">
                <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>Shipping Policy</span>
                <div className="box w-[100%] flex flex-col space-y-5 text-gray-800">
                    <p>At <strong>Luxora</strong> At [Your Store Name], we aim to deliver your orders quickly and safely. This Shipping Policy explains how we handle order processing, shipping timelines, costs, and other important details.</p>

                    <p> <strong>Order Processing:</strong>

All orders are processed within [6 business days, e.g., 1–2 working days] after payment confirmation. Orders placed on weekends or holidays will be processed on the next business day. You will receive an email confirmation with your order details once your purchase has been completed.</p>

                    <p><strong>Shipping Locations:</strong>

We currently ship to [list of locations – e.g., nationwide within Pakistan or international delivery]. If your location is outside our delivery area, we will notify you during checkout.</p>

                    <p><strong>Delivery Time:</strong>

Delivery times vary depending on your location and the shipping method chosen at checkout. Standard delivery usually takes [e.g., 3–7 business days], while express options may be faster. Please note that delivery times are estimates and may be affected by factors beyond our control, such as weather or courier delays.</p>

                    <p><strong>Shipping Costs:</strong>

Shipping charges are calculated at checkout based on the delivery location and selected shipping method. We may offer free shipping promotions on certain orders (e.g., above a minimum purchase amount).</p>

<p>
   <strong> Delays & Issues:</strong>

While we do our best to ensure timely delivery, delays can occasionally occur. We are not responsible for shipping delays caused by courier companies, customs clearance, or events beyond our control.
</p>
<p><strong>Tracking Your Orde:</strong>r

Once your order has been shipped, you will receive a tracking number via email or SMS, allowing you to follow your package until it reaches your doorstep.</p>
<p><strong>Lost or Damaged Packages:</strong>

If your package is lost or arrives damaged, please contact our customer service within [2 days, e.g., 48 hours] so we can investigate and arrange a replacement or refund where applicable.</p>
                </div>


            </div>
    </div>
  )
}

export default Shipping