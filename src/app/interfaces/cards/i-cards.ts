export interface CardPrimary extends CardSecondary {
  description: string,
}

export interface CardSecondary extends CardTertiary {
  title: string,
}

export interface CardTertiary {
  srcImg: string
  altImg: string
  link: string
}
