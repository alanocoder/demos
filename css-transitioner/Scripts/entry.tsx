import * as React from 'react';
import { render } from 'react-dom';
import { HelloWorld } from './HelloWorld';
import { Transitioner, Transitioner_TG } from 'css-transitioner';

import * as TransitionGroup from 'react-transition-group/TransitionGroup.js';


class App extends React.Component<any, any> {
    state = { page: 'HOME' };
    pages = {
        HOME: <HelloWorld />,
        ABOUT: <div>About page</div>,
        SCROLL: <div>
            <div className='spacing'>Many lines 1</div>
            <div className='spacing'>Many lines 2</div>
            <div className='spacing'>Many lines 3</div>
            <div className='spacing'>Many lines 4</div>
            <div className='spacing'>Many lines 5</div>
            <div className='spacing'>Many lines 6</div>
            <div className='spacing'>Many lines 7</div>
            <div className='spacing'>Many lines 8</div>
            <div className='spacing'>Many lines 9</div>
            <div className='spacing'>Many lines 10</div>
            <div className='spacing'>Many lines 11</div>
            <div className='spacing'>Many lines 12</div>
            <div className='spacing'>Many lines 13</div>
            <div className='spacing'>Many lines 14</div>
            <div className='spacing'>Many lines 15</div>
            <div className='spacing'>Many lines 16</div>
            <div className='spacing'>Many lines 17</div>
            <div className='spacing'>Many lines 18</div>
            <div className='spacing'>Many lines 19</div>
            <div className='spacing'>Many lines 20</div>
            <div className='spacing'>Many lines 21</div>
            <div className='spacing'>Many lines 22</div>
            <div className='spacing'>Many lines 23</div>
            <div className='spacing'>Many lines 24</div>
            <div className='spacing'>Many lines 25</div>
            <div className='spacing'>Many lines 26</div>
            <div className='spacing'>Many lines 27</div>
            <div className='spacing'>Many lines 28</div>
            <div className='spacing'>Many lines 29</div>
            <div className='spacing'>Many lines 30</div>
            <div className='spacing'>Many lines 31</div>
            <div className='spacing'>Many lines 32</div>
            <div className='spacing'>Many lines 33</div>
            <div className='spacing'>Many lines 34</div>
            <div className='spacing'>Many lines 35</div>
            <div className='spacing'>Many lines 36</div>
            <div className='spacing'>Many lines 37</div>
            <div className='spacing'>Many lines 38</div>
            <div className='spacing'>Many lines 39</div>
            <div className='spacing'>Many lines 40</div>
        </div>
    };

    onClick = (evt: React.MouseEvent<HTMLAnchorElement>, page: string) => {
        evt.preventDefault();
        this.setState({ page });
    }

    getTrsnStatus = (page: string) => {
        var active = this.state.page === page;
    
        return {
            active,
            transitionStyle: active ? 'slide-in-right' : 'fade-in-out'
            /*
            onAppeared: () => { },
            onDisappeared: () => { }
            */
        }
    };

    render_for_transition_group() {
        var Page = this.pages[this.state.page];
        return (
            <div>
                <div className='bar'>
                    <a href='#' onClick={evt => this.onClick(evt, 'HOME')}>Hello World</a> <a href='#' onClick={evt => this.onClick(evt, 'ABOUT')}>About</a>  <a href='#' onClick={evt => this.onClick(evt, 'SCROLL')}>Scroll page</a>
                </div>
                <div className='trsn-anchor'>
                    <TransitionGroup component={null}>
                        <Transitioner_TG key={this.state.page} id={this.state.page} transitionStyle='slide-in-right' transitionStyleDisappear='fade-in-out'>{Page}</Transitioner_TG>
                    </TransitionGroup>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <div className='bar'>
                    <a href='#' onClick={evt => this.onClick(evt, 'HOME')}>Hello World</a> <a href='#' onClick={evt => this.onClick(evt, 'ABOUT')}>About</a>  <a href='#' onClick={evt => this.onClick(evt, 'SCROLL')}>Scroll page</a>
                </div>
                <div className='trsn-anchor'>
                    <Transitioner {...this.getTrsnStatus('HOME')}>{this.pages['HOME']}</Transitioner>
                    <Transitioner {...this.getTrsnStatus('ABOUT')}>{this.pages['ABOUT']}</Transitioner>
                    <Transitioner {...this.getTrsnStatus('SCROLL')}>{this.pages['SCROLL']}</Transitioner>
                </div>
            </div>
            );
    }
}

render(<App />, document.querySelector('#content'));