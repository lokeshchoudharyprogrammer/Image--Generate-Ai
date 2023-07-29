
const imageForm = document.querySelector('.image-form')

// output elements
const description = document.querySelector('.description p')
const tags = document.querySelector('.tags p')
const thumbnail = document.querySelector('.thumbnail img')

// description and tags

// image/thumbnail
imageForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const res = await fetch('https://fragile-jay-visor.cyclic.app/openai/image', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imageForm.prompt.value }),
        method: 'POST'
    })
    const data = await res.json()
    console.log(data)
    thumbnail.setAttribute('src', data.url)
})