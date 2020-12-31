import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Gateway/Dec2020_testing/wk1_GW2_b3_3000x1200_EN_v2._CB413887551_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="MyGift Love Metal Letters Decorative Sign with Whitewashed Wood Base"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71th67L692L._AC_SX679_.jpg"
          />
          
          
          
           <Product
            id="23445930"
            title="Coffee Bean Dark Ethiopian Yirgacheffe, Whole Bean Coffee, 5-Pound Bag"
            price={48.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61wtI8UxHlL._SX679_.jpg"
          />
          
           <Product
            id="49538094"
            title="Nelson Mandela Quote Wall Art Chalkboard Style 11x14 inch Unframed Print Poster With Inspirational Saying It Always Seems"
            price={39.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91hgN-yZnTL._SY800_.jpg"
          />
        </div>
        
        
         <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SUSSED 49' Curved LED Gaming Monitor"
            price={200.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexia, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple Watch SE (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band"
            price={298.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71JtUMDeBBL._AC_SX679_.jpg"
          />
          
          </div>
         
         <div className="home__row">
          <Product
            id="12321341"
            title="Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js"
            price={39.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX404_BO1,204,203,200_.jpg"
          />
          
          
          
           <Product
            id="23445930"
            title="Windy Hill Collection peace Freestanding Glitter Cutout Natural Wood"
            price={45.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61VlxwHoV6L._AC_SX679_.jpg"
          />
          
           <Product
            id="49538094"
            title="Kingwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SUSSED 49' Curved LED Gaming Monitor"
            price={200.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Breville BES870XL Barista Express Espresso Machine, Large, Stainless Steel"
            price={599.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81RfdzPfrQL._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
            price={98.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/612KpcXcFBL._AC_SX679_.jpg"
          />
          
          </div>
         
         <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WUHU 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        
    
    
    
    
    
    
    </div>
    </div>
  );
}

export default Home;