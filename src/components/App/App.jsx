import "./App.css";


import {  Suspense } from "react";
import { Loader } from "../Loader/Loader";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
       
      </Suspense>
    </>
  );
}
