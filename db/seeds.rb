9.times do |i|
    Task.create!(
        name: "Task #{i + 1}",
        date: Time.now
    )
end