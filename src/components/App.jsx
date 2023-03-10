import ContactsList from 'components/Pages/Contacts/ContactsList'
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { Layout } from "./Layout/Layout";
import { Main } from "./Pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { PublickRoute } from "./PublickRoute/PublickRoute";
import { Login } from "./Pages/Login/Login";
import { PrivateRoute } from "./PrivateRote/PrivateRoute";
import { Registartion} from "./Pages/Registration/Registration";
import { currentThunk } from "redux/auth/authThunk";


export const App = () =>{

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main />} />
        <Route path="contacts" element={<PrivateRoute><ContactsList /></PrivateRoute>} />
      </Route>
      <Route path='/logIn' element={<PublickRoute><Login /></PublickRoute>} />
      <Route path='/registration' element={<Registartion />} />
    </Routes>
    )
  }
