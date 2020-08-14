public inherited sharing class customerServices {
   
    public class Customer {
        //attributes that we associate with customers
        @auraEnabled
        public String email { get; set; }

        @auraEnabled
        public String name { get; set; }

        @auraEnabled
        public String city { get; set; }

        @auraEnabled
        public String state { get; set; }

        @auraEnabled
        public String status { get; set; }

        @auraEnabled
        public String Id { get; set; }

        //putting them together, we get our wrapper object:
        public Customer(
            String name,
            String email,
            String city,
            String state,
            String status,
            String custId
        ) {
            this.name = name;
            if (String.isNotEmpty(email))
                this.email = email;
            if (String.isNotEmpty(city))
                this.city = city;
            if (String.isNotEmpty(state))
                this.state = state;
            if (String.isNotEmpty(status))
                this.status = status;
            if (String.isNotEmpty(custId))
                this.Id = custId;
        }
    }
}