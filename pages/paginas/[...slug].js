import React from 'react';
import { builder, BuilderComponent } from '@builder.io/react';

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

export default CatchallBuilderPage;