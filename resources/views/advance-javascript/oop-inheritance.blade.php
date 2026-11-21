
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>AdvanceJS OOP Inheritance</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                background: #fff;
                font-family: Arial, Helvetica, sans-serif;
            }

            /* Main Diagram */
            .diagram {
                width: 100%;
                max-width: 1671px;
                aspect-ratio: 1671 / 887;
                position: relative;
                margin: auto;
                background: white;
                overflow: hidden;
                container-type: inline-size;
            }

            /* Common Boxes */
            .box {
                position: absolute;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 400;
                white-space: nowrap;
            }

            /* Class A */
            .class-a {
                left: 27.4%;
                top: 14.9%;
                width: 14.1%;
                height: 11.7%;
                background: #0872c5;
                font-size: clamp(14px, 3.7cqw, 62px);
            }

            /* Class B */
            .class-b {
                left: 27.4%;
                top: 69%;
                width: 14.1%;
                height: 11.7%;
                background: #009d59;
                font-size: clamp(14px, 3.7cqw, 62px);
            }

            /* Class C */
            .class-c {
                left: 73.8%;
                top: 69%;
                width: 14.2%;
                height: 11.7%;
                background: #f47700;
                font-size: clamp(14px, 3.7cqw, 62px);
            }

            /* Base Class Label */
            .base-label {
                position: absolute;
                left: 12.1%;
                top: 17.9%;
                color: #0865b4;
                font-size: clamp(12px, 2.7cqw, 46px);
                white-space: nowrap;
            }

            /* Derived Class Label */
            .derived-label {
                position: absolute;
                left: 8%;
                top: 72.4%;
                color: #009d59;
                font-size: clamp(12px, 2.7cqw, 46px);
                white-space: nowrap;
            }

            /* Properties and Methods */
            .properties-a,
            .methods-a,
            .properties-b,
            .methods-b {
                position: absolute;
                left: 50.3%;
                font-size: clamp(12px, 2.7cqw, 45px);
                color: #050505;
                white-space: nowrap;
            }

            .properties-a {
                top: 8.5%;
            }

            .methods-a {
                top: 27%;
            }

            .properties-b {
                top: 62.6%;
            }

            .methods-b {
                top: 81.2%;
            }

            /* Inheritance Label */
            .inheritance {
                position: absolute;
                left: 10.1%;
                top: 38.9%;
                width: 23.2%;
                height: 12.4%;
                background: #d41600;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: clamp(16px, 3.9cqw, 65px);
                white-space: nowrap;
            }

            /* Multi-Level Inheritance */
            .multi-level {
                position: absolute;
                left: 65%;
                top: 86%;
                width: 32.8%;
                height: 9.6%;
                background: #d41600;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: clamp(14px, 2.8cqw, 47px);
                white-space: nowrap;
            }

            /* SVG Arrows */
            .arrows {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }

            /* Smaller Screens */
            @media (max-width: 600px) {
                .diagram {
                    min-width: 600px;
                }
            }
        </style>
    </head>

    <body>

        <div class="diagram">

            <!-- SVG Arrows -->
            <svg class="arrows" viewBox="0 0 1671 887" preserveAspectRatio="none">
                <defs>
                    <!-- Blue Arrow -->
                    <marker id="blueArrow"
                            markerWidth="10"
                            markerHeight="10"
                            refX="8"
                            refY="3"
                            orient="auto">
                        <path d="M0,0 L0,6 L9,3 Z"
                            fill="#0872c5"/>
                    </marker>

                    <!-- Green Arrow -->
                    <marker id="greenArrow"
                            markerWidth="10"
                            markerHeight="10"
                            refX="8"
                            refY="3"
                            orient="auto">
                        <path d="M0,0 L0,6 L9,3 Z"
                            fill="#009d59"/>
                    </marker>

                    <!-- Red Arrow -->
                    <marker id="redArrow"
                            markerWidth="12"
                            markerHeight="12"
                            refX="10"
                            refY="4"
                            orient="auto">
                        <path d="M0,0 L0,8 L11,4 Z"
                            fill="#d41600"/>
                    </marker>

                </defs>

                <!-- Class A Properties Arrow -->
                <line x1="694" y1="183"
                    x2="823" y2="102"
                    stroke="#0872c5"
                    stroke-width="5"
                    marker-end="url(#blueArrow)"/>

                <!-- Class A Methods Arrow -->
                <line x1="694" y1="183"
                    x2="823" y2="264"
                    stroke="#0872c5"
                    stroke-width="5"
                    marker-end="url(#blueArrow)"/>

                <!-- Inheritance: Class A to Class B -->
                <line x1="576" y1="234"
                    x2="576" y2="610"
                    stroke="#d41600"
                    stroke-width="5"
                    marker-end="url(#redArrow)"/>

                <!-- Class B Properties Arrow -->
                <line x1="694" y1="663"
                    x2="823" y2="583"
                    stroke="#009d59"
                    stroke-width="5"
                    marker-end="url(#greenArrow)"/>

                <!-- Class B Methods Arrow -->
                <line x1="694" y1="663"
                    x2="823" y2="745"
                    stroke="#009d59"
                    stroke-width="5"
                    marker-end="url(#greenArrow)"/>

                <!-- Multi-Level Inheritance: Class B to Class C -->
                <line x1="694" y1="663"
                    x2="1230" y2="663"
                    stroke="#d41600"
                    stroke-width="7"
                    marker-end="url(#redArrow)"/>

            </svg>

            <!-- Base Class -->
            <div class="base-label">
                Base Class
            </div>

            <!-- Class A -->
            <div class="box class-a">
                Class A
            </div>

            <div class="properties-a">
                Properties
            </div>

            <div class="methods-a">
                Methods
            </div>

            <!-- Inheritance -->
            <div class="inheritance">
                Inheritance
            </div>

            <!-- Derived Class -->
            <div class="derived-label">
                Derived Class
            </div>

            <!-- Class B -->
            <div class="box class-b">
                Class B
            </div>

            <div class="properties-b">
                Properties
            </div>

            <div class="methods-b">
                Methods
            </div>

            <!-- Class C -->
            <div class="box class-c">
                Class C
            </div>

            <!-- Multi-Level Inheritance -->
            <div class="multi-level">
                Multi-Level Inheritance
            </div>

        </div>

        <!-- JavaScript Content -->
        <h1 id="head1"></h1>

        <p id="text1"></p>

        <script src="js/adjs/oop-inheritance.obf.js"></script>

    </body>
</html>
