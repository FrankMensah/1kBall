import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Result.module.css";

const Result: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeBtnClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={styles.result}>
      <img
        className={styles.abstractPinkModernShapesBaIcon}
        alt=""
        src="/abstractpinkmodernshapesbackground-329961063@2x.png"
      />
      <img
        className={styles.hotPinkPhoneWallpaper}
        alt=""
        src="/hot-pink-phone-wallpaper@2x.png"
      />
      <div className={styles.theAdvancedStateContainer}>
        <p className={styles.theAdvancedState}>{`The advanced state `}</p>
        <p className={styles.theAdvancedState}>of Lotto games</p>
      </div>
      <div className={styles.kballLotteryHasContainer}>
        <p className={styles.kballLotteryHas}>
          1kball Lottery has always been in the leading position in the industry
          with
        </p>
        <p
          className={styles.kballLotteryHas}
        >{`"fairness, safety, fast and accuracy", and has an all-round system of artificial intelligence. `}</p>
        <p className={styles.kballLotteryHas}>&nbsp;</p>
        <p className={styles.kballLotteryHas}>
          We have all kinds of mainstream lottery here, mainly divided into
          "1kball Live streaming lottery".
        </p>
        <p className={styles.kballLotteryHas}>
          We are also developing the "1Kball" series of games, determinedto give
          customers more diversified choices.
        </p>
        <p className={styles.kballLotteryHas}>&nbsp;</p>
        <p
          className={styles.kballLotteryHas}
        >{`1kball will continue to create and progress, in order to introduce more new kind lottery for the public, `}</p>
        <p className={styles.kballLotteryHas}>
          and create an all-round entertainment environment.
        </p>
      </div>
      <div className={styles.sleep}>
        <div className={styles.welcomeToThe}>Welcome to the Empire</div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.technicalSupport}>24/7 TECHNICAL SUPPORT</div>
          <div className={styles.fullyResponsive}>
            <p className={styles.kballLotteryHas}>&nbsp;</p>
            <p className={styles.kballLotteryHas}>FULLY RESPONSIVE</p>
          </div>
          <div className={styles.fastIntegration}>FAST INTEGRATION</div>
          <div className={styles.supportedLanguagesContainer}>
            <p
              className={styles.kballLotteryHas}
            >{`28 SUPPORTED LANGUAGES `}</p>
          </div>
        </div>
        <img className={styles.justLogoIcon} alt="" src="/just-logo@2x.png" />
        <div className={styles.sleepChild} />
        <div className={styles.sleepItem} />
        <div className={styles.powerfulBackoffice}>Powerful backoffice</div>
        <div className={styles.beautifulFrontEnd}>Beautiful front-end</div>
        <div className={styles.detailedYetSimple}>DETAILED YET SIMPLE</div>
        <div className={styles.userCentric}>USER-CENTRIC</div>
        <div className={styles.dataShouldMakeContainer}>
          <p
            className={styles.kballLotteryHas}
          >{`Data should make your lottery manager’s job easier. `}</p>
          <p
            className={styles.kballLotteryHas}
          >{`That’s why we’ve built a detailed yet simple backoffice with high-level reporting `}</p>
          <p className={styles.kballLotteryHas}>
            with full statistics about games, players, payouts and 24/7
            technical and ticket support.
          </p>
          <p className={styles.kballLotteryHas}>&nbsp;</p>
          <p
            className={styles.kballLotteryHas}
          >{`Our system is extremely flexible and can be integrated into your current gaming platform `}</p>
          <p
            className={styles.kballLotteryHas}
          >{`within short period of time via manageable API’s. You maintain control of the data at all time, `}</p>
          <p className={styles.kballLotteryHas}>
            allowing for optimal security of your database.
          </p>
        </div>
        <div className={styles.theDesignAndContainer}>
          <p
            className={styles.kballLotteryHas}
          >{`The design and functionality of the lottery front-end is key to success and profitability. `}</p>
          <p className={styles.kballLotteryHas}>
            We designed elegant, simple and beautiful front-end interface which
            guarantee intuitive user journey.
          </p>
          <p className={styles.kballLotteryHas}>&nbsp;</p>
          <p
            className={styles.kballLotteryHas}
          >{`Using HTML5 technology allows us to offer cross-platform solution for `}</p>
          <p className={styles.kballLotteryHas}>
            non-stop gaming experience for our players.
          </p>
        </div>
        <div className={styles.sleepInner} />
        <div className={styles.madeForManagersContainer}>
          <p className={styles.kballLotteryHas}>{`MADE FOR `}</p>
          <p className={styles.kballLotteryHas}>MANAGERS</p>
        </div>
        <div className={styles.madeForPlayers}>
          <p className={styles.kballLotteryHas}>MADE FOR</p>
          <p className={styles.kballLotteryHas}>PLAYERS</p>
        </div>
        <div className={styles.fullyResponsive2}>
          <p className={styles.kballLotteryHas}>{`FULLY `}</p>
          <p className={styles.kballLotteryHas}>RESPONSIVE</p>
        </div>
        <div className={styles.beautifullyCraftedUiContainer}>
          <p className={styles.kballLotteryHas}>{`BEAUTIFULLY `}</p>
          <p className={styles.kballLotteryHas}>CRAFTED UI</p>
        </div>
        <div className={styles.highLevelReporting}>
          <p className={styles.kballLotteryHas}>HIGH-LEVEL</p>
          <p className={styles.kballLotteryHas}>REPORTING</p>
        </div>
        <div className={styles.fullSupport}>
          <p className={styles.kballLotteryHas}>24/7 FULL</p>
          <p className={styles.kballLotteryHas}>SUPPORT</p>
        </div>
        <div className={styles.optimalSecurity}>
          <p className={styles.kballLotteryHas}>{`OPTIMAL `}</p>
          <p className={styles.kballLotteryHas}>SECURITY</p>
        </div>
        <div className={styles.proprietaryTech}>Proprietary tech</div>
        <div className={styles.continuousLiveStream}>
          Continuous live stream
        </div>
        <div className={styles.adjustableOdds}>Adjustable odds</div>
        <img className={styles.icon} alt="" src="/1250593@2x.png" />
        <img className={styles.icon1} alt="" src="/1250593@2x.png" />
        <img
          className={styles.av63fa1d6082bbbeb54d8Icon}
          alt=""
          src="/av63fa1d6082bbbeb54d8@2x.png"
        />
        <img
          className={styles.adjustableOddsIcon}
          alt=""
          src="/adjustable-odds@2x.png"
        />
        <img className={styles.managerIcon} alt="" src="/manager@2x.png" />
        <img className={styles.reportsIcon} alt="" src="/reports@2x.png" />
        <img className={styles.icon2} alt="" src="/102649@2x.png" />
        <img
          className={styles.madeForPlayer}
          alt=""
          src="/made-for-player@2x.png"
        />
        <img
          className={styles.responsiveIcon}
          alt=""
          src="/responsive@2x.png"
        />
        <img
          className={styles.paintPaletteAndBrushFreeIIcon}
          alt=""
          src="/41419128-paintpaletteandbrushfreeiconsdesignedart@2x.png"
        />
        <div className={styles.easyIntegrationOfContainer}>
          <p className={styles.kballLotteryHas}>{`Easy integration of `}</p>
          <p className={styles.kballLotteryHas}>our elegant product</p>
        </div>
        <div className={styles.ourIntuitiveAndContainer}>
          <p className={styles.kballLotteryHas}>
            Our intuitive and beautifully crafted interfaces offered by our team
            of
          </p>
          <p
            className={styles.kballLotteryHas}
          >{`gaming and tech professionals are built to allow unobstructed playtime `}</p>
          <p
            className={styles.kballLotteryHas}
          >{`for players and total transparency and control for managers. They are elegant, `}</p>
          <p className={styles.kballLotteryHas}>
            simple, and without lag time offering a robust but intuitive
            control.
          </p>
        </div>
      </div>
      <div className={styles.headerBarWhite}>
        <img className={styles.headerIcon} alt="" src="/header1.svg" />
        <div className={styles.navBar}>
          <div className={styles.product}>Product</div>
          <div className={styles.result1}>Result</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.home}>Home</div>
        </div>
        <img className={styles.kNewLogo} alt="" src="/1knewlogo@3x.png" />
      </div>
      <div className={styles.resultChild} />
      <div className={styles.topSectionHeader}>
        <img
          className={styles.backgroundworkedonIcon}
          alt=""
          src="/backgroundworkedon@2x.png"
        />
        <div className={styles.fadedBackWhite} />
        <div className={styles.fadedBackBlack} />
        <header className={styles.headerBar}>
          <img className={styles.path3Icon} alt="" src="/header.svg" />
          <img
            className={styles.header1flagIcon}
            alt=""
            src="/header1flag@2x.png"
          />
          <img
            className={styles.header1upgradeIcon}
            alt=""
            src="/head@3x.png"
          />
          <nav className={styles.navBar1}>
            <Link className={styles.aboutBtn} to="/" onClick={onAboutBtnClick}>
              <img className={styles.infoIcon} alt="" src="/info--icon1.svg" />
              <div className={styles.about}>
                <div className={styles.aboutUs1}>About us</div>
                <div className={styles.aboutUs2}>About us</div>
              </div>
            </Link>
            <a className={styles.result2}>
              <img className={styles.icon04} alt="" src="/icon-042.svg" />
              <img className={styles.icon041} alt="" src="/icon-043.svg" />
              <div className={styles.result3}>
                <div className={styles.result4}>Result</div>
                <div className={styles.result5}>Result</div>
              </div>
            </a>
            <a className={styles.productBtn}>
              <img
                className={styles.productIcon}
                alt=""
                src="/product-icon.svg"
              />
              <div className={styles.product1}>
                <div className={styles.product2}>Product</div>
                <div className={styles.product3}>Product</div>
              </div>
            </a>
            <Link
              className={styles.homeBtn}
              to="/homepage"
              onClick={onHomeBtnClick}
            >
              <div className={styles.home1}>
                <div className={styles.home2}>Home</div>
                <div className={styles.home3}>Home</div>
              </div>
              <img className={styles.homeIcon} alt="" src="/home-icon1.svg" />
            </Link>
          </nav>
          <div className={styles.timeDateZone}>
            <div className={styles.timezone}>
              <div className={styles.timeZone}>Time Zone:</div>
              <div className={styles.chinaGmt8}>China (GMT+8)</div>
            </div>
            <div className={styles.timeZone}>
              Friday, February 24, 2023, 8:53 PM
            </div>
          </div>
          <Link className={styles.kNewLogo1} to="/homepage" />
          <div className={styles.language}>
            <a className={styles.language1}>
              <img className={styles.path3Icon} alt="" src="/path-3.svg" />
              <img className={styles.path4Icon} alt="" src="/path-4.svg" />
              <img className={styles.path5Icon} alt="" src="/path-51.svg" />
              <img className={styles.path6Icon} alt="" src="/path-6.svg" />
              <img className={styles.path7Icon} alt="" src="/path-71.svg" />
              <img className={styles.path8Icon} alt="" src="/path-8.svg" />
              <img className={styles.path9Icon} alt="" src="/path-9.svg" />
              <img className={styles.path10Icon} alt="" src="/path-10.svg" />
              <img className={styles.path11Icon} alt="" src="/path-11.svg" />
            </a>
            <a className={styles.uk} />
          </div>
        </header>
        <div className={styles.searchBarAll}>
          <div className={styles.searchBar}>
            <img className={styles.searchicon} alt="" src="/searchicon.svg" />
          </div>
          <button className={styles.searchBtn}>
            <div className={styles.search}>Search</div>
          </button>
        </div>
      </div>
      <div className={styles.resultItem} />
      <div className={styles.recUnder} />
      <div className={styles.resultInner} />
      <div className={styles.allData}>
        <div className={styles.sideListNav}>
          <div className={styles.skeleProduct}>
            <div className={styles.skeleProductChild} />
          </div>
          <div className={styles.searchiconParent}>
            <img className={styles.searchicon1} alt="" src="/searchicon1.svg" />
            <div className={styles.dGames}>5D Games</div>
          </div>
          <div className={styles.sideData}>
            <a className={styles.component211}>
              <a className={styles.ultimate5dGames} href="#" target="_blank">
                Ultimate 5D Games
              </a>
            </a>
            <a className={styles.component217}>
              <a className={styles.ultimate5dGames} href="#" target="_blank">
                Ultimate 5D Games
              </a>
            </a>
            <a className={styles.component218}>
              <a className={styles.ultimate5dGames} href="#" target="_blank">
                Ultimate 5D Games
              </a>
            </a>
            <a className={styles.component219}>
              <a className={styles.ultimate5dGames} href="#" target="_blank">
                Ultimate 5D Games
              </a>
            </a>
            <a className={styles.component2110}>
              <a className={styles.ultimate5dGames} href="#" target="_blank">
                Ultimate 5D Games
              </a>
            </a>
            <a className={styles.component2111}>
              <a className={styles.ultimate5dGames} href="#" target="_blank">
                Ultimate 5D Games
              </a>
            </a>
          </div>
        </div>
        <div className={styles.resultDataInfo}>
          <div className={styles.skeleProduct}>
            <div className={styles.skeleResultChild} />
          </div>
          <div className={styles.dates}>
            <button className={styles.allGames}>
              <div className={styles.allGames1}>
                <p className={styles.kballLotteryHas}>All</p>
                <p className={styles.kballLotteryHas}>Games</p>
              </div>
            </button>
            <a className={styles.sun26Feb}>
              <p className={styles.kballLotteryHas}>SUN</p>
              <p className={styles.kballLotteryHas}>26 FEB</p>
            </a>
            <a className={styles.mon27Feb}>
              <p className={styles.kballLotteryHas}>MON</p>
              <p className={styles.kballLotteryHas}>27 FEB</p>
            </a>
            <a className={styles.tue28Feb}>
              <p className={styles.kballLotteryHas}>TUE</p>
              <p className={styles.kballLotteryHas}>28 FEB</p>
            </a>
            <a className={styles.wed1Mar}>
              <p className={styles.kballLotteryHas}>WED</p>
              <p className={styles.kballLotteryHas}>1 MAR</p>
            </a>
            <a className={styles.thu2Mar}>
              <p className={styles.kballLotteryHas}>THU</p>
              <p className={styles.kballLotteryHas}>2 MAR</p>
            </a>
            <a className={styles.fri3Mar}>
              <p className={styles.kballLotteryHas}>FRI</p>
              <p className={styles.kballLotteryHas}>3 MAR</p>
            </a>
            <a className={styles.sat4Mar}>
              <p className={styles.kballLotteryHas}>SAT</p>
              <p className={styles.kballLotteryHas}>4 MAR</p>
            </a>
          </div>
          <div className={styles.calIcon}>
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <img className={styles.path36Icon} alt="" src="/path-36.svg" />
          </div>
          <div className={styles.subjectSkele}>
            <div className={styles.idNumber}>ID Number</div>
            <div className={styles.resultNumber}>Result Number</div>
            <div className={styles.time}>Time</div>
          </div>
          <div className={styles.resultLineData}>
            <div className={styles.lineResultData}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData1}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData2}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData3}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData4}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData5}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData6}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData7}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData8}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
            <div className={styles.lineResultData9}>
              <div className={styles.lineResultDataChild} />
              <div className={styles.a1829100}>A1829100</div>
              <div className={styles.results}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div}>10</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div2}>34</div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>1</div>
                </div>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-1.svg"
                  />
                  <div className={styles.div1}>9</div>
                </div>
              </div>
              <div className={styles.div5}>00:00:00</div>
            </div>
          </div>
          <div className={styles.downLineContentLeft}>
            <div className={styles.showing1}>Showing 1 - 10</div>
            <div className={styles.div60}>1</div>
            <div className={styles.div61}>2</div>
            <div className={styles.div62}>3</div>
            <div className={styles.div63}>4</div>
            <div className={styles.div64}>5</div>
            <div className={styles.div65}>6</div>
            <div className={styles.div66}>. . .</div>
            <img className={styles.path74Icon} alt="" src="/path-74.svg" />
            <img className={styles.path75Icon} alt="" src="/path-75.svg" />
          </div>
          <div className={styles.downLineContentRight}>
            <div className={styles.show}>Show</div>
            <div className={styles.downLineContentRightChild} />
            <div className={styles.div67}>10</div>
            <div className={styles.entries}>entries</div>
          </div>
        </div>
      </div>
      <div className={styles.resultSelector}>
        <button className={styles.selector}>
          <div className={styles.d}>5D</div>
        </button>
        <button className={styles.selector1}>
          <div className={styles.selectorChild} />
          <div className={styles.d1}>3D</div>
        </button>
        <button className={styles.selector2}>
          <div className={styles.selectorItem} />
          <div className={styles.fast}>Fast</div>
        </button>
        <button className={styles.selector3}>
          <div className={styles.selectorItem} />
          <div className={styles.pk10}>Pk 10</div>
        </button>
        <button className={styles.selector4}>
          <div className={styles.selectorChild} />
          <div className={styles.x5}>11 x 5</div>
        </button>
        <button className={styles.selector5}>
          <div className={styles.selectorItem} />
          <div className={styles.pc28}>Pc 28</div>
        </button>
        <button className={styles.selector6}>
          <div className={styles.selectorChild} />
          <div className={styles.div68}>49/7</div>
        </button>
      </div>
      <div className={styles.topInfoAbout}>
        <div className={styles.kBallResults}>1K Ball Results</div>
        <div className={styles.theLatest1kballContainer}>
          <p
            className={styles.kballLotteryHas}
          >{`The latest 1kball results are published here immediately after the draw has taken place. `}</p>
          <p className={styles.kballLotteryHas}>
            You can view the latest numbers including detailed information of
            winners and prizes.
          </p>
        </div>
      </div>
      <div className={styles.secured}>
        <div className={styles.idNumber}>Trusted and Secured</div>
        <img className={styles.shieldIcon} alt="" src="/shield.svg" />
      </div>
    </div>
  );
};

export default Result;
