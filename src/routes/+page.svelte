

<script lang="ts">

    import Hero from "$lib/sections/Hero.svelte";
    import About from "$lib/sections/About.svelte";
    import Project from "$lib/sections/Project.svelte";
    import Contact from "$lib/sections/Contact.svelte";


</script>

<style lang="scss">

    main {
        
        width: 100%;
        min-height: 100vh; 
        background-color: lightcoral;

        div {
            scroll-behavior: smooth;
        }



       
  
    }

</style>

<main>


    <div id="hero">
        <Hero  />
    </div>
    
    <div id="about">
        <About />


    </div>

    <div id="project" >
        <Project />


    </div>

    <div id="contact" >
        <Contact />


    </div>


</main>

    




    

