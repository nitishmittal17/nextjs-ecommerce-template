import Home from "@/components/Home";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template (Async)",
  description: "This is Home for NextCommerce Template with Async AB Tasty",
  // other metadata
};

export default function HomeAsyncPage() {
  return (
    <>
      {/* AB Tasty Async Script */}
      <Script
        id="abtasty-async"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (i, s, o, g, r, a, m) {
              i["abtiming"] = 1 * new Date();
              a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, "script", "//try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js");
          `
        }}
      />
      
      {/* AB Tasty Mock Transaction Event */}
      <Script
        id="abtasty-transaction"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Wait for AB Tasty to be loaded
            (function checkAbtasty() {
              if (typeof window.abtasty !== 'undefined' && typeof window.abtasty.send === 'function') {
                // Generate random transaction values
                const randomId = 'OD' + Math.floor(Math.random() * 1000 + 100);
                const transactionNames = ['Purchase', 'Order', 'Checkout', 'Sale', 'Payment'];
                const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY'];
                const couponCodes = ['SAVE10', 'WELCOME', 'SUMMER20', 'NEWUSER', 'FREESHIP'];
                const paymentMethods = ['PayPal', 'Credit Card', 'Debit Card', 'Stripe', 'Apple Pay', 'Google Pay'];
                const shippingMethods = ['FedEx', 'UPS', 'DHL', 'USPS', 'Amazon Prime'];
                
                const itemCount = Math.floor(Math.random() * 20 + 1); // Random item count between 1 and 20
                
                const randomTransaction = {
                  tid: randomId,
                  ta: transactionNames[Math.floor(Math.random() * transactionNames.length)],
                  tr: (Math.random() * 1000 + 10).toFixed(2), // Random revenue between 10 and 1010
                  ts: (Math.random() * 20).toFixed(2), // Random shipping between 0 and 20
                  tt: (Math.random() * 50 + 2).toFixed(2), // Random tax between 2 and 52
                  tc: currencies[Math.floor(Math.random() * currencies.length)],
                  tcc: Math.random() > 0.5 ? couponCodes[Math.floor(Math.random() * couponCodes.length)] : '',
                  pm: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
                  sm: shippingMethods[Math.floor(Math.random() * shippingMethods.length)],
                  icn: itemCount
                };
                
                window.abtasty.send("transaction", randomTransaction);
                console.log('AB Tasty Transaction Event Sent:', randomTransaction);
                
                // Send individual item events
                const itemNames = ['T-Shirt', 'Shoes', 'Jeans', 'Jacket', 'Hat', 'Socks', 'Watch', 'Bag', 'Belt', 'Gloves', 'Scarf', 'Sunglasses', 'Cap', 'Hoodie', 'Sweater', 'Shorts', 'Trousers', 'Shirt', 'Dress', 'Boots'];
                const itemCategories = ['Clothing', 'Footwear', 'Accessories', 'Electronics', 'Books', 'Home', 'Sports', 'Beauty', 'Toys', 'Garden'];
                
                for (let i = 0; i < itemCount; i++) {
                  const itemData = {
                    tid: randomId,
                    in: itemNames[Math.floor(Math.random() * itemNames.length)],
                    ip: (Math.random() * 200 + 5).toFixed(2), // Random price between 5 and 205
                    iq: Math.floor(Math.random() * 4 + 1), // Random quantity between 1 and 4
                    ic: 'SKU' + Math.floor(Math.random() * 10000 + 1000), // Random SKU like SKU1234
                    iv: itemCategories[Math.floor(Math.random() * itemCategories.length)]
                  };
                  
                  window.abtasty.send("item", itemData);
                  console.log('AB Tasty Item Event Sent:', itemData);
                }
              } else {
                // If AB Tasty not loaded yet, check again in 100ms
                setTimeout(checkAbtasty, 100);
              }
            })();
          `
        }}
      />
      
      <Home />
    </>
  );
}
