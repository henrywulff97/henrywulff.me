import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Health {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(90)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="health">
        <div className="main-header">
          {translate(89)}
        </div>
        <hr className="divider"/>
        <div className="text">{translate(91)}</div>
        <div className="text">{translate(92)}</div>
        <div className="text">{translate(93)}</div>
      </div>
    )
  }
}