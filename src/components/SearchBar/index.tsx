import React, { useEffect, useRef, useState } from "react";
import { OrderedTimelineItems } from "../../TimelineItems";
import {
  ClearButton,
  NoResults,
  ResultItem,
  ResultMeta,
  ResultsList,
  ResultTitle,
  SearchInput,
  SearchWrapper,
} from "./styles";

interface SearchBarProps {
  onNavigate: (groupIndex: number) => void;
}

export const SearchBar = ({ onNavigate }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim().toLowerCase();

  const results = trimmed
    ? OrderedTimelineItems.filter(
        (item) =>
          item.cardTitle.toLowerCase().includes(trimmed) ||
          item.cardSubtitle.toLowerCase().includes(trimmed) ||
          item.cardDetailedText.toLowerCase().includes(trimmed) ||
          item.title.toLowerCase().includes(trimmed)
      ).slice(0, 40)
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  // Close on Escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelect = (groupId: number) => {
    // groupId is 1-based; Chrono items array is 0-based
    onNavigate(groupId - 1);
    setQuery("");
    setOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
  };

  return (
    <SearchWrapper ref={wrapperRef}>
      <SearchInput
        ref={inputRef}
        type="text"
        placeholder="Search episodes, scenes…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => trimmed && setOpen(true)}
        onKeyDown={handleKeyDown}
        aria-label="Search timeline"
        aria-expanded={open && results.length > 0}
        aria-autocomplete="list"
      />
      {query && (
        <ClearButton onClick={handleClear} aria-label="Clear search">
          ✕
        </ClearButton>
      )}
      {open && trimmed && (
        <ResultsList role="listbox">
          {results.length === 0 ? (
            <NoResults>No results for "{query}"</NoResults>
          ) : (
            results.map((item) => (
              <ResultItem
                key={item.id}
                role="option"
                onClick={() => handleSelect(item.groupId)}
              >
                <ResultTitle>{item.cardTitle}</ResultTitle>
                <ResultMeta>
                  {item.title} · {item.cardSubtitle}
                  {item.cardDetailedText ? ` — ${item.cardDetailedText.slice(0, 60)}` : ""}
                </ResultMeta>
              </ResultItem>
            ))
          )}
        </ResultsList>
      )}
    </SearchWrapper>
  );
};
