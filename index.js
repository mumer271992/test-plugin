// import "amazon-connect-streams";

// var instanceURL = 'https://pak-venture.awsapps.com/connect/ccp-v2/';
// var bus;

// function initCCP(activeWindow) {
//   // initialize the ccp
//   window.connect.core.initCCP(document.getElementById('containerDiv'), {
//     ccpUrl: instanceURL,
//     loginPopup: true,
//     loginPopupAutoClose: true,
//     region: 'eu-central-1',
//     softphone: {
//       allowFramedSoftphone: true,
//       disableRingtone: false,
//       ringtoneUrl: './ringtone.mp3'
//     }
//   });
//   bus = window.connect.core.getEventBus();
//   bus.subscribe(window.connect.AgentEvents.INIT, () => {
//     console.log("CCP Initiaalized...");
//     activeWindow(true);
//   });
// };

// export const printGreetrings = function() {
//     console.log("Hi, Bob from my test plugin FUCK YOU...");
// };

// export const init = function() {
//     console.log("CCP Initiaalizing...");
//     const container = document.createElement('div');
//     container.setAttribute("id", "aws-ccp-container");
//     document.body.appendChild(container);
//     initCCP();
// };

export default (function() {
  console.log("Initialzied from IIFE ...");
})();