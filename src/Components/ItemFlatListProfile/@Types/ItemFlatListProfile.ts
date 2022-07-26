export interface ItemFlatListOption {
  title?: string;
  icon?: string;
  iconSize?: number;
  action?: () => void;
  id: number;
  position: number | string;
}
