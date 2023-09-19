import React from "react";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";

import App from "./App"

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

ServiceWorker.unregister();