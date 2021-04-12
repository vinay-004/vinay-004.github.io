import React from 'react'
import { PDFObject } from 'react-pdfobject'
import Layout from '../components/layout'

const ResumePage = () => {
    return (
        <Layout>
            <PDFObject url= {'/Vinay_Jain_Resume.pdf'} height = '1000px' />
        </Layout>
    )
}

export default ResumePage