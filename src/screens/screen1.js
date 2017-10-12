import React,{ Component } from 'react';
import {View,
		Text, 
		TouchableOpacity,
		Button,
		StyleSheet } from 'react-native';

var Subs = [
	{
		id:0,
		name:'Chicken Sub-$21',
		cost:21,
	},
	{
		id:1,
		name:'Veg Sub-$22',
		cost:22,
	},
	{
		id:2,
		name:'Fish Sub-$23',
		cost:23,
	},
	{
		id:3,
		name:'Parwns Sub-$24',
		cost:24,
	},
	{
		id:4,
		name:'Beaf Sub-$25',
		cost:25,

	}];

	const styles = StyleSheet.create({
		button_dimen:{
			width: 100,
    	height: 100,
		}
	});

	

class TestProject extends Component	{
	constructor(props) {
    super(props);

		this.state = {
			subs:'',
		}
	}

	onPressButton(subs) {
		this.setState({subs:'subs'})
	}
	
	renderSub(){
		return Subs.map((sub) => {
				return	(
					<TouchableOpacity onPress= {() => {this.onPressButton(sub)}}>
						<Text>{ sub.name }</Text>
					</TouchableOpacity>			
				)
		})
	}

	render(){
		return(
			<View>
				<View>
					{this.renderSub()}
				</View>
				<View style={styles.button_dimen}>
					<Button 
					title="submit" />
				</View>
			</View>

			);
	}
}

module.exports = TestProject;
