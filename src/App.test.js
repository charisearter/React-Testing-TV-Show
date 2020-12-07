import React from 'react';

//import testing methods
//render - bring it, fireEvent - do this Event, waitFor - wait for blah
import { render, fireEvent, waitFor } from '@testing-library/react';

//import the coponent being tested
import App from './App';

//import userEvent to simulate dropdown use
import userEvent from '@testing-library/user-event'

//import mock fetchShow axios call fn
//import it as mockFetchShow to avoid confusion and keep everything straight

import { fetchShow as mockFetchShow } from './api/fetchShow'
//import { fetchShow as mockFetchShow } from './App'

//shortcut that mocks everything in the directory (Dustin showed us this)
jest.mock('./api/fetchShow');

//data I want userEvent to select (season 2)
const allEps = {
    data: [
        {
            "id": 909340,
            "url": "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
            "name": "Chapter One: MADMAX",
            "season": 2,
            "number": 1,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg"
            },
            "summary": "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909340"
            }
            }
            },
            {
            "id": 909342,
            "url": "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
            "name": "Chapter Two: Trick or Treat, Freak",
            "season": 2,
            "number": 2,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg"
            },
            "summary": "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909342"
            }
            }
            },
            {
            "id": 909343,
            "url": "http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
            "name": "Chapter Three: The Pollywog",
            "season": 2,
            "number": 3,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg"
            },
            "summary": "<p>Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909343"
            }
            }
            },
            {
            "id": 909344,
            "url": "http://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise",
            "name": "Chapter Four: Will the Wise",
            "season": 2,
            "number": 4,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332045.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332045.jpg"
            },
            "summary": "<p>After his encounter with the shadow creature, Will's condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909344"
            }
            }
            },
            {
            "id": 909345,
            "url": "http://www.tvmaze.com/episodes/909345/stranger-things-2x05-chapter-five-dig-dug",
            "name": "Chapter Five: Dig Dug",
            "season": 2,
            "number": 5,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332050.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332050.jpg"
            },
            "summary": "<p>Jim is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding her birth.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909345"
            }
            }
            },
            {
            "id": 909346,
            "url": "http://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
            "name": "Chapter Six: The Spy",
            "season": 2,
            "number": 6,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332052.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332052.jpg"
            },
            "summary": "<p>Owens and his team try to find a way to end the shadow creature's influence on Will. Meanwhile, Dustin and Lucas find unlikely allies in their quest to find Dart.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909346"
            }
            }
            },
            {
            "id": 909347,
            "url": "http://www.tvmaze.com/episodes/909347/stranger-things-2x07-chapter-seven-the-lost-sister",
            "name": "Chapter Seven: The Lost Sister",
            "season": 2,
            "number": 7,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332055.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332055.jpg"
            },
            "summary": "<p>El travels to Chicago to find her sister Eight, aka Kali, who has teamed up with other outcasts to kill the men who tormented her at Hawkins Labs.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909347"
            }
            }
            },
            {
            "id": 909348,
            "url": "http://www.tvmaze.com/episodes/909348/stranger-things-2x08-chapter-eight-the-mind-flayer",
            "name": "Chapter Eight: The Mind Flayer",
            "season": 2,
            "number": 8,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332059.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332059.jpg"
            },
            "summary": "<p>When the demo-dogs overrun Hawkins Labs, one of the group saves the others at the cost of their own life. When the others get back to the Byers house, they realize what they're facing and try to get answers from a captive Will.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909348"
            }
            }
            },
            {
            "id": 909349,
            "url": "http://www.tvmaze.com/episodes/909349/stranger-things-2x09-chapter-nine-the-gate",
            "name": "Chapter Nine: The Gate",
            "season": 2,
            "number": 9,
            "type": "regular",
            "airdate": "2017-10-27",
            "airtime": "",
            "airstamp": "2017-10-27T12:00:00+00:00",
            "runtime": 60,
            "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332064.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332064.jpg"
            },
            "summary": "<p>The group splits up to close the gate, evict the Mind Flayer from Will, and drive the demo-dogs away from Hawkins Lab.</p>",
            "_links": {
            "self": {
            "href": "http://api.tvmaze.com/episodes/909349"
            }
            }
            },
    ]
};

test('render without errors', () => {
    mockFetchShow.mockResolvedValueOnce(allEps);
    render (<App />);
})

test('render app before data loads into app', () => {
    mockFetchShow.mockResolvedValueOnce(allEps);
    const { getByText } = render(<App />);
    
    //make sure spelling is correct and exact
    expect(getByText(/Fetching data.../i)).toBeInTheDocument(); 
});

// asyc tests

test('render data from api', async () => {
    //render the app (mock version)
    mockFetchShow.mockResolvedValueOnce(allEps);
    const { getByText, getAllByText } = await render (<App />);

    await waitFor(() => {
        expect(getAllByText(/Stranger Things/i)[0]).toBeInTheDocument()
    })

    //Act - click the dropdown and select season 2 after api runs
    //dropdowns use userEvent.click to activate
    //use fireEvent.click to chose a selection
    await userEvent.click(getByText(/Select a season/i));
    await fireEvent.click(getByText(/Season 2/i));

    await waitFor(() => {
        expect(getByText(/Dig Dug/i)).toBeInTheDocument()
    });

    await waitFor(() => {
        expect(getByText(/MADMAX/i)).toBeInTheDocument()
    });
});

//Check to see if tests work. ... okay they failed. Now to see why