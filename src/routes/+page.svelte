<script lang="ts">

import { slide } from 'svelte/transition';

</script>


<style lang="scss">

    * {
        margin: 0;
        padding: 0;
    }


    main {
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;


        @media screen and (max-width:970px) {
            div#content {

                text-align: center;
            }
        }

        div#content {
            
            display: flex;
            flex-direction: column;
            gap: 0;
            backdrop-filter: blur(10px);
            height: max-content;
            padding: 10px;
            border-radius: .5rem;


            

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 55px;
                color: white;
            }


            @media screen and (max-width:500px) {
                h1 {
                    font-size: 40px;
                }
            }

            p {
                color: white;
                font-family: 'Mulish', sans-serif;
                line-height: 1.6;
                font-weight: 500;
            }

            div#sites {

            

                img {
                    backdrop-filter: blur(10px);
                    padding: .2rem;
                    border-radius: 5rem;                    
                }

                

                
            }
        }


        section#hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-content: center;
            gap: 5rem;



          
            div#graphic {

                display: flex;
                justify-content: center;

                img {
                    backdrop-filter: blur(10px);
                    border-radius: 20rem;
                    padding: 5px;
                }
            }

            
             
             
            
        }


        @media screen and (max-width: 970px) {
            section#hero {
                grid-template-columns: 1fr;
                grid-template-rows: auto auto;
                grid-template-areas: 
                    "graphic"
                    "content";
            }

            #graphic {
                grid-area: graphic;
            }

            #content {
                grid-area: content;
            }
}
    }




</style>


<main>


    <section id="hero">

        <div id="content">
            <h1> Front-End Web   <span style="display: block;">Developer</span>  </h1>

            <p>Hi, I am Jean-Paul Metoyer. I am a passionate Web Design <br> & Developer, and an aspiring NYU student.</p>

            <div id="sites">
                <a href="/">
                    <img src="/icons/github.svg" alt="">

                </a>

                <a href="/">
                    <img src="/icons/linkedin.png" alt="">

                </a>
            </div>

        </div>


        <div id="graphic" in:slide={{ duration: 500, delay: 300 }}>
            <img src="/images/me2.png" alt="">

        </div>



       
        
    </section>

    
</main>