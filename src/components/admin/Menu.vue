<template>
  <div class="container mx-auto text-sm pb-10 pt-10">
    <div class="p-6 bg-gray-600 rounded-md">
      <h3 class="text-lg text-white px-1 py-3 font-sans font-semibold tracking-widest">
        New Menu
      </h3>

      <div>
        <div class="bg-gray-500 px-2 py-4 rounded-md">
          <div class="md:flex">
            <div class="md:inline-block md:basis-1/4 mx-2 mt-2">
              <label class="text-white">Menu</label>
              <input
                type="text"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Order</label>
              <input
                type="number"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Link</label>
              <input
                type="text"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Icon</label>
              <input
                type="text"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <!-- <div class="inline mx-2 self-end">
            <button
              class="bg-green-500 px-2 py-1 rounded-md text-white hover:bg-green-600"
            >
              Active
            </button>
          </div> -->
          </div>
          <div class="px-2 py-4">
            <button
              class="bg-green-600 text-white hover:bg-green-700 w-full px-2 py-1.5 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
