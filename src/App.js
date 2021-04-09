import React from 'react'

import { Pathogenesis, Impact, Intro, IntroDive, Links } from './sections'

export default function App() {
    return (
        <main>
            <Intro />
            <IntroDive />
            <Pathogenesis />
            <Impact />
            <Links />
        </main>
    )
}