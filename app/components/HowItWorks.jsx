import React from 'react';

export default class HowItWorks extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="main-header">FREQUENTLY ASKED QUESTIONS</h3>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    How should I open the package?
                                </a><i className="indicator glyphicon glyphicon-chevron down pull-right"></i>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in">
                            <div className="panel-body">
                                Your package should arrive in a pink envelope. Do not open the envelope with any sharp object. Instead, carefully pull the tab that is on the front of the envelope. Be cautious of shaking the envelope, as the products are explosive.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                How does it work?
                                </a><i className="indicator glyphicon glyphicon-chevron-up  pull-right"></i>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                                Inside of the envelope will be either a pill or a syringe. Before ingestion/injection, make sure to empty your bladder and to eat a full meal. Please allot up to three hours for the full experience, although some memories may be shorter or longer. Please note that for injections, areas of the body that have greater fat content are more likely to result in a more pleasurable experience.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                What if I have an unpleasurable experience?
                                </a><i className="indicator glyphicon glyphicon-chevron-up pull-right"></i>
                            </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse">
                            <div className="panel-body">
                                Too bad. Such is life.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}