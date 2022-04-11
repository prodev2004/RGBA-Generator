// I upload videos everyday so If you don't want to miss them make sure to subscribe.
// Also like the video so more people can see it...

const changeColor = () => {
    const red_range = document.querySelector('.red-range').value
    const green_range = document.querySelector('.green-range').value
    const blue_range = document.querySelector('.blue-range').value
    const alpha_range = document.querySelector('.alpha-range').value

    const alpha = alpha_range > 9 ? 1 : '0.' + alpha_range
    const generated_color = `rgba(${red_range}, ${green_range}, ${blue_range}, ${alpha})`

    document.body.style.backgroundColor = generated_color
    document.querySelector('.color').innerText = generated_color
}

document.querySelectorAll('input').forEach(range => {
    range.addEventListener('input', changeColor)
})