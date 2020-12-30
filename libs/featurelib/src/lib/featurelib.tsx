import React, { useEffect } from 'react';
import {
  useRouteMatch,
  useParams
} from "react-router-dom";

import './featurelib.module.css';
import Insidefeature from "./insidefeature/insidefeature"
import {add} from "apps/reactapp/src/app/main-slice.slice"
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface FeaturelibProps {
  name : string
}

export function Featurelib(props: FeaturelibProps) {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("dispatching in feature ", );
    dispatch(add({ id: 22 , name :"Feature" }))
  }, [dispatch]);

  console.log("state in fetature ", useSelector(state => state.mainSlice));
  return (
    <div>
      
      <h1>Welcome to featurelib {props.name}</h1>
      <Insidefeature />
    </div>
  );
}

export default Featurelib;
