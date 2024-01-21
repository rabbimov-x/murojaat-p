import styled from "styled-components";

const colorType = ({ cl }) => {
  switch (cl) {
    case "inherit":
      return {
        background: "inherit",
        border: "0px solid var(--shade-1)",
        color: "var(--shade-1)",
      };
    case "white":
      return {
        background: "var(--shade-1)",
        border: "0px solid #E6E9EC",
        color: "var(--shade-0)",
      };
    case "primary":
      return {
        background: "var(--primary2)",
        border: "none",
        color: "var(--shade-1)",
      };
    case "tr":
      return {
        background: "transparent",
        border: "none",
        color: "var(--violet2)",
      };
    default:
      return {
        border: "none",
        background: "var(--primary)",
        color: "var(--shade-1)",
      };
  }
};

export const ButtonContainer = styled.button`
  width: auto;
  padding: ${({pd})=> pd ? `var(${pd})` : "var(--btn-middle)"};
  background-color: inherit;
  cursor: pointer;
  display: flex;  
  border-radius: 8px;
  font-family: var(--family);
  font-size: var(--size14);
  font-weight: 600;
  &:active {
    transform: scale(0.985);
    border-radius: 8px;
  }
  ${colorType}
`;
