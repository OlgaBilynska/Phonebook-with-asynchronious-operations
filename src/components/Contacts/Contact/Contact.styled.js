import styled from '@emotion/styled';

export const ContactItem = styled.div`
  color: var(--text);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  background-color: var(--section);
  border: 1px solid var(--section);
  border-radius: 20px;
  padding: 10px 20px;
  min-width: fit-content;
`;
