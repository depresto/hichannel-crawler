const { HiNetHichannel } = require("hinet-hichannel-taiwan-radio");

const hichannel = new HiNetHichannel(process.env.CHANNEL_NAME);

hichannel.loadApi().then(() => { //加載 HiNet hichannel API
  hichannel.playUrl().then(playUrl => {
      console.log(playUrl); //HiNet hichannel m3u8 串流網址 (string)
  }).catch(e => {
      console.error(e);
  });
}).catch(e => {
  console.error(e);
});