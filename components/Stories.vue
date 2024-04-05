<template>
  <!-- story section starts -->
  <div>

    <!-- story section start -->
    <div class="story-slider">
      <div data-slide="slide" class="slider">
        <div class="slider-items">
          <img class="img-fluid story-img active" src="/assets/images/story-img.png" alt="story-img">
          <img class="img-fluid story-img" src="/assets/images/story-img.png" alt="story-img">
          <img class="img-fluid story-img" src="/assets/images/story-img.png" alt="story-img">
        </div>

        <nav class="slider-nav">
          <div class="slider-thumb"></div>
          <button class="slider-prev">Previous</button>
          <button class="slider-next">Next</button>
        </nav>
      </div>
    </div>
    <!-- story section end -->


    <section class="story-section pt-0">
      <div class="left-container">
        <h6 class="content-color fw-medium">Recent Update</h6>

        <div class="swiper story-box">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="profile-story-box">
                <img class="img-fluid person-img" src="/images/profile/p1.png" alt="p1">
                <h5>My Story</h5>
                <div class="add-story">+</div>
              </div>
            </div>

            <div class="swiper-slide">
              <button data-bs-toggle="modal" data-bs-target="#friend-story" type="button" class="btn profile-story-box read p-0 border-0">
                <img class="img-fluid person-img" src="/images/profile/p2.png" alt="p2">
                Michael
              </button>
            </div>

            <div class="swiper-slide">
              <button data-bs-toggle="modal" data-bs-target="#friend-story" type="button" class="btn profile-story-box read p-0 border-0">
                <img class="img-fluid person-img" src="/images/profile/p3.png" alt="p3">
                Kristin
              </button>
            </div>

            <div class="swiper-slide">
              <button data-bs-toggle="modal" data-bs-target="#friend-story" type="button" class="btn profile-story-box read p-0 border-0">
                <img class="img-fluid person-img" src="/images/profile/p4.png" alt="p4">
                Trunk
              </button>
            </div>


            <div class="swiper-slide">
              <button data-bs-toggle="modal" data-bs-target="#friend-story" type="button" class="btn profile-story-box read p-0 border-0">
                <img class="img-fluid person-img" src="/images/profile/p5.png" alt="p5">
                Johnny
              </button>
            </div>

            <div class="swiper-slide">
              <button data-bs-toggle="modal" data-bs-target="#friend-story" type="button" class="btn profile-story-box read p-0 border-0">
                <img class="img-fluid person-img" src="/images/profile/p6.png" alt="p5">
                John

              </button>
            </div>

            <div class="swiper-slide">
              <button data-bs-toggle="modal" data-bs-target="#friend-story" type="button" class="btn profile-story-box read p-0 border-0">
                <img class="img-fluid person-img" src="/images/profile/p7.png" alt="p5">
                kelly

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div class="modal fade add-modal" id="add-story-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Add Story</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <ul class="story-list">
              <li>
                <div class="story-types-box">
                  <div class="story-image">
                    <img src="/images/icons/gallery.png" alt="gallery">
                  </div>
                  <h5>Select From Gallery</h5>
                </div>
              </li>
              <li>
                <div class="story-types-box">
                  <div class="story-image">
                    <img src="/images/icons/camera.png" alt="camera">
                  </div>
                  <h5>Open Camera</h5>
                </div>
              </li>
              <li>
                <div class="story-types-box">
                  <div class="story-image">
                    <img src="/images/icons/text.png" alt="text">
                  </div>
                  <h5>Write Text</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- add story modal end  -->

    <!-- friend story modal starts -->
    <div class="modal fade story-modal" id="friend-story" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-body">
            <div class="swiper story__slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide position-relative">
                  <img class="img-fluid story-img" src="/images/story-img1.png" alt="story-img">
                  <div class="story-person-content">
                    <div class="d-flex align-items-center gap-2">
                      <div class="story-person-img">
                        <img class="img-fluid person-icon" src="/images/profile/p2.png" alt="p2">
                      </div>
                      <h3> Albert Flores</h3>
                      <h6>10 min ago</h6>
                    </div>
                    <a href="#" data-bs-dismiss="modal">
                      <i class="iconsax close-btn" data-icon="add"> </i>
                    </a>
                  </div>

                  <form class="message-inputarea">
                    <input type="text" class="message-input" placeholder="Type here...">
                    <img class="img-fluid smile" src="/images/svg/smile.svg" alt="">
                    <i class="iconsax file" data-icon="paperclip-2"> </i>
                    <i class="iconsax mic" data-icon="mic-2"> </i>

                    <a href="home.html" type="button" class="message-send-btn">
                      <i class="iconsax icon-btn" data-icon="send-2"> </i>
                    </a>
                  </form>
                </div>
                <div class="swiper-slide">
                  <img class="img-fluid story-img" src="/images/story-img2.png" alt="story-img">
                  <div class="story-person-content">
                    <div class="d-flex align-items-center gap-2">
                      <div class="story-person-img">
                        <img class="img-fluid person-icon" src="/images/profile/p2.png" alt="p2">
                      </div>
                      <h3> Albert Flores</h3>
                      <h6>10 min ago</h6>
                    </div>
                    <a href="#" data-bs-dismiss="modal">
                      <i class="iconsax close-btn" data-icon="add"> </i>
                    </a>
                  </div>

                  <form class="message-inputarea">
                    <input type="text" class="message-input" placeholder="Type here...">
                    <img class="img-fluid smile" src="/images/svg/smile.svg" alt="">
                    <i class="iconsax file" data-icon="paperclip-2"> </i>
                    <i class="iconsax mic" data-icon="mic-2"> </i>

                    <a href="home.html" type="button" class="message-send-btn">
                      <i class="iconsax icon-btn" data-icon="send-2"> </i>
                    </a>
                  </form>
                </div>
                <div class="swiper-slide">
                  <img class="img-fluid story-img" src="/images/story-img3.png" alt="story-img">
                  <div class="story-person-content">
                    <div class="d-flex align-items-center gap-2">
                      <div class="story-person-img">
                        <img class="img-fluid person-icon" src="/images/profile/p2.png" alt="p2">
                      </div>
                      <h3> Albert Flores</h3>
                      <h6>10 min ago</h6>
                    </div>
                    <a href="#" data-bs-dismiss="modal">
                      <i class="iconsax close-btn" data-icon="add"> </i>
                    </a>
                  </div>
                  <form class="message-inputarea">
                    <input type="text" class="message-input" placeholder="Type here...">
                    <img class="img-fluid smile" src="/images/svg/smile.svg" alt="">
                    <i class="iconsax file" data-icon="paperclip-2"> </i>
                    <i class="iconsax mic" data-icon="mic-2"> </i>

                    <a href="home.html" type="button" class="message-send-btn">
                      <i class="iconsax icon-btn" data-icon="send-2"> </i>
                    </a>
                  </form>
                </div>
              </div>
              <div class="story__pagination swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- friend story modal end -->
  </div>
  <!-- story section end -->
</template>

<script>
export default {
  mounted() {
    var storySlider = new Swiper(".story__slider", {
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
    var swiper2 = new Swiper(".story-box", {
      slidesPerView: 4.6,
      freeMode: true,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
</script>
