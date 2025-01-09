export type Language = "en" | "es" | "de" | "fr" | "zh";

export interface BlogTranslation {
  title: string;
  content: string;
  description?: string;  // Making description optional
}

export interface CityTranslations {
  [key: string]: BlogTranslation;
}

export interface Translations {
  [key: string]: CityTranslations;
}