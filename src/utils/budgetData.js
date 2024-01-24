import dataBudget from "./by-spheres.structure.json";

export const DataBudget = function (allData) {
  let regionId = 0;
  let firstItem = 0;
  let firstIndex = 0;
  let lastIndex = 0;

  const data = dataBudget.items.reduce(function (
    accumulator,
    item,
    index,
    array
  ) {
    if (regionId !== item.region_id) {
      lastIndex = dataBudget.items.findLastIndex(
        (lastIndex) => lastIndex.region_id === item.region_id
      );
      firstItem = {
        id: item.id,
        region_id: item.region_id,
        region_idex: index,
        region_last_idex: lastIndex,
        region_name: item.region_name,
        district_id: item.district_id,
        district_name: item.di,
        district_total : true,
        indicators: item.indicators.map((item, index, array) => {
          return {
            "indicator_id": item.indicator_id,
            "kpi_hakim_indicator_id": item.kpi_hakim_indicator_id,
            "plan": `${Number(
              dataBudget.items.slice(index, lastIndex).reduce(
                (total, item) =>
                  (total =
                    total +
                    Number(
                      item.indicators[index]?.plan
                        ? item.indicators[index]?.plan
                        : 0
                    )),
                0
              )
            ).toFixed(2)}`,
            "fact": `${Number(
              dataBudget.items.slice(index, lastIndex).reduce(
                (total, item) =>
                  (total =
                    total +
                    Number(
                      item.indicators[index]?.fact
                        ? item.indicators[index]?.fact
                        : 0
                    )),
                0
              )
            ).toFixed(2)}`,
            "percent": `${Number(
              dataBudget.items.slice(index, lastIndex).reduce(
                (total, item) =>
                  (total =
                    total +
                    Number(
                      item.indicators[index]?.percent
                        ? item.indicators[index]?.percent
                        : 0
                    )),
                0
              )
            ).toFixed(2)}`,
          };
        }),
      };
      accumulator = Array.prototype.slice.call(accumulator);
      accumulator.splice(index, 0, firstItem);
      regionId = item.region_id;
      firstIndex = index;
      return accumulator;
    } else {
      accumulator = Array.prototype.slice.call(accumulator);
      accumulator.push({...item, region_idex: (Number(firstIndex) + 1),});
      return accumulator;
    }
  },  []);
  return data;
};

//  export const AllDataBudget = function(){
//   const result = dataBudget.items.reduce((accumulator, item) => {
//     const last = accumulator[accumulator.length - 1];
//     if (!last || last[0].region_id !== curr.region_id) {
//       accumulator.push([item]);
//       return accumulator;
//     } else {
//       last.push(item);
//       return accumulator;
//     }
//   }, []);
//   DataBudget(result)
//  }
