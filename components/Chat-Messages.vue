<template>
  <section class="section-lg-b-space position-relative pt-0">
    <img class="img-fluid chat-bg" src="/images/wallpaper0.png" alt="wallpaper">
    <div class="custom-container">

      <h6 class="fw-normal content-color text-center heading pt-4">Today 11:45 AM</h6>
      <ul class="message-box-list">
        <li class="new">
          <a href="#" onclick="myFunction(this, '--theme-color')" id="message">
            <div class="message-box">
              <img class="img-fluid person-img" src="/images/p9.png" alt="p9">

              <div class="message-box-details">
                <h5>Let’s go on a vacation, i have exciting vacation plans ! </h5>
                <div class="timing">
                  <img class="img-fluid" src="/images/star-fill.svg" alt="star">
                  <h6>11:45 AM</h6>
                </div>
              </div>
            </div>
          </a>
        </li>

        <li class="personal">
          <div class="message-box read">
            <div class="message-box-details">
              <h5>Let’s go, but what’s the plan ?</h5>
              <div class="timing">
                <h6>11:45 AM</h6>
                <img class="img-fluid tick" src="/images/tick.svg" alt="tick">
                <img class="img-fluid tick-all" src="/images/tick-all.svg" alt="tick">
              </div>
            </div>
          </div>
        </li>

        <li class="new">
          <div class="message-box read">
            <img class="img-fluid person-img" src="/images/p9.png" alt="p9">

            <div class="message-box-details">
              <ul class="media-img">
                <li class="p-0">
                  <img class="img-fluid img-thumbnail img1" src="/images/chat-img1.png" alt="img1">
                </li>
                <li class="p-0">
                  <img class="img-fluid img-thumbnail img2" src="/images/chat-img2.png" alt="img1">
                </li>

                <li class="p-0">
                  <img class="img-fluid img-thumbnail img3" src="/images/chat-img3.png" alt="img1">
                </li>

                <li class="p-0">
                  <img class="img-fluid img-thumbnail img4" src="/images/chat-img4.png" alt="img1">
                  <span>10+</span>
                </li>
              </ul>
              <h5 class="mt-2">I’ve vacation plan in Goa for next week.</h5>
              <div class="timing">
                <h6>11:45 AM</h6>
              </div>
              <img class="img-fluid reaction" src="/images/heart.svg" alt="heart">
            </div>
          </div>
          <a href="contact-list.html">
            <img class="replay-btn" src="/images/reply.svg" alt="reply">
          </a>
        </li>

        <li class="personal">
          <div class="message-box read">
            <div class="message-box-details">
              <h5>Wow Look amazing...</h5>
              <div class="timing">
                <img class="img-fluid star" src="/images/star-fill.svg" alt="star">
                <h6>11:45 AM</h6>
                <img class="img-fluid tick" src="/images/tick.svg" alt="tick">
                <img class="img-fluid tick-all" src="/images/tick-all.svg" alt="tick">
              </div>
            </div>
          </div>
        </li>

        <li class="new">
          <div class="message-box message-typing">
            <img class="img-fluid person-img" src="/images/p9.png" alt="p9">

            <div class="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
