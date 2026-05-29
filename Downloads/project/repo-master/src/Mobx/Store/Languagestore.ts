import { makeAutoObservable } from "mobx";

class LanguageStore {
  language: "en" | "ar" = "en";

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(lang: "en" | "ar") {
    this.language = lang;
  }

  toggleLanguage() {
    this.language = this.language === "en" ? "ar" : "en";
  }
}

const languageStore = new LanguageStore();
export default languageStore;