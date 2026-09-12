<script lang="ts">
    import type { EnemyInfo } from "$lib/types/EnemyInfo";

    let { info, threaded = false}: {info: EnemyInfo, threaded?: boolean} = $props();
    let iconPath = $derived("assets/enemies/" + info.icon);
    let artPath = $derived("assets/enemies/" + info.art);
    let hpIndex = $derived(threaded ? 1 : 0);
</script>

<div class="flex flex-row items-center w-full border-b border-b-white/50 pl-4 my-2">
    <!-- Profile  -->
    <div class="size-24 relative">
        <img src={iconPath} alt="enemy icon" loading="lazy" class="object-contain size-24 p-3 bg-black"
            style="mask-image: url('assets/menu/bestiary_icon_frame_mask.png');
                mask-size: contain;
                mask-repeat: no-repeat;
                mask-position: center;
                -webkit-mask-image: url('assets/menu/bestiary_icon_frame_mask.png');
                -webkit-mask-size: contain;
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-position: center;"
        />
        <img src="assets/menu/bestiary_icon.png" alt="enemy icon" loading="lazy" class="absolute left-0 top-0 z-10 object-contain size-24"/>
    </div>

    <!-- Name & HP -->
    <div class="flex w-full flex-wrap place-items-center  place-content-between">
        <h2 class="ml-4 text-wrap text-lg 2xl:text-2xl">{info.name}</h2>
        <h2 class="mx-4 font-bold text-lg 2xl:text-2xl">{info.hitpoints[hpIndex]}</h2>
    </div>
</div>



