import React, { Component } from "react";
import "./App.css";
import Template from "./components/Template";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>โหวตอาหาร</h1>
        <Template
          type="อาหารคาว"
          name="แกงเขียวหวาน"
          text="แกงเขียวหวาน เป็นอาหารไทยประเภทแกง ประกอบด้วยเนื้อ ปลา ไก่ หรือหมู และผัก ปรุงรสด้วยกะทิ มะเขือ น้ำตาล น้ำปลา ใบมะกรูด และใบโหระพา
           นิยมรับประทานกับข้าวสวยหรือขนมจีนน้ำพริกแกงมีสีเขียวเพราะใช้พริกขี้หนูสดสีเขียว บางท้องที่ใส่ใบพริกลงไปตำด้วย Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velitpayo essesilibrum cillum dolore eu fugiat nulla pariatur."
          imglink="https://menuforeat.com/wp-content/uploads/2021/09/3-8.jpg"
          imgname="แกงเขียวหวาน"
        />
        <Template
          type="อาหารหวาน"
          name="บัวลอย"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis 
          purus sit amet volutpat. Fermentum et sollicitudin ac orci phasellus. Eget arcu dictum 
          varius duis at consectetur lorem donec massa. Ac placerat vestibulum lectus mauris ultrices 
          eros in cursus turpis. Viverra aliquet eget sit amet tellus. Pharetra massa massa ultricies
           mi quis hendrerit dolor. Risus nullam eget felis eget nunc lobortis mattis. Eleifend mi in
            nulla posuere sollicitudin. Libero enim sed faucibus turpis 
          in eu mi bibendum neque. Sed vulputate odio ut enim blandit. In fermentum posuere urna nec tincidunt praesent"
          imglink="https://i.ytimg.com/vi/lxDZgfPQD6M/maxresdefault.jpg"
          imgname="บัวลอย"
        />
      </div>
    );
  }
}

export default App;
