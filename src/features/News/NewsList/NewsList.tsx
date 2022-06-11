import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody } from "../../../common/Layout";
import PageLayout from "../../../common/Layout/PageLayout";
import Pagination from "../../../common/Pagination/Pagination";
import { NewsListPageProps } from "../../../types/pageProps";
import NewsContentHeader from "../Components/NewsContentHeader";
import NewsSearch from "../Components/NewsSearch";

const NewsListPage = ({ head, categories }: NewsListPageProps) => {
    return (
        <PageLayout title={head.title} footerColor="dark">
            <ContentWrapper>
                <ContentWrapperBody>
                    <NewsContentHeader categories={categories} />
                    <Breadcrumb
                        items={[
                            {
                                text: "Tin tức",
                                link: "tin-tuc",
                            },
                            {
                                text: "Tất cả",
                                link: "tat-ca",
                            },
                        ]}
                    />
                    <div className="py-2 text-2xl font-semibold">Danh sách tin tức mới nhất</div>
                    <div className="mb-6 md:mb-8">Hiện có tất cả 7 tin tức</div>
                    <Pagination className="pt-6 mt-4 mb-6 border-t-2 border-gray-100 md:pt-4 md:justify-end md:mt-0 md:mb-0 md:border-t-0" />
                </ContentWrapperBody>
                <ContentWrapperAside>
                    <NewsSearch />
                </ContentWrapperAside>
            </ContentWrapper>
        </PageLayout>
    );
};

export default NewsListPage;
