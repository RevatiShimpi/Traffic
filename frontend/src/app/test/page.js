"use client"
import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/mapDynamicComponent'),
    {loading: () => <p>Loading React azure maps ...</p>, ssr: false}
)


const LiveExample = () => {
    return (
        <div>
            <Head>
                <title>Live Map example</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="page">
                <div className="page__content">
                    <h1>Next.JS Map Example</h1>
                    <p>React-azure-maps with NEXT.JS</p>

                    <DynamicComponentWithNoSSR/>

                  
                </div>
            </main>
        </div>
    );
};

export default LiveExample;