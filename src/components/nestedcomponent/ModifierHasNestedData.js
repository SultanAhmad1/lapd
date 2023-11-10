import React, { useContext, useEffect } from 'react'
import HomeContext from '../contexts/HomeContext'

function ModifierHasNestedData() {
    const{ismodifierclicked,setIsmodifierclicked, handleInput} = useContext(HomeContext)
    useEffect(() => {

        if(ismodifierclicked)
        {
          var acc = document.getElementsByClassName("accordion");
          console.log("All acc", acc);
          var i;
    
          for (i = 0; i < acc.length; i++) 
          {
            acc[i].addEventListener("click", function() 
            {
              var panel = this.parentNode.parentNode.nextElementSibling;
              if (panel.style.display === "block") {
                panel.style.display = "none";
                this.children[0].children[0].style.display = 'none'
                this.children[0].children[1].style.display = 'block'
              } else {
                panel.style.display = "block";
                this.children[0].children[0].style.display = 'block'
                this.children[0].children[1].style.display = 'none'
              }
            });
          }

        }
    }, [ismodifierclicked])
    
  return (
    <>
    {
        ismodifierclicked && 
        <div>
          <div>
            <div className="agasatdsjbmodifier-modal">
              <div data-focus-guard="true" tabIndex="0" style={{width: "1px", height: "0px", padding: "0px", overflow: "hidden", position: "fixed", top: "1px", left: "1px"}}></div>
              <div>
                <div className="arjcd5dvasatenmodifier-modal">
                  <div className="alc5dtbzjdfmenmodifier-modal">
                    <div className="akb0jjjkjljmmodifier-modal">
                      <div>
                        <div className="s2akc0modifier-modal">

                          <div className="fqs3alaqc5s4ass5c0modifier-modal">
                            <button aria-label="Go back" className="almodifier-back-btn" onClick={() => setIsmodifierclicked(false)}>
                              <div className="c8c7cumodifier-back-btn-div">
                                <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                  <path d="M20.3333 13.25H7.25L11.8333 19.5H8.91667L3.5 12L8.91667 4.5H11.8333L7.25 10.75H20.3333V13.25Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </button>
                            <div className="spacer _16"></div>
                          
                            <div className="e6kae8kbmodifier-modal-name">Yes</div>
                          </div>

                          <ul className="g0s6modifier-modal">
                            <li>
                              <div className="k5modifier-modal-item">
                                  <div>
                                    <hr className="edipiqgdmodifier-hr"></hr>

                                    <div className="alaqg5fxmodifier-modal-div">
                                        <div className="alammodifier-modal">
                                          <div className="eoepeqermodifier-heading">Add Sides</div>
                                          <div className="chcicwd3czmodifier-choose">
                                            <span>Choose 1</span>
                                            <div className="irmodifier-modal">
                                              <div className="isafcbitiuivcymodifier-modal">
                                                  Required
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="single-product-svg-div accordion">
                                          <div className="single-product-svg-div-one">
                                            <svg className="bottom-arrow-head-svg" style={{display: "none"}} width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                              <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(180, 12, 12)"></path>
                                            </svg>

                                            <svg className="rigth-arrow-head-svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{cursor: "pointer"}}>
                                              <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(90, 12, 12)"></path>
                                            </svg>
                                          </div>
                                        </div>
                                    </div>
                                  </div>

                                  <div className="iwmodifier-data">
                                    <div className="alakixc5modifier-data">
                                      <input type="radio" id="product_details-item-e580f035-b3b2-5f0b-8838-135c9efbe405-2-5d9349e2-5929-5202-a94d-7e931596a1ba+0" name="5d9349e2-5929-5202-a94d-7e931596a1ba+0" className="agaxgqdfiymodifier-input" value="e580f035-b3b2-5f0b-8838-135c9efbe405"/>
                                      
                                      <label className="chd2cjmodifier-modal-label nv">
                                        <div className="spacer _16"></div>
                                        <div className="d1alg5j9modifier-modal">
                                          <div className="ald1ame6jajbjcmodifier-modal">
                                            <div className="alaqmodifier-modal">
                                              <div className="alamdxdvmodifier-modal">
                                                <div className="chcicjckjdmodifier-modal">Skin On Fries</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </label>

                                    </div>
                                    <hr className="edb9jegdmodifier-hr"></hr>

                                    <div className="alakixc5modifier-data">
                                      <input type="radio" className="agaxgqdfiymodifier-input" />
                                      
                                      <label className="chd2cjmodifier-modal-label ob">
                                        <div className="spacer _16"></div>
                                        <div className="d1alg5j9modifier-modal">
                                          <div className="ald1ame6jajbjcmodifier-modal">
                                            <div className="alaqmodifier-modal">
                                              <div className="alamdxdvmodifier-modal">
                                                <div className="chcicjckjdmodifier-modal">Skin On Fries</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </label>

                                    </div>
                                    <hr className="edb9jegdmodifier-hr"></hr>
                                  </div>
                              </div>
                            </li>

                            <li>
                              <div className="k5modifier-modal-item">
                                <div>
                                  <hr className="edipiqgdmodifier-hr"></hr>

                                  <div className="alaqg5fxmodifier-modal-div">
                                      <div className="alammodifier-modal">
                                        <div className="eoepeqermodifier-heading">Checkbox Testing</div>
                                        <div className="chcicwd3czmodifier-choose">
                                          <span>Choose 3</span>
                                          <div className="irmodifier-modal">
                                            <div className="isafcbitiuivcymodifier-modal">
                                                Required
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="single-product-svg-div accordion">
                                        <div className="single-product-svg-div-one">
                                          <svg className="bottom-arrow-head-svg" style={{display: "none"}} width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(180, 12, 12)"></path>
                                          </svg>

                                          <svg className="rigth-arrow-head-svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{cursor: "pointer"}}>
                                            <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(90, 12, 12)"></path>
                                          </svg>
                                        </div>
                                      </div>
                                  </div>
                                </div>

                                <div className="iwmodifier-data">
                                  <div className="alakixc5modifier-data">
                                    <input type="checkbox" className="checkbox-input" />
                                    
                                    <label className="modifier-product-item-name-checkbox mche">
                                      <div className="spacer _16"></div>
                                      <div className="d1alg5j9modifier-modal">
                                        <div className="ald1ame6jajbjcmodifier-modal">
                                          <div className="alaqmodifier-modal">
                                            <div className="alamdxdvmodifier-modal">
                                              <div className="chcicjckjdmodifier-modal">Skin On Fries</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </label>

                                  </div>
                                  <hr className="edb9jegdmodifier-hr"></hr>

                                  <div className="alakixc5modifier-data">
                                    <input type="checkbox" className="checkbox-input" />
                                    
                                    <label className="modifier-product-item-name-checkbox mch">
                                      <div className="spacer _16"></div>
                                      <div className="d1alg5j9modifier-modal">
                                        <div className="ald1ame6jajbjcmodifier-modal">
                                          <div className="alaqmodifier-modal">
                                            <div className="alamdxdvmodifier-modal">
                                              <div className="chcicjckjdmodifier-modal">Skin On Fries</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </label>

                                  </div>
                                  <hr className="edb9jegdmodifier-hr"></hr>

                                  <div className="alakixc5modifier-data">
                                    <input type="checkbox" className="checkbox-input" />
                                    
                                    <label className="modifier-product-item-name-checkbox mchw">
                                      <div className="spacer _16"></div>
                                      <div className="d1alg5j9modifier-modal">
                                        <div className="ald1ame6jajbjcmodifier-modal">
                                          <div className="alaqmodifier-modal">
                                            <div className="alamdxdvmodifier-modal">
                                              <div className="chcicjckjdmodifier-modal">Skin On Fries</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </label>

                                  </div>
                                  <hr className="edb9jegdmodifier-hr"></hr>
                                </div>
                              </div>
                            </li>
                            <li>
                          <div>
                            <div>
                              <hr className="product_hr"></hr>
                              <div className="product-list-div">
                                <div className="product-modifier-groups">
                                  <div className="product-modifier-name">Chocolates & Fruits - Add-ons</div>
                                  <div className="product-modifier-option">
                                    <span>Choose up to 5</span>
                                    <div className="irmodifier-modal">
                                      <div className="isafcbitiuivcymodifier-modal">
                                          Optional
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="single-product-svg-div accordion">
                                  <div className="single-product-svg-div-one">
                                    <svg className="bottom-arrow-head-svg" style={{display: "none"}} width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                      <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(180, 12, 12)"></path>
                                    </svg>

                                    <svg className="rigth-arrow-head-svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{cursor: "pointer"}}>
                                      <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(90, 12, 12)"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* List of all modifier group products */}
                            <div className="hg">

                              <div className="product-modifier-item-detail">

                                <div className="modifier-product-item-name-inc-dec">
                                
                                  <div className="modifier-inc-dec">
                                    <button className="modifier-btn" onClick={() => handleInput("incbutton")}>

                                      <div className="modifier-btn-div">
                                        <div className="modifier-btn-svg">
                                          <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="m7.33325 13v-2h9.33335v2z" fill="#000000"></path>
                                          </svg>
                                        </div>
                                      </div>

                                    </button>
                                    
                                    <div className="incremented-values">1</div>
                                    
                                    <button className="modifier-btn" onClick={() => handleInput("incbutton")}>

                                      <div className="modifier-btn-div">
                                        <div className="modifier-btn-svg">
                                          <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="#000000"></path>
                                          </svg>
                                        </div>
                                      </div>

                                    </button>
                                  </div>

                                  <div className="spacer _16"></div>
                                  <div className="modifier-product-item-name-one-div">
                                    <div className="modifier-product-item-name-one-nested-div">
                                      <div className="modifier-product-item-name-one-nested-div-one">
                                        <div className="modifier-product-item-name-one-nested-div-one-nested">
                                          <div className="modifier-product-item-name-one-nested-div-one-nested-div">No Extra Topping 1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                              <hr className="product-modifier-items-hr"></hr>

                              <div className="product-modifier-item-detail">

                                <div className="modifier-product-item-name-inc-dec">
                                  
                                <div className="modifier-inc-dec">
                                  <button className="modifier-btn">

                                    <div className="modifier-btn-div">
                                      <div className="modifier-btn-svg">
                                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                          <path d="m7.33325 13v-2h9.33335v2z" fill="#000000"></path>
                                        </svg>
                                      </div>
                                    </div>

                                  </button>
                                  
                                  <div className="incremented-values">1</div>
                                  
                                  <button className="modifier-btn">

                                    <div className="modifier-btn-div">
                                      <div className="modifier-btn-svg">
                                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                          <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="#000000"></path>
                                        </svg>
                                      </div>
                                    </div>

                                  </button>
                                </div>

                                  <div className="spacer _16"></div>
                                  <div className="modifier-product-item-name-one-div">
                                    <div className="modifier-product-item-name-one-nested-div">
                                      <div className="modifier-product-item-name-one-nested-div-one">
                                        <div className="modifier-product-item-name-one-nested-div-one-nested">
                                          <div className="modifier-product-item-name-one-nested-div-one-nested-div">No Extra Topping 1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>

                            </div>
                          </div>
                        </li>
                            {/* <li>
                              <div>
                                <div>
                                  <hr className="product_hr"></hr>
                                  <div className="product-list-div">
                                    <div className="product-modifier-groups">
                                      <div className="product-modifier-name">Chocolates & Fruits - Add-ons</div>
                                      <div className="product-modifier-option">
                                        <span>Choose up to 5</span>
                                        <div className="irmodifier-modal">
                                          <div className="isafcbitiuivcymodifier-modal">
                                            Optional
                                          </div>
                                        </div>
                                      </div>

                                      <div className="single-product-svg-div accordion">
                                        <div className="single-product-svg-div-one">
                                          <svg className="bottom-arrow-head-svg" style={{display: "none"}} width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                            <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(180, 12, 12)"></path>
                                          </svg>

                                          <svg className="rigth-arrow-head-svg" width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{cursor: "pointer"}}>
                                            <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="currentColor" transform="rotate(90, 12, 12)"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <div className="hg">

                                  <div className="product-modifier-item-detail">

                                    <div className="modifier-product-item-name-inc-dec">
                                    
                                      <div className="modifier-inc-dec">
                                        <button className="modifier-btn" onClick={() => handleInput("incbutton")}>

                                          <div className="modifier-btn-div">
                                            <div className="modifier-btn-svg">
                                              <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                <path d="m7.33325 13v-2h9.33335v2z" fill="#000000"></path>
                                              </svg>
                                            </div>
                                          </div>

                                        </button>
                                        
                                        <div className="incremented-values">1</div>
                                        
                                        <button className="modifier-btn" onClick={() => handleInput("incbutton")}>

                                          <div className="modifier-btn-div">
                                            <div className="modifier-btn-svg">
                                              <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="#000000"></path>
                                              </svg>
                                            </div>
                                          </div>

                                        </button>
                                      </div>

                                      <div className="spacer _16"></div>
                                      <div className="modifier-product-item-name-one-div">
                                        <div className="modifier-product-item-name-one-nested-div">
                                          <div className="modifier-product-item-name-one-nested-div-one">
                                            <div className="modifier-product-item-name-one-nested-div-one-nested">
                                              <div className="modifier-product-item-name-one-nested-div-one-nested-div">No Extra Topping 1</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                  <hr className="product-modifier-items-hr"></hr>

                                  <div className="product-modifier-item-detail">

                                    <div className="modifier-product-item-name-inc-dec">
                                      
                                    <div className="modifier-inc-dec">
                                      <button className="modifier-btn">

                                        <div className="modifier-btn-div">
                                          <div className="modifier-btn-svg">
                                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                              <path d="m7.33325 13v-2h9.33335v2z" fill="#000000"></path>
                                            </svg>
                                          </div>
                                        </div>

                                      </button>
                                      
                                      <div className="incremented-values">1</div>
                                      
                                      <button className="modifier-btn">

                                        <div className="modifier-btn-div">
                                          <div className="modifier-btn-svg">
                                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                              <path d="m16.6666 11.0007h-3.6667v-3.66672h-2v3.66672h-3.66665v2h3.66665v3.6666h2v-3.6666h3.6667z" fill="#000000"></path>
                                            </svg>
                                          </div>
                                        </div>

                                      </button>
                                    </div>

                                      <div className="spacer _16"></div>
                                      <div className="modifier-product-item-name-one-div">
                                        <div className="modifier-product-item-name-one-nested-div">
                                          <div className="modifier-product-item-name-one-nested-div-one">
                                            <div className="modifier-product-item-name-one-nested-div-one-nested">
                                              <div className="modifier-product-item-name-one-nested-div-one-nested-div">No Extra Topping 1</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>

                                </div>
                              </div>
                            </li> */}
                            
                          </ul>

                          <hr className="e0b9duiomodifier-modal"></hr>

                          <div className="fqdvb5afprmodifier-modal">
                            <button className="gacxchcjc9modifier-modal-save-btn" onClick={() => setIsmodifierclicked(false)}>
                              Save
                              <span className="chgacjcxcypwc5modifier-modal-save-span">&nbsp;•&nbsp;</span>
                              £10.20
                            </button>
                          </div>
                        </div>
                      </div>

                      <button aria-label="Close" className="lblcldlelflgb1modifier_close_btn" onClick={() => setIsmodifierclicked(false)}>
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{stroke: "currentcolor"}}>
                          <path d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-focus-guard="true" tabIndex="0" style={{width: "1px", height: "0px", padding: "0px", overflow: "hidden", position: "fixed", top: "1px", left: "1px"}}></div>
            </div>
          </div>
        </div>
    }
    </>
  )
}

export default ModifierHasNestedData