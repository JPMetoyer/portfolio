


<svelte:head>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>jpmetoyer.dev </title>



</svelte:head>


<script lang="ts">
    let isMenuOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>

<style lang="scss">






#cover {
    z-index: -1;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}




    


nav {
    z-index: 5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    position: fixed;  // Add this line
    top: 0;           // Add this line
    width: 100%;      // Add this line


    a {
        color: white;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        border:  1px solid #3396ff;
        padding: 5px 9px;

        &:hover {
            transition: all 140ms ease-in-out;
           color: #3396ff;
        }
    }

    div#links {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    div#sites #github img  {
        transition: transform 240ms ease-in-out;

        &:hover {
            transform: rotate(-45deg);

        }
    }

    div#sites #linkedin img  {
        transition: transform 240ms ease-in-out;

        &:hover {
            transform: rotate(45deg);

        }

    }
    
}

div#mobile {
    display: none;
}


@media screen and (max-width:970px) {

    nav {
        display: none;
    }

    div#mobile {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;  // Add this line
        top: 0;           // Add this line
        width: 100%;

        a {
            color: white;
            text-decoration: none;
            font-family: 'Poppins', sans-serif;
            border:  1px solid #3396ff;
            padding: 5px 9px;
        }

        button {
            background: none;
            border: none;
            width: 2.9rem;
            height: auto;
            margin-right: 10px;

            
        }
    }

    


}


.menu-panel {
    display: flex;
    flex-direction: column;
    align-items:  center;
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
    z-index: 1000;


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



</style>

    <nav>

        <a href="/"> JPMETOYER.dev</a>

        <div id="links">
            <a href="/"> Home</a>
            <a href="/"> About </a>
            <a href="/"> Projects</a>
            <a href="/"> Contact</a>
        </div>

        <div id="sites">



           <a style="border: none;" id="github" href="/">
            <img src="/icons/github.svg" alt="">

           </a>

            <a style="border: none;" id="linkedin" href="/">
                <img src="/icons/linkedin.png" alt="">
            </a>

        </div>

    </nav>


    <div id="mobile">
        <a href="/"> JPMETOYER.dev</a>

        

        <button on:click={toggleMenu}   style="cursor: pointer;"><img src="/icons/menu.svg" alt="Menu"></button>

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


</footer>



<img  id="cover" src="/images/cover.webp" alt="">