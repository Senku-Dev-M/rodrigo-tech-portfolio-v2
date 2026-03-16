import Antigravity from '../Antigravity/Antigravity';
import { PAGE_BACKGROUND_PARTICLES } from '../../constants/page';

export default function PageBackground() {
    return (
        <div className="page-antigravity">
            <Antigravity {...PAGE_BACKGROUND_PARTICLES} />
        </div>
    );
}
