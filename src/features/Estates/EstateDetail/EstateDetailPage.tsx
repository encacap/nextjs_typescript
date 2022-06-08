import { HiOutlineLocationMarker } from "react-icons/hi";
import Breadcrumb from "../../../common/Breadcrumb/Breadcrumb";
import { ContentWrapper, ContentWrapperAside, ContentWrapperBody, PageLayout } from "../../../common/Layout";
import { EstateDetailPageProps } from "../../../common/Types/pageProps";
import EstateContentHeader from "../Components/EstateContentHeader";
import EstateSearch from "../EstateList/Components/EstateSearch";
import FilterByRegion from "../EstateList/Components/FilterByRegion";
import EstateProperties from "./Components/EstateProperties";
import REDImageSlider from "./Components/REDImageSlider";

const EstateDetailPage = ({ head, categories }: EstateDetailPageProps) => {
    return (
        <PageLayout title={head.title} footerColor="dark">
            <ContentWrapper>
                <ContentWrapperBody>
                    <EstateContentHeader categories={categories} />
                    <REDImageSlider />
                    <Breadcrumb
                        items={[
                            {
                                text: "Bất động sản bán",
                                link: "bat-dong-san-ban",
                            },
                            {
                                text: "Tất cả",
                                link: "tat-ca",
                            },
                            {
                                text: "Quảng Ngãi",
                                link: "quang-ngai",
                            },
                            {
                                text: "Tư Nghĩa",
                                link: "tu-nghia",
                            },
                            {
                                text: "La Hà",
                                link: "la-ha",
                            },
                        ]}
                    />
                    <div className="pt-3 pb-2.5 text-2xl font-semibold text-encacap-main">
                        ĐẤT NỀN TP BẢO LỘC. HẺM TRẦN KẾ XƯƠNG
                    </div>
                    <div className="flex items-center font-semibold">
                        <HiOutlineLocationMarker className="mr-4 text-lg" />
                        Đường Blaosire, Phường 2, Thành phố Bảo Lộc, Lâm Đồng
                    </div>
                    <EstateProperties />
                </ContentWrapperBody>
                <ContentWrapperAside>
                    <EstateSearch />
                    <FilterByRegion />
                </ContentWrapperAside>
            </ContentWrapper>
        </PageLayout>
    );
};

export default EstateDetailPage;
