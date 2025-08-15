/* ---------- Role rotation ---------- */
    (function roleRotate() {
      const roles = ["MERN Stack Developer", "Full Stack Developer", "Web Developer", "Photo Editer"];
      let i = 0;
      const el = document.getElementById('roleText');
      setInterval(() => {
        el.style.opacity = 0;
        setTimeout(() => {
          i = (i + 1) % roles.length;
          el.textContent = roles[i];
          el.style.opacity = 1;
        }, 350);
      }, 2700);
    })();

    /* ---------- Dark mode with persistence ---------- */
    (function themeInit() {
      const btn = document.getElementById('darkToggle');
      const icon = document.getElementById('darkIcon');
      // default: dark theme (terminal vibe). If user had preference stored as 'light', use light.
      const stored = localStorage.getItem('theme'); // 'dark' or 'light'
      if (stored === 'light') {
        document.body.classList.add('light');
        icon.className = 'fa-solid fa-moon';
      } else {
        document.body.classList.remove('light');
        icon.className = 'fa-solid fa-sun';
      }

      btn.addEventListener('click', () => {
        if (document.body.classList.contains('light')) {
          // switch to dark
          document.body.classList.remove('light');
          localStorage.setItem('theme', 'dark');
          icon.className = 'fa-solid fa-sun';
        } else {
          document.body.classList.add('light');
          localStorage.setItem('theme', 'light');
          icon.className = 'fa-solid fa-moon';
        }
      });
    })();

    /* ---------- Custom cursor ---------- */
    (function customCursor() {
      const cursor = document.getElementById('cursor');
      const dot = document.getElementById('cursor-dot');
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let dotX = mouseX, dotY = mouseY;

      // follow mouse
      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      });

      // enlarge cursor when hovering interactive elements
      const hoverTargets = 'a, button, .socials a, .resume-btn';
      function addHoverHandlers() {
        document.querySelectorAll(hoverTargets).forEach(el => {
          el.addEventListener('mouseenter', () => {
            cursor.classList.add('link-hover');
          });
          el.addEventListener('mouseleave', () => {
            cursor.classList.remove('link-hover');
          });
        });
      }
      addHoverHandlers();

      // ensure newly added elements also bind (not needed here but safe)
      new MutationObserver(addHoverHandlers).observe(document.body, { childList: true, subtree: true });
    })();

    /* ---------- Accessibility: keyboard focus indicator for hidden cursor users ---------- */
    (function keyboardFocus() {
      // If user is navigating via keyboard, make native outline visible by temporarily showing default cursor.
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.style.cursor = 'auto';
          // after 3s restore hidden cursor
          setTimeout(() => document.body.style.cursor = 'none', 3000);
        }
      });
    })();