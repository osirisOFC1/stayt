import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Aymen Trabelsi',
        bio: 'Aka OSIRIS',
        imgSrc: 'https://thumbs.gfycat.com/TinyWellwornAsp-max-1mb.gif',
        profession: 'Beginner Developper at GOMYCODE'
      },
      show: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, mountedTime } = this.state;
    const mountedTimeClassName = mountedTime % 2 === 0 ? 'mounted-time active' : 'mounted-time';

    return (
      <div className="container">
        <button className="button" onClick={this.toggleShow}>
          Toggle Show
        </button>

        {show && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Avatar" />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p className={mountedTimeClassName}>Mounted Time: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;

