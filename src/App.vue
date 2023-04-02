<template>

<header class="sideBar">
    <div>
	<img src="./assets/Deezer-Logo.wine.png" alt="test">

	<div class="nav">
		<ul>
			<li><a href="#"><svg version="1.0" viewBox="0 0 1162.000000 1280.000000">
				<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
				<path d="M11310 12729 c-768 -182 -1161 -272 -1985 -454 -1007 -223 -3701
				-821 -4680 -1039 -357 -80 -687 -157 -733 -172 -208 -67 -338 -200 -399 -409
				-17 -57 -18 -268 -21 -3991 l-2 -3932 -75 38 c-89 45 -289 112 -400 135 -480
				98 -1032 38 -1560 -170 -367 -145 -704 -362 -960 -619 -237 -238 -389 -489
				-462 -764 -23 -85 -26 -117 -26 -257 0 -184 14 -256 82 -401 167 -356 524
				-580 1066 -671 163 -27 528 -24 720 5 714 110 1380 462 1787 945 172 203 299
				450 348 672 8 36 11 947 10 3220 0 2175 3 3194 10 3245 35 251 161 417 405
				535 61 30 144 65 186 78 97 32 77 28 2279 517 1015 225 2226 494 2693 598
				l847 189 0 -2698 0 -2698 -88 43 c-472 235 -1158 244 -1807 24 -763 -259
				-1364 -783 -1550 -1352 -47 -144 -59 -231 -52 -393 5 -144 18 -203 70 -331 60
				-145 225 -340 371 -436 217 -143 490 -235 794 -267 146 -15 501 -6 642 16 985
				154 1847 766 2086 1480 68 205 64 -104 64 4165 0 2496 4 3896 10 3952 32 276
				128 479 291 615 71 58 197 119 282 135 l67 13 0 252 c0 139 -3 253 -7 252 -5
				0 -141 -32 -303 -70z"/>
				</g>
				</svg>
				Musique</a></li>
			<li><a href="#">Parcourir</a></li>
		</ul>
	</div>

    </div>
</header>

<footer class="play">
	<audio controls autoplay>
		<source src="./assets/borderline.mp3" type="audio/mpeg">
	</audio>
</footer>

<div>
    <ul class="music">
      <li class="card" v-for="musique in musiques" :key="musique._id">
        <p class="titre">{{ musique.titre }}</p>
        <p class="artiste">{{ musique.artiste }}</p>
        <p class="album">{{ musique.album }}</p>
        <p class="duree">{{ musique.duree }}s</p>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      musiques: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/musiques')
      .then(response => this.musiques = response.data)
      .catch(error => console.log(error));
  }
};
</script>