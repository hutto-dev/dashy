////////////////////////////////////////// VERSE OF THE DAY //////////////////////////////////////////

/////// API ///////
async function fetchVerses() {
  const apiKey = "RtBn4DEljTrIU0VBsqsx-";
  const bibleId = "65eec8e0b60e656b-01";
  const verseId = "GEN.12.8";
  const url = `https://rest.api.bible/v1/bibles/${bibleId}/verses/${verseId}?content-type=text`;

  const response = await fetch(url, {
    headers: {
      "api-key": apiKey,
    },
  });

  const data = await response.json();

  return {
    verse: data.data.content.replace(/^\s*\[\d+\]\s*/, "");
    reference: data.data.reference;
  }
}


/////// HTML ///////
function updateVerseHTML(verse, reference){
const verseHTML = document.getElementById("verse");
const refHTML = document.getElementById("ref");

verseHTML.textContent = verse;
refHTML.textContent = reference;

}
