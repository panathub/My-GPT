<template>
  <div class="flex flex-col justify-between h-[calc(100%-60px)]">

    <div id="monP" class="overflow-auto">
      <div id="mon">
        <h1 v-show="messages" class="text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 my-10">
          MonGPT
        </h1>
        <div v-for="(message, index) in messages" :key="index" class="w-[80%] max-w-[800px] mx-auto">
          <div class="chat" :class="message.actor === 'AI' ? 'chat-end' : 'chat-start'">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img v-if="message.actor === 'AI'" src="~/assets/img/gpt-logo.png" />
                <img v-if="message.actor === 'Human'" src="~/assets/img/avatar.jpg" />
              </div>
            </div>
            <div class="chat-header">
              {{ message.actor }}
              <time  ime class="text-xs opacity-50">12:45</time>
            </div>
            <div class="chat-bubble">{{ message.message }}</div>
            <div class="chat-footer opacity-50">Delivered</div>
          </div>
          <!-- <div class="chat chat-end">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="~/assets/img/gpt-logo.png" />
            </div>
          </div>
          <div class="chat-header">
            {{ message.actor }}
            <time class="text-xs opacity-50">12:46</time>
          </div>
          <div class="chat-bubble">{{ message.message }}</div>
          <div class="chat-footer opacity-50">Seen at 12:46</div>
        </div> -->
        </div>
      </div>
    </div>

    <div class="w-[80%] max-w-[800px] mx-auto">
      <form class="mb-10">
        <div class="flex flex-col relative">
          <textarea @keypress.enter.exact.prevent="submitMessage" v-model="message"
            class="p-4 min-h-[56px] max-h-[200px] resize-none w-full" rows="1" placeholder="Send a message"></textarea>
          <button @click.prevent="submitMessage" data-tip="Send Message"
            class="tooltip w-8 h-8 rounded-md text-gray-300 flex items-center justify-center absolute top-1/2 right-3 -translate-y-2/4"
            :class="{ 'bg-[#18C37D] text-white': message }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="w-4 h-4">
              <path
                d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                fill="currentColor"></path>
            </svg>
          </button>
          <!-- <span class="loading loading-dots loading-md"></span> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const message = ref("");
