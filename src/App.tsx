import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Device, useGetProductsQuery } from "./services/api";
import { Wrapper, WrapperTypes } from "./components/Wrapper";
import { Loading } from "./components/Loading";
import { ErrorMessage } from "./components/ErrorMessage";
import { ProductsGrid } from "./components/ProductsGrid";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  searchQuery,
  clearQueryInput,
  selectSearchQueryInput,
} from "./features/search/searchSlice";

function App() {
  const searchQueryInput = useAppSelector(selectSearchQueryInput);
  const dispatch = useAppDispatch();
  const { error, isLoading, data } = useGetProductsQuery();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchQuery(event.target.value));
  };

  const filterDevice = (device: Device) => {
    const sanitizeQuery = searchQueryInput
      .replace(/[\\.+*?^$[\](){}/'#:!=|]/gi, "\\$&")
      .trim()
      .toLowerCase();

    if (!sanitizeQuery) {
      return true;
    }

    // Get words
    const keys = getDeviceKeys(device);

    if (
      keys
        .map((keyWord) => keyWord.match(sanitizeQuery))
        .filter((match) => !!match === true).length > 0
    ) {
      return true;
    }

    return false;
  };

  return (
    <>
      <Wrapper
        wrapperType={isLoading || error ? WrapperTypes.FullScreen : undefined}
      >
        {!error && isLoading && <Loading />}
        {error && <ErrorMessage error={error} />}
        <label>
          Search
          <input
            value={searchQueryInput}
            placeholder="Search..."
            onChange={handleSearch}
          />
          <button>Search</button>
          <button onClick={() => dispatch(clearQueryInput())}>Clear</button>
        </label>
        <ProductsGrid>
          {data?.devices.filter(filterDevice).map((device) => (
            <div key={`${device.product.name}_${device.shortnames.join("-")}`}>
              <img
                src={`${process.env.REACT_APP_ICON_URL}/${device.icon.id}_25x25.png`}
                alt={`product ${device.product.name} icon`}
              />
              <span>{device.line.name}</span> |{" "}
              <span>{device.product.name}</span>
            </div>
          ))}
        </ProductsGrid>
      </Wrapper>
      <div className="App">
        <Demo />
      </div>
    </>
  );
}

export default App;

const Demo: React.FC = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Counter />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <span>
      <span>Learn </span>
      <a
        className="App-link"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux
      </a>
      <span>, </span>
      <a
        className="App-link"
        href="https://redux-toolkit.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redux Toolkit
      </a>
      ,<span> and </span>
      <a
        className="App-link"
        href="https://react-redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Redux
      </a>
    </span>
  </header>
);

const getDeviceKeys = (device: Device): string[] => {
  const deviceKeyWords = [];
  // line
  deviceKeyWords.push(device.line.name);
  deviceKeyWords.push(device.line.id);

  // product
  deviceKeyWords.push(device.product.name);
  deviceKeyWords.push(device.product.abbrev);

  // shortnames
  device.shortnames.map((word) => deviceKeyWords.push(word));

  // triplets
  device.triplets.forEach((triplet) => {
    Object.keys(triplet).forEach((tripletKey) => {
      deviceKeyWords.push(triplet[tripletKey]);
    });
  });

  return getTranslateDeviceKeyWords(deviceKeyWords);
};

const getTranslateDeviceKeyWords = (keyWords: string[]): string[] => {
  const deviceSplitKeyWords = keyWords.reduce<string[]>(
    (splitKeyWords, word) => {
      const lowerCaseWord = word.toLowerCase();
      const wordStrings = getSplitKeyWord(lowerCaseWord);

      return [...splitKeyWords, ...wordStrings, lowerCaseWord];
    },
    []
  );

  return getUniqueKeywords(deviceSplitKeyWords);
};

const getSplitKeyWord = (text: string): string[] => text.split(" ");

const getUniqueKeywords = (keywords: string[]): string[] => {
  let unique: string[] = [];
  keywords.forEach((keyword) => {
    if (!unique.includes(keyword)) {
      unique.push(keyword);
    }
  });

  return unique;
};
