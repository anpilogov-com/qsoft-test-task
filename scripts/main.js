window.onload = () => {
   userElementViewChenge();

   let input = document.querySelector("#search");

   input.oninput = function () {
      let value = this.value.trim();
      let list = document.querySelectorAll("ul li a");

      console.log(list);

      if (value) {
         list.forEach((item) => {
            if (item.ariaLabel.search(value) == -1) item.parentNode.classList.add("hidden");
         });
      } else {
         list.forEach((item) => item.parentNode.classList.remove("hidden"));
      }
   };
};

window.onresize = () => {
   userElementViewChenge();
};

function userElementViewChenge() {
   const VW = Math.max(document.documentElement.clientWidth);
   const USER__AVATAR__OUTLINE = "/images/user.svg";

   let userName = "Константин";
   let userAvatar = "/images/png/userAvatar.png";

   if (VW >= 768) {
      userElementView(userName, userAvatar);
   } else {
      userElementView("", USER__AVATAR__OUTLINE);
   }
}

function userElementView(nameString, avatarPath) {
   let elementUserName = document.getElementById("userName");
   let elementUserAvatar = document.getElementById("userAvatar");
   elementUserName.innerText = nameString;
   elementUserAvatar.setAttribute("src", avatarPath);
}
