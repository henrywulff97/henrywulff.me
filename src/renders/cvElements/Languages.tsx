import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Languages {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(34)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="languages">
        <div className="main-header">
          {translate(19)}
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}