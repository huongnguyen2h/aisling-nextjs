import React, { useState, useEffect, useRef } from 'react'

import ReactPDF from '@react-pdf/renderer'
import { MyDocument } from '../../components/common/MyDocument'
import { PDFViewer } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import Head from 'next/head'

// import PSPDFKit from 'pspdfkit';

function About() {
  const [page, setPage] = useState(1);
	const containerRef = useRef(null);
  const [result, setResult] = useState<any | null>(null);

  const getResume = async () => {
    const params = new URLSearchParams(window.location.search);
    let cvName = params.get('cv')
    if (!cvName) {
      cvName = "L"
    }

    console.log("cvName: ", cvName);

		const container = containerRef.current || "";

		if (typeof window !== 'undefined') {
      import('pspdfkit').then((PSPDFKit: any) => {
				if (PSPDFKit) {
					PSPDFKit.unload(container);
				}

				PSPDFKit.load({
					container,
					document: '/assets/cv_' + cvName + '.pdf',
					baseUrl: `${window.location.protocol}//${window.location.host}/`,
				});
      });
		}
    // return <div ref={containerRef} style={{ height: '100vh' }} />
  }

  async function bubbleSort(arr) {
    let n = arr.length;
    // alert(1)

    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-1-i; j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr
  }

  async function findArrayWithLargestSum(arrays) {
    let largestSumArray = arrays[0];
    let largestSum = largestSumArray.reduce((sum, num) => sum + num, 0);

    arrays.forEach(array => {
      const currentSum = array.reduce((sum, num) => sum + num, 0);
      if (currentSum > largestSum) {
        largestSum = currentSum;
        largestSumArray = array
      }
    }) 
    return largestSumArray
  }
  
  async function findArrayWithElements(arrays, element1, element2) {
    return arrays.filter(array => array.includes(element1) && array.includes(element2))
  }

  async function createMatrix(rows, cols, min, max) {
    const matrix : any[] = [];
    for (let i = 0; i < rows; i++) {
      const row : any[] = [];
      for (let j = 0; j < cols; j++) {
        const randomNumber = Math.floor(Math.random() * (max-min +1)) + min
        row.push(randomNumber);
      }
      matrix.push(row)
    }
    return matrix;
  }

  function isPrime(num) {
    if(num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  async function findPrimesInMatrix(matrix) {
    let primes : any[] = [];

    matrix.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (isPrime(value)) {
          primes.push({value, position: [rowIndex, colIndex]})
        }
      });
    })
    return primes
  }

	useEffect(() => {
    // getResume()
    const foo = async () =>{
      let arr = []
      arr = await bubbleSort([60, 40, 69, 65, 55, 86, 81, 3, 99, 83, 6, 70, 80, 2, 66, 98])
      // alert(2)
      setResult(arr)
      console.log(arr);
      
    };
    foo()
    const foo2 = async () =>{
      let arr = []
      arr = await findArrayWithLargestSum([[60, 40, 69, 65, 55],
        [86,81,3,99,83],
        [70,80,2,66,98]])
      // alert(2)
      setResult(arr)
      console.log(arr);
      
    };
    foo2()
    const foo3 = async () =>{
      let arr = []
      arr = await findArrayWithElements([[60, 40, 69, 65, 55],
        [86,81,1,99,83],
        [70,80,2,66,98]], 1, 99)
      // alert(2)
      setResult(arr)
      console.log(arr);
      
    };
    foo3()
    const foo4 = async () =>{
      let matrix : any[] = [];
      matrix = await createMatrix(100, 100, 1, 100000)
      console.log(matrix);
      let primes = await findPrimesInMatrix(matrix);
      console.log(primes);
      
    };
    foo4()
	}, []);

  useEffect(() => {}, [])

  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {result}
      {/* <div ref={containerRef} style={{ height: '100vh' }} /> */}
      <div className='w-100'>
        <img className='w-100 flex-100' src="/assets/profile_banner_censored.jpg" alt="banner image"></img>
      </div>
      click here to see my CV! (cv does not have name in it)
    </div>
  )
}

export default About
