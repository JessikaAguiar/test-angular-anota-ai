export interface CardType {
  id: string
  description: string
  img: string
  title: string
  type: string
  options?: {
    text: string,
    color: string
  }
}
