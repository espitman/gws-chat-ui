<template>
  <!-- header starts -->
  <header id="header" class="main-header section-b-space">
    <div class="custom-container">
      <div class="header-panel">
        <div class="d-flex align-items-center gap-2">
          <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
            <i class="iconsax icon-btn" data-icon="text-align-left"> </i>
          </a>
        </div>
        <div class="d-flex align-items-center gap-2">
          <img class="img-fluid logo" src="/images/logo/mini-logo.png" alt="logo">
          <span class="fw-bold dark-text">Jabama</span>
        </div>

        <div class="d-flex align-items-center gap-sm-3 gap-2">
          <a href="#search-offcanvas" data-bs-toggle="offcanvas">
            <i class="iconsax icon-btn" data-icon="search-normal-2"> </i>
          </a>
          <div class="dropdown more-options dropdown-menu-end">
            <a class="btn dropdown-toggle mt-0 p-0" href="#" role="button" data-bs-toggle="dropdown">
              <i class="iconsax icon-btn" data-icon="menu-meatballs"> </i>
            </a>

            <ul class="dropdown-menu">
              <li><a href="new-group-contact.html" class="dropdown-item"> <i class="iconsax icon" data-icon="group"></i>
                New Group</a> </li>
              <li><a href="new-broadcast-contact.html" class="dropdown-item"><img class="icon" src="/images/svg/megaphone.svg" alt="megaphone"> New Broadcast </a>
              </li>
              <li><a href="starred-message.html" class="dropdown-item"> <i class="iconsax icon" data-icon="star"></i>
                Starred Message</a>
              </li>
              <li><a href="invite-people.html" class="dropdown-item"> <i class="iconsax icon" data-icon="add-square">
              </i>Invite a Friend</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header end -->
</template>

<script setup>
</script>
