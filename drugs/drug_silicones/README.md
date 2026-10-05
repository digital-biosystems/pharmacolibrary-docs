<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;silicones&quot;}]"></div>

# silicones

- **generic name:** silicones
- **ATC codes:** `A03AX13`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Silicones are used for functional gastrointestinal disorders. They are classified in the ATC system under drugs for the alimentary tract, indicating ongoing use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q146439](https://www.wikidata.org/wiki/Q146439) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:11 | 10:18 | 0/0/0 | 0/0/0 | 0/0/0 | 360,401/9,482 | ollama / qwen3.8:27b-mtp-q8_0 | 40 | 6/34 | 37/3 | 0 |

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
| `Schmitt_2023.pdf` | Schmitt BG et al., Comparative pharmacokinetic studies of…, Toxicology letters (2023) | popPK | 10 | [10.1016/j.toxlet.2022.10.008](https://doi.org/10.1016/j.toxlet.2022.10.008) | [36332816](https://pubmed.ncbi.nlm.nih.gov/36332816) | The study reports pharmacokinetic parameters for octamethylcyclotetrasiloxane (a silicone) in rats, but the specific numeric values are not present in the provided evidence. |
| `Reddy_2008.pdf` | Reddy MB et al., Inhalation dosimetry modeling with deca…, Toxicological sciences : an… (2008) | popPK | 9 | [10.1093/toxsci/kfn125](https://doi.org/10.1093/toxsci/kfn125) | [18583370](https://pubmed.ncbi.nlm.nih.gov/18583370) | The paper describes a PBPK model for a silicone (D5) in rats and humans, but the specific numeric parameter values are not listed in the provided abstract text. |

<sub>queue written 2026-10-04T13:11:53.154265+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of a leukotriene antagonist in sheep and does not report pharmacokinetic parameters for silicones. |
| popPK | Addicks_1988 | irrelevant | 0 | 0 | The study is an in vitro methodology paper using methyl p-aminobenzoate as a test permeant, not a pharmacokinetic study of silicones. |
| popPK | Ala-Houhala_1987 | irrelevant | 0 | 0 | The study measures renal clearance of dextran and proteins in nephropathy patients and does not involve the drug silicones. |
| popPK | Alkhatib_2026 | irrelevant | 0 | 0 | The study investigates dopamine D4 receptor ligands (triazole analogs), not the drug silicones. |
| popPK | Annelin_1989 | irrelevant | 2 | 1 | The study reports bioconcentration/uptake levels (ppm) in fish rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or compartmental models. |
| popPK | Aquino_2020 | irrelevant | 0 | 0 | The paper is a clinical case report on hemophilia and ocular surgery, with no pharmacokinetic data for silicones. |
| popPK | Asghar_2022 | irrelevant | 0 | 0 | The study focuses on the formulation of ciprofloxacin (CPN) using silicone oil as an excipient, not on the pharmacokinetics of silicones as a drug. |
| popPK | Bein_2018 | irrelevant | 0 | 0 | The paper is a review of microfluidic organ-on-a-chip models for the intestine and does not report pharmacokinetic parameters for silicones. |
| popPK | Benowitz_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nicotine and cotinine, not silicones. |
| popPK | Biollaz_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-648,051 (a leukotriene D4-receptor antagonist), not silicones. |
| popPK | Bisagni_2014 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of a Baeyer-Villiger monooxygenase enzyme, not the pharmacokinetics of silicones. |
| popPK | Bleher_2026 | irrelevant | 0 | 0 | The study evaluates a PET tracer ([18F]fluoroethylresorufin) for amyloid imaging, not the pharmacokinetics of the drug silicones. |
| popPK | Bouhadjari_2016 | irrelevant | 0 | 0 | The study focuses on cisplatin and amifostine in a clinical setting and does not report pharmacokinetic parameters for silicones. |
| popPK | Campaña-Seoane_2014 | irrelevant | 0 | 0 | The study focuses on progesterone delivery using a silicone derivative (cyclomethicone) as an excipient, not on the pharmacokinetics of silicones as the subject drug. |
| popPK | Campaña-Seoane_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin, not silicones, which are only used as a component of the emulsion vehicle. |
| popPK | Carius_2024 | irrelevant | 0 | 0 | The study focuses on the adsorption/absorption of drugs (specifically testosterone) by PDMS (a silicone polymer) in an in vitro model, not the pharmacokinetics of silicones as a drug. |
| popPK | Chang_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of volatile compounds (isoborneol, borneol, etc.) from a traditional Chinese medicine, not the drug silicones. |
| popPK | Chapman_1992 | irrelevant | 0 | 0 | The study measures drug uptake and washout in silicone intraocular lenses (materials), not the pharmacokinetics of silicone drugs in a biological system. |
| popPK | Christensen_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of QMPB (a leukotriene antagonist), not silicones. |
| popPK | Clasky_2022 | irrelevant | 0 | 0 | The study is an in silico computational fluid dynamics model of drug release from intraocular lenses, focusing on dexamethasone, ganciclovir, and dextran, not the pharmacokinetics of silicones as a subject drug. |
| popPK | Claus_2013 | irrelevant | 0 | 0 | The study focuses on augmented renal clearance in ICU patients receiving antimicrobial therapy and does not report pharmacokinetic parameters for silicones. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and antibacterial properties of lignin-based polyurethane biofoams, not the pharmacokinetics of silicones. |
| popPK | Davies_2020 | irrelevant | 0 | 0 | The study is an in vitro/computational model of drug delivery (ibuprofen/dextran) from silicone oil, not a pharmacokinetic study of silicones as a subject drug. |
| popPK | Davydova_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clemastine, not silicones. |
| popPK | Dekant_2016 | irrelevant | 0 | 0 | The paper is a review of toxicology and toxicokinetics (qualitative pathways) without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for silicones. |
| popPK | Del_1998 | irrelevant | 0 | 0 | The study measures neurotransmitter concentrations in rabbit brain tissue following silicone oil injection for hydrocephalus induction, not the pharmacokinetic parameters of silicones. |
| popPK | Delaere_1994 | irrelevant | 0 | 0 | The study is a surgical/morphometric analysis of tracheal autografts using silicone dye as a tracer, not a pharmacokinetic study of silicones as a drug. |
| popPK | Eu_2024 | irrelevant | 0 | 0 | The paper describes a 3D printed silicone surgical simulator for training, not the pharmacokinetics of silicones as a drug. |
| popPK | Ferro_2025 | irrelevant | 0 | 0 | The paper is a review of drug dosing in silicone oil-filled eyes, where silicone oil is the ocular environment/comparator, not the subject drug for PK parameter extraction. |
| popPK | Fisher_2003 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Flores-Villalobos_2018 | irrelevant | 0 | 0 | The study is an in-vitro release study of dexamethasone in silicone oil, not a pharmacokinetic study of silicones as a drug. |
| popPK | Fogli_2014 | irrelevant | 0 | 0 | The paper describes an eye phantom for surgical training and drug diffusion testing, not a pharmacokinetic study of silicones as a subject drug. |
| popPK | Foster_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of peptide leukotrienes (C4, D4, E4), not silicones. |
| popPK | Galbinur_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study comparing visual outcomes of gas vs. silicone oil tamponades for retinal detachment, not a pharmacokinetic study of silicones as a drug. |
| popPK | Ganbo_1995 | irrelevant | 0 | 0 | The paper investigates the effect of leukotrienes on mucociliary clearance in guinea pigs and chinchillas, which is unrelated to the pharmacokinetics of silicones. |
| popPK | Geretti_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of RO7239958 (an antisense oligonucleotide), not silicones. |
| popPK | Golani_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KRM-II-81 and its deuterated analog, not silicones. |
| popPK | Grein-Iankovski_2024 | irrelevant | 0 | 0 | The paper describes the fabrication of silicone cilia for medical devices and their interaction with mucus, containing no pharmacokinetic data for silicones as a drug. |
| popPK | Gross_2015 | irrelevant | 0 | 0 | The paper describes a 3D-printed fluidic device using PDMS coatings for cell lysis, not a pharmacokinetic study of silicones. |
| popPK | Gruber_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine, not silicones. |
| popPK | Gulbins_1991 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of leukotrienes on renal microcirculation in rats and does not report pharmacokinetic parameters for silicones. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The study focuses on the formulation of rapamycin nanoparticles using PDMS (a silicone polymer) as a microfluidic chip material, not on the pharmacokinetics of silicones as a drug. |
| popPK | Güler_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study evaluating retinal displacement after vitrectomy using silicone oil as a tamponade agent, not a pharmacokinetic study of silicones as a drug. |
| popPK | Hammer_2022 | irrelevant | 0 | 0 | The study investigates the physicochemical properties of other drugs (vancomycin, ceftazidime, voriconazole) in silicone oil, not the pharmacokinetics of silicones as a subject drug. |
| popPK | Harrison_2025 | irrelevant | 0 | 0 | The study evaluates the drug rencofilstat in humans and does not involve silicones or report any pharmacokinetic parameters for silicones. |
| popPK | Heinig_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BAY x 7195 (a leukotriene antagonist), not silicones. |
| popPK | Hickey_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isoflurane, not silicones, and is an in-vitro study of oxygenator materials. |
| popPK | Hira_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vancomycin, not silicones; silicones (silicone oil) is only a co-administered agent affecting the drug's disposition. |
| popPK | Hirakata_1992 | irrelevant | 0 | 0 | The study investigates the immunomodulatory and virulence-suppressing effects of erythromycin on Pseudomonas aeruginosa, not the pharmacokinetics of silicones. |
| popPK | Holm_1978 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antibiotics in rabbits and humans, not silicones. |
| popPK | Hu_2015 | irrelevant | 0 | 0 | The paper is a fluid dynamics study of mucus plug rupture using Carbopol gels in a microfluidic channel and does not report pharmacokinetic parameters for silicones. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of brimonidine (a glaucoma drug) delivered via a silicone rubber implant, not the pharmacokinetics of silicones as a drug. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study on the surgical implantation of a foldable capsular vitreous body (FCVB) and does not report pharmacokinetic parameters for silicones. |
| popPK | Imamura_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin and ceftazidime, not for silicones (which is only the ocular fill material). |
| popPK | Jann_1993 | irrelevant | 0 | 0 | The paper is a review of clozapine pharmacokinetics, not silicones. |
| popPK | Jayadev_2026 | irrelevant | 0 | 0 | The paper is a review of silicone oil emulsification complications and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for silicones. |
| popPK | Jhaveri_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carvedilol, not silicones. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BTK inhibitors (ibrutinib, zanubrutinib, etc.) and does not involve silicones. |
| popPK | Johnston_2024 | irrelevant | 0 | 0 | The paper is a clinical review of tracheal replacement methods and does not report pharmacokinetic parameters for silicones. |
| popPK | Jørgensen_2018 | irrelevant | 0 | 0 | The paper describes a lymphedema model in mice using a silicone splint as a surgical tool, not a pharmacokinetic study of silicones as a drug. |
| popPK | Kancharla_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of desvenlafaxine, not silicones. |
| popPK | Kataoka_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of verapamil and its metabolite norverapamil, not silicones. |
| popPK | Keegan_2013 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and bioavailability of vitamin D, not silicones. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the mechanical and rheological properties of a silicone-based drug delivery device and in vitro release kinetics, not the pharmacokinetics of silicones as a drug. |
| popPK | Kim_2025_2 | irrelevant | 0 | 0 | The paper focuses on mRNA-LNP vaccine delivery via microneedles and does not report pharmacokinetic parameters for silicones. |
| PD | Kossovsky_1995 | not_relevant | 1 | 0 | The paper is a review discussing the physicochemical and immunological basis of silicone pathophysiology and does not report specific numeric pharmacodynamic parameters or exposure-response curves. |
| popPK | Kouassi_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levamisole, not silicones. |
| popPK | Kubota_1993 | irrelevant | 0 | 0 | The study focuses on the percutaneous absorption of betamethasone 17-valerate using a silicone adhesive as a vehicle, not the pharmacokinetics of silicones as the subject drug. |
| popPK | Le_2025 | irrelevant | 0 | 0 | The paper investigates bacterial adhesion and biofilm formation on PDMS (silicone) surfaces, not the pharmacokinetics of silicones as a drug. |
| popPK | Lee_1992 | irrelevant | 0 | 0 | The study investigates the effects of erythropoietin on peritoneal transport and immune response in CAPD patients, and does not report pharmacokinetic parameters for silicones. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer [18F]-D4-FCH (choline), not the drug silicones. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyrotinib, not silicones. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ensartinib (an ALK inhibitor), not silicones. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper describes a sepsis treatment device using PDMS microspheres for bacterial removal, not a pharmacokinetic study of silicones as a drug. |
| popPK | Libreros_2023 | irrelevant | 0 | 0 | The paper investigates the immunological role of resolvin D4 in neutrophil deployment and does not report pharmacokinetic parameters for silicones. |
| popPK | Linares-Ramírez_2024 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials evaluating the efficacy of simethicone (a silicone-based defoaming agent) for improving endoscopic visualization, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study investigates the release kinetics of dexamethasone from silicone implants, not the pharmacokinetics of silicones as a drug. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The study is an in vitro method development using PDMS (polydimethylsiloxane) as a material, not a pharmacokinetic study of silicones as a drug. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study on chronic hepatitis B biomarkers and does not report pharmacokinetic parameters for silicones. |
| popPK | Lorenzini_2017 | irrelevant | 0 | 0 | The study focuses on the analytical recovery and stability of 3-iodothyronamine (T1AM), not the pharmacokinetics of silicones. |
| popPK | Lu_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen and oxycodone, not silicones. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The study investigates the physical properties (emulsification, viscosity, interfacial tension) of silicone oil additives in an in-vitro eye-on-a-chip model, not the pharmacokinetic disposition parameters of silicones as a drug. |
| popPK | Lucas_1992 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of fluoxetine, not silicones. |
| popPK | McClung_1983 | irrelevant | 0 | 0 | The paper is a review of prosthetic heart valves and does not report pharmacokinetic parameters for silicones as a drug. |
| popPK | McElnay_1982 | irrelevant | 0 | 0 | The study investigates the absorption of chloroquine and pyrimethamine, not silicones, and is an in-vitro interaction study. |
| popPK | Menzel_2023 | irrelevant | 0 | 0 | The paper focuses on the analysis and release of dimethylsilanediol from manufacturing equipment and its removal via downstream processing, not on pharmacokinetic disposition parameters in biological subjects. |
| popPK | Mohammed_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir (the active ingredient) in an in vitro permeation test, while silicones (dimethicone) are only mentioned as excipients or rheological modifiers, not as the subject drug. |
| popPK | Moore_2025 | irrelevant | 0 | 0 | The paper describes a microfluidic platform for modeling mucociliary clearance and does not report pharmacokinetic parameters for silicones. |
| popPK | Nagayasu_1992 | irrelevant | 0 | 0 | The study uses silicone tubes to construct a hydraulic vascular model for hemodynamic analysis, not to study the pharmacokinetics of silicones as a drug. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The paper studies prostaglandin transport in murine cells and does not involve the drug silicones. |
| popPK | Nau_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclophosphamide and its deuterated derivatives, not silicones. |
| popPK | Noonan_1985 | irrelevant | 0 | 0 | The study investigates the pulmonary microcirculatory effects of leukotrienes in sheep and does not involve the drug silicones or its pharmacokinetics. |
| popPK | ODonnell_1991 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of Ro 24-5913 (a leukotriene antagonist), not the pharmacokinetics of silicones. |
| popPK | Omali_2025 | irrelevant | 0 | 0 | The paper describes an LC-MS method for HIV/TB drugs (dolutegravir, rifampicin, etc.) and does not study silicones. |
| popPK | Owumi_2024 | irrelevant | 0 | 0 | The study investigates the antimalarial activity of a herbal formulation (Agunmu) and does not involve the drug silicones or report any pharmacokinetic parameters. |
| popPK | Park_2023 | irrelevant | 0 | 0 | The study investigates the reproductive effects of estradiol benzoate (EB) delivered via silicone capsules, not the pharmacokinetics of silicones as a drug. |
| popPK | Patel_2006 | irrelevant | 0 | 0 | The paper describes the discovery of a dopamine D4 agonist (ABT-670) for erectile dysfunction and does not involve the drug silicones. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The study is a clinical case report regarding the use of a fluocinolone acetonide implant in an eye with silicone oil, not a pharmacokinetic study of silicones. |
| popPK | Pavia_1987 | irrelevant | 0 | 0 | The paper discusses mucociliary clearance in asthma and does not report pharmacokinetic parameters for silicones. |
| popPK | Pawlik_1988 | irrelevant | 0 | 0 | The study investigates the physiological effects of leukotrienes C4 and D4 in dogs, not the pharmacokinetics of silicones. |
| popPK | Pflüger_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for etoposide, not silicones. |
| popPK | Piscitelli_2024 | irrelevant | 0 | 0 | The paper describes a cell culture platform for studying aging and senescence and does not involve the drug silicones or any pharmacokinetic analysis. |
| popPK | Qiu_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenylephrine oxazolidines, using silicone fluid only as an excipient/vehicle, not as the subject drug. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | The paper describes a mechanical microfluidic platform for simulating mucociliary clearance and does not involve the drug silicones or any pharmacokinetic analysis. |
| popPK | Qu_2022 | irrelevant | 0 | 0 | The paper studies sulfonamide XPO1 inhibitors (specifically compound D4) for multiple myeloma, not the drug silicones. |
| popPK | Radziunas-Salinas_2026 | irrelevant | 0 | 0 | The paper studies 3D printing resins for microfluidics and does not involve the drug silicones or pharmacokinetics. |
| popPK | Raval_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of topotecan, not silicones (polydimethylsiloxane is only the material used to fabricate the device). |
| popPK | Reddy_2008 | relevant | 9 | 2 | The paper describes a PBPK model for a silicone (D5) in rats and humans, but the specific numeric parameter values are not listed in the provided abstract text. |
| PD | Reddy_2008 | not_relevant | 0 | 0 | The paper focuses exclusively on inhalation pharmacokinetics (PBPK modeling) and dosimetry, reporting no pharmacodynamic effects or exposure-response relationships. |
| popPK | Riazi-Esfahani_2022 | irrelevant | 0 | 0 | The paper is a clinical case report on the use of silicone oil as a surgical tamponade agent for retinal necrosis, not a pharmacokinetic study of silicones as a drug. |
| popPK | Rodriguez-Alvarez_2022 | irrelevant | 0 | 0 | The paper describes a photothermal nanocomposite for treating urinary tract infections, not the pharmacokinetics of silicones as a drug. |
| popPK | Roy_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketorolac tromethamine, not silicones. |
| popPK | Sadler_2023 | irrelevant | 0 | 0 | The paper investigates copy-number variants in von Willebrand disease and does not report pharmacokinetic parameters for silicones. |
| popPK | Salminen_2018 | irrelevant | 0 | 0 | The paper describes the hemocompatibility and filtration efficiency of silicon nitride membranes for dialysis, not the pharmacokinetics of the drug silicones. |
| popPK | Sandor_1986 | irrelevant | 0 | 0 | The study measures cerebral blood volume in rats using a photoelectric technique and tests the effects of morphine and naloxone; silicones are only mentioned as a material for the sensor cell, not as the subject drug. |
| popPK | Sarangi_2024 | irrelevant | 0 | 0 | The study investigates the passive permeability of antidepressants (imipramine and desipramine) through lipid bilayers, not the pharmacokinetics of silicones. |
| popPK | Sasso_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bisphenol A (BPA), not silicones. |
| PD | Schierholz_1996 | not_relevant | 1 | 0 | The text is a qualitative summary of drug delivery concepts and mentions pharmacodynamic aspects generally, but provides no numeric PD parameters, concentration-effect curves, or specific dose-response data. |
| popPK | Schmitt_2023 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for octamethylcyclotetrasiloxane (a silicone) in rats, but the specific numeric values are not present in the provided evidence. |
| popPK | Schoors_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MK-0476, a leukotriene D4-receptor antagonist, not silicones. |
| popPK | Shaikh_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rivaroxaban, not silicones. |
| popPK | Shou_2022 | irrelevant | 0 | 0 | The paper is a review on lymph node-mimicking biomaterial models and does not report pharmacokinetic parameters for silicones. |
| popPK | Sloniewsky_2004 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of leukotriene D4 on lung function and is unrelated to the pharmacokinetics of silicones. |
| popPK | Spitzer_2009 | irrelevant | 0 | 0 | The study investigates the release kinetics of triamcinolone acetonide from silicone oil, not the pharmacokinetics of silicones themselves. |
| popPK | Stein_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lindane and alpha-hexachlorocyclohexane, not silicones. |
| popPK | Suliman_2025 | irrelevant | 0 | 0 | The paper is a computational study on pyrazolone derivatives as antifungal agents and does not involve the drug silicones or report any pharmacokinetic parameters for it. |
| popPK | Tang_2018 | irrelevant | 0 | 0 | The paper describes a sampling method for tetrodotoxin and sulfonamides in pufferfish, not the pharmacokinetics of silicones. |
| popPK | Taylor_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imipramine, not silicones. |
| popPK | Tonon_2023 | irrelevant | 0 | 0 | The study focuses on the efficacy of a photodynamic therapy device for periodontitis in rats, not the pharmacokinetics of silicones. |
| popPK | Trallero_2026 | irrelevant | 0 | 0 | The paper is a review of intravaginal ring technologies where silicones are discussed as a delivery material, not as the subject drug for pharmacokinetic analysis. |
| popPK | Veldhuis_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of estradiol on prolactin secretion, using a silicone ring only as a delivery device, not as the subject drug for PK analysis. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on a gut-liver-on-a-chip system using midazolam as a probe drug, not silicones. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper is a bioanalytical method development study for omadacycline, not a pharmacokinetic study of silicones. |
| popPK | Wang_2025_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eldecalcitol, not silicones. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a retrospective CTA simulation study of C1 pedicle screw placement in patients with ponticulus posticus and contains no pharmacokinetic data for silicones. |
| popPK | Wang_2026_2 | irrelevant | 0 | 0 | The paper describes an analytical method for antiplatelet agents (aspirin, clopidogrel, ticagrelor) and does not involve silicones. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper focuses on the fabrication of PLGA/PDMS microspheres via coacervation and does not report pharmacokinetic parameters for silicones. |
| popPK | Winkler_2016 | irrelevant | 0 | 0 | The paper investigates the stereochemistry and biological activity of Resolvin D4 (a lipid mediator), not the pharmacokinetics of silicones. |
| popPK | Wright_1971 | irrelevant | 0 | 0 | The study evaluates silicone as a lubricant and reports qualitative retention times (e.g., "no longer than 48 hours") rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper describes a laser treatment for scalp micropigmentation and does not report pharmacokinetic parameters for silicones. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pirfenidone, not silicones (which is only mentioned as a material component of the contact lens). |
| popPK | Xavier_2023 | irrelevant | 0 | 0 | The paper describes an in vitro microfluidic platform for digestion and permeability using casein and Lucifer Yellow, with no data on silicones. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of Ganoderma lucidum polysaccharide peptide (GLPP) in mice and does not report pharmacokinetic parameters for silicones. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study focuses on brimonidine delivery via silicone contact lenses, not the pharmacokinetics of silicones as a drug. |
| popPK | Xu_2022_2 | irrelevant | 0 | 0 | The paper studies the in vitro antibiofilm activity of cinnamaldehyde-chitosan nanoparticles, not the pharmacokinetics of silicones. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of erlotinib, not silicones. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The paper describes a silicone-based wound healing patch and does not report pharmacokinetic parameters for silicones as a drug. |
| popPK | Zhao_2020 | irrelevant | 0 | 0 | The study investigates the binding of organophosphorus insecticides to human serum albumin, not the pharmacokinetics of silicones. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of brimonidine (a glaucoma drug) delivered via a silicone rubber implant, not the pharmacokinetics of silicones as a drug. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and performance of a chemical foaming agent for oil and gas wells, not the pharmacokinetics of the drug silicones. |
| popPK | b1p6uller_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-fluorouracil, not silicones. |
| popPK | van_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfasalazine and methotrexate, not silicones. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
