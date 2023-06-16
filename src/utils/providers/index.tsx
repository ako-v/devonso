import { ReactNode } from "react";

import ReduxProvider from "./ReduxProvider";
import MuiProvider from "./MuiProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider>
      <MuiProvider>{children}</MuiProvider>
    </ReduxProvider>
  );
};

export default Providers;
