<script>
  import "../app.css";
  import MenuLateral from "./components/MenuLateral/MenuLateral.svelte";
</script>
  
  <svg class="absolute top-0 z-50 right-0" width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M72.093 72V0H0.0929625C-0.746317 1.61498 3.41193 24.568 41.2049 30.888C68.6087 35.4786 59.0714 58.9657 72.093 72Z" fill="#E23C51"/>
    </svg>
    <div class="flex flex-row antialiased select-none">
      <MenuLateral/>
      <div class="bg-white pl-5 ml-12 w-full mr-4">
        <slot />
      </div>
  </div>
 