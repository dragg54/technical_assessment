import React from "react";

const CreateEvent = () => {
  return (
    <div className="flex justify-start items-center py-[20px] w-full flex-col">
      <h1 className="text-2xl font-bold text-[#240D57]">Create Event</h1>
      <form className="w-[90%] mt-[20px] h-full flex flex-col justify-between">
        <input
          type="text"
          className="input"
          name="event name"
          placeholder="Event Name"
        />
        <br />
        <input
          type="text"
          className="input"
          name="Host Name"
          placeholder="Host Name"
        />
        <br />
        <input
          type="time"
          className="input"
          name="start time"
          placeholder="Start Time"
          id=""
        />
        <br />
        <input
          type="time"
          className="input"
          name="end time"
          placeholder="End Time"
        />
        <br />
        <input
          type="text"
          className="input"
          name="location"
          placeholder="Location"
        />
        <br />
        <input type="file" className="input" name="image" placeholder="Image" />
        <br />
        <a href="/event">
          <button
            type="submit"
            className="w-[187px] h-[50px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] mt-[34px] rounded-[10px] font-bold text-base text-white"
          >
            Next
          </button>
        </a>
      </form>
    </div>
  );
};

export default CreateEvent;
