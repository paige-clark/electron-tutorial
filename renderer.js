const information = document.getElementById("info");
information.innerText = `This app is using Chrome v${versions.chrome()}, node.js vv${versions.node()} and Electron vv${versions.electron()}`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
  information.innerText += response;
};

func();
