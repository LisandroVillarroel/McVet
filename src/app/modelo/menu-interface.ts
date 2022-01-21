export interface MenuItem {
  displayName: string;
  iconName: string;
  route?: string;
  disabled: boolean;
  children?: MenuItem[];
}
