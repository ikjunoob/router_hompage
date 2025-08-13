import React from 'react'
import { useParams } from 'react-router-dom'
import { communityPosts } from './Community'

const CommunityDetail = () => {
    const { id } = useParams()
    const post = communityPosts.find((p) => p.id === Number(id))

    if (!post) {
        return <h2>게시글을 찾을 수 없습니다.</h2>
    }

    return (
        <section>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </section>
    )
}

export default CommunityDetail
