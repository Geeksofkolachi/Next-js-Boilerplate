export interface IProps {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}

export interface ButtonType {
  btnText: string;
  btnStyle?: string;
  onClick?: () => void;
}
