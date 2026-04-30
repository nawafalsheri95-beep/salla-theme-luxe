/**
 * Luxe Theme - Main JavaScript
 * Handles: sticky header, mobile menu, search, tabs, countdown, scroll-top, view toggle
 */

document.addEventListener('DOMContentLoaded', function () {

  // === Sticky Header ===
  const header = document.getElementById('site-header');
  if (header && window.header_is_sticky === 'true') {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // === Toggle System (mobile menu, search, filters) ===
  document.querySelectorAll('[data-toggle]').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const targetId = this.getAttribute('data-toggle');
      const target = document.getElementById(targetId);
      if (!target) return;
      const isOpen = target.classList.contains('is-open');
      // Close all open panels first
      document.querySelectorAll('.is-open').forEach(el => {
        if (el !== target) {
          el.classList.remove('is-open');
          el.setAttribute('aria-hidden', 'true');
        }
      });
      target.classList.toggle('is-open', !isOpen);
      target.setAttribute('aria-hidden', String(isOpen));
      document.body.classList.toggle('overflow-hidden', !isOpen && target.classList.contains('mobile-menu'));
    });
  });

  // Close panels on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.is-open').forEach(el => {
        el.classList.remove('is-open');
        el.setAttribute('aria-hidden', 'true');
      });
      document.body.classList.remove('overflow-hidden');
    }
  });

  // === Product Tabs ===
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });

  // === View Toggle (grid/list) ===
  const viewBtns = document.querySelectorAll('.view-btn');
  const productsGrid = document.getElementById('products-grid');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const view = this.getAttribute('data-view');
      viewBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (productsGrid) {
        productsGrid.classList.toggle('products-list-view', view === 'list');
      }
    });
  });

  // === Countdown Timer ===
  const countdowns = document.querySelectorAll('.countdown[data-end]');
  countdowns.forEach(el => {
    const endDate = new Date(el.getAttribute('data-end')).getTime();
    const daysEl = el.querySelector('[data-days]');
    const hoursEl = el.querySelector('[data-hours]');
    const minsEl = el.querySelector('[data-minutes]');
    const secsEl = el.querySelector('[data-seconds]');

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = endDate - now;
      if (diff <= 0) {
        el.closest('.countdown-wrapper')?.remove();
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });

  // === Scroll To Top ===
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
  }

  // === Image Zoom on Product Page ===
  if (window.imageZoom === 'true') {
    const productImgs = document.querySelectorAll('.product-gallery-wrapper img');
    productImgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
        const clone = this.cloneNode();
        clone.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;';
        lightbox.appendChild(clone);
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
      });
    });
  }

  // === Active Filters Bar mobile overlay close ===
  const filterOverlays = document.querySelectorAll('.mobile-menu-overlay');
  filterOverlays.forEach(overlay => {
    overlay.addEventListener('click', function () {
      const parent = this.closest('[id]');
      if (parent) {
        parent.classList.remove('is-open');
        parent.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });

  // === Add to Cart Feedback ===
  document.addEventListener('product:added-to-cart', function (e) {
    const btn = document.querySelector(`salla-add-product-button[product-id="${e.detail?.id}"]`);
    if (btn) {
      btn.classList.add('added');
      setTimeout(() => btn.classList.remove('added'), 2000);
    }
  });

});