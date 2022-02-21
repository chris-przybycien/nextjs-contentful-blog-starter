import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import ContentfulApi from "@utils/ContentfulApi";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import HeroBanner from "@components/HeroBanner";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import Form from "@components/Form";
import React, { useState, useEffect } from 'react';

export default function Slug(props) {
    const { pageContent } = props;
    
    const pageTitle = pageContent ? pageContent.title : "Home";
    const pageDescription = pageContent && pageContent.description;
    const logo = pageContent && pageContent.logo;

    return (
    <>
        <MainLayout logo={logo}>
            <PageMeta
                title={pageTitle}
                description={pageDescription}
                url={Config.pageMeta.home.url}
            />

            {pageContent && pageContent.heroBanner !== null && (
                <HeroBanner data={pageContent.heroBanner} />
            )}

            <ContentWrapper>
                {pageContent && pageContent.body && (
                    <PageContentWrapper>
                        <RichTextPageContent richTextBodyField={pageContent.body} />
                    </PageContentWrapper>
                )}
                { 
                    pageContent && pageContent.formCollection && pageContent.formCollection.items &&
                        pageContent.formCollection.items.map(form => {
                            return <Form formData={form}></Form>
                        })
                }
            </ContentWrapper>
        </MainLayout>
    </>
    )
}

export async function getStaticPaths() {

    return {
      paths: [
        Config.pageMeta.page.slug,
      ],
      fallback: true,
    }
  }

export async function getStaticProps( context, preview = false ) {
    const pageContent = await ContentfulApi.getPageContentBySlug(
      `/${context.params.slug}`,
      {
        preview: preview,
      },
    );
  
    return {
      props: {
        preview,
        pageContent: pageContent || null,
      },
    };
  }