import React from "react";
import styled from "styled-components";
import FullPage, {
    FullPageSections,
    FullpageSection,
    FullPageNavigation,
} from "@ap.cx/react-fullpage";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = () => {
    const sectionStyle = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <>
            <Header />
            <FullPage>
                <FullPageSections>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 1</h1>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 2</h1>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 3</h1>
                    </FullpageSection>
                </FullPageSections>
            </FullPage>
            <Footer />
        </>
    );
};

export default HomeLayout;
