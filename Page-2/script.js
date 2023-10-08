let isSidebarOpen = false;

function toggleSidebar() {
  const body = document.getElementById("body");
  const sidebar = document.getElementById("sidebar");

  body.style.overflow = isSidebarOpen ? "auto" : "hidden";

  if (isSidebarOpen) {
    sidebar.classList.add("c-ctLKoP-izMBVv-css");
    sidebar.style.position = "";
    sidebar.style.transform = "";
  } else {
    sidebar.classList.remove("c-ctLKoP-izMBVv-css");
    sidebar.style.position = "fixed";
    sidebar.style.transform = "translateX(0px)";
  }

  isSidebarOpen = !isSidebarOpen;
}
