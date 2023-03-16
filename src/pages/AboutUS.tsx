import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AboutUS.module.css";

const AboutUS: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeBtnClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onResultBtnClick = useCallback(() => {
    navigate("/result");
  }, [navigate]);

  return (
    <div className={styles.aboutus}>
      <div className={styles.backWave}>
        <img className={styles.wave1Icon} alt="" src="/wave1@2x.png" />
        <img className={styles.whiteBackIcon} alt="" src="/white-back.svg" />
      </div>
      <img
        className={styles.backgroundworkedheaderIcon}
        alt=""
        src="/backgroundworkedheader@2x.png"
      />
      <img
        className={styles.kNewLogoLine}
        alt=""
        src="/1k-new-logo-line@2x.png"
      />
      <div className={styles.infoAboutUs}>
        <div className={styles.down}>
          <div className={styles.right}>
            <div className={styles.todayWeCanContainer}>
              <p className={styles.todayWeCan}>Today we can boast that we</p>
              <p className={styles.todayWeCan}>have a unique product, whose</p>
              <p className={styles.todayWeCan}>
                development and testing lasted
              </p>
              <p className={styles.todayWeCan}>several years. According to</p>
              <p className={styles.todayWeCan}>
                the results and the acceptance
              </p>
              <p className={styles.todayWeCan}>of the games we see that we</p>
              <p className={styles.todayWeCan}>
                have filled the space with new
              </p>
              <p className={styles.todayWeCan}>{`industry games and a new `}</p>
              <p className={styles.todayWeCan}>kind of offer.</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>Every piece of equipment is</p>
              <p
                className={styles.todayWeCan}
              >{`designed to last incomparably `}</p>
              <p
                className={styles.todayWeCan}
              >{`longer than anything currently `}</p>
              <p className={styles.todayWeCan}>
                on the market. It is because it was
              </p>
              <p
                className={styles.todayWeCan}
              >{`developed for the purposes of the `}</p>
              <p
                className={styles.todayWeCan}
              >{`draws and games with high `}</p>
              <p className={styles.todayWeCan}>
                frequency in comparison to classic
              </p>
              <p className={styles.todayWeCan}>
                live lotteries. In this way, and with
              </p>
              <p className={styles.todayWeCan}>
                the new technology we are closer to
              </p>
              <p className={styles.todayWeCan}>
                the frequency of virtual games, but
              </p>
              <p className={styles.todayWeCan}>we maintain the credibility</p>
              <p
                className={styles.todayWeCan}
              >{`of the lottery games with a live `}</p>
              <p className={styles.todayWeCan}>video feed from the Studio.</p>
            </div>
            <b className={styles.whereWeAre}>Where we are today</b>
            <img className={styles.starIcon} alt="" src="/star.svg" />
          </div>
          <div className={styles.left}>
            <div className={styles.kballIsAContainer}>
              <p
                className={styles.todayWeCan}
              >{`1Kball is a live lottery service of the `}</p>
              <p
                className={styles.todayWeCan}
              >{`Asia-based lottery company with `}</p>
              <p className={styles.todayWeCan}>
                over 15 years in the gaming industry.
              </p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>
                1Kball games are a revolution in
              </p>
              <p className={styles.todayWeCan}>
                the lottery betting industry which
              </p>
              <p className={styles.todayWeCan}>
                required great effort to develop.
              </p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>After market research we have</p>
              <p className={styles.todayWeCan}>
                {" "}
                come to know that what we need
              </p>
              <p className={styles.todayWeCan}>
                for the organization of our games
              </p>
              <p className={styles.todayWeCan}>
                currently does not exist anywhere
              </p>
              <p className={styles.todayWeCan}>
                else and, as such, everything had
              </p>
              <p className={styles.todayWeCan}>to be built from scratch.</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>This venture has meant great</p>
              <p className={styles.todayWeCan}>engagement of engineers to</p>
              <p className={styles.todayWeCan}>
                meet the conditions that we are
              </p>
              <p className={styles.todayWeCan}>
                proposing in the quality of the
              </p>
              <p className={styles.todayWeCan}>machines and the software</p>
              <p className={styles.todayWeCan}>required for serval studios.</p>
            </div>
            <b className={styles.stStep}>1st Step</b>
            <img className={styles.stepUpIcon} alt="" src="/stepup.svg" />
          </div>
          <div className={styles.middle}>
            <div className={styles.kballLotteryHasContainer}>
              <p
                className={styles.todayWeCan}
              >{`1kball Lottery has always been in the `}</p>
              <p
                className={styles.todayWeCan}
              >{`leading position in the industry with `}</p>
              <p className={styles.todayWeCan}>
                "fairness, safety, fast and accuracy",
              </p>
              <p className={styles.todayWeCan}>
                and has an all-round system of
              </p>
              <p className={styles.todayWeCan}>{`artificial intelligence. `}</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>We have all kinds</p>
              <p className={styles.todayWeCan}>
                of mainstream lottery here, mainly
              </p>
              <p className={styles.todayWeCan}>
                divided into "1kball Live streaming
              </p>
              <p className={styles.todayWeCan}>
                lottery". We are also developing
              </p>
              <p className={styles.todayWeCan}>
                the"1Kball" series of games,determined
              </p>
              <p className={styles.todayWeCan}>
                to give customers more diversified
              </p>
              <p className={styles.todayWeCan}>choices.</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>
                1kball will continue to create
              </p>
              <p className={styles.todayWeCan}>
                and progress, in order to introduce
              </p>
              <p className={styles.todayWeCan}>
                more new kind lottery for the public,
              </p>
              <p className={styles.todayWeCan}>
                and createan all-round entertainment
              </p>
              <p className={styles.todayWeCan}>environment.</p>
            </div>
            <img className={styles.groupTeamIcon} alt="" src="/groupteam.svg" />
            <b className={styles.aboutUs}>About us</b>
          </div>
        </div>
        <img className={styles.desktopIcon} alt="" src="/desktop@2x.png" />
        <div className={styles.up}>
          <div className={styles.middle1}>
            <div className={styles.middleBack} />
            <div className={styles.popColor} />
            <img
              className={styles.groupTeamIcon1}
              alt=""
              src="/groupteam.svg"
            />
            <b className={styles.aboutUs1}>About us</b>
            <div className={styles.kballLotteryHasContainer1}>
              <p
                className={styles.todayWeCan}
              >{`1kball Lottery has always been in the `}</p>
              <p
                className={styles.todayWeCan}
              >{`leading position in the industry with `}</p>
              <p className={styles.todayWeCan}>
                "fairness, safety, fast and accuracy",
              </p>
              <p className={styles.todayWeCan}>
                and has an all-round system of
              </p>
              <p className={styles.todayWeCan}>{`artificial intelligence. `}</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>We have all kinds</p>
              <p className={styles.todayWeCan}>
                of mainstream lottery here, mainly
              </p>
              <p className={styles.todayWeCan}>
                divided into "1kball Live streaming
              </p>
              <p className={styles.todayWeCan}>
                lottery". We are also developing
              </p>
              <p className={styles.todayWeCan}>
                the"1Kball" series of games,determined
              </p>
              <p className={styles.todayWeCan}>
                to give customers more diversified
              </p>
              <p className={styles.todayWeCan}>choices.</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>
                1kball will continue to create
              </p>
              <p className={styles.todayWeCan}>
                and progress, in order to introduce
              </p>
              <p className={styles.todayWeCan}>
                more new kind lottery for the public,
              </p>
              <p className={styles.todayWeCan}>
                and createan all-round entertainment
              </p>
              <p className={styles.todayWeCan}>environment.</p>
            </div>
          </div>
          <div className={styles.right1}>
            <div className={styles.popColor1} />
            <img className={styles.path122Icon} alt="" src="/path-122.svg" />
            <b className={styles.whereWeAre1}>Where we are today</b>
            <img className={styles.starIcon1} alt="" src="/star.svg" />
            <div className={styles.todayWeCanContainer1}>
              <p className={styles.todayWeCan}>Today we can boast that we</p>
              <p className={styles.todayWeCan}>have a unique product, whose</p>
              <p className={styles.todayWeCan}>
                development and testing lasted
              </p>
              <p className={styles.todayWeCan}>several years. According to</p>
              <p className={styles.todayWeCan}>
                the results and the acceptance
              </p>
              <p className={styles.todayWeCan}>of the games we see that we</p>
              <p className={styles.todayWeCan}>
                have filled the space with new
              </p>
              <p className={styles.todayWeCan}>{`industry games and a new `}</p>
              <p className={styles.todayWeCan}>kind of offer.</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>Every piece of equipment is</p>
              <p
                className={styles.todayWeCan}
              >{`designed to last incomparably `}</p>
              <p
                className={styles.todayWeCan}
              >{`longer than anything currently `}</p>
              <p className={styles.todayWeCan}>
                on the market. It is because it was
              </p>
              <p
                className={styles.todayWeCan}
              >{`developed for the purposes of the `}</p>
              <p
                className={styles.todayWeCan}
              >{`draws and games with high `}</p>
              <p className={styles.todayWeCan}>
                frequency in comparison to classic
              </p>
              <p className={styles.todayWeCan}>
                live lotteries. In this way, and with
              </p>
              <p className={styles.todayWeCan}>
                the new technology we are closer to
              </p>
              <p className={styles.todayWeCan}>
                the frequency of virtual games, but
              </p>
              <p className={styles.todayWeCan}>we maintain the credibility</p>
              <p
                className={styles.todayWeCan}
              >{`of the lottery games with a live `}</p>
              <p className={styles.todayWeCan}>video feed from the Studio.</p>
            </div>
          </div>
          <div className={styles.left1}>
            <img className={styles.path122Icon} alt="" src="/path-121.svg" />
            <b className={styles.stStep1}>1st Step</b>
            <img className={styles.stepUpIcon1} alt="" src="/stepup.svg" />
            <div className={styles.popColor2} />
            <div className={styles.kballIsAContainer1}>
              <p
                className={styles.todayWeCan}
              >{`1Kball is a live lottery service of the `}</p>
              <p
                className={styles.todayWeCan}
              >{`Asia-based lottery company with `}</p>
              <p className={styles.todayWeCan}>
                over 15 years in the gaming industry.
              </p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>
                1Kball games are a revolution in
              </p>
              <p className={styles.todayWeCan}>
                the lottery betting industry which
              </p>
              <p className={styles.todayWeCan}>
                required great effort to develop.
              </p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>After market research we have</p>
              <p className={styles.todayWeCan}>
                {" "}
                come to know that what we need
              </p>
              <p className={styles.todayWeCan}>
                for the organization of our games
              </p>
              <p className={styles.todayWeCan}>
                currently does not exist anywhere
              </p>
              <p className={styles.todayWeCan}>
                else and, as such, everything had
              </p>
              <p className={styles.todayWeCan}>to be built from scratch.</p>
              <p className={styles.todayWeCan}>&nbsp;</p>
              <p className={styles.todayWeCan}>This venture has meant great</p>
              <p className={styles.todayWeCan}>engagement of engineers to</p>
              <p className={styles.todayWeCan}>
                meet the conditions that we are
              </p>
              <p className={styles.todayWeCan}>
                proposing in the quality of the
              </p>
              <p className={styles.todayWeCan}>machines and the software</p>
              <p className={styles.todayWeCan}>required for serval studios.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs2}>About Us</div>
      <footer className={styles.aboutusChild} />
      <img className={styles.path123Icon} alt="" src="/path-123.svg" />
      <header className={styles.topSectionHeader}>
        <div className={styles.headerBar}>
          <div className={styles.head}>
            <img className={styles.headerIcon} alt="" src="/header.svg" />
            <div className={styles.timeDateZone}>
              <div className={styles.timezone}>
                <div className={styles.timeZone}>Time Zone:</div>
                <div className={styles.chinaGmt8}>China (GMT+8)</div>
              </div>
              <div className={styles.timeZone}>
                Friday, February 24, 2023, 8:53 PM
              </div>
            </div>
            <Link className={styles.kNewLogo} to="/homepage" />
            <nav className={styles.navBar}>
              <a className={styles.infoIconParent}>
                <img className={styles.infoIcon} alt="" src="/info--icon.svg" />
                <div className={styles.aboutBtn}>
                  <div className={styles.aboutUs3}>About us</div>
                  <div className={styles.aboutUs4}>About us</div>
                </div>
              </a>
              <a className={styles.productBtn}>
                <img
                  className={styles.productIcon}
                  alt=""
                  src="/product-icon.svg"
                />
                <div className={styles.product}>
                  <div className={styles.product1}>Product</div>
                  <div className={styles.product2}>Product</div>
                </div>
              </a>
              <Link
                className={styles.homeBtn}
                to="/homepage"
                onClick={onHomeBtnClick}
              >
                <div className={styles.home}>
                  <div className={styles.home1}>Home</div>
                  <div className={styles.home2}>Home</div>
                </div>
                <img className={styles.homeIcon} alt="" src="/home-icon.svg" />
              </Link>
              <Link
                className={styles.resultBtn}
                to="/result"
                onClick={onResultBtnClick}
              >
                <img className={styles.icon04} alt="" src="/icon-04.svg" />
                <img className={styles.icon041} alt="" src="/icon-041.svg" />
                <div className={styles.result}>
                  <div className={styles.result1}>Result</div>
                  <div className={styles.result2}>Result</div>
                </div>
              </Link>
            </nav>
            <div className={styles.searchBarAll}>
              <div className={styles.searchBar}>
                <img
                  className={styles.searchicon}
                  alt=""
                  src="/searchicon.svg"
                />
              </div>
              <div className={styles.searchBtn}>
                <div className={styles.search}>Search</div>
              </div>
            </div>
            <div className={styles.language}>
              <a className={styles.language1}>
                <img className={styles.headerIcon} alt="" src="/path-3.svg" />
                <img className={styles.path4Icon} alt="" src="/path-4.svg" />
                <img className={styles.path5Icon} alt="" src="/path-5.svg" />
                <img className={styles.path6Icon} alt="" src="/path-6.svg" />
                <img className={styles.path7Icon} alt="" src="/path-7.svg" />
                <img className={styles.path8Icon} alt="" src="/path-8.svg" />
                <img className={styles.path9Icon} alt="" src="/path-9.svg" />
                <img className={styles.path10Icon} alt="" src="/path-10.svg" />
                <img className={styles.path11Icon} alt="" src="/path-11.svg" />
              </a>
              <a className={styles.uk} />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.eMail1kballgmailcomParent}>
        <div className={styles.eMail1kballgmailcom}>
          E-Mail: 1Kball@gmail.com
        </div>
        <div className={styles.telegram}>Telegram: https://t.me/a1kball</div>
        <div className={styles.getInTouch}>Get in Touch</div>
      </div>
      <div className={styles.aboutusItem} />
    </div>
  );
};

export default AboutUS;
