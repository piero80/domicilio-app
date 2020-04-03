import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div class="px-5 max-w-screen-md mx-auto">
          <h1 class="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center capitalize">
            <span class="block sm:inline-block" role="img" aria-label="biker">
              🚴
            </span>
            {`${process.env.REACT_APP_CITY} a Domicilio`}
          </h1>
          <div class="relative p-5 lg:max-w-5xl xl:max-w-6xl lg:m-auto pb-10">
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              placeholder="Cerca Attività"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
