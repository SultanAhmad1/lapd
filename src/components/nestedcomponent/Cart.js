import React, { useContext, useState } from 'react'
import HomeContext from '../contexts/HomeContext'
import { Link } from 'react-router-dom'

function Cart() {

    const {
        iscartitemdottedbtnclicked,
        iscartfull,
        setIscartbtnclicked,
        setIscartitemdottedbtnclicked,
        setIscheckoutclicked
    } = useContext(HomeContext)

    const [isaddpromocodebtntoggle, setIsaddpromocodebtntoggle] = useState(false)
    const [promocode, setPromocode] = useState("")
    const [promocodebtntext, setPromocodebtntext] = useState("Add")

    const handlePromoCodeToggle = () =>
    {
        setIsaddpromocodebtntoggle(!isaddpromocodebtntoggle)
        setPromocodebtntext(promocodebtntext === "Add" ? "Apply" : "Add")
    }
    
    return (
        <>
            <div className="cart-level-one-div">
                <div className="cart-level-one-div-screen-one"></div>
                <div className="cart-level-one-div-screen-two">
                <div className="cart jp">
                    <div className="cart-close-btn-div-level-one">
                    <Link className="cart-close-btn" onClick={() => setIscartbtnclicked(false)}>
                        <div className="cart-close-btn-div">
                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z" fill="currentColor"></path></svg>
                        </div>
                    </Link>    
                    </div>
                    {
                    iscartfull ?
                        <>
                            {/* <div>
                                <div className="cart-header">
                                <div className="cart-header-brand-and-deliver-to">
                                    <a className="cart-header-brand-btn">Wow shakes and cakes</a>
                                    <div className="cart-header-deliver-to">
                                    Deliver to SK7 6BN
                                    </div>
                                </div>
                                <div className="cart-header-dotted-btn-div">
                                    <button className="cart-header-dotted-btn cp" onClick={() => setIscartitemdottedbtnclicked(!iscartitemdottedbtnclicked)}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8 c7 cc cd"><g><path d="M17 12a1.667 1.667 0 103.333 0A1.667 1.667 0 0017 12zM10.333 12a1.667 1.667 0 103.334 0 1.667 1.667 0 00-3.334 0zM5.333 13.667a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333z"></path></g></svg></button>
                                    {
                                    iscartitemdottedbtnclicked && 
                                    <div className="cart-item-clear-or-add-modal">
                                        <a className="cart-add-item-btn" href="/store/wow-shakes-and-cakes/z-RT12gJRYKtwNGK5BxnCQ">
                                        <div className="cart-add-item-svg-div">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="cart-add-item-svg">
                                            <path d="M15.833 8.75H11.25V4.167h-2.5V8.75H4.167v2.5H8.75v4.583h2.5V11.25h4.583v-2.5z"></path>
                                            </svg>
                                        </div>
                                        <div className="cart-item-btn-text">
                                            Add items
                                        </div>
                                        </a>
                                        
                                        <li className="cart-remove-item-list">
                                        <div className="cart-remove-item-svg-div">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="cart-remove-item-svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.667.667V2H14v2H2V2h3.333V.667h5.334zM3.333 5.333h9.334v10H3.333v-10z"></path>
                                            </svg>
                                        </div>
                                        
                                        <div className="cart-remove-item-btn-text">Clear Cart</div>
                                        </li>
                                    </div>
                                    }
                                </div>
                                </div>
                            </div>
                            <div></div>

                            <div className="cart-header-amount-parent-div">
                                <div className="cart-qty">4 items</div>
                                <div className="cart-subtotal">Subtotal : </div>
                                <div className="cart-total-amount">
                                <span>£37.40</span>
                                </div>
                            </div>

                            <div className="hr-row"></div>

                            <ul>
                                <a className="cart-items">
                                <li className="cart-items-list">
                                    <div className="cart-item-list-heading">
                                    <div className="item-details">
                                        <div className="item-header">Item Name</div>
                                        <ul className="item-details">
                                        <li className="item-modifier-list kd">
                                            <span className="item-modifier-type">Modifier Name : </span>
                                            <div className="spacer _4"></div>
                                            <span className="item-modifier-details">Modifier Group Details</span>
                                            <div></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="cart-item-img">
                                        <img alt="Chocolate Strawberry Waffle" src="https://tb-static.uber.com/prod/image-proc/processed_images/3bef7aecf15103ae8c8a02cf68277fc8/859baff1d76042a45e319d1de80aec7a.jpeg" className="item-img-tag" />
                                    </div>
                                    </div>

                                    <div className="cart-item-list-qty-amount">

                                        <div className="qty-div">
                                            <div className="qty-div-level-one"> 
                                            <div className="qty-div-leve-one-nested">
                                                <select className="qty-select"></select>

                                                <div className="qty-selector-sib-div">
                                                <div className="qty-selector-sib-div-nested">
                                                    <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(180, 12, 12)"></path></svg>
                                                </div>

                                                </div>
                                            </div>
                                            </div>
                                            <div className="spacer _8"></div>
                                        </div>

                                        <div className="albfglh3single-product">
                                            <div className="akh4gzh5h6bxgtb1h7single-product">
                                            <div className="agbdh8h4albfsingle-product">
                                                <button className="e3bubrdpb9h9h0albfc4affoh6hagzf1hbhcdohdhesingle-dec-product">
                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="cart-remove-item-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.667.667V2H14v2H2V2h3.333V.667h5.334zM3.333 5.333h9.334v10H3.333v-10z"></path></svg>
                                                </button>
                                                <div style={{width: "48px"}}></div>
                                                <button className="e3bubrdpb9h9h0albfc4affoh6hagzf1hbhcdohdhesingle-inc-product">
                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="hfg0ebhgsingle-product-svg">
                                                    <path d="M15.833 8.75H11.25V4.167h-2.5V8.75H4.167v2.5H8.75v4.583h2.5V11.25h4.583v-2.5z"></path>
                                                </svg>
                                                </button>
                                            </div>
                                            
                                            <div className="aghhhibre3dpbualc4bfbzbmsingle-product">
                                                <div>1</div>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="item-amount-level-one">
                                            <div className="item-amount-level-one-nested-div">
                                            <span className="item-amount-span">£10.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                </a>
                                <hr className="item-hr-row"></hr>
                                <a className="cart-items">
                                <li className="cart-items-list">
                                    <div className="cart-item-list-heading">
                                    <div className="item-details">
                                        <div className="item-header">Item Name</div>
                                        <ul className="item-details">
                                        <li className="item-modifier-list kd">
                                            <span className="item-modifier-type">Modifier Name : </span>
                                            <div className="spacer _4"></div>
                                            <span className="item-modifier-details">Modifier Group Details</span>
                                            <div></div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="cart-item-img">
                                        <img alt="Chocolate Strawberry Waffle" src="https://cn-geo1.uber.com/static/mobile-content/eats/placeholder_images/placeholder_image_grocery_300x300.png" className="item-img-tag" />
                                    </div>
                                    </div>

                                    <div className="cart-item-list-qty-amount">

                                    <div className="qty-div">
                                        <div className="qty-div-level-one">
                                        <div className="qty-div-leve-one-nested">
                                            <select className="qty-select">
                                            </select>

                                            <div className="qty-selector-sib-div">
                                            <div className="qty-selector-sib-div-nested">
                                                <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(180, 12, 12)"></path></svg>
                                            </div>

                                            </div>
                                        </div>
                                        </div>
                                        <div className="spacer _8"></div>
                                    </div>

                                    <div className="albfglh3single-product">
                                        <div className="akh4gzh5h6bxgtb1h7single-product">
                                        <div className="agbdh8h4albfsingle-product">
                                            <button className="e3bubrdpb9h9h0albfc4affoh6hagzf1hbhcdohdhesingle-dec-product">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="cart-remove-item-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.667.667V2H14v2H2V2h3.333V.667h5.334zM3.333 5.333h9.334v10H3.333v-10z"></path></svg>
                                            </button>
                                            <div style={{width: "48px"}}></div>
                                            <button className="e3bubrdpb9h9h0albfc4affoh6hagzf1hbhcdohdhesingle-inc-product">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="hfg0ebhgsingle-product-svg">
                                                <path d="M15.833 8.75H11.25V4.167h-2.5V8.75H4.167v2.5H8.75v4.583h2.5V11.25h4.583v-2.5z"></path>
                                            </svg>
                                            </button>
                                        </div>
                                        
                                        <div className="aghhhibre3dpbualc4bfbzbmsingle-product">
                                            <div>1</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="item-amount-level-one">
                                        <div className="item-amount-level-one-nested-div">
                                        <span className="item-amount-span">£10.65</span>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </a>
                                <hr className="item-hr-row"></hr>
                            </ul>
                            <div></div>
                            <div className="bottom-subtotal-empty-div"></div>
                            <div className="bottom-subtotal-hr-row"></div>
                            <div className="bottom-subtotal-empty-div"></div>
                            <div className="bottom-subtotal- jt">
                                <div className="bottom-subtotal-heading">Subtotal</div>
                                <span>£47.75</span>
                            </div>
                            <div className="bottom-subtotal-empty-div"></div>
                            <div className="bottom-subtotal-btns"></div>

                            <div className="cart-bottom-btns-div">
                                <div className="cart-bottom-btns-child-div">
                                <Link className="go-to-checkout-btn cp" to="/checkout">Go to checkout</Link>
                                <Link className="add-items-btn cp" onClick={() => setIscartbtnclicked(false)}>Add items</Link>
                                </div>
                            </div> */}
                    
                        <div className="afcart">
                            <div className="">
                                {/* <div className="cwcxcyczd0d1checkout"> */}
                                    {/* <h3 className="bkd2checkout-h3"> */}
                                    {/* <span className="cjcheckout">Checkout</span> */}
                                    {/* </h3> */}
                                    {/* <div className="">
                                    <div className="cjdchkout">
                                        <a className="alddbccheckout">

                                        <div className="decheckout-svg">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbcheckout-pin"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                                        </div>

                                        <div className="alamcjdcheckout">
                                            <span className="bobpdfcvb1checkout">SK7 6BN</span>
                                            <p className="b1bobqdgcvcheckout">
                                            <span style={{fontFamily:"UberMoveText;color:#545454"}}>Chatsworth Rd, Hazel Grove, Stockport</span>
                                            </p>
                                        </div>
                                    
                                        <button className="bodgdfdhcheckout-btn">
                                            Edit
                                        </button>

                                        </a>
                                        <div className="al">
                                        <div className="drdsbscjcheckout"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div> */}

                                <div className="dtcxcyczd0d1checkout">
                                    <div className="alaqcheckout">
                                    <h3 className="dualbcheckout-order-summary">
                                        <span className="cjcheckout">Cart summary</span>
                                        {/* <Link className="bodgdfdhcheckout-btn" to="/">
                                        <div className="c7c6crcheckout">
                                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="spacer _4"></div>
                                        <div className="bodgdfdhcheckout-add-div">Add items</div>
                                        </Link> */}
                                    </h3>
                                    </div>

                                    <div className="dze0checkout"></div>

                                    <div className="alame1e2checkout">
                                    <div className="b7avfpfqcheckout-details">
                                        <div className="esetcheckout">
                                        <a className="ald5egbhddeteud1checkout-edit-item d1">
                                            <div className="bodgdfcheckout-qty">
                                                1
                                            </div>
                                            <div className="alamcjewcheckout">
                                                <span className="bobpdfcvcheckout-item-header">Banoffee Waffle</span>
                                                <ul className="excheckout">
                                                <li className="bheyezebalf0checkout-item-li ez">
                                                    <span className="bodgdfcvcheckout-li-modi-title">Waffle Type:</span>
                                                    <div className="spacer _4"></div>
                                                    <span className="albodgbqcvcheckout-li-modi-detail">Regular - Half - 7" Fresh Waffle<div></div></span>  
                                                </li>
                                                
                                                <li className="bheyezebalf0checkout-item-li ez">
                                                    <span className="bodgdfcvcheckout-li-modi-title">Add Treat:</span>
                                                    <div className="spacer _4"></div>
                                                    <span className="albodgbqcvcheckout-li-modi-detail">Add: Strawberry (£1.00)<div></div></span>
                                                </li>
                                                
                                                <li className="bheyezebalf0checkout-item-li ez">
                                                    <span className="bodgdfcvcheckout-li-modi-title">Add Sauce / Topping:</span>
                                                    <div className="spacer _4"></div>
                                                    <span className="albodgbqcvcheckout-li-modi-detail">No Extra Sauce<div></div></span>
                                                </li>
                                                
                                                <li className="bheyezebalf0checkout-item-li ez">
                                                    <span className="bodgdfcvcheckout-li-modi-title">Chocolates &amp; Fruits - Add-ons:</span>
                                                    <div className="spacer _4"></div>
                                                    <span className="albodgbqcvcheckout-li-modi-detail">Add: Ferrero Rocher (£1.50)<div></div></span>
                                                </li>
                                                
                                                <li className="bheyezebalf0checkout-item-li ez">
                                                    <span className="bodgdfcvcheckout-li-modi-title">Sauces and Toppings:</span>
                                                    <div className="spacer _4"></div>
                                                    <span className="albodgbqcvcheckout-li-modi-detail">Add: Crushed Lotus Biscoff (£0.50)<div></div></span>
                                                </li>
                                                
                                                <li className="bheyezebalf0checkout-item-li ez">
                                                    <span className="bodgdfcvcheckout-li-modi-title">Ice Cream:</span>
                                                    <div className="spacer _4"></div>
                                                    <span className="albodgbqcvcheckout-li-modi-detail">Mint Chocolate Ice Cream (£1.95)<div></div></span>
                                                </li>
                                                </ul>
                                            </div>
                                            <div className="f1alamcheckout-item-qty">
                                                <span className="gye2gzcheckout-item-qty-span">£8.40</span>
                                            </div>
                                        </a>

                                            <div className="checkout-item-edit-delete">
                                            <button className="cart-header-dotted-btn cp" onClick={() => setIscartitemdottedbtnclicked(!iscartitemdottedbtnclicked)}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" style={{transform: "rotate(90deg)"}} className="c8c7cccdcheckout"><g><path d="M17 12a1.667 1.667 0 103.333 0A1.667 1.667 0 0017 12zM10.333 12a1.667 1.667 0 103.334 0 1.667 1.667 0 00-3.334 0zM5.333 13.667a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333z"></path></g></svg></button>
                                            {
                                                iscartitemdottedbtnclicked && 
                                                <div className="cart-item-clear-or-add-modal">
                                                <a className="cart-add-item-btn" href="/store/wow-shakes-and-cakes/z-RT12gJRYKtwNGK5BxnCQ">
                                                    <div className="cart-add-item-svg-div">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="cart-add-item-svg">
                                                        <path d="m46.84 5.32-4.16-4.16a4 4 0 0 0-5.58 0C1.7 36.55 3.65 34.52 3.53 34.88S3 36.78 0 46.72A1 1 0 0 0 1 48c.21 0 12.08-3.45 12.39-3.68s-2.75 2.79 33.45-33.42a4 4 0 0 0 0-5.58zM35 6.05 42 13l-1.37 1.37-6.97-6.95zM10.45 38.91l-1-.34-.34-1L35 11.61 36.39 13zm21.8-30.08 1.36 1.37L7.79 36l-1.71-1zM3.32 42.67a7.68 7.68 0 0 1 2 2l-2.85.84zm4 1.42a9.88 9.88 0 0 0-3.43-3.43l1.16-3.94 2 1.23c.88 2.62.38 2.08 2.94 2.94l1.23 2zM13 41.92l-1-1.71 25.8-25.82 1.37 1.36zM45.43 9.49l-2.07 2.07-6.92-6.92 2.07-2.07a1.94 1.94 0 0 1 2.75 0l4.17 4.17a1.94 1.94 0 0 1 0 2.75z"/>
                                                    </svg>
                                                    </div>
                                                    <div className="cart-item-btn-text">
                                                    Edit item
                                                    </div>
                                                </a>
                                                
                                                <li className="cart-remove-item-list">
                                                    <div className="cart-remove-item-svg-div">
                                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="cart-remove-item-svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.667.667V2H14v2H2V2h3.333V.667h5.334zM3.333 5.333h9.334v10H3.333v-10z"></path>
                                                    </svg>
                                                    </div>
                                                    
                                                    <div className="cart-remove-item-btn-text">Remove item</div>
                                                </li>
                                                </div>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="cjdchkout">
                                    <div className="alddbccheckout">
                                        <div className="f9checkout">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbcheckout-pin">
                                                <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                                            </svg>
                                        </div>

                                        <div className="alamcjdcheckout">
                                            <span className="bobpdfcvb1checkout">Add promo code</span>
                                        </div>

                                        <button className="bodgdfdhcheckout-btn" onClick={handlePromoCodeToggle}>{promocodebtntext}</button>
                                    </div>
                                    {
                                        isaddpromocodebtntoggle &&
                                        <div className="btaucheckout-window">
                                            <input type="text" placeholder="Add promo code...." value={promocode} className="email-checkout"/>
                                            <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                                        </div>
                                    }
                                    <div className="alcheckout">
                                        <div className="drdsbscjcheckout"></div>
                                    </div>
                                    </div>

                                    <div className="dxc6checkout"></div>

                                    <ul>
                                    <li className="bobpcheckout-sutotals">
                                        <div className="albcaqcheckout">
                                        <div className="bobpbqbrb1checkout">Subtotal</div>
                                        </div>
                                        
                                        <div className="bobpbqbrb1checkout">
                                        <span className="">£8.40</span>
                                        </div>
                                    </li>
                                    
                                    <li className="dxgvcheck"></li>
                                    
                                    {/* <li className="bobpcheckout-sutotals">
                                        <div className="albcaqcheckout">
                                        <div className="bobpbqbrb1checkout">Fees</div>
                                        <div className="spacer _8"></div>
                                        
                                        <a href="/checkout?mod=orderChargeInfo&amp;modctx=fare_breakdown_charge_1&amp;ps=1">
                                            <div className="gw dy cr">
                                            <svg width="16px" height="16px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                <path d="M11.9999 2.83398C6.91658 2.83398 2.83325 6.91732 2.83325 12.0007C2.83325 17.084 6.91658 21.1673 11.9999 21.1673C17.0833 21.1673 21.1666 17.084 21.1666 12.0007C21.1666 6.91732 17.0833 2.83398 11.9999 2.83398ZM13.2499 17.834H10.7499V11.1673H13.2499V17.834ZM11.9999 9.50065C11.0833 9.50065 10.3333 8.75065 10.3333 7.83398C10.3333 6.91732 11.0833 6.16732 11.9999 6.16732C12.9166 6.16732 13.6666 6.91732 13.6666 7.83398C13.6666 8.75065 12.9166 9.50065 11.9999 9.50065Z" fill="#6B6B6B"></path>
                                            </svg>
                                            </div>
                                        </a>
                                        </div>
                                    </li> */}
                                    
                                    <li className="dxgvcheck"></li>
                                    
                                    <li className="bobpcheckout-sutotals">
                                        <div className="albcaqcheckout">
                                        <div className="bobpbqbrb1checkout">Service</div>
                                        </div>
                                        
                                        <div className="bobpbqbrb1checkout">
                                        <span className="">£0.99</span>
                                        </div>
                                    </li>
                                    
                                    <li className="dxgvcheck"></li>
                                    
                                    <li className="bobpcheckout-sutotals">
                                        <div className="albcaqcheckout">
                                        <div className="bobpbqbrb1checkout">Delivery</div>
                                        </div>
                                        
                                        <div className="bobpbqbrb1checkout">
                                        <span className="">£4.29</span>
                                        </div>
                                    </li>
                                    </ul>

                                    <div className="bkgfbmggalcheckout">
                                    <div className="albcaqcheckout-total">Total</div>£13.68
                                    </div>


                                </div>
                            </div>

                            <div className="dtcxcybgd0d1checkout">
                            <div className="bocubqcve9checkout">
                                <div className="bocubqcvb1checkout">
                                <span className="bocubqcvgycheckout">
                                    <span className="bocudfdhgy">ALLERGIES:</span> 
                                    If you or someone you’re ordering for has an allergy, please contact the merchant directly to let them know.
                                </span>
                                </div>
                            </div>
                            <div className="dxgvcheck"></div>

                            <div className="bocubqcve9checkout">
                                <div className="bocubqcvb1checkout">
                                <span className="bocubqcvgycheckout">
                                    If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available.
                                </span>
                                </div>
                            </div>
                            <div className="dxgvcheck"></div>

                            <div className="bocubqcve9checkout">
                                <div className="bocubqcvb1checkout">
                                <span className="bocubqcvgycheckout">
                                    Whilst we, and our restaurant partners, have safety measures to mitigate food safety risk, couriers may be delivering more than one order so we cannot eliminate the risk of cross-contamination from allergens.
                                </span>
                                </div>
                            </div>
                            <div className="dxgvcheck"></div>
                            </div>

                            <div className="">
                                <div className="akgzcheckout">
                                    <div className="atbaagcheckout">
                                    <div className="">
                                        <Link className="fwbrbocheckout-place-order" to="/place-order">Checkout</Link>
                                        <div style={{height: "10px"}}></div>

                                        <Link className="fwbrbocheckout-add" to="/">
                                        <div className="c7c6crcheckout">
                                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="spacer _4"></div>
                                        <div className="bodgdfdhcheckout-add-div">Add items</div>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    :
                        <div className="cart-content">
                        <img alt="" role="presentation" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/a023a017672c2488.svg" className="cart-icon" />
                        <span className="cart-span-title-one">Add items to start a cart</span>

                        <span className="cart-span-title-two">Once you add items from a restaurant or store, your cart will appear here.</span>
                            <Link className="cart-shopping-start-button" onClick={() => setIscartbtnclicked(false)}>Start shopping</Link>
                        </div>
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export default Cart