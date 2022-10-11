import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  clearQueryInput,
  searchQuery,
  selectSearchQueryInput,
} from "../features/search/searchSlice";
import { Device } from "../services/api";

export type DeviceSearch = {
  searchQueryInput: string;
  searchFilter: (device: Device) => boolean;
  onClearSearch: () => void;
  onSearch: (searchQuery: string) => void;
};

export const useDeviceSearch = (): DeviceSearch => {
  const searchQueryInput = useAppSelector(selectSearchQueryInput);
  const dispatch = useAppDispatch();

  const onSearch = (searchQueryString: string) => {
    dispatch(searchQuery(searchQueryString));
  };

  return {
    searchQueryInput,
    onSearch: onSearch,
    onClearSearch: () => dispatch(clearQueryInput()),
    searchFilter: (device) => searchDevice(searchQueryInput, device),
  };
};

const searchDevice = (searchQueryInput: string, device: Device) => {
  const sanitizeQuery = searchQueryInput
    .replace(/[\\.+*?^$[\](){}/'#:!=|]/gi, "\\$&")
    .trim()
    .toLowerCase();

  if (!sanitizeQuery) {
    return true;
  }

  // @Todo: Keys should be generated and stored on fetch, or handled on BFF/BE and API improved
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

export const getDeviceKeys = (device: Device): string[] => {
  const deviceKeyWords = [];

  // device id
  deviceKeyWords.push(device?.device_id);
  // line
  deviceKeyWords.push(device?.line?.name);
  deviceKeyWords.push(device?.line?.id);

  // product
  deviceKeyWords.push(device?.product?.name);
  deviceKeyWords.push(device?.product?.abbrev);

  // shortnames
  device?.shortnames?.map((word) => deviceKeyWords.push(word));

  // triplets
  device?.triplets?.forEach((triplet) => {
    Object.keys(triplet).forEach((tripletKey) => {
      deviceKeyWords.push(triplet[tripletKey]);
    });
  });

  return getTranslateDeviceKeyWords(
    deviceKeyWords.filter((keyWord) => !!keyWord)
  );
};

export const getTranslateDeviceKeyWords = (keyWords: string[]): string[] => {
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

export const getSplitKeyWord = (text: string): string[] => text.split(" ");

export const getUniqueKeywords = (keywords: string[]): string[] => {
  let unique: string[] = [];
  keywords.forEach((keyword) => {
    if (!unique.includes(keyword)) {
      unique.push(keyword);
    }
  });

  return unique;
};
