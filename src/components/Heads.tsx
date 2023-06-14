import React from 'react'
import Head from 'next/head'

type HeadsProps = {
    title: string,
    content: string
}
const Heads = (props: HeadsProps) => {
    const {title, content} =  props
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

            </Head>
        </>
    )
}

export default Heads