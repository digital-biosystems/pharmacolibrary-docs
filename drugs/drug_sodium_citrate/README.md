<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;sodium citrate&quot;}]"></div>

# sodium citrate

- **generic name:** sodium citrate
- **ATC codes:** `B05CB02`
- **DrugBank:** [DB09154](https://go.drugbank.com/drugs/DB09154) · **PubChem:** [CID 6224](https://pubchem.ncbi.nlm.nih.gov/compound/6224)
- **molar mass:** 258.068 g/mol (C6H5Na3O7) — DrugBank
- **groups:** approved, investigational

## About

Sodium citrate is a salt solution used as an irrigating solution in blood and blood-forming related care. It is an approved medicine and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409728](https://www.wikidata.org/wiki/Q409728) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:47 | 8:23 | 0/0/0 | 0/0/0 | 0/0/0 | 272,511/9,248 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 2/44 | 23/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_citrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA4 (inhibitor), SLC13A2 (substrate), SLC13A5 (substrate), SLC25A1 (substrate), SLC25A21 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 260 matched, 110 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kramer_2003.pdf` | Kramer L et al., Citrate pharmacokinetics and metabolism…, Critical care medicine (2003) | popPK | 10 | [10.1097/01.CCM.0000084871.76568.E6](https://doi.org/10.1097/01.CCM.0000084871.76568.E6) | [14530750](https://pubmed.ncbi.nlm.nih.gov/14530750) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution) for sodium citrate in humans, with specific numeric values for clearance provided in the abstract. |
| `Burns_1989.pdf` | Burns FR et al., Inhibition of purified collagenase from…, Investigative ophthalmology… (1989) | pd | 4 | not captured | [2545645](https://www.ncbi.nlm.nih.gov/pubmed/2545645) | metadata signals extractable PD data (IC50) |
| `Patil_2017.pdf` | Patil AS et al., A TLC-Direct Bioautography Method for D…, Journal of chromatographic… (2017) | pd | 4 | [10.1093/chromsci/bmx002](https://doi.org/10.1093/chromsci/bmx002) | [28203809](https://www.ncbi.nlm.nih.gov/pubmed/28203809) | metadata signals extractable PD data (IC50) |
| `Yu_2016.pdf` | Yu G et al., In vitro inhibition of platelet aggrega…, Food chemistry (2016) | pd | 4 | [10.1016/j.foodchem.2015.08.058](https://doi.org/10.1016/j.foodchem.2015.08.058) | [26471595](https://www.ncbi.nlm.nih.gov/pubmed/26471595) | metadata signals extractable PD data (IC50) |
| `de_2027.pdf` | de Oliveira Silva D et al., Metabolic profiling of Piper regnellii…, Journal of ethnopharmacology (2027) | pd | 4 | [10.1016/j.jep.2026.122142](https://doi.org/10.1016/j.jep.2026.122142) | [42379540](https://www.ncbi.nlm.nih.gov/pubmed/42379540) | metadata signals extractable PD data (IC50) |
| `Liu_2015.pdf` | Liu EP et al., Whole Blood PCR Amplification with Pfu…, Genetic testing and molecul… (2015) | pgx | 5 | [10.1089/gtmb.2015.0018](https://doi.org/10.1089/gtmb.2015.0018) | [26360116](https://www.ncbi.nlm.nih.gov/pubmed/26360116) | metadata signals extractable PGX data (CYP2C9*3) |

<sub>queue written 2026-10-06T00:44:02.867051+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ademakinwa_2019 | not_relevant | 0 | 0 | The paper focuses on the purification of an enzyme using aqueous two-phase partitioning and reports thermodynamic/kinetic stability parameters, not pharmacodynamic or exposure-response relationships for sodium citrate. |
| popPK | Algov_2026 | irrelevant | 0 | 0 | The paper describes a protease activity mapping platform for tumor detection and does not involve sodium_citrate or pharmacokinetic parameters. |
| PD | Algov_2026 | not_relevant | 0 | 0 | The paper describes a protease substrate discovery platform and biosensor development, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sodium citrate. |
| PD | Amooaghaie_2015 | not_relevant | 0 | 0 | The paper reports IC50 values for silver nanoparticles (AgNPs) in plant and cell assays, not for sodium citrate, which is merely a reagent used in the synthesis process. |
| popPK | Batsios_2026 | irrelevant | 0 | 0 | The paper focuses on the metabolic role of lactate in gliomas and does not involve sodium citrate or its pharmacokinetics. |
| PD | Batsios_2026 | not_relevant | 0 | 0 | The paper focuses on the metabolic mechanism of H3K27M-mutant gliomas and deuterium metabolic imaging, with no analysis of sodium citrate pharmacodynamics or exposure-response relationships. |
| popPK | Blatnik_2011 | irrelevant | 0 | 0 | The study investigates the stability of acylghrelin in blood samples, using sodium citrate only as a comparator anticoagulant, and does not report pharmacokinetic parameters for sodium citrate. |
| popPK | Braide_2009 | irrelevant | 0 | 0 | The study evaluates sodium citrate as an additive to peritoneal dialysis fluid to assess its effect on ultrafiltration and solute clearance, not as a subject drug for pharmacokinetic parameter estimation (CL, V, etc.). |
| popPK | Bégué_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefoperazone, not sodium citrate, which is only mentioned as a component of the agar medium for bacterial assays. |
| PD | Chaudhari_2016 | not_relevant | 0 | 0 | The paper reports antimicrobial activity (MIC/IC50) of nanomaterials, not a pharmacodynamic exposure-response relationship for the drug sodium citrate. |
| popPK | Chen_1996 | irrelevant | 0 | 0 | The study investigates the stability of keratinocyte growth factor (KGF) using sodium citrate as a stabilizing salt, not the pharmacokinetics of sodium citrate itself. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper investigates the molecular basis of antibody polyreactivity and contains no pharmacokinetic data for sodium citrate. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on the molecular basis of antibody polyreactivity and does not report any pharmacodynamic or exposure-response data for sodium citrate. |
| popPK | Chu_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacological mechanisms of a Tibetan decoction in a rat model of rheumatoid arthritis and does not report pharmacokinetic parameters for sodium citrate. |
| PD | Chu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a traditional decoction (SXD) and does not report any pharmacodynamic or exposure-response analysis for sodium citrate. |
| popPK | Clark_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of salmon calcitonin, with sodium citrate serving only as an excipient in the formulation. |
| popPK | Colombo_2025 | irrelevant | 1 | 0 | The study is a proof-of-concept engineering experiment in swine evaluating an ion-exchange resin circuit for regional citrate anticoagulation, reporting citrate concentrations and removal efficiency rather than pharmacokinetic parameters (CL, V, ka) for sodium citrate. |
| popPK | Cox_1994 | irrelevant | 0 | 0 | The study investigates physiological and ventilatory responses to exercise after sodium citrate ingestion, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | DeGrado_2014 | irrelevant | 0 | 0 | The study investigates the production and biodistribution of a zinc radiotracer (63Zn-zinc citrate) for PET imaging, not the pharmacokinetics of sodium citrate as a therapeutic drug. |
| popPK | Deetz_1981 | irrelevant | 0 | 0 | The study measures renal clearance of electrolytes (Mg, Ca, P) and endocrine responses, not the pharmacokinetic disposition parameters (CL, V, ka) of sodium citrate itself. |
| popPK | Diepstraten_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nadroparin, not sodium_citrate. |
| PD | Diepstraten_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for nadroparin, not sodium citrate, and does not provide a pharmacodynamic (PD) or exposure-response model with numeric PD parameters. |
| popPK | Du_2025 | irrelevant | 0 | 0 | The paper focuses on senescent hepatocytes and MASLD in mice and humans, with no mention of sodium citrate pharmacokinetics. |
| PD | Du_2025 | not_relevant | 0 | 0 | The paper focuses on gene signatures and senolytic screening for MASLD and does not report any pharmacodynamic or exposure-response analysis for sodium citrate. |
| popPK | Enea_2020 | irrelevant | 0 | 0 | The study is an in vitro toxicology investigation of gold nanoparticles where sodium citrate is used only as a capping agent or solvent control, not as the subject drug for pharmacokinetic analysis. |
| popPK | Fan_2001 | irrelevant | 0 | 0 | The study focuses on calcium oxalate crystallization and bioequivalence of citrate salts, not on the pharmacokinetic disposition parameters (CL, V, etc.) of sodium citrate. |
| popPK | Ferry_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nalidixic acid, with sodium citrate serving only as a co-administered agent for urine alkalization. |
| popPK | Firth_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zinc-62 (a radionuclide) using citrate as a chelator, not sodium citrate as the subject drug. |
| popPK | Fritz_1976 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenylalanine ammonia-lyase, and sodium citrate is only mentioned as a reagent used for enzyme purification. |
| popPK | Garcia_2018 | irrelevant | 0 | 0 | The study is an in-vitro physicochemical investigation of calcium citrate supersaturation and precipitation kinetics, not a pharmacokinetic study of sodium citrate disposition. |
| popPK | Getz_2019 | irrelevant | 0 | 0 | The study investigates the biological effects of sodium citrate on platelet storage (apoptosis, aggregation) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Graham_1999 | irrelevant | 0 | 0 | The study investigates the 13C-urea breath test mechanism where sodium citrate is used only as a comparator test meal, not as a subject drug for pharmacokinetic analysis. |
| popPK | Harbauer_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of low-molecular-weight heparins, and sodium citrate is used only as an anticoagulant in blood collection tubes. |
| popPK | Harder_2001 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic comparison of GPIIb/IIIa antagonists where sodium citrate is used only as an anticoagulant, not as the subject drug for PK analysis. |
| popPK | He_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of edoxaban, using sodium citrate only as an anticoagulant in blood collection tubes, not as the subject drug. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of compound A36 (a calpain-2 stabilizer) in mice, not sodium citrate. |
| popPK | Höfer_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of synergy between gemcitabine and ATR inhibitors in pancreatic cancer cells and does not involve sodium citrate. |
| PD | Höfer_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Gemcitabine and ATR inhibitors (Elimusertib, etc.) in cancer cells, not sodium citrate. |
| popPK | Hüppe_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fosfomycin, not sodium_citrate. |
| PD | Hüppe_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for fosfomycin, not sodium citrate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Jagasia_2025 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics and pharmacodynamics of the antisense oligonucleotide rugonersen, not sodium citrate. |
| PD | Kaur_2024 | not_relevant | 0 | 0 | The paper reports dose-response data (IC50) for silver nanoparticles, not sodium citrate, which is only used as a reagent for synthesis. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is a study on the evolutionary biology of a plant halogenase enzyme and contains no pharmacokinetic data for sodium citrate. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper focuses on the evolutionary biology and structural modeling of a plant halogenase enzyme, containing no pharmacodynamic or exposure-response data for sodium citrate. |
| popPK | Kołodziejczyk_2026 | irrelevant | 0 | 0 | The paper is an in-vitro materials science study on gold nanoparticle synthesis where sodium citrate is used only as a comparator reducing agent, not as a subject drug for pharmacokinetic analysis. |
| PD | Kołodziejczyk_2026 | not_relevant | 0 | 0 | The paper reports cytotoxicity (EC50) for gold nanoparticles, not a pharmacodynamic relationship for sodium citrate, which is only mentioned as a reducing agent for comparison. |
| popPK | Kulkarni_2016 | irrelevant | 0 | 0 | The study investigates the effect of anticoagulants (including citrate) on the bioanalysis of six anticancer drugs, not the pharmacokinetics of sodium citrate itself. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a radiolabeled PAMAM dendrimer, and sodium citrate is only mentioned as a buffer component for radiochemical purity analysis. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of action of a nanoemulsion for oral squamous cell carcinoma and does not involve sodium citrate or pharmacokinetic parameters. |
| PD | Lai_2025 | not_relevant | 0 | 0 | The paper investigates a nanoemulsion (AS/BJO-NEs) and does not report any pharmacodynamic or exposure-response data for sodium citrate. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of aminoguanidine and 2-bromoethylamine, not sodium citrate, which is only used as a buffer for streptozotocin administration. |
| popPK | Ling_2000 | irrelevant | 0 | 0 | The paper describes an enzyme immobilization study for L-glutamic acid determination where sodium citrate is used only as a buffer component, not as a subject drug for pharmacokinetic analysis. |
| PGx | Liu_2015 | not_relevant | 0 | 0 | The paper describes a PCR method for genotyping and mentions sodium citrate only as an anticoagulant affecting polymerase activity, not as a drug subject to pharmacogenomic analysis. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sodium citrate-modified nanoshuttles (nanomaterials) for tumor theranostics, not the pharmacokinetic parameters of sodium citrate as a standalone drug. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dabigatran etexilate, not sodium citrate (which is only mentioned as a blood collection tube anticoagulant). |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper describes a chemical sensing method for hydrogen peroxide using nanoprobes; sodium citrate is used only as a reagent for nanoparticle synthesis, not as a drug with a pharmacodynamic effect. |
| popPK | Liyanagamage_2021 | irrelevant | 0 | 0 | The study investigates the antidiabetic effects of a polyherbal mixture in rats and does not involve sodium_citrate or report any pharmacokinetic parameters. |
| PD | Liyanagamage_2021 | not_relevant | 0 | 0 | The paper studies a polyherbal mixture in rats and does not report any pharmacodynamic or exposure-response data for sodium citrate. |
| popPK | Lobo-Rojas_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacology of AVN-944 and merimepodib against T. cruzi IMPDH, not the pharmacokinetics of sodium citrate. |
| PD | Lobo-Rojas_2026 | not_relevant | 0 | 0 | The paper reports dose-response data (IC50/EC50) for IMPDH inhibitors (AVN-944, Merimepodib) and benznidazole, but does not contain any data or analysis for sodium citrate. |
| popPK | Lote_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aluminium (specifically aluminium citrate vs aluminium chloride), not sodium citrate. |
| popPK | Lou_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of donafenib and sorafenib in rats, where sodium citrate is only mentioned as an alternative anticoagulant in the sample preparation method. |
| PD | Lv_2025 | not_relevant | 0 | 0 | The paper focuses on the chemical synthesis and characterization of a polysaccharide-iron complex, not on the pharmacodynamics of sodium citrate; sodium citrate is only mentioned as a reagent in the synthesis process. |
| PD | Martinov_2025 | not_relevant | 0 | 0 | The paper studies the synthesis and biological activity of nanocomposites where sodium citrate is used as a reagent, not as a drug, and does not report any pharmacodynamic or exposure-response relationship for sodium citrate. |
| popPK | Merali_2023 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of apixaban, not sodium_citrate. |
| PD | Merali_2023 | not_relevant | 4 | 2 | The paper reports a linear relationship between anti-FXa activity and apixaban concentration but does not provide numeric PD parameters (slope/intercept) or a derivable curve in the text. |
| popPK | Muhammad_2024 | irrelevant | 0 | 0 | The study investigates the effect of sodium citrate buffer on the pharmacokinetics of pazopanib, not the pharmacokinetics of sodium citrate itself. |
| popPK | Munusamy_2024 | irrelevant | 0 | 0 | The study focuses on the formulation of acyclovir, and sodium citrate is used only as an excipient (complexing agent), not as the subject drug for pharmacokinetic analysis. |
| PD | Mutalik_2008 | not_relevant | 0 | 0 | The paper focuses on formulation development (chitosan co-crystals) and reports qualitative improvements in bioavailability and pharmacological response, but does not provide numeric PD parameters or an exposure-response model for sodium citrate. |
| popPK | Myers_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of BMX-001 in cancer models and does not report pharmacokinetic parameters for sodium citrate. |
| PD | Myers_2026 | not_relevant | 0 | 0 | The paper studies BMX-001, not sodium citrate, and does not report any pharmacodynamic or exposure-response relationship for sodium citrate. |
| popPK | Padhi_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa (L-DOPA) produced by engineered bacteria, not sodium citrate. |
| PD | Padhi_2025 | not_relevant | 0 | 0 | The paper focuses on a bioengineered bacterium for L-DOPA delivery and does not report any pharmacodynamic or exposure-response analysis for sodium citrate. |
| popPK | Pettit_1976 | irrelevant | 0 | 0 | The study models the pharmacokinetics of fructose, using sodium citrate only as a co-administered agent to modify gastric emptying, not as the subject drug. |
| popPK | Piwowarczyk_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nadroparin, not sodium_citrate. |
| PD | Piwowarczyk_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of nadroparin (an anticoagulant) and its anti-Xa activity, not sodium citrate; no PD parameters for sodium citrate are reported. |
| popPK | Poirier_2011 | irrelevant | 0 | 0 | The study is a neurodevelopmental toxicity assessment of aluminum salts where sodium citrate is used only as a vehicle/control, and no pharmacokinetic parameters are reported. |
| PD | Poirier_2011 | not_relevant | 2 | 1 | The paper describes a toxicology study with qualitative dose-response observations for aluminum salts, but does not report a pharmacodynamic model or numeric PD parameters for sodium citrate. |
| popPK | Qanash_2026 | irrelevant | 0 | 0 | The paper investigates phytochemicals from Delonix regia seeds and their biological activities, with no mention of sodium citrate or pharmacokinetic parameters. |
| PD | Qanash_2026 | not_relevant | 0 | 0 | The paper studies phytochemicals from Delonix regia seeds, not sodium citrate, and reports in vitro IC50s for an extract rather than a pharmacodynamic exposure-response model for the specified drug. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem, not sodium_citrate. |
| PD | Qiao_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of imipenem and probability of target attainment (PTA) for time-dependent antibiotics, not on sodium citrate or a concentration-effect (PD) model with numeric parameters like Emax or EC50. |
| popPK | Rantanen_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methylprednisolone, not sodium_citrate. |
| PD | Rantanen_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for methylprednisolone, not sodium citrate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Ravi_2022 | irrelevant | 0 | 0 | The study is an in-vitro investigation of gold nanoparticle synthesis and cytotoxicity, where sodium citrate is used solely as a reducing agent, not as a subject drug for pharmacokinetic analysis. |
| popPK | Rech_2022 | irrelevant | 0 | 0 | The paper investigates sodium citrate as an ESR dosimeter material for radiation dosimetry, not as a drug for pharmacokinetic analysis. |
| PD | Rech_2022 | not_relevant | 0 | 0 | The paper investigates sodium citrate as a material for ESR radiation dosimetry (radiation dose-response), not as a drug with pharmacodynamic effects in a biological system. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not report pharmacokinetic parameters for sodium citrate. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a theoretical review of excipients in paediatric formulations and does not report any pharmacodynamic or exposure-response data for sodium citrate. |
| popPK | Rudman_1982 | irrelevant | 0 | 0 | The study investigates urinary citrate excretion and tubular reabsorption in kidney stone patients, not the pharmacokinetic disposition parameters (CL, V, ka) of sodium citrate. |
| popPK | Schilder_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of interleukins (IL-6 and IL-8) during hemofiltration, using sodium citrate only as an anticoagulant agent rather than the subject drug. |
| popPK | Schilder_2015 | irrelevant | 0 | 0 | The study investigates the clearance of AKI mediators (TWEAK, Ang-2, PTX3) by hemofiltration, using sodium citrate only as an anticoagulant, and does not report pharmacokinetic parameters for sodium citrate itself. |
| popPK | Schneider_1975 | irrelevant | 0 | 0 | The study investigates renal physiology (sodium reabsorption) in dogs using sodium citrate as an infusion agent to manipulate parathyroid hormone, not as a subject drug for pharmacokinetic modeling. |
| PD | Schüssler_2019 | not_relevant | 0 | 0 | The paper reports the crystal structure of GTP cyclohydrolase I and enzyme inhibition data (IC50) for test compounds, but does not report any pharmacodynamic or exposure-response relationship for sodium citrate. |
| popPK | Sikorová_1980 | irrelevant | 0 | 0 | The paper describes the preparation and stability of lyophilized plasma reagents for Factor VIII assays, where sodium citrate is used only as an anticoagulant in substrate plasmas, not as a subject drug for pharmacokinetic analysis. |
| popPK | Simeoli_2024 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of budesonide, not sodium citrate. |
| PD | Simeoli_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of budesonide and does not report any pharmacodynamic (PD) or exposure-response analysis with numeric parameters. |
| popPK | Siu_2025 | irrelevant | 0 | 0 | The paper is an immunology study on influenza vaccine response in lymph nodes and does not involve sodium_citrate pharmacokinetics. |
| PD | Siu_2025 | not_relevant | 0 | 0 | The paper investigates immune responses to an influenza vaccine and does not report any pharmacodynamic or exposure-response data for sodium citrate. |
| PGx | Song_2014 | not_relevant | 0 | 0 | The paper studies the effect of MTHFR polymorphisms on homocysteine levels, not the pharmacokinetics or pharmacodynamics of sodium citrate (which is used only as an anticoagulant in sample collection). |
| popPK | Song_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tigecycline, not sodium_citrate. |
| PD | Song_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of tigecycline and uses PK/PD targets (AUC/MIC) for dose optimization, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for sodium citrate. |
| popPK | Stitt_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tranexamic acid, not sodium citrate. |
| PD | Stitt_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of tranexamic acid and dose optimization based on exposure targets; it does not report any pharmacodynamic (PD) or exposure-response relationship for sodium citrate or any other drug. |
| popPK | Suleymanov_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levofloxacin, not sodium citrate, which is only a component of the implant matrix. |
| PD | Suleymanov_2026 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for levofloxacin and does not report any pharmacodynamic or exposure-response data for sodium citrate. |
| popPK | Tang_2022 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of regional citrate anticoagulation in hemodialysis and does not report pharmacokinetic parameters (CL, V, etc.) for sodium citrate. |
| popPK | Tolwani_2006 | irrelevant | 0 | 0 | The study focuses on a clinical protocol for citrate anticoagulation in CRRT and reports dialyzer survival and metabolic control, not pharmacokinetic parameters (CL, V, ka) for sodium citrate. |
| PD | Tono-Oka_1978 | not_relevant | 0 | 0 | The paper studies endotoxin-induced tissue factor activity; sodium citrate is used only as a calcium chelator to inhibit the response, and no exposure-response or dose-response PD parameters for sodium citrate are reported. |
| popPK | Trentin-Sonoda_2023 | irrelevant | 0 | 0 | The study investigates the effects of Canagliflozin on kidney function in mice, using sodium citrate only as a vehicle/control injection for the STZ model, and does not report pharmacokinetic parameters for sodium citrate. |
| popPK | Trepka_2025 | irrelevant | 0 | 0 | The paper studies the interaction between gut microbiome and fluoropyrimidine toxicity, not the pharmacokinetics of sodium citrate. |
| PD | Trepka_2025 | not_relevant | 0 | 0 | The paper investigates the interaction between the gut microbiome (specifically the preTA operon) and fluoropyrimidine toxicity, not the pharmacodynamics of sodium citrate. |
| popPK | Urwin_2016 | irrelevant | 1 | 0 | The study measures physiological outcomes (blood pH, bicarbonate) and gastrointestinal symptoms rather than pharmacokinetic disposition parameters (CL, V, ka) for sodium citrate. |
| popPK | Vagianos_1990 | irrelevant | 2 | 0 | The study is a toxicological/physiological experiment in pigs focusing on calcium reversal of citrate toxicity, and while it mentions "citrate clearance," no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Vajda_2016 | irrelevant | 0 | 0 | The paper is a study on anion exchange chromatography of influenza virus particles, not a pharmacokinetic study of sodium citrate. |
| popPK | Valke_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Factor VIII (FVIII) in hemophilia A patients, not sodium citrate. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The study investigates the use of sodium citrate as a chelating agent to remove cadmium from mushrooms, not the pharmacokinetics of sodium citrate. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for a magnetic nanocomposite (Fe3O4@CS/AuNPs), not for sodium citrate, which is used only as a reducing agent in the synthesis process. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of imipenem, not sodium_citrate. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper reports PK parameters for imipenem and the effect of hemoperfusion on cytokines, but does not report a pharmacodynamic or exposure-response relationship for sodium citrate. |
| popPK | Wechselberger_2022 | irrelevant | 0 | 0 | The study focuses on the caloric balance and nutrient loss/gain during dialysis, not on the pharmacokinetic parameters (CL, V, ka) of sodium citrate as a drug. |
| popPK | Westmark_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Factor IX(a), not sodium citrate. |
| PD | Westmark_2025 | not_relevant | 0 | 0 | The paper focuses on Factor IX pharmacokinetics and tissue distribution, not sodium citrate, and does not report any exposure-response or dose-response PD parameters for sodium citrate. |
| popPK | Witkowski_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and effects of erythritol, not sodium citrate. |
| PD | Witkowski_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of erythritol, not sodium citrate, and does not report any exposure-response or dose-response relationship for sodium citrate. |
| popPK | Wood_1975 | irrelevant | 0 | 0 | The paper describes the inhibitory effects of citrates on microbiological assays for penicillin and does not report any pharmacokinetic parameters for sodium citrate. |
| PD | Wood_1975 | not_relevant | 1 | 0 | The paper describes a qualitative microbiological interference mechanism (cation sequestration) and mentions a specific magnesium concentration (0.02 M) that overcomes inhibition, but it does not report a quantitative exposure-response or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for sodium citrate. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of warfarin and vitamin K, not sodium citrate. |
| PD | Xue_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of warfarin (INR response) and the influence of vitamin K and gut microbiota, but does not report a pharmacodynamic or exposure-response relationship for sodium citrate. |
| popPK | Zhen_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Factor VIII (FVIII) in hemophilia patients, using trisodium citrate only as an anticoagulant in blood collection tubes, not as the subject drug. |
| PGx | Zheng_2018 | not_relevant | 0 | 0 | The paper describes a genotyping method for CYP2C19 and mentions sodium citrate only as an anticoagulant used in sample preparation, not as a drug subject to pharmacogenomic analysis. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The paper studies the purification and stability of bromelain, where sodium citrate is only mentioned as a stabilizing agent, not as the subject of pharmacokinetic analysis. |
| PD | Zhou_2024 | not_relevant | 0 | 0 | The paper reports IC50 values for natural product derivatives (butanolides/diphenyl ethers), not for sodium citrate, which is only mentioned as a chemical epigenetic manipulation agent used during isolation. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanisms of a herbal formula (KHF) and its component rutin in a mouse model of pulmonary fibrosis, with no mention of sodium citrate or its pharmacokinetics. |
| PD | Zhu_2026 | not_relevant | 2 | 1 | The study investigates the mechanism of action (GLUT1/HIF-1α) using qualitative dose comparisons and cellular assays, but explicitly states it did not establish a full dose-response relationship and provides no numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| popPK | Zufferey_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of tranexamic acid, not the pharmacokinetics of sodium citrate. |
| PD | Zufferey_2025 | not_relevant | 2 | 2 | The paper is a study protocol for a future trial and does not report actual experimental data or fitted PD parameters, only citing prior meta-analysis values for design purposes. |
| PD | de_2027 | not_relevant | 0 | 0 | The paper reports an IC50 for the plant extract Piper regnellii, but sodium citrate is used only as a positive control without reported numeric dose-response parameters or PD modeling. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
