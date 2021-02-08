import React from 'react';

// containers
import Users from "./containers/Users";
import CounterButton from './containers/counterButton';
import Counter from './containers/counter';
import SpecialText from "./containers/SpecialText";
import SpecialTextBox from "./containers/SpecialTextBox";
import CurrentCity from "./containers/currentCity";
import CityDropDown from "./containers/cityDropDown";


// components

import UserButtons from "./components/UserButtons";
import Thermostat from "./components/Thermostat";
import ChangeTemperature from "./components/ChangeTemperature";
import ImagePreview from "./components/ImagePreview";
import ImageUrlTextBox from "./components/ImageUrlTextBox";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleImage from "./components/ScaleImage";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";

function App() {
  return (
      <div className="App">
        <div className="container">
          <h2>Inputs</h2>
          <CounterButton />
          <br />
          <SpecialTextBox />
          <br/>
          <SearchTextBox />
          <br/>
          <SortUsers />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <ImageUrlTextBox />
          <br />
          <ScaleImage />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <h2>Outputs</h2>
          <Counter />
          <br />
          <SpecialText />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <ImagePreview />
          <br />


        </div>
        <div className="container">
          <h2>Users</h2>
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;
