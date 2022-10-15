const NavigationSidebar = (active) => {
  const tabs = [
    {
      icon: "bi bi-align-top",
      title: "Tuiter",
      href: "/",
    },
    {
      icon: "bi bi-house-door-fill",
      title: "Home",
      href: "/tuiter/home",
    },
    {
      icon: "bi bi-hash",
      title: "Explore",
      href: "/tuiter/explore",
    },
    {
      icon: "bi bi-bell-fill",
      title: "Notifications",
      href: "/",
    },
    {
      icon: "bi bi-envelope-fill",
      title: "Messages",
      href: "/",
    },
    {
      icon: "bi bi-bookmark-fill",
      title: "Bookmarks",
      href: "/",
    },
    {
      icon: "bi bi-list-ul",
      title: "Lists",
      href: "/",
    },
    {
      icon: "bi bi-person-fill",
      title: "Profile",
      href: "/",
    },
    {
      icon: "bi bi-filter-circle-fill",
      title: "More",
      href: "/",
    },
  ];
  return (`
  <div class="list-group">

  ${tabs.map(tab => {
    if (tab.title.toLowerCase() == active) {
      return (`
        <a class="list-group-item active wd-list-flex " href="${tab.href}">
          <i class="${tab.icon} wd-icon-width mt-1"></i>  <div class=" d-none d-xl-block wd-icon-text">${tab.title}</div
        </a>
      `)
    }
    return (`
    <a class="list-group-item wd-list-flex " href="${tab.href}">
      <i class="${tab.icon} wd-icon-width  mt-1"></i>  <div class=" d-none d-xl-block wd-icon-text">${tab.title}</div
    </a>
  `)
  }).join('')
    }
</div>
<div class="d-grid mt-2">
    <a href="/tuitertuit.html" class="btn btn-primary btn-block rounded-pill"> Tuit</a>
</div>

  `);
}
$('#wd-navigation').append(NavigationSidebar());
export default NavigationSidebar;

