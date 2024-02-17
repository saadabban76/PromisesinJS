var orderAccepted = false;
var isDriverFound = false;
var restaurentSeen = false;

window.addEventListener("load", () => {
  let timeStatus = document.getElementById("currentStatus");

  document.getElementById("acceptOrder").addEventListener("click", () => {
    orderAccepted = confirm("accept order ? ");
    restaurentSeen = true;
  });

  let responseFromRes = waitingForRestaurentResponse();
  responseFromRes
    .then((res) => {
      setTimeout(() => {
        timeStatus.innerText = res; // updates orderStatus
      }, 2000);
    })
    .catch((err) => {
      alert("something went wrong");
    });
});

const waitingForRestaurentResponse = () => {
  // Promises are the tasks that are running in the background parrelly/asynchorously and when they are done computing, they will send you the response/resolve it, if not the it will throw you with the reject output.
  return new Promise((resolve, reject) => {
    let waiting = setInterval(() => {
      console.log("checking if restaurent has accepted the order or not !");
      if (!restaurentSeen) return;

      try {
        if (!orderAccepted)
          resolve("Order Not Accepted, your payment  will be returned ASAP !");
        else {
          resolve("We are preparing you order 🍳");
          preparingOrder();
        }
      } catch (e) {
        reject(e);
      }

      clearInterval(waiting);
    }, 5000);
  });
};

const preparingOrder = async () => {
  Promise.all([
    // updateOrderStatus() : this is already been done in line 17.
    updateMapView(),
    await checkIfDriverAssigned(),
    await checkIfOrderDelivered()
  ])
    .then((res) => {
      console.log("res ; ", res);
      setTimeout(() => {
        alert(
          "rate us how was the food  ? \n we would love to hear from you :) "
        );
      }, 2000);
    })
    .catch((err) => {
      console.log("errro : ", err);
    });
};

function updateMapView() {
  let mapView = document.getElementById("mapview");
  mapView.style.opacity = 1; // this removes the blur effect from the map
  return "updated the map view ";
}

async function checkIfDriverAssigned() {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res("getting the driveres......");
      }, 2000);
    } catch (err) {
      console.log("err : ", err);
      rej("I dont know the reason why this thing failed !");
    }
  });
}

async function checkIfOrderDelivered() {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res("checknig if delivery is orderd ......");
      }, 2000);
    } catch (err) {
      console.log("err : ", err);
      rej("I dont know the reason why this thing failed !");
    }
  });
}
