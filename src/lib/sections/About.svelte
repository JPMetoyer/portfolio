<script lang="ts">

let activeSectionIndex = 0;
    const aboutSections = [
      {
        title: "Freshman at UT Austin, majoring in Informatics.",
        content:
          "Ever since I opened up my first laptop, I have been captivated by the world of computer science. This initial curiosity sparked a journey that has led me to explore various facets of the field, from IT support and cybersecurity to web development and software engineering. After finishing my bachelor's in informatics, I plan on pursuing a master's in information security and privacy. Then I plan to leverage my education to explore the Information Security field.",
        image: "ut.jpg"
      },
      {
        title: "My fledgling skills in Web Design & Development",
        content:
          "I started learning web development during my sophomore year, and the following year, I started a web development club with a few of my friends. I've competed at nationals twice, Placing Gold for the first one and Silver for the recent one. Web development is one of my favorite hobbies, and I've created a variety of projects, ranging from a fullstack learning application to more artsy endeavors like my portfolio.",
        image: "skills.JPG"
      },
      {
        title: "Interest in IT, Cybersecurity, & Risk Management",
        content:
          "My interest in IT, cybersecurity, and risk management was sparked by hearing my mom talk about her work in risk management. This fascination led me to intern at my school district's technology department during the summers of my sophomore and junior years. During my senior year summer, I further honed my skills by working for the IT department at a local community college. These experiences have deepened my passion for protecting and managing digital systems.",
        image: "coding.jpg"
      },
      {
        title: "What I like to do for fun and Who am I?",
        content:
          "I love playing basketball and ping pong, and one of my favorite hobbies is cooking to pass the time. I have a Shih Tzu and a Labrador, and I grew up in Houston, Texas. In high school, I discovered my passion for programming and competing, which has shaped much of my academic and career path. I look forward to the opportunities at UT Austin and plan to take full advantage of my informatics major to further my knowledge and skills.",
        image: "pickle.jpg"
      }
    ];

    const navigateContent = (direction: 'next' | 'prev') => {
    if (direction === 'next' && activeSectionIndex < aboutSections.length - 1) {
        activeSectionIndex++;
    } else if (direction === 'prev' && activeSectionIndex > 0) {
        activeSectionIndex--;
    }
}

</script>

<style lang="scss">

    * {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }


    section#about {

        margin-bottom: 5rem;


        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        align-self: center;
        justify-self: center;
        gap: 4rem;
        padding-top: 3rem;
        padding-bottom: 3rem ;

        div#graphic {
            
            -webkit-backdrop-filter: blur(10px); /* For WebKit browsers like Chrome and Safari */
        backdrop-filter: blur(10px);   
            width: 26rem;
            img {
                height: 20rem;
                width: 26rem;
                border-radius: 1.5rem;
                 
                object-fit: cover;
                
            }
        }

        div#content {
            border-radius: 1.7rem;
            padding: .5rem;
            -webkit-backdrop-filter: blur(10px); /* For WebKit browsers like Chrome and Safari */
        backdrop-filter: blur(10px);   
            display: flex;
            flex-direction: column;
            width: 30rem;
            height: 100%;

            h3 {
                font-family: 'Poppins', sans-serif;
                font-size: 17px;
                font-weight: 700;
                color: #FFFDD0;
                margin-bottom: 10px;

            }

            h4 {
                font-size: 25px;
                font-family: 'Poppins', sans-serif;
                line-height: 1.4;
                color: #fff;
                margin-bottom: 1rem;
            }

            p {
                font-size: 17px;
                color: white;
                font-family: 'Mulish', sans-serif;
                font-weight: 500;
                line-height: 1.5;
            }

            div#arrows {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 1rem;
                
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                }
            }

            div#coffee {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 1rem;

                img {
                    border-radius: 1.7rem;
                    padding: .2rem;
                    width: 3rem;
                    height: auto;
                    background-color: transparent;

                    &.active {
                        background-color: #FFE7CB;
                    }
                }
            }

            
        }


       
    }

    @media screen and (max-width: 990px) {

        section#about {
            display: flex;
           flex-direction: column;
           justify-content: center;
           
            

           div#content {
            text-align: center;
            width: 80%;
           }

        }
    }

    @media screen and (max-width: 460px) { 

        section#about div#graphic {
            width: 90%;
            height: auto;
        }

        section#about div#graphic img {
            max-width: 100%;
            max-height: 100%;
        }
    }


</style>

<section id="about">

    <div id="graphic">

        <img src={`/images/${aboutSections[activeSectionIndex].image}`} alt="">

    </div>

    <div id="content">
        <h3> Freshly Brewed</h3>
        <h4>{aboutSections[activeSectionIndex].title}</h4>
        <p>{aboutSections[activeSectionIndex].content}</p>
        
        <div id="arrows">

            <button on:click={() => navigateContent('prev')} disabled={activeSectionIndex === 0}>
                <img src="/icons/leftarrow.png" alt="">
            </button>             
            
            <button on:click={() => navigateContent('next')} disabled={activeSectionIndex === aboutSections.length - 1}>
                <img src="/icons/rightarrow.png" alt="">

            </button>

        </div>

        <div id="coffee">
            {#each aboutSections as section, index}
              <img src={`/icons/coffee${index + 1}.svg`} alt={`Coffee ${index + 1}`} class:active={index === activeSectionIndex} />
            {/each}
          </div>

    </div>
</section>

