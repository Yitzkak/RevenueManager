import React from "react";
import RevenueManager from "./Expenses/RevenueManager";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faTrashAlt, faPencilAlt, faEdit);

function App() {
  return (
    <div className="app-flex-container">
      <header>Revenue Manager</header>
      <RevenueManager />
    </div>
  );
}

export default App;
