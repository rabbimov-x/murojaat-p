// import dataBudget from "./by-spheres.json";
import structure from "./structure.json";

// console.log(dataBudget.items);
console.log(structure.items);
export const IndicatorList = function () {
  const newData = [...structure.items];
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
console.log(IndicatorList());

export const fixIndicatorList = function () {
  const IndicatorListData = IndicatorList();
  const newData = Array.apply(null, structure.items);

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
console.log(fixIndicatorList());

const regionIds = Array.from(
  new Set(
    structure.items.map((item) => {
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
