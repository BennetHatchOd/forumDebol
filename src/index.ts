import {app} from './app';
import {SETTING} from './setting';
 

app.listen(SETTING.PORT, () => {
    console.log(`Server is working on port ${SETTING.PORT}`);
})