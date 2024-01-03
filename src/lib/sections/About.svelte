<script lang="ts">

let activeSectionIndex = 0;
    const aboutSections = [
        { title: "A passionate Front-End Developer with experience", content: "As a beginner in Web Development and Design, I am constantly seeking for more information and education within this field. I posesse a range of skills in HTML, CSS Sveltekit, React, Javascript, Typescript, and SCSS. I have also worked with back-end systems like Firebase. Alongside this, I have developed a plethora of sites for local Houston-based businesses.  " },

        { title: "My fledgling skills in Web Development", content: "Flashback to my sophomore year in High School, my beginnings in Web Development started. My friends and I noticed the lack of computer science opportunities at our school, so we decided to start the 'Wunsche Coding Initiative.' The entire point of the club was for the officers to teach students the ins and outs of Web Development, and to also share our passion for design and code." },
        { title: "My first taste of Competition in Computer Science", content: "Winnings competitions is one of the biggest motivators for getting better in Web Dev. The first competition I did was for TexasUIL's Computer Programming. It was in the Java Programming language, so as a beginner in coding, needless to say it was pretty challenging. Me and my partner Carl won at the state level, and thats where I found my love for competition.  " },
        { title: "Winning at the highest level", content: "About a week after winning the UIL competition, I was told that I had to sub in for a guy named Aaron who competed with a Coding Initiative officer, carl, at SkillsUSA's Web Development & Design Competition at the state level. I was pretty nervous, but we were able to go all the way to nationals and win at the highest level for SkillsUSA. It was one of the best moments I've experienced in school. " },
        { title: "What I do currently", content: "As of now, i am currently juggling multiple projects, whether its developing sites for competitions or writing curriculum for the club students. I find myself frequently at Starbucks or Dutchbros, discussing with the other club officers about the newest web technologies over a hot cup of coffee. I am doing this while also trying to ignore the impending dread of college applications." },

        // Add more sections as needed
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
                color: rgb(229, 145, 145);
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
                color: lightgray;
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

        <img src="/images/coffee.webp" alt="">


    </div>

    <div id="content">
        <h3> ABOUT ME</h3>
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

    </div>
</section>

