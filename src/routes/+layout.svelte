<svelte:head>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>jpmetoyer.dev </title>



</svelte:head>


<script lang="ts">

    import '$lib/app.scss';
    let isMenuOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }


    function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }


</script>

<style lang="scss">

:global(html), :global(body) {
    margin: 0;
    padding: 0;
    text-decoration: none;

}



* {
    text-decoration: none;
}


   
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: lightcoral;
    padding-bottom: 15px;
    padding-top: 15px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 5;
   
   

    align-items: center;

    a {
        font-family: 'Nunito', sans-serif;
        font-size: 32px;
        color: white ;
    }

    div#links {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;

        a {

            font-family: 'Nunito', sans-serif;
            font-size: 24px;
            color: white;
            transition: transform 0.3s ease, color 0.3s ease;



            &:hover {
                border-bottom: 1px solid brown;
                transform: translateY(-5px);

                
            }
        }

    }

}





div#mobile {
    display: none;
}


@media screen and (max-width:720px) {

    nav {
        display: none;
    }

    div#mobile {
       
       
        height: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: lightcoral;

        a {
            color: white;
            text-decoration: none;
            font-family: 'Nunito', sans-serif;
            margin-left: 10px;
            font-size: 20px;

           
        }

      
        
    }

    


}


.menu-panel {
    display: flex;
    flex-direction: column;
    align-items:  center;
    -webkit-backdrop-filter: blur(14px); /* For WebKit browsers like Chrome and Safari */
    backdrop-filter: blur(14px);   
    gap: 1rem;
    position: fixed;
    top: 0;
    left: -100%; 
    bottom: 0;
    width: 30%; 
    transition: left 0.3s ease-out;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    padding: 20px;

    a {
        width: max-content;
    }



    #slide-contact {
        display: flex;
        justify-content: flex-start;

        
    }
  }

  .menu-panel.open {
    left: 0; 
    position: fixed;
    z-index: 1;

  }
  @keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}



footer {
    background-color: lightcoral;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    div#f-links {
        display: flex;
        gap: 1rem;
        margin: 0;

        a {
            color: white;
            font-family: 'Poppins', sans-serif;
            transition: transform 0.3s ease, color 0.3s ease;


            &:hover {
                border-bottom: 1px solid brown;
                transform: translateY(-5px);

            }
            
      
        }
    }

    div#trail {
        display: flex;
        align-items: center;

        p {
            color: white;
             margin: 0;
             padding-bottom: 1rem;
        }
    }
}

@media screen and (max-width:790px) {
    footer {
        flex-direction: column;
    }
}



</style>

    <nav>

        <a href="/"> JPMETOYER.dev</a>

        <div id="links">
            <a href="#hero" on:click={scrollToSection}> Home</a>
            <a href="#about" on:click={scrollToSection}> About </a>
            <a href="#project" on:click={scrollToSection}> Projects</a>
            <a href="#contact" on:click={scrollToSection}> Contact</a>
        </div>

        
    </nav>


    <div id="mobile">
        <a href="/"> JPMETOYER.dev</a>

        <button on:click={toggleMenu}   style="cursor: pointer; width: 2.5rem; height:auto; margin-right:15px; background:none; border: none; "><img src="/icons/menu.svg" alt="Menu"  style="width: 100%; height:100%"></button>

        <div class="menu-panel"      class:open={isMenuOpen}>
            <a href="/"> JPMETOYER.dev</a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>

            <div id="slide-contact">
                <a href="/" style="border: none;"><img src="/icons/github.svg" alt="GitHub"></a>
                <a href="/" style="border: none;"><img src="/icons/linkedin.png" alt="LinkedIn"></a>
            </div>
            
          </div>
    </div>




    <slot></slot>



<footer>

    <div id="f-links">
        <a href="#hero" on:click={scrollToSection}> Home</a>
            <a href="#about" on:click={scrollToSection}> About </a>
            <a href="#project" on:click={scrollToSection}> Projects</a>
            <a href="#contact" on:click={scrollToSection}> Contact</a>

    </div>

    <div id="trail">
        <p> © Jean-Paul Metoyer. Designed in a Starbucks Cafe ☕</p>

    </div>


</footer>



