import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from './pages/home.jsx'
import DeckBuilder from "./pages/DeckBuilder.jsx";
import PublicDecks from "./pages/PublicDecks.jsx";
import Auth from "./pages/Auth.jsx";
import Register from "./pages/Register.jsx";
import axios from "axios";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route 
      path="/edit"
      element={<DeckBuilder />}
      />
      <Route 
      path="/public-decks"
      element={<PublicDecks />} 
      />
      <Route 
      path="/auth"
      element={<Auth />} 
      />
      <Route
      path="/auth/register"
      element={<Register />}
      />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
