import $ from 'jquery'
import './app2.css'
const $bar = $('.app2 .bar')
const $barContent = $('.app2 .bar-content')

$bar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    const index = $li.index()
    $barContent.children().eq(index).addClass('active').siblings().removeClass('active')
})




