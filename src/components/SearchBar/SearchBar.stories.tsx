import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { SearchBar } from "./SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const MockStore: React.FC<PropsWithChildren> = ({ children }) => (
  <Provider
    store={configureStore({
      reducer: {
        search: createSlice({
          name: "search",
          initialState: {
            searchQueryInput: "",
          },
          reducers: {
            searchQuery: (state, action) => {
              state.searchQueryInput = action.payload;
            },
            clearQueryInput: (state) => {
              state.searchQueryInput = "";
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <MockStore>
    <SearchBar {...args} />
  </MockStore>
);

export const Default = Template.bind({});
Default.args = {};
