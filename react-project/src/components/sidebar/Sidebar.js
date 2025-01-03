import'./Body.css'
import'./Progress.css'
import'./Sidebar.css'
import Section from "./Section"
function Sidebar()
{
    return (
<div className="sidebar">
    <h2>Learn Anything You Want</h2>
    <div class="progress">
        <div class="progress-bar" style={{width: "100%"}}></div>
    </div>
        <p class="progress-text">100% COMPLETE</p>
        <Section title="Introduction" icon="📖" text="Welcome to the Course" duration="(5:00)" />
        <Section icon="📢" text="Course Overview"/>
        <Section title="Basic Concepts" icon="🎥" text="Lesson 1: Basics" duration="(10:30)" />
        <Section icon="🎥" text="Lesson 2: Examples" duration="(8:45)" />
        <Section title="Advanced Topics" icon="🔍" text="Topic 1: Deep Dive" duration="(12:15)" />
        <Section icon="🔍" text="Topic 2: Case Studies" duration="(15:50)" />
</div>
    )
}
export default Sidebar;