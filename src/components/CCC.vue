<template>
    <div class="ccc">
        <div class="construct column">
            <div class="title">
                材料属性 / Material Mechanism
            </div>
            <div class="desc">
                变形机制的发现涉及跨尺度的材料成分、结构、力学和几何学的动手实验。
            </div>
            <div class="desc">
                The discovery of morphing mechanisms involves hands-on experimentation of material composition,
                structure, mechanics, and geometry across scales.
            </div>
            <div class="divider-line"></div>
            <!-- <Keywords v-for="item in constructs" :keywords="item"></Keywords> -->
        </div>
        <div class="compute column">
            <div class="title">
                制造技术 / Personal Fabrication
            </div>
            <div class="desc">
                通过基于几何和物理的分析、优化和机器学习对变形物质进行计算设计，使变形物质民主化。
            </div>
            <div class="desc">
                Computational design of morphing matter through geometrical and physics-based analysis, optimization,
                and machine learning, to democratize morphing matter.
            </div>
            <div class="divider-line"></div>
            <!-- <Keywords v-for="item in computes" :keywords="item"></Keywords> -->
        </div>
        <div class="contextualize column">
            <div class="title">
                应用场景 / Application Area
            </div>
            <div class="desc">
                以人与自然为中心的设计，展现变形物质的社会影响力，平衡好奇心与现实、经验与实用性、工程与设计。
            </div>
            <div class="desc">
                Human- and nature-centered design to unfold the societal impactful of morphing matter, with a balance of
                curiosity and reality, experience and utility, engineering and design.
            </div>
            <div class="divider-line"></div>
            <!-- <Keywords v-for="item in constructs" :keywords="item"></Keywords> -->
        </div>
        <!-- <div class="compute column">234</div>
        <div class="contextualize column">345</div> -->
    </div>
</template>
<script setup lang='ts'>
import Keywords from './Keywords.vue';

const constructs = [
    ['Differential Bi-layers',
        'Bi-layer biohybrid hygromorphic actuator',
        'Bi-layer paper composite structure'],
    ['Yarn Arrangments',
        '3D knitting with inlayed tendon'],
    ['Residual Stress Distribution',
        'Residual stress-induced self-folding'],
    ['Groove-induced Differential Diffusion',
        'Asynchronous diffusion by surface grooves'],
    ['Heterogeneity in Cellular Structure',
        'Molded wood actuators'],
]

const computes = [
    [
        'Numerical Optimization for Continuous Non-developable 2D to 3D',
        'Geodesy universal 4D printing compiler',
    ],
    [
        'Geometrical Flatterning for Developable 2D to 3D',
        'Thermorph morphing origami compiler',
    ],
    [
        'ML and Geometrical Methods for Mesh 2D to 3D',
        'SimuLearn ML and FEA simulator',
        '4D Mesh compiler'
    ],
    [
        'Geometrical Simulation for 3D Robotic Truss',
        'PneuMesh'
    ],
    [
        'Finite Element Methods',
        'Groove-induced gel morphing',
        '4D Printed Plastics'
    ]
]

const contextualizes = [
    ['Sustainable Materials and Products', 'Living bioLogic fabric',
        'Flatpack gel food', 'Flatpack pasta', 'Biodegradable self-drilling electronics'],
    [
        'Sustainable Manufacturing',
        '2D Self-assembly',
        '1D Self-assembly'
    ],
    [
        'Inclusive Design',
        'ElectroDermis'
    ],
    [
        'Nature-centered Design',
        'Ocean garden'
    ],
    [
        'Creativity Work Support',
        'Interactive Weaving',
    ],
    [
        'Haptics in VR/AR',
        'ReCompFig',
    ],
    [
        'Soft Robots',
        'Soft robots via machine knitting'
    ]
]
</script>
<style lang="scss" scoped>
.ccc {
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    padding-bottom: 80px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }

    .column {
        display: flex;
        flex-flow: nowrap column;
        justify-content: flex-start;
        align-items: flex-start;
        // margin-bottom: 80px;
        margin-right: 80px;
        // max-width: 400px; 
        // flex: 1 0 400px;
        color: #4c4c4c;
        position: relative;
        // width: 100%;

        @media (max-width: 1000px) {
            width: 100%;
            max-width: 100%;
            margin-right: 0px;
            // max-width: 100%;;
            margin-bottom: 20px;

            .divider-line {
                margin: 18px 0px !important;
            }
        }

        .title {
            font-size: 18px;
            margin-bottom: 24px;

            @media (max-width: 700px) {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }

        .desc {
            font-size: 12px;
            // word-break: break-all;
            // margin-bottom: 16px;
        }

        .divider-line {
            height: 1px;
            width: 100%;
            background-color: #ccc;
            margin: 24px 0px;
        }

        &:last-child {
            margin-right: 0px;
        }
    }
}
</style>