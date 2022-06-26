const header = document.getElementById('header');

header.innerHTML = `
<div class="sticky-header navbar-expand-lg">
<div class="menu-bar clearfix">
    <div class="container-fluid clearfix">
        <!-- website logo -->
        <div class="menu-logo logo-dark">
            <a href="index.html">StegoCrypt</a>
        </div>
        <!-- nav toggle button -->
        <button class="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <!-- extra nav -->
        <div class="secondary-menu">
            <ul>
                <li class="btn-area"><a href="../login.html" class="btn btn-primary shadow">LOG OUT<i class="btn-icon-bx fas fa-chevron-right"></i></a></li>
            </ul>
        </div>
        <!-- Search Box ==== -->
        <div class="nav-search-bar">
            <form action="#">
                <input name="search" value="" type="text" class="form-control" placeholder="Type to search">
                <span><i class="ti-search"></i></span>
            </form>
            <span id="searchRemove"><i class="ti-close"></i></span>
        </div>
        <div class="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
            <div class="menu-logo">
                <a href="index.html"><img src="images/logo-white.png" alt=""></a>
            </div>
            <ul class="nav navbar-nav">	
                <li><a href="encrypt.html">Encrypt</a></li>
                <li><a href="decrypt.html">Decrypt</a></li>
                <li><a href="check-for-new.html"><span>Notification</span></a></li>
            </ul>
            <ul class="social-media">
                <li><a target="_blank" href="https://www.facebook.com/" class="btn btn-primary"><i class="fab fa-facebook-f"></i></a></li>
                <li><a target="_blank" href="https://www.google.com/" class="btn btn-primary"><i class="fab fa-google"></i></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/" class="btn btn-primary"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a target="_blank" href="https://twitter.com/" class="btn btn-primary"><i class="fab fa-twitter"></i></a></li>
            </ul>
            <div class="menu-close">
                <i class="ti-close"></i>
            </div>
        </div>
        <!-- Navigation Menu END ==== -->
    </div>
</div>
</div>
`;