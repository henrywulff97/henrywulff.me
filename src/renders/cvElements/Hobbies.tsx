import { ReactElement } from "react";
import React from "react";
import { translate } from "../../translations/translator";

export default abstract class Hobbies {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        {translate(33)}
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div className="hobbies">
        <div className="main-header">
          {translate(22)}
        </div>
        <hr className="divider"/>
      </div>
    )
  }
}