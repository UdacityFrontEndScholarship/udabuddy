$(document).ready(function() {
    var didScroll = false;
    var delta = 10;
    var lastScrollPosition = 0;
    var nav = $('.white');
    var navbarHeight = nav.outerHeight();
    // New navbar that slides in
    var navHtml = `<nav class="slide-nav">
                        <div class="nav-wrapper">
                            <a id="logo-container" href="#!" class="brand-logo center logo-size"></a>
                            <a href="#" data-target="mobile-nav" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
                            <ul id="nav-mobile" class="left hide-on-med-and-down">
                                <li><a href="#" class="black-text"><i class="small material-icons left">dashboard</i>Dashboard</a></li>
                                <li><a href="#" class="black-text"><i class="small material-icons left">library_books</i>NewsFeed</a></li>
                            </ul>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="#" class="black-text"><i class="small material-icons left">people</i>Network</a></li>
                                <li><a href="#" class="black-text"><i class="small material-icons left">forum</i><span> Resources</span></a></li>
                                <li><a href="#" class="black-text profile-bg"><i class="small material-icons left">account_circle</i>Profile</a></li>
                            </ul>
                        </div>
                    </nav>`;
    
    $('header').append(navHtml);

    $(window).scroll(function(e) {
        didScroll = true;
    })

    setInterval(checkScrolled, 250);
    setInterval(removeNavClass, 1000);

    // Check if window is scrolled
    function checkScrolled() {
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }

    // Changes to do if window has been scrolled
    function hasScrolled() {
        var currentScrollPos = $(this).scrollTop();
        var diff = Math.abs(lastScrollPosition - currentScrollPos);
        var slideNav = $('.slide-nav');
        if(diff <= delta)
        return;

        $(window).scroll(function(e) {
            slideNav.addClass('scroll');
        })
        lastScrollPosition = currentScrollPos;
    }

    // Revert back to original state when static
    function removeNavClass() {
        var slideNav = $('.slide-nav');
        if(!didScroll) {
            slideNav.removeClass('scroll');
        }
    }
})