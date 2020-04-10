import React, { Component } from "react";
import ListCategoryHome from "../../components/ListCategoryHome";

class Home extends Component {
  state = {
    filter: "",
    categoryFilter: null,
  };

  handleChangeFilter = (e) => {
    const text = e.target.value;
    this.setState({ filter: text });
    console.log(text);
  };
  render() {
    const { results: stores } = this.props;
    return (
      <React.Fragment>
        <div className="px-5 max-w-screen-md mx-auto">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center capitalize">
            <span
              className="block sm:inline-block"
              role="img"
              aria-label="biker"
            >
              🚴
            </span>
            {`${process.env.REACT_APP_CITY} a Domicilio`}
          </h1>
          <div className="relative p-5 lg:max-w-5xl xl:max-w-6xl lg:m-auto pb-10">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              placeholder="Cerca Attività"
              onInput={this.handleChangeFilter}
            />
          </div>
          <div className="relative mb-10 font-sans text-md text-gray-800">
            {Object.keys(stores).map((key, index) => (
              <ListCategoryHome
                key={index}
                category={key}
                icon={stores[key].icon}
                data={stores[key].data}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
