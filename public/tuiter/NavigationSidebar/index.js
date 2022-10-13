const NavigationSidebar = (active) => {
  const tabs = [
    {
      "icon": "fa-solid fa-t",
      "title": "",
      "href": "/",
    },
    {
      "icon": "fa-solid fa-house",
      "title": "Home",
      "href": "/tuiter/HomeScreen/index.html",
    },
    {
      "icon": "fa fa-hashtag",
      "title": "Explore",
      "href": "/tuiter/ExploreScreen/index.html"
    },
    {
      "icon": "fa-solid fa-bell",
      "title": "Notifications",
      "href": "/"
    },
    {
      "icon": "fa-solid fa-envelope",
      "title": "Messages",
      "href": "/",
    },
    {
      "icon": "fa-solid fa-bookmark",
      "title": "Bookmarks",
      "href": "/tuiter/bookmarks/index.html",
    },
    {
      "icon": "fa-solid fa-list",
      "title": "Lists",
      "href": "/",
    },
    {
      "icon": "fa-solid fa-user",
      "title": "Profile",
      "href": "/tuiter/profile.html",
    },
    {
      "icon": "fa-solid fa-circle",
      "title": "More",
      "href": "/",
    }
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

