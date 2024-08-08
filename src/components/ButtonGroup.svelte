<script lang="ts">
  export let buttons: { title: string; icon: string; action: () => void }[] =
    [];
</script>

<div
  class="bg-white w-96 overflow-auto rounded-lg shadow-md p-8 h-[fit-content]"
>
  <div class="flex space-x-2 w-full space-x-4">
    {#each buttons as button}
      <button
        name={button.title}
        aria-label={button.title}
        title={button.title}
        class="hover:shadow-sm bg-white p-2 rounded-lg hover:rounded-full"
        on:click={() => {
          button.action();
        }}
      >
        <img src={button.icon} alt={button.title} />
      </button>
    {/each}
  </div>
</div>
