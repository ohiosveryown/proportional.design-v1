const timeOfDay = () => {
  const bdy = document.body
  const time = document.querySelector(".time")
  let currentTime = new Date().getHours()

  if (currentTime >= 7 && currentTime < 12) {
    console.log("it's morning time ⛅")
    time.innerText = "Good Morning ⛅"
    bdy.style.cssText = `
        background: linear-gradient(135deg, #FEFCEA 0%, #52ACFF 67.19%, #1D74C5 100%);
        color: #0e0e0f;
      `
  } else if (currentTime >= 12 && currentTime < 17) {
    console.log("it's the afternoon ☀️")
    time.innerText = "Good Afternoon ☀️"
    bdy.style.cssText = `
        background: linear-gradient(135deg, #FEF1EA 0%, #4296E4 66.67%, #2E6BA4 100%);
        color: #0e0e0f;
      `
  } else if (currentTime >= 17 && currentTime < 20) {
    console.log("it's dusk 🌇")
    time.innerText = "Good Evening 🌇"
    bdy.style.cssText = `
        background: linear-gradient(135deg, #A7478F 0.04%, #4E2980 25.52%, #281876 100%);
        color: #fff;
      `
  } else if (currentTime >= 20 && currentTime <= 24) {
    console.log("it's night 🌙")
    time.innerText = "Good Night 🌙"
    bdy.style.cssText = `
        background: linear-gradient(135deg, rgba(125,85,187,1) 0%, rgba(22,41,73,1) 15%, rgba(1,10,24,1) 70%);
        color: #fff;
      `
  } else {
    console.log("it's still night 🌗")
    time.innerText = "Good Night 🌗"
    bdy.style.cssText = `
        background: linear-gradient(135deg, #4A68A4 0.04%, #1C3357 25.52%, #031024 100%);
        color: #fff;
      `
  }
}
