import styled from "@emotion/styled";
import { theme } from "../theme";

export const Button = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize.body};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &.primary {
    background-color: ${theme.colors.primary};
    color: white;
    &:hover {
      background-color: ${theme.colors.secondary};
    }
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    &:hover {
      background-color: ${theme.colors.primary};
      color: white;
    }
  }
`;