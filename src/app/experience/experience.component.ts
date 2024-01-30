import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  cards = [{
    title: "Fresales CRM",
    description: `Planning & implementation to migrate an existing EmberJS application to React using typescript.
    Integrate Redux and Thunk
    Creating React UI Repository which follows companies design language to decrease development time. Using React, Typescript and Jest
    `,
    company: "Freshworks",
    image: "assets/reactjs-og.png"
  },{
    title: "Fintech",
    description: `Designed and developed a ReactJS Application that is used by both end
    users and banks`,
    company: "Nagarro",
    image: "assets/reactjs-og.png"
  },
  {
    title: "Connected Display",
    description: `Designed and developed a MERN stack
    Application that controls all the content that is shown in multiple edge
    android devices for that particular product.`,
    company: "Robert Bosch (RBEI)",
    image: "assets/mern.jpg"
  },
  {
    title: "MirrorFit",
    description: `Designed and developed a MERN stack Application where you can buy and subscribe to different trainers/fitness
    training sessions`,
    company: "Robert Bosch (RBEI)",
    image: "assets/mern.jpg"
  },
  {
    title: "TextValidator",
    description: `Associated Web application using MERN stack which is used to
    communicate with the android application to test whether the particular
    translation text is valid or not.`,
    company: "Robert Bosch (RBEI)",
    image: "assets/mern.jpg"
  },
  {
    title: "Whirlpool Jennair Oven",
    description: `As a team lead of the Whirlpool Android HMI team, we are developing
    Whirlpool Oven which is part of their high-end portfolio. It is also based
    on the above-mentioned architecture`,
    company: "Robert Bosch (RBEI)",
    image: "assets/android.jpg"
  },
  {
    title: "Whirlpool CES Oven",
    description: `As a part of the Whirlpool Android HMI team, we have developed
    Whirlpool Oven which was showcased in CES. It is based on the
    above-mentioned architecture.`,
    company: "Robert Bosch (RBEI)",
    image: "assets/android.jpg"
  },
  {
    title: "Whirlpool Android HMI Architecture",
    description: `As a part of the Whirlpool Android HMI Architecture team, were
    successful in developing an Android Architecture framework on top of the
    Android layer.`,
    company: "Robert Bosch (RBEI)",
    image: "assets/android.jpg"
  }
  ]

}
