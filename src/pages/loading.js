import React from 'react'

import '../styles/loading.css'

const height = window.innerHeight;

export default class Loading extends React.Component {
    state = {
      loaded: 0,
      totalTime: 5,
    };

    componentDidMount() {
        this.updatePercentage()
    }

    updatePercentage = () => {
        const { totalTime } = this.state;
        const incrementTime = totalTime/100*1000;
        this.timer = setInterval(
            () => this.setState(prevState => {
                if (prevState.loaded >=100) {
                    clearInterval(this.timer)
                } else {
                    return { loaded: prevState.loaded+1}
                }
            }),
            incrementTime,
        );

    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { loaded } = this.state;
        const w_sections= [20, 40, 60, 80, 100];

        return (
            <div className='section-loading'>
                <div className='section-loading-container space-between row-center'>
                    <div className='section-loading-major-percentage'>
                        <p>{loaded}</p>
                    </div>
                    {w_sections.map(s => (
                        <div className={`section-loading-fifth-portion ${loaded <= s && loaded > s-20 && 'loading'} ${loaded > s && 'loaded'} ${loaded === 100 && 'loaded'}`} key={s}/>
                    ))}
                </div>
            </div>

        )
    }
}