const messages = ref([{
  actor: 'AI',
  message: 'Hello, how can I help you?'
}, {
  actor: 'Human',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto sint cum dolorum accusamus nulla dolores nobis pariatur incidunt veritatis error rerum facere voluptatum doloribus, sapiente obcaecati. Quos officiis dolore similique perferendis mollitia doloremque fugit fugiat nostrum quas, animi minus nisi tempora magni facilis placeat? Alias recusandae eius doloribus debitis eum quas! Quae magni impedit possimus eos ratione repellendus sint, laudantium expedita quos suscipit tenetur, non qui amet, ex laborum? Distinctio hic earum necessitatibus consequatur laborum minima voluptate? Consequuntur facere iure a saepe quod maiores necessitatibus enim repudiandae dolorem. Ratione assumenda magni aliquam dolor, quis sint, perspiciatis nesciunt vitae voluptatum aut nobis. A corporis voluptatibus dignissimos consequatur illo blanditiis asperiores. Libero veritatis illo dolores ea blanditiis fugiat necessitatibus culpa voluptatum quod ad, consectetur eos et ipsum a officia nobis impedit natus quisquam commodi aliquam nostrum, sit tempore pariatur? Eius illum necessitatibus voluptatem eum omnis modi, placeat voluptas officia at fugit quisquam porro obcaecati praesentium natus ad maxime! Sit nobis quam ipsum, quas eius sint dolore quibusdam ad perspiciatis a, quisquam ducimus, velit consequuntur perferendis commodi necessitatibus consectetur sunt iure dolorum optio repudiandae odit architecto. Incidunt nam laudantium fugit voluptate sed quisquam maxime sapiente eveniet quaerat. Ratione molestias maxime odit ut perspiciatis quis exercitationem minus sed laboriosam! Qui, velit. Esse magnam molestias consequuntur deleniti harum dolore praesentium culpa alias voluptatibus id numquam nostrum optio laborum eaque voluptatum velit aspernatur, quam autem quo vitae enim ducimus? Ea, recusandae voluptas magnam molestiae tempora facere placeat eos vitae perspiciatis soluta eligendi quod quas sint at earum corrupti, quasi voluptate laboriosam assumenda, optio suscipit enim ullam laudantium. Itaque, aliquam non, voluptatum modi hic asperiores culpa nulla illum ea ad soluta provident assumenda veniam animi praesentium obcaecati quae facere. Amet soluta sed labore fugit perferendis neque doloremque quae, eum quis fugiat suscipit voluptate culpa porro in.'

}, {
  actor: 'AI',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto sint cum dolorum accusamus nulla dolores nobis pariatur incidunt veritatis error rerum facere voluptatum doloribus, sapiente obcaecati. Quos officiis dolore similique perferendis mollitia doloremque fugit fugiat nostrum quas, animi minus nisi tempora magni facilis placeat? Alias recusandae eius doloribus debitis eum quas! Quae magni impedit possimus eos ratione repellendus sint, laudantium expedita quos suscipit tenetur, non qui amet, ex laborum? Distinctio hic earum necessitatibus consequatur laborum minima voluptate? Consequuntur facere iure a saepe quod maiores necessitatibus enim repudiandae dolorem. Ratione assumenda magni aliquam dolor, quis sint, perspiciatis nesciunt vitae voluptatum aut nobis. A corporis voluptatibus dignissimos consequatur illo blanditiis asperiores. Libero veritatis illo dolores ea blanditiis fugiat necessitatibus culpa voluptatum quod ad, consectetur eos et ipsum a officia nobis impedit natus quisquam commodi aliquam nostrum, sit tempore pariatur? Eius illum necessitatibus voluptatem eum omnis modi, placeat voluptas officia at fugit quisquam porro obcaecati praesentium natus ad maxime! Sit nobis quam ipsum, quas eius sint dolore quibusdam ad perspiciatis a, quisquam ducimus, velit consequuntur perferendis commodi necessitatibus consectetur sunt iure dolorum optio repudiandae odit architecto. Incidunt nam laudantium fugit voluptate sed quisquam maxime sapiente eveniet quaerat. Ratione molestias maxime odit ut perspiciatis quis exercitationem minus sed laboriosam! Qui, velit. Esse magnam molestias consequuntur deleniti harum dolore praesentium culpa alias voluptatibus id numquam nostrum optio laborum eaque voluptatum velit aspernatur, quam autem quo vitae enim ducimus? Ea, recusandae voluptas magnam molestiae tempora facere placeat eos vitae perspiciatis soluta eligendi quod quas sint at earum corrupti, quasi voluptate laboriosam assumenda, optio suscipit enim ullam laudantium. Itaque, aliquam non, voluptatum modi hic asperiores culpa nulla illum ea ad soluta provident assumenda veniam animi praesentium obcaecati quae facere. Amet soluta sed labore fugit perferendis neque doloremque quae, eum quis fugiat suscipit voluptate culpa porro in.'

}, {
  actor: 'Human',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto sint cum dolorum accusamus nulla dolores nobis pariatur incidunt veritatis error rerum facere voluptatum doloribus, sapiente obcaecati. Quos officiis dolore similique perferendis mollitia doloremque fugit fugiat nostrum quas, animi minus nisi tempora magni facilis placeat? Alias recusandae eius doloribus debitis eum quas! Quae magni impedit possimus eos ratione repellendus sint, laudantium expedita quos suscipit tenetur, non qui amet, ex laborum? Distinctio hic earum necessitatibus consequatur laborum minima voluptate? Consequuntur facere iure a saepe quod maiores necessitatibus enim repudiandae dolorem. Ratione assumenda magni aliquam dolor, quis sint, perspiciatis nesciunt vitae voluptatum aut nobis. A corporis voluptatibus dignissimos consequatur illo blanditiis asperiores. Libero veritatis illo dolores ea blanditiis fugiat necessitatibus culpa voluptatum quod ad, consectetur eos et ipsum a officia nobis impedit natus quisquam commodi aliquam nostrum, sit tempore pariatur? Eius illum necessitatibus voluptatem eum omnis modi, placeat voluptas officia at fugit quisquam porro obcaecati praesentium natus ad maxime! Sit nobis quam ipsum, quas eius sint dolore quibusdam ad perspiciatis a, quisquam ducimus, velit consequuntur perferendis commodi necessitatibus consectetur sunt iure dolorum optio repudiandae odit architecto. Incidunt nam laudantium fugit voluptate sed quisquam maxime sapiente eveniet quaerat. Ratione molestias maxime odit ut perspiciatis quis exercitationem minus sed laboriosam! Qui, velit. Esse magnam molestias consequuntur deleniti harum dolore praesentium culpa alias voluptatibus id numquam nostrum optio laborum eaque voluptatum velit aspernatur, quam autem quo vitae enim ducimus? Ea, recusandae voluptas magnam molestiae tempora facere placeat eos vitae perspiciatis soluta eligendi quod quas sint at earum corrupti, quasi voluptate laboriosam assumenda, optio suscipit enim ullam laudantium. Itaque, aliquam non, voluptatum modi hic asperiores culpa nulla illum ea ad soluta provident assumenda veniam animi praesentium obcaecati quae facere. Amet soluta sed labore fugit perferendis neque doloremque quae, eum quis fugiat suscipit voluptate culpa porro in.'

}]);

const submitMessage = async () => {
  if (message.value === '') return;

  messages.value.push({ actor: 'Human', message: message.value });
  message.value = '';


  // const req = await useFetch(`/api/openai`, {
  //   method: 'post',
  //   body: JSON.stringify(messages.value.slice(1))
  // });

  // if (req.status === 200) {
  //   const response = await req.json();
  //   messages.value.push({ actor: 'AI', message: response.message });
  //   message.value = '';
  // }
  
  setTimeout(ssss, 0);
  
}

const ssss = () => {
  const monPDiv = document.getElementById("monP")
  const monDiv = document.getElementById("mon")
  const monHight = monDiv.offsetHeight;
  monPDiv.scrollTo({
    top: monHight,
    behavior: "smooth" // For smooth scrolling, or use "auto" for instant scrolling
  });
}
// onMounted(() => {
//   submitMessage();
// });
</script>

<style lang="scss" scoped></style>
