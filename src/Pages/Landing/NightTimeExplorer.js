import React from 'preact/compat';
import Card from "../../Components/Card";
import DockerIcon from "../../Images/DockerIcon";
import GithubIcon from "../../Images/GithubIcon";

const NightTimeExplorer = () => {
    return (
        <div className='technologies'>
            <div className='row-0 -rev'>
                <Card label='Docker' getIcon={DockerIcon}/>
                <Card label='Github' getIcon={GithubIcon}/>
                <div className='text'>Night time Explorer</div>
            </div>
        </div>
    );
};

export default NightTimeExplorer;