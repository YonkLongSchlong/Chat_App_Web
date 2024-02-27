import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Setting from "./pages/Setting";
import Contact from "./pages/Contact";
import ChatOnBoard from "./components/ChatOnBoard";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ChatOnBoard />} />
            <Route path="setting" element={<Setting />} />
            <Route path="contact" element={<Contact />} />
            <Route path="todo" element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
