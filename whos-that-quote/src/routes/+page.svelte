<script lang="ts">
    import { goto } from "$app/navigation";

    function homepage(){
        goto("/homepage");
    }
</script>

<h1>Who's that quote?</h1>
<button>Log in/sign up</button>
<p>Create an account to create and save custom sets!</p>
<br>
<h3>or</h3>
<br>
<button onclick={homepage}>Continue as guest</button>