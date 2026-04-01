(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var toggle = document.querySelector('.abbey-menu-toggle');
        if (!toggle) return;

        // Build drawer
        var drawer = document.createElement('div');
        drawer.className = 'abbey-mobile-drawer';
        drawer.setAttribute('aria-hidden', 'true');

        // Close button
        var closeBtn = document.createElement('button');
        closeBtn.className = 'abbey-drawer-close';
        closeBtn.setAttribute('aria-label', 'Close menu');
        closeBtn.innerHTML = '&times;';
        drawer.appendChild(closeBtn);

        // Nav links cloned from existing menu
        var nav = document.createElement('nav');
        nav.className = 'abbey-drawer-nav';
        var ul = document.createElement('ul');
        document.querySelectorAll('.abbey-nav-menu a').forEach(function (a) {
            var li = document.createElement('li');
            var newA = document.createElement('a');
            newA.href = a.href;
            newA.textContent = a.textContent;
            li.appendChild(newA);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        drawer.appendChild(nav);

        // Areas we cover — fills the space between nav and call button
        var homeLink = document.querySelector('.abbey-nav-menu a');
        var baseHref = homeLink ? homeLink.getAttribute('href') : './';
        var areaLinks = [
            { name: 'Hull', href: baseHref },
            { name: 'Beverley', href: baseHref + 'electrician-beverley/' },
            { name: 'Cottingham', href: baseHref + 'electrician-cottingham/' },
            { name: 'Hessle', href: baseHref + 'electrician-hessle/' },
            { name: 'Willerby', href: baseHref + 'electrician-willerby/' },
            { name: 'Howden', href: baseHref + 'electrician-howden/' },
            { name: 'Goole', href: baseHref + 'electrician-goole/' },
            { name: 'Driffield', href: baseHref + 'electrician-driffield/' },
            { name: 'Bridlington', href: baseHref + 'electrician-bridlington/' },
            { name: 'Hornsea', href: baseHref + 'electrician-hornsea/' },
            { name: 'Withernsea', href: baseHref + 'electrician-withernsea/' },
            { name: 'Brough', href: baseHref + 'electrician-brough/' }
        ];
        var areas = document.createElement('div');
        areas.className = 'abbey-drawer-areas';
        var areaTags = areaLinks.map(function(area) {
            return '<a class="abbey-drawer-area-tag" href="' + area.href + '">' + area.name + '</a>';
        }).join('');
        areas.innerHTML =
            '<p class="abbey-drawer-areas-heading">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' +
                'Areas We Cover' +
            '</p>' +
            '<div class="abbey-drawer-area-tags">' + areaTags + '</div>' +
            '<p class="abbey-drawer-areas-note">Hull &amp; surrounding East Yorkshire areas</p>';
        drawer.appendChild(areas);

        // Contact section at bottom
        var contact = document.createElement('div');
        contact.className = 'abbey-drawer-contact';
        contact.innerHTML =
            '<a href="tel:01482440210" class="abbey-drawer-call">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>' +
                'Call: 01482 440210' +
            '</a>' +
            '<a href="mailto:info@abbeyelectricalservices.co.uk" class="abbey-drawer-email">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v.01L12 13l10-6.99V6a2 2 0 00-2-2zm0 4.24l-8 5.6-8-5.6V18a2 2 0 002 2h12a2 2 0 002-2V8.24z"/></svg>' +
                'info@abbeyelectricalservices.co.uk' +
            '</a>' +
            '<div class="abbey-drawer-hours">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>' +
                '<span>Mon–Fri: 8am – 5pm</span>' +
            '</div>';
        drawer.appendChild(contact);

        // Backdrop overlay
        var overlay = document.createElement('div');
        overlay.className = 'abbey-drawer-overlay';

        document.body.appendChild(overlay);
        document.body.appendChild(drawer);

        function openDrawer() {
            drawer.classList.add('open');
            overlay.classList.add('open');
            drawer.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeDrawer() {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        toggle.removeAttribute('onclick');
        toggle.addEventListener('click', openDrawer);
        closeBtn.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', closeDrawer);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeDrawer();
        });
    });
})();
