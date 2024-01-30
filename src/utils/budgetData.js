import structure from "./structure.json";

export const IndicatorList = function () {
  const newData = [...structure];
  const data = newData?.reduce((accumulator, obj) => {
    let find = [...accumulator, ...obj.indicators].reduce(
      (accumulator, obj) => {
        const existingObj = accumulator.find(
          (item) => item.indicator_id === obj.indicator_id
        );
        if (!existingObj) {
          accumulator.push(obj);
        }
        return accumulator;
      },
      []
    );
    accumulator = find;
    return accumulator;
  }, []);
  return data;
};

export const fixIndicatorList = function () {
  const IndicatorListData = IndicatorList();
  const newData = Array.apply(null, structure);

  const data = newData.reduce((accumulator, itemObj, index) => {
    let fix = IndicatorListData.reduce((accumulatorIn, objIn) => {
      let find = itemObj.indicators.find(
        (item) => item.indicator_id === objIn.indicator_id
      );
      if (!find) {
        accumulatorIn.push(objIn);
      } else {
        accumulatorIn.push(find);
      }
      return accumulatorIn;
    }, []);
    itemObj.indicators = fix;
    itemObj.index_count = index;
    accumulator.push(itemObj);
    return accumulator;
  }, []);
  return data;
};

const regionIds = Array.from(
  new Set(
    structure.map((item) => {
      return item.region_id;
    })
  )
);

export const extractRegionsData = function () {
  const newData = fixIndicatorList();
  const data = regionIds.map((id) => {
    const filteredData = newData.filter((item) => item.region_id === id);
    return filteredData;
  });
  return data;
};
