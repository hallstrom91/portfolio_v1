import LngSelectorSV from "@components/LngSelectorSV";
import LngSelectorEN from "@components/LngSelectorEN";
import CookiePolicy from "@components/CookiePolicy";
import styles from "@css/Intro.module.css";
import { AddIntroToBody } from "@helper/CssHelper";
export default function Intro() {
  AddIntroToBody();

  return (
    <>
      <div className={`${styles.center}`}>
        <div className="md:flex block">
          <span className="px-2">
            <LngSelectorSV />
          </span>
          <span className="px-2">
            <LngSelectorEN />
          </span>
          <CookiePolicy />
        </div>
      </div>
    </>
  );
}
