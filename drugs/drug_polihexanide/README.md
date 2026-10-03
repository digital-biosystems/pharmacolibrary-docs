<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;polihexanide&quot;}]"></div>

# polihexanide

- **generic name:** polihexanide
- **ATC codes:** `D08AC05`, `S01AX24`
- **DrugBank:** [DB12277](https://go.drugbank.com/drugs/DB12277) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Polihexanide, also known as polyhexamethylene biguanide (PHMB), is a broad-spectrum antimicrobial polymer primarily used for topical antisepsis and wound management. Structurally, it consists of repeating biguanide units linked by hexamethylene hydrocarbon chains, conferring both hydrophilic and hydrophobic properties that enhance its interaction with microbial membranes. [A1351] It is effective against a wide range of Gram-positive and Gram-negative bacteria. [A1351,A273908]

Polihexanide is approved in Europe under the name Akantior for the treatment of _Acanthamoeba_ keratitis, an ocular infection caused by the _Acanthamoeba_ parasite. [L53003] It was initially approved in August of 2024, and is the first and only approved therapy to treat patients with _Acanthamoeba_ keratitis. [L53143]

**Indication.** AKANTIOR (polihexanide eye drops) are indicated in the EU for the treatment of _Acanthamoeba_ keratitis in adults and children from 12 years of age. [L53003]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 21:04 | 13:19 | 0/0/0 | 1/0/0 | 0/0/0 | 86,798/3,609 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/6 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Kamaruzzaman_2017_OD550](drugs/drug_polihexanide/pd_Kamaruzzaman_2017_OD550.md) | biofilm mass ← polyhexamethylene biguanide (PHMB) and enrofloxacin · direct sigmoid Emax (Hill) effect | — | Kamaruzzaman NF et al., Bactericidal and Anti-biofilm Effects o…, Frontiers in microbiology (2017) | [10.3389/fmicb.2017.01518](https://doi.org/10.3389/fmicb.2017.01518) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Kamaruzzaman_2017_cfu_survival](drugs/drug_polihexanide/pd_Kamaruzzaman_2017_cfu_survival.md) | intracellular S. aureus survival ← polyhexamethylene biguanide (PHMB) and enrofloxacin · direct sigmoid Emax (Hill) effect | — | Kamaruzzaman NF et al., Bactericidal and Anti-biofilm Effects o…, Frontiers in microbiology (2017) | [10.3389/fmicb.2017.01518](https://doi.org/10.3389/fmicb.2017.01518) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=polihexanide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Aerobic bacterial DNA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wekerle_2020.pdf` | Wekerle M et al., Anti-Acanthamoeba disinfection: hands,…, International journal of an… (2020) | pd | 5 | [10.1016/j.ijantimicag.2020.106122](https://doi.org/10.1016/j.ijantimicag.2020.106122) | [32739477](https://www.ncbi.nlm.nih.gov/pubmed/32739477) | metadata signals extractable PD data (EC50) |
| `Finger_2013.pdf` | Finger S et al., Antibacterial properties of cyclodextri…, International journal of ph… (2013) | pd | 4 | [10.1016/j.ijpharm.2013.04.080](https://doi.org/10.1016/j.ijpharm.2013.04.080) | [23665083](https://www.ncbi.nlm.nih.gov/pubmed/23665083) | metadata signals extractable PD data (IC50) |
| `Hahn_2020.pdf` | Hahn HJ et al., In Vitro Effect of Pitavastatin and Its…, Pathogens (Basel, Switzerla… (2020) | pd | 4 | [10.3390/pathogens9090681](https://doi.org/10.3390/pathogens9090681) | [32825652](https://www.ncbi.nlm.nih.gov/pubmed/32825652) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T21:03:16.964676+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansorg_2002 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial activity test examining the effect of mucin on polihexanide, not a pharmacokinetic study. |
| popPK | Ansorg_2003 | irrelevant | 0 | 0 | The study is an in-vitro microbiological investigation of antiseptic activity and mucin inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Capper-Parkin_2023 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial and cytotoxicity study of biocides (including PHMB) and does not report any pharmacokinetic parameters for polihexanide. |
| popPK | Chaúque_2026 | irrelevant | 0 | 0 | The paper is a systematic review of anti-amoebic drug repurposing and does not report pharmacokinetic parameters for polihexanide. |
| PD | Chaúque_2026 | not_relevant | 1 | 0 | The paper is a systematic review of drug repurposing candidates and does not report specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for polihexanide. |
| popPK | Choy_2012 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay on corneal cells and does not report any pharmacokinetic parameters for polihexanide. |
| popPK | Christen_2017 | irrelevant | 0 | 0 | The study focuses on cytotoxicity and molecular effects of disinfectants (including PHMB, not polihexanide) in vitro and in zebrafish, with no pharmacokinetic parameters reported. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | The paper is a microbiological study on antibacterial and antibiofilm activity, not a pharmacokinetic study, and does not report any PK parameters for polihexanide. |
| popPK | Creppy_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of epigenetic properties and cytotoxicity, containing no pharmacokinetic parameters. |
| popPK | Finger_2012 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial efficacy assessment (IC50) and does not report pharmacokinetic parameters for polihexanide. |
| popPK | Finger_2013 | irrelevant | 0 | 0 | The study is an in-vitro antibacterial efficacy assessment (IC50) and does not report pharmacokinetic parameters for polihexanide. |
| popPK | Frieling_2006 | irrelevant | 0 | 0 | The study investigates the hemodynamic and vascular effects (hypotension, vasodilation) of polihexanide, not its pharmacokinetic disposition parameters. |
| popPK | Fuhr_2022 | irrelevant | 0 | 0 | The study focuses on terbinafine (the subject drug) and uses polyhexamethylene biguanide (PHMB) only as an excipient, not as the subject drug for PK parameter extraction. |
| popPK | Gentile_2012 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of PHMB for HPV regression and contains no pharmacokinetic data or disposition parameters. |
| popPK | Hahn_2020 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Hahn_2020 | not_relevant | 0 | 0 | The paper studies Pitavastatin and Isavuconazole, not polihexanide. |
| popPK | Jung_2020 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of efficacy and safety for genital warts, containing no pharmacokinetic parameters for polihexanide. |
| popPK | Kamaruzzaman_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study focusing on MICs and bactericidal activity, not a pharmacokinetic study reporting disposition parameters for polihexanide. |
| popPK | Kamaruzzaman_2017_2 | irrelevant | 0 | 0 | The paper is a review discussing intracellular bacterial infections and mentions polyhexamethylene biguanide (a different drug) as an example, but contains no pharmacokinetic data for polihexanide. |
| popPK | Knafl_2017 | irrelevant | 0 | 0 | The study is an in-vitro release kinetics experiment measuring inhibition zones, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for polihexanide. |
| popPK | Koban_2012 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy for genital infections and contains no pharmacokinetic data or disposition parameters for polihexanide. |
| PGx | Landelle_2016 | not_relevant | 0 | 0 | The paper reports a clinical trial on the efficacy of polyhexanide for MRSA decolonization and does not investigate any pharmacogenomic effects on PK or PD parameters. |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | The paper reports in vitro antimicrobial efficacy and cytotoxicity of PHMB, not pharmacogenomic effects on PK or PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the formulation and antifungal efficacy of a nanofungicide containing PHMB, not on the pharmacokinetic disposition parameters of polihexanide. |
| popPK | López-Rojas_2017 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assessment of antimicrobial activity (MIC/MBC) and does not report any pharmacokinetic parameters for polihexanide. |
| popPK | Martínez-Orellana_2020 | irrelevant | 0 | 0 | The study evaluates the antiparasitic efficacy and immunomodulatory effects of PHMB (a different drug) against Leishmania, not the pharmacokinetics of polihexanide. |
| popPK | Müller_2006 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity comparison of antiseptics (including PHMB) and does not report any pharmacokinetic parameters for polihexanide. |
| PD | Müller_2006 | not_relevant | 0 | 0 | The paper investigates povidone-iodine and other antiseptics, but does not report any pharmacodynamic or exposure-response data for polihexanide. |
| popPK | Nolff_2015 | irrelevant | 0 | 0 | The paper is a clinical case report on wound therapy where polihexanide is used as a topical antiseptic, and it contains no pharmacokinetic data or disposition parameters. |
| popPK | Passic_2010 | irrelevant | 0 | 0 | The paper focuses on structure-activity relationships and antiviral activity of polybiguanides, not the pharmacokinetics of polihexanide. |
| PD | Passic_2010 | not_relevant | 3 | 2 | The paper reports structure-activity relationships and single-point IC50/CC50 values for various biguanide analogs, but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (like Emax or slope) for polihexanide (PHMB) specifically. |
| popPK | Radu_2016 | irrelevant | 0 | 0 | The paper is a review on cyclodextrins in medical textiles and does not report pharmacokinetic parameters for polihexanide. |
| PD | Radu_2016 | not_relevant | 0 | 0 | The paper is a review on cyclodextrins in medical textiles and does not report any pharmacodynamic or exposure-response data for polihexanide. |
| popPK | Riordan_2009 | irrelevant | 0 | 0 | The paper discusses polyhexamethylene biguanide (PHMB) as a ligand for impurity clearance in bioprocessing, not polihexanide pharmacokinetics. |
| popPK | Riordan_2009_2 | irrelevant | 0 | 0 | The paper discusses membrane adsorbers for viral clearance in bioprocessing and does not involve polihexanide pharmacokinetics. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not mention polihexanide or report any pharmacokinetic parameters for it. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not mention polihexanide or report any pharmacodynamic or exposure-response data. |
| popPK | Wekerle_2020 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Wekerle_2020 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding the pharmacodynamics or exposure-response of polihexanide. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not contain pharmacokinetic data for polihexanide. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for polihexanide. |
| popPK | Wiegand_2012 | irrelevant | 0 | 0 | The study is an in-vitro microbiological analysis of bacterial adaptation to antiseptics and does not report any pharmacokinetic parameters for polihexanide. |
| PD | Wiegand_2012 | not_relevant | 3 | 2 | The paper reports IC50 values for polihexanide to assess bacterial adaptation over time, but it does not provide a full dose-response curve, Emax, or other comprehensive PD parameters required for a pharmacodynamic model. |
| popPK | Yamamoto_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and skin irritation assessment, not a pharmacokinetic study, and polihexanide (PHMB) is only a comparator agent. |
| popPK | Young_2009 | irrelevant | 0 | 0 | The paper is a clinical evaluation of contact lens preservatives (PHMB) and does not report any pharmacokinetic parameters for polihexanide. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | The study investigates the antimicrobial and anti-biofilm efficacy of PHMB in vitro, not its pharmacokinetic disposition parameters. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on wound healing and bacterial clearance, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for polihexanide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
