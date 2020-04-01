import React from 'react'

import '../../styles/list-yourself.css'
import down_arrow from '../../images/forward-icon.png'
import achievement_badge from '../../images/ethereum.png'
import gym_dashboard_banner from '../../images/gym_dashboard_banner.jpg'
import gym_dashboard_profile from '../../images/gym_dashboard_profile.jpg'
import { Wrapper, Hero, ImpossibleBanner, UserAttribute} from "../../components";

export default class ListYourself extends React.Component {
    state = {
        user: {
            name: 'scott mathison',
            profession: 'Director, Professional Stuntman, & Blogger',
            location: 'London, United Kingdom',
            summery: 'Exercise is powerful ingredient for health and helps prevent many serious health problems. The Fitness Profile helps individuals see how fit they are and what they need to do to improve their overall fitness and health.',
            life_style: 'Intermittently active',
            training_env: 'Outdoor in Park',
            xp: '160000',
            profile_strength: 92,
            fourteen_days_gym_sessions: 14,
            total_gym_sessions: 398,
            attribute: {
                strength: 65,
                power: 40,
                agility: 96,
                balance: 100,
                flexibility: 39,
                muscle_endurance: 100,
                cardiovascular_endurance: 103,
                co_ordination: 83
            },
            achievements: [
                {
                    title: 'practice makes perfect',
                    desc: 'You completed fitness activities in gym/studio three times in a row!'
                },{
                    title: 'on a roll',
                    desc: 'You completed fitness activities in gym/studio three times in a row!'
                },{
                    title: 'practice makes perfect',
                    desc: 'You completed fitness activities in gym/studio three times in a row!'
                },{
                    title: 'practice makes perfect',
                    desc: 'You completed fitness activities in gym/studio three times in a row!'
                }
            ],
        }
    };

    handleFitnessClick = () => {
        return null
    };

    render() {
        const { user } = this.state;

        return (
            <Wrapper name='List Yourself' location={this.props.location} gymNav={true}>
                <Hero>
                    <div className='section-gym-dashboard-hero'>
                        <img src={gym_dashboard_banner} alt='gym_dashboard_banner' width={600} />
                    </div>
                </Hero>
                <div className='section-gym-dashboard-container'>
                    <div className='section-gym-dashboard-left'>
                        <img src={gym_dashboard_profile} alt='gym_dashboard_profile' width={100} />
                    </div>
                    <div className='section-gym-dashboard-right row-start space-between'>
                        <div className='section-gym-dashboard-user-info'>
                            <h1>{user.name.toUpperCase()}</h1>
                            <p>{user.profession}</p>
                            <p className='heading-light'>{user.location}</p>
                            <div className='row-center'>
                                <button onClick={this.handleFitnessClick} className='section-gym-dashboard-fitness-btn'>
                                    upgrade fitness
                                    <img src={down_arrow} alt='down_arrow' />
                                </button>
                                <button className='section-gym-dashboard-more-btn'>more</button>
                            </div>
                            <p className='heading-light'>SUMMERY:</p>
                            <p>{user.summery}</p>
                            <p className='heading-light'>LIFESTYLE:</p>
                            <p>{user.life_style}</p>
                            <p className='heading-light'>TRAINING ENVIRONMENT:</p>
                            <p>{user.training_env}</p>
                            <img src={gym_dashboard_profile} alt='gym_dashboard_profile' width={500} />
                            <div className='section-gym-dashboard-user-activity-tracker'>

                            </div>
                        </div>
                        <div className='section-gym-dashboard-user-calculations'>
                            <div className='row-center space-between section-gym-dashboard-user-xp-container'>
                                <div className='column-start'>
                                    <div className='row-center space-between full-width'>
                                        <p>XP</p>
                                        <p>{user.xp}/200000</p>
                                    </div>
                                    <div className='section-gym-dashboard-user-strength-bar'>
                                        <div style={{ width: `${user.xp/200000*100}%`}} className='section-gym-dashboard-user-strength-bar-fill' />
                                    </div>
                                </div>
                                <div className='column-start section-gym-dashboard-user-strength-container'>
                                    <div className='row-center space-between full-width'>
                                        <p>PROFILE STRENGTH</p>
                                        <p>ADVANCED</p>
                                    </div>
                                    <div className='section-gym-dashboard-user-strength-bar'>
                                        <div style={{ width: `${user.profile_strength}%`}} className='section-gym-dashboard-user-strength-bar-fill' />
                                    </div>
                                </div>
                            </div>
                            <div className='column-start space-between section-gym-dashboard-user-statistics'>
                                <h3 className='heading-light section-gym-dashboard-user-statistics-heading'>profile statistics</h3>
                                <div className='row-center space-between full-width'>
                                    <div className='row-center section-gym-dashboard-user-statistics-left'>
                                        <h2>{user.fourteen_days_gym_sessions}</h2>
                                        <div className='column-start'>
                                            <p>gym sessions</p>
                                            <p className='heading-light'>in last 14 days</p>
                                        </div>
                                    </div>
                                    <div className='row-center section-gym-dashboard-user-statistics-right'>
                                        <h2>{user.total_gym_sessions}</h2>
                                        <div className='column-start'>
                                            <p>gym sessions</p>
                                            <p className='heading-light'>total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-gym-dashboard-user-attributes'>
                                <h2>ATTRIBUTE</h2>
                                <div className='column-center'>
                                    <UserAttribute name='strength' attribute={user.attribute.strength} progress={{type: 'add', width: '4', value: '+2'}} />
                                    <UserAttribute name='power' attribute={user.attribute.power} progress={{type: 'add', width: '3', value: '+2'}} />
                                    <UserAttribute name='agility' attribute={user.attribute.agility} progress={{type: 'add', width: '2', value: '+2'}} />
                                    <UserAttribute name='balance' attribute={user.attribute.balance} progress={{type: 'add', width: '5', value: '+2'}} />
                                    <UserAttribute name='flexibility' attribute={user.attribute.flexibility} progress={{type: 'subtraction', width: '4', value: '-2'}} />
                                    <UserAttribute name='muscle endurance' attribute={user.attribute.muscle_endurance} progress={{type: 'add', width: '7', value: '+2'}} />
                                    <UserAttribute name='cardiovascular endurance' attribute={user.attribute.cardiovascular_endurance} progress={{type: 'add', width: '3', value: '+2'}} />
                                    <UserAttribute name='co-ordination' attribute={user.attribute.co_ordination} progress={{type: 'add', width: '6', value: '+2'}} />
                                </div>
                            </div>
                            <div className='section-gym-dashboard-user-achievements-container'>
                                <h2>ACHIEVEMENTS</h2>
                                <div className='section-gym-dashboard-user-achievements-list'>
                                    {user.achievements.map((achievement, i) => (
                                        <div className='section-gym-dashboard-user-single-achievement' key={i}>
                                            <img src={achievement_badge} alt='achievement_badge' />
                                            <h4>{achievement.title.toUpperCase()}</h4>
                                            <p>{achievement.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
