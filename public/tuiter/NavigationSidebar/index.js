const NavigationSidebar = () => {
  console.log('call')
  return (`
  <div class="col">
  <ul class="p-0">
  <li class="list-group-item bg-black text-white mb-3">
  <h2><i class="fa-solid fa-t "></i></h2>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <i class="fa-solid fa-house-chimney wd-icon"></i>
  <div class="d-none d-xl-block wd-icon-text">Home</div>
</li>

<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <i class="fa-regular fa-hashtag wd-icon"></i>
  <div class=" d-none d-xl-block wd-icon-text">Explore</div>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <i class="fa-regular fa-bell wd-icon"></i>
  <div class="d-none d-xl-block wd-icon-text">Notifications</div>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
      </svg>
  </div>
  <div class="d-none d-xl-block wd-icon-text">Messages</div>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <i class="fa-regular fa-bookmark wd-icon"></i>
  <div class="d-none d-xl-block wd-icon-text">Bookmarks</div>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <i class="fa fa-list wd-icon"></i>
  <div class="d-none d-xl-block wd-icon-text">Lists</div>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <i class="fa-regular fa-user wd-icon"></i>
  <div class="d-none d-xl-block wd-icon-text">Profile</div>
</li>
<li class="list-group-item wd-list-flex bg-black text-white mb-3">
  <span class="icon-place icon-pos">
      <i class="fa-regular fa-circle fa-stack-1x"></i>
      <i class="fa fa-ellipsis fa-stack-1x fa-inverse"></i>
  </span>
  <div class="d-none d-xl-block wd-icon-text">More
  </div>
</li>

</ul>
<ul class="list-group mt-4 ">
<button class=" btn btn-primary wd-tweet tuit-bg">
  Tuit
</button>
</ul>
    </div>
    `);
}
$('#wd-navigation').append(NavigationSidebar())
export default NavigationSidebar;

