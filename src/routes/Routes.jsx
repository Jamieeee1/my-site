import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Mainlayout from "../Layouts/Mainlayout";
import Homepage from "../pages/Homepage";
import Aboutlayout from "../Layouts/Aboutlayout";
import Personal from "../pages/Aboutpages/Personal";
import Education from "../pages/Aboutpages/Education";
import Interests from "../pages/Aboutpages/Interests";
import Contactme from "../pages/Contactme";
import Projects from "../pages/Projects";
import Notfound from "../pages/Notfound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/aboutme" element={<Aboutlayout />}>
        <Route index element={<Personal />} />
        <Route path="personal" element={<Personal />} />
        <Route path="education" element={<Education />} />
        <Route path="interests" element={<Interests />} />
      </Route>
      <Route path="/contactme" element={<Contactme />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
  )
);
