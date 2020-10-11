import React ,{Component} from 'react';
import Display from '../Display/display';

class WithFadeInWhenInView extends Component{
    constructor(props){
        super(props);
        this.state = {
           width:props.width
        }
    }

    render(){
        console.log(this.state.width)
        return(
            <div className='WidthFadeInWhenInView'>
                <Display width={this.state.width} />
            </div>
        );
    }

    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            const scrollY = window.scrollY;

            if(window.scrollY <=1000){
                this.setState({
                    width:scrollY
                })
            }
        })
    }
}

export default WithFadeInWhenInView;