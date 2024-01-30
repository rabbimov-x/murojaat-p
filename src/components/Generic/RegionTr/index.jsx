import React from "react";
// import budgetData from "../../../utils/by-spheres.structure.json";
import { P } from "../../../globalStyled";
import { Tr, Td } from "./style";

const RegionTr = ({ indicatorLists, fixIndicators }) => {
  let plan = 0;
  let fact = 0;
  return (
    <Tr>
      <Td.RegionTotal colSpan={4}>
        <P>Respublika bo'yicha</P>
      </Td.RegionTotal>

      {indicatorLists.map(
        ({ kpi_hakim_indicator_id, unit_formula, indicator_type }, index) => {
          return (
            <React.Fragment key={kpi_hakim_indicator_id}>
              <Td.RegionTotal>
                <P>
                  {unit_formula === "SUM"
                    ? (plan = Number(
                        fixIndicators.reduce(
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
                          fixIndicators.reduce(
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
                        ).toFixed(2) / fixIndicators.length
                      ).toFixed(1))}
                </P>
              </Td.RegionTotal>
              <Td.RegionTotal>
                <P>
                  {unit_formula === "SUM"
                    ? (fact = Number(
                        fixIndicators.reduce(
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
                      ).toFixed(2))
                    : (fact = (
                        Number(
                          fixIndicators.reduce(
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
                        ).toFixed(2) / fixIndicators.length
                      ).toFixed(2))}
                </P>
              </Td.RegionTotal>
              <Td.RegionTotal>
                <P>
                  {Number(plan) !== 0
                    ? indicator_type === 0
                      ? ((fact / Number(plan)) * 100).toFixed(1) >= 100
                        ? "100"
                        : ((Number(fact) / Number(plan)) * 100).toFixed(1)
                      : (100 * (1 + (1 - (fact / plan) * 1))).toFixed(1) >= 100
                      ? "100"
                      : ((Number(fact) / Number(plan)) * 100).toFixed(1)
                    : ""}
                </P>
              </Td.RegionTotal>
            </React.Fragment>
          );
        }
      )}
    </Tr>
  );
};

export default RegionTr;
