import React from "react";
// import budgetData from "../../../utils/by-spheres.structure.json";
import { P } from "../../../globalStyled";
import { Tr, Td } from "./style";
const RegionTr = ({ indicators, regionName }) => {
  return (
    <Tr>
      <Td colSpan={3}>{regionName}</Td>
      {indicators?.map(({ plan, fact, percent }, index) => {
        return (
          <React.Fragment key={index}>
            <Td.Percent>
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
      })}
    </Tr>
  );
};

export default RegionTr;
