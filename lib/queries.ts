// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Services
export const GET_SERVICES = gql`
  query GetServices($first: Int = 20) {
    nodeServices(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          body {
            processed
            summary
          }
          serviceCategory
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            serviceCategory
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Case Studies
export const GET_CASE_STUDIES = gql`
  query GetCaseStudies($first: Int = 20) {
    nodeCaseStudies(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeCaseStudy {
          body {
            processed
            summary
          }
          clientName
          industry
          resultsSummary
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_CASE_STUDY_BY_PATH = gql`
  query GetCaseStudyByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCaseStudy {
            id
            title
            path
            body {
              processed
            }
            clientName
            industry
            resultsSummary
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Team Members
export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 50) {
    nodeTeamMembers(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeTeamMember {
          body {
            processed
          }
          position
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_PATH = gql`
  query GetTeamMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTeamMember {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Insights
export const GET_INSIGHTS = gql`
  query GetInsights($first: Int = 20) {
    nodeInsights(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeInsight {
          body {
            processed
            summary
          }
          insightCategory
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_INSIGHT_BY_PATH = gql`
  query GetInsightByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeInsight {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            insightCategory
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            serviceCategory
          }
          ... on NodeCaseStudy {
            id
            title
            path
            body {
              processed
            }
            clientName
            industry
            resultsSummary
          }
          ... on NodeTeamMember {
            id
            title
            path
            body {
              processed
            }
            position
            email
            phone
          }
          ... on NodeInsight {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            insightCategory
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured services for homepage
export const GET_FEATURED_SERVICES = gql`
  query GetFeaturedServices {
    nodeServices(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          serviceCategory
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured case studies for homepage
export const GET_FEATURED_CASE_STUDIES = gql`
  query GetFeaturedCaseStudies {
    nodeCaseStudies(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeCaseStudy {
          clientName
          industry
          resultsSummary
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured insights for homepage
export const GET_FEATURED_INSIGHTS = gql`
  query GetFeaturedInsights {
    nodeInsights(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeInsight {
          body {
            summary
          }
          insightCategory
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
