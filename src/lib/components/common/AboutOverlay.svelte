<script lang="ts">

</script>

<div class="h-full w-full flex flex-col bg-[#0A0A0C] rounded-3xl border-2 border-white/75 place-content-between max-h-[80vh] overflow-y-auto ">
    <div class="p-8">
        <!-- Header -->
        <div class="flex flex-row items-center pb-4">
            <img src="assets/menu/silksong_icon.png" alt="silksong icon" class="object-contain max-h-10"/>
            <h1 class="text-4xl text-extrabold">About</h1>
        </div>
        <hr class="mb-4">

        <!-- Description -->
        <p>Hornet's Calculator is a damage analysis tool for the game <a href="https://hollowknightsilksong.com" class="tl"> Hollow Knight: Silksong</a>.</p>
        <p>This project is heavily inspired by <a href="https://www.isaiahchin.com/" class="tl">Isaiah's</a> work on his version of the <a href="https://isaiahchin.github.io/the-knights-calculator/" class="tl">Hollow Knight Damage Calculator.</a> I found the project very cool, and ever since Silksong was released, I had always wanted a version of the calculator for Silksong.</p>

        <!-- Disclaimers -->
        <h2 class="text-2xl">Disclaimers</h2>
        <ul>
            <li>This project is not affiliated with Hollow Knight: Silksong or <a href="https://www.teamcherry.com.au" class="tl">Team Cherry</a>.</li>
            <li>Art assets used are owned by Team Cherry.</li>
        </ul>

        <!-- Assumptions & Limitations -->
        <h2 class="text-2xl">Assumptions & Limitations</h2>
        <ul>
            <li>All values and calculations are based on the <a href="https://hollowknight.wiki/w/Hollow_Knight_Wiki" class="tl">Hollow Knight Wiki</a>.</li>
            <li>Enemy damage modifiers are not currently considered in the damage calculations.</li>
            <li>DPS calculations do not take challenge modifiers into account.</li>
            <li>Multi-hit skills and tools assume that all subsequent hits are successful.</li>
            <li>Black-Thread filters for units that have modified health during Act 3 only.</li>
        </ul>

        <!-- Tools & Skills -->
        <h2 class="text-2xl">Tools & Skills</h2>
        <div class="flex flex-row place-items-center">
            <li>Volt Filament assumes 3 instances of 5 flat damage for all skills.</li>
            <img src="assets/tools/blue/18_volt_filament.png" alt="volt filament" class="size-8 mx-1"/>
        </div>
        <div class="flex flex-row place-items-center">
            <li>Damage over time only displays tick damage. Damage boosts are calculated alongside needle damage.</li>
            <img src="assets/tools/red/20_flintslate.png" alt="volt filament" class="size-8 mx-1"/>
            <img src="assets/tools/blue/05_pollip_pouch.png" alt="volt filament" class="size-8 mx-1"/>
        </div>
    </div>

    <div class="flex w-full px-5 pb-4 place-content-between items-end">
        <span class="text-sm">Built by <a href="https://github.com/stevencastro31" class="tl">Steven</a>. All rights reserved.</span>
        <a href="https://github.com/stevencastro31/the-hornets-calculator" class="flex flex-row items-center h-8 pl-2 pr-4 py-5 rounded-xl border-2 border-white/50 hover:border-white">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github" class="size-6 invert mr-2"/>
            Source
        </a>
    </div>
</div>

<style>
    hr {
        filter: brightness(0.5);
    }

    img {
        user-select: none;
    }

    li {
        list-style-type: circle;
        margin-left: 2rem;
    }

    h2 {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-weight: 700;
    }

    p {
        padding-bottom: 1rem;
    }

    a.tl {
        text-decoration-line: underline;
    }
</style>
