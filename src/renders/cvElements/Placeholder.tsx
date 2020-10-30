import { ReactElement } from "react";

import React from "react";

export default abstract class PlaceHolder {
  public static ShortDesc(): ReactElement {
    return(
      <div>
        Personal Data ShortDesc
      </div>
    )
  }

  public static SideDialogContent(): ReactElement {
    return(
      <div>
        Personal Data Side Dialog Content
      </div>
    )
  }
}