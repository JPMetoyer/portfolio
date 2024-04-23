
<style lang="scss">
    @use "../interface/variables" as app;



        section#about {
            height: max-content;
            padding: 6vw 8vw;

            margin-top: 5rem;

            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 8vh 8vw;

            @media screen and (max-width: 960px) {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr;
            }

            div.graphic {
                padding: 0rem 0px;
                height: 100%;


                > img {
                    width: 100%;
                    height: 100%;
                    background-color: pink;
                    border-radius: 1rem;

                    object-fit: cover;
                }
            }

            div.info {
                display: flex;
                flex-direction: column;
                gap: 1.7rem;
                h2 {
                    margin-top: 1rem;
                }

                
            }

           
        }
    

   
</style>

<section id="about">
    <div class="graphic">
        <img src="/images/designexample.jpeg" alt="">
    </div>


    <div class="info">
        <h2> Ready to Elevate your Brand through Web Services? </h2>
        <p>I specialize in creating custom, responsive websites that not only look visually appealing but also function optimally across all devices. My services include web design and development tailored to your business needs, incorporating advanced SEO techniques to enhance your online visibility and reach. From initial design to ongoing maintenance, I ensure that your digital presence not only meets but exceeds your expectations, helping to drive your business success. </p>

      

    </div>
</section>


