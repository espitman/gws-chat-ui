<template>
  <div class="modal fade popup-modal" id="block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <div class="modal-img text-center">
            <img class="img-fluid img" src="/images/block.png" alt="block">
          </div>
          <h2 class="dark-text">Block Number</h2>
          <h4 class="content-color">After blocking number, you won’t be able to send or receive message on
            this number.</h4>
        </div>

        <div class="modal-footer">
          <a href="private-chat.html" class="btn btn-link modal-btn w-50 content-color m-0" data-bs-dismiss="modal">Deny</a>
          <a href="home.html" class="btn btn-link modal-btn theme-color fw-semibold w-50 m-0">Block</a>
        </div>
      </div>
    </div>
  </div>
</template>
