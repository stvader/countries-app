export const initState = {
  localization: localStorage.getItem('localization') || 'en',
  searchType: 'name',
  countriesInfo: {
    collection: [],
    loading: false,
    error: null
  },
  allCodes: {
    collection: [],
    loading: false,
    error: null
  }
}