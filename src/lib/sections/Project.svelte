

<style lang="scss">




   



article {
    margin-bottom: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 3rem;

    div#header {
        width: 60rem;

        text-align: center;
      
        
        p {
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        color:#FFFDD0;
        font-weight: 700;
        }

        h3 {
            
            font-family:'Poppins', sans-serif;
            font-size: 25px;
            color: white;
            margin: 0 0 0 0;
        }
    }

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
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;

       
     
        p {
            width: max-content;
            padding: .3rem;
            border-radius: .3rem;
            box-shadow: 0 0 10px rgba(0 ,0,0,.1);
            @media screen and (max-width:380px) {
            font-size:12px;
        }

        }
    }
}

@media screen and (max-width: 990px) {

   article div#header {

    width: 70vw;
   }
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

          

            .line {
                font-size: 14px;


                
            }
        }
    }
}

@media screen and (max-width:660px) {

    
    article {

        div#header {
            width: 70vw;
        }

        section {
        width: 90vw;
    }
        
    }
    
    
    
   }

   @media screen and (max-width:440px) {
    article div#header {
        h3 {
            text-align: center;
        }
    }
   }





</style>





<article>

    <div id="header">
        <p>Project Menu</p>
        <h3>Whats on the menu today?</h3>
    
    </div>

   

   
   {#each ProjectData as entry}
    <section id="afyadux">

        

        <div class="graphic">

            <div class="container">
                <a href="/">
                    <img src={`/images/${entry.img}`} alt="">    
                </a>

            </div>

            


        </div>

        <div class="content">

            <h3 style="color: {entry.titleColor}; ;">{entry.title}</h3>
            <p class="line" >{entry.description}</p>
               
            <div class="tools">
                <p style="color: {entry.tag1Color};">{entry.tag1}</p> 
                
                <p style="color: {entry.tag2Color};">{entry.tag2}</p> 
                
                <p style="color: {entry.tag3Color};">{entry.tag3}</p> 
                

                <p style="color: {entry.tag4Color}">{entry.tag4}</p>
            </div>
            
           

           
        </div>

    </section>

    {/each}



    
</article>

<script lang="ts">


const ProjectData = [
{
    img:"afyadux.png",
    titleColor:"#06C270",
    title:"Afyadux",
    description:"Afyadux is a fullstack Web Application that serves as a Blood donation Outreach site, giving guides over blood science, donations, and advertising locations.",
    tag1:"Sveltekit",
    tag1Color:"rgb(255, 67, 67)",

    tag2:"Firebase",
    tag2Color:"orange",

    tag3:"Typescript",
    tag3Color:"blue",

    tag4:"Go",
    tag4Color:"grey"



},


{
    img:"fullcircle.jpeg",
    titleColor:"#2bd84e",
    title:"Full Circle Therapy",
    description:"Full Circle therapy is an Mental Health Therapy Clinic based in Houston. In this design I focused on accessibility, intuition, and other design techniques.",
    tag1:"Sveltekit",
    tag1Color:"rgb(255, 67, 67)",

    tag2:"",
    tag2Color:"orange",

    tag3:"Typescript",
    tag3Color:"blue",

    tag4:"Alma",
    tag4Color:"green"
    
},

{
    img:"tci.jpeg",
    titleColor:"#3396ff",
    title:"The Coding Initiative ",
    description:"The Coding Initiative is a nonprofit tech education site that serves Houston High Schools. I currently serve as the Chief Executive Officer.",
    tag1:"Sveltekit",
    tag1Color:"rgb(255, 67, 67)",

    tag2:"",
    tag2Color:"orange",

    tag3:"Typescript",
    tag3Color:"blue",

    tag4:"Dynamic Loading",
    tag4Color:"green"
    
},

{
    img:"wciapply.jpeg",
    titleColor:"#3396ff",
    title:"The Coding Initiative Apply page",
    description:"The Coding Initiative Apply page serves as the form collection and reviewal system to allow, deny, and waitlsit students from the club.",
    tag1:"Sveltekit",
    tag1Color:"rgb(255, 67, 67)",

    tag2:"Firebase",
    tag2Color:"orange",

    tag3:"Typescript",
    tag3Color:"blue",

    tag4:"Custom Backend UI",
    tag4Color:"green"
    
},



]
</script>