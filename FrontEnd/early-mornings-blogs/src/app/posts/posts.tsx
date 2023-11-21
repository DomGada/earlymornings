export default function Posts() {
  interface post {
    post_id: string;
    post: string;
    title: string;
  }
  // F1EEE3 Chiffon white porsche.
  // DD9448 Cork interior.
  // we can easily store a post in a row in SQL

  let posts = [
    {
      post_id: "1",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est, deserunt sed repellat quia exercitationem, modi temporibus provident laboriosam consectetur veniam magni vitae? Natus eligendi a quos in ipsa possimus.",
      title: "Who we are?",
    },
    {
      post_id: "2",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut omnis minus delectus nemo reprehenderit suscipit debitis dolore. Dicta, fuga. Cumque possimus voluptas odio ducimus animi. Dolorum eos vero perferendis!",
      title: "How we did?",
    },
    {
      post_id: "3",
      post:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur exercitationem perspiciatis ut cumque earum. Ad, nulla. Praesentium quaerat, culpa quis, numquam doloremque, maxime harum consectetur nihil delectus porro ipsa.",
      title: "Recent Adventure!",
    },
    {
      post_id: "4",
      post:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, nulla perferendis fugit in facilis impedit inventore corporis, tenetur, deserunt modi unde porro architecto illo necessitatibus et saepe officia? Facere, porro!",
      title: "Finally Made it!",
    },
    {
      post_id: "5",
      post:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quisquam accusamus placeat error, similique, omnis voluptates tenetur laborum tempore incidunt ipsum veniam reiciendis, quibusdam beatae consectetur sit reprehenderit ut minima.",
      title: "New Gear!",
    },
    {
      post_id: "6",
      post:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolorum ratione culpa hic quod illum, soluta voluptates placeat rem aspernatur! Tempora molestiae velit saepe deleniti rem necessitatibus eos repudiandae modi.",
      title: "How to overcome adversity.",
    },
  ];

  return (
    <div className="m-5 grid grid-cols-3 gap-4 content-start">
      {posts.map((post) => (
        <div className="max-w-xl h-auto border-2 border-white border-solid">
          <h2 className="m-2 text-center">{post.title}</h2>
          <p className="m-2">{post.post}</p>
        </div>
      ))}
    </div>
  );
}
