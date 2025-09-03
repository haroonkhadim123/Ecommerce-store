import React from 'react'

const Loader = () => {
  return (
    <div class="flex items-center justify-center space-x-2">
  <span class="w-3 h-3 bg-[#0000FF66] rounded-full animate-bounce"></span>
  <span class="w-3 h-3 bg-[#0000FF66] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
  <span class="w-3 h-3 bg-[#0000FF66] rounded-full animate-bounce [animation-delay:-0.6s]"></span>
</div>

  )
}

export default Loader