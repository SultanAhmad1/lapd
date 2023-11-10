import React, { useEffect, useState } from 'react'
import HomeContext from './contexts/HomeContext';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home';
import SingleProduct from './SingleProduct';
import UserForm from './nestedcomponent/UserForm';
import Payment from './nestedcomponent/Payment';
import Cart from './nestedcomponent/Cart';
import ModifierHasNestedData from './nestedcomponent/ModifierHasNestedData';
import Login from './authcomponent/Login';
import TrackOrder from './nestedcomponent/TrackOrder';
import ReviewOrder from './nestedcomponent/ReviewOrder';

function Master({setIsauth, isauth})
{   
    const [postcode, setPostcode] = useState("SK7 6BN")
    const [street1, setStreet1] = useState("Chatsworth Rd,")
    const [street2, setStreet2] = useState("Hazel Grover, Stockport")

    const [isdeliverybtnclicked, setIsdeliverybtnclicked] = useState(false);
    const [isdeliverychangedbtnclicked, setIsdeliverychangedbtnclicked] = useState(false);
    const [iscartbtnclicked, setIscartbtnclicked] = useState(false)
    const [iscartfull, setIscartfull] = useState(true)

    const [iscartitemdottedbtnclicked, setIscartitemdottedbtnclicked] = useState(false)

    const [isitemclicked, setIsitemclicked] = useState(false)
    const [isquickviewclicked, setIsquickviewclicked] = useState(false)

    const [ismodifierclicked, setIsmodifierclicked] = useState(false)

    const [ischeckoutclicked, setIscheckoutclicked] = useState(false)
    let options = '';

    for(let i = 1; i < 100; i++)
    {
        options += `<option value${i}" className="co">${i}</option>`
    }

    useEffect(() => 
    {
        let qtySelect = document.querySelectorAll(`.qty-select`)  
        for(let i = 0; i < qtySelect.length; i++)
        {
        qtySelect[i].innerHTML = options
        }
    }, [isitemclicked,isquickviewclicked,iscartbtnclicked,ismodifierclicked])

    const handleItemClicked = () =>
    {
        setIsitemclicked(true)
        setIsquickviewclicked(false)
    }

    const handleQuickViewClicked = () =>
    {
        setIsquickviewclicked(true)
        setIsitemclicked(false)
    }

    const handleInput = (type) =>
    {
        setIsmodifierclicked(true)
    }

    const handleItemModalOff = (event) =>
    {
        event.preventDefault();
        setIsitemclicked(false)
    }

    const handleCheckout = () =>
    {
        setIscheckoutclicked(true)
        setIscartbtnclicked(false)
    }

    const itemId = 1

    return (
        <HomeContext.Provider value={{postcode, setPostcode, street1, setStreet1, street2, setStreet2 ,setIsauth,isdeliverychangedbtnclicked, setIsdeliverychangedbtnclicked,ischeckoutclicked, setIscheckoutclicked,iscartitemdottedbtnclicked,setIscartitemdottedbtnclicked,iscartfull,iscartbtnclicked,setIscartbtnclicked, ismodifierclicked,setIsmodifierclicked,setIsitemclicked, setIsdeliverybtnclicked, setIscartbtnclicked, handleInput}}>
            <>
                <Header/>    
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/:itemId" element={<SingleProduct />}/>
                        {/* <Route path="/cart" element={<Cart />} /> */}
                        {/* <Route path="/checkout" element={<Checkout />}/> */}
                        <Route path="/place-order" element={<UserForm />}/>
                        <Route path="/payment" element={<Payment />}/>
                        <Route path='/track-order' element={<TrackOrder />}></Route>
                        <Route path='/review-order' element={<ReviewOrder />}></Route>
                    </Routes>
                </main>
                <Footer/>
                {isdeliverybtnclicked && (
                    <>
                    {/* Delivery Details Modal */}
                    <div className="modal-delivery-details">
                        <div className="modal-delivery-details-level-one-div">
                        <div className="modal-delivery-details-level-one-div-height"></div>
                        <div className="modal-delivery-details-level-one-div-dialog">
                            <div></div>

                            <div className="modal-delivery-details-level-one-div-dialog-header">
                            <div className="delivery-empty-div"></div>
                            <button className="delivery-modal-close-button">
                                {isdeliverychangedbtnclicked ? (
                                <div
                                    className="delivery-modal-close-button-svg-div"
                                    onClick={() =>
                                    setIsdeliverychangedbtnclicked(
                                        !isdeliverychangedbtnclicked
                                    )
                                    }
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22.702" height="21.928"><path d="M11.629 12.553c4.356.341 10.018 2.844 10.018 9.375h.979c.084-.925.693-8.982-3.653-13.74a10.506 10.506 0 0 0-7.344-3.352V0L0 9.044 11.629 18.1z"/></svg>
                                </div>
                                ) : (
                                <div
                                    className="delivery-modal-close-button-svg-div"
                                    onClick={() =>
                                    setIsdeliverybtnclicked(!isdeliverybtnclicked)
                                    }
                                >
                                    <svg
                                    width="24px"
                                    height="24px"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    >
                                    <path
                                        d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
                                        fill="#000000"
                                    ></path>
                                    </svg>
                                </div>
                                )}
                            </button>
                            </div>
                            {isdeliverychangedbtnclicked && (
                            <>
                                {/* On Change Button Clicked */}
                                <div className="deliver-to-body-content">
                                <h1 className="deliver-to-body-content-h1">
                                    Delivero to
                                </h1>
                                <div className="deliver-to-body-content-nested-div-level-one">
                                    <label
                                    id="location-typeahead-location-manager-label"
                                    for="location-typeahead-location-manager-input"
                                    className="deliver-to-body-content-nested-div-level-one-label"
                                    >
                                    When autocomplete results are available, use up and
                                    down arrows to review and enter to select. Touch
                                    device users, explore by touch or with swipe
                                    gestures.
                                    </label>
                                    <div className="deliver-to-body-content-nested-div-level-one-nested">
                                    <div className="deliver-to-body-content-nested-div-level-one-nested-svg-div-one">
                                        <div className="deliver-to-body-content-nested-div-level-one-nested-svg-div-two">
                                        <svg
                                            width="24px"
                                            height="24px"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path
                                            d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                                            fill="currentColor"
                                            ></path>
                                        </svg>
                                        </div>
                                    </div>

                                    <div className="spacer _16"></div>
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        className="deliver-to-input"
                                        placeholder="Enter postcode"
                                    ></input>
                                    <div className="spacer _8"></div>
                                    </div>

                                    <button className="deliver-to-done-button">
                                    Done
                                    </button>
                                </div>
                                </div>
                                {/* On Change Button Clicked End*/}
                            </>
                            )}

                            {isdeliverychangedbtnclicked === false && (
                            <>
                                {/* Content */}
                                <div className="modal-delivery-details-level-one-div-dialog-body">
                                <h1 className="dialog-modal-body-h1">
                                    Delivery details
                                </h1>

                                <div className="dialog-modal-body-content">
                                    <div className="spacer _8"></div>
                                    <div className="dialog-modal-body-content-nested-div">
                                    <div className="location-svg-postcode-address-nested">
                                        <div className="dialog-location-svg-div">
                                        <div className="dialog-location-svg-div-nested">
                                            <svg
                                            width="24px"
                                            height="24px"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            focusable="false"
                                            >
                                            <path
                                                d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                                                fill="currentColor"
                                            ></path>
                                            </svg>
                                        </div>
                                        </div>

                                        <div className="postcode-address-change-button">
                                        <div className="delivery-postcode-address">
                                            <div className="delivery-postcode">
                                            {postcode}
                                            </div>
                                            <div className="delivery-address">
                                            {street1} {street2}
                                            </div>
                                        </div>
                                        <div className="spacer _8"></div>
                                        <a
                                            className="postocde-change-button"
                                            onClick={() =>
                                            setIsdeliverychangedbtnclicked(true)
                                            }
                                        >
                                            Change
                                        </a>
                                        <div className="spacer _16"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <button className="delivery-modal-done-button">
                                    Done
                                </button>
                                </div>
                            </>
                            )}
                        </div>
                        <div className="modal-delivery-details-level-one-div-height"></div>
                        </div>
                    </div>
                    </>
                )}

                {
                    iscartbtnclicked &&
                    <Cart />
                }
                                    
                <ModifierHasNestedData />
            </>
        </HomeContext.Provider>
    )
}

export default Master