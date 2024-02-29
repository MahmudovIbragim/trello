import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface TypeProvider {
  children: ReactNode;
}

const ReduxProvider: FC<TypeProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
