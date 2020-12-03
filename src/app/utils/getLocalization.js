export const getLocalizationFromChechbox = (checked) => 
  checked ? 'ru' : 'en'

export const getCheckboxFromLocalization = (localization) => 
  localization === 'ru'