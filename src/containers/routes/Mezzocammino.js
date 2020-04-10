import React, { Component } from "react";
import ListCategory from "../../components/ListCategory";

class Mezzocammino extends Component {
  state = {
    results: {},
    filter: "",
    categoryFilter: null,
  };

  handleChangeFilter = (e) => {
    const text = e.target.value;
    this.setState({ filter: text });
  };

  filteredCategories(filter, categoryFilter) {
    const { results } = this.props;
    const regex = new RegExp(`${filter}`, "i");

    return Object.keys(results)
      .filter((key) => (categoryFilter ? categoryFilter === key : true))
      .reduce((acc, key) => {
        return {
          ...acc,
          [key]: {
            icon: results[key].icon,
            data: results[key].data.filter((e) =>
              filter.length ? regex.test(e.name) : true
            ),
          },
        };
      }, {});
  }
  render() {
    const { filter, categoryFilter } = this.state;
    const filteredStores = this.filteredCategories(filter, categoryFilter);
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
            {`${process.env.REACT_APP_MEZZOCAMMINO} a Domicilio`}
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
            {Object.keys(filteredStores)
              .filter((key) => filteredStores[key].data.length)
              .map((key, index) => (
                <ListCategory
                  key={index}
                  name={key}
                  category={filteredStores[key]}
                  filter={filter}
                />
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Mezzocammino;
