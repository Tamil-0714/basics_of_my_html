let newobj = [ 
   { 
     "22UCS601": 0, 
   }, 
   { 
     "22UCS602": 0, 
   }, 
   { 
     "22UCS603": 0, 
   }, 
   { 
     "22UCS604": 0, 
   }, 
   { 
     "22UCS605": 0, 
   }, 
   { 
     "22UCS606": 0, 
   }, 
   { 
     "22UCS607": 0, 
   }, 
   { 
     "22UCS608": 0, 
   }, 
   { 
     "22UCS609": 0, 
   }, 
   { 
     "22UCS610": 0, 
   }, 
   { 
     "22UCS611": 0, 
   }, 
   { 
     "22UCS612": 0, 
   }, 
   { 
     "22UCS613": 0, 
   }, 
   { 
     "22UCS614": 0, 
   }, 
   { 
     "22UCS615": 0, 
   }, 
   { 
     "22UCS616": 0, 
   }, 
   { 
     "22UCS617": 0, 
   }, 
   { 
     "22UCS618": 0, 
   }, 
   { 
     "22UCS619": 0, 
   }, 
   { 
     "22UCS620": 0, 
   }, 
   { 
     "22UCS621": 0, 
   }, 
   { 
     "22UCS622": 0, 
   }, 
   { 
     "22UCS623": 0, 
   }, 
   { 
     "22UCS624": 0, 
   }, 
   { 
     "22UCS625": 0, 
   }, 
   { 
     "22UCS626": 0, 
   }, 
   { 
     "22UCS627": 0, 
   }, 
   { 
     "22UCS628": 0, 
   }, 
   { 
     "22UCS629": 0, 
   }, 
   { 
     "22UCS630": 0, 
   }, 
   { 
     "22UCS631": 0, 
   }, 
   { 
     "22UCS632": 0, 
   }, 
   { 
     "22UCS633": 0, 
   }, 
   { 
     "22UCS634": 0, 
   }, 
   { 
     "22UCS635": 0, 
   }, 
   { 
     "22UCS636": 0, 
   }, 
   { 
     "22UCS637": 0, 
   }, 
   { 
     "22UCS638": 0, 
   }, 
   { 
     "22UCS639": 0, 
   }, 
   { 
     "22UCS640": 0, 
   }, 
   { 
     "22UCS641": 0, 
   }, 
   { 
     "22UCS642": 0, 
   }, 
   { 
     "22UCS643": 0, 
   }, 
   { 
     "22UCS644": 0, 
   }, 
   { 
     "22UCS645": 0, 
   }, 
   { 
     "22UCS646": 0, 
   }, 
   { 
     "22UCS647": 0, 
   }, 
   { 
     "22UCS648": 0, 
   }, 
   { 
     "22UCS649": 0, 
   }, 
   { 
     "22UCS650": 0, 
   }, 
   { 
     "22UCS651": 0, 
   }, 
   { 
     "22UCS652": 0, 
   }, 
   { 
     "22UCS653": 0, 
   }, 
   { 
     "22UCS654": 0, 
   }, 
   { 
     "22UCS655": 0, 
   }, 
   { 
     "22UCS656": 0, 
   }, 
   { 
     "22UCS657": 0, 
   }, 
   { 
     "22UCS658": 0, 
   }, 
   { 
     "22UCS659": 0, 
   }, 
   { 
     "22UCS660": 0, 
   }, 
   { 
     "22UCS661": 0, 
   }, 
   { 
     "22UCS662": 0, 
   }, 
   { 
     "22UCS663": 0, 
   }, 
   { 
     "22UCS664": 0, 
   }, 
   { 
     "22UCS665": 0, 
   }, 
   { 
     "22UCS666": 0, 
   }, 
   { 
     "22UCS667": 0, 
   }, 
   { 
     "22UCS668": 0, 
   }, 
   { 
     "22UCS669": 0, 
   }, 
 ]; 
 function UptateABS(){ 
    let a = 37 
    let newId = "22UCS6"+a; 
    newobj[a-1][newId] += 0.5 
    console.log(newobj) 
 }
  UptateABS()
 console.log(JSON.stringify(newobj))
 function downloadTextFile(text, filename) {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Usage example
const myText = JSON.stringify(newobj);
const myFilename = 'myFile.txt';
function btnwrk(){
downloadTextFile(myText, myFilename);
}

