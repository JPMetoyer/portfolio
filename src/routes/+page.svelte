<script lang="ts">


</script>


<style lang="scss">

    main {
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;

        div#content {
            
            display: flex;
            flex-direction: column;
            gap: none;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 55px;
                color: white;
            }

            p {
                color: white;
                font-family: 'Mulish', sans-serif;
                line-height: 1.6;
                font-weight: 500;
                position: relative;
                bottom: 3.5rem;
            }

            div#sites {
                position: relative;
                bottom: 4.5rem;

                img {
                    backdrop-filter: blur(10px);
                    padding: .2rem;
                    border-radius: 5rem;                    
                }
            }
        }


        section#hero {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 5rem;
            div#graphic {

                img {
                    backdrop-filter: blur(10px);
                    border-radius: 20rem;
                    padding: 5px;
                }
            }
             
             
            
        }
    }


</style>


<main>


    <section id="hero">

        <div id="content">
            <h1> Front-End Web <br> Developer</h1>

            <p>Hi, I am Jean-Paul Metoyer. I am a passionate Web Designer <br> & Developer, and a aspiring NYU student.</p>

            <div id="sites">
                <a href="/">
                    <img src="/icons/github.svg" alt="">

                </a>

                <a href="/">
                    <img src="/icons/linkedin.png" alt="">

                </a>
            </div>

        </div>


        <div id="graphic">
            <img src="/images/me2.png" alt="">

        </div>

       
        
    </section>

    
</main>