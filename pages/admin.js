import Iframe from 'react-iframe'

export default function Admin(){
    return(
        <Iframe url="https://fabianocorreasite.web.app/admin"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            //styles={{height: "25px"}}
            />
    )
}
//import redirect from 'nextjs-redirect';
//export default redirect('https://fabianocorreasite.web.app/admin')