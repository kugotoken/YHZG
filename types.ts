export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

export interface TokenInfo {
  label: string;
  value: string;
  isCopyable?: boolean;
}