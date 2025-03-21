import React from "react";
import { Provider } from "react-redux";
import { AppContainer, MainContent } from "./styles";
import { ThemeProviderComponent } from "./context/ThemeContext";
import Sidebar from "./components/internalComponents/Sidebar";
import Header from "./components/internalComponents/Header";
import Chat from "./components/internalComponents/Chat";
import { store } from "./store/store";


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProviderComponent>
        <AppContainer id="appContainer">
          <Sidebar id="Sidebar"/>
          <MainContent id="MainContent">
            <Header  id="Header"/>
            <Chat id="Chat"/>
          </MainContent>
        </AppContainer>
      </ThemeProviderComponent>
    </Provider>
  );
};

export default App;
