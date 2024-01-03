<!-- <script lang="ts">
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

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    
    
    
    form {
      display: flex;
      flex-direction: column;
    }
  }
    


</style>

<section id="contact">

    <div id="content">
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




</section> -->