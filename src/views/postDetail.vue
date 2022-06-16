<template>
  <div
    class="mx-auto px-4 container border-l border-r min-h-screen border-gray-500/30 py-6 popins-font bg-gray-100"
  >
    <div>
      <div class="w-full px-10">
        <img
          class="rounded-xl object-cover h-52 w-full"
          src="https://images.pexels.com/photos/3269269/pexels-photo-3269269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div class="w-full text-sm text-right">
        <div class="px-10 text-gray-500">Posted: 16.06.2022 Updated: 17.06.2022</div>
      </div>

      <div class="w-full px-10 mt-6">
        <h2 class="text-2xl uppercase text-gray-800">How to use session on asp.net</h2>
        <div class="content mt-3 text-justify">
          Our goal is to move (1,1) and make it at (0,1) which isn’t technically possible.
          So we will try to fake it. We previously said that our range is [0 1] (or [0%
          100%]) so let’s imagine the case when 0% is very close to 100%. If, for example,
          we want to animate top from 20px (0%) to 20.1px (100%) then we can say that both
          the initial and final states are equal. Hm, but our element will not move at
          all, right? Well, it will move a little because the Y value exceeds 20.1px
          (100%). But that’s not enough to give us perceptible movement:
        </div>
      </div>
    </div>
  </div>
</template>
