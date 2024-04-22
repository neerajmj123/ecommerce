import React from "react";
import './Women.css'
import p1 from '../assets/product_1.png'
import p2 from '../assets/product_2.png'
import p3 from '../assets/product_3.png'
import p4 from '../assets/product_4.png'
import p5 from '../assets/product_5.png'
import p6 from '../assets/product_6.png'
import p7 from '../assets/product_7.png'
import p8 from '../assets/product_8.png'
import p9 from '../assets/product_9.png'
import p10 from '../assets/product_10.png'

const Women =(props)=>{
    return(
        <div>
        <div className="shopbanner">
            <img src={props.banner} alt="" />
        </div>
        <div className="item-container">
        <div className="item">
            <img src={p1} alt="" />
            <p>
    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
            </p>
            <div className="item-prices">
                <div className="item-prices-new">
                50.0 $      
                </div>
                <div className="item-prices-old">
                80.5 $   
             </div>
            </div>
        </div>
        <div className="item">
            <img src={p2} alt="" />
            <p>
    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
            </p>
            <div className="item-prices">
                <div className="item-prices-new">
                    100.0 $
                </div>
                <div className="item-prices-old">
                    150.0 $
                </div>
            </div>
        </div>
        <div className="item">
            <img src={p3} alt="" />
            <p>
    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse

            </p>
            <div className="item-prices">
                <div className="item-prices-new">
                    85.0 $
                </div>
                <div className="item-prices-old">
                    120.0 $
                </div>
            </div>
        </div><div className="item">
            <img src={p4} alt="" />
            <p>
    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
            </p>
            <div className="item-prices">
                <div className="item-prices-new">
                    80 $
                </div>
                <div className="item-prices-old">
                150 $
                </div>
            </div>
        </div><div className="item">
            <img src={p5} alt="" />
            <p>
    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse

            </p>
            <div className="item-prices">
                <div className="item-prices-new">
                    
                </div>
                <div className="item-prices-old">
                    oldprice
                </div>
            </div>
        </div><div className="item">
            <img src={p6} alt="" />
            <p>Name</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    newprice
                </div>
                <div className="item-prices-old">
                    oldprice
                </div>
            </div>
        </div><div className="item">
            <img src={p7} alt="" />
            <p>Name</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    newprice
                </div>
                <div className="item-prices-old">
                    oldprice
                </div>
            </div>
        </div><div className="item">
            <img src={p8} alt="" />
            <p>Name</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    newprice
                </div>
                <div className="item-prices-old">
                    oldprice
                </div>
            </div>
        </div>
        </div>
         </div>
    )
}
export default Women