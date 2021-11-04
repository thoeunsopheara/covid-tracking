import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

async function addContent(){
  const { Countries: countries } = await $.get('https://api.covid19api.com/summary');

  const dom = $('#countries');
  let html = '';
  for(let country of countries){
    const { 
      Country,
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths
      } = country;
    html += `
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-5">
      <div class="card bg-dark text-white">
        <h5 class="card-header card-title text-center">${Country}</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-6"><h6>Country</h6></div>
            <div class="col-6"><h6>: <span>${Country}</span></h6></div>
          </div>
          <div class="row">
            <div class="col-6"><h6>New case</h6></div>
            <div class="col-6"><h6>: <span>${NewConfirmed}</span></h6></div>
          </div>
          <div class="row">
            <div class="col-6"><h6>Total Case</h6></div>
            <div class="col-6"><h6>: <span>${TotalConfirmed}</span></h6></div>
          </div>
          <div class="row">
            <div class="col-6"><h6>New death</h6></div>
            <div class="col-6"><h6>: <span>${NewDeaths}</span></h6></div>
          </div>
          <div class="row">
            <div class="col-6"><h6>Total death</h6></div>
            <div class="col-6"><h6>: <span>${TotalDeaths}</span></h6></div>
          </div>
          
        </div>
      </div>
      </div>
    `; 
  }
  dom.html(html);
}

function setCopyright(){
  const year = new Date().getFullYear();
  const html = `&copy; ${year} Copyright`;
  $('#copyright').html(html);
}

addContent();
setCopyright();