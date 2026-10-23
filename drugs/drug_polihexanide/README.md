<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;polihexanide&quot;}]"></div>

# polihexanide

- **generic name:** polihexanide
- **ATC codes:** `D08AC05`, `S01AX24`
- **DrugBank:** [DB12277](https://go.drugbank.com/drugs/DB12277) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Polihexanide is an antiseptic and disinfectant used to treat skin conditions and, in the European Union, an authorised eye medicine for Acanthamoeba keratitis. It is approved and used mainly as a topical antiseptic and as an ophthalmic antiinfective, with an authorised product available in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408205](https://www.wikidata.org/wiki/Q408205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Frieling_2006_vascular_basic_tension_relaxation_in_aortal_rings_pre_contracted_with_phenylephrine](drugs/drug_polihexanide/pd_Frieling_2006_vascular_basic_tension_relaxation_in_aortal_ri.md) | vascular basic tension / relaxation in aortal rings pre-contracted with phenylephrine ← polihexanide · direct Emax (saturable) effect | — | Frieling H et al., Intraperitoneal instillation of polihex…, International journal of co… (2006) | [10.1007/s00384-005-0012-6](https://doi.org/10.1007/s00384-005-0012-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:39 | 0:56 | 0/0/0 | 0/1/0 | 0/0/0 | 85,316/2,850 | einfracz / qwen3.8-27b | 6 | 1/7 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wekerle_2020.pdf` | Wekerle M et al., Anti-Acanthamoeba disinfection: hands,…, International journal of an… (2020) | pd | 5 | [10.1016/j.ijantimicag.2020.106122](https://doi.org/10.1016/j.ijantimicag.2020.106122) | [32739477](https://www.ncbi.nlm.nih.gov/pubmed/32739477) | metadata signals extractable PD data (EC50) |
| `Finger_2013.pdf` | Finger S et al., Antibacterial properties of cyclodextri…, International journal of ph… (2013) | pd | 4 | [10.1016/j.ijpharm.2013.04.080](https://doi.org/10.1016/j.ijpharm.2013.04.080) | [23665083](https://www.ncbi.nlm.nih.gov/pubmed/23665083) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T22:38:59.196665+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansorg_2002 | irrelevant | 0 | 0 | The study evaluates the in-vitro antimicrobial activity of polihexanide (in Lavasept) against Staphylococcus aureus in the presence of mucin, reporting no pharmacokinetic parameters. |
| popPK | Ansorg_2003 | irrelevant | 0 | 0 | The study investigates the in-vitro inhibition of anti-staphylococcal activity by mucin and reports no pharmacokinetic parameters. |
| popPK | Capper-Parkin_2023 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial and cytotoxicity study of biocides (including PHMB) and does not report any pharmacokinetic parameters for polihexanide. |
| popPK | Chaúque_2026 | irrelevant | 0 | 0 | The paper is a systematic review of anti-amoebic drug repurposing and does not report pharmacokinetic parameters for polihexanide. |
| PD | Chaúque_2026 | not_relevant | 1 | 0 | The paper is a systematic review of drug repurposing candidates and does not report specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for polihexanide. |
| popPK | Choy_2012 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay of contact lens solutions containing polihexanide (polyhexanide), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Christen_2017 | irrelevant | 0 | 0 | The paper studies the toxicity and gene expression effects of disinfectants (including PHMB, not polihexanide) in zebrafish and cells, not the pharmacokinetics of polihexanide. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | The study investigates the antimicrobial and antibiofilm activity of non-antibiotic compounds (including PHMB, not polihexanide) in vitro, and does not report any pharmacokinetic parameters. |
| popPK | Creppy_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of epigenetic properties and cytotoxicity, containing no pharmacokinetic parameters. |
| popPK | Finger_2012 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial efficacy assessment (IC50) and does not report pharmacokinetic parameters for polihexanide. |
| popPK | Finger_2013 | irrelevant | 0 | 0 | The study is an in-vitro antibacterial efficacy assessment (IC50) and does not report pharmacokinetic parameters for polihexanide. |
| popPK | Frieling_2006 | irrelevant | 0 | 0 | The study investigates the hemodynamic and vascular effects of polihexanide (hypotension, vasodilation, EC50) but does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Fuhr_2022 | irrelevant | 0 | 0 | The study investigates terbinafine, not polihexanide (polyhexamethylene biguanide), and reports no systemic exposure. |
| popPK | Gentile_2012 | irrelevant | 0 | 0 | This paper is a clinical trial evaluating the efficacy of a polyhexamethylene biguanide (PHMB) solution for HPV infection regression, not a pharmacokinetic study of polihexanide, and reports no PK parameters. |
| popPK | Hahn_2020 | irrelevant | 0 | 0 | The study is an in vitro investigation of the antimicrobial efficacy of pitavastatin and isavuconazole against Acanthamoeba, and does not report pharmacokinetic parameters for polihexanide. |
| PD | Hahn_2020 | not_relevant | 0 | 0 | The paper studies Pitavastatin and Isavuconazole, not polihexanide. |
| popPK | Jung_2020 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of the efficacy and safety of topical treatments for genital warts, containing no pharmacokinetic data or disposition parameters for polihexanide. |
| popPK | Kamaruzzaman_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study focusing on MICs and bactericidal activity, not a pharmacokinetic study reporting disposition parameters for polihexanide. |
| popPK | Kamaruzzaman_2017_2 | irrelevant | 0 | 0 | The paper is a review discussing challenges in treating intracellular infections and mentions PHMB as a cationic polymer with antibacterial activity, but it does not report pharmacokinetic parameters for polihexanide. |
| popPK | Knafl_2017 | irrelevant | 0 | 0 | The study is an in-vitro release kinetics evaluation of polyhexanide from a platelet-rich fibrin matrix, not a pharmacokinetic study measuring disposition parameters (CL, V, half-life) in a biological system. |
| popPK | Koban_2012 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials evaluating the therapeutic efficacy of polihexanide for genital infections, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Landelle_2016 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of polyhexanide for MRSA decolonization and does not investigate pharmacogenomic effects or genotype-based variations in PK/PD parameters. |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | The study investigates in vitro antimicrobial efficacy and cytotoxicity against Acanthamoeba, containing no information on pharmacogenomic variants or pharmacokinetic/pharmacodynamic parameters for polihexanide (PHMB). |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is a nanotechnology and agricultural pest control paper investigating fungicidal efficacy and safety, not a pharmacokinetic study of polihexanide (identified here as polyhexamethylene biguanide). |
| popPK | López-Rojas_2017 | irrelevant | 0 | 0 | The study assesses in vitro antimicrobial activity (MIC/MBC) of polyhexanide, which is a biocidal agent, not a pharmacokinetic study of a drug. |
| popPK | Martínez-Orellana_2020 | irrelevant | 0 | 0 | The study evaluates the antiparasitic efficacy and immunomodulatory effects of PHMB (a different drug) against Leishmania, not the pharmacokinetics of polihexanide. |
| popPK | Müller_2006 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity comparison of antiseptics (including PHMB) and does not report any pharmacokinetic parameters for polihexanide. |
| PD | Müller_2006 | not_relevant | 0 | 0 | The paper investigates povidone-iodine and other antiseptics, but does not report any pharmacodynamic or exposure-response data for polihexanide. |
| popPK | Nolff_2015 | irrelevant | 0 | 0 | This is a veterinary case report on wound therapy where polihexanide is used as a topical antiseptic, containing no pharmacokinetic data or disposition parameters. |
| popPK | Passic_2010 | irrelevant | 0 | 0 | The paper focuses on structure-activity relationships and antiviral activity of polybiguanides, not the pharmacokinetics of polihexanide. |
| PD | Passic_2010 | not_relevant | 3 | 2 | The paper reports structure-activity relationships and single-point IC50/CC50 values for various biguanide analogs, but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (like Emax or slope) for polihexanide (PHMB) specifically. |
| popPK | Radu_2016 | irrelevant | 0 | 0 | The paper is a review on cyclodextrins in medical textiles and does not report pharmacokinetic parameters for polihexanide. |
| PD | Radu_2016 | not_relevant | 0 | 0 | The paper is a review on cyclodextrins in medical textiles and does not report any pharmacodynamic or exposure-response data for polihexanide. |
| popPK | Riordan_2009 | irrelevant | 0 | 0 | The study examines polihexanide (PHMB) as a ligand for membrane adsorbers in industrial protein purification, not as a drug for pharmacokinetic evaluation in biological systems. |
| popPK | Riordan_2009_2 | irrelevant | 0 | 0 | The paper focuses on viral clearance membrane adsorbers and does not contain pharmacokinetic data for polihexanide (or polyhexamethylene biguanide, a distinct compound). |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review of nanocarriers for phytochemicals in diabetic wound healing and does not mention polihexanide or report its pharmacokinetic parameters. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not mention polihexanide or report any pharmacodynamic or exposure-response data. |
| popPK | Wekerle_2020 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Wekerle_2020 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding the pharmacodynamics or exposure-response of polihexanide. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review of oxidative stress mechanisms in Acanthamoeba keratitis and does not contain any pharmacokinetic data for polihexanide. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for polihexanide. |
| popPK | Wiegand_2012 | irrelevant | 0 | 0 | The study is an in-vitro microbiology analysis of bacterial adaptation to antiseptics and reports IC50 values, not pharmacokinetic parameters for polihexanide. |
| PD | Wiegand_2012 | not_relevant | 3 | 2 | The paper reports IC50 values for polihexanide to assess bacterial adaptation over time, but it does not provide a full dose-response curve, Emax, or other comprehensive PD parameters required for a pharmacodynamic model. |
| popPK | Yamamoto_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and skin irritation assessment, not a pharmacokinetic study, and polihexanide (PHMB) is only a comparator agent. |
| popPK | Young_2009 | irrelevant | 0 | 0 | The paper is a clinical evaluation of ocular comfort and safety in contact lens users and contains no pharmacokinetic data for polihexanide. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | The study investigates the antimicrobial and anti-biofilm efficacy of polihexanide (PHMB) in vitro, reporting no pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of polyhexanide for wound infections and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
