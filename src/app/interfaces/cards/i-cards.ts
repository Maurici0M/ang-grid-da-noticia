export interface CardPrimary extends CardSecondary {
  description: string,
}

export interface CardSecondary {
  title: string,
  srcImg: string
}

export interface CardTertiary {
  srcImg: string
}
