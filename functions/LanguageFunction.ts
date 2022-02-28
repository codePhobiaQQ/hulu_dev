const languageFunction = (language: string) => {
  return language.split('').map((letter, index) => {
    if (index == 0) { return letter.toUpperCase(); }
    else { return letter.toLowerCase(); }
  }).join('');
};

export const chooseLanguage = (language: string, ru: string | undefined, en: string | undefined, ge: string | undefined) => {
  if (language == 'Ru') {
    return ru;
  } else if (language == 'En') {
    return en;
  } else if (language == 'Ge') {
    return ge;
  } else {
    return ru;
  }
}

export default  languageFunction;