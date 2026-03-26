import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid #3a3a4a;
  background: #15151c;
  color: #ddd;
  font-size: 0.9rem;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: #666;
  }
  &:focus {
    border-color: #006d31;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 0.25rem;
  line-height: 1;
  &:hover {
    color: #ddd;
  }
`;

export const ResultsList = styled.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 1rem;
  right: 1rem;
  background: #20202b;
  border: 1px solid #3a3a4a;
  border-radius: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 9999;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #15151c;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }
`;

export const ResultItem = styled.li`
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #2a2a3b;
  }
`;

export const ResultTitle = styled.span`
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
`;

export const ResultMeta = styled.span`
  color: #888;
  font-size: 0.75rem;
  display: block;
  margin-top: 0.1rem;
`;

export const NoResults = styled.li`
  padding: 0.75rem;
  color: #666;
  font-size: 0.85rem;
  text-align: center;
`;
