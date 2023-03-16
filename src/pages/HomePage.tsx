import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onResultBtnClick = useCallback(() => {
    navigate("/result");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
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
          <div className={styles.result}>Result</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.home}>Home</div>
        </div>
        <img className={styles.kNewLogo} alt="" src="/1knewlogo@3x.png" />
      </div>
      <div className={styles.topSectionHeader}>
        <img
          className={styles.backgroundworkedonshortIcon}
          alt=""
          src="/backgroundworkedonshort@2x.png"
        />
        <img
          className={styles.fadedBackWhiteIcon}
          alt=""
          src="/faded-back-white.svg"
        />
        <img className={styles.justLogoIcon1} alt="" src="/just-logo1@2x.png" />
        <img className={styles.justLogoIcon2} alt="" src="/just-logo2@2x.png" />
        <img className={styles.poolballnIcon} alt="" src="/poolballn@2x.png" />
        <div className={styles.grandWinners}>
          <div className={styles.grandWinnersChild} />
          <div className={styles.scrollGroup1}>
            <div className={styles.winningTicket}>
              <div className={styles.winningTicket1}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket2}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket3}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket4}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket5}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket6}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket7}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket8}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket9}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket10}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket11}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
              <div className={styles.winningTicket12}>
                <div className={styles.wednesday23}>
                  Wednesday | 23 Feb. 2023
                </div>
                <div className={styles.saturday25}>Saturday | 25 Feb. 2023</div>
                <div className={styles.million}>¥119 MILLION</div>
                <div className={styles.nextJackpot}>Next Jackpot:</div>
                <div className={styles.ticketsWon}>
                  <div className={styles.glassballParent}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>22</b>
                  </div>
                  <div className={styles.glassballGroup}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b1}>10</b>
                  </div>
                  <div className={styles.glassballContainer}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b2}>7</b>
                  </div>
                  <div className={styles.groupDiv}>
                    <img
                      className={styles.glassballIcon}
                      alt=""
                      src="/glassball.svg"
                    />
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>27</b>
                  </div>
                  <div className={styles.x2}>x2</div>
                </div>
              </div>
            </div>
          </div>
          <label className={styles.grandPriceWinners}>
            Grand price Winners
          </label>
        </div>
        <a className={styles.viewDocs}>
          <div className={styles.viewDocs1}>View Docs</div>
          <img className={styles.path36Icon} alt="" src="/path-361.svg" />
        </a>
        <div className={styles.secured}>
          <div className={styles.trustedAndSecured}>Trusted and Secured</div>
          <img className={styles.shieldIcon} alt="" src="/shield.svg" />
        </div>
        <button className={styles.getStarted}>
          <div className={styles.getStarted1}>Get Started</div>
        </button>
        <b className={styles.integrateYourMobileContainer}>
          <p className={styles.kballLotteryHas}>
            Integrate your Mobile or Web Application
          </p>
          <p className={styles.kballLotteryHas}>with our 1KBALL API</p>
        </b>
        <div className={styles.headerBar}>
          <header className={styles.grandWinnersChild} />
          <img
            className={styles.header1flagIcon}
            alt=""
            src="/header1flag1@2x.png"
          />
          <img
            className={styles.header1upgradeIcon}
            alt=""
            src="/head@3x.png"
          />
          <img
            className={styles.header1flagupgradeIcon}
            alt=""
            src="/header1flagupgrade@2x.png"
          />
          <div className={styles.timeDateZone}>
            <div className={styles.timezone}>
              <div className={styles.timeZone}>Time Zone:</div>
              <div className={styles.chinaGmt8}>China (GMT+8)</div>
            </div>
            <div className={styles.timeZone}>
              Friday, February 24, 2023, 8:53 PM
            </div>
          </div>
          <img className={styles.languageIcon} alt="" src="/language.svg" />
          <nav className={styles.navBar1}>
            <Link className={styles.aboutBtn} to="/" onClick={onAboutBtnClick}>
              <img className={styles.infoIcon} alt="" src="/info--icon2.svg" />
              <div className={styles.about}>
                <div className={styles.aboutUs1}>About us</div>
                <div className={styles.aboutUs2}>About us</div>
              </div>
            </Link>
            <Link
              className={styles.resultBtn}
              to="/result"
              onClick={onResultBtnClick}
            >
              <img className={styles.icon04} alt="" src="/icon-04.svg" />
              <img className={styles.icon041} alt="" src="/icon-041.svg" />
              <div className={styles.result1}>
                <div className={styles.result2}>Result</div>
                <div className={styles.result3}>Result</div>
              </div>
            </Link>
            <a className={styles.productBtn}>
              <img
                className={styles.productIcon}
                alt=""
                src="/product-icon1.svg"
              />
              <div className={styles.product1}>
                <div className={styles.product2}>Product</div>
                <div className={styles.product3}>Product</div>
              </div>
            </a>
            <a className={styles.homeBtn}>
              <div className={styles.home1}>
                <div className={styles.home2}>Home</div>
                <div className={styles.home3}>Home</div>
              </div>
              <img className={styles.homeIcon} alt="" src="/home-icon2.svg" />
            </a>
          </nav>
          <div className={styles.searchBarAll}>
            <textarea className={styles.searchBar} />
            <button className={styles.searchBtn}>
              <div className={styles.search}>Search</div>
            </button>
          </div>
          <a className={styles.kNewLogo1} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
