

<script lang="ts">
    import Hero from "$lib/sections/Hero.svelte";
    import About from "$lib/sections/About.svelte";
    import Project from "$lib/sections/Project.svelte";
    import Contact from "$lib/sections/Contact.svelte";


</script>

<style lang="scss">

    main {
        
        width: 100%;
        height: 100vh;

        img {
            position: fixed; /* Fix the image position */
            top: 0;
            left: 0;
            width: 100%; /* Cover the full viewport width */
            height: 100%; /* Cover the full viewport height */
            object-fit: cover; /* Ensure the image covers the area */
            z-index: -1; /* Place it behind the content */
        }

       
  
    }

</style>

<main>

    <img src="/images/coffee.webp" alt="">

    <Hero />
    <About />
    <Project />
    <Contact />

</main>

    




    

