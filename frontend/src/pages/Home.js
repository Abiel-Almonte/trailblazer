import { h } from 'snabbdom'
import Header from  '../components/Header'
import Footer from '../components/Footer'
import { navigate } from '../index'

import backgroundVideo from '../../public/assets/tb7.webm'

export default function Home() {
  return h('div', { 
    class: { 'relative': true, 'min-h-screen': true, 'overflow-hidden': true, 'bg-[#B6E6FF]':true}
  }, [
    bgVideo(),
    h('div', {
      class: { 'relative': true, 'z-10': true, 'flex': true, 'flex-col': true, 'min-h-screen': true }
    }, [
      Header(),
      LandingPage(),
      Footer()
    ])
  ])
}

function bgVideo() {
  return h('video', {
    class: { 'fixed': true, 'left-0': true, 'bottom-0': true, 'w-1/2': true, 'h-1/2': true, 'object-cover': true,'z-0': true
    },
    props: {
      autoplay: true,
      loop: true,
      muted: true,
      playsInline: true,
      src: backgroundVideo
    },
  })
}

function LandingPage() {
    return h('main', { 
        class: { 'flex-grow': true, 'container': true, 'mx-auto': true, 'px-4': true, 'py-8': true }
        }, [
            h('div', {
                class: {'bg-white': true, 'bg-opacity-50': true, 'rounded-lg': true, 'shadow-lg': true, 'p-8': true, 'w-3/4':true, 'mx-auto':true}
            }, [
                h('section', { 
                    class: { 'text-center': true, 'mb-12': true }
                }, [
                    h('h1', { 
                        class: { 'text-4xl': true, 'font-bold': true, 'text-blue-600': true, 'mb-2': true }
                        }, 'Trailblazer'),
                    h('p', { 
                        class: { 'text-xl': true, 'text-gray-600': true }
                        }, 'Plot Your Path, Navigate Your World'),
                    ]),

                h('section', { 
                    class: { 'grid': true, 'grid-cols-1': true, 'md:grid-cols-3': true, 'gap-6': true, 'mb-12': true,}
                    }, [
                        FeatureCard('Select Start & End', 'Choose your journey\'s beginning and destination.'),
                        FeatureCard('Draw Obstacles', 'Map out the challenges in your path.'),
                        FeatureCard('Find Your Way', 'Let Trailblazer guide you through the maze.'),
                    ]),

                h('div', { 
                    class: { 'text-center': true }
                    }, [
                        h('button', { 
                            class: { 
                            'bg-blue-500': true, 'hover:bg-blue-700': true, 'text-white': true, 
                            'font-bold': true, 'py-2': true, 'px-4': true, 'rounded': true,
                            'hover:shadow-lg':true, 'hover:-translate-y-1':true, 'transition-transform':true, 'duration-300':true, 'ease-in-out':true
                            },
                            on: { click: () => navigate('/login')  }
                        }, 'Try Trailblazer Now'),
                    ]),
                ])
        ])
}

function FeatureCard(title, description) {
  return h('div', { 
    class: { 'bg-white': true, 'p-6': true, 'rounded-lg': true, 'shadow-md': true, 'hover:shadow-lg':true, 'hover:-translate-y-3':true, 'transition-transform':true, 'duration-300':true, 'ease-in-out':true}
  }, [
    h('h3', { 
      class: { 'text-xl': true, 'font-semibold': true, 'mb-2': true, 'text-blue-500': true }
    }, title),
    h('p', { 
      class: { 'text-gray-600': true }
    }, description),
  ])
}