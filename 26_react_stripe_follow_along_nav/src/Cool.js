import React from 'react'
import './Cool.css'

function Cool(props) {
    return <ul className="cool">
        <li>
            <a href="/">About Me</a>
            <div className="dropdown dropdown1">
                <div className="bio">
                    <img src="https://logo.clearbit.com/wesbos.com" />
                    <p>Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ.
                        Wait. BBQ isn't part of web development. It should be though!</p>
                </div>
            </div>
        </li>
        <li>
            <a href="/">Courses</a>
            <ul className="dropdown courses">
                <li>
                    <span className="code">RFB</span>
                    <a href="https://ReactForBeginners.com">React For Beginners</a>
                </li>
                <li>
                    <span className="code">ES6</span>
                    <a href="https://ES6.io">ES6 For Everyone</a>
                </li>
                <li>
                    <span className="code">NODE</span>
                    <a href="https://LearnNode.com">Learn Node</a>
                </li>
                <li>
                    <span className="code">STPU</span>
                    <a href="https://SublimeTextBook.com">Sublime Text Power User</a>
                </li>
                <li>
                    <span className="code">WTF</span>
                    <a href="http://Flexbox.io">What The Flexbox?!</a>
                </li>
                <li>
                    <span className="code">GRID</span>
                    <a href="https://CSSGrid.io">CSS Grid</a>
                </li>
                <li>
                    <span className="code">LRX</span>
                    <a href="http://LearnRedux.com">Learn Redux</a>
                </li>
                <li>
                    <span className="code">CLPU</span>
                    <a href="http://CommandLinePowerUser.com">Command Line Power User</a>
                </li>
                <li>
                    <span className="code">MMD</span>
                    <a href="http://MasteringMarkdown.com">Mastering Markdown</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="/">Other Links</a>
            <ul className="dropdown dropdown3">
                <li><a className="button" href="http://twitter.com/wesbos">Twitter</a></li>
                <li><a className="button" href="http://facebook.com/wesbos.developer">Facebook</a></li>
                <li><a className="button" href="http://wesbos.com">Blog</a></li>
                <li><a className="button" href="http://wesbos.com/courses">Course Catalog</a></li>
            </ul>
        </li>
    </ul>;
}

export default Cool;
