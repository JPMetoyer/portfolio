<script lang="ts">


</script>

<style lang="scss">

* {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    text-decoration: none;
    box-sizing: border-box;
}

article {
   
    width: 100%;
    height: 100vh;
    display: flex;
    align-items:  center;
    justify-content: center;

    background-image: url('/images/coffee.webp');
    background-position: right center; /* Adjusts where the image is positioned */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    background-size: cover; /* Scales the image as large as possible without stretching. Change to 'contain' if you want to see the whole image */
    background-attachment: fixed; 
  
}



section#hero {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;

    div#content {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        height: fit-content;
        padding: .5rem;
        padding-bottom: 1rem;
        border-radius: 2rem;
        -webkit-backdrop-filter: blur(10px); /* For WebKit browsers like Chrome and Safari */
        backdrop-filter: blur(10px);   
        h1 {
            margin-top: 0;
            width: max-content;
            font-size: 55px;
            font-family: 'Poppins', sans-serif;
            color: white;
            margin-bottom: 20px;
        }

        p {
            width: max-content;
            font-size: 18px;
            color: white;
            font-family: 'Mulish', sans-serif;
        }
    }

    div#graphic {
        width: max-content;

        img {
            border-radius: 20rem;
            -webkit-backdrop-filter: blur(10px); /* For WebKit browsers like Chrome and Safari */
            backdrop-filter: blur(10px);   
        }
    }
}

@media screen and (max-width:990px) {
    section#hero {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

        div#content {
            text-align: center;
            margin-left: 0;
            margin-right: 0;

            h1 {
                margin-top: 0;
                width: 100%;
            }

            p {
                font-size: 16px;
                width: auto;
            }
        }
    }
}

@media screen and (max-width:375px) {
    section#hero {
        margin-top: 50vw;
    }
}

@media screen and (max-width:970px) {
    section#hero div#content h1 {
        font-size: 40px;
    }
}

section#hero div#content p span {
    display: block;
}

@media screen and (max-width: 433px) {
    section#hero div#content p span {
        display: inline;
    }
}


</style>


<article>

    <section id="hero">

        <div id="content" >
            <h1>Front-End Web <span style="display: block;"> Developer</span></h1>
            <p>Hi, I am Jean-Paul Metoyer. A passionate Web Developer <span> and Programmer, and an aspiring NYU student.</span> </p>
    
        </div>
    
        <div id="graphic">
            <img  src="/images/me2.png" alt="">
    
        </div>
    
        
    </section>


</article>



