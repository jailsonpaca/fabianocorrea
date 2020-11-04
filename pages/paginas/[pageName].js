import React from 'react';
import { useRouter } from 'next/router';
import { getLanding, getAllLandings } from '../api/getLandings';
import Head from "next/head";

export default function Paginas({ data }) {
    const { query, isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>;
    }
    return (
        <>
            <Head>
                <title>Fabiano Correa | Psicanálise | Hipnose | Coach - {query.pageName}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
        </>
    );
}

export const getStaticPaths = async () => {
    const data = await getAllLandings();
    let paths = data.landings.map(e => {
        return { params: { pageName: e.name.replace(/ /g, "-") } }
    });
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const { pageName } = context.params;
    const data = await getLanding(pageName);
    return {
        props: {
            data: JSON.parse(JSON.stringify(data[0])),
        }
    }
}


/*import { builder, BuilderComponent } from '@builder.io/react';

builder.init('b9a6fb83c14a40da90c22edc40d15b36');

class CatchallBuilderPage extends React.Component {
    static async getInitialProps({ res, req, asPath }) {
        // Get the upcoming route full location path and set that for Builder.io page targeting
        const path = asPath.split('/')[2];
        // If there is a Builder page for this URL, this will be an object, otherwise it'll be null
        const page = await builder.get('page', { req, res,  url: '/'+path }).promise();

        if (res && !page) {
            res.statusCode = 404;
        }
        return { builderPage: page };
    }

    render() {
        return (
            <div>
                {this.props.builderPage ? (<BuilderComponent model="page" content={this.props.builderPage} />)
                    : (<h1>Nada encontrado...</h1>)}

            </div>);
    };
};

export default CatchallBuilderPage;*/