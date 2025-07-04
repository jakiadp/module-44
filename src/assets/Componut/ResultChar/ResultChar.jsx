import React from 'react';

const resultData =[
  { "name":"arun",    "gender":"Male",   "physics":88, "maths":87,  "english":78 },
  { "name":"rajesh",  "gender":"Male",   "physics":96, "maths":100, "english":95 },
  { "name":"moorthy", "gender":"Male",   "physics":89, "maths":90,  "english":70 },
  { "name":"raja",    "gender":"Male",   "physics":30, "maths":25,  "english":40 },
  { "name":"usha",    "gender":"Female", "physics":67, "maths":45,  "english":78 },
  { "name":"priya",   "gender":"Female", "physics":56, "maths":46,  "english":78 },
  { "name":"Sundar",  "gender":"Male",   "physics":12, "maths":67,  "english":67 },
  { "name":"Kavitha", "gender":"Female", "physics":78, "maths":71,  "english":67 },
  { "name":"Dinesh",  "gender":"Male",   "physics":56, "maths":45,  "english":67 },
  { "name":"Hema",    "gender":"Female", "physics":71, "maths":90,  "english":23 }
]

const ResultChar = () => {
    return (
        <div>
            <lineChart width={500} height={500} data={resultData} >
                <line datakey='math' stroke='red'></line>
            </lineChart>
            
        </div>
    );
};

export default ResultChar;