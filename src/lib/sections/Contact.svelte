<script lang="ts">
      import { getDatabase, ref, push } from "firebase/database";
      import {app} from '../firebase/firebase.js'
      import Textfield from "$lib/components/textfield.svelte";
      
      let name = '';
      let email = '';
      let message = '';

    async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const database = getDatabase(app);
    const messagesRef = ref(database, 'messages');

    try {
      await push(messagesRef, { name, email, message });
      alert('Message sent successfully!');
      name = ''; // Reset the form values
      email = '';
      message = '';
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }

</script>

<style lang="scss">

  article {
    
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 10rem;
    
    

    section {
      width: 90%;
    
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  
    
    
    
    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
          border-radius: 10rem;
          background: none;
          border: 1px solid    #FFFDD0;
          padding: .3rem;
          color: #a04f07;
          font-size: 15px;
          font-weight: 700px;
          font-family: 'Poppins', sans-serif;
          background-color: #FFFDD0;
          transition: transform 0.3s ease, 0.3s ease;

          
          cursor: pointer;

          &:hover {
            box-shadow: 0px 0px 8px 0pc;
            transition: all  240ms ease-in-out;

          }
 
          
        }
      

      textarea {
        resize: none;
        height: 5rem;
        border-radius: .3rem;

        &:focus {
          outline: none;
        }

        
      }
      


    


    }

    div#content {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      flex: 1;
    

     p {
      margin: 0;
      font-family:'Poppins', sans-serif;

      color: white;

      &:nth-child(1) {
        color:#FFFDD0;
        font-weight: 700;
        font-size: 17px;
      }
     
     }

    }

    div#spotify {
      flex: 1;
    }

    
  }


  }

  @media screen and (max-width: 807px) {
    article {

      section {
        display: flex;
        flex-direction: column;
      }
    }
  }

  
    


</style>

<article>
  <section id="contact">


    <div id="content">

      <p>CONTACT</p>

      <p>If you have any questions or business inquiries, please do not hesitate to contact me. I will try to get back as soon as possible!</p>

      <p>While you wait, treat yourself to some of the music I listen to while I code and study. Thank you for visiting my Coffee-Themed Portfolio site, i hope you have a great week!</p>

    </div>
    

    <div id="spotify">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5vVSfOsF8YRueAI1dOI0Lh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="spotify"></iframe>
    </div>

    <form on:submit={submitForm}>

          <Textfield
          type="text"
          bind:value={name} 
          title="Name"
          placeholder="John Doe"
        ></Textfield>
  
         
          <Textfield
          type="email"
          bind:value={ email } 
          title="Email Address"
          placeholder="name@domain.org"
        ></Textfield>
  

      


       


        <textarea bind:value={message} placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>




</section>
</article>

