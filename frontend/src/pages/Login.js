import { h } from 'snabbdom'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Login() {
    return h('div', { 
        class: {'flex':true, 'flex-col':true, 'min-h-screen': true, 'overflow-hidden': true, }
    }, [
        Header(),
        LoginPage(),
        Footer()
    ]);
}

function LoginPage() {
    let email= '';
    let password= '';

    let emailError= false;
    let passwordError= false;

    function validateForm(){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        email= email.trim();
        password= password.trim()
        
        emailError= email === '' || !re.test(email);
        passwordError= password === '';

        return !emailError && !passwordError;
    }


  return h('div', {
    class: { 'flex': true, 'flex-col': true,  'w-full': true, 'md:w-2/4': true, 'xl:w-1/4': true, '2xl:w-1/4': true, '3xl:w-1/3': true, 'mx-auto': true, 'my-auto':true, 'p-8': true, 'md:p-10': true, '2xl:p-12': true, '3xl:p-14': true, 'bg-white': true, 'rounded-2xl': true, 'shadow-xl': true }
  }, [
    h('div', { class: { 'flex': true, 'flex-row': true, 'gap-3': true, 'pb-4': true } }, [
      h('h1', { class: { 'text-3xl': true, 'font-bold': true, 'text-[#4B5563]': true, 'my-auto': true } }, 'Trailblazer')
    ]),
    h('div', { class: { 'text-sm': true, 'font-light': true, 'text-[#6B7280]': true, 'pb-8': true } }, 'Login to your profile.'),
    h('form', { class: { 'flex': true, 'flex-col': true }, 
        on: {submit: (e) => {
            e.preventDefault();
            if (!validateForm()){
                return;
            }
            authenticate(email, password);
        }} }, [
      h('div', { class: { 'pb-2': true } }, [
        h('label', { attrs: { for: 'email' }, class: { 'block': true, 'mb-2': true, 'text-sm': true, 'font-medium': true, 'text-[#111827]': true } }, 'Email'),
        h('div', { class: { 'relative': true, 'text-gray-400': true } }, [
          h('input', {
            attrs: { type: 'email', name: 'email', id: 'email', },
            props: {placeholder: 'name@email.com'},
            class: { 'mb-2': true, 'bg-gray-50': true, 'text-gray-600': true, 'border': true, 'focus:border-transparent': true, 'border-gray-300': true, 'sm:text-sm': true, 'rounded-lg': true, 'ring': true, 'ring-transparent': true, 'focus:ring-1': true, 'focus:outline-none': true, 'focus:ring-gray-400': true, 'block': true, 'w-full': true, 'p-2.5': true, 'rounded-l-lg': true, 'py-3': true, 'px-4': true },
            on: {input: (e) => {email = e.target.value;}}
        })
        ])
      ]),
      h('div', { class: { 'pb-6': true } }, [
        h('label', { attrs: { for: 'password' }, class: { 'block': true, 'mb-2': true, 'text-sm': true, 'font-medium': true, 'text-[#111827]': true } }, 'Password'),
        h('div', { class: { 'relative': true, 'text-gray-400': true } }, [
          h('input', {
            attrs: { type: 'password', name: 'password', id: 'password'},
            props: { placeholder: '••••••••••'},
            class: { 'mb-2': true, 'bg-gray-50': true, 'text-gray-600': true, 'border': true, 'focus:border-transparent': true, 'border-gray-300': true, 'sm:text-sm': true, 'rounded-lg': true, 'ring': true, 'ring-transparent': true, 'focus:ring-1': true, 'focus:outline-none': true, 'focus:ring-gray-400': true, 'block': true, 'w-full': true, 'p-2.5': true, 'rounded-l-lg': true, 'py-3': true, 'px-4': true },
            on: {input: (e) => {password = e.target.value;}}
          })
        ])
      ]),
      h('button', {
        attrs: { type: 'submit' },
        class: { 'w-full': true, 'text-[#FFFFFF]': true, 'bg-blue-600': true, 'focus:ring-4': true, 'focus:outline-none': true, 'focus:ring-primary-300': true, 'font-medium': true, 'rounded-lg': true, 'text-sm': true, 'px-5': true, 'py-2.5': true, 'text-center': true, 'mb-6': true }
      }, 'Login'),
      h('div', { class: { 'text-sm': true, 'font-light': true, 'text-[#6B7280]': true, 'text-center': true } }, [
        'Don\'t have an accout yet? ',
        h('a', { attrs: { href: '#' }, class: { 'font-medium': true, 'text-blue-600': true, 'hover:underline': true } }, 'Sign Up')
      ])
    ]),
  ]);
}

function authenticate(email, password) {
    console.log('Email:', email);
    console.log('Password:', password);
}