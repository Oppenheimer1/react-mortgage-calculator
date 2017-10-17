import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var calculcatePayment = function(principal, years, rate){
	var monthlyRate = rate / 100 / 12;
	var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1+monthlyRate),years * 12)));
	var balance = principal;
	for (var y=0; y<years; y++){
		var interestY = 0; //interest payment for year Y
		var principalY = 0; // principal payment for year Y
		for (var m=0; m<12; m++){
			var interestM = balance * monthlyRate; // interest payment for a month M
			var principalM = monthlyPayment - interestM; // principal payment for a month M
			interestY = interestY + interestM;
			principalY = principalY + principalM;
			balance = balance - principalM;
		}
	}

	return {monthlyPayment: monthlyPayment};
}


var Header = React.createClass({
	render: function(){
		return(
			<header>
				<h1>{this.props.title}</h1>
			</header>
		);
	}
});


ReactDOM.render(<App />, document.getElementById('root'));

