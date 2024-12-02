import './PrograssBar.css';

const ProgressBar = ({value}) => {

    return (

            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${value}%`, transition: 'width 0.3s ease-in-out' }}
                ></div>
            </div>
    );
};

export default ProgressBar;