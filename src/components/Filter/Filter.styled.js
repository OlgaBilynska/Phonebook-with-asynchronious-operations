import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin: 10px 0 20px;
`;

export const FilterLabel = styled.label`
  color: var(--section);

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

export const FilterInput = styled.input`
  display: block;
  width: inherit;
  margin: 0 auto;

  margin-top: 10px;
  color: var(--text);
  font-weight: 600;
  outline: transparent;
  border: var(--text);
  border-radius: 20px;
  padding: 10px 20px;
  background-color: var(--section);

  &:hover,
  &:focus {
    outline: 2px solid var(--accent);
    box-shadow: 1px 1px 1px var(--accent);
  }
`;
