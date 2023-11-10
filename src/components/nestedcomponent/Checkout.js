import React, { useContext, useEffect } from 'react'
import HomeContext from '../contexts/HomeContext'
import { Link } from 'react-router-dom'

function Checkout() {
  const {
    iscartitemdottedbtnclicked,
    setIscartitemdottedbtnclicked, 
    setIscartbtnclicked
  } = useContext(HomeContext)

  useEffect(() => {
    setIscartbtnclicked(false)
  }, [])
    
  return (
    <>
      <div className='e5ald0m1m2amc5checkout-desk' style={{display: "none"}}>
        <div className="m3m4m5gim6checkout-desk">

          <div className="hmg1checkout-desk">
            <div className="hmg1mhb0checkout-desk">
              <div className='mimjepmkmlmmcheckout-desk'>
                <h3 className="eik5ekk6checkout-desk">
                  <span className="d1chekcout-desk-span">Delivery details</span>
                </h3>
                <div>
                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk" >
                      <div className="kgcheckout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                          <g clip-path="url(#clip0)">
                            <path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <path transform="translate(2 2)" d="M0 0h20v20H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      
                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">SK7 6BN</span>
                        <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                          <span style={{fontFamily:"UberMoveText", color:"#545454"}}>
                            Chatsworth Rd, Hazel Grove, Stockport
                          </span>
                        </p>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn">Edit</button>
                    </a>
                  </div>
                </div>
              </div>

              <hr className='edfhmthtcheckout-desk'></hr>
              <div className='mimjepmkmlmmcheckout-desk'>
                <h3 className="eik5ekk6checkout-desk">
                  <span className="d1chekcout-desk-span">Payment</span>
                </h3>
                <div className='d1g1checkout-desk'>
                  <a className="allzc5checkout-desk">
                    <div className="f2checkout-desk">
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                        <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                      </svg>
                    </div>
                    
                    <div className="alamd1g1checkout-desk">
                      <span className="chd2cjd3b1checkout-desk">Add promo code</span>
                    </div>
                    
                    <button data-testid="promo-button" className="chcicjckhacheckout-desk-btn">Add</button>
                  </a>
                </div>
              </div>

              <div className='mimjepmkmlmmcheckout-desk'>
                <div className='alaqcheckout-desk'>
                  <h3 className="mualc5d1checkout-desk">
                    <span className="d1checkout-desk-span">Order summary</span>
                    <a className="chcicjckhahbcheckout-desk" >
                      <div className="c8c7cucheckout-desk">
                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg" 
                          aria-hidden="true" focusable="false"
                        >
                          <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="currentColor"></path>
                        </svg>
                      </div>
                      
                      <div className="spacer _4"></div>
                      <div className="chcicjcheckout-desk">Add items</div>
                    </a>
                  </h3>
                </div>
                <div className='e6ficheckout-desk'></div>
                <div className='alamfrcscheckout-desk'>
                  <div className='b7avj1j2gcaxj3j4checkout-desk'>
                    <div className='gdcheckout-desk'>
                      <a className='aleog1bhdegegfekcheckout-desk'>
                        <div class="boewe1excheckout-desk">1</div>
                        <div class="alamd5ghcheckout-desk">
                          <span class="bobpe1dhcheckout-desk">Banoffee Waffle</span>
                          <ul class="clcheckout-desk">
                            <li class="bh gi gj fn al fo">
                              <span class="bo ew e1 dh">Waffle Type:</span>
                              <div class="spacer _4"></div>
                              <span class="alboewbqdhcheckout-desk">
                                Regular - Half - 7" Fresh Waffle
                                <div></div>
                              </span>
                            </li>
                            
                            <li class="bhgigjfnalfocheckout-desk">
                              <span class="boewe1dhcheckout-desk">Add Treat:</span>
                              <div class="spacer _4"></div><span class="al bo ew bq dh">Add: Ferrero Rocher (£1.50)<div></div></span></li><li class="bh gi gj fn al fo"><span class="bo ew e1 dh">Add Sauce / Topping:</span><div class="spacer _4"></div><span class="al bo ew bq dh">Add: Nutella Sauce (£0.75)<div></div></span></li><li class="bh gi gj fn al fo"><span class="bo ew e1 dh">Chocolates &amp; Fruits - Add-ons:</span><div class="spacer _4"></div><span class="al bo ew bq dh">Add: Ferrero Rocher (£1.50)<div></div></span></li><li class="bh gi gj fn al fo"><span class="bo ew e1 dh">Sauces and Toppings:</span><div class="spacer _4"></div><span class="al bo ew bq dh">Add: Chocolate Sauce (£0.50)<div></div></span></li><li class="bh gi gj fn al fo"><span class="bo ew e1 dh">Ice Cream:</span><div class="spacer _4"></div><span class="al bo ew bq dh">Vanilla Ice Cream (£1.95)<div></div></span></li></ul></div>
                        <div class="gkalamglb1bocheckout-desk">
                          <span class="i8csi9boewcheckout-desk">£9.65</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className="d1g1checkout-desk">
            <div className='gmgngoalamgpcheckout-desk'>
            <div class="gqcheckout-desk">
              <div className='boh7bqh8checkout-desk'>
                <button class="h7brboe1checkout-btn">Place order</button>
              </div>
            </div>
            <div class="eeb0checkout-desk">
              <div className='b5grekcheckout-desk'>
                <h3 className='bkfbbmfccheckout-desk'>
                  <span className='d5checkout-desk'>Order total</span>
                </h3>
                <ul>
                  <li class="bobpbqbraldfcheckout-desk-list">
                    <div class="albcaqcheckout-desk">
                      <div class="bobpbqbrb1checkout-desk">Subtotal</div>
                    </div>
                    <div class="bobpbqbrcheckout-desk">
                      <span class="">£9.65</span>
                    </div>
                  </li>
                  
                  {/* <li class="e6ib"></li> */}
                  
                  {/* <li class="bobpbqbraldfcheckout-desk-list">
                    <div class="albcaqcheckout-desk">
                      <div class="bobpbqbrb1checkout-desk">Fees</div>
                      <div class="spacer _8"></div>
                      <div role="tooltip" id="fare_breakdown_charge_1" class="ak al">
                        <div class="hl fi dd">
                          <svg width="16px" height="16px" 
                          fill="none" viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg" 
                          aria-hidden="true" focusable="false"
                        >
                          <path d="M11.9999 2.83398C6.91658 2.83398 2.83325 6.91732 2.83325 12.0007C2.83325 17.084 6.91658 21.1673 11.9999 21.1673C17.0833 21.1673 21.1666 17.084 21.1666 12.0007C21.1666 6.91732 17.0833 2.83398 11.9999 2.83398ZM13.2499 17.834H10.7499V11.1673H13.2499V17.834ZM11.9999 9.50065C11.0833 9.50065 10.3333 8.75065 10.3333 7.83398C10.3333 6.91732 11.0833 6.16732 11.9999 6.16732C12.9166 6.16732 13.6666 6.91732 13.6666 7.83398C13.6666 8.75065 12.9166 9.50065 11.9999 9.50065Z" fill="#6B6B6B"></path>
                        </svg>
                      </div>
                      
                      <div class="agicidieifcheckout-desk">
                        <div class="bkhybmcheckout-desk">Your Delivery Charge includes</div>
                        <div class="e6 fi"></div>
                        <div class="al">
                          <div>
                            <div class="bo bp bq br al df">
                              <div class="fs">Service</div>
                              <div class="spacer _8"></div>
                              <div class="al aq bc fs">£0.99</div>
                            </div>
                            <div class="bo ew bq dh b1">This fee varies based on factors like basket size and helps cover costs related to your order.</div>
                          </div>
                        </div>
                        
                        <div class="e6 fi"></div>
                        <div class="al">
                          <div>
                            <div class="bo bp bq br al df">
                              <div class="fs">Delivery</div>
                              <div class="spacer _8"></div>
                              <div class="al aq bc fs">£4.29</div>
                            </div>
                            
                            <div class="bo ew bq dh b1"></div>
                          </div>
                        </div>
                        
                        <div class="e6 fi"></div>
                        
                        <div class="al">
                          <div>
                            <div class="bo bp e1 dh al df">
                              <div class="fs">Fees total</div>
                              <div class="spacer _8"></div>
                              <div class="al aq bc fs">£5.28</div>
                            </div>
                            
                            <div class="bo ew bq dh b1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </li> */}
                
                  <li class="e6ib"></li>
                
                  <li class="bobpbqbraldfcheckout-desk-list">
                    <div class="albcaqcheckout-desk">
                      <div class="bobpbqbrb1checkout-desk">Service</div>
                    </div>
                    
                    <div class="bobpbqbrb1checkout-desk">
                      <span class="">£0.99</span>
                    </div>
                  </li>
                
                  <li class="e6ib"></li>
                
                  <li class="bobpbqbraldfcheckout-desk-list">
                    <div class="albcaqcheckout-desk">
                      <div class="bobpbqbrb1checkout-desk">Delivery</div>
                    </div>
                    
                    <div class="bobpbqbrb1checkout-desk">
                      <span class="">£4.29</span>
                    </div>
                  </li>
                </ul>

                <hr className='f7bsh1f8checkout-hr'></hr>
                <div className='bkhybmh8aldfcheckout-desk'>
                  <div className='albcaqcheckout'>
                    Total
                  </div>
                  £ 14.93
                </div>

                <div className='itcheckout-desk'>
                  <div className='bodgbqdhfncheckout-desk'>
                      <div className='bodgbqdhb1checkout-desK'>
                        <span class="bodgbqdhiucheckout-desk">
                          <span class="bodge1exiucheckout-desk-span">ALLERGIES: </span> 
                          If you or someone you’re ordering for has an allergy, please contact the merchant directly to let them know.
                        </span>
                      </div>
                  </div>
                  <div className='e6h3checkout-desk'></div>

                  <div className='bodgbqdhfncheckout-desk'>
                    <div className='bodgbqdhb1checkout-desK'>
                      <span class="bodgbqdhiucheckout-desk">
                      If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available.
                      </span>
                    </div>
                  </div>
                  <div className='e6h3checkout-desk'></div>

                  <div className='bodgbqdhfncheckout-desk'>
                    <div className='bodgbqdhb1checkout-desK'>
                      <span class="bodgbqdhiucheckout-desk">
                      Whilst we, and our restaurant partners, have safety measures to mitigate food safety risk, couriers may be delivering more than one order so we cannot eliminate the risk of cross-contamination from allergens.
                      </span>
                    </div>
                  </div>
                  <div className='e6h3checkout-desk'></div>

                </div>
              </div>
            </div>
            <div class="gqcheckout-desk"></div>
            </div>
          </div>

        </div>
      </div>
      {/* This block of code only for mobile */}
      <div className="afcheckout">
        <div className="">
          <div className="cwcxcyczd0d1checkout">
            <h3 className="bkd2checkout-h3">
              <span className="cjcheckout">Checkout</span>
            </h3>
            <div className="">
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
          </div>

          <div className="dtcxcyczd0d1checkout">
            <div className="alaqcheckout">
              <h3 className="dualbcheckout-order-summary">
                <span className="cjcheckout">Order summary</span>
                <Link className="bodgdfdhcheckout-btn" to="/">
                  <div className="c7c6crcheckout">
                    <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                      <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="currentColor">
                        </path>
                    </svg>
                  </div>
                  <div className="spacer _4"></div>
                  <div className="bodgdfdhcheckout-add-div">Add items</div>
                </Link>
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
              <a className="alddbccheckout">
                <div className="f9checkout">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbcheckout-pin">
                    <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                  </svg>
                </div>

                <div className="alamcjdcheckout">
                  <span className="bobpdfcvb1checkout">Add promo code</span>
                </div>

                <button className="bodgdfdhcheckout-btn">Add</button>
              </a>
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
                <Link className="fwbrbocheckout-place-order" to="/place-order">Place Order</Link>
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
  )
}

export default Checkout