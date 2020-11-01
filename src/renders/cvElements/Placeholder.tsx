import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class PlaceHolder {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(37)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="placeholder">
        <div className="main-header">
          {translate(21)}
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}