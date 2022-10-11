import styled from "styled-components";
import { useDeviceSearch } from "../../hooks/useDeviceSearch";
import { tokens } from "../../tokens";
import { Text } from "../Text";

export const SearchBar: React.FC = () => {
  const { onClearSearch, onSearch, searchQueryInput } = useDeviceSearch();

  return (
    <Container data-testid="search-bar">
      <Img src="/ui-logo.png" alt="ui logo" />
      <SearchForm>
        <SearchInput
          data-testid="search-bar-input"
          placeholder="Search..."
          onChange={(event) => onSearch(event.target.value)}
          value={searchQueryInput}
        />
        <ClearSearchButton
          data-testid="search-bar-clear-button"
          type="button"
          onClick={onClearSearch}
        >
          <Text>Clear</Text>
        </ClearSearchButton>
      </SearchForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${tokens.spacingExtraLargePx};
  width: 100%;
`;

const SearchForm = styled.form`
  padding: ${tokens.spacingExtraLargePx} 0;
  display: block;
`;

const SearchInput = styled.input`
  border: 1px solid ${tokens.colorUiGrey};
  box-sizing: border-box;
  padding: ${tokens.spacingSmallPx} ${tokens.spacingLargePx};
  line-height: ${tokens.lineHeightEm};
  margin-right: ${tokens.spacingSmallPx};

  &:focus,
  &:hover {
    border-color: ${tokens.colorUiLightBlue};
  }
`;

const ClearSearchButton = styled.button`
  box-sizing: border-box;
  border: 1px solid ${tokens.colorUiGrey};
  padding: ${tokens.spacingSmallPx} ${tokens.spacingLargePx};
  background: ${tokens.colorWhite};

  &:hover {
    border-color: ${tokens.colorBlack};
    background-color: ${tokens.colorUiLightBlue};
  }

  &:active {
    border-color: ${tokens.colorWhite};
    color: ${tokens.colorWhite};
    background-color: ${tokens.colorUiLightBlue};
  }
`;

const Img = styled.img`
  display: none;

  @media ${tokens.mediaTablet} {
    display: block;
  }

  @media ${tokens.mediaDesktop} {
    display: block;
  }
`;
