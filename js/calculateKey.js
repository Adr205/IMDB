const Preferences = require("./preferences");

function calculateKey(preferences){
  // Build a Preference object
  const pref = new Preferences();

  //Filter out the Object false values
  const filteredPreferences = Object.keys(preferences).filter(
    (key) => preferences[key] !== "0"
  );

  // Calculate the key
  let key = 1;
  filteredPreferences.forEach((preference) => {
    key *= pref[preference];
  });

  key = (key % pref.size) + 1;

  return key;
};

module.exports = calculateKey;
