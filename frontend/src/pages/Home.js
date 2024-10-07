import { h } from 'snabbdom'
import Header from  '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return h('div', { 
    class: { 'flex': true, 'flex-col': true, 'min-h-screen': true, 'bg-gradient-to-r':true, 'from-indigo-400':true, 'to-cyan-400': true}
  }, [
    Header(),
    LandingPage(),
    Footer()
  ])
}

function LandingPage() {
    return h('main', { 
        class: { 'flex-grow': true, 'container': true, 'mx-auto': true, 'px-4': true, 'py-8': true }
        }, [
            h('div', {
                class: {'bg-white': true, 'bg-opacity-90': true, 'rounded-lg': true, 'shadow-lg': true, 'p-8': true }
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
                    class: { 'grid': true, 'grid-cols-1': true, 'md:grid-cols-3': true, 'gap-8': true, 'mb-12': true }
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
                            'font-bold': true, 'py-2': true, 'px-4': true, 'rounded': true
                            },
                            on: { click: () => {window.location.href= '/login'}  }
                        }, 'Try Trailblazer Now'),
                    ]),
                ])
        ])
}

function FeatureCard(title, description) {
  return h('div', { 
    class: { 'bg-white': true, 'p-6': true, 'rounded-lg': true, 'shadow-md': true }
  }, [
    h('h3', { 
      class: { 'text-xl': true, 'font-semibold': true, 'mb-2': true, 'text-blue-500': true }
    }, title),
    h('p', { 
      class: { 'text-gray-600': true }
    }, description),
  ])
}