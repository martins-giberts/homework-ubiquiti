import { renderHook } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Device } from "../services/api";
import {
  useDeviceSearch,
  getSplitKeyWord,
  getUniqueKeywords,
  getTranslateDeviceKeyWords,
  getDeviceKeys,
} from "./useDeviceSearch";

jest.mock("../features/search/searchSlice");

jest.mock("../app/hooks");

const mockedUseAppSelector = useAppSelector as jest.MockedFunction<
  () => string
>;

const mockedUseAppDispatch = useAppDispatch as jest.MockedFunction<
  typeof useAppDispatch
>;

describe("useDeviceSearch", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should invoke redux", () => {
    renderHook(useDeviceSearch);

    expect(mockedUseAppSelector).toHaveBeenCalledTimes(1);
    expect(mockedUseAppDispatch).toHaveBeenCalledTimes(1);
  });
});

describe("getSplitKeyWord", () => {
  it("should return array with words", () => {
    const result = getSplitKeyWord("test name");

    expect(result).toEqual(["test", "name"]);
  });

  it("should return array with single word", () => {
    const result = getSplitKeyWord("test");

    expect(result).toEqual(["test"]);
  });
});

describe("getUniqueKeywords", () => {
  it("should remove repeating string values from array", () => {
    const testArray = [
      "one",
      "two",
      "three",
      "four",
      "one",
      "one",
      "one",
      "one",
      "one-two",
      "one two",
    ];
    const result = getUniqueKeywords(testArray);

    expect(result).toEqual([
      "one",
      "two",
      "three",
      "four",
      "one-two",
      "one two",
    ]);
  });
});

describe("getTranslateDeviceKeyWords", () => {
  it("should return keywords from various strings", () => {
    const testArray = [
      "one",
      "one",
      "one",
      "two",
      "three",
      "one",
      "two",
      "three",
      "one two",
      "two three",
      "three four",
      "one-two",
      "two-three",
      "three-four",
      "one 55",
      "one Two Three",
      "oneTwoThree",
      "55",
    ];
    const result = getTranslateDeviceKeyWords(testArray);

    expect(result).toEqual([
      "one",
      "two",
      "three",
      "one two",
      "two three",
      "four",
      "three four",
      "one-two",
      "two-three",
      "three-four",
      "55",
      "one 55",
      "one two three",
      "onetwothree",
    ]);
  });
});

describe("getDeviceKeys", () => {
  it("should create array of keywords from Device object", () => {
    const testDevice: Partial<Device> = {
      device_id: "device_id",
      line: {
        name: "A Test-name 55 test spacing",
        id: "line.id",
      },
      product: {
        abbrev: "product.abbrev",
        name: "product.name",
      },
      shortnames: ["shortname1", "shortname2"],
      triplets: [
        {
          k1: "triplets1",
          k2: "triplets1 1k2",
        },
        {
          k1: "triplets2",
          k2: "triplets2 2k2",
        },
      ],
    };
    const result = getDeviceKeys(testDevice as Device);

    expect(result).toEqual([
      "device_id",
      "a",
      "test-name",
      "55",
      "test",
      "spacing",
      "a test-name 55 test spacing",
      "line.id",
      "product.name",
      "product.abbrev",
      "shortname1",
      "shortname2",
      "triplets1",
      "1k2",
      "triplets1 1k2",
      "triplets2",
      "2k2",
      "triplets2 2k2",
    ]);
  });

  it("should support partial device data", () => {
    const testDevice: Partial<Device> = {
      product: {
        abbrev: "",
        name: "A Test-name 55 test spacing",
      },
    };
    const result = getDeviceKeys(testDevice as Device);

    expect(result).toEqual([
      "a",
      "test-name",
      "55",
      "test",
      "spacing",
      "a test-name 55 test spacing",
    ]);
  });
});
