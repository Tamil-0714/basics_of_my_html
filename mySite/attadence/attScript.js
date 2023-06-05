window.onload = handleClientLoaded;

let CLIENT_ID =
  "490832033118-c6hnmivsm64vk8d0ckvptb51arov9fsv.apps.googleusercontent.com";
let API_KEY = "AIzaSyDrBiHtdj3TCg5T8dp4dGhaUl-C9MVOTZk";
let DISCOVER_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
let SCOPES = "https://www.googleapis.com/auth/drive";
let PLUGIN_NAME = "sign in";
let signinButton = document.querySelector(".signin");
let signoutButton = document.querySelector(".signout");
function handleClientLoaded() {
  gapi.load("client:auth2", initClient);
}

function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVER_DOCS,
      scope: SCOPES,
      plugin_name: PLUGIN_NAME,
    })
    .then(
      function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(uptateSigninStatus);

        uptateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        signinButton.onclick = handleSignin;
        signoutButton.onclick = handleSignout;
      },
      function (error) {
        console.error(error);
      }
    );
}

function uptateSigninStatus(isSignedIn) {
  // console.log("isdigned" + isSignedIn);
  if (isSignedIn) {
    signinButton.style.display = "none";
    signoutButton.style.display = "block";
    checkFolder();
  } else {
    signinButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

function handleSignin() {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignout() {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    location.reload();
  });
  auth2.disconnect();
}

function checkFolder() {
  gapi.client.drive.files
    .list({
      q: 'name = "Backup Folder"',
    })
    .then(function (response) {
      let files = response.result.files;
      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          localStorage.setItem("parent_folder", file.id);
          showList();
          // console.log("folder avail");
        }
      } else {
        // console.log("not avail");
        createFolder();
      }
    });
}

// function getCurrentDateTime() {
//   const now = new Date();
//   const formattedDate = now.toLocaleDateString().replaceAll("/", "-");
//   const formattedTime = now.toLocaleTimeString().replaceAll(":", "-");
//   return `${formattedDate}_${formattedTime}`;
// }
function getCurrentDateTime() {
  const now = new Date();

  const date = now.getDate();
  const month = now.getMonth() + 1; // Months are zero-based, so add 1
  const year = now.getFullYear();
  let hours = now.getHours();
  if(hours>12) hours -=12;
  const minutes = now.getMinutes();

  // Add leading zeros if necessary
  const formattedDate = padZero(date);
  const formattedMonth = padZero(month);
  const formattedYear = padZero(year);
  const formattedHours = padZero(hours);
  const formattedMinutes = padZero(minutes);

  const dateTimeString = `${formattedDate}-${formattedMonth}-${formattedYear}_${formattedHours}-${formattedMinutes}`;

  return dateTimeString;
}

function padZero(value) {
  return value.toString().padStart(2, '0');
}

function upload(textX) {
  // set file metadata
  // let text = document.querySelector("textarea");
  // console.log("in upload func"+textX)
   let text = String(textX);
  const blob = new Blob([text], { type: "plain/text" });
  const parentFolder = localStorage.getItem("parent_folder");
  var metadata = {
    name: "Data of -  " + getCurrentDateTime() + ".txt",
    // name: "backup-file.txt",
    mimeType: "plain/text",
    parents: [parentFolder],
  };
  var formData = new FormData();
  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  formData.append("file", blob);
  fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    {
      // set file as blob formate
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + gapi.auth.getToken().access_token,
      }),
      body: formData,
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (value) {
      // console.log(value);
      location.reload();
      // file is uploaded
    });
}

function createFolder() {
  let access_token = gapi.auth.getToken().access_token;
  let request = gapi.client.request({
    path: "drive/v2/files",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    body: {
      title: "Backup Folder",
      mimeType: "application/vnd.google-apps.folder",
    },
  });
  request.execute(function (response) {
    localStorage.setItem("parent_folder", response.id);
  });
}

let expandContainer = document.querySelector(".expand-container");
let expandContainerUl = document.querySelector(".expand-container ul");
let listContainer = document.querySelector(".list ul");
// function expand(v) {
//   let click_position = v.getBoundingClientRect();
//   if (expandContainer.style.display == "block") {
//     expandContainer.style.display = "none";
//     expandContainerUl.setAttribute("data-id", "");
//     expandContainerUl.setAttribute("data-name", "");
//   } else {
//     expandContainer.style.display = "block";
//     expandContainer.style.left =
//       click_position.left + window.scrollX - 120 + "px";
//     expandContainer.style.top = click_position.top + window.scrollY + 35 + "px";
//     expandContainerUl.setAttribute(
//       "data-id",
//       v.parentElement.getAttribute("data-id")
//     );
//     expandContainerUl.setAttribute(
//       "data-name",
//       v.parentElement.getAttribute("data-name")
//     );
//   }
// }
function expand(v) {
    const expandContainer = document.querySelector(".expand-container");
    const expandContainerUl = expandContainer.querySelector("ul");
    let click_position = v.getBoundingClientRect();
  
    if (expandContainer.style.opacity === "1") {
      expandContainer.style.height = "0px";
      expandContainer.style.opacity = "0";
      setTimeout(() => {
        expandContainer.style.display = "none";
        expandContainerUl.setAttribute("data-id", "");
        expandContainerUl.setAttribute("data-name", "");
      }, 400); // Delay to match the transition duration
    } else {
      expandContainer.style.display = "block";
      expandContainer.style.left = click_position.left + window.scrollX - 120 + "px";
      expandContainer.style.top = click_position.top + window.scrollY + 35 + "px";
      expandContainerUl.setAttribute("data-id", v.parentElement.getAttribute("data-id"));
      expandContainerUl.setAttribute("data-name", v.parentElement.getAttribute("data-name"));
      setTimeout(() => {
        expandContainer.style.height = "auto";
        expandContainer.style.opacity = "1";
      }, 0); // Delay to allow the display property to take effect before applying height and opacity
    }
  }
  
function showList() {
  gapi.client.drive.files
    .list({
      // 'q': `parents is "${localStorage.getItem("parent_folder")}"`
      q: `'${localStorage.getItem("parent_folder")}' in parents`,
    })
    .then(function (response) {
      let files = response.result.files;
      if (files && files.length > 0) {
        listContainer.innerHTML = "";
        for (let i = 0; i < files.length; i++) {
          listContainer.innerHTML += `
          <li data-id="${files[i].id}" data-name="${files[i].name}">
            <span>${files[i].name}</span>
            <svg onclick="expand(this)" xmlns="http://www.w3.org/2000/svg" id="arrow" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
          </li>
          `;
        }
      } else {
        listContainer.innerHTML = `<div style="text-align: center;">no files</div>`;
      }
    });
}

let oldData;
let newobj;
let ansstr = "";
function readEditDownload(v, condition) {
  let id = v.parentElement.getAttribute("data-id");
  let name = v.parentElement.getAttribute("data-name");
  v.innerHTML = "....";
  gapi.client.drive.files
    .get({
      fileId: id,
      alt: "media",
    })
    .then(function (res) {
      expandContainer.style.display = "none";
      expandContainerUl.setAttribute("data-id", "");
      expandContainerUl.setAttribute("data-name", "");
      if (condition == "read") {
        v.innerHTML = "Read";
        document.querySelector("textarea").value = res.body;
        document.documentElement.scrollTop = 0;
      } else if (condition == "ChooseThis") {
        v.innerHTML = "Choose This";
        oldData = res.body;
        newobj = JSON.parse(oldData);
        document.querySelector(".chosed-file").innerHTML = name;
        document.querySelector("textarea").value = "";
        document.documentElement.scrollTop = 0;
      }else if(condition == "display"){
        localStorage.setItem("attadence_data", res.body);
        window.location.href = "display.html";
      }
    });
}

let input = document.querySelector("textarea");
function UptateABS(DNO) {
  let newId = "22UCS6" + DNO;
  newobj[DNO - 1][newId] += 0.5;
}

document.querySelector(".upload").addEventListener("click", btnwrk);

function btnwrk() {
  if (validateString(input.value) && input.value != "" && newobj != undefined) {
    let Dnos = input.value.split(",");
    Dnos.forEach((x) => {
      UptateABS(x);
    });
    newobj.forEach((obj) => {
      let keys = Object.keys(obj);
      let values = Object.values(obj);
      let str1 = keys[0];
      let str2 = values[0];
      let ans = `${str1} - ${str2} \n\n`;
      ansstr += ans;
    });
    // console.log(ansstr);
    upload(JSON.stringify(newobj));
  } else {
    alert("something wrong  may be invalid input or Chosed file undefined");
  }
}

function validateString(str) {
  var pattern = /^[\d,]+$/; // Regular expression pattern

  if (pattern.test(str)) {
    return true;
  } else {
    return false;
  }
}
