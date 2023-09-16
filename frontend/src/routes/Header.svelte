<script>
	import { page } from "$app/stores";

//  import logo from '$src/pic/ielts-logo.svg';
</script>

<header>
    <div class='header-container'>
        <div class='top-header'>
            <div class='left-corner'>
                <a href="https://ielts.org/" target="_blank">
                    <img src='/pic/ielts-logo.png' alt='ielts'/>
                </a>
                
            </div>
            <div class='right-corner'></div>
            
        </div>
        <div class='bottom-header'>
            <div class="left-corner">
                <ul>
                    <li aria-current={$page.url.pathname === '/'? '1' : undefined}>
                        <a href="/">Home</a>
                    </li>
                    <li aria-current={$page.url.pathname === '/reading' ? '1' : undefined}>
                        <a href="/reading">Reading</a>
                    </li>
                    <li aria-current={$page.url.pathname === '/listening' ? '1' : undefined}>
                        <a href="/listening">Listening</a>
                    </li>
                    <li aria-current={$page.url.pathname === '/speaking' ? '1' : undefined}>
                        <a href="/speaking">Speaking</a>
                    </li>
                    <li aria-current={$page.url.pathname === '/writing' ? '1' : undefined}>
                        <a href="/writing">Writing</a>
                    </li>
                    
                </ul>
            </div>

            <div class="right-corner">
                <ul>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</header>

<style>
    header {
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        margin-bottom:3em;
    }

    .header-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .top-header {
        display:flex;
        justify-content: space-between;
        margin-bottom:0.5em;
    }

    .top-header .left-corner {
        width:15%;
        margin-left:1em;
        margin-top:0.2em;
    }
    .bottom-header {
        display:flex;
        justify-content:space-between;
    }
    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display:flex;
        justify-content:center;
        list-style: none;
        align-items:center;
    }

    li {
        position: relative;
        height: 50%;
    }

    
    li[aria-current='1']::before {
        --size:7px;
        content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid red;
    }
    li[aria-current='1'] a {
        color:red;
    }

    .bottom-header a {
        display:flex;
        align-items:center;
        padding: 0 1rem;
        text-decoration: none;
        font-size: 150%;
        padding-bottom:0.2em;
        font-weight: bold;
    }
    
    .bottom-header a:hover {
        color: #ea2424;
        border-bottom:solid;
        border-color:red;
    }

</style>