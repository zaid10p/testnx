import React, { useEffect } from 'react';

import styles from './app.module.css';

import { Route, Link, useHistory } from 'react-router-dom';
import {Ui} from "@testnx/ui"
import {Featurelib } from "@testnx/featurelib";
import { useDispatch, useSelector } from 'react-redux';
import { add } from './main-slice.slice';


export function App() {
  const history = useHistory();
  const state = useSelector(state => state.mainSlice  );
  console.log("State ", state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatching ", );
    dispatch(add({ id: 1 , name :"A" }))
  }, [dispatch]);
  
  return (
    <div className={styles.app}>
      <header className="flex">
      <Ui />
      </header>
     
        <ul className="resources">
          <li>
         <Link to="/feature"> Featurelib</Link>
          </li>
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
            >
              Scale React Development with Nx (Course)
            </a>
          </li>
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://nx.dev/latest/react/tutorial/01-create-application"
            >
              Interactive tutorial
            </a>
          </li>
          <li className="col-span-2">
            <a className="resource flex" href="https://nx.app/">
              <svg
                width="36"
                height="36"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                  fill="#0E2039"
                />
                <path
                  d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                  fill="white"
                />
              </svg>
              <span className="gutter-left">Nx Cloud</span>
            </a>
          </li>
        </ul>
     
      <Route path="/feature">
            <Featurelib name="featurename"/>
          </Route>
    </div>
  );
}

export default App;
