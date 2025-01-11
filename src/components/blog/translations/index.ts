import { Translations } from '../types';
import { usNortheastTranslations } from './us-northeast';
import { usMidwestTranslations } from './us-midwest';
import { usWestTranslations } from './us-west';
import { usCapitalTranslations } from './us-capital';
import { majorCityTranslations } from './major-cities';
import { texasCityTranslations } from './texas-cities';
import { californiaCityTranslations } from './california-cities';

export const translations: Translations = {
  ...usNortheastTranslations,
  ...usMidwestTranslations,
  ...usWestTranslations,
  ...usCapitalTranslations,
  ...majorCityTranslations,
  ...texasCityTranslations,
  ...californiaCityTranslations
};