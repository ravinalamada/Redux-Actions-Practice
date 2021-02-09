import React from 'react';

// containers
import Users from "./containers/Users";
import CounterButton from './containers/counterButton';
import Counter from './containers/counter';
import SpecialText from "./containers/SpecialText";
import SpecialTextBox from "./containers/SpecialTextBox";
import CurrentCity from "./containers/currentCity";
import CityDropDown from "./containers/cityDropDown";
import SearchTextBox from "./containers/searchTextBox";
import SortUsers from "./containers/sortUsers";
import UserButtons from "./containers/userButtons";
import ShowModal from "./containers/showModals";
import Modal from "./containers/modal";
import Thermostat from "./containers/thermostat";
import ChangeTemperature from "./containers/changeTemperature";
import ImagePreview from "./containers/imagePreview";
import ScaleImage from "./containers/scaleImage";
import ImageUrlTextBox from "./containers/imageUrlTextBox";
// components



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
