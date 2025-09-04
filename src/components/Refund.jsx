import React from 'react'

const Refund = () => {
    return (
        <div>
            <div className="main-container flex flex-col md:w-[70vw] w-[90vw] m-auto mt-14 justify-center items-center gap-8">
                <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>Refund Policy</span>
                <div className="box w-[100%] flex flex-col space-y-5 text-gray-800">
                    <p>At <strong>Luxora</strong> we want our customers to shop with confidence. If for any reason you are not satisfied with your purchase, our Refund & Return Policy explains how you can return products and receive a refund or replacement.</p>

                    <p> <strong>Eligible Products:</strong>

Most items can be returned; however, certain products are non-returnable for health and safety reasons. These include personalized items, opened cosmetics, undergarments, clearance or sale items, and digital goods. Please make sure to check product eligibility before requesting a return.</p>

                    <p><strong>Condition of Returned Items:</strong>

To be eligible for a return, products must be unused, unworn, and in their original condition, with all tags, packaging, and accessories included. Items that show signs of wear, damage, or alteration may not be accepted for return.</p>

                    <p><strong>Refund Method:</strong>

Once your return is approved, refunds will be issued to your original payment method (credit card, debit card, PayPal, etc.) within 5–7 business days. In some cases, we may also offer store credit or exchanges if preferred. Please note that banks and payment providers may take additional time to reflect the refund in your account.</p>

                    <p><strong>Return Shipping Costs:</strong>

Unless the product is defective, damaged, or incorrect, the customer is responsible for return shipping costs. We recommend using a trackable shipping service, as we cannot guarantee that we will receive your returned item without proof of delivery.</p>

<p>
    <strong>Damaged or Wrong Items:</strong>

If you receive a product that is damaged, defective, or not what you ordered, please contact us within 48 hours of delivery. In such cases, we will cover all return shipping costs and send you a replacement or issue a full refund.
</p>
<p><strong>Processing Time:</strong>

Once we receive your returned item, we will inspect it and notify you about the status of your refund. Refunds are usually processed within 7–10 business days after approval.</p>
                </div>


            </div>
        </div>
    )
}

export default Refund