import * as React from "react"
import {graphql} from "gatsby"


export default function WpPost({data}) {
    console.log(data);
    return (
        <div className="prose">
            <h1>Post Title</h1>
            <div dangerouslySetInnerHTML={{__html: data.wpPost.content}} className="prose prose-2xl"/>
        </div>
    )
}

export const query = graphql`

query PostQuery($id: String) {
    wpPost(id: {eq: $id}) {
        content
        slug
        title
        uri
    }
}

`