$(document).ready(function () {

  $("#btn-search").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    email = $('input[type="text"]').val().toLowerCase();

    var x, y;
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
    } else {
      x = false;
    }
    // set loader true;
    let loader = false;
    if (x === true) {
      loader = true;
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
          loader = false;
        })
        .catch((e) => console.log(e));
    } else if (x !== true) {
      document.querySelector('input[type="text"]').parentNode.classList.add("error");
    }

    if (loader) {
      $('.above-the-fold').remove();
      $('.search-again').remove();
      document.querySelector('section').innerHTML = `<div class='loader'>
        <img alt='Loader' src='img/loading_spinner.svg'/>
        <p class='loader-text'>Please wait a moment...</p>
      </div>`;
      document.querySelector('section').style.background = "#F8F8F8";
      document.querySelector('section').style.height = "896px"
    }
  });

  $("#btn-search-phone").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    phone = $('input[type="number"]').val();

    var x;
    if (phone.length == 10) {
      x = true;
    } else {
      x = false;
    }
    // set loader true;
    let loader = false;
    if (x === true) {
      loader = true;
      document.querySelector('input[type="number"]').parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
          loader = false;
        })
        .catch((e) => console.log(e));
    } else if (x !== true) {
      document.querySelector('input[type="number"]').parentNode.classList.add("error");
    }

    if (loader) {
      $('.above-the-fold').remove();
      $('.search-again').remove();
      document.querySelector('section').innerHTML = `<div class='loader'>
        <img alt='Loader' src='img/loading_spinner.svg'/>
        <p class='loader-text'>Please wait a moment...</p>
      </div>`;
      document.querySelector('section').style.background = "#F8F8F8";
      document.querySelector('section').style.height = "896px"
    }
  });

  $('input[type="text"]').keypress(function (event) {
    email = $('input[type="text"]').val().toLowerCase();
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
    } else {
      x = false;
    }
    keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request

      var x, y;

      // set loader true;
      let loader = false;
      if (x === true) {
        loader = true;
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
            loader = false;
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('input[type="text"]').parentNode.classList.add("error");
      }

      if (loader) {
        $('.above-the-fold').remove();
        $('.search-again').remove();
        document.querySelector('section').innerHTML = `<div class='loader'>
          <img alt='Loader' src='img/loading_spinner.svg'/>
          <p class='loader-text'>Please wait a moment...</p>
        </div>`;
        document.querySelector('section').style.background = "#F8F8F8";
        document.querySelector('section').style.height = "896px"
      }
    }
  });

  $('input[type="number"]').keypress(function (event) {
    phone = $('input[type="number"]').val();
    if (phone.length == 10) {
      x = true;
      document.querySelector('input[type="number"]').parentNode.classList.remove("error");
    } else {
      x = false;
    }
    keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific phone address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request

      var x;

      // set loader true;
      let loader = false;
      if (x === true) {
        loader = true;
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
            loader = false;
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('input[type="number"]').parentNode.classList.add("error");
      }

      if (loader) {
        $('.above-the-fold').remove();
        $('.search-again').remove();
        document.querySelector('section').innerHTML = `<div class='loader'>
          <img alt='Loader' src='img/loading_spinner.svg'/>
          <p class='loader-text'>Please wait a moment...</p>
        </div>`;
        document.querySelector('section').style.background = "#F8F8F8";
        document.querySelector('section').style.height = "896px"
      }
    }
  });

});

function openForm(evt, tabId) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  console.log("tabId", tabId, document.getElementById(tabId))
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}
