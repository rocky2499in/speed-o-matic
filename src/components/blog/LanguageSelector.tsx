import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  zh: "中文"
};

type Language = "en" | "es" | "de" | "fr" | "zh";

interface LanguageSelectorProps {
  onLanguageChange: (language: Language) => void;
  currentLanguage: Language;
}

export const LanguageSelector = ({ onLanguageChange, currentLanguage }: LanguageSelectorProps) => {
  return (
    <Select value={currentLanguage} onValueChange={(value: Language) => onLanguageChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, name]) => (
          <SelectItem key={code} value={code as Language}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};