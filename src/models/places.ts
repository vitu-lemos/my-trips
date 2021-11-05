import { GetPlacesQuery, Place as PlaceType } from 'graphql/generated/graphql'

export type Places = GetPlacesQuery['places']

export type Place = PlaceType
