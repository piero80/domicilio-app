import React, { useState } from "react";

const ListItemHome = ({ name, address, tel, site, note }) => {
  const [infoVisibleNote, setInfoVisibleNote] = useState(false);
  const [infoVisibleAddress, setInfoVisibleAddress] = useState(false);
  const encodedName = encodeURIComponent(name);
  const encodedCity = encodeURIComponent(process.env.REACT_APP_CITY);
  const encodeAddress = encodeURIComponent(address);
  const searchUrl = `https://www.google.com/search?q=${encodedName}%20${encodeAddress}%20${encodedCity}`;

  const handleClick = (e) => {
    switch (e.target.id) {
      case "warning":
        setInfoVisibleNote(!infoVisibleNote);
        break;
      case "address":
        setInfoVisibleAddress(!infoVisibleAddress);
        break;
      default:
        break;
    }
  };

  return (
    <div className="rounded-lg border bg-gray-200 p-4 md:p-5 my-5 text-md lg:text-xl font-semibold text-gray-700">
      <div className="flex justify-between items-center">
        <span>
          <a
            className="hover:underline"
            href={searchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </span>
        <div className="flex">
          {note && (
            <span
              className="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-yellow-300 rounded-lg"
              role="img"
              onClick={handleClick}
              aria-label="warning"
              id="warning"
            >
              ⚠️
            </span>
          )}
          {tel && (
            <a href={`tel:${tel}`}>
              <span
                className="inline-block mx-2 w-8 h-8 bg-green-300 text-center leading-8 rounded-lg cursor-pointer"
                role="img"
                aria-label="telephone"
                id="tel"
              >
                📞
              </span>
            </a>
          )}
          {site && (
            <span
              className="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-orange-300 rounded-lg"
              role="img"
              aria-label="website"
              id="web-site"
            >
              🌐
            </span>
          )}
          {address && (
            <span
              className="inline-block mx-1 md:mx-2 w-8 h-8 cursor-pointer text-center leading-8 bg-blue-300 rounded-lg"
              role="img"
              aria-label="address"
              onClick={handleClick}
              id="address"
            >
              🏢
            </span>
          )}
        </div>
      </div>
      {infoVisibleNote && (
        <div className="block mt-10">
          <p className="text-yellow-700 text-sm md:text-md lg:text-lg">
            {note}
          </p>
        </div>
      )}
      {infoVisibleAddress && (
        <div className="block mt-10">
          <p className="text-blue-700 text-sm md:text-md lg:text-lg">
            {address}
          </p>
        </div>
      )}
    </div>
  );
};
export default ListItemHome;
