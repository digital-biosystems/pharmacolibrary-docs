<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;silicones&quot;}]"></div>

# silicones

- **generic name:** silicones
- **ATC codes:** `A03AX13`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 22:30 | 16:43 | 0/0/0 | 0/0/0 | 0/0/0 | 95,400/2,833 | ollama / qwen3.8:27b-mtp-q8_0 | 40 | 6/34 | 37/3 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 89 matched, 155 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reddy_2008.pdf` | Reddy MB et al., Inhalation dosimetry modeling with deca…, Toxicological sciences : an… (2008) | popPK | 9 | [10.1093/toxsci/kfn125](https://doi.org/10.1093/toxsci/kfn125) | [18583370](https://pubmed.ncbi.nlm.nih.gov/18583370) | The paper describes a PBPK model for a silicone (D5) with quantitative parameters, but the specific numeric values are not present in the provided evidence text. |
| `Schmitt_2023.pdf` | Schmitt BG et al., Comparative pharmacokinetic studies of…, Toxicology letters (2023) | popPK | 9 | [10.1016/j.toxlet.2022.10.008](https://doi.org/10.1016/j.toxlet.2022.10.008) | [36332816](https://pubmed.ncbi.nlm.nih.gov/36332816) | The paper is a pharmacokinetic study of D4 (a silicone) in rats, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |

<sub>queue written 2026-09-29T22:30:39.562095+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_1993 | irrelevant | 0 | 0 | The paper studies the pharmacodynamic effects of a leukotriene antagonist (ONO-1078) in sheep and does not involve silicones or report any pharmacokinetic parameters. |
| popPK | Addicks_1988 | irrelevant | 0 | 0 | The study is an in-vitro methodology paper using silicone rubber membranes as a barrier, not a pharmacokinetic study of silicones as a drug. |
| popPK | Ala-Houhala_1987 | irrelevant | 0 | 0 | The study investigates renal clearance of dextran and proteins in nephropathy patients and does not involve silicones or report pharmacokinetic parameters for silicones. |
| popPK | Alkhatib_2026 | irrelevant | 0 | 0 | The study investigates dopamine D4 receptor ligands, not silicones. |
| popPK | Annelin_1989 | irrelevant | 2 | 0 | The study reports bioconcentration/uptake levels in fish rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for silicones. |
| popPK | Aquino_2020 | irrelevant | 0 | 0 | The paper is a clinical case report on hemophilia and ocular surgery where silicone oil is used as a surgical tamponade, not a pharmacokinetic study of silicones. |
| popPK | Asghar_2022 | irrelevant | 0 | 0 | The study focuses on the formulation of ciprofloxacin (CPN) using silicone oil as an excipient, not on the pharmacokinetics of silicones as the subject drug. |
| popPK | Bein_2018 | irrelevant | 0 | 0 | The paper is a review of microfluidic organ-on-a-chip models and does not report pharmacokinetic parameters for silicones as a drug. |
| popPK | Benowitz_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nicotine and cotinine, not silicones. |
| popPK | Biollaz_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-648,051, not silicones. |
| popPK | Bisagni_2014 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of a Baeyer-Villiger monooxygenase enzyme, not the pharmacokinetics of silicones. |
| popPK | Bleher_2026 | irrelevant | 0 | 0 | The paper evaluates a PET tracer ([18F]FER) for amyloid imaging and does not study the pharmacokinetics of silicones. |
| popPK | Bouhadjari_2016 | irrelevant | 0 | 0 | The study focuses on cisplatin and amifostine in the context of renal impairment, with no mention of silicones or their pharmacokinetic parameters. |
| popPK | Campaña-Seoane_2014 | irrelevant | 0 | 0 | The study focuses on the formulation and release kinetics of progesterone using a silicone derivative as an excipient, rather than reporting pharmacokinetic parameters for silicones as the subject drug. |
| popPK | Campaña-Seoane_2019 | irrelevant | 0 | 0 | The study focuses on ciprofloxacin as the subject drug, with silicones serving only as a formulation excipient (W/S emulsion), and no PK parameters for silicones are reported. |
| popPK | Carius_2024 | irrelevant | 0 | 0 | The study focuses on testosterone as a model compound to address PDMS adsorption issues in an in-vitro system, not on the pharmacokinetics of silicones as a subject drug. |
| popPK | Chang_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isoborneol, borneol, muscone, and cinnamaldehyde, not silicones. |
| popPK | Chapman_1992 | irrelevant | 0 | 0 | The study investigates drug uptake and washout kinetics in intraocular lenses (materials), not the pharmacokinetic disposition parameters (CL, V, etc.) of silicones as a subject drug in a biological system. |
| popPK | Christensen_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of QMPB (a leukotriene antagonist), not silicones. |
| popPK | Clasky_2022 | irrelevant | 0 | 0 | The study models drug transport from intraocular lenses made of PDMS (a silicone material), but the subject drugs are dexamethasone, ganciclovir, and dextran, not silicones. |
| popPK | Claus_2013 | irrelevant | 0 | 0 | The paper studies augmented renal clearance in ICU patients receiving antimicrobials and does not report pharmacokinetic parameters for silicones. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The paper describes the antibacterial properties of lignin-based polyurethane biofoams and does not report pharmacokinetic parameters for silicones. |
| popPK | Davies_2020 | irrelevant | 0 | 0 | The study focuses on in vitro and computational modeling of drug delivery (ibuprofen/dextran) from silicone oil, not the pharmacokinetics of silicones as the subject drug. |
| popPK | Davydova_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clemastine, not silicones, and silicones are only mentioned as the stationary phase material in the chromatography column. |
| popPK | Dekant_2016 | irrelevant | 2 | 0 | The paper is a toxicology review of D5 (a siloxane) that discusses qualitative clearance pathways (evaporation, exhalation) but does not report quantitative pharmacokinetic parameters (CL, V, ka) or population-PK models. |
| popPK | Del_1998 | irrelevant | 0 | 0 | The study uses silicone oil as a vehicle to induce hydrocephalus in rabbits to measure neurotransmitter levels, not to characterize the pharmacokinetics of silicones. |
| popPK | Delaere_1994 | irrelevant | 0 | 0 | The paper is a surgical study on tracheal autografts using silicone dye as a diagnostic agent, not a pharmacokinetic study of silicones. |
| popPK | Eu_2024 | irrelevant | 0 | 0 | The paper describes a 3D printed silicone surgical simulator for training, not a pharmacokinetic study of silicones as a drug. |
| popPK | Ferro_2025 | irrelevant | 0 | 0 | The paper is a review of drug dosing in silicone oil-filled eyes where silicone oil is the ocular environment/comparator, not the subject drug for PK parameter extraction. |
| popPK | Fisher_2003 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Flores-Villalobos_2018 | irrelevant | 0 | 0 | The study is an in-vitro release study of dexamethasone implants in silicone oil, not a pharmacokinetic study of silicones as the subject drug. |
| popPK | Fogli_2014 | irrelevant | 0 | 0 | The paper describes an eye phantom for surgical training and uses bevacizumab as a test drug, not silicones as the subject drug for PK parameter extraction. |
| popPK | Foster_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of peptide leukotrienes, not silicones. |
| popPK | Galbinur_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study comparing visual outcomes of gas vs. silicone oil tamponades for retinal detachment, not a pharmacokinetic study of silicones as a drug. |
| popPK | Ganbo_1995 | irrelevant | 0 | 0 | The paper investigates the effect of leukotrienes on mucociliary clearance, not the pharmacokinetics of silicones. |
| popPK | Geretti_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of RO7239958 (an antisense oligonucleotide), not silicones. |
| popPK | Golani_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KRM-II-81 and its deuterated analog, not silicones. |
| popPK | Grein-Iankovski_2024 | irrelevant | 0 | 0 | The paper describes the fabrication of silicone cilia for medical devices and their interaction with mucus, containing no pharmacokinetic data for silicones as a drug. |
| popPK | Gross_2015 | irrelevant | 0 | 0 | The paper describes a 3D-printed fluidic device using PDMS coatings for cell adherence and lysis, containing no pharmacokinetic data for silicones. |
| popPK | Gruber_1989 | irrelevant | 0 | 0 | The study focuses on cyclosporine pharmacokinetics and toxicity, with silicones mentioned only as a component of pump tubing that leaches the drug, not as the subject drug for PK analysis. |
| popPK | Gulbins_1991 | irrelevant | 0 | 0 | The paper studies the effects of leukotrienes on renal microcirculation and does not involve silicones or report pharmacokinetic parameters for them. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The study focuses on the formulation of rapamycin nanoparticles using PDMS chips, not the pharmacokinetics of silicones as a subject drug. |
| popPK | Güler_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study on retinal detachment repair using silicone oil as a tamponade agent, not a pharmacokinetic study of silicones as a drug. |
| popPK | Hammer_2022 | irrelevant | 0 | 0 | The study investigates the physicochemical distribution of other drugs (vancomycin, ceftazidime, voriconazole) in silicone oil, not the pharmacokinetic parameters of silicones themselves. |
| popPK | Harrison_2025 | irrelevant | 0 | 0 | The study investigates rencofilstat for MASH and does not report pharmacokinetic parameters for silicones. |
| popPK | Heinig_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BAY x 7195, not silicones. |
| popPK | Hickey_1996 | irrelevant | 0 | 0 | The study investigates the in vitro uptake of isoflurane by membrane oxygenators (one of which is made of silicone), but it is not a pharmacokinetic study of silicones as the subject drug. |
| popPK | Hira_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vancomycin, with silicone oil acting as a covariate/comparator rather than the subject drug. |
| popPK | Hirakata_1992 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory effects of erythromycin on Pseudomonas aeruginosa and does not involve silicones or pharmacokinetic parameter estimation. |
| popPK | Holm_1978 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of antibiotics, not silicones. |
| popPK | Hu_2015 | irrelevant | 0 | 0 | The paper is a fluid dynamics study on mucus plug rupture using Carbopol gels in a PDMS microfluidic channel and does not report pharmacokinetic parameters for silicones. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study investigates brimonidine as the subject drug using silicone rubber/PDMS as a delivery device, rather than reporting pharmacokinetic parameters for silicones themselves. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study on surgical implantation of a vitreous body and does not report pharmacokinetic parameters for silicones. |
| popPK | Imamura_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin and ceftazidime, with silicone oil serving only as a comparator condition or medium, not as the subject drug. |
| popPK | Jann_1993 | irrelevant | 0 | 0 | The paper is a review of clozapine pharmacokinetics and does not study silicones. |
| popPK | Jayadev_2026 | irrelevant | 0 | 0 | The paper is a review of silicone oil emulsification in ophthalmology and does not report quantitative population pharmacokinetic parameters for silicones. |
| popPK | Jhaveri_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carvedilol, not silicones. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The paper describes an LC-MS/MS method for BTK inhibitors (ibrutinib, etc.) and does not involve silicones or report any pharmacokinetic parameters for them. |
| popPK | Johnston_2024 | irrelevant | 0 | 0 | The paper is a clinical review of tracheal replacement methods and does not report pharmacokinetic parameters for silicones. |
| popPK | Jørgensen_2018 | irrelevant | 0 | 0 | The paper is a study on lymphedema models in mice where silicone is used only as a surgical splint material, not as a drug subject to pharmacokinetic analysis. |
| popPK | Kancharla_2016 | irrelevant | 0 | 0 | The paper describes a pharmacokinetic study for desvenlafaxine, not silicones. |
| popPK | Kataoka_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of verapamil and its metabolite norverapamil, not silicones. |
| popPK | Keegan_2013 | irrelevant | 0 | 0 | The paper focuses on the photobiology and bioavailability of vitamin D in mushrooms, not the pharmacokinetics of silicones. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the mechanical and rheological properties of a silicone implant device and in-vitro drug release, not the pharmacokinetics of silicones as a drug. |
| popPK | Kim_2025_2 | irrelevant | 0 | 0 | The paper focuses on mRNA-LNP vaccine delivery via microneedles, where silicone is only mentioned as a material for the microneedle surface, not as the subject drug for pharmacokinetic analysis. |
| PD | Kossovsky_1995 | not_relevant | 1 | 0 | The paper is a review discussing the physicochemical and immunological basis of silicone pathophysiology and does not report specific numeric pharmacodynamic parameters or exposure-response curves. |
| popPK | Kouassi_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levamisole, not silicones. |
| popPK | Kubota_1993 | irrelevant | 0 | 0 | The study focuses on the percutaneous absorption of betamethasone 17-valerate using a silicone adhesive as a vehicle, not on the pharmacokinetics of silicones as the subject drug. |
| popPK | Le_2025 | irrelevant | 0 | 0 | The paper investigates bacterial adhesion and biofilm formation on PDMS surfaces, not the pharmacokinetics of silicones. |
| popPK | Lee_1992 | irrelevant | 0 | 0 | The study investigates the effects of erythropoietin on peritoneal transport and immune response in CAPD patients and does not involve silicones or report pharmacokinetic parameters for silicones. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer [18F]-D4-FCH, not silicones. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyrotinib, not silicones. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper describes a bioanalytical method for ensartinib (an ALK inhibitor), not silicones, and does not report PK parameters for the target drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper describes a wearable device for sepsis treatment using PDMS microspheres as a therapeutic material, not a pharmacokinetic study of silicones as a drug. |
| popPK | Libreros_2023 | irrelevant | 0 | 0 | The paper investigates the immunological role of resolvin D4 in neutrophil deployment and contains no pharmacokinetic data for silicones. |
| popPK | Linares-Ramírez_2024 | irrelevant | 0 | 0 | The paper is a systematic review of simethicone (a silicone-based defoamer) for endoscopic visualization, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study focuses on the release kinetics of dexamethasone from silicone carriers, not the pharmacokinetic disposition parameters of silicones themselves. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic paper on a PDMS chip using tolbutamide and testosterone as probes, not a pharmacokinetic study of silicones as the subject drug. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study on chronic hepatitis B biomarkers and does not report pharmacokinetic parameters for silicones. |
| popPK | Lorenzini_2017 | irrelevant | 0 | 0 | The study focuses on the analytical recovery and stability of 3-iodothyronamine (T1AM), not the pharmacokinetics of silicones. |
| popPK | Lu_2018 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of acetaminophen and oxycodone, not silicones. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The study focuses on the physical chemistry of silicone oil emulsification (viscosity, interfacial tension) in an in-vitro model, not on the pharmacokinetic disposition parameters of silicones as a drug. |
| popPK | Lucas_1992 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of fluoxetine, not silicones. |
| popPK | McClung_1983 | irrelevant | 0 | 0 | The paper is a review of prosthetic heart valves and does not report pharmacokinetic parameters for silicones. |
| popPK | McElnay_1982 | irrelevant | 0 | 0 | The study focuses on chloroquine and pyrimethamine, and silicones (dimethicone) are only mentioned as a comparator agent that did not affect absorption, with no PK parameters reported for silicones. |
| popPK | Menzel_2023 | irrelevant | 0 | 0 | The paper focuses on the analysis and release of dimethylsilanediol from equipment and its removal via downstream processing, not on pharmacokinetic disposition parameters (CL, V, etc.) in biological systems. |
| popPK | Mohammed_2024 | irrelevant | 0 | 0 | The study investigates the impact of packaging on acyclovir cream performance, where silicones (dimethicone) are only excipients, and no pharmacokinetic parameters for silicones are reported. |
| popPK | Moore_2025 | irrelevant | 0 | 0 | The paper describes a microfluidic device for modeling mucociliary clearance and does not study the pharmacokinetics of silicones. |
| popPK | Nagayasu_1992 | irrelevant | 0 | 0 | The paper describes a hydraulic vascular model using silicone tubes to study hemodynamics, not the pharmacokinetics of silicones as a drug. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The paper studies prostaglandin transport by SLCO2A1 in cells and does not involve silicones or pharmacokinetic parameters. |
| popPK | Nau_1982 | irrelevant | 0 | 0 | The study focuses on cyclophosphamide and its deuterated derivatives, not silicones. |
| popPK | Noonan_1985 | irrelevant | 0 | 0 | The paper studies pulmonary microcirculatory responses to leukotrienes in sheep and does not involve silicones or pharmacokinetic parameters. |
| popPK | ODonnell_1991 | irrelevant | 0 | 0 | The paper studies Ro 24-5913, a leukotriene antagonist, and does not involve silicones or report pharmacokinetic parameters for them. |
| popPK | Omali_2025 | irrelevant | 0 | 0 | The paper describes an LC-MS method for HIV/TB drugs (dolutegravir, rifampicin, etc.) and does not study silicones or report any pharmacokinetic parameters for them. |
| popPK | Owumi_2024 | irrelevant | 0 | 0 | The paper studies a herbal formulation for antimalarial activity and does not report pharmacokinetic parameters for silicones. |
| popPK | Park_2023 | irrelevant | 0 | 0 | The study focuses on the reproductive effects of estradiol benzoate (EB) delivered via silicone capsules, not the pharmacokinetics of silicones themselves. |
| popPK | Patel_2006 | irrelevant | 0 | 0 | The paper describes the discovery of a dopamine D4 agonist (ABT-670) for erectile dysfunction and does not involve silicones as the subject drug. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The paper is a clinical case report regarding fluocinolone acetonide, with silicone oil serving only as a co-existing tamponade agent, and it contains no pharmacokinetic parameters for silicones. |
| popPK | Pavia_1987 | irrelevant | 0 | 0 | The paper discusses mucociliary clearance in asthma and does not report pharmacokinetic parameters for silicones. |
| popPK | Pawlik_1988 | irrelevant | 0 | 0 | The paper studies the physiological effects of leukotrienes C4 and D4 in dogs and does not involve the drug silicones or report any pharmacokinetic parameters. |
| popPK | Pflüger_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for etoposide, not silicones. |
| popPK | Piscitelli_2024 | irrelevant | 0 | 0 | The paper describes a 3D cell culture platform for studying aging and senescence and does not involve the drug silicones or pharmacokinetic parameters. |
| popPK | Qiu_1993 | irrelevant | 0 | 0 | The study focuses on phenylephrine oxazolidines, with silicone fluid serving only as a formulation vehicle rather than the subject drug for PK analysis. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | The paper describes a mechanical microfluidic platform for particle transport and does not involve the drug silicones or pharmacokinetic parameters. |
| popPK | Qu_2022 | irrelevant | 0 | 0 | The paper studies sulfonamide XPO1 inhibitors (specifically compound D4) for multiple myeloma, not silicones. |
| popPK | Radziunas-Salinas_2026 | irrelevant | 0 | 0 | The paper focuses on 3D printing resins for microfluidics and does not involve the drug silicones or pharmacokinetic parameters. |
| popPK | Raval_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of topotecan, not silicones, which is only mentioned as a material (Sylgard 184) used to fabricate the microneedle mold. |
| popPK | Reddy_2008 | relevant | 9 | 0 | The paper describes a PBPK model for a silicone (D5) with quantitative parameters, but the specific numeric values are not present in the provided evidence text. |
| PD | Reddy_2008 | not_relevant | 0 | 0 | The paper focuses exclusively on inhalation pharmacokinetics (PBPK modeling) and dosimetry, reporting no pharmacodynamic effects or exposure-response relationships. |
| popPK | Riazi-Esfahani_2022 | irrelevant | 0 | 0 | The paper is a clinical case report on the surgical treatment of retinal necrosis using silicone oil as a tamponade agent, not a pharmacokinetic study of silicones. |
| popPK | Rodriguez-Alvarez_2022 | irrelevant | 0 | 0 | The paper describes a photothermal nanocomposite coating for catheters and is not a pharmacokinetic study of silicones as a drug. |
| popPK | Roy_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac tromethamine, not silicones; silicones are only mentioned as a component of the adhesive in one device. |
| popPK | Sadler_2023 | irrelevant | 0 | 0 | The paper is a genetic study on von Willebrand disease and does not involve the drug silicones or pharmacokinetic parameters. |
| popPK | Salminen_2018 | irrelevant | 0 | 0 | The paper focuses on membrane technology for hemodialysis and does not report pharmacokinetic parameters for silicones. |
| popPK | Sandor_1986 | irrelevant | 0 | 0 | The study focuses on cerebral blood volume measurement in rats using morphine and naloxone, with silicone mentioned only as a component of the sensor (silicone blue cell), not as the subject drug for pharmacokinetic analysis. |
| popPK | Sarangi_2024 | irrelevant | 0 | 0 | The study focuses on the passive permeability of antidepressants (imipramine/desipramine) through lipid bilayers, not the pharmacokinetics of silicones. |
| popPK | Sasso_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bisphenol A (BPA), not silicones. |
| PD | Schierholz_1996 | not_relevant | 1 | 0 | The text is a qualitative summary of drug delivery concepts and mentions pharmacodynamic aspects generally, but provides no numeric PD parameters, concentration-effect curves, or specific dose-response data. |
| popPK | Schmitt_2023 | relevant | 9 | 0 | The paper is a pharmacokinetic study of D4 (a silicone) in rats, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Schoors_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MK-0476, a leukotriene D4-receptor antagonist, not silicones. |
| popPK | Shaikh_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban, not silicones. |
| popPK | Shou_2022 | irrelevant | 0 | 0 | The paper is a review on lymph node-mimicking biomaterial models and does not report pharmacokinetic parameters for silicones. |
| popPK | Sloniewsky_2004 | irrelevant | 0 | 0 | The paper studies the effect of leukotriene D4 on alveolar fluid clearance and Na,K-ATPase activity, and does not involve silicones or pharmacokinetic parameters. |
| popPK | Spitzer_2009 | irrelevant | 0 | 0 | The study focuses on the release kinetics of triamcinolone acetonide from silicone oil, not the pharmacokinetics of silicones themselves. |
| popPK | Stein_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lindane and alpha-hexachlorocyclohexane, not silicones. |
| popPK | Suliman_2025 | irrelevant | 0 | 0 | The paper is a computational study on pyrazolone derivatives as antifungal agents and does not involve silicones or report any pharmacokinetic parameters for them. |
| popPK | Tang_2018 | irrelevant | 0 | 0 | The paper focuses on the development of a sampling material (PLGA nanofibers) for tetrodotoxin and sulfonamides, not on the pharmacokinetics of silicones. |
| popPK | Taylor_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imipramine, not silicones. |
| popPK | Tonon_2023 | irrelevant | 0 | 0 | The paper describes a photodynamic therapy device using a silicone rubber strip as a delivery mechanism, not a pharmacokinetic study of silicones as a drug. |
| popPK | Trallero_2026 | irrelevant | 0 | 0 | The paper is a review of intravaginal ring technologies where silicones are discussed as a material platform, not as the subject drug for pharmacokinetic analysis. |
| popPK | Veldhuis_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of estradiol and prolactin pulsatility, using a silicone ring only as a delivery device, and does not report pharmacokinetic parameters for silicones. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper focuses on a microfluidic chip system using perfluoropolyether (PFPE) as a material to reduce drug sorption, not on the pharmacokinetics of silicones as a subject drug. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper focuses on the development of an LC-MS/MS method for omadacycline, not silicones, and does not report PK parameters for the target drug. |
| popPK | Wang_2025_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eldecalcitol, not silicones. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a CTA simulation study on C1 pedicle screw placement and vertebral artery clearance, not a pharmacokinetic study of silicones. |
| popPK | Wang_2026_2 | irrelevant | 0 | 0 | The paper describes an analytical method for antiplatelet drugs (aspirin, clopidogrel, ticagrelor) and does not involve silicones or report any pharmacokinetic parameters. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper focuses on the fabrication of microspheres via coacervation and does not report pharmacokinetic parameters for silicones. |
| popPK | Winkler_2016 | irrelevant | 0 | 0 | The paper investigates the stereochemistry and biological activity of Resolvin D4 (a lipid mediator), not the pharmacokinetics of silicones. |
| popPK | Wright_1971 | irrelevant | 0 | 0 | The study evaluates silicone as a joint lubricant and reports qualitative retention times (e.g., &lt;48 hours) rather than quantitative pharmacokinetic parameters like clearance, volume, or rate constants. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper describes a clinical case series on laser removal of scalp micropigmentation and does not report any pharmacokinetic parameters for silicones. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The study focuses on the drug pirfenidone delivered via silicone contact lenses, not the pharmacokinetics of silicones as the subject drug. |
| popPK | Xavier_2023 | irrelevant | 0 | 0 | The paper describes an in vitro microfluidic platform for digestion and permeability using casein and Lucifer Yellow, with no mention of silicones or population pharmacokinetic parameters. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper investigates the immunomodulatory effects of Ganoderma lucidum polysaccharide peptide (GLPP) and does not study silicones or report any pharmacokinetic parameters for them. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study focuses on brimonidine delivery via silicone contact lenses, not the pharmacokinetics of silicones as a drug. |
| popPK | Xu_2022_2 | irrelevant | 0 | 0 | The paper studies the antibiofilm activity of cinnamaldehyde-chitosan nanoparticles, not the pharmacokinetics of silicones. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of erlotinib, not silicones. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The paper describes a silicone-based wound healing patch and its material properties, not the pharmacokinetics of silicones as a drug. |
| popPK | Zhao_2020 | irrelevant | 0 | 0 | The study focuses on the binding of organophosphorus insecticides to human serum albumin, not the pharmacokinetics of silicones. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The study focuses on brimonidine as the subject drug delivered via a silicone rubber implant, and does not report pharmacokinetic parameters for silicones themselves. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and foaming performance of a surfactant system for gas well drainage, not the pharmacokinetics of silicones. |
| popPK | b1p6uller_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-fluorouracil, not silicones. |
| popPK | van_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfasalazine and methotrexate in the context of a drug-drug interaction with GLPG3970, and does not report any parameters for silicones. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
