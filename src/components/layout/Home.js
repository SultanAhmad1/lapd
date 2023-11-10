import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HomeContext from '../contexts/HomeContext';

function Home() {
  const {iscartbtnclicked, setIscartbtnclicked} = useContext(HomeContext)
  const navcategories = [
      {
      id: 1,
      name: 'Feature item1'
      },
      {
        id: 2,
        name: 'Feature item2'
      },
      {
        id: 3,
        name: 'Feature item3'
      },
      {
        id: 4,
        name: 'Feature item4'
      },
      {
        id: 5,
        name: 'Feature item5'
      },
      {
        id: 6,
        name: 'Feature item6'
      },
      {
        id: 7,
        name: 'Feature item7'
      }
    ]  

  // const contentRef = useRef(null);

  const [navigationcategories, setNavigationcategories] = useState([])
  
  // const [contentWidth, setContentWidth] = useState(0);

  const [isscrolled, setIsScrolled] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navmobileindex, setNavmobileindex] = useState(0)

  const handleScroll = () => {
    // Check if the user has scrolled down (you can adjust the threshold as needed)
    if (window.scrollY > 200) {
      setIsScrolled(true);
      const currentPosition = window.scrollY;
      // Determine which section is currently in view
      const active = navcategories?.find((section, index) => {
        const nextSection = navcategories[index + 1];
        if (nextSection) {
          return currentPosition >= document.getElementById(`section${section.id}`)?.offsetTop 
          &&
            currentPosition < document.getElementById(`section${nextSection.id}`)?.offsetTop;
        }
        return currentPosition >= document.getElementById(`section${section.id}`)?.offsetTop;
      });

      setNavmobileindex(active ? active.id : navmobileindex);

      setScrollPosition(currentPosition / 10);
    } else{
      setIsScrolled(false);
    }
  };
  
  useEffect(() => {
    setNavmobileindex(navcategories[0].id)
    setNavigationcategories(navcategories)
    
    // Add a scroll event listener to track scrolling
    window.addEventListener('scroll', handleScroll);

    // if (contentRef.current) {
    //   setContentWidth(navcategories.length * contentRef.current.offsetWidth);
    // }

    const tabs = document.querySelectorAll(".alaqbtbbh6h7avh8akawanothernav bycsd3d4topbar-div");
    // const rightArrow = document.querySelector(
    //   ".scrollable-tabs-container .right-arrow svg"
    // );
    // const leftArrow = document.querySelector(
    //   ".scrollable-tabs-container .left-arrow svg"
    // );
    const tabsList = document.querySelector(".alaqbbbcnocqavlcakawtopbar-div");
    // const leftArrowContainer = document.querySelector(
    //   ".scrollable-tabs-container .left-arrow"
    // );
    // const rightArrowContainer = document.querySelector(
    //   ".scrollable-tabs-container .right-arrow"
    // );

    const removeAllActiveClasses = () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
      });
    });

    const manageIcons = () => {
      if (tabsList.scrollLeft >= 20) {
        // leftArrowContainer.classList.add("active");
      } else {
        // leftArrowContainer.classList.remove("active");
      }

      let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
      // console.log("scroll width: ", tabsList.scrollWidth);
      // console.log("client width: ", tabsList.clientWidth);

      if (tabsList.scrollLeft >= maxScrollValue) {
        // rightArrowContainer.classList.remove("active");
      } else {
        // rightArrowContainer.classList.add("active");
      }
    };

    // rightArrow.addEventListener("click", () => {
    //   tabsList.scrollLeft += 200;
    //   manageIcons();
    // });

    // leftArrow.addEventListener("click", () => {
    //   tabsList.scrollLeft -= 200;
    //   manageIcons();
    // });

    tabsList.addEventListener("scroll", manageIcons);

    let dragging = false;

    const drag = (e) => {
      if (!dragging) return;
      tabsList.classList.add("dragging");
      tabsList.scrollLeft -= e.movementX; 
    };

    tabsList.addEventListener("mousedown", () => {
      dragging = true;
    });

    tabsList.addEventListener("mousemove", drag);

    document.addEventListener("mouseup", () => {
      dragging = false;
      tabsList.classList.remove("dragging");
    });
 
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // setContentWidth(0)
    };

    

  }, []);

  return (
    <>
    {/* Banner */}
    <div className="banner">
      <img className="banner-img" src="https://duyt4h9nfnj50.cloudfront.net/sku/07a57b3c6cf4a1643112a8fa13b82531" alt='Banner'></img>
    </div>
    
    <div className="main-empt-div"></div>
    {/* Content */}
    <div></div>

    <div className="content">
      <div className="content-div-level-one">
        <div className="left-bar">
          <div className="left-bar-div-one">
            <div className="left-bar-empty-div"></div>
            <div>
              <div className="left-bar-nested-div-level-one">
                <div className="left-bar-nested-div-level-one-nestd">
                  <nav className="navigation">
                    {
                      navcategories?.map((categories, index) =>
                      {
                        return(
                        <div className="navigation-div" key={index}>
                          <a href={`#section${categories.id}`} className={`navigation-btn ${categories.id === navmobileindex ? "active" : ""}`} onClick={() => setNavmobileindex(categories?.id)}>
                            <div className="navigation-btn-div">{categories.name}</div>
                          </a>
                        </div>
                        )
                      })
                    }
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer _8"></div>
        </div>
        <div></div>
        <div className="spacer _40"></div>
        {/* Navigation bar for 900 or lesser width device */}
        <div className={`top-bar ${isscrolled ? 'scrolled' : ''}`}>
          <div className="top-bar-div-level-one">
            <div className="akaptopbar-div">
                <div className="b0albctopbar-div">
                  {/* <div className="nlalh2bcbdnmnntopbar-div">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <title>Search</title>
                      <path d="M22.6 20.4 18.2 16c1.1-1.6 1.8-3.5 1.8-5.6C20 5.2 15.7.9 10.5.9S1 5.2 1 10.4s4.3 9.5 9.5 9.5c2.1 0 4-.7 5.6-1.8l4.4 4.4 2.1-2.1ZM4 10.5C4 6.9 6.9 4 10.5 4S17 6.9 17 10.5 14.1 17 10.5 17 4 14.1 4 10.5Z" fill="currentColor"></path>
                    </svg>
                  </div> */}
                  <div className="alaqbbbcnocqavlcakawtopbar-div"   >

                    {
                      navigationcategories?.map((navcat, index) => 
                      {
                        return(
                        <a style={{transform: `translate3d(-${scrollPosition}px, 0px,0px)`}}  key={navcat.id} href={`#section${navcat.id}`} className={`bycsc0ctnmalc8bcc6nptopbar-div ${navmobileindex === navcat.id ? "np" : ""}`} onClick={() => setNavmobileindex(navcat.id)}>
                          <div className="bycsd3d4topbar-div">
                            {navcat.name}
                          </div>
                        </a>
                        )
                      })
                    }

                  </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="cat-items-content">
          <ul className="items-ul">
            {
              navigationcategories?.map((catitem, index) => {
                return(
                  <li key={catitem.id} className="item-lists" id={`section${catitem.id}`}>
                    <div className="item-title" >
                      <h3 className="item-title-h3">{catitem.name}</h3>
                    </div>
                    <div className="item-list-empty-div"></div>

                    <ul className="items-list-nested-ul">
                      <li className="items-list-nested-list">
                        <Link to="/1">
                          <div className="items-nested-div">
                            <div className="items-nested-div-one">
                              <div className="item-detail-style">
                                <div className="item-detail">
                                    <div className="item-title">
                                        <span>Banoffee Waffle</span>
                                    </div>
                                    
                                    <div className="item-price">
                                      <span className="item-price-span">£3.45</span>
                                    </div>

                                    <div className="item-description-style">
                                      <div className="item-description">
                                        <span className="item-description-span">
                                          The classic dynamic duo, slices of fresh banana and toffee fudge sauce, finished with a sprinkle of chocolate curls.
                                        </span>
                                      </div>
                                    </div>

                                </div>

                                <div className="item-img-style">
                                  <div className="lazyload-wrapper">
                                      <img className="item-img" src="https://tb-static.uber.com/prod/image-proc/processed_images/3bef7aecf15103ae8c8a02cf68277fc8/859baff1d76042a45e319d1de80aec7a.jpeg" alt='Product'></img>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="item-review">
                                <a className="quick-review-btn" onClick={handleQuickViewClicked}>Quick view</a>
                              </div> */}
                            </div>
                          </div>
                        </Link>
                      </li>

                      <li className="items-list-nested-list">
                        <Link to="/2">
                          <div className="items-nested-div">
                            <div className="items-nested-div-one">
                              <div className="item-detail-style">
                                <div className="item-detail">
                                    <div className="item-title">
                                        <span>Banoffee Waffle</span>
                                    </div>
                                    
                                    <div className="item-price">
                                      <span className="item-price-span">£3.45</span>
                                    </div>

                                    <div className="item-description-style">
                                      <div className="item-description">
                                        <span className="item-description-span">
                                          The classic dynamic duo, slices of fresh banana and toffee fudge sauce, finished with a sprinkle of chocolate curls.
                                        </span>
                                      </div>
                                    </div>

                                </div>

                                <div className="item-img-style">
                                  <div className="lazyload-wrapper">
                                      <img className="item-img" src="https://tb-static.uber.com/prod/image-proc/processed_images/3bef7aecf15103ae8c8a02cf68277fc8/859baff1d76042a45e319d1de80aec7a.jpeg" alt='Product'></img>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="item-review">
                                <a className="quick-review-btn" onClick={handleQuickViewClicked}>Quick view</a>
                              </div> */}
                            </div>
                          </div>
                        </Link>
                      </li>

                      <li className="items-list-nested-list">
                        <Link to="/3">
                          <div className="items-nested-div">
                            <div className="items-nested-div-one">
                              <div className="item-detail-style">
                                <div className="item-detail">
                                    <div className="item-title">
                                        <span>Banoffee Waffle</span>
                                    </div>
                                    
                                    <div className="item-price">
                                      <span className="item-price-span">£3.45</span>
                                    </div>

                                    <div className="item-description-style">
                                      <div className="item-description">
                                        <span className="item-description-span">
                                          The classic dynamic duo, slices of fresh banana and toffee fudge sauce, finished with a sprinkle of chocolate curls.
                                        </span>
                                      </div>
                                    </div>

                                </div>

                                <div className="item-img-style">
                                  <div className="lazyload-wrapper">
                                      <img className="item-img" src="https://tb-static.uber.com/prod/image-proc/processed_images/3bef7aecf15103ae8c8a02cf68277fc8/859baff1d76042a45e319d1de80aec7a.jpeg" alt='Product'></img>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="item-review">
                                <a className="quick-review-btn" onClick={handleQuickViewClicked}>Quick view</a>
                              </div> */}
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                )
              })
            }
      
          </ul>
        </div>
      </div>
    </div>
    {
      iscartbtnclicked === false &&
      <div className="arcgatchl4h2view-cart">
        <div className="coagatchascgl5cnl6view-cart"></div>
        <div className="coagatchascgl5axl6view-cart"></div>
        <Link className="bllview-cart-btn" onClick={() => setIscartbtnclicked(true)}>
          <span>(1)</span> <span>View cart</span> <span>(£40.1)</span>
        </Link>
      </div>
    }
  </>
  )
}

export default Home