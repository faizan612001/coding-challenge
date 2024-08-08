<script lang="ts">
  export let timelineProps: {
    content: string;
    visited: boolean;
    lastSeen: string | null;
  }[] = [];
  import _ from "lodash-es";

  const groupedTimeline = _.groupBy(timelineProps, function (x) {
    return x.lastSeen;
  });
  let lastSeenDates = Object.keys(groupedTimeline).sort(
    (a: any, b: any) => b - a
  );
</script>

<div class="bg-white max-h-[19rem] overflow-auto rounded-lg shadow-md p-4">
  <div class="mt-2 text-sm">
    {#each lastSeenDates as date}
      {#if groupedTimeline[date]}
        {#if date != "null" || groupedTimeline[date].find((x) => x.visited)}
          <div class="last-seen-date flex items-center justify-center w-full">
            <div class="flex-grow border-t border-black"></div>
            <span class="mx-4 text-xl">{date}</span>
            <div class="flex-grow border-t border-black"></div>
          </div>
        {/if}
        {#each groupedTimeline[date] as item}
          <div
            class="card-item mt-2 p-2 {item.visited
              ? 'bg-gray-100'
              : 'bg-yellow-200'} rounded-lg"
          >
            <p class="content">{@html item.content}</p>
          </div>
        {/each}
      {/if}
    {/each}
  </div>
</div>

<style>
  .bg-yellow-200 {
    background-color: #efdd5c;
  }
</style>
