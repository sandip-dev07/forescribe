export interface Item {
  type: string;
  icon: string;
  logoColor: string;
  bgColor: string;
  title: string;
  subtitle?: string;
  quote?: string;
}

export interface ColumnProps {
  items: Item[];
  duration: number;
}
