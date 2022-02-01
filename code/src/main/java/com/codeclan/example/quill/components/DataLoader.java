package com.codeclan.example.quill.components;

import com.codeclan.example.quill.models.*;
import com.codeclan.example.quill.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ScriptRepository scriptDataRepository;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    ServiceRepository serviceRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        User writer = new User(
                "writer",
                "password",
                "email@something.com",
                UserType.AUTHOR);
        userRepository.save(writer);

        User company = new User(
                "company",
                "password",
                "email@something.com",
                UserType.COMPANY);
        userRepository.save(company);

        User service = new User(
                "service",
                "password",
                "email@something.com",
                UserType.SERVICE);
        userRepository.save(service);

        Author William = new Author("Bob", "This is the story of my life","");
        authorRepository.save(William);

        Company minollo = new Company("Minollo Theatre", "Deceased project", "no pic");
        companyRepository.save(minollo);

        Service lights = new Service("Lights&Vision", "lights and sounds and projections", "no pic");
        serviceRepository.save(lights);


//        ScriptsData lysistrata = new ScriptsData(
//                "Luv",
//                "Murray Schisgal",
//                "Comedy",
//                80,
//                2,
//                1,
//                0,
//                "English",
//                false,
//                "comedy about two men and a woman on a bridge",
//                "love relationships banana");
//        scriptDataRepository.save(lysistrata);
//
//        ScriptsData starspangledgirl = new ScriptsData(
//                "Star spangled girl",
//                "Neil Simon",
//                "Comedy",
//                90,
//                2,
//                1,
//                0,
//                "English",
//                false,
//                "2 guys and a girl in a flats building",
//                "");
//        scriptDataRepository.save(starspangledgirl);
//
//        ScriptsData rhinoceros = new ScriptsData(
//                "Rhinoceros",
//                "Eugene Ionesco",
//                "Absurd",
//                80,
//                4,
//                5,
//                3,
//                "French",
//                false,
//                "Allegoric representation of the dangers of conformism",
//                "");
//        scriptDataRepository.save(rhinoceros);
//
//        ScriptsData godot = new ScriptsData(
//                "Waiting for Godot",
//                "Samuel Beckett",
//                "Absurd",
//                60,
//                4,
//                0,
//                0,
//                "English",
//                false,
//                "2 vagabonds waiting for Godot",
//                "");
//        scriptDataRepository.save(godot);
//
//        ScriptsData dollshouse = new ScriptsData(
//                "A doll's house",
//                "Henrik Ibsen",
//                "Tragedy",
//                80,
//                2,
//                2,
//                0,
//                "English",
//                true,
//                "Drama about woman emancipation",
//                "");
//        scriptDataRepository.save(dollshouse);

    }
}

