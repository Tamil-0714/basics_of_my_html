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
  console.log("isdigned" + isSignedIn);
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
          console.log("folder avail");
        }
      } else {
        // console.log("not avail");
        createFolder();
      }
    });
}

function upload() {
    // set file metadata
    let text = document.querySelector("textarea");
    if(text.value != ""){
        const blob = new Blob([text.value],{type:'plain/text'});
        const parentFolder = localStorage.getItem('parent_folder');
        var metadata = {
            // name: 'backup-file'+String(Math.random()*10000).split('.'[0])+'.txt',
            name: 'backup-file.txt',
            mimeType: 'plain/text',
            parents: [parentFolder]
        };
        var formData = new FormData();
        formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        formData.append("file", blob);
        fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
        // set file as blob formate
            method: 'POST',
            headers: new Headers({ "Authorization": "Bearer " + gapi.auth.getToken().access_token }),
            body: formData
        }).then(function (response) {
            return response.json();
        }).then(function (value) {
            console.log(value);
            // file is uploaded
        });
    }
}


function createFolder(){
    let access_token = gapi.auth.getToken().access_token;
    let request = gapi.client.request({
        'path': 'drive/v2/files',
        'method': 'POST',
        'headers':{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token,
        },
        'body':{
            'title':'Backup Folder',
            'mimeType': 'application/vnd.google-apps.folder'
        }
    });
    request.execute(function(response){
        localStorage.setItem("parent_folder", response.id);
    })
}
