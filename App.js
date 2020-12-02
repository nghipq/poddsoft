import React, { useState } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";

import Root from "./RootStack";
import MainTab from "./MainTab";

import { AuthContext } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/Cart";
import { FarmProvider } from "./contexts/FarmContext";
import { StoreProvider } from "./contexts/StoreContext";

axios.defaults.baseURL = "http://34.71.1.150";

export default function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <StoreProvider>
      <FarmProvider>
        <CartProvider>
          <NavigationContainer>
            <AuthContext.Provider value={{ isLogin, setLogin }}>
              {isLogin ? <MainTab /> : <Root />}
            </AuthContext.Provider>
          </NavigationContainer>
        </CartProvider>
      </FarmProvider>
    </StoreProvider>
  );
}
