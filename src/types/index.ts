export interface Location {
  name: string
  url: string
}

export interface Origin {
  name: string
  url: string
}

export interface CharacterItem {
  id: number
  created: string
  episode: string[]
  gender: string
  image: string
  location: Location
  name: string
  origin: Origin
  species: string
  status: "Alive" | "Dead" | "unknown"
  type: string
  url: string
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharacterResponse {
  info: Info
  results: CharacterItem[]
}