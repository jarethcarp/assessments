import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from './components/home'
import DeckBuilder from "./components/DeckBuilder.jsx";
import PublicDecks from "./components/PublicDecks.jsx";
import Auth from "./components/Auth.jsx";
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
      loader={async ({ params }) => {
        const { id } = params
        const res = await axios.get(`/api/user/`)
        return { user: res.data }
      }}
      />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
