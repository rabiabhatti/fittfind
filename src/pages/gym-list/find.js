import React from 'react'
import ShowMore from 'react-show-more';

import '../../styles/gym-find.css'
import gym_lockers from '../../images/gym_lockers.png'
import five_stars from '../../images/gym_five_star.png'
import profile_img from "../../images/profile_img.png";
import find_gym_map from "../../images/find-gym-map.png";
import horizontal_line from '../../images/horizontal_line.png'
import { Wrapper, Hero, ImpossibleBanner } from '../../components'
import find_gym_hero_img from '../../images/find-gym-hero-img.png'
import background_imag from '../../images/background-blue-imag.jpg';
import gym_healthy_snacks from '../../images/gym_healthy_snacks.png'
import gym_weight_equipment from '../../images/gym_weight_equipment.png'
import gym_special_machines from '../../images/gym_special_machines.png'
import gym_weight_equipment_s from '../../images/gym_weight_equipment_s.png'
import gym_cardiovascular_equipment from '../../images/gym_cardiovascular_equipment.png'

const scrolling_entries = ['About', 'Facilities', 'Amenities', 'Opening hours', 'Price'];
const amenities = [
    {
        name: 'Weight equipment',
        image: gym_weight_equipment,
    }, {
        name: 'Cardiovascular equipment',
        image: gym_cardiovascular_equipment,
    }, {
        name: 'Special machines',
        image: gym_special_machines,
    }, {
        name: 'Weight equipment',
        image: gym_weight_equipment_s,
    }, {
        name: 'Lockers',
        image: gym_lockers,
    }, {
        name: 'Healthy snacks',
        image: gym_healthy_snacks,
    }
];
const facilities = [
    {
        name: 'ab attack',
        price: '$9',
        desc: 'Blast your core in just 30 minutes. Designed to get you fit and ripped whilst having fun! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'aquacise',
        price: '$9',
        desc: 'A fun and challenge aerobic workout in swimming pool to music. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'deep water aquacise',
        price: '$9',
        desc: 'Great for all abilities and those with injuries. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'barre',
        price: '$9',
        desc: 'Beautiful Hollywood Hills home with pool and city views. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'fitball',
        price: '$9',
        desc: 'Create a stronger core, improve posture, and prevent back pain. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'pilates',
        price: '$9',
        desc: 'Slow controlling flowing movements, primarily to strengthen the core muscle. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'yoga',
        price: '$9',
        desc: 'Focus on strength, flexibility and breathing the boost physical and mental wellbeing. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }, {
        name: 'zumba',
        price: '$9',
        desc: 'Dance to great music and burn loads of calories without even realising. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
];

export default class FundGym extends React.Component {

    handleContentScroll = (id) => {
        const ele = document.getElementById(id.toLowerCase().split(' ').join('-'));
        ele.scrollIntoView({ block: 'end', behavior: 'smooth' });
    };

    render() {
        const nameChunk = this.props.location.search.split('&')[0].split('=');
        const name = nameChunk[nameChunk.length - 1].split('-').join(' ');

        return (
            <Wrapper name='Find Gym' location={this.props.location} gymNav={true}>
                <div className='section-background'>
                    <img className='section-background-blue-right-gym-find' src={background_imag} alt='background_blue_imag' />
                </div>
                <Hero>
                    <div className='section-find-gym-hero'>
                        <img src={find_gym_hero_img} alt='find_gym_hero_img' />
                    </div>
                </Hero>
                <div className='section-find-gym-content'>
                    <div className='section-find-gym-heading-container space-between'>
                        <h1>{name.toUpperCase()}</h1>
                        <button className='section-find-gym-map-btn' onClick={() => this.handleContentScroll('find_gym_map')}>
                            <span>Show map</span>
                            <div/>
                        </button>
                    </div>
                    <div className='section-find-gym-desc-container'>
                        <div className='section-find-gym-about-container'>
                            <h2>About</h2>
                            <p>Our Athletic Group Training zones contain a number of unique items of movement based equipment providing you a bespoke location and training environment to support you in achieving your performance goals. Equipment in this area can include (but is not limited to): Prowlers, Hurdles, Tyres, Ankoor, Bungee, sprint track and an infra red timing gate.</p>
                            <p>This versatile kit is also incorporated into a series of group workouts (knows as AGT workouts), so you can come and try out the equipment and new way of training with like minded members. The exercises contained in Athletic Group Training (AGT) combines various performance based exercises with gym based disciplines and movements which are inherent to improving athletic performance. Classes are designed to achieve maximum results in minimal time.</p>
                        </div>
                        <div className='row-start'>
                            <div className='section-find-gym-scrolling-entries-left-line' />
                            <div className='section-find-gym-scrolling-entries-container'>
                                {scrolling_entries.map((item, i) => (
                                    <div className='section-find-gym-scrolling-first-entry row-center' key={i}>
                                        <button
                                            key={i}
                                            className='section-find-gym-scrolling-entry-btn'
                                            onClick={() => this.handleContentScroll(item)}
                                        >
                                            {item.toUpperCase()}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='section-find-gym-facilities column-start' id='facilities'>
                        <h2>Facilities</h2>
                        <div className='section-find-gym-facilities-container'>
                            {facilities.map((item, i) => (
                                <div className='section-find-gym-facility' key={i}>
                                    <img src={require(`../../images/gym_banner_${i + 1}.jpg`)} alt='gym_banner' width={200} />
                                    <div className='section-find-gym-facility-content'>
                                        <div className='section-find-gym-facility-content-heading'>
                                            <img src={horizontal_line} alt='horizontal_line' />
                                            <div>
                                                <h3>{item.name}</h3>
                                                <h4>{item.price}</h4>
                                            </div>
                                        </div>
                                        <div className='section-find-gym-facility-desc'>
                                            <ShowMore
                                                lines={3}
                                                more='more'
                                                less='less'
                                                anchorClass='section-find-gym-facility-desc-anchor'
                                            >
                                                {item.desc}
                                            </ShowMore>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='section-find-gym-amenities' id='amenities'>
                        <h2>Amenities</h2>
                        <div>
                            {amenities.map((item, i) => (
                                <div key={i} className='section-find-gym-single-amenity'>
                                    <img src={item.image} alt={item.name} width={50} />
                                    <h4>{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='section-find-gym-reviews' id='reviews'>
                        <div className='section-find-gym-reviews-top-container'>
                            <div className='section-find-gym-reviews-top-left'>
                                <h2>Reviews</h2>
                                <h3>4.5</h3>
                                <p>Overall</p>
                                <img src={five_stars} alt='five_stars' />
                            </div>
                            <table className='section-find-gym-reviews-top-right'>
                                <tbody>
                                    <tr>
                                        <td>Accessibility</td>
                                        <td><img src={five_stars} alt='five_stars' /></td>
                                        <td>Location</td>
                                        <td><img src={five_stars} alt='five_stars' /></td>
                                    </tr>
                                    <tr>
                                        <td>Facilities available</td>
                                        <td><img src={five_stars} alt='five_stars' /></td>
                                        <td>Range of Facilities</td>
                                        <td><img src={five_stars} alt='five_stars' /></td>
                                    </tr>
                                    <tr>
                                        <td>Customer experience</td>
                                        <td><img src={five_stars} alt='five_stars' /></td>
                                        <td>Value</td>
                                        <td><img src={five_stars} alt='five_stars' /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='section-find-gym-reviews-bottom-container'>
                            <div className='section-find-gym-reviews-bottom-content'>
                                <div className='section-find-gym-reviews-bottom-left'>
                                    <img src={profile_img} alt='profile_img' />
                                    <img src={five_stars} alt='five_stars' />
                                    <h4>Lucy Liu</h4>
                                    <p>Fitness lover</p>
                                </div>
                                <p className='section-find-gym-reviews-bottom-right'>Where do I start, this gym is what I think about when I think of the perfect gym. It started with the location and excellent breeze coming off the ocean. It quickly moved to the awesome energy and knowledge that you get from the trainers here, they are eager to help and will to take time with you.</p>
                            </div>
                            <div className='section-find-gym-reviews-bottom-content'>
                                <div className='section-find-gym-reviews-bottom-left'>
                                    <img src={profile_img} alt='profile_img' />
                                    <img src={five_stars} alt='five_stars' />
                                    <h4>Lucy Liu</h4>
                                    <p>Fitness lover</p>
                                </div>
                                <p className='section-find-gym-reviews-bottom-right'>Where do I start, this gym is what I think about when I think of the perfect gym. It started with the location and excellent breeze coming off the ocean. It quickly moved to the awesome energy and knowledge that you get from the trainers here, they are eager to help and will to take time with you.</p>
                            </div>
                        </div>
                    </div>
                    <div id='opening-hours' className='section-find-gym-opening-hours'>
                        <h2>Opening hours</h2>
                        <div className='section-find-gym-hours-map-content'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>06:00 - 22:00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <img src={find_gym_map} alt='find_gym_map' id='show-map' />
                        </div>
                    </div>
                    <div id='price'>

                    </div>
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
