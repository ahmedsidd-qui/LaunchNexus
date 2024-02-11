document.getElementById("row").innerHTML  += `
<div class="nav">
<div class="logo">
<a href="index.html"><img src="./assets/images/Screenshot 2024-02-08 193152.png" alt=""></a>
</div>
<div class="nav-items">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="internship.html">Intership</a></li>
    </ul>
</div>
</div>
`;

document.getElementById("footer-all").innerHTML+=`<footer>
<div class="footer-top">
<div class="footer-one">
<h2>LaunchNexus</h2>
<p>Unlock your potential with hands-on experience in our internship programs.</p>
</div>
<div class="footer-two">
<h2>Get every latest updates</h2>
<form action="">
    <input type="email" name="email" id="" required>
    <span><button id="footer-button" type="submit">Subscribe</button></span>
</form>
</div>
<div class="footer-three">
<h2>Contact Us</h2>
<a href=""><i style="color: #808080;" class="fa-brands fa-2xl fa-linkedin"></i></a>
<a href=""><i style="color: #808080;" class="fa-solid fa-2xl fa-envelope"></i></a>
<a href=""><i style="color: #808080;" class="fa-brands fa-2xl fa-square-whatsapp"></i></a>
</div>
</div>
<div class="fp"><p><center>&copy;2024  | Made by LaunchNexus</center></p></div>

</footer>`;
