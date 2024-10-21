function one(){
    const div = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')
    input.type = `color`


    document.body.appendChild(div)
        document.body.appendChild(input)
    div.style.height = `200px`
    div.style.width = `200px`
    div.style.border = `2px solid black`
    input.addEventListener('input', ()=>{
        div.style.backgroundColor = input.value
    })
}
function two(){
    const btn = document.createElement('button')
    const input = document.createElement('input')
    const a = document.createElement('a')
    document.body.appendChild(btn)
    btn.textContent = `Wygeneruj link`
    document.body.appendChild(input)
    btn.addEventListener('click', ()=>{
        a.textContent = input.value
        a.setAttribute('href', 'https://${input.value}')
        a.setAttribute(`target`,'blank_')
        document.body.appendChild(a)
    })
}
function three(){
    const div = document.createElement('div')
    const inputheight = document.createElement('input')
    const inputwidth = document.createElement('input')
    const button = document.createElement('button')
    const p = document.createElement('p')
    inputheight.placeholder = `Podaj wysokość`
    inputwidth.placeholder = `Podaj szerokość`
    document.body.appendChild(inputheight)
    document.body.appendChild(inputwidth)
    document.body.appendChild(button)
    button.textContent = `wygeneruj`
   
    button.addEventListener('click', ()=>{
        document.body.appendChild(div)
        div.style.border = `2px solid black`
        div.style.justifyContent = `center`
        div.style.alignItems = `center`
        div.style.display = `flex`
        div.style.height = `${inputheight.value}px`
        div.style.width = `${inputwidth.value}px`
        div.appendChild(p)
        p.textContent = `${inputheight.value}x${inputwidth.value}`
    })

}
function four(){
    const input = document.createElement('input')
    const button = document.createElement('button')
    const ul = document.createElement('ul')
    document.body.appendChild(input)
    document.body.appendChild(button)
    document.body.appendChild(ul)
    button.textContent = `Dodaj do listy`
    button.addEventListener('click',()=>{
        const li = document.createElement('li')
        li.textContent = `${input.value}`
        ul.appendChild(li)
        const delbtn = document.createElement('button')
        delbtn.textContent = `usun element`
        li.appendChild(delbtn)
        delbtn.addEventListener('click', ()=>{
            li.remove()
            delbtn.remove()
        })
    })
}