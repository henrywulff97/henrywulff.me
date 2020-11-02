import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Miscellaneous {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(35)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="miscellaneous">
        <div className="main-header">
          {translate(23)}
        </div>
        <hr className="divider"/>
        <div className="sub-header">
          {translate(87)}
        </div>
        <div className="text">
          {translate(88)}
        </div>
      </div>
    )
  }
}