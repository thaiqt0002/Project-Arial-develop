<script lang="ts">
  import { zxcvbn, zxcvbnOptions, type Score } from "@zxcvbn-ts/core";
  import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
  import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en";
  // import PasswordStrengthChecker from "./PasswordStrengthChecker.svelte";

  let password = "";
  let passwordTouched = false;

  const { translations } = zxcvbnEnPackage;
  const { adjacencyGraphs: graphs, dictionary: commonDictionary } =
    zxcvbnCommonPackage;
  const { dictionary: englishDictionary } = zxcvbnEnPackage;

  const options = {
    translations,
    graphs,
    dictionary: { ...commonDictionary, ...englishDictionary },
  };
  zxcvbnOptions.setOptions(options);

  $: ({
    score,
    feedback: { warning, suggestions },
  } = zxcvbn(password));

  let timeout;
  function checkPasswordAfterDelay() {
    clearTimeout(timeout);
    passwordTouched = false;
    timeout = setTimeout(() => {
      if (password.length !== 0)
        passwordTouched = true;
    }, 1000);
  }
</script>

<div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
  <a href="/" class=" flex m-auto select-none  bg-slate-400 text-red-600 text-6xl/normal font-bold p-2">IELTS</a>
  
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Your name</label>
        <div class="mt-2">
          <input id="username" name="username" autocomplete="text" required placeholder="Your Name Here" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required placeholder="youremail@host.com" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input bind:value={password} on:keydown={checkPasswordAfterDelay} id="password" name="password" type="password" autocomplete="new-password" required placeholder="P@s$w0rd" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        {#if passwordTouched}
          <label for="password-strength">Password strength: </label>
          <meter id="password-strength" class="ms-1" value={score} low="1.9" high="2.9" optimum="4" max="4" />
          {#if warning}
            <div>
              <p>Warning:</p>
              <p class="text-red-400"> {warning}</p>
            </div>
  
            <div>
              {#if suggestions.length === 1}
                <p>Suggestion:</p>
              {:else}
                <p>Suggestions:</p>
              {/if}
              <ul class="flex flex-col text-red-400">
                {#each suggestions as suggestion}
                  <li class="">{suggestion}</li>
                {/each}
              </ul>
            </div>
          {/if}
        {/if}
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Re-enter password</label>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="new-password" required class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
      </div>
    </form>
  </div>
  <div class="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div class=" text-center relative leading-[0] after:w-full after:bg-transparent after:block after:h-1 after:border-t-gray-300 after:border-t-[1px] after:absolute after:top-1/2 after:z-[1]">
      <h3 class="z-[2] relative inline-block bg-white text-center text-lg font-light leading-9 px-2">
        Had account?
      </h3>
    </div>
    <a href="/login" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</a>
  </div>
</div>

<style>

</style>