<script lang="ts">
  const timelineData = [
    {
      title: "SpringISD",
      date: "Aug 2021 - Dec 2021",
      description: "Audio Visual Intern: Operated the Overhead camera at Springisd’s Planet Ford Stadium. Was responsible for following plays, getting shots, and the overall entertainment produced from camera shots.",
      side: "left-container",
      img: "springisd.jpeg"
    },
    {
      title: "SpringISD",
      date: "May 2022 - Aug 20222",
      description: "Computer Technology Intern: Repaired computer hardware, reworked BIOS systems, setup computer labs for different schools across SpringISD. Also enrolled devices into the DMS.",
      side: "right-container",
      img: "springisd.jpeg"
    },
    {
      title: "SpringISD",
      date: "Aug 2022 - Dec 2021",
      description: "Audio Visual Intern: Operated the Overhead camera at Springisd’s Planet Ford Stadium. Was responsible for following plays, getting shots, and the overall entertainment produced from camera shots.",
      side: "left-container",
      img: "springisd.jpeg"
    },
    {
      title: "SpringISD",
      date: "May 2023 - Aug 2023",
      description: "Computer Technology Intern Lead: Led the SpringISD Interns in repairing chromebooks/desktops, enrolling devices into the Cloud management system, and setup classrooms for teaching.",
      side: "right-container",
      img: "springisd.jpeg"
    },
    {
      title: "SpringISD",
      date: "Aug 2023 - Dec 2023",
      description: "Audio Visual Intern: Operated the Overhead camera at Springisd’s Planet Ford Stadium. Was responsible for following plays, getting shots, and the overall entertainment produced from camera shots.",
      side: "left-container",
      img: "google.png"
    },
    {
      title: "Lone Star College",
      date: "Jan 2024 - May 2024",
      description: "IT Intern: Worked under the LoneStar Greenspoint IT Department to resolve issues, answer help desk issues, repair chromebooks, work on BIOS configurations, and help students with laptops. ",
      side: "right-container",
      img: "lonestarcollege.png"
    },
    {
      title: "Varsity Tutors",
      date: "Apr 2024 - Jun 2024",
      description: "Software Engineering Tutor: Designed curriculum for computer science classses, taught students, created engaging activities. Taught for around 5-6 around every week.",
      side: "left-container",
      img: "varsitytutors.jpeg"
    },

    {
      title: "Full Circle Therapy",
      date: "May 2024 - Aug 2024",
      description: "IT Intern: Developed Clinics Website, configured google workspace, and met with owner to meet digital needs. Focused on providing best SEO and Web practices.",
      side: "right-container",
      img: "fct.jpeg"
    },

    {
      title: "The Coding Initiative",
      date: "Feb 2024 - Present",
      description: "CEO: Running a nonprofit dedicated to democratizing tech education thorugh education, community events, and competitions. Serving the Houston area.",
      side: "left-container",
      img: "wci.png"
    },
    // Add more entries as needed
  ];
</script>

<style lang="scss">
  @use "../interface/variables" as app;
  
  div#tidbit {
    width: 40rem;
    margin: 0 auto;
    height: 14rem;
    border: 1px solid black;
    border-radius: 1.3rem;
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
    @media screen and (max-width: 726px) {
      width: 90%;
    }
  
    @media screen and (max-width: 652px) {
      height: 20rem;
    }
  
    div#text {
      width: 91%;
      height: 82%;
  
      display: flex;
      flex-direction: column;
      align-items: center;
  
      svg {
        width: 3rem;
      }
  
      h1 {
        margin: 0;
        font-family: 'nunito', sans-serif;
      }
  
      p {
        font-size: 13.5px;
        font-family: 'nunito', sans-serif;
        font-weight: light;
      }
    }
  }
  
  section#timeline {
    position: relative;
    max-width: 1200px;
    margin: 1rem auto;
    padding: 20px 0;
    padding-left: 1rem;
    padding-right: 1rem;

    @media screen and (max-width:768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 3.5px;
      height: 100%;
      background-image: url('/images/drop.png'); // Add your coffee drizzle image here
      background-repeat: repeat-y;
      background-size: contain;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 0; // Ensure the line is behind the job containers
    }
  
    .container {
      padding: 10px 50px;
      position: relative;
      width: 50%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      animation: movedown 1s linear forwards;
      opacity: 0;
      z-index: 1; // Ensure containers are above the line
      color: white;
  
      &:nth-child(1) {
        animation-delay: 0s;
      }
  
      &:nth-child(2) {
        animation-delay: 1s;
      }
  
      &:nth-child(3) {
        animation-delay: 2s;
      }
  
      &:nth-child(4) {
        animation-delay: 3s;
      }
  
      &:nth-child(5) {
        animation-delay: 4s;
      }
  
      &:nth-child(6) {
        animation-delay: 5s;
      }
  
      .text-box {
        padding: 0px 15px;
        position: relative;
        border-radius: 6px;
        font-size: 15px;
        z-index: 2;
        border: 1px solid #FFE7CB;
        border-radius: 0.3rem 0.3rem 2rem 2rem;
  
        h2 {
          font-weight: 600;
          font-family: 'poppins', sans-serif;
          margin-top: 5px;
          margin-bottom: 2px;
        }
  
        small {
          display: inline-block;
          font-family: 'poppins', sans-serif;
          margin: 0;
          color: black;
        }
  
        p {
          font-family: "poppins", sans-serif;
          font-weight: 300;
          margin: 10px 0px 10px 0px;
        }
  
        .left-container-arrow,
        .right-container-arrow {
          position: absolute;
          top: 40px; /* Adjust this value as needed to align with your mug */
          width: 50px; /* Adjust width for the thickness of the handle */
          height: 30px; /* Adjust height for the size of the handle */
          border: 5px solid #FFE7CB; /* Handle color */
          border-radius: 50% 50% 0 0; /* Create the curved shape */
          background-color: transparent; /* Ensure the inside of the handle is transparent */
          border-bottom: 0; /* Remove the bottom border to open up the handle */
          box-sizing: border-box;
        }

        .left-container-arrow {
          right: -40px; /* Position the handle on the right side */
          transform: rotate(90deg); /* Rotate the half-circle to align as a handle */
        }

        .right-container-arrow {
          left: -40px; /* Position the handle on the left side */
          transform: rotate(-90deg); /* Rotate the half-circle to align as a handle */
        }
      }
  
      img {
        position: absolute;
        width: 40px;
        border-radius: 50%;
        top: 32px;
        z-index: 3; // Ensure images are above the line and content
      }
  
      &.left-container {
        left: 0;
        align-items: flex-end;
  
        .text-box {
          margin-left: 50px;
        }
  
        img {
          right: -20px;
        }
      }
  
      &.right-container {
        left: 50%;
        align-items: flex-start;
  
        .text-box {
          margin-right: 50px; // Add margin to create spacing from the center line
        }
  
        img {
          left: -20px;
        }
      }
    }
  
    @keyframes movedown {
      0% {
        opacity: 1;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  
    @media screen and (max-width: 768px) {
      .container {
        width: 90%;
        left: 0 !important;
        align-items: center !important;
        margin-bottom: 40px;
        padding-left: 0 !important;
        padding-right: 0 !important;
        text-align: center;
        position: relative;
        z-index: 100;

        .text-box {
          margin: 0 auto;
          padding: 0 20px; /* Add padding to prevent content from touching the handle */
        }

        img {
          position: static;
          margin-bottom: 20px;
        }
      }
  
      &::after {
        content: '';
        position: absolute;
        width: 3.5px;
        height: auto;
        background-image: url('/path/to/coffee-drizzle.png'); // Add your coffee drizzle image here
        background-repeat: repeat-y;
        background-size: contain;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -5; // Ensure the line is behind the job containers
      }
    }
  }
</style>


  
  
  
  
  
  
  




<div id="tidbit">
  
  <div id="text">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
      <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
    </svg>

    <h1>Education</h1>

    <p>Bachelors of Science in Informatics - Human-Centered Data Science, <i> UT Austin </i> | 2026</p>
    <p>Associates of Science & High School Diploma, <i>Carl Wunsche Sr. HS & LoneStar College </i> | 2024
    </p>


    

  </div>


</div>


<section id="timeline">


  {#each timelineData as entry}
    <div class="container {entry.side}">
      <img src={`/careers/${entry.img}`} alt="">
      <div class="text-box">
        <h2>{entry.title}</h2>
        <small>{entry.date}</small>
        <p>{entry.description}</p>
        <span class="{entry.side}-arrow"></span>
      </div>
    </div>
  {/each}
</section>
