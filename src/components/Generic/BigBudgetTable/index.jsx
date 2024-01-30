import React from "react";
import { P } from "../../../globalStyled";
import {
  extractRegionsData,
  fixIndicatorList,
  IndicatorList,
} from "../../../utils/budgetData";
import { Container, Card, Table, Tr, Th } from "./style";
import RegionTr from "../RegionTr";
import DistrictTr from "../DistrictTr";
const BigBudgetTable = () => {
  const indicatorLists = IndicatorList();
  const fixIndicators = fixIndicatorList();
  const extractData = extractRegionsData();
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Section>
            <Table>
              <Table.Thead>
                <Tr>
                  <Th.Number rowSpan={2}>
                    <P>N/</P>
                  </Th.Number>
                  <Th.Region colSpan={2} rowSpan={2}>
                    <P>Viloyat</P>
                  </Th.Region>
                  <Th.District rowSpan={2}>
                    <P>Tuman/shahar</P>
                  </Th.District>
                  {indicatorLists.map(
                    ({ id, indicator_name, unit_id, unit_name }, index) => {
                      return (
                        <Th.Indicator key={index} colSpan={3}>
                          <P>{indicator_name}</P>
                          <Th.UnitName key={unit_id}>
                            <P cl="--grey">{unit_name}</P>
                          </Th.UnitName>
                        </Th.Indicator>
                      );
                    }
                  )}
                </Tr>
                <Tr>
                  {indicatorLists.map(({ kpi_hakim_indicator_id }) => {
                    return (
                      <React.Fragment key={kpi_hakim_indicator_id}>
                        <Th.Plan>
                          <P>Reja</P>
                        </Th.Plan>
                        <Th.Plan>
                          <P>Fakt</P>
                        </Th.Plan>
                        <Th.Plan>
                          <P>Foiz</P>
                        </Th.Plan>
                      </React.Fragment>
                    );
                  })}
                </Tr>
              </Table.Thead>
              <Table.Tbody>
                <RegionTr
                  indicatorLists={indicatorLists}
                  fixIndicators={fixIndicators}
                />
                <DistrictTr
                  indicatorLists={indicatorLists}
                  extractData={extractData}
                />
              </Table.Tbody>
            </Table>
          </Card.Section>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BigBudgetTable;
