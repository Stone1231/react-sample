import React from "react";

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// 正確！這是一個 component 並且應該由大寫字母開頭：
function Hello(props) {
  // 正確！因為 div 是一個有效的 HTML 標籤，所以使用 <div> 是可行的：
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 正確！React 會因為大寫字母開頭而了解 <Hello /> 是一個 component。
  return <Hello toWhat="World" />;
}

const components = {
  sample1: BlueDatePicker,
  sample2: HelloWorld,
};

function Story(props) {
  // 錯誤！JSX 不能是表達式。
  // return <components[props.storyType] />;

  // 正確！JSX 類型可以是大寫字母開頭的變數。
  const SpecificStory = components["sample1"];
  return <SpecificStory />;
}

function Greeting(props) {
  return (
    <>
      {props.firstName} {props.lastName}
    </>
  );
}

function GreetingSamples() {
  const props = { firstName: "Ben", lastName: "Hector" };
  return (
    <>
      <Greeting firstName="Ben" lastName="Hector" />
      <Greeting {...props} />
    </>
  );
}

const Button = (props) => {
  // 在以上的範例中，kind prop 被安全地挑出並且不會被傳遞進 DOM 中的 <button> element。
  // 所有其它的 props 藉由 ...other object 被傳遞，讓 component 的應用非常具有彈性。
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const ButtonSamples = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => alert("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

function UL(props) {
  return <ul>{props.children}</ul>;
}

function LI() {
  let list = [
    // 別忘了加 keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];

  return <UL>{list}</UL>;
}

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ["finish doc", "submit pr", "nag dan to review"];
  return (
    <ul>
      {todos.map((message) => (
        <Item key={message} message={message} />
      ))}
    </ul>
  );
}

// numTimes 次呼叫 children callback 來重複生成 component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

function Ignored() {
  return (
    <>
      <div />
      <div></div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>
      <div>String(false): {String(false)}</div>
    </>
  );
}

function ShowHeader() {
  const Header = function () {
    return <div>Header</div>;
  };
  const Content = function () {
    return <div>Content</div>;
  };
  const showHeader = true;
  return (
    <div>
      {showHeader && <Header />}
      <Content />
    </div>
  );
}

function DisplayMessages() {
  const MessageList = function (props) {
    let items = [];
    for (let i = 0; i < props.messages.length; i++) {
      items.push(<li>{props.messages[i]}</li>);
    }
    return <ul>{items}</ul>;
  };

  const ShowMessages = function (props) {
    return (
      props.messages.length > 0 && <MessageList messages={props.messages} />
    );
  };

  const messages = ["finish doc", "submit pr", "nag dan to review"];
  return <ShowMessages messages={messages} />;
}

export default (
  <div>
    <b>BlueDatePicker</b>
    <BlueDatePicker />
    <b>Story</b>
    <Story />
    <b>GreetingSamples</b>
    <GreetingSamples />
    <b>ButtonSamples</b>
    <ButtonSamples />
    <b>LI</b>
    <LI />
    <b>TodoList</b>
    <TodoList />
    <b>Functions 作為 Children</b>
    <ListOfTenThings />
    <b>Ignored</b>
    <Ignored />
    <b>Show Header</b>
    <ShowHeader />
    <b>Display Messages</b>
    <DisplayMessages />
  </div>
);
