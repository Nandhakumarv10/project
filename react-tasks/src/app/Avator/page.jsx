const user = {
    name: 'Hello',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };


  export default function Avator() {
    return (
      <>
      
        <h1>{user.name}</h1>
        <img
          className="avatar rounded-xl"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  