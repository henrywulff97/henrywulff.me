import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Education {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(40)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="education">
        <div className="main-header">
          {translate(18)}
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}