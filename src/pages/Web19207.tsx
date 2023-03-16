import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Web19207.module.css";

const Web19207: FunctionComponent = () => {
  const navigate = useNavigate();

  const onKNEWLOGOClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onComponent101Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={styles.web19207}>
      <img
        className={styles.backgroundworkedonIcon}
        alt=""
        src="/BacG@2x.png"
      />
      <img
        className={styles.kNewLogo}
        alt=""
        src="/1k-new-logo@2x.png"
        onClick={onKNEWLOGOClick}
      />
      <button className={styles.component101} onClick={onComponent101Click}>
        <div className={styles.maskGroup1}>
          <div className={styles.welcomebtn}>
            <div className={styles.welcomebtnChild} />
            <div className={styles.welcome}>WELCOME</div>
          </div>
          <div className={styles.welcomebtn}>
            <div className={styles.gowinbtnChild} />
            <div className={styles.goWin}>GO WIN</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Web19207;
