import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useGetProductsQuery } from "./services/api";
import { Wrapper, WrapperTypes } from "./components/Wrapper";
import { Loading } from "./components/Loading";
import { ErrorMessage } from "./components/ErrorMessage";
import { ProductsGrid } from "./components/ProductsGrid";
import { useDeviceSearch } from "./hooks/useDeviceSearch";
import { SearchBar } from "./components/SearchBar";

function App() {
  const { error, isLoading, data } = useGetProductsQuery();
  const { searchFilter } = useDeviceSearch();

  return (
    <>
      <Wrapper
        wrapperType={isLoading || error ? WrapperTypes.FullScreen : undefined}
      >
        {!error && isLoading && <Loading />}
        {error && <ErrorMessage error={error} />}
        {!error && !isLoading && (
          <>
            <SearchBar />
            <ProductsGrid>
              {data?.devices.filter(searchFilter).map((device) => (
                <div key={`${device.device_id}`}>
                  <img
                    src={`${process.env.REACT_APP_ICON_URL}/${device.icon.id}_25x25.png`}
                    alt={`product ${device.product.name} icon`}
                  />
                  <span>{device.device_id}</span> |{" "}
                  <span>{device.line.name}</span> |{" "}
                  <span>{device.product.name}</span>
                </div>
              ))}
            </ProductsGrid>
          </>
        )}
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
