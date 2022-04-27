/* Date+time localization and number localization formats 
to represent the diffences based on language and region*/
import { numberFormats } from '../formats/numberFormats'
import { dateTimeFormats } from '../formats/dateTimeFormats'

import en from '../locales/en.json'
import fr from '../locales/fr.json'
import es from '../locales/es.json'


export default {
  defaultLocale: 'en',
  fallbackLocale: 'en',
  numberFormats,
  dateTimeFormats,
  title: { en, fr, es },
  summary: { en, fr, es },
  description: { en, fr, es },
  message: { en, fr, es },
}