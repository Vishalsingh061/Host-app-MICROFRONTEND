import styled from "@emotion/styled";
import { theme } from "../theme";

export const Input = styled.input`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize.body};
  border: 1px solid #ddd;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;