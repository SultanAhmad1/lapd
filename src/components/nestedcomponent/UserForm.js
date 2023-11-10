import React, { useContext, useEffect, useState } from 'react'
import HomeContext from '../contexts/HomeContext'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

function UserForm() 
{
  const {isauth, setIsauth} = useContext(AuthContext)
  const {
    postcode,
    setPostcode,
    street1,
    setStreet1,
    street2,
    setStreet2,
    iscartitemdottedbtnclicked,
    setIsdeliverybtnclicked,
    setIscartitemdottedbtnclicked,
    setIscartbtnclicked,
    isdeliverybtnclicked,
    isdeliverychangedbtnclicked,
    setIsdeliverychangedbtnclicked
  } = useContext(HomeContext)

  const navigate = useNavigate()
  const handlePayNow = () =>
  {
    // navigate("/payment")
    navigate("/payment");
  }

  useEffect(() => {
    setIscartbtnclicked(false)
  }, [])

  const [isemailtoggle, setIsemailtoggle] = useState(true)
  const [emailaddbtntext, setEmailaddbtntext] = useState("Save")
  const [email, setEmail] = useState("")

  const handleEmailToggle = () =>
  {
    setIsemailtoggle(!isemailtoggle)
    setEmailaddbtntext((emailaddbtntext === "Save") ? "Edit": "Save")
  }

  const handleUserEmail = (event) =>
  {
    setEmail(event.target.value)
  }

  const [isphonetoggle, setIsphonetoggle] = useState(true)
  const [phoneaddbtntext, setPhoneaddbtntext] = useState("Save")
  const [phone, setPhone] = useState("")

  const handlePhoneToggle = () =>
  {
    setIsphonetoggle(!isphonetoggle)
    setPhoneaddbtntext((phoneaddbtntext === "Save") ? "Edit": "Save")
  }

  const handleUserPhone = (event) =>
  {
    setPhone(event.target.value)
  }

  const [isfirstnametoggle, setIsfirstnametoggle] = useState(true)
  const [firstnameaddbtntext, setFirstNameaddbtntext] = useState("Save")
  const [firstname, setFirstName] = useState("")

  const handleFirstNameToggle = () =>
  {
    setIsfirstnametoggle(!isfirstnametoggle)
    setFirstNameaddbtntext((firstnameaddbtntext === "Save") ? "Edit": "Save")
  }

  const handleUserFirstName = (event) =>
  {
    setFirstName(event.target.value)
  }

  const [islastnametoggle, setIslastnametoggle] = useState(true)
  const [lastnameaddbtntext, setLastNameaddbtntext] = useState("Save")
  const [lastname, setLastName] = useState("")

  const handleLastNameToggle = () =>
  {
    setIslastnametoggle(!islastnametoggle)
    setLastNameaddbtntext((lastnameaddbtntext === "Save") ? "Edit": "Save")
  }

  const handleUserLastName = (event) =>
  {
    setLastName(event.target.value)
  }

  // Change Postcode and Address states
  const [ispostcodeeditclicked, setIspostcodeeditclicked] = useState(false)
  const [deliverydetailtext, setDeliverydetailtext] = useState("Edit")
  const handlePostcodeEdit = () =>
  {
    setIspostcodeeditclicked(!ispostcodeeditclicked)
    setDeliverydetailtext(deliverydetailtext === "Edit" ? "Save" : "Edit")
  }

  const [ischangepostcodeclicked, setIschangepostcodeclicked] = useState(false)

  const handleRedirect = () =>
  {

  }

  const [isscheduleclicked, setIsscheduleclicked] = useState(false)


  // Save details for Faster Checkout next time
  const [isavefasterdetailsclicked, setIsavefasterdetailsclicked] = useState(false)

  const handleLogin = () =>
  {
    console.log("I am login button");
    setIsauth(false)
    navigate("/login")
  }

  // marketing checkboxes

  const [isbyemailclicked, setIsbyemailclicked] = useState(false)
  const [isbysmsclicked, setIsbysmsclicked] = useState(false)

  const [isadddoororhouseclicked, setIsadddoororhouseclicked] = useState(false)
  const [doornumbertext, setDoornumbertext] = useState("Add")

  const handleDoorHouseClicked = () =>
  {
    setIsadddoororhouseclicked(!isadddoororhouseclicked)
    setDoornumbertext(doornumbertext === "Add" ? "Save" : "Add")
  }

  const [isadddrivertoggle, setIsadddrivertoggle] = useState(false)
  const [isadddoortext, setIsadddoortext] = useState("Add")

  const handleDriverInstruction = () =>
  {
    setIsadddrivertoggle(!isadddrivertoggle)
    setIsadddoortext(isadddoortext === "Add" ? "Save" : "Add")
  }

  const handlePassword = () =>
  {
    setIsavefasterdetailsclicked(true)
  }

  console.log("Is save faster details clicked:", isavefasterdetailsclicked);
  return (
    <>
      <div className='e5ald0m1m2amc5checkout-desk'>
        <div className="m3m4m5gim6checkout-desk">

          <div className="hmg1checkout-desk">
            <div className="hmg1mhb0checkout-desk">
              <div className='mimjepmkmlmmcheckout-desk'>
                <h3 className="eik5ekk6checkout-desk">
                  <span className="d1chekcout-desk-span">Delivery Details</span>
                </h3>
                <span style={{color: "red" , fontSize: "300"}}>*Fields marked with an asterisk must be filled in to proceed.</span>
                <div>
                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk" >
                      <div className="kgcheckout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                          <g clipPath="url(#clip0)">
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
                        <span className="chd2cjd3b1checkout-desk">{postcode}</span>
                        <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                          <span style={{fontFamily:"UberMoveText", color:"#545454"}}>
                            {street1} {street2}
                          </span>
                        </p>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn" onClick={handlePostcodeEdit}>{deliverydetailtext}</button>
                    </a>

                    {
                      ispostcodeeditclicked &&
                      <div className="btautrackorder-postcode-edit">
                        <input type='text' className='strtpostcode' value={street1}></input>
                        <input type='text' className='strtpostcode' value={street2}></input>
                        <div className='strtpostcode-btn'>
                          <input type='text' className='strtpostcode' value={postcode}></input>
                          <button className='change_postcode_btn' onClick={() => setIschangepostcodeclicked(!ischangepostcodeclicked)}>Change postcode</button>
                        </div>
                      </div>
                    }
                    <div className="alcheckout-desk">
                      <div className="spacer _40"></div>
                      <div className="edhtb9d1checkout-desk"></div>
                    </div>
                  </div>

                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk" >
                      <div className="kgcheckout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="cxcwd0d1checkout-svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path>
                        </svg>
                      </div>
                      
                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">Add door number <span style={{color: "red"}}>*</span></span>
                        {/* <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                          <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                          Add driver instructions
                          </span>
                        </p> */}
                         <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                            <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                              {email}
                            </span>
                          </p>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn" onClick={handleDoorHouseClicked}>{doornumbertext}</button>
                    </a>

                    {
                      isadddoororhouseclicked &&
                      <div className="btaucheckout-window">
                        <input type="text" placeholder="Enter door number or name" value="12" className="door_number" onChange={handleUserEmail}/>
                        {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                        
                        <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                          <span style={{color: "red"}}>* This field is required.</span>
                        </div> */}
                      </div>
                    }
                    <div className="alcheckout-desk">
                      <div className="spacer _40"></div>
                      <div className="edhtb9d1checkout-desk"></div>
                    </div>
                  </div>

                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk" >
                      <div className="kgcheckout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="cxcwd0d1checkout-svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path>
                        </svg>
                      </div>
                      
                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">Add driver instructions</span>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn" onClick={handleDriverInstruction}>{isadddoortext}</button>
                    </a>

                    {
                      isadddrivertoggle &&
                      <div className="btaucheckout-window">
                        {/* <textarea placeholder="Add delivery instructions" className="door_number" ></textarea> */}
                        <textarea placeholder="Add delivery instructions" rows="2" aria-label="Add delivery instructions" onChange={handleUserEmail} className="door_number" spellcheck="false"></textarea>
                        {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                        
                        <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                          <span style={{color: "red"}}>* This field is required.</span>
                        </div> */}
                      </div>
                    }

                  </div>
                  
                </div>
              </div>

              <hr className='edfhmthtcheckout-desk'></hr>
              <div className='mimjepmkmlmmcheckout-desk'>
                <h3 className="eik5ekk6checkout-desk">
                  <span className="d1chekcout-desk-span">Contact Details</span>
                </h3>

                <div className='d1g1checkout-desk'>
                  <a className="allzc5checkout-desk">
                    <div className="f2checkout-desk">
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                        <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                      </svg>
                    </div>
                    
                    <div className="alamd1g1checkout-desk">
                      <span className="chd2cjd3b1checkout-desk">Add email address <span style={{color: "red"}}>*</span></span> 
                      <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                        <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                          {email}
                        </span>
                      </p>
                    </div>
                    
                    <button className="chcicjckhacheckout-desk-btn" onClick={handleEmailToggle}>{emailaddbtntext}</button>
                  </a>

                  {
                    isemailtoggle &&
                    <div className="btaucheckout-window">
                      <input type="email" placeholder="Enter email" value={email} className="email-checkout" onChange={handleUserEmail}/>
                      {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                      
                      <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                        <span style={{color: "red"}}>* This field is required.</span>
                      </div> */}
                    </div>
                  }
                  <div className="alcheckout-desk">
                    <div className="spacer _40"></div>
                    <div className="edhtb9d1checkout-desk"></div>
                  </div>
                </div>

                <div className='d1g1checkout-desk'>
                  <a className="allzc5checkout-desk">
                    <div className="f2checkout-desk">
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                        <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                      </svg>
                    </div>
                    
                    <div className="alamd1g1checkout-desk">
                      <span className="chd2cjd3b1checkout-desk">Add phone number <span style={{color: "red"}}>*</span></span>
                      <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                        <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                          {phone}
                        </span>
                      </p>
                    </div>
                    
                    <button className="chcicjckhacheckout-desk-btn" onClick={handlePhoneToggle}>{phoneaddbtntext}</button>
                  </a>

                  {
                    isphonetoggle &&
                    <div className="btaucheckout-window">
                      <input type="number" placeholder="Enter phone number" value={phone} className="email-checkout" onChange={handleUserPhone}/>
                      {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                      
                      <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                        <span style={{color: "red"}}>* This field is required.</span>
                      </div> */}
                    </div>
                  }
                  <div className="alcheckout-desk">
                    <div className="spacer _40"></div>
                    <div className="edhtb9d1checkout-desk"></div>
                  </div>
                </div>

                <div className='d1g1checkout-desk'>
                  <a className="allzc5checkout-desk">
                    <div className="f2checkout-desk">
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                        <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                      </svg>
                    </div>
                    
                    <div className="alamd1g1checkout-desk">
                      <span className="chd2cjd3b1checkout-desk">Add name <span style={{color: "red"}}>*</span></span>
                      <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                        <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                          {firstname} {lastname}
                        </span>
                      </p>
                    </div>
                    
                    <button className="chcicjckhacheckout-desk-btn" onClick={handleFirstNameToggle}>{firstnameaddbtntext}</button>
                  </a>

                  {
                    isfirstnametoggle &&
                    <>
                      <div className="btaucheckout-window">
                        <input type="text" style={{marginBottom: "4px"}} placeholder="Enter first name" value={firstname} className="email-checkout" onChange={handleUserFirstName}/>
                        {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div> */}
                        
                        {/* <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                          <span style={{color: "red"}}>* This field is required.</span>
                        </div> */}
                      </div>

                      <div className="btaucheckout-window">
                        <input type="text" placeholder="Enter last name" value={lastname} className="email-checkout" onChange={handleUserLastName}/>
                        {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>

                        <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                          <span style={{color: "red"}}>* This field is required.</span>
                        </div> */}
                      </div>
                    </>
                  }
                  <div className="alcheckout-desk">
                    <div className="spacer _40"></div>
                    <div className="edhtb9d1checkout-desk"></div>
                  </div>
                </div>

                {/* <div className='d1g1checkout-desk'>
                  <a className="allzc5checkout-desk">
                    <div className="f2checkout-desk">
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                        <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                      </svg>
                    </div>
                    
                    <div className="alamd1g1checkout-desk">
                      <span className="chd2cjd3b1checkout-desk">Add last name</span>
                      <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                        <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                          {lastname}
                        </span>
                      </p>
                    </div>
                    
                    <button className="chcicjckhacheckout-desk-btn" onClick={handleLastNameToggle}>{lastnameaddbtntext}</button>
                  </a>

                  {
                    islastnametoggle &&
                    <div className="btaucheckout-window">
                      <input type="text" placeholder="Enter last name" value={lastname} className="email-checkout" onChange={handleUserLastName}/>
                      <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                      
                      <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                        <span style={{color: "red"}}>* This field is required.</span>
                      </div>
                    </div>
                  }
                  <div className="alcheckout-desk">
                    <div className="spacer _40"></div>
                    <div className="edhtb9d1checkout-desk"></div>
                  </div>
                </div> */}
              </div>

              <hr className='edfhmthtcheckout-desk'></hr>
              <div className='mimjepmkmlmmcheckout-desk'>
                <h3 className="eik5ekk6checkout-desk">
                  <span className="d1chekcout-desk-span">Delivey Estimate</span>
                </h3>
                {/* <div className='g8checkout-desk' onClick={() => setIsscheduleclicked(true)}> */}
                <div className='g8checkout-desk'>
                  <div className='oagdalc5o7obc9b1npcheckout-desk'>
                    <div className='ale7c5k8hbocheckout-desk'>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><title>Calendar</title><path fillRule="evenodd" clipRule="evenodd" d="M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22Zm0 15H1V10h22v13ZM8 14H5v3h3v-3Z" fill="currentColor"></path></svg>
                    </div>

                    <div className='ald0fwc5checkout-desk'>
                      <h3 className="alamk3checkout-desk-h3">
                        <div className="alc5checkout-desk">
                          <span className="chd2cjd3checkout-desk-span">Schedule</span>
                        </div>
                        <select className="bubvbwbdbxbybkaubzc0checkout-window-input">
                          <option>4:45 PM</option>
                          <option>5:00 PM</option>
                          <option>5:15 PM</option>
                          <option>5:30 PM</option>
                          <option>5:45 PM</option>
                          <option>6:00 PM</option>
                        </select>
                      </h3>
                    </div>

                  </div>
                </div>
              </div>

              <div className='mimjepmkmlmmcheckout-desk'>
                
                <div className="allzc5checkout-desk">
                  <div className="f2checkout-desk">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                      <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                    </svg>
                  </div> 
                  <input type="checkbox" className="agaxlqdflacheckout-desk-input"></input>
                  <label className={`chd2cjd3bzalafc5l9fwc9lblrcheckout-desk-label ${isavefasterdetailsclicked ? "mch" : ""}`} onClick={() => setIsavefasterdetailsclicked(!isavefasterdetailsclicked)}>
                    <div className="spacer _16"></div>
                    <div className="d1alfwllcheckout-desk">
                      <div className="ald1ame7lmlncheckout-desk">
                        <div className="alaqcheckout-desk">
                          <div className="alamjiencheckout-desk">
                            <div className="chcicjckh6checkout-desk">Save my details for faster checkout next time</div>
                            <div className="spacer _8"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                {
                  isavefasterdetailsclicked &&
                  <>
                    <div className='chcicwd3undersavefastercheckout'>
                      <div className='toundersavefastercheckout'>
                        <div className="eik4ekk5g8undersavefastercheckout">
                          <span className="h3euh4eimfekfdundersavefastercheckout-span">The phone number you have entered is already registered.</span>
                        </div>

                        <div className="btaundersavefastercheckout">
                          <label className='password-label'><span style={{color: "red"}}>*</span>Password: </label>
                          <input type="password" placeholder="Enter password" value="****" className="undersavecheckoutinput" onChange={handlePassword}/>
                        </div>

                        <div className='alh2amenc9jdundersavefastercheckout'>
                          {/* <button className='agloundersavefastercheckout' onClick={handleLogin}>Login</button> */}
                          <button className='agloundersavefastercheckout'>Login</button>
                          <button className='coasgundersavefastercheckout' onClick={() => setIsavefasterdetailsclicked(!isavefasterdetailsclicked)}>Continue as guest user</button>
                        </div>
                      </div>
                    </div>
                   
                  </>
                }
              </div>
              
              <hr className='edfhmthtcheckout-desk'></hr>
              <div className='mimjepmkmlmmcheckout-desk'>
                <div className='d1g1checkout-desk'>
                  <div className="allzc5checkout-desk">

                    <div className="alamd1g1checkout-desk">
                      <span className="chd2cjd3b1checkout-desk">
                       When you place your order, we will send you occasional marketing offers and promotions. Please select below if you do not want to receive this marketing.
                      </span>
                    </div>
                  </div>
                
                  <div className="almycheckout-desk">
                    <div className="allzc5checkout-desk" onClick={() => setIsbyemailclicked(!isbyemailclicked)}>
                      <input type="checkbox" className="agaxlqdflacheckout-desk-input"></input>
                      <label className={`chd2cjd3bzalafc5l9fwc9lblrcheckout-desk-label ${isbyemailclicked ? "mch" : ""}`}>
                        <div className="spacer _16"></div>
                        <div className="d1alfwllcheckout-desk">
                          <div className="ald1ame7lmlncheckout-desk">
                            <div className="alaqcheckout-desk">
                              <div className="alamjiencheckout-desk">
                                <div className="chcicjckh6checkout-desk">By Email</div>
                                <div className="spacer _8"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className='spacer _48'></div>
                    <div className="allzc5checkout-desk" onClick={() => setIsbysmsclicked(!isbysmsclicked)}>
                      <input type="checkbox" className="agaxlqdflacheckout-desk-input"></input>
                      <label className={`chd2cjd3bzalafc5l9fwc9lblrcheckout-desk-label ${isbysmsclicked ? "mch" : ""}`}>
                        <div className="spacer _16"></div>
                        <div className="d1alfwllcheckout-desk">
                          <div className="ald1ame7lmlncheckout-desk">
                            <div className="alaqcheckout-desk">
                              <div className="alamjiencheckout-desk">
                                <div className="chcicjckh6checkout-desk">By SMS</div>
                                <div className="spacer _8"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              
              </div>

              {/* <hr className='edfhmthtcheckout-desk'></hr>
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
                        <div className="boewe1excheckout-desk">1</div>
                        <div className="alamd5ghcheckout-desk">
                          <span className="bobpe1dhcheckout-desk">Banoffee Waffle</span>
                          <ul className="clcheckout-desk">
                            <li className="bh gi gj fn al fo">
                              <span className="bo ew e1 dh">Waffle Type:</span>
                              <div className="spacer _4"></div>
                              <span className="alboewbqdhcheckout-desk">
                                Regular - Half - 7" Fresh Waffle
                                <div></div>
                              </span>
                            </li>
                            
                            <li className="bhgigjfnalfocheckout-desk">
                              <span className="boewe1dhcheckout-desk">Add Treat:</span>
                              <div className="spacer _4"></div><span className="al bo ew bq dh">Add: Ferrero Rocher (£1.50)<div></div></span></li><li className="bh gi gj fn al fo"><span className="bo ew e1 dh">Add Sauce / Topping:</span><div className="spacer _4"></div><span className="al bo ew bq dh">Add: Nutella Sauce (£0.75)<div></div></span></li><li className="bh gi gj fn al fo"><span className="bo ew e1 dh">Chocolates &amp; Fruits - Add-ons:</span><div className="spacer _4"></div><span className="al bo ew bq dh">Add: Ferrero Rocher (£1.50)<div></div></span></li><li className="bh gi gj fn al fo"><span className="bo ew e1 dh">Sauces and Toppings:</span><div className="spacer _4"></div><span className="al bo ew bq dh">Add: Chocolate Sauce (£0.50)<div></div></span></li><li className="bh gi gj fn al fo"><span className="bo ew e1 dh">Ice Cream:</span><div className="spacer _4"></div><span className="al bo ew bq dh">Vanilla Ice Cream (£1.95)<div></div></span></li></ul></div>
                        <div className="gkalamglb1bocheckout-desk">
                          <span className="i8csi9boewcheckout-desk">£9.65</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div></div>
          </div>

          <div className="d1g1checkout-desk">
            <div className='gmgngoalamgpcheckout-desk'>
            <div className="gqcheckout-desk">
              <div className='boh7bqh8checkout-desk'>
                <button className="h7brboe1checkout-btn" onClick={handlePayNow}>Pay Now</button>
              </div>
            </div>
            <div className="eeb0checkout-desk">
              <div className='b5grekcheckout-desk'>
                {/* <h3 className='bkfbbmfccheckout-desk'> */}
                  {/* <span className='d5checkout-desk'>Order total</span> */}
                {/* </h3> */}
                <ul>
                  {/* <li className="bobpbqbraldfcheckout-desk-list">
                    <div className="albcaqcheckout-desk">
                      <div className="bobpbqbrb1checkout-desk">Subtotal</div>
                    </div>
                    <div className="bobpbqbrcheckout-desk">
                      <span className="">£9.65</span>
                    </div>
                  </li> */}
                  
                  {/* <li className="e6ib"></li> */}
                  
                  {/* <li className="bobpbqbraldfcheckout-desk-list">
                    <div className="albcaqcheckout-desk">
                      <div className="bobpbqbrb1checkout-desk">Fees</div>
                      <div className="spacer _8"></div>
                      <div role="tooltip" id="fare_breakdown_charge_1" className="ak al">
                        <div className="hl fi dd">
                          <svg width="16px" height="16px" 
                          fill="none" viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg" 
                          aria-hidden="true" focusable="false"
                        >
                          <path d="M11.9999 2.83398C6.91658 2.83398 2.83325 6.91732 2.83325 12.0007C2.83325 17.084 6.91658 21.1673 11.9999 21.1673C17.0833 21.1673 21.1666 17.084 21.1666 12.0007C21.1666 6.91732 17.0833 2.83398 11.9999 2.83398ZM13.2499 17.834H10.7499V11.1673H13.2499V17.834ZM11.9999 9.50065C11.0833 9.50065 10.3333 8.75065 10.3333 7.83398C10.3333 6.91732 11.0833 6.16732 11.9999 6.16732C12.9166 6.16732 13.6666 6.91732 13.6666 7.83398C13.6666 8.75065 12.9166 9.50065 11.9999 9.50065Z" fill="#6B6B6B"></path>
                        </svg>
                      </div>
                      
                      <div className="agicidieifcheckout-desk">
                        <div className="bkhybmcheckout-desk">Your Delivery Charge includes</div>
                        <div className="e6 fi"></div>
                        <div className="al">
                          <div>
                            <div className="bo bp bq br al df">
                              <div className="fs">Service</div>
                              <div className="spacer _8"></div>
                              <div className="al aq bc fs">£0.99</div>
                            </div>
                            <div className="bo ew bq dh b1">This fee varies based on factors like basket size and helps cover costs related to your order.</div>
                          </div>
                        </div>
                        
                        <div className="e6 fi"></div>
                        <div className="al">
                          <div>
                            <div className="bo bp bq br al df">
                              <div className="fs">Delivery</div>
                              <div className="spacer _8"></div>
                              <div className="al aq bc fs">£4.29</div>
                            </div>
                            
                            <div className="bo ew bq dh b1"></div>
                          </div>
                        </div>
                        
                        <div className="e6 fi"></div>
                        
                        <div className="al">
                          <div>
                            <div className="bo bp e1 dh al df">
                              <div className="fs">Fees total</div>
                              <div className="spacer _8"></div>
                              <div className="al aq bc fs">£5.28</div>
                            </div>
                            
                            <div className="bo ew bq dh b1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </li> */}
                
                  {/* <li className="e6ib"></li>
                
                  <li className="bobpbqbraldfcheckout-desk-list">
                    <div className="albcaqcheckout-desk">
                      <div className="bobpbqbrb1checkout-desk">Service</div>
                    </div>
                    
                    <div className="bobpbqbrb1checkout-desk">
                      <span className="">£0.99</span>
                    </div>
                  </li>
                
                  <li className="e6ib"></li>
                
                  <li className="bobpbqbraldfcheckout-desk-list">
                    <div className="albcaqcheckout-desk">
                      <div className="bobpbqbrb1checkout-desk">Delivery</div>
                    </div>
                    
                    <div className="bobpbqbrb1checkout-desk">
                      <span className="">£4.29</span>
                    </div>
                  </li> */}
                </ul>

                {/* <hr className='f7bsh1f8checkout-hr'></hr> */}
                <div className='bkhybmh8aldfcheckout-desk'>
                  <div className='albcaqcheckout'>
                    Total
                  </div>
                  £ 14.93
                </div>

                <div className='itcheckout-desk'>
                  <div className='bodgbqdhfncheckout-desk'>
                    <div className='bodgbqdhb1checkout-desK'>
                      <span className="bodgbqdhiucheckout-desk">
                        <span className="bodge1exiucheckout-desk-span">ALLERGIES: </span> 
                        If you or someone you’re ordering for has an allergy, please contact the merchant directly to let them know.
                      </span>
                    </div>
                  </div>
                  <div className='e6h3checkout-desk'></div>

                  <div className='bodgbqdhfncheckout-desk'>
                    <div className='bodgbqdhb1checkout-desK'>
                      <span className="bodgbqdhiucheckout-desk">
                      If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available.
                      </span>
                    </div>
                  </div>
                  <div className='e6h3checkout-desk'></div>

                  <div className='bodgbqdhfncheckout-desk'>
                    <div className='bodgbqdhb1checkout-desK'>
                      <span className="bodgbqdhiucheckout-desk">
                      Whilst we, and our restaurant partners, have safety measures to mitigate food safety risk, couriers may be delivering more than one order so we cannot eliminate the risk of cross-contamination from allergens.
                      </span>
                    </div>
                  </div>
                  <div className='e6h3checkout-desk'></div>

                </div>
              </div>
            </div>
            <div className="gqcheckout-desk"></div>
            </div>
          </div>

        </div>
      </div>


      <div className="afcheckout">
        <div className="">
          <div className="cwcxcyczd0d1checkout">
            {/* <h3 className="bkd2checkout-h3">
              <span className="cjcheckout">Checkout Window</span>
            </h3> */}

            {/* <div className="">
              <div className="cjdchkout">
                <a className="alddbccheckout">

                  <div className="decheckout-svg">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbcheckout-pin"><g clipPath="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                  </div>

                  <div className="alamcjdcheckout">
                    <span className="bobpdfcvb1checkout">{postcode}</span>
                    <p className="b1bobqdgcvcheckout">
                      <span style={{fontFamily:"UberMoveText;color:#545454"}}>{street1} {street2}</span>
                    </p>
                  </div>
            
                  <Link className="bodgdfdhcheckout-btn" onClick={() => setIsdeliverybtnclicked(true)}>
                    Edit
                  </Link>

                </a>
                <div className="al">
                  <div className="drdsbscjcheckout"></div>
                </div>
              </div>
            </div> */}

            <div className="hmg1checkout-desk">
              <div className="hmg1mhb0checkout-desk">
                <div className='mimjepmkmlmmcheckout-desk'>
                  <h3 className="eik5ekk6checkout-desk">
                    <span className="d1chekcout-desk-span">Delivery Details</span>
                  </h3>
                  <span style={{color: "red" , fontSize: "300"}}>*Fields marked with an asterisk must be filled in to proceed.</span>
                  <div>

                    <div className='d1g1checkout-desk'>
                      <a className="allzc5checkout-desk" >
                        <div className="kgcheckout-desk">
                          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                            <g clipPath="url(#clip0)">
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
                          <span className="chd2cjd3b1checkout-desk">{postcode}</span>
                          <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                            <span style={{fontFamily:"UberMoveText", color:"#545454"}}>
                              {street1} {street2}
                            </span>
                          </p>
                        </div>
                        
                        <button className="chcicjckhacheckout-desk-btn" onClick={handlePostcodeEdit}>{deliverydetailtext}</button>
                      </a>
                      {
                        ispostcodeeditclicked &&
                        <div className="btautrackorder-postcode-edit">
                          <input type='text' className='strtpostcode' value={street1}></input>
                          <input type='text' className='strtpostcode' value={street2}></input>
                          <div className='strtpostcode-btn'>
                            <input type='text' className='strtpostcode' value={postcode}></input>
                            <button className='change_postcode_btn' onClick={() => setIschangepostcodeclicked(!ischangepostcodeclicked)}>Change postcode</button>
                          </div>
                        </div>
                      }
                      <div className="alcheckout-desk">
                        <div className="spacer _40"></div>
                        <div className="edhtb9d1checkout-desk"></div>
                      </div>
                    </div>

                    <div className='d1g1checkout-desk'>
                      <a className="allzc5checkout-desk" >
                        <div className="kgcheckout-desk">
                          <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="cxcwd0d1checkout-svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path>
                          </svg>
                        </div>
                        
                        <div className="alamd1g1checkout-desk">
                          <span className="chd2cjd3b1checkout-desk">Add door number <span style={{color: "red"}}>*</span></span>
                          {/* <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                            <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                            Add driver instructions
                            </span>
                          </p> */}
                        </div>
                        
                        <button className="chcicjckhacheckout-desk-btn" onClick={handleDoorHouseClicked}>{doornumbertext}</button>
                      </a>


                      {
                        isadddoororhouseclicked &&
                        <div className="btaucheckout-window">
                          <input type="text" placeholder="Enter door number or name" value="12" className="door_number" onChange={handleUserEmail}/>
                          {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                          
                          <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                            <span style={{color: "red"}}>* This field is required.</span>
                          </div> */}
                        </div>
                      }

                      <div className="alcheckout-desk">
                        <div className="spacer _40"></div>
                        <div className="edhtb9d1checkout-desk"></div>
                      </div>
                    </div>

                    <div className='d1g1checkout-desk'>
                      <a className="allzc5checkout-desk" >
                        <div className="kgcheckout-desk">
                          <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="cxcwd0d1checkout-svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"></path>
                          </svg>
                        </div>
                        
                        <div className="alamd1g1checkout-desk">
                          <span className="chd2cjd3b1checkout-desk">Add driver instructions</span>
                          {/* <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                            <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                            Add driver instructions
                            </span>
                          </p> */}
                        </div>
                        
                        <button className="chcicjckhacheckout-desk-btn" onClick={handleDriverInstruction}>{isadddoortext}</button>
                      </a>
                      {
                        isadddrivertoggle &&
                        <div className="btaucheckout-window">
                          {/* <textarea placeholder="Add delivery instructions" className="door_number" ></textarea> */}
                          <textarea placeholder="Add delivery instructions" rows="2" aria-label="Add delivery instructions" onChange={handleUserEmail} className="door_number" spellcheck="false"></textarea>
                          {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                          
                          <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                            <span style={{color: "red"}}>* This field is required.</span>
                          </div> */}
                        </div>
                      }
                    </div>
                    
                  </div>
                </div>

                <hr className='edfhmthtcheckout-desk'></hr>
                <div className='mimjepmkmlmmcheckout-desk'>
                  
                  <h3 className="eik5ekk6checkout-desk">
                    <span className="d1chekcout-desk-span">Contact Details</span>
                  </h3>
                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk">
                      <div className="f2checkout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                          <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                        </svg>
                      </div>
                      
                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">Add email address <span style={{color: "red"}}>*</span></span> 
                        <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                          <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                            {email}
                          </span>
                        </p>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn" onClick={handleEmailToggle}>{emailaddbtntext}</button>
                    </a>

                    {
                      isemailtoggle &&
                      <div className="btaucheckout-window">
                        <input type="email" placeholder="Enter email" value={email} className="email-checkout" onChange={handleUserEmail}/>
                        {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                        
                        <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                          <span style={{color: "red"}}>* This field is required.</span>
                        </div> */}
                      </div>
                    }
                    <div className="alcheckout-desk">
                      <div className="spacer _40"></div>
                      <div className="edhtb9d1checkout-desk"></div>
                    </div>
                  </div>

                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk">
                      <div className="f2checkout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                          <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                        </svg>
                      </div>
                      
                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">Add phone number <span style={{color: "red"}}>*</span></span>
                        <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                          <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                            {phone}
                          </span>
                        </p>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn" onClick={handlePhoneToggle}>{phoneaddbtntext}</button>
                    </a>

                    {
                      isphonetoggle &&
                      <div className="btaucheckout-window">
                        <input type="number" placeholder="Enter phone number" value={phone} className="email-checkout" onChange={handleUserPhone}/>
                        {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                        
                        <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                          <span style={{color: "red"}}>* This field is required.</span>
                        </div> */}
                      </div>
                    }
                    <div className="alcheckout-desk">
                      <div className="spacer _40"></div>
                      <div className="edhtb9d1checkout-desk"></div>
                    </div>
                  </div>

                  <div className='d1g1checkout-desk'>
                    <a className="allzc5checkout-desk">
                      <div className="f2checkout-desk">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                          <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                        </svg>
                      </div>
                      
                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">Add name <span style={{color: "red"}}>*</span></span>
                        <p data-baseweb="typo-paragraphsmall" className="b1chcwcid3checkout-desk">
                          <span style={{fontFamily:"UberMoveText", color:"#05944F"}}>
                            {firstname} {lastname}
                          </span>
                        </p>
                      </div>
                      
                      <button className="chcicjckhacheckout-desk-btn" onClick={handleFirstNameToggle}>{firstnameaddbtntext}</button>
                    </a>

                    {
                      isfirstnametoggle &&
                      <>
                        <div className="btaucheckout-window">
                          <input type="text" placeholder="Enter first name" style={{marginBottom: "4px"}} value={firstname} className="email-checkout" onChange={handleUserFirstName}/>
                          {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>
                          
                          <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                            <span style={{color: "red"}}>* This field is required.</span>
                          </div> */}
                        </div>

                        <div className="btaucheckout-window">
                          <input type="text" placeholder="Enter last name" value={lastname} className="email-checkout" onChange={handleUserLastName}/>
                          {/* <div data-lastpass-icon-root="true" style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}></div>

                          <div style={{marginTop: "5px", lineHeight: "16px", fontSize: "14px"}}>
                            <span style={{color: "red"}}>* This field is required.</span>
                          </div> */}
                        </div>
                      </>
                    }
                    <div className="alcheckout-desk">
                      <div className="spacer _40"></div>
                      <div className="edhtb9d1checkout-desk"></div>
                    </div>
                  </div>
                </div>

                <hr className='edfhmthtcheckout-desk'></hr>
                <div className='mimjepmkmlmmcheckout-desk'>
                  <h3 className="eik5ekk6checkout-desk">
                    <span className="d1chekcout-desk-span">Delivery Estimate</span>
                  </h3>
                  <div className='g8checkout-desk'>
                    <div className='oagdalc5o7obc9b1npcheckout-desk'>
                      <div className='ale7c5k8hbocheckout-desk'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><title>Calendar</title><path fillRule="evenodd" clipRule="evenodd" d="M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22Zm0 15H1V10h22v13ZM8 14H5v3h3v-3Z" fill="currentColor"></path></svg>
                      </div>

                      <div className='ald0fwc5checkout-desk'>
                        <h3 className="alamk3checkout-desk-h3">
                          <div className="alc5checkout-desk">
                            <span className="chd2cjd3checkout-desk-span">Schedule</span>
                          </div>
                          <select className="bubvbwbdbxbybkaubzc0checkout-window-input">
                            <option>4:45 PM</option>
                            <option>5:00 PM</option>
                            <option>5:15 PM</option>
                            <option>5:30 PM</option>
                            <option>5:45 PM</option>
                            <option>6:00 PM</option>
                          </select>
                        </h3>
                      </div>

                    </div>
                  </div>
                </div>

                <div className='mimjepmkmlmmcheckout-desk'>
                  
                  <div className="allzc5checkout-desk">
                    <div className="f2checkout-desk">
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdcheckout">
                        <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                      </svg>
                    </div> 
                    <input type="checkbox" className="agaxlqdflacheckout-desk-input"></input>
                    <label className={`chd2cjd3bzalafc5l9fwc9lblrcheckout-desk-label ${isavefasterdetailsclicked ? "mch" : ""}`} onClick={() => setIsavefasterdetailsclicked(!isavefasterdetailsclicked)}>
                      <div className="spacer _16"></div>
                      <div className="d1alfwllcheckout-desk">
                        <div className="ald1ame7lmlncheckout-desk">
                          <div className="alaqcheckout-desk">
                            <div className="alamjiencheckout-desk">
                              <div className="chcicjckh6checkout-desk">Save my details for faster checkout next time</div>
                              <div className="spacer _8"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                
                </div>
                
                {
                  isavefasterdetailsclicked &&
                  <>
                    <div className='chcicwd3undersavefastercheckout'>
                      <div className='toundersavefastercheckout'>
                        <div className="eik4ekk5g8undersavefastercheckout">
                          <span className="h3euh4eimfekfdundersavefastercheckout-span">The phone number you have entered is already registered.</span>
                        </div>

                        <div className="btaundersavefastercheckout">
                          <label className='password-label'><span style={{color: "red"}}>*</span>Password: </label>
                          <input type="password" placeholder="Enter password" value="****" className="undersavecheckoutinput" onChange={handlePassword}/>
                        </div>

                        <div className='alh2amenc9jdundersavefastercheckout'>
                          {/* <button className='agloundersavefastercheckout' onClick={handleLogin}>Login</button> */}
                          <button className='agloundersavefastercheckout'>Login</button>
                          <button className='coasgundersavefastercheckout' onClick={() => setIsavefasterdetailsclicked(!isavefasterdetailsclicked)}>Continue as guest user</button>
                        </div>
                      </div>
                    </div>
                  </>
                }
                
                <hr className='edfhmthtcheckout-desk'></hr>
                <div className='mimjepmkmlmmcheckout-desk'>
                  <div className='d1g1checkout-desk'>
                    <div className="allzc5checkout-desk">

                      <div className="alamd1g1checkout-desk">
                        <span className="chd2cjd3b1checkout-desk">
                        When you place your order, we will send you occasional marketing offers and promotions. Please select below if you do not want to receive this marketing.
                        </span>
                      </div>
                    </div>
                  
                    <div className="almycheckout-desk">
                      <div className="allzc5checkout-desk" onClick={() => setIsbyemailclicked(!isbyemailclicked)}>
                        <input type="checkbox" className="agaxlqdflacheckout-desk-input"></input>
                        <label className={`chd2cjd3bzalafc5l9fwc9lblrcheckout-desk-label ${isbyemailclicked ? "mch" : ""}`}>
                          <div className="spacer _16"></div>
                          <div className="d1alfwllcheckout-desk">
                            <div className="ald1ame7lmlncheckout-desk">
                              <div className="alaqcheckout-desk">
                                <div className="alamjiencheckout-desk">
                                  <div className="chcicjckh6checkout-desk">By Email &nbsp;</div>
                                  <div className="spacer _8"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className='spacer _48'></div>
                      <div className="allzc5checkout-desk" onClick={() => setIsbysmsclicked(!isbysmsclicked)}>
                        <input type="checkbox" className="agaxlqdflacheckout-desk-input"></input>
                        <label className={`chd2cjd3bzalafc5l9fwc9lblrcheckout-desk-label ${isbysmsclicked ? "mch" : ""}`}>
                          <div className="spacer _16"></div>
                          <div className="d1alfwllcheckout-desk">
                            <div className="ald1ame7lmlncheckout-desk">
                              <div className="alaqcheckout-desk">
                                <div className="alamjiencheckout-desk">
                                  <div className="chcicjckh6checkout-desk">By SMS &nbsp;</div>
                                  <div className="spacer _8"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div></div>
              </div>
            </div>
        </div>

        <div className="dtcxcybgd0d1checkout">
          <div className="bocubqcve9checkout">
            <div className="bocubqcvb1checkout">
              <span className="bocubqcvgycheckout">
                <span className="bocudfdhgy">ALLERGIES:&nbsp; &nbsp;</span> 
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
                <button className="fwbrbocheckout-place-order" onClick={handlePayNow}>Pay Now</button>
                <div style={{height: "10px"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Testing */}

      {
        ischangepostcodeclicked &&
        <div className="modal-delivery-details">
          <div className="modal-delivery-details-level-one-div">
            <div className="modal-delivery-details-level-one-div-height"></div>
            <div className="modal-delivery-details-level-one-div-dialog">
              <div></div>

              <div className="modal-delivery-details-level-one-div-dialog-header">
                <div className="delivery-empty-div"></div>
                <button className="delivery-modal-close-button">
                  <div
                    className="delivery-modal-close-button-svg-div"
                    onClick={() =>
                      setIschangepostcodeclicked(!ischangepostcodeclicked)
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
                </button>
              </div>
              {ischangepostcodeclicked && (
                <>
                  <div className="deliver-to-body-content">
                    <h1 className="deliver-to-body-content-h1">
                      Deliver to
                    </h1>
                    <div className="deliver-to-body-content-nested-div-level-one">
                      <label
                        id="location-typeahead-location-manager-label"
                        htmlFor="location-typeahead-location-manager-input"
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

                      {/* <button className="deliver-to-done-button" onClick={handleRedirect}>
                        Done
                      </button> */}
                    </div>
                  </div>
                </>
              )}

              {/* {ispostcodeeditclicked === false && (
                <>
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
              )} */}
            </div>
            <div className="modal-delivery-details-level-one-div-height"></div>
          </div>
        </div>
      }

      {/* Delivery Estimate Schedule */}
      {
        isscheduleclicked &&
        <div className='agasatd5srschedule'>
          <div style={{width: "1px", height: "0px", padding: "0px", overflow: "hidden", position: "fixed", top: "1px", left: "1px"}}></div>
          <div>
            <div className='arjbd5e8asathfschedule'>
              <div className='alc5e7bzlrsshfjcjddpjfjgjhshedule'>
                <div className='akb0stsusvswjthkjusxjocfdpt4jrjgjhszt0lgalamdxc0schedule'>
                  <button className="kukvkwkxschedule-close" onClick={() => setIsscheduleclicked(false)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{stroke: "currentcolor"}}>
                      <path d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                  </button>

                  <div className='t3joschedule'>

                    <div className='frasjzschedule'>
                      <div className='agbzschedule'>
                        <div className='agase8bzalc5b0t5t6t7axschdule'></div>
                        <div className='akgit8c5fwbziuh0eoepafschedule'>
                          <div className="t9schedule">
                            <button className="cyaqc5e7qqschedule" onClick={() => setIsscheduleclicked(false)}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <title>X</title>
                                <path d="m21.1 5.1-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9Z" fill="currentColor"></path>
                            </svg>
                            </button>
                          </div>

                          <div className="chj5cjschedule">Schedule delivery</div>
                          <div className='tjschedule'></div>
                        </div>
                      </div>
                    </div>

                    <div className='chcicwd3schedule'>
                      <div className='toschedule'>
                        <div className="eik4ekk5g8schedule">
                          <span className="h3euh4eimfekfdschedule-span">Schedule delivery</span>
                        </div>

                        <div className='alh2amenc9jdschedule'>
                          <label className='aqalc5c9jshrolbzaffwnfschedule'>
                            
                            <div className="u2h0b1chd2cjd3d0schedule">
                              <div className="alfwschedule">
                                <div className="alame7schedule">
                                  <span className="h3euh4chd2schedule">4:15 PM - 4:45 PM</span>
                                </div>
                                <div className="alame7schedule"></div>
                              </div>
                            </div>

                            <div className="c5iztctatbtdschedule">
                              <div className="b0tctatbschedule"></div>
                            </div>
                            
                            <input type="radio" className="aoapjsjuschedule-input" checked/>

                          </label>

                          <label className='aqalc5c9jshrolbzaffwnfschedule'>
                            
                            <div className="u2h0b1chd2cjd3d0schedule">
                              <div className="alfwschedule">
                                <div className="alame7schedule">
                                  <span className="h3euh4chd2schedule">5:00 PM - 6:45 PM</span>
                                </div>
                                <div className="alame7schedule"></div>
                              </div>
                            </div>

                            <div className="c5iztctatbtdsempchedule">
                              <div className="b0tctatbempschedule"></div>
                            </div>
                            
                            <input type="radio" className="aoapjsjuschedule-input"/>

                          </label>

                        </div>
                      </div>
                    </div>

                    <div className="kirckgi1pmpnu9uac0schedule">
                      <button className="cyaqc5e7qqqsschedule">
                        <span className="bbcvschedule">
                          <span className="bdeuh4chschedule">Schedule</span>
                        </span>
                      </button>
                      
                      <div className="daemschedule"></div>
                      
                      <button className="cyaqc5e7qsschedule">
                        <span className="bbcvschedule">
                          <span className="bdeuh4chschedule">Cancel</span>
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div style={{width: "1px", height: "0px", padding: "0px", overflow: "hidden", position: "fixed", top: "1px", left: "1px"}}></div>
        </div>
      }

      {/* Door Number or Name */}
      {/* {
        isadddoororhouseclicked &&
        <div className=''>
          <div className='anarasatbadidjdkdoor'>
            <div className='alamdlbcdmcrdoor'>
              <div className='cudoor'></div>
              <div className='crakdndoor'>
                <div></div>
                <div className='doasdpbhdqdoor'>
                  <div className='drb0dsalbcaxddoor'></div>
                  <button className='alagdydzdqe0bcd9cie1afdne2e3door' onClick={() => setIsadddoororhouseclicked(!isadddoororhouseclicked)}>

                    <div className="cxcwdddoor">
                      <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z" fill="#000000"></path>
                      </svg>
                    </div>

                  </button>
                </div>

                <div className='e4b5door'>
                  <h1 className='bke5bme6e7door'>Delivery details</h1>
                  <div className="bobpbqbre8e9eadoor">
                    <div className="bobpbqbrdoor">
                      <div className="cxcwddoor">
                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                          <path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div className="spacer _8"></div>
                      {street1} {street2}
                    </div>
                  </div>

                  <div className="eidoor">
                    <input type="text" autocomplete="on" placeholder="Door number or name" className="bobpbqbre8door" value="" />
                  </div>
                  <textarea placeholder="Add delivery instructions" rows="2" aria-label="Add delivery instructions" className="bobpbqbre8e9eab1ajdoor" spellcheck="false">
                  </textarea>


                  <button className="epbrboegcierbhaldoor" onClick={() => setIsadddoororhouseclicked(!isadddoororhouseclicked)}>Save</button>
                </div>
              </div>
              <div className='cudoor'></div>
            </div>
          </div>
        </div>
      } */}
    </>
  )
}

export default UserForm