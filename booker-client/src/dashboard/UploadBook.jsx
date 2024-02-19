import React, { useState } from "react";
import { Label,Button, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Romance",
    "Horror",
    "spirituality",
    "Fantasy",
    "History",
    "Science Fiction",
    "Thriller",
    "Business",
    "Autobiography",
    "Children Book",
    "Self-help",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    //  console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle book submit 
  const handleSubmitBook = (event) => {
    event.preventDefault();
    const form = event.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageUrl = form.imageUrl.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPdfUrl.value;
      console.log(bookTitle);

      const bookObj ={
        bookTitle,authorName,imageUrl,category,bookDescription,bookPDFURL
      }
      console.log(bookObj);
      // send data to databse
       fetch("http://localhost:3000/upload-book",{
        method: "POST",
       headers: { 
        "Content-type": "application/json",},
        body:JSON.stringify(bookObj)
       }).then(res => res.json()).then(data =>{
        alert("Book Uplolad Sucessfully!")
        form.reset();
       })

  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      <form onSubmit={handleSubmitBook} className="flex lg:w-[1080px] flex-col  flex-wrap gap-4">
        {/* First Line*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Enter Book Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name Here"
              required
            />
          </div>
        </div>
        {/* Second Line */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Book Image URl"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputSate"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your Book Description Here..."
            required
            rows={5}
            className="w-full rounded "
          />
          
        </div>
        {/* Book Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF Url" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPdfUrl"
            type="Text"
            placeholder="Your Book PDF URL"
            required
          />
        </div>
        <Button type="submit" className="mt-5  bg-cyan-500">Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
