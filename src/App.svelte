<script lang="ts">
  import "./app.css";
  import Timeline from "./components/Timeline.svelte";
  import Header from "./components/Header.svelte";
  import ButtonGroup from "./components/ButtonGroup.svelte";
  import arrowNarrowRight from "./assets/arrow-narrow-right.svg";
  import BadgeCheck from "./assets/badge-check.svg";
  import Icon from "./assets/Icon.svg";
  import Menu from "./assets/menu.svg";
  import Vector from "./assets/Vector.svg";
  import Plus from "./assets/plus-sm.svg";
  import AppLinkButton from "./components/AppLinkButton.svelte";
  let cardContent: {
    content: string;
    visited: boolean;
    lastSeen: string | null;
  }[] = [
    {
      content: `<div>
  <p><b>As a</b> customer, <br />
  <b>I want to</b>  see a preview of my booked appointments <br />
  <b>So that</b>  I can easily keep track of my schedule.</p>
</div>`,
      lastSeen: null,
      visited: false,
    },
    {
      content: `<div >
  <p><b>When</b> clicking on a button</p>
  <p><b>Then</b> nothing happens</p>
</div>
`,
      lastSeen: "12.22.2002",
      visited: true,
    },
    {
      content: `<div class="user-story">
  <p><b>Given </b> the user has 5 appointments</p>
  <p><b>When</b> the user scrolls / slides horizontally in the workout section</p>
  <p><b>Then</b> he can see the other appointment tiles</p>
</div>`,
      lastSeen: "12.22.2002",
      visited: true,
    },
  ];
  const link = `https://ruleevcom.sharepoint.com/sites/ruleevGmbH/Freigegebene%20Dokumente/Forms/AllItems.aspx?id=%2Fsites%2FruleevGmbH%2FFreigegebene%20Dokumente%2FExternal%2F003%5Fshared%2F005%5Fyond%2F002%5Fcode%5Fchallenges%2Fprofile%5Fpics%2Ezip&parent=%2Fsites%2FruleevGmbH%2FFreigegebene%20Dokumente%2FExternal%2F003%5Fshared%2F005%5Fyond%2F002%5Fcode%5Fchallenges&p=true&ga=1`;
  const buttons: { title: string; icon: string; action: () => void }[] = [
    {
      title: "Badge Check",
      icon: BadgeCheck,
      action: () => {
        console.log("Badge Check clicked");
      },
    },
    {
      title: "Vector",
      icon: Vector,
      action: () => {
        console.log("Vector clicked");
      },
    },
    {
      title: "Icon",
      icon: Icon,
      action: () => {
        console.log("Icon clicked");
      },
    },
    {
      title: "Menu",
      icon: Menu,
      action: () => {
        console.log("Menu clicked");
      },
    },
    {
      title: "Plus",
      icon: Plus,
      action: () => {
        console.log("Plus clicked");
      },
    },
    {
      title: "Arrow Narrow Right",
      icon: arrowNarrowRight,
      action: () => {
        console.log("Arrow Narrow Right clicked");
      },
    },
  ];
</script>

<main class="p-8">
  <Header />
  <div class="flex space-x-3 w-full">
    <div class="mt-8 w-1/3 flex justify-center">
      <Timeline timelineProps={cardContent} />
    </div>
    <div class="mt-8 w-1/3 flex justify-center">
      <ButtonGroup {buttons} />
    </div>
    <div class="mt-8 w-1/3 flex justify-center">
      <AppLinkButton {link} />
    </div>
  </div>
</main>
