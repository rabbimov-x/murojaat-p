import React from "react";
// import budgetData from "../../../utils/by-spheres.structure.json";
import { P } from "../../../globalStyled";
import { Tr, Td } from "./style";
const DistrictTr = ({ indicatorLists, extractData }) => {
  let plan = 0;
  let fact = 0;
  return (
    <React.Fragment>
      {extractData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Tr>
              <Td.DistrictTotal colSpan={4}>
                <P>{item[0].region_name}</P>
              </Td.DistrictTotal>
              {indicatorLists?.map(
                (
                  { kpi_hakim_indicator_id, unit_formula, indicator_type },
                  index
                ) => {
                  return (
                    <React.Fragment key={kpi_hakim_indicator_id}>
                      <Td.DistrictTotal>
                        <P>
                          {unit_formula === "SUM"
                            ? (plan = Number(
                                item?.reduce(
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
                              ).toFixed(2))
                            : (plan = (
                                Number(
                                  item?.reduce(
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
                                ).toFixed(2) / item.length
                              ).toFixed(2))}
                        </P>
                      </Td.DistrictTotal>
                      <Td.DistrictTotal>
                        <P>
                          {unit_formula === "SUM"
                            ? (fact = Number(
                                item.reduce(
                                  (total, item) =>
                                    (total =
                                      Number(
                                        total * 100 +
                                          100 *
                                            Number(
                                              item.indicators[index]?.fact
                                                ? item.indicators[index]?.fact
                                                : 0
                                            )
                                      ) / 100),
                                  0
                                )
                              ).toFixed(2))
                            : (fact = (
                                Number(
                                  item.reduce(
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
                                ).toFixed(2) / item.length
                              ).toFixed(2))}
                        </P>
                      </Td.DistrictTotal>
                      <Td.DistrictTotal>
                        <P>
                          {Number(fact) &&
                          Number(plan) &&
                          Number(plan) !== 0 &&
                          Number(fact) !== 0
                            ? (indicator_type === 0
                                ? ((Number(fact) / Number(plan)) * 100).toFixed(
                                    1
                                  ) >= 100
                                  ? "100"
                                  : (
                                      (Number(fact) / Number(plan)) *
                                      100
                                    ).toFixed(1)
                                : (
                                    100 *
                                    (1 +
                                      (1 - (Number(fact) / Number(plan)) * 1))
                                  ).toFixed(1)) >= 100
                              ? "100"
                              : ((Number(fact) / Number(plan)) * 100).toFixed(1)
                            : "0"}
                        </P>
                      </Td.DistrictTotal>
                    </React.Fragment>
                  );
                }
              )}
            </Tr>
            {item?.map(
              (
                {
                  id,
                  region_id,
                  region_name,
                  district_id,
                  district_name,
                  indicators,
                  index_count,
                  
                },
                index
              ) => {
                return (
                  <React.Fragment key={id}>
                    <Tr>
                      <Td.Number>
                        <P>{Number(index_count) + 1}</P>
                      </Td.Number>
                      <Td.Number>
                        <P>{Number(index) + 1}</P>
                      </Td.Number>
                      <Td.Region key={region_id}>
                        <P>{region_name}</P>
                      </Td.Region>
                      <Td.District key={district_id}>
                        <P>{district_name}</P>
                      </Td.District>
                      {indicators?.map(
                        ({ kpi_hakim_indicator_id, plan, fact, percent, indicator_id, }) => {
                          return (
                            <React.Fragment key={kpi_hakim_indicator_id}>
                              <Td.Percent key={kpi_hakim_indicator_id}>
                                <P>{plan}</P>
                              </Td.Percent>
                              <Td.Percent>
                                <P>{fact}</P>
                              </Td.Percent>
                              <Td.Percent>
                                <P>{percent}</P>
                              </Td.Percent>
                            </React.Fragment>
                          );
                        }
                      )}
                    </Tr>
                  </React.Fragment>
                );
              }
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default DistrictTr;
