import { Routes, Route, Navigate } from "react-router-dom";
import {
  Languages,
  Login,
  Menu,
  Profile,
  Foro,
  Stadistic,
  Help,
  Course,
  Leccion,
  Feedback,
  Signup,
  Quiz,
  Description,
} from "./views";
import { InternalLayout } from "./layouts";
import { addCourse } from "./views/Course/components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route Component={InternalLayout}>
          <Route path="/profile" Component={Profile} />
          <Route path="/menu" Component={Menu} />
          <Route path="/languages" Component={Languages} />
          <Route path="/languages/description" Component={Description} />
          <Route path="/languages/lesson" Component={Leccion} />
          <Route path="/languages/lesson/quiz" Component={Quiz}/>
          <Route path="/foro" Component={Foro} />
          <Route path="/stadistic" Component={Stadistic} />
          <Route path="/help" Component={Help} />
          <Route path="/course" Component={Course} />
          <Route path="/course/create" Component={addCourse} />
          <Route path="/feedback" Component={Feedback} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


