import React, { useState } from 'react'
import '../../Review.css'
function ReviewOrder() 
{

  const [foodqualityrate, setFoodqualityrate] = useState(0)

  const handleFoodQuality = (index) =>
  {
    // setFoodquality(index)
    console.log("Food Quality: ", index);
  }

  const [packagingrate, setPackagingrate] = useState(0)

  const handlePackagingRate = (packagingIndex) =>
  {
    console.log("Packaging: ", packagingIndex);
  }

  const [deliverytimerate, setDeliverytimerate] = useState(0)

  const handleDeliveryTimeRate = (deliverytimeindex) =>
  {
    console.log("Delivery Time: ", deliverytimeindex);
  }

  const [websiteexperiencerate, setWebsiteexperiencerate] = useState(0)

  const handleWebsiteExperience = (websiteexperienceindex) =>
  {
    console.log("Website Experience: ", websiteexperienceindex);
  }

  

  /**
   * [{id:1, value: true},{id:2, value: false},{id:3, value:true}]
  */
  const productLike = [
    {id:1, catName:"Category", name:"Product 1", value:null},
    {id:2, catName:"Category", name:"Product 2", value:null},
    {id:3, catName:"Category", name:"Product 3", value:null},
  ]
  
  const [foodlikeordislike, setFoodlikeordislike] = useState(productLike)

  const handleDisLike = (id, boolvalue) =>
  {
    console.log("Handle Dis like:", id);
    const productDislike = foodlikeordislike.map((product) =>{
      if(parseInt(product.id) === parseInt(id))
      {
        return {...product, value:boolvalue}
      }else
      {
        return product
      }
    })

    setFoodlikeordislike(productDislike)
  }

  const handleLike = (id, boolvalue) =>
  {
    console.log("Handle like:", id);
    const updateProductLike = foodlikeordislike.map((product) =>{
      if(parseInt(product.id) === parseInt(id))
      {
        return {...product, value:boolvalue}
      }else
      {
        return product
      }
    })

    console.log("Update Product Like:", updateProductLike);
    setFoodlikeordislike(updateProductLike)
  }

  console.log("Product Like or Dislike:", foodlikeordislike);

  const [page, setPage] = useState(1)

  const handlePage = (pageNumber) =>
  {
    setPage(pageNumber)
  }
  return (
    <>
      <div className='akald0amreview'>
        <div className='e5ald0mnmoamc5review'>
          <div className='icmpmqgmmrgdmsmtmumvmwreview'>
            <div className='hpg5review'>
              <div className='n2b0review'>
                <div className='n3n4epn5n6n7review'>
                  <h3 className='eikuekkvhualamenn8n9nanbncndreview'>
                    <span className="d1">Review Your Order</span>
                  </h3>

                  <div>
                    <div className='d1g5review'>
                      <a className="almlc5review">
                        <div className="alamd1g5review">
                          <span className="chd2cjd3b1review">26 Oct 2023 9:05 AM</span>
                        </div>
                        
                        <div className="chcicjckhehfhgc5cob1alc9cpcqcrcsclreview">
                          £ 51.04
                        </div>
                      </a>

                      <div className="alreview">
                        <div className="spacer _40"></div>
                        <div className="edhwb9d1review"></div>
                      </div>
                    </div>

                    {/* Food Quality Rating */}
                    {
                      page === 1 &&
                      <>
                        <div className='d1g5review'>
                          <div className="almlc5review">
                            <div className="ihreview">
                              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdreview">
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
                            
                            <div className="alamd1g5review">
                              <span className="chd2cjd3b1review">Food Quality:</span>
                            </div>
                            
                            <button className="chcicjckhehfhgc5cob1alc9cpcqcrcsclreview">
                              <div className="foodqualityrate">
                                {
                                  [5,4,3,2,1].map((stars) =>{
                                    return(
                                      <>
                                        <input key={stars} type="radio" id={`foodqualityratestar${stars}`} name="foodqualityrate" value={stars} onClick={() => handleFoodQuality(stars)}/>
                                        <label htmlFor={`foodqualityratestar${stars}`} title="text">{stars} stars</label>
                                      </>
                                    )
                                  })
                                }
                              </div>
                            </button>
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>

                        <div className='d1g5review'>
                          <div className="almlc5review">
                            <div className="ihreview">
                              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdreview">
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
                            
                            <div className="alamd1g5review">
                              <span className="chd2cjd3b1review">Packaging:</span>
                            </div>
                            
                            <button className="chcicjckhehfhgc5cob1alc9cpcqcrcsclreview">
                              <div className="packagingrate">
                                {
                                  [5,4,3,2,1].map((stars) =>{
                                    return(
                                      <>
                                        <input key={stars} type="radio" id={`packagingratestar${stars}`} name="packagingrate" value={stars} onClick={() => handlePackagingRate(stars)}/>
                                        <label htmlFor={`packagingratestar${stars}`} title="text">{stars} stars</label>
                                      </>
                                    )
                                  })
                                }
                              </div>
                            </button>
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>

                        <div className='d1g5review'>
                          <div className="almlc5review">
                            <div className="ihreview">
                              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdreview">
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
                            
                            <div className="alamd1g5review">
                              <span className="chd2cjd3b1review">Delivery Time:</span>
                            </div>
                            
                            <button className="chcicjckhehfhgc5cob1alc9cpcqcrcsclreview">
                              <div className="deliverytimerate">
                                {
                                  [5,4,3,2,1].map((stars) =>{
                                    return(
                                      <>
                                        <input key={stars} type="radio" id={`deliverytimeratestar${stars}`} name="deliverytimerate" value={stars} onClick={() => handleDeliveryTimeRate(stars)}/>
                                        <label htmlFor={`deliverytimeratestar${stars}`} title="text">{stars} stars</label>
                                      </>
                                    )
                                  })
                                }
                              </div>
                            </button>
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>

                        <div className='d1g5review'>
                          <div className="almlc5review">
                            <div className="ihreview">
                              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdreview">
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
                            
                            <div className="alamd1g5review">
                              <span className="chd2cjd3b1review">Website Experience</span>
                            </div>
                            
                            <button className="chcicjckhehfhgc5cob1alc9cpcqcrcsclreview">
                              <div className="websiteexperiencerate">
                                {
                                  [5,4,3,2,1].map((stars) =>{
                                    return(
                                      <>
                                        <input key={stars} type="radio" id={`websiteexperienceratestar${stars}`} name="websiteexperiencerate" value={stars} onClick={() => handleWebsiteExperience(stars)}/>
                                        <label htmlFor={`websiteexperienceratestar${stars}`} title="text">{stars} stars</label>
                                      </>
                                    )
                                  })
                                }
                              </div>
                            </button>
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>

                        <div className='mpreview'>
                          <div className='chhhcwpareview'>
                            <button className='hhcxchcjc9mpbzalc5egafpomrg7sasbsccrcsrhdtsdreview' onClick={() => handlePage(2)}>Next</button>
                          </div>
                        </div>
                      </>
                    }
                    
                    {/* Food Product Like or Dis-Like */}

                    {
                      page === 2 &&

                      <>
                        <div className='d1g5review'>
                          <div className="almlc5review">
                            
                            <div className="alamd1g5review">
                              <span className="chd2cjd3b1review">Tell us more about your order:</span>
                            </div>
                      
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>
                        
                        {
                          foodlikeordislike?.map((product) =>
                          {
                            return(
                              <div key={product.id} className='d1g5review'>
                                <div className="almlc5review">
                                  <div className="ihreview">
                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdreview">
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
                                  
                                  <div className="alamd1g5review">
                                    <h5><span></span><span className='catereview'>{product.catName}:</span> 1 x {product.name}</h5>
                                  </div>
                                  
                                  <div className="chcicjckhehfhgc5cob1alc9cpcqcrcsclreview-like">
                                    {
                                      product.value ?
                                        <>
                                          <i className={`fa-regular fa-thumbs-down`} onClick={() => handleDisLike(product.id, false)}></i>
                                          <i className={`fa-solid fa-thumbs-up`} onClick={() => handleLike(product.id, true)}></i>
                                        </>
                                      :
                                        product.value === null ?
                                        <>
                                          <i className={`fa-regular fa-thumbs-down`} onClick={() => handleDisLike(product.id, false)}></i>
                                          <i className={`fa-regular fa-thumbs-up`} onClick={() => handleLike(product.id, true)}></i>
                                        </>
                                        :
                                        <>
                                          <i className={`fa-solid fa-thumbs-down`} onClick={() => handleDisLike(product.id,false)}></i>
                                          <i className={`fa-regular fa-thumbs-up`} onClick={() => handleLike(product.id,true)}></i>
                                        </>
                                    }
                                    
                                  </div>
                                </div>

                                <div className="alreview">
                                  <div className="spacer _40"></div>
                                  <div className="edhwb9d1review"></div>
                                </div>
                              </div>
                            )
                          })
                        }

                        <div className='mpreview'>
                          <div className='chhhcwpareview'>
                            <button className='hhcxchcjc9mpbzalc5egafpomrg7sasbsccrcsrhdtsdreview' onClick={() => handlePage(3)}>Next</button>
                          </div>
                        </div>
                      </>
                    }

                    {/* Food Product Message */}
                    {
                      page === 3 &&
                      <>
                        <div className='d1g5review'>
                          <div className="almlc5review">
                            
                            <div className="alamd1g5review">
                              <span className="chd2cjd3b1review">Leave a review:</span>
                            </div>
                      
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>
                        
                        <div className='d1g5review'>
                          <div className="almlc5review">
                            <div className="ihreview">
                              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c8c7cccdreview">
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
                            
                            <div className="alamd1g5review">
                              <textarea className='door_number' placeholder='Help us to improve our service, tell us about your experience...'></textarea>
                            </div>
                          </div>

                          <div className="alreview">
                            <div className="spacer _40"></div>
                            <div className="edhwb9d1review"></div>
                          </div>
                        </div>

                        <div className='mpreview'>
                          <div className='chhhcwpareview'>
                            <button className='hhcxchcjc9mpbzalc5egafpomrg7sasbsccrcsrhdtsdreview-submit'>Submit</button>
                          </div>
                        </div>
                      </>
                    }
                  </div>

                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      <div className='afreview'>
        <div className='cwcxcyczd0d1review'>
          <h3 className="bkd2bmd3d4alamd5d6d7d8d9dadbreview">
            <span className="cjreview">Review Your Order</span>
          </h3>
          
          {/* Mobile Review Food Quality */}
          <div>
            {/* Mobile Review Food Quality */}
            <div className='cjdcreview'>
              <div className='alddbcreview'>
                <div className='alamcjdcreview'>
                  <span className='bobpdfcvb1review'>26 Oct 2023 9:05 AM</span>
                </div>

                <div className='bodgdfhdidjdkbcdlb1albydmdndodpdqreview'>
                    £ 51.49
                </div>
              </div>

              <div className='alreview'>
                <div className="drdsbscjreview"></div>
              </div>
            </div>
            
            {
              page === 1 &&

              <>
                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                    <div className='alamcjdcreview'>
                      <span className='bobpdfcvb1review'>Food Quality:</span>
                      {/* <div className='bodgbqcvb1review'>
                        <span className='ebreview'>Chatsworth Rd, Hazel Grove, Stockport</span>
                      </div> */}
                    </div>

                    <button className='bodgdfhdidjdkbcdlb1albydmdndodpdqreview'>
                      <div className="foodqualityratereview">
                        {
                          [5,4,3,2,1].map((stars) =>{
                            return(
                              <>
                                <input key={stars} type="radio" id={`foodqualityratereviewstar${stars}`} name="foodqualityratereview" value={stars} onClick={() => handleFoodQuality(stars)}/>
                                <label htmlFor={`foodqualityratereviewstar${stars}`} title="text">{stars} stars</label>
                              </>
                            )
                          })
                        }
                      </div>
                    </button>
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>

                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                    <div className='alamcjdcreview'>
                      <span className='bobpdfcvb1review'>Packaging:</span>
                      {/* <div className='bodgbqcvb1review'>
                        <span className='ebreview'>Chatsworth Rd, Hazel Grove, Stockport</span>
                      </div> */}
                    </div>

                    <button className='bodgdfhdidjdkbcdlb1albydmdndodpdqreview'>
                      <div className="packagingratereview">
                        {
                          [5,4,3,2,1].map((stars) =>{
                            return(
                              <>
                                <input key={stars} type="radio" id={`packagingratereviewstar${stars}`} name="packagingratereview" value={stars} onClick={() => handleFoodQuality(stars)}/>
                                <label htmlFor={`packagingratereviewstar${stars}`} title="text">{stars} stars</label>
                              </>
                            )
                          })
                        }
                      </div>
                    </button>
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>

                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                    <div className='alamcjdcreview'>
                      <span className='bobpdfcvb1review'>Delivery Time:</span>
                      {/* <div className='bodgbqcvb1review'>
                        <span className='ebreview'>Chatsworth Rd, Hazel Grove, Stockport</span>
                      </div> */}
                    </div>

                    <button className='bodgdfhdidjdkbcdlb1albydmdndodpdqreview'>
                      <div className="deliverytimeratereview">
                        {
                          [5,4,3,2,1].map((stars) =>{
                            return(
                              <>
                                <input key={stars} type="radio" id={`deliverytimeratereviewstar${stars}`} name="deliverytimeratereview" value={stars} onClick={() => handleFoodQuality(stars)}/>
                                <label htmlFor={`deliverytimeratereviewstar${stars}`} title="text">{stars} stars</label>
                              </>
                            )
                          })
                        }
                      </div>
                    </button>
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>

                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                    <div className='alamcjdcreview'>
                      <span className='bobpdfcvb1review'>Website Experience:</span>
                      {/* <div className='bodgbqcvb1review'>
                        <span className='ebreview'>Chatsworth Rd, Hazel Grove, Stockport</span>
                      </div> */}
                    </div>

                    <button className='bodgdfhdidjdkbcdlb1albydmdndodpdqreview'>
                      <div className="websiteexperienceratereview">
                        {
                          [5,4,3,2,1].map((stars) =>{
                            return(
                              <>
                                <input key={stars} type="radio" id={`websiteexperienceratereviewstar${stars}`} name="websiteexperienceratereview" value={stars} onClick={() => handleFoodQuality(stars)}/>
                                <label htmlFor={`websiteexperienceratereviewstar${stars}`} title="text">{stars} stars</label>
                              </>
                            )
                          })
                        }
                      </div>
                    </button>
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>

                <div className='dzc9review'></div>

                <div className='dtcxcybgd0d1review'>
                  <div className='akfereview'>
                      <div className='atbahjb9arhkreview'>
                        <div className='hlreview'>
                            <button className='ffbrbodfbyfgbhalbcccafhmfhc0hnhohpdodpreview' onClick={() => handlePage(2)}>Next</button>
                        </div>
                      </div>
                      <div className='bhaereview'></div>
                  </div>
                </div>
              </>
            }
          </div>

         
          {/* Mobile Review Food Quality End */}

          {/* Mobile Review Product Like or Dislike */}
          
          {
            page === 2 &&

            <>
              <div>
                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                  
                    <div className='alamcjdcreview'>
                      <span className='bobpdfcvb1review'>Tell us more about your order</span>
                    </div>
                  
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>
                {
                  foodlikeordislike?.map((product) =>
                  {
                    return(
                      <div className='cjdcreview' key={product.id}>
                        <div className='alddbcreview'>
                          {/* <div className='dereview'>
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                          </div> */}

                          <div className='alamcjdcreview'>
                            <h5>
                              <span className='catereview'>{product.catName}:&nbsp;</span>
                              <span className='productReview'>1 x {product.name}</span>
                            </h5>
                          </div>

                          <button className='bodgdfhdidjdkbcdlb1albydmdndodpdqreview-like'>
                            {
                              product.value ?
                              <>
                                <i className={`fa-regular fa-thumbs-down`} onClick={() => handleDisLike(product.id, false)}></i>
                                <i className={`fa-solid fa-thumbs-up`} onClick={() => handleLike(product.id, true)}></i>
                              </>
                              :
                              product.value === null ?
                              <>
                                <i className={`fa-regular fa-thumbs-down`} onClick={() => handleDisLike(product.id, false)}></i>
                                <i className={`fa-regular fa-thumbs-up`} onClick={() => handleLike(product.id, true)}></i>
                              </>
                              :
                              <>
                                <i className={`fa-solid fa-thumbs-down`} onClick={() => handleDisLike(product.id,false)}></i>
                                <i className={`fa-regular fa-thumbs-up`} onClick={() => handleLike(product.id,true)}></i>
                              </>
                            }
                            
                          </button>
                        </div>
                        <div className='alreview'>
                          <div className="drdsbscjreview"></div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>

              <div className='dzc9review'></div>

              <div className='dtcxcybgd0d1review'>
                <div className='akfereview'>
                    <div className='atbahjb9arhkreview'>
                      <div className='hlreview'>
                          <button className='ffbrbodfbyfgbhalbcccafhmfhc0hnhohpdodpreview' onClick={() => handlePage(3)}>Next</button>
                      </div>
                    </div>
                    <div className='bhaereview'></div>
                </div>
              </div>
            </>
          }

          {/* Mobile Review Product Like or Dislike End */}

          {/* Mobile Review Leave a Comment */}
          {
            page === 3 &&

            <>
              <div>
                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                    <div className='alamcjdcreview'>
                      <span className='bobpdfcvb1review'>Leave a review:</span>
                    </div>
                    
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className='cjdcreview'>
                  <div className='alddbcreview'>
                    {/* <div className='dereview'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c7c6cacbreview"><g clip-path="url(#clip0)"><path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path></g><defs><clipPath id="clip0"><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    </div> */}

                    <div className='alamcjdcreview'>
                      <textarea rows={4} className='door_number' placeholder='Help us to improve our service, tell us about your experience...'></textarea>
                    </div>
                  </div>
                  <div className='alreview'>
                    <div className="drdsbscjreview"></div>
                  </div>
                </div>
              </div>

              <div className='dzc9review'></div>

              <div className='dtcxcybgd0d1review'>
                <div className='akfereview'>
                    <div className='atbahjb9arhkreview'>
                      <div className='hlreview'>
                          <button className='ffbrbodfbyfgbhalbcccafhmfhc0hnhohpdodpreview-submit'>Submit</button>
                      </div>
                    </div>
                    <div className='bhaereview'></div>
                </div>
              </div>
            </>
          }
          {/* Mobile Review Leave a Comment */}
        </div>
      </div>
    </>
  )
}

export default ReviewOrder