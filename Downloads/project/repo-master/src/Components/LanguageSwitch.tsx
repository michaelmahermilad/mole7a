 import languageStore from '@/Mobx/Store/Languagestore'
import React from 'react'

// Example translations object
const translations: Record<string, { greeting: string }> = {
  en: { greeting: 'EN' },
  fr: { greeting: 'AR' },
  // Add more languages as needed
};
 
 function LanguageSwitch() {
   return (
    <button
          onClick={() => languageStore.toggleLanguage()}
          className=" px-0 py-0 e cursor-pointer"
        >
          {languageStore.language.toUpperCase()}
        </button>
   )
 }
 
 export default LanguageSwitch
 