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
        margin: 0 auto;
        background-color: white;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        border-radius: 1.7rem;
        overflow: hidden;
        position: relative;
        border: 20px solid white;

        div.graphic {
            width: 50%;
            overflow: hidden; // Keep this for desktop view
            transition: transform 10s ease-in-out;

            a img {
                border-radius: 1rem;
                display: block;
                width: 100%;
                height: auto;
                transition: transform 10s ease-in-out;
                transform: translateY(0);
                position: relative;
                z-index: 0;

                &:hover {
                    transform: translateY(-70%);
                }
            }
        }

        div.content {
            width: 50%;
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            
            padding: 1rem;
        }

        h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 17px;
        }

        p {
            align-self: center;
            font-family: 'Poppins', sans-serif;
            font-size: 17px;
            color: grey;
        }
    }

    div.tools {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;

        span {
            display: flex;
            align-items: center;
        }
        p {
            width: max-content;
            padding: .3rem;
            border-radius: .3rem;
            box-shadow: 0 0 10px rgba(0 ,0,0,.1);
        }
    }
}

@media screen and (max-width: 990px) {
    article section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70vw;
        height: auto;
        padding: 1rem;

        div.graphic {
            width: 100%;
            height: 250px; // Fixed height for the scrollable area
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;

            a img {
                width: 100%;
                height: auto;
                min-height: 100%; // Ensure image covers the height
                transform: none;
            }
        }
        div.content {
            width: 100%;

            #go {
                    font-size: 9px;
                }

            p {
                font-size: 14px;


                
            }
        }
    }
}

@media screen and (max-width:660px) {
    article section {
        width: 75vw;
    }
}



</style>

<article>
   
    <section id="afyadux">

        

        <div class="graphic">

            <div class="container">
                <a href="/">
                    <img src="/images/afyadux.png" alt="">
    
                </a>

            </div>

            


        </div>

        <div class="content">

            <h3 style="color: #06C270; ;">AFYADUX</h3>
            <p style="width: 20rem ;">Afyadux is a fullstack Web Application that serves as a Blood donation Outreach site, giving guides over blood science, donations, and advertising locations.</p>
               
            <div class="tools">
                <p style="color: rgb(255, 67, 67);">Sveltekit</p> <p style="color: orange;">Firebase</p> <p style="color: blue;">Typescript</p> 
                

                <span >                 <p id="go"   style="color: lightblue;">Go & Gin</p>
                </span>
            </div>
            
           

           
        </div>

    </section>

    <section id="coding">

        <div class="graphic">

            <div class="container">
                <a href="https://codinginitiative.org">
                    <img src="/images/coding.png" alt="">

                </a>
            </div>

        </div>

        <div class="content">
            <h3 style="color:#3396ff; ">CODINGINITIATIVE.org</h3>
            <p> codinginitiative.org is a Web Development learning platform for Wunsche High School and SpringISD, where students can look the ins & outs of WebDev, find related communities, and have an access to a plethora of resources.   </p>
            <div class="tools">
                <p style="color: rgb(255, 67, 67);">Sveltekit</p>
                <p style="color: orange;">Firebase</p>
                <p style="color: blue;">Typescript</p> 
                <p style="color: pink;">SCSS</p>
            </div>
            
            
        </div>

        
    </section>



    <section id="apply">

        <div class="graphic">

            <div class="container">
                <a href="https://apply.codinginitiative.org">
                    <img src="/images/apply.png" alt="">

                </a>
            </div>

        </div>

        <div class="content">
            <h3 style="color:#3396ff">APPLY.CODINGINITIATIVE</h3>
            <p>Apply.codinginitiative is a sleek Club Admission Page for the Coding Initiative club, featuring a responsive UI and enhanced security with Firebase backend integration for form collection.  </p>
            <div class="tools">
                <p style="color: rgb(255, 67, 67);">Sveltekit</p>
                <p style="color: orange;">Firebase</p>
                <p style="color: blue;">Typescript</p> 
                <p style="color: pink;">SCSS</p>
            </div>
            
            
        </div>

        

    </section>

    
</article>