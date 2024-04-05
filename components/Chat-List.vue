<template>

  <!-- chat section starts -->
  <section class="chat-section">
    <div class="custom-container">
      <h6 class="content-color fw-medium">Chat (2)</h6>

      <ul class="chat-list">
        <li>
          <nuxt-link to="group-chat" class="chat-list-box">
            <div class="chat-list-image">
              <img class="img-fluid img" src="/images/profile/p8.png" alt="p2">
            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Weekend Plan</h5>
                <h6>11:30 PM</h6>
              </div>
              <div class="content">
                <div class="d-flex align-items-center justify-content-between gap-2">
                  <p><span>Sima : </span> is there any plan on this Weekend </p>
                  <img class="img-fluid icon" src="/images/svg/pin.svg" alt="pin">
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="private-chat" class="chat-list-box">
            <div class="chat-list-image">
              <img class="img-fluid img with-story" src="/images/profile/p2.png" alt="p2">
            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Albert Flores</h5>
                <h6 class="success-color">Just Now</h6>
              </div>
              <div class="content">
                <div class="d-flex align-items-center justify-content-between gap-2">
                  <p><span> <img class="img-fluid icon" src="/images/svg/tick-all.svg" alt="pin"></span>
                    This
                    is nice, i love it <span> <img class="img-fluid icon" src="/images/svg/heart.svg" alt="pin"></span> </p>
                  <img class="img-fluid icon" src="/images/svg/mute.svg" alt="pin">
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="private-chat" class="chat-list-box">
            <div class="chat-list-image online">
              <img class="img-fluid img" src="/images/profile/p3.png" alt="p2">

            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Ann Thomas</h5>
                <h6 class="success-color">12:55 AM</h6>
              </div>
              <div class="content">
                <div class="d-flex align-items-center justify-content-between gap-2">
                  <p>What are you doing now ?</p>
                  <h6 class="count">1</h6>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="private-chat" class="chat-list-box">
            <div class="chat-list-image online">
              <img class="img-fluid img" src="/images/profile/p9.png" alt="p2">

            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Guy Hawkins</h5>
                <h6>Yesterday</h6>
              </div>
              <div class="content">
                <p class="typing success-color fw-semibold">
                  Typing
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="private-chat" class="chat-list-box">
            <div class="chat-list-image">
              <img class="img-fluid img with-story" src="/images/profile/p5.png" alt="p2">

            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Edward Turner</h5>
                <h6>13/12/2023</h6>
              </div>
              <div class="content">
                <div class="d-flex align-items-center justify-content-between gap-2">
                  <p><span> <img class="img-fluid icon" src="/images/svg/gallery.svg" alt="gallery">
                    </span>Sent
                    you image </p>
                  <h6 class="count">1</h6>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="group-chat" class="chat-list-box">
            <div class="chat-list-image">
              <img class="img-fluid img" src="/images/profile/p10.png" alt="p2">
            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Great Thoughts</h5>
                <h6>11:30 PM</h6>
              </div>
              <div class="content">
                <div class="d-flex align-items-center justify-content-between gap-2">
                  <p><span>You : </span> This is COOL </p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="private-chat" class="chat-list-box">
            <div class="chat-list-image">
              <img class="img-fluid img" src="/images/profile/p6.png" alt="p2">
            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">Joseph James</h5>
                <h6>11/12/2023</h6>
              </div>
              <div class="content">
                <div class="d-flex align-items-center justify-content-between gap-2">
                  <p><span> <img class="img-fluid icon" src="/images/svg/tick.svg" alt="pin"></span> This
                    is
                    COOL </p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
  <!-- chat section end -->

</template>
