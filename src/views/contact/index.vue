<template>
    <SectionTitle en="Contact" cn="联系"></SectionTitle>
    <Main>
        <ZeroFiveLine></ZeroFiveLine>
        <div class="wrapper">
            <div class="column">
                <div class="title">
                    <div>如果你正在寻求一个研究职位：</div>
                    <div>If you are seeking a research position:</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="recruitHtml" />
                </div>
            </div>
            <div class="divide-line">
                <div class="main-line"></div>
            </div>
            <div class="column">
                <div class="title">
                    <div>如果你正在寻求合作或赞助一个项目：</div>
                    <div>If you are seeking to collaborate or sponsor a project:</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="sponsorHtml" />
                </div>
            </div>
        </div>
        <div class="slightly-shorter-line">
            <ZeroFiveLine></ZeroFiveLine>
        </div>
        <div class="wrapper loc-info">
            <div class="column">
                <div class="title">
                    <div>实验室 / 办公室</div>
                    <div>Lab / Office</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="locHtml"></RichTextWrapper>
                </div>
            </div>
            <div class="divide-line">
                <div class="main-line"></div>
            </div>
            <div class="column">
                <div class="title">
                    <div>参观我们的实验室</div>
                    <div>Visit Our Lab</div>
                </div>
                <div class="content">
                    <RichTextWrapper :html="contactHtml"></RichTextWrapper>
                </div>
            </div>
        </div>
        <div class="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13778.753624542176!2d120.0820935!3d30.302931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344b63944a670671%3A0xa84f531f3585cebc!2sZhejiang%20Univ%20Zijin&#39;Gang%20Camp!5e0!3m2!1sen!2s!4v1664816476108!5m2!1sen!2s"
                width="100%" height="auto"
                style="border:0;filter: grayscale(0.8) hue-rotate(-30deg); aspect-ratio: 3/2;" allowfullscreen="true"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            <div class="annotation">
                <div>* Please check your network connection if the above content does not appear.
                </div>
            </div>

        </div>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const sponsorHtml = `<p>
                    <div>我们与各种学术、商业、非营利组织和政府伙伴合作，使我们的变形未来成为现实。</div>
                    <div>We works with a variety of academic, commercial, nonprofit, and government partners to make our
                        morphing future a reality.</div>
                    </p>
                    <p>
                    <div>我们与合作伙伴协作，开发针对用户界面、制造和产品性能的新技术和工艺。实验室为公司提供了一个独特的机会，使其能够进入一个宝贵的创造和发明空间。</div>
                    <div>We collaboratively work with our partners to develop new technologies and processes targeting
                        user interface, manufacturing, and product performance. The lab provides a unique opportunity
                        for companies to have access to an invaluable space of creativity and invention.</div>
                    </p>
                    <p>
                    <div>实验室每年得到赠款、礼物和赞助研究的慷慨支持。如需咨询与 Morphing Matter Lab 的合作事宜，请联系以下电子邮件：</div>
                    <div>The lab is generously supported annually by grants, gifts and sponsored research. To inquire
                        about partnering with the Morphing Matter Lab please use the email below:</div>
                    </p>
                    <br>
                    <p>
                    <div><b>姚立宁教授的电子邮件</b></div>
                    <div><b>Email of Prof. Lining Yao</b></div>
                    <a href="mailto:liningy@cs.cmu.edu">liningy@cs.cmu.edu</a>
                    </p>`

const recruitHtml = `<p>
                    <div>我们正在接受博士后、博士、研究科学家、访问研究员和实习生职位的申请。</div>
                    <div>We are accepting applications for Postdoc, Ph.D., research scientist, visiting researcher and
                        internship positions.</div>
                    </p>
                    <p>
                    <div>
                        我们的团队是高度跨学科和反规训的。从科学到艺术，从设计到工程，你总能找到你的完美位置。我们既鼓励独立思考，也鼓励互动合作。我们希望我们作为一个团队，在需要不同领域的洞察力的激进概念下成长。我们的工作也是跨规模的。无论你是从事微系统还是架构方面的工作，我们都欢迎你与我们联系。
                    </div>
                    <div>Our team is highly inter-disciplinary and anti-disciplinary. From science to art, design to
                        engineering, you will always find your perfect position. We encourage both independent thinking
                        and interactive collaboration. We hope we grow as a team with radical concepts that require
                        insights across different fields. We work across scales as well. Whether you work on
                        microsystems or architectures, you are welcome to contact us.</div>
                    </p>
                    <p>
                    <div>当你申请时，请发送电子邮件给姚立宁教授。</div>
                    <div>When you apply, please send an email to Prof. Lining Yao.</div>
                    </p>
                    <p>
                    <div>如果你是一个创客/设计师/艺术家，请附上：简历和数字作品集。展示草图、模型制作、CAD、3D和渲染等过程与展示最终作品同样重要。激进的概念和信念是非常值得赞赏的。</div>
                    <div>If you are a maker/designer/artist, please include: a CV and digital portfolio. Demonstrating
                        processes such as sketching, model making, CAD, 3D and rendering are as important as showing a
                        final piece. Radical concepts and beliefs are highly appreciated.</div>
                    </p>
                    <p>
                    <div>如果你是一位从事基础理论或实验的科学家或工程师，请附上简历、研究经历的叙述、图表和实验结果。</div>
                    <div>If you are a scientist or engineer working on fundamental theories or experiments, please
                        include a CV, narratives of your research experiences, diagrams and experimental results.</div>
                    </p>`

const locHtml = `<p>中国浙江省杭州市西湖区余杭塘路866号浙江大学紫金港校区月牙楼 303-403, 310058<br>Yueya Building 303-403, Zijingang Campus, Zhejiang University. Hangzhou</p><p>邮箱：idi@zju.edu.cn<br>电话：+86 0571 88206978</p>`
const contactHtml = `<p><strong>姚立宁教授 / Prof. Lining Yao</strong><br><a href="mailto:liningy@cs.cmu.edu">liningy@cs.cmu.edu</a></p><p><strong>行政助理 / Administrative Assistant:&nbsp;<br></strong>Eric Davidson<br>412-268-8204<br><a href="mailto:edavidso@andrew.cmu.edu">edavidso@andrew.cmu.edu</a></p>`

</script>
<style lang="scss" scoped>
.wrapper {
    padding: 40px 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    color: #454545;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 700px) {
        padding: 40px 0px;
    }

    .divide-line {
        width: 100%;
        position: relative;
        height: 100%;
        transform: scaleX(0.5);
        padding: 20px 0px;
        box-sizing: border-box;

        @media (max-width: 1300px) {
            display: none;
        }

        .main-line {
            background-color: #141414;
            width: 100%;
            height: 100%;
        }
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 25px;
        // line-height: 1.6;
    }

    .column {
        line-height: 1.6;

    }
}

.slightly-shorter-line {
    padding: 0px 6%;
}

.loc-info {
    grid-template-columns: 2fr 1px 1fr;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr;

    }
}

.location {
    background: url(../../assets/loader.gif) center center no-repeat;
    background-size: 48px;
    padding: 0px 20px;
    box-sizing: border-box;

    @media (max-width: 700px) {
        padding: 0px;
    }

    .annotation {
        color: #757575;
        font-size: 12px;
    }
}
</style>