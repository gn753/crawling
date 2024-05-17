const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    const res = await axios.get("https://ssn.so/series/");
    console.log(res, "Res");
    return res;
  } catch (err) {
    console.log(err, err);
  }
};
const parsing = async () => {
  const html = await getHtml();
  const $ = cheerio.load(html.data);
  const $list = $(".product");

  let list = [];
  $list.each((index, node) => {
    const title = $(node).find(".product-title h3 > a").text();
    console.log(title);
  });
};
parsing();
