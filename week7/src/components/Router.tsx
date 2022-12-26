import { BrowserRouter, Route, Routes } from "react-router-dom";

import Entry from "pages/Entry";
import Write from "pages/Write";
import Main from "pages/Main";
import UserInfo from "components/UserInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 7차 세미나 UI Page */}
        <Route path="/Entry" element={<Entry />} />
        <Route path="/write" element={<Write />} />
        {/* 깃프파 Page */}
        <Route path="/search" element={<Main />}>
          <Route path=":userId" element={<UserInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
