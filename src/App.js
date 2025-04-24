import { Provider } from "react-redux";
import { Body } from "./components/body/Body";
import appStore from "./utils/appStore";

export const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
};
