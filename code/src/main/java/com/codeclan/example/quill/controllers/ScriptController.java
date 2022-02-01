package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.PDF;
import com.codeclan.example.quill.models.Script;
import com.codeclan.example.quill.repositories.ScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
public class ScriptController {
    @Autowired
    ScriptRepository scriptRepository;

// ****************     ALL SCRIPTS    ****************
    @GetMapping(value = "/scripts")
    public ResponseEntity<List<Script>> getScripts(){
        return new ResponseEntity<>(scriptRepository.findAll(), HttpStatus.OK);
    }

// ****************     GET BY ID     ****************
    @GetMapping(value = "/scripts/{id}")
    public ResponseEntity<Optional<Script>> getById(@PathVariable Long id){
        return new ResponseEntity<>(scriptRepository.findById(id), HttpStatus.OK);
    }

// ****************    GET BY TITLE   ****************
    @GetMapping(value = "/results/bytitle")
    public ResponseEntity<List<Script>> getByTitle(@RequestParam(name = "title") String title){
        return new ResponseEntity<>(scriptRepository.getByTitle(title), HttpStatus.OK);
    }

// ****************      GET BY M      **************** (eq m=x)(gt m=x&gtx)(lt m=x&ltx)
    @GetMapping(value = "/results/bym")
    public ResponseEntity<List<Script>> getByM(@RequestParam(name = "mop") String mop, @RequestParam(name = "m") int m) {
        return new ResponseEntity<>(scriptRepository.getByM(mop, m), HttpStatus.OK);
    }

// ****************    GET BY CAST     **************** (eq m=x)(gt m=x&gtx)(lt m=x&ltx)
    @GetMapping(value = "/results/bycast")
    public ResponseEntity<List<Script>> getByCast(@RequestParam(name = "cop") String cop, @RequestParam(name = "cast") int cast){
        return new ResponseEntity<>(scriptRepository.getByCast(cop, cast), HttpStatus.OK);
    }

// ****************   ROYALTY FREE    **************** (rf=true/false)
    @GetMapping(value = "/results/byrf")
    public ResponseEntity<List<Script>> getByRF(@RequestParam(name = "rf") boolean rf){
        return new ResponseEntity<>(scriptRepository.getByRF(rf), HttpStatus.OK);
    }

// ****************      ONE TAG      ****************
    @GetMapping(value = "/results/by1tag")
    public ResponseEntity<List<Script>> getBy1Tag(@RequestParam(name = "tag") String tag){
        return new ResponseEntity<>(scriptRepository.getByTag(tag), HttpStatus.OK);
    }


// ****************      ???????      ****************
// ****************      ???????      ****************
// ****************      ???????      ****************



// ====================================================
// ======           FINAL BIG QUERY             =======
// ====================================================
    @GetMapping(value = "/results")
    public ResponseEntity<List<Script>> getResults(
            @RequestParam(name = "title") String title,
            @RequestParam(name = "author") String author,
            @RequestParam(name = "genre") String genre,
            @RequestParam(name = "lop") String lop, @RequestParam(name = "length") int length,
            @RequestParam(name = "mop") String mop, @RequestParam(name = "m") int m,
            @RequestParam(name = "fop") String fop, @RequestParam(name = "f") int f,
            @RequestParam(name = "nop") String nop, @RequestParam(name = "n") int n,
            @RequestParam(name = "cop") String cop, @RequestParam(name = "cast") int cast,
            @RequestParam(name = "language") String language,
            @RequestParam(name = "royaltyfree") boolean royaltyfree,
            @RequestParam(name = "tags") String tag){

        return new ResponseEntity<>(scriptRepository.getResults(
                title,
                author,
                genre,
                lop, length,
                mop, m,
                fop, f,
                nop, n,
                cop, cast,
                language,
                royaltyfree,
                tag
                ),

                HttpStatus.OK);
    }


// ====================================================
// ======            POST / GET  SCRIPT         =======
// ====================================================
    @PostMapping(value = "/script/add")
    public String addScript(@RequestParam(name = "title") String title,
                            @RequestParam(name = "author") String author,
                            @RequestParam(name = "genre") String genre,
                            @RequestParam(name = "length") int length,
                            @RequestParam(name = "m") int m,
                            @RequestParam(name = "f") int f,
                            @RequestParam(name = "n") int n,
                            @RequestParam(name = "language") String language,
                            @RequestParam(name = "royaltyfree") boolean royaltyfree,
                            @RequestParam(name = "description") String description,
                            @RequestParam(name = "tags") String tag,

                            @RequestParam("pdf") MultipartFile pdf, Model model)
            throws IOException {
        PDF pdfToSave = new PDF();
        pdfToSave.setPdfFile(pdf.getBytes());

        Script script = new Script(
                title,
                author,
                genre,
                length,
                m,
                f,
                n,
                language,
                royaltyfree,
                description,
                tag,
                pdfToSave);
        script.setUploadTime(LocalDateTime.now());
        scriptRepository.save(script);

        return "redirect:/scripts/" + script.getId();
    }

//    @PostMapping("/script/addTitle")
//    public String addScript(@RequestParam(name = "title") String title,
//
//                            @RequestParam("pdf") MultipartFile pdf, Model model)
//            throws IOException {
//        PDF pdfToSave = new PDF();
//        pdfToSave.setPdfdata(pdf.getBytes());
//
//        Script script = new Script(
//                title,
//                pdfToSave);
//        scriptDataRepository.save(script);
//
//        return "redirect:/scripts/" + script.getId();
//    }

    @GetMapping(value = "/scripts/pdf/{id}")
    public ResponseEntity<byte[]> getScript(@PathVariable Long id) {
        Optional<Script> scriptsData = scriptRepository.findById(id);

//        File file = new File("test.pdf");
//        try
//        {
//            System.out.println(System.getProperty("user.dir") + " : " + file.getAbsolutePath());
//            FileOutputStream fos = new FileOutputStream(file);
//            fos.write(script.getScript().getData());
//        }catch (FileNotFoundException e) {
//            e.printStackTrace();
//        }
//        catch(Exception ee)
//        {
//            ee.printStackTrace();
//        }

//        return model.getAttribute("pdf");

        System.out.println(System.getProperty("user.dir"));  // print working directory on console

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("output.pdf","output.pdf");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(scriptsData.get().getPdf().getPdfFile(),headers, HttpStatus.OK);
        return response;
    }
}
