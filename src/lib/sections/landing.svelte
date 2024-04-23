<style lang="scss">

    @use "../../lib/interface/_variables.scss" as app;
    
    main {
    
        
        padding-top: 10rem;
    
    
        background-color: lightcoral;
    
        height: 100vh;
        width: 100%;

        


    
        section#services {
    
            
            display: flex;
            flex-direction: row;
            gap: 3rem;
            padding: 0rem 1.3rem 0rem 1.3rem;

            margin-bottom: 40vh;
    
            @media screen and (max-width:1137px) {
                flex-direction: column;

            }
    
    
            div.service { 
    
                width: 30rem;
                height: 36rem;
                background-color: #FFE7CB;
    
                margin: 0 auto;
    
                display: flex;
    
                border-radius: .8rem;

                @media screen and (max-width:511px) {
                    width: 85%;
                }
    
               
    
                div.description {
                    display: flex;  
                    flex-direction: column;
                    align-items: start;
                    padding: 1rem;
    
                    ul {
    
                        margin-top: 3rem;
    
                        li {
                            display: flex;
                            flex-direction: row;
    
                            align-items: center;
    
                            gap: .3rem;
                            list-style: none;  
                        
                        img {
                            width: 1rem;
                            height: auto;
                        }
                        
                        }
                    }
    
                    h1 {
                        font-size: 20px;
                        font-weight: 420;
                        margin-bottom: .8rem;
                    }
    
                    p {
                        font-family: 350;
    
                        &:nth-of-type(2) {
    
                            margin-top: 4rem;
                          
                            span {
                            
                                &:nth-of-type(1) {
                                    font-weight: 1000;
                                    font-size: 3.5rem;
    
                                    span {
                                        font-weight: 1000;
                                        font-size: 2rem;
                                    }
                                }
    
                               
                            }
                        }
                    }
    
                }
            }
        }
    }
    
    #tag {
        font-weight: light;
    
        margin-bottom: .7rem;
    }
    
    #booking {
        margin-top: 3rem;
    
        align-self: center;
        border-radius: 10rem;
        border: 1px solid black;
        padding: .6rem;
        color: lightcoral;
        font-size: 1.3rem;
        font-weight: 700px;
        font-family: 'Poppins', sans-serif;
        background-color: #FFE7CB;
        transition: transform 0.3s ease, 0.3s ease;
    
              
        cursor: pointer;
    
        &:hover {
                transition: all  240ms ease-in-out;
    
                color: black;
                border: 1px solid lightcoral;
    
              }
    }
    
    
    </style>
    
    
    <script lang="ts">
    
    
    </script>
    
    
    
    <main>
    
        <h1 style="align-self: center;">Our Packages</h1>
        <section id="services">
    
            <div class="service">
                <div class="description">
                    <h1>Basic</h1>
    
                    <p>Get started with a professional online presence that includes a homepage, about page, services page, and contact page, all crafted to be responsive and user-friendly.</p>
    
                    <p>
                        <span>$600<span>/site</span>
                        </span>
                    </p>
    
                    <ul>
                        <p id="tag">THIS PACKAGE INCLUDES:</p>
    
                        <li> <img src="/icons/check.svg" alt="">1-4 pages
                        </li>
    
                        <li> <img src="/icons/check.svg" alt=""> Responsive Design</li>
                        <li> <img src="/icons/check.svg" alt="">Basic SEO for visibility</li>
                        <li> <img src="/icons/check.svg" alt="">Social media & contacts</li>
    
    
                    </ul>
    
    
                    <a id="booking" href="https://calendly.com/metoyerjeanpaul/premium-website-package-consultation" target="_blank">Book Consultation</a>
    
                </div>
            </div>
    
            <div class="service">
                <div class="description">
                    <h1>Standard</h1>
    
                    <p>Enhance your business with a more comprehensive website featuring added functionalities like a blog, gallery, and advanced SEO to engage visitors and improve visibility.</p>
    
                    <p>
                        <span>$1000<span>/site</span>
                        </span>
                    </p>
    
                    <ul>
                        <p id="tag">EVERYTHING IN BASIC, PLUS:</p>
    
                        <li> <img src="/icons/check.svg" alt="">Blog/News section</li>
                        <li> <img src="/icons/check.svg" alt="">Image gallery</li>
                        <li> <img src="/icons/check.svg" alt="">Enhance SEO</li>
                        <li> <img src="/icons/check.svg" alt="">Google Maps Integration</li>
                    </ul>
    
                    <a id="booking" href="https://calendly.com/metoyerjeanpaul/standard-website-package-consultation" target="_blank">Book Consultation</a>
    
                </div>
            </div>
    
            <div class="service">
                <div class="description">
                    <h1>Premium</h1>
    
                    <p>Maximize your online potential with our most advanced package that includes e-commerce capabilities, booking systems, and ongoing maintenance for top performance.</p>
    
                    <p>
                        <span>$2200<span>/site</span>
                        </span>
                    </p>
    
                    <ul>
                        <p id="tag">EVERYTHING IN STANDARD, PLUS:</p>
    
                        <li> <img src="/icons/check.svg" alt="">E-commerce setup</li>
                        <li> <img src="/icons/check.svg" alt="">Booking System</li>
                        <li> <img src="/icons/check.svg" alt="">Advanced SEO</li>
                        <li> <img src="/icons/check.svg" alt=""> Monthly Maintenance</li>
                    </ul>
    
                    <a id="booking" href="https://calendly.com/metoyerjeanpaul/premium-website-package-consultation" target="_blank">Book Consultation</a>
    
                </div>
            </div>
    
           
        </section>
    
    </main>