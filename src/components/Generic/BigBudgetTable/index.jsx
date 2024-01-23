import React from "react";
import budgetData from "../../../utils/by-spheres.structure.json";
import { P } from "../../../globalStyled";
import { Container, Card, Table, Tr, Td, Th } from "./style";
const BigBudgetTable = () => {
  const data = budgetData;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Section>
            <Table>
              <Table.Thead>
                <Tr>
                  <Th.Number>
                    <P>N/</P>
                  </Th.Number>
                  <Th.Region colSpan={2}>
                    <P>Viloyat</P>
                  </Th.Region>
                  <Th.District>
                    <P>Tuman/shahar</P>
                  </Th.District>
                  {data.indicatorList.map(
                    ({ id, indicator_name, unit_id, unit_name }) => {
                      return (
                        <Th.Indicator key={id} colSpan={3}>
                          <P>{indicator_name}</P>
                          <Th.UnitName key={unit_id}>
                            <P cl="--grey">{unit_name}</P>
                          </Th.UnitName>
                        </Th.Indicator>
                      );
                    }
                  )}
                </Tr>
              </Table.Thead>
              <Table.Tbody>
                <Tr>
                  <Td.Region colSpan={4}>
                    <P>Respublika bo'yicha</P>
                  </Td.Region>

                  {data.items[0].indicators.map(
                    ({ kpi_hakim_indicator_id }, index) => {
                      return (
                        <React.Fragment key={kpi_hakim_indicator_id}>
                          <Td.Percent>
                            <P>
                              {data.items.reduce(
                                (total, item) =>
                                  (total = Number(
                                    total +
                                      Number(
                                        item.indicators[index]?.plan
                                          ? item.indicators[index]?.plan
                                          : 0
                                      )
                                  )),
                                0
                              )}
                            </P>
                          </Td.Percent>
                          <Td.Percent>
                            <P>
                              {data.items.reduce(
                                (total, item) =>
                                  (total = Number(
                                    total +
                                      Number(
                                        item.indicators[index]?.plan
                                          ? item.indicators[index]?.fact
                                          : 0
                                      )
                                  )),
                                0
                              )}
                            </P>
                          </Td.Percent>
                          <Td.Percent>
                            <P>
                              {data.items.reduce(
                                (total, item) =>
                                  (total = Number(
                                    total +
                                      Number(
                                        item.indicators[index]?.plan
                                          ? item.indicators[index]?.percent
                                          : 0
                                      )
                                  )),
                                0
                              )}
                            </P>
                          </Td.Percent>
                        </React.Fragment>
                      );
                    }
                  )}
                </Tr>
                {data.items.map(
                  (
                    {
                      id,
                      region_id,
                      region_name,
                      district_id,
                      district_name,
                      indicators,
                      
                    },
                    index
                  ) => {
                    return (
                      <Tr key={id}>
                        <Td.Number>
                          <P>{Number(index) + 1}</P>
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
                        {indicators.map(
                          ({ kpi_hakim_indicator_id, plan, fact, percent }) => {
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
                    );
                  }
                )}
              </Table.Tbody>
            </Table>
          </Card.Section>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BigBudgetTable;
