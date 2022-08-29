import fetch from 'node-fetch';
import { load } from 'cheerio';


const URL = "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts";

const response = await fetch(URL);
const body =  await response.text();

let $ = load(body);

$('tr').each((_, e) => {
    let row  = $(e).text().replace(/(\s+)/g, ' ');
    //console.log(`${row}`);
});


let regex = /[0-9]/;
let date = $('.datatable-current-date').text().trim();
let index = date.search(regex);
date = date.slice(index);
console.log(date);
//console.log(date.slice(date[date.search(regex)]));
