window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function (e) {
      const wrapper = e.target.closest('.responsive-image-wrapper');
      if (!wrapper) return;
  
      const fullSrc = wrapper.dataset.fullsrc;
      if (!fullSrc) return;
  
      const modal = document.getElementById('image-modal');
      const img = document.getElementById('modal-image');
      img.src = fullSrc;
      modal.classList.remove('hidden');
    });
  
    window.closeModal = function () {
      document.getElementById('image-modal').classList.add('hidden');
    };
  });
  