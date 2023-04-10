import React from 'react'

export const Home = () => {
    return (

        <div >
            <div class="container my-4" >
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Manage your task with a single click.</h2>
                        <p class="lead">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</p>
                    </div>
                    <div class="col-md-9">
                        <img class="img-fluid" width={5200} height={5500} src="https://desktime.com/blog/wp-content/uploads/2021/03/feature-1024x708.png" />
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Organize your
                            work and life, finally.</h2>
                        <p class="lead">Organize your team with Todoist Business.</p>
                    </div>
                    <div class="col-md-9">
                        <img class="img-fluid" width={5200} height={5500} src="https://assets.website-files.com/634681057b887c6f4830fae2/6367ddca26b9af716d508805_6259f896625eef138faa821e_time_management_software-p-1600.png" />
                    </div>
                </div>
            </div>
        </div>

    )
}
