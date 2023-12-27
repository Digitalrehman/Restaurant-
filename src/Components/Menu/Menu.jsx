// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Menu_card from "./Menu_card";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../../store/Slices/slice";
import Statuses from "../../store/Loading";

const Menu = () => {
  let dispatch = useDispatch();
  let { data, status } = useSelector((state) => state.getProductReducer);
  useEffect(() => {
    dispatch(fetchdata());
  }, []);
  return (
    <>
      {status === Statuses.GET_PRODUCTS ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row">
          <div className="text-center">
              <h1 className="fw-bold text-bg-warning">Menu Item</h1>
            </div>
            {data.map((item, index) => (
              <div className="col-md-4" key={index}>
                <Menu_card item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
