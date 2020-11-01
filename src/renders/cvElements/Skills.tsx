import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Skills {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(38)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="skills">
        <div className="main-header">
          {translate(16)}
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}