<template>

    <header class="left-bar">
        <a href="#" ><img href="./assets/Onzer-Symbole.png"> </a>
        
    </header>
    <body>

        <music-list></music-list>
        
    </body>
    
</template> 
<script>
import MusicList from './components/MusicList.vue';

export default {
  name: 'App',
  components: {
    'music-list': MusicList
  }
};
</script>