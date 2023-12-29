<script lang="ts">

// let videoElement: { play: () => void; pause: () => void; currentTime: number; };

// // Play video on hover
// function playVideo() {
//     videoElement.play();
// }

// // Pause and rewind video when not hovering
// function pauseAndRewindVideo() {
//     videoElement.pause();
//     videoElement.currentTime = 0; // Rewind to start
// }




</script>

<style lang="scss">

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        padding-bottom: 3rem;

        section {
            display: flex;
            flex-direction: row;
            width: 60rem;
            height: 25rem;
            margin-left: 15vw;
            margin-right: 15vw;
            background-color: lightgray;    
            box-shadow: 0 0 10px rgba(0,0,0,.1);
            border-radius: 1.7rem;

           
        }

        #afyadux {
            display: flex;
            flex-direction: row;

            div#graphic {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px dashed red;

                
                button {
                    background: none;
                    border: none;

                    video {
                        width: 95%;
                        border-radius: 1.7rem;

                  
                    
                }
                    
                } 
            }

            
         
            div#content {
                width: 50%;
            }
        }


    }

    @media screen and (max-width:990px) {
        article section {
            height: 60rem;
            width: 37rem;
        }
    }
    
    @media screen and (max-width:660px) {
        article section {
            width: 85vw;
        }
    }


   




</style>

<article>
   
    <section id="afyadux">

        
        <!-- <div id="graphic"  on:mouseenter={playVideo} 
        on:mouseleave={pauseAndRewindVideo} > -->

        <div id="graphic">

            <button>
                <video  muted loop autoplay preload="auto">
                <source src="/videos/afyadux.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            </button>
            
            
            

        </div>

        <div id="content">

        </div>

    </section>

    <section id="apply">

        <div id="graphic">

        </div>

        <div id="content">
            
        </div>

        

    </section>

    <section id="coding">

        <div id="graphic">


        </div>

        <div id="content">
            
        </div>

    </section>
</article>