import { h } from 'snabbdom'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Login() {
    return h('div', { 
        class: { 'w-full': true, 'h-screen': true, 'relative': true }
    }, [
        Header(),
        LoginPage(),
        Footer()
    ]);
}

function LoginPage(){
    return h('div', {
        class: { 'absolute': true, 'top-0': true, 'left-0': true, 'w-full': true, 'p-4': true, 'text-black': true }
    }, [
        h('h1', { class: { 'text-2xl': true } }, 'Login Page')
    ]);
}