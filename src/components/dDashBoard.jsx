
import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function DashBoard() {
    const data = {
        labels: [
            'Revenue',
            'Rewards',
            'Fees'
        ],
        datasets: [{
            data: [80, 15, 5],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
        }
    };
    return (
        <div className="h-full pt-5">
            <h1 className="mx-5 rounded text-black text-2xl font-semibold">
                Dashboard
            </h1>
            <div className="flex">
                <div>
                    <div className="my-5 flex">
                        <div className=" mx-5 bg-[#F2F2F2] rounded-sm h-[180px] w-[300px] px-5 py-14">
                            <div className="flex">
                                <div className="text-4xl w-[55px] h-[55px] px-4 py-2 rounded-full text-[#4A68F0] bg-[#DBE1FC]">
                                    D
                                </div>
                                <span className="text-lg p-[16px] text-black">$1,011.33</span>
                            </div>
                            <br />
                            <span className="text-[#86898D] text-sm">Sales Generated</span>
                        </div>
                        <div className=" bg-[#F2F2F2] rounded-sm h-[180px] w-[300px] px-5 py-14">
                            <div className="flex">
                                <div className="text-4xl w-[55px] h-[55px] px-4 py-2 rounded-full text-[#86898D] bg-[#FFCF40]">
                                    D
                                </div>
                                <span className="text-lg p-[16px] text-black">$1,011.33</span>
                            </div>
                            <br />
                            <span className="text-[#86898D] text-sm">Total Rewards Issued</span>
                        </div>
                    </div>
                    <div className="flex my-5">
                        <div className="mx-5 bg-[#F2F2F2] rounded-sm h-[180px] w-[300px] px-5 py-14">
                            <div className="flex">
                                <div className="text-4xl w-[55px] h-[55px] px-4 py-2 rounded-full text-[#29cc7a] bg-[#d4f5e4]">
                                    D
                                </div>
                                <span className="text-lg p-[16px] text-black">$1,011.33</span>
                            </div>
                            <br />
                            <span className="text-[#86898D] text-sm">Token Balance</span>
                        </div>
                        <div className=" bg-[#F2F2F2] rounded-sm h-[180px] w-[300px] px-5 py-14">
                            <div className="flex">
                                <div className="text-4xl w-[55px] h-[55px] px-4 py-2 rounded-full text-[#D7D8D9] bg-[#FF7D85]">
                                    D
                                </div>
                                <span className="text-lg p-[16px] text-black">$1,011.33</span>
                            </div>
                            <br />
                            <span className="text-[#86898D] text-sm">NFT in Circulation</span>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-5 p-[25px] bg-[#F2F2F2] rounded-[10px] h-[380px] w-auto">
                    <span className="font-semibold text-[#86898d]">Overview</span>
                    <div className="w-[300px] h-[200px]">
                        <h2>Doughnut Example</h2>
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}