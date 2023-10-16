export const options = [
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'WY', label: 'Coming' },
    { value: 'WY', label: 'Hanry Die' },
    { value: 'WY', label: 'John Doe' },
];

export const options2 = [
    { value:'dev', label: 'Developer' },
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value:'des', label: 'Designer' },
    { value: 'WY', label: 'Coming' },
    { value: 'WY', label: 'Hanry Die' },
    { value: 'WY', label: 'John Doe' },
];

export const options3 = [
    { value: 'AL', label: 'First' },
    { value: 'WY', label: 'Second', isDisabled: true },
    { value: 'WY', label: 'Third' },
];

export const options4 = [
    { label: 'Developer', isDisabled: true },
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'WY', label: 'Coming' },
    { value: 'WY', label: 'Hanry Die' },
    { value: 'WY', label: 'John Doe' },
];

export const options6=[
    {value:"244",label:"Brand"},
    {value:"245",label:"Material"},
    {value:"246",label:"18 mm Female"},
    {value:"247",label:"Accessoires"},
    {value:"248",label:"Accessories comes with"},
    {value:"249",label:"Air Flow"},
    {value:"250",label:"Advantages"},
    {value:"251",label:"Brand"},
    {value:"252",label:"Brand"},
    {value:"253",label:"Brand"},
    {value:"254",label:"Brand"},
]

export const options7=[
    {value:"1",label:"Yes"},
    {value:"0",label:"No"}
]



// function Rearrange_Array_Rows(_new_sno,re_rw,New_Arr)

// 	{

// 		var New_Arr1=new Array();

		

// 		var value_to_move=New_Arr[re_rw];

		

		

// 		var __j=0;

		

// 			if(re_rw+1>=_new_sno)

// 			{

// 				for(_i=0;i<_new_sno-1;_i++)

// 				{

// 					New_Arr1[_i]=New_Arr[_i];

// 				}

// 				New_Arr1[__i]=value_to_move;

// 				__i++;

// 				for(_j=i;j<New_Arr.length;_j++)

// 				{

// 					if(__j-1==re_rw)

// 					{

// 						__j++;

// 					}

// 					New_Arr1[_i]=New_Arr[_j-1];

// 					__i++;

// 				}

// 			}

// 			else 

// 			{

// 				for(_i=0;i<_new_sno;_i++)

// 				{

// 					if(__i==re_rw)

// 					{

// 						__i++;

// 					}

// 					if(__i<New_Arr.length)

// 					{

// 						New_Arr1[_j]=New_Arr[_i];

// 						__j++;

// 					}

// 				}

// 				New_Arr1[__j]=value_to_move;

// 				for(_i=i;i<New_Arr.length;_i++)

// 				{

// 					New_Arr1[_i]=New_Arr[_i];

					

// 				}

// 			}

// 		return New_Arr1;

// 	}