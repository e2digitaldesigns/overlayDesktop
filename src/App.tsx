import ApplicationWrapper from "./components/applicationWrapper/applicationWrapper";

import { GlobalContextProvider } from "./context";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <ApplicationWrapper />
      </GlobalContextProvider>
    </>
  );
}

export default App;
