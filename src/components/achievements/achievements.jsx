// import './achievements.css';
import './achievements.scss';

const Achievements = () => (
<>
<div className="jumbotron-fluid grey_light-block pt-5 pb-8">
    <div className="container">
        <div className="timeline body white">

            <div className="point"> </div>

            <div className="point">
                <div className="year"> 2017 </div>
                <div className="bocata body text-left row">
                    <div className="col-md-6 title small bold pb-2">February</div>
                    <div className="col-md-6 title small bold pb-2">October</div>

                    <div className="col-md-6 pr-0  body small">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</div>
                    <div className="col-md-6 pr-0  body small">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</div>
                </div>
                <i className="arrow"></i>
            </div>

            <div className="point">
                <div className="year"> 2018 </div>
                <div className="bocata little body text-left row">
                    <div className="col-md-6 pr-0 title small bold pb-2">February</div>
                    <div className="col-md-6 pr-0 title small bold pb-2"></div>
                    <div className="col-md-12 pr-0  body small">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</div>
                </div>
                <i className="arrow"></i>
            </div>

            <div className="point">
                <div className="year"> 2019 </div>
                <div className="bocata little body text-left row">
                    <div className="col-md-6 pr-0 title small bold pb-2">February</div>
                    <div className="col-md-6 pr-0 title small bold pb-2"></div>
                    <div className="col-md-12 pr-0  body small">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.</div>
                </div>
                <i className="arrow"></i>
                <i className="arrow-clean"></i>
            </div>

        </div>
    </div>
</div>
</>
)

export default Achievements;