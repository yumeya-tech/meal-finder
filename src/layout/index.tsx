import Header from "../components/Header.tsx";
import Form from "../components/Form.tsx";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="mode-body">
      <div className="container">
        <Header />
        <Form setMealName={props.setMealName} getMealData={props.getMealData} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
