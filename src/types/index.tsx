export interface ToolBoxProps {
  during: string;
  setDuring: (during: string) => void;
}

export interface SortConfig {
  field: SortField;
  order: SortOrder;
}
export type SortOrder = "asc" | "desc";
export type SortField = "age" | "market_cap" | "";
