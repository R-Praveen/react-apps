import React, {
    useState,
    createContext,
    useCallback,
    Fragment,
    Suspense,
} from 'react';

import Page from '../../components/Page/Page';
import { CONSTANTS } from '../../constants/constants';
import BlogDetails from '../../containers/BlogDetails/BlogDetails';
import BlogDisplay from '../../containers/BlogDisplay/BlogDisplay';
import { Blog } from '../../types/types';
import styles from './Home.module.scss';

const Modal = React.lazy(() => import('../../components/Modal/Modal'));
const Overlay = React.lazy(() => import('../../components/Overlay/Overlay'));
const AddBlog = React.lazy(() => import('../../components/AddBlog/AddBlog'));
const MemberList = React.lazy(
    () => import('../../components/MemberList/MemberList')
);
const Slide = React.lazy(() => import('../../components/Slide/Slide'));
const Fade = React.lazy(() => import('../../components/Fade/Fade'));

interface BlogContextPropsInterface {
    onBlogSelection: Function;
    id: string;
    readOnly: boolean;
}

export const BlogContext = createContext<BlogContextPropsInterface>({
    id: '',
    onBlogSelection: () => {},
    readOnly: true,
});

const Home: React.FunctionComponent = () => {
    console.log('Component - Home');

    const [selectedBlog, setSelectedBlog] = useState<Blog>({} as Blog);
    const [showAddBlogOverlay, setShowAddBlogOverlay] = useState(false);
    const [showUsersOverlay, setShowUsersOverlay] = useState(false);
    const [readOnly, setReadOnly] = useState(true);

    const { MODAL } = CONSTANTS;

    const handleBlogSelection = useCallback((blog: Blog) => {
        setSelectedBlog(blog);
    }, []);

    const toggleAddBlogOverlay = useCallback(() => {
        setShowAddBlogOverlay((prev) => !prev);
    }, []);

    const toggleUsersOverlay = useCallback(() => {
        setShowUsersOverlay((prev) => !prev);
    }, []);

    const toggleReadOnly = useCallback((readOnly?: boolean) => {
        if (readOnly === undefined) setReadOnly((prev) => !prev);
        else setReadOnly(readOnly);
    }, []);

    return (
        <Fragment>
            <Page
                className={styles.home}
                contentStyle={styles.content}
                toggleOverlay={toggleUsersOverlay}
            >
                <BlogContext.Provider
                    value={{
                        onBlogSelection: handleBlogSelection,
                        id: selectedBlog.id,
                        readOnly: readOnly,
                    }}
                >
                    <BlogDisplay toggleAddBlogOverlay={toggleAddBlogOverlay} />
                </BlogContext.Provider>
                <BlogDetails
                    blog={selectedBlog}
                    isAddBlogOverlayToggled={
                        showAddBlogOverlay || showUsersOverlay
                    }
                    readOnly={readOnly}
                    toggleReadOnly={toggleReadOnly}
                />
            </Page>
            <Suspense fallback={() => {}}>
                {showAddBlogOverlay ? (
                    <Overlay toggleOverlay={toggleAddBlogOverlay}>
                        <Slide
                            direction="right"
                            duration={MODAL.ANIMATION.DURATION}
                            style={{ width: CONSTANTS.MODAL.WIDTH }}
                        >
                            <Modal title="Add New Blog">
                                <AddBlog toggleOverlay={toggleAddBlogOverlay} />
                            </Modal>
                        </Slide>
                    </Overlay>
                ) : null}
                {showUsersOverlay ? (
                    <Overlay toggleOverlay={toggleUsersOverlay}>
                        <Fade
                            duration={MODAL.ANIMATION.DURATION}
                            style={{ width: MODAL.WIDTH }}
                        >
                            <Modal title="Members">
                                <MemberList />
                            </Modal>
                        </Fade>
                    </Overlay>
                ) : null}
            </Suspense>
        </Fragment>
    );
};

export default Home;
