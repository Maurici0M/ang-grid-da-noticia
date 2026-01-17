export interface FooterItem {
  text: string,
  route?: string
}

export interface FooterSocialMedia {
  socialMediaIcon: string,
  linkSocialMedia: string
}

export interface FooterItemSocialMedia extends FooterItem {
  social: FooterSocialMedia[]
}

export interface DataFooter {
  seeAlso: FooterItem[],

  connect: FooterItem[],

  learnMore: FooterItem[],

  followUs: FooterItemSocialMedia[],

  getToKnow: FooterItem[]
}
