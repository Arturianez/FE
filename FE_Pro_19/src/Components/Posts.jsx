import PostItem from "./PostItem";
import { ArrayObjects } from "./UI/ArrayObjects";


function Posts() {
    const [posts, SetPosts] = useState(ArrayObjects)
    const [firstWord, setFirstWord] = useState("")
    const [secondWord, setSecondWord] = useState("")
    const [thirdWord, setThirdWord] = useState("")

function createNewPost() {
    const newObjectPost = {
        title: firstWord,
        description: secondWord,
        author: thirdWord
    }
    SetPosts([...posts, newObjectPost])
    setFirstWord("")
    setSecondWord("")
    setThirdWord("")
}
    return (
        <div className="posts">
            <h3>The post here!</h3>
            {
                posts.map((item) => {
                    <PostItem
                    title={item.firstWord}
                    description={item.secondWord}
                    author={item.thirdWord}
                    />
                })
            }
        </div>
    )
}
export default Posts