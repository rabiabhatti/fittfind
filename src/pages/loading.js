import React from 'react'

import '../styles/loading.css'
import logo_light from "../images/logo_light.png";

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
                <div className='section-loading-background space-between row-center'>
                    <div className='section-loading-major-percentage'>
                        <p>{loaded}</p>
                    </div>
                    {w_sections.map(s => (
                        <div className={`section-loading-fifth-portion ${loaded <= s && loaded > s-20 && 'loading'} ${loaded > s && 'loaded'} ${loaded === 100 && 'loaded'}`} key={s}/>
                    ))}
                </div>
                <div className='space-between section-loading-main-content'>
                    {loaded > 20 &&
                        <div className='section-loading-left-slogan-container'>
                            <span className='section-loading-left-slogan'>Find & release your inner athlete</span>
                            <div className='section-loading-left-slogan-cover' />
                        </div>
                    }
                    <div className='section-loading-minor-headings'>
                        <div className='section-loading-top-minor-heading-container'>
                            <h2 className='section-loading-minor-heading'>{loaded}%</h2>
                            <div className='section-loading-top-minor-heading-line' />
                        </div>
                        <h2 className='section-loading-minor-heading'>LOADING</h2>
                    </div>
                    <div className='align-center section-loading-logo-container'>
                        <img src={logo_light} alt='logo_light' className='section-loading-logo'/>
                    </div>
                    {loaded > 20 &&
                        <div className='space-between section-loading-right-slogan'>
                            <p>+</p>
                            <p className=''>Find & release your inner athlete</p>
                        </div>
                    }
                </div>
            </div>

        )
    }
}
