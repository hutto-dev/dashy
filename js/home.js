////////////////////////////////////////// VERSE OF THE DAY //////////////////////////////////////////

/////// GRABBING DAILY VERSE ///////
const verseList = [
  "PSA.119.45",
  "PSA.119.32",
  "PSA.116.7",
  "PSA.37.3",
  "PSA.37.4",
  "PSA.32.8",
  "PSA.34.4",
  "PSA.25.12",
  "PSA.25.14",
];

const date = new Date();
const dateNumber =
  date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();

const todayNumber = dateNumber % verseList.length;
const randomVerse = verseList[todayNumber];

console.log(todayNumber);

/////// API ///////
async function fetchVerses(verseId) {
  const apiKey = "RtBn4DEljTrIU0VBsqsx-";
  const bibleId = "65eec8e0b60e656b-01";
  const url = `https://rest.api.bible/v1/bibles/${bibleId}/verses/${verseId}?content-type=text`;

  const response = await fetch(url, {
    headers: {
      "api-key": apiKey,
    },
  });

  const data = await response.json();

  return {
    verse: data.data.content.replace(/^\s*\[\d+\]\s*/, ""),
    reference: data.data.reference,
  };
}

/////// HTML ///////
function updateVerseHTML({ verse, reference }) {
  const verseHTML = document.getElementById("verse");
  const refHTML = document.getElementById("ref");

  verseHTML.textContent = verse;
  refHTML.textContent = reference;
}

/////// TYING IT ALL TOGETHER?? ///////
async function loadVerse() {
  const verseId = randomVerse;
  const data = await fetchVerses(verseId);
  updateVerseHTML(data);
}

loadVerse();
