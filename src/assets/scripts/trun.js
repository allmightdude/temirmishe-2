import { truncate } from "@helper/utils";

var elms = document.querySelectorAll("[trun]");

elms.forEach((i) => {
  i.innerHTML = truncate(i.innerHTML);
});
