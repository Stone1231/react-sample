import React from "react";

function Post(props) {
  return (
    <div>
      id:{props.id}
      <br />
      key:{props.key}
      <br /> {/*沒東西*/}
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <Post
      key={post.id} //Key 的功能是提示 React，但它們不會被傳遞到你的 component
      id={post.id} //如果在 component 中需要同樣的值，可以直接把這個值用一個不同的名稱作為 prop 傳下去
      title={post.title}
      content={post.content}
    />
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

export default <Blog posts={posts} />;
