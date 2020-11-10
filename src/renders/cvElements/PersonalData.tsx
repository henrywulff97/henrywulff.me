import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";
import me from './../../resources/HWU.jpg';

export default abstract class PersonalData {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(32)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="personal-data">
        <div className="main-header">
          {translate(15)}
        </div>
        <hr className="divider"/>
        <div className="horizontal-alignment">
          <div className="pair">
            <div className="key">
              {translate(26)}
            </div>
            <div className="value">
              {translate(0)}
            </div>
          </div>
          <div className="pair">
            <div className="key">
              {translate(27)}
            </div>
            <div className="value">
              {translate(6)}
              <br/>
              {translate(7)}
            </div>
          </div>
          <div className="pair">
            <div className="key">
              {translate(28)}
            </div>
            <div className="value">
              {translate(9)}
            </div>
          </div>
          <div className="pair">
            <div className="key">
              {translate(29)}
            </div>
            <div className="value">
              {translate(8)}
            </div>
          </div>
          <div className="pair">
            <div className="key"> 
              {translate(30)}
            </div>
            <div className="value">
              {translate(31)}
            </div>
          </div>
        </div>
        <img className="portrait" src={me} alt="portrait"/>
      </div>
    )
  }
}