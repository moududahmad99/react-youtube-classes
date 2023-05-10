import React from 'react'
import './NestedMap.css'

const users = [
    {
        fullName: "Moudud Ahamd",
        age: 20,
        phone: [{ numberOne: "01771545"}, {numberTwo: "0161656545"}]
    },
    {
        fullName: "Moudud Ahamd",
        age: 20,
        phone: [{ numberOne: "01771545"}, {numberTwo: "0161656545"}]
    },
];

function NestedMap () {
    return (
        <>
            <h2>Nested Lists</h2>
            {
                users.map((users, index) => (
                    <article key={index}>
                        <h3>{users.fullName}</h3>
                        <h3>{users.age}</h3>
                        {
                            users.phone.map((phone, index) => <div key={index}>
                                <p>{phone.numberOne}</p>
                                <p>{phone.numberTwo}</p>
                            </div>)
                        }
                    </article>
                ))
            }
        </>
    )
}

export default NestedMap