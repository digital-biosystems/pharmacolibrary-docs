<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;nitisinone&quot;}]"></div>

# nitisinone

- **generic name:** nitisinone
- **ATC codes:** `A16AX04`
- **DrugBank:** [DB00348](https://go.drugbank.com/drugs/DB00348) · **PubChem:** [CID 115355](https://pubchem.ncbi.nlm.nih.gov/compound/115355)
- **molar mass:** 329.2281 g/mol (C14H10F3NO5) — DrugBank
- **groups:** approved

## About

Nitisinone is a drug used to treat tyrosinemias, including tyrosinemia type III. It is an approved medicine and remains authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3877355](https://www.wikidata.org/wiki/Q3877355) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:37 | 0:45 | 0/0/0 | 0/2/0 | 0/0/0 | 100,615/2,068 | einfracz / qwen3.8-27b | 11 | 5/8 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.50).">human + animal</span> | [Haines_2025_HR](drugs/drug_nitisinone/pd_Haines_2025_HR.md) | mosquito mortality hazard ratio ← nitisinone · direct sigmoid Emax (Hill) effect | — | Haines LR et al., Anopheles mosquito survival and pharmac…, Science translational medic… (2025) | [10.1126/scitranslmed.adr4827](https://doi.org/10.1126/scitranslmed.adr4827) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Ward_2017_tyrosine](drugs/drug_nitisinone/pd_Ward_2017_tyrosine.md) | plasma tyrosine ← nitisinone · indirect response — drug inhibits the production of plasma tyrosine | — | Ward JP et al., Predicting tyrosinaemia: a mathematical…, Mathematical medicine and b… (2017) | [10.1093/imammb/dqw006](https://doi.org/10.1093/imammb/dqw006) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nitisinone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HPD (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 31 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Olsson_2015.pdf` | Olsson B et al., Relationship Between Serum Concentratio…, JIMD reports (2015) | popPK | 8 | [10.1007/8904_2015_412](https://doi.org/10.1007/8904_2015_412) | [25772318](https://pubmed.ncbi.nlm.nih.gov/25772318) | The study reports quantitative steady-state pharmacokinetic parameters, specifically median oral clearance (3.18 mL/h·kg), for nitisinone in humans. |
| `Kučera_2025.pdf` | Kučera M et al., Killing of Anopheles stephensi mosquito…, Insect biochemistry and mol… (2025) | pd | 4 | [10.1016/j.ibmb.2025.104361](https://doi.org/10.1016/j.ibmb.2025.104361) | [40684812](https://www.ncbi.nlm.nih.gov/pubmed/40684812) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T03:37:15.471910+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernardini_2025 | irrelevant | 0 | 0 | The paper focuses on in vitro and in silico studies of novel 4-HPPD inhibitors, with nitisinone mentioned only as a comparator/approved drug, and no quantitative PK parameters for nitisinone are reported. |
| PD | Bernardini_2025 | not_relevant | 0 | 0 | The paper focuses on novel triketone compounds and does not report pharmacodynamic or exposure-response data for nitisinone. |
| PGx | Bozaci_2022 | not_relevant | 1 | 5 | The paper reports a general therapeutic response (urinary HGA decrease) to nitisinone in alkaptonuria patients but does not analyze the association between specific gene variants/genotypes and pharmacokinetic or pharmacodynamic parameters. |
| PGx | Couce_2011 | not_relevant | 0 | 0 | The study does not report any pharmacokinetic or pharmacodynamic effect of gene variants or genotype on nitisinone itself; rather, it assesses the clinical outcome (disease severity) of treating patients with various tyrosinemia genotypes using nitisinone. |
| popPK | Das_2025 | irrelevant | 1 | 0 | This is a clinical consensus guideline for tyrosinaemia type 1 management, not a pharmacokinetic study, and it only cites a half-life value without reporting quantitative disposition parameters like clearance or volume. |
| PD | Das_2025 | not_relevant | 1 | 0 | The paper is a clinical consensus guideline for Tyrosinemia Type 1 management and does not report any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for nitisinone. |
| popPK | Dweikat_2021 | irrelevant | 0 | 0 | The paper is a clinical outcome study of patients with tyrosinemia type 1 treated with nitisinone and does not report any pharmacokinetic parameters or quantitative disposition data. |
| PD | Dweikat_2021 | not_relevant | 1 | 0 | The paper is a retrospective clinical case series reporting qualitative outcomes (improvement in renal function, no HCC) and mean dosage, but it does not provide any numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50, etc.). |
| PGx | Dweikat_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes and general treatment effectiveness of nitisinone in HT1 patients but does not analyze gene-specific effects on nitisinone PK or PD parameters. |
| popPK | Grasso_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic/metabolomic analysis of nitisinone's effect on metabolic pathways, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Grasso_2026 | not_relevant | 3 | 1 | The study compares two dosing regimens and reports qualitative metabolic changes (reduction in homogentisate, rise in tyrosine) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Guffon_2018 | irrelevant | 2 | 3 | The study only reports steady-state Cmin and approximate Cmax concentrations, and explicitly states that "no full PK evaluation was performed," so no clearance, volume, or compartmental parameters are provided. |
| popPK | Hughes_2020 | irrelevant | 0 | 0 | The study investigates dietary interventions to manage nitisinone-induced tyrosinemia and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for nitisinone. |
| PD | Hughes_2020 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for dietary phenylalanine restriction on tyrosine levels, but does not provide a concentration-effect or dose-response analysis for nitisinone itself (no nitisinone exposure vs. effect data or PD parameters). |
| PGx | Huledal_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic drug-drug interactions of nitisinone on CYPs and OATs, not the effect of genetic variants on nitisinone's own pharmacokinetics or pharmacodynamics. |
| PGx | Ibarra-González_2019 | not_relevant | 0 | 0 | The study investigates the mutational spectrum of FAH gene variants in tyrosinemia type 1 patients but does not report any pharmacokinetic or pharmacodynamic parameter changes for nitisinone associated with these genotypes. |
| popPK | Keenan_2015 | irrelevant | 1 | 0 | The paper is a preclinical efficacy study in mice measuring homogentisic acid levels and joint pigmentation, not a pharmacokinetic study of nitisinone; no PK parameters (CL, V, ka) for nitisinone are reported. |
| popPK | Khedr_2020 | irrelevant | 1 | 0 | The study measures the pharmacokinetics of the endogenous amino acid tyrosine (using stable isotope tracers) to assess the metabolic effects of nitisinone, not the pharmacokinetic parameters (CL, V, ka) of nitisinone itself. |
| popPK | Kučera_2025 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Kučera_2025 | not_relevant | 0 | 0 | The paper discusses triketone inhibitors of HPPD in mosquitoes and does not mention nitisinone or report any pharmacodynamic parameters for it. |
| popPK | Laschi_2016 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics and toxicology (LD50, IC50) of nitisinone analogues, not pharmacokinetic disposition parameters. |
| popPK | Norman_2022 | irrelevant | 0 | 0 | The study is a metabolomic analysis of phenylalanine-tyrosine metabolites in alkaptonuria patients and does not report nitisinone pharmacokinetic parameters (CL, V, etc.). |
| PGx | Onojafe_2018 | not_relevant | 0 | 0 | The study evaluates the efficacy of nitisinone in a specific mouse mutation model (OCA3) but does not report how genetic variants in pharmacogenes (e.g., metabolizing enzymes or transporters) alter the pharmacokinetics or pharmacodynamics of nitisinone across a population. |
| PGx | Priestley_2020 | not_relevant | 0 | 0 | The paper describes a case of Tyrosinemia Type I missed by newborn screening and does not report any pharmacogenomic effects on nitisinone pharmacokinetics or pharmacodynamics. |
| popPK | Ranganath_2016 | irrelevant | 0 | 0 | The study is a dose-response pharmacodynamic trial measuring homogentisic acid excretion, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2) for nitisinone. |
| popPK | Sloboda_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting therapeutic outcomes (HGA and tyrosine levels) rather than pharmacokinetic disposition parameters (CL, V, etc.) for nitisinone. |
| PD | Sloboda_2019 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response observation (low dose reduces HGA &gt;90% without raising tyrosine) in 3 patients, but lacks numeric concentration-effect parameters, EC50/Emax values, or a fitted PD model. |
| popPK | Suwannarat_2005 | irrelevant | 0 | 0 | The study reports efficacy (HGA reduction) and safety (tyrosine levels) but does not report pharmacokinetic parameters such as clearance, volume, or half-life for nitisinone. |
| PD | Suwannarat_2005 | not_relevant | 2 | 1 | The paper reports a clinical efficacy study with dose escalation and mean effect changes (HGA reduction, tyrosine increase) but does not provide concentration-effect data, PK/PD modeling, or specific numeric PD parameters like Emax or EC50. |
| popPK | Ward_2017 | irrelevant | 2 | 0 | The paper presents a pharmacodynamic model of enzyme inhibition and tyrosinaemia rather than a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for nitisinone. |
| PGx | Yousaf_2020 | not_relevant | 0 | 0 | This paper investigates the pharmacodynamic efficacy of nitisinone in a zebrafish model to treat SLC24A5 variants (OCA6) rather than reporting a pharmacogenomic effect of a human gene variant on nitisinone's PK/PD parameters. |
| PGx | Zatkova_2020 | not_relevant | 0 | 0 | This review focuses on the disease mechanism of alkaptonuria and the clinical efficacy of nitisinone, but it explicitly states that HGD genotype-phenotype correlations did not show differences in nitisinone-related parameters (PK or PD) such as tyrosinemia or HGA reduction. |
| popPK | Zeybek_2015 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on the treatment outcomes of Hereditary Tyrosinemia Type 1 and does not report any pharmacokinetic parameters for nitisinone. |
| PD | Zeybek_2015 | not_relevant | 0 | 0 | The paper is a retrospective clinical outcome study reporting treatment duration, dosage, and clinical events (HCC, transplant) without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
