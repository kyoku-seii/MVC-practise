import $ from 'jquery'
import './app1.css'
let $screen = $('#screen')
const n = sessionStorage.getItem('n')
$screen.text(n || parseInt($screen.text()))
let $number = parseInt($screen.text())

const $buttonAdd = $('#add')
const $buttonMin = $('#min')
const $buttonMul = $('#mul')
const $buttonDiv = $('#div')

$buttonAdd.on('click', () => {
    $number += 1;
    $screen.text($number)
    sessionStorage.setItem('n', $number)
})
$buttonMin.on('click', () => {
    $number -= 1;
    $screen.text($number)
    sessionStorage.setItem('n', $number)
})
$buttonMul.on('click', () => {
    $number *= 2;
    $screen.text($number)
    sessionStorage.setItem('n', $number)
})
$buttonDiv.on('click', () => {
    $number = parseInt($number / 2);
    $screen.text($number)
    sessionStorage.setItem('n', $number)
})
