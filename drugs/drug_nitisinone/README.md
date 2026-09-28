<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;nitisinone&quot;}]"></div>

# nitisinone

- **generic name:** nitisinone
- **ATC codes:** `A16AX04`
- **DrugBank:** [DB00348](https://go.drugbank.com/drugs/DB00348) · **PubChem:** [CID 115355](https://pubchem.ncbi.nlm.nih.gov/compound/115355)
- **molar mass:** 329.2281 g/mol (C14H10F3NO5) — DrugBank
- **groups:** approved

## About

**Description.** Nitisinone is a synthetic reversible inhibitor of 4-hydroxyphenylpyruvate dioxygenase. It is used in the treatment of hereditary tyrosinemia type 1 and Alkaptonuria. It is sold under the brand names Orfadin and Harliku. [L53253, L53258]

**Indication.** Nitisinone under the brand name ORFADIN is indicated as an adjunct to dietary restriction of tyrosine and phenylalanine in the treatment of hereditary tyrosinemia type 1. [L53253]

Under the name HARLIKU, nitisinone is indicated for the reduction of urine homogentisic acid (HGA) in adult patients with
alkaptonuria (AKU). [L53258]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 15:27 | 30:38 | 0/0/0 | 0/0/0 | 0/0/0 | 117,091/4,363 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 5/4 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nitisinone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Nitisinone is excreted primarily through urine. [L53258]…”</sub> | prose |

<sub>Actors without a tissue in the table: HPD (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 31 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Olsson_2015.pdf` | Olsson B et al., Relationship Between Serum Concentratio…, JIMD reports (2015) | popPK | 9 | [10.1007/8904_2015_412](https://doi.org/10.1007/8904_2015_412) | [25772318](https://pubmed.ncbi.nlm.nih.gov/25772318) | The study reports quantitative steady-state pharmacokinetic parameters for nitisinone, specifically median oral clearance (3.18 mL/h·kg) and its range, directly in the text. |
| `Kučera_2025.pdf` | Kučera M et al., Killing of Anopheles stephensi mosquito…, Insect biochemistry and mol… (2025) | pd | 4 | [10.1016/j.ibmb.2025.104361](https://doi.org/10.1016/j.ibmb.2025.104361) | [40684812](https://www.ncbi.nlm.nih.gov/pubmed/40684812) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-27T15:21:45.104705+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernardini_2025 | irrelevant | 0 | 0 | The paper focuses on in vitro and in silico studies of novel 4-HPPD inhibitors, with nitisinone mentioned only as a comparator/approved drug, and no quantitative PK parameters for nitisinone are reported. |
| PD | Bernardini_2025 | not_relevant | 0 | 0 | The paper focuses on novel triketone compounds and does not report pharmacodynamic or exposure-response data for nitisinone. |
| PGx | Bozaci_2022 | not_relevant | 0 | 0 | The paper reports clinical outcomes and genetic variants in alkaptonuria patients but does not analyze how specific genotypes affect the pharmacokinetics or pharmacodynamics of nitisinone. |
| PGx | Couce_2011 | not_relevant | 0 | 0 | The study reports a genotype-phenotype correlation regarding disease manifestations (nephrocalcinosis/hepatomegaly) but does not report how genetic variants affect the pharmacokinetics or pharmacodynamics of nitisinone. |
| popPK | Das_2025 | irrelevant | 1 | 0 | This is a clinical consensus guideline for tyrosinaemia type 1 management, not a pharmacokinetic study, and it only cites a half-life value without reporting quantitative disposition parameters like clearance or volume. |
| PD | Das_2025 | not_relevant | 1 | 0 | The paper is a clinical consensus guideline for Tyrosinemia Type 1 management and does not report any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for nitisinone. |
| popPK | Dweikat_2021 | irrelevant | 0 | 0 | The paper is a clinical outcome study of patients with tyrosinemia type 1 treated with nitisinone and does not report any pharmacokinetic parameters or quantitative disposition data. |
| PD | Dweikat_2021 | not_relevant | 1 | 0 | The paper is a retrospective clinical case series reporting qualitative outcomes (improvement in renal function, no HCC) and mean dosage, but it does not provide any numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50, etc.). |
| PGx | Dweikat_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes of nitisinone treatment in patients with Tyrosinemia type 1 but does not investigate how genetic variants affect the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Grasso_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic/metabolomic analysis of nitisinone's effect on metabolic pathways, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Grasso_2026 | not_relevant | 3 | 1 | The study compares two dosing regimens and reports qualitative metabolic changes (reduction in homogentisate, rise in tyrosine) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Guffon_2018 | irrelevant | 3 | 2 | The study reports only sparse steady-state concentration metrics (Cmin, Cmax) and a cited half-life, lacking the quantitative compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| popPK | Hughes_2020 | irrelevant | 0 | 0 | The study investigates dietary interventions to manage nitisinone-induced tyrosinemia and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for nitisinone. |
| PD | Hughes_2020 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for dietary phenylalanine restriction on tyrosine levels, but does not provide a concentration-effect or dose-response analysis for nitisinone itself (no nitisinone exposure vs. effect data or PD parameters). |
| PGx | Huledal_2019 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (nitisinone's effect on CYP/OAT substrates) in healthy volunteers and does not report any pharmacogenomic effects (gene variants) on nitisinone's PK/PD. |
| PGx | Ibarra-González_2019 | not_relevant | 0 | 0 | The paper describes the mutational spectrum of FAH in patients with Tyrosinemia type 1 and does not report any pharmacokinetic or pharmacodynamic effects of nitisinone. |
| popPK | Keenan_2015 | irrelevant | 1 | 0 | The study is a mechanistic/efficacy trial in mice measuring homogentisic acid levels and joint pigmentation, not a pharmacokinetic study reporting disposition parameters like clearance or volume for nitisinone. |
| popPK | Khedr_2020 | irrelevant | 2 | 1 | The study focuses on the pharmacodynamics of nitisinone (tyrosine pool size and metabolite concentrations) rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for nitisinone itself. |
| popPK | Kučera_2025 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Kučera_2025 | not_relevant | 0 | 0 | The paper discusses triketone inhibitors of HPPD in mosquitoes and does not mention nitisinone or report any pharmacodynamic parameters for it. |
| popPK | Laschi_2016 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics and toxicology (LD50, IC50) of nitisinone analogues, not pharmacokinetic disposition parameters. |
| popPK | Norman_2022 | irrelevant | 0 | 0 | The study is a metabolomic analysis of phenylalanine-tyrosine biotransformation products in nitisinone-treated patients, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for nitisinone. |
| PGx | Onojafe_2018 | not_relevant | 0 | 0 | The study evaluates the efficacy of nitisinone in a specific mouse model (Tyrp1 mutation) but does not report pharmacogenomic differences in PK/PD parameters based on human or animal genotype variations affecting drug metabolism or response. |
| PGx | Priestley_2020 | not_relevant | 0 | 0 | The paper is a case report on the diagnosis of Tyrosinemia Type 1 and the importance of succinylacetone in newborn screening; it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nitisinone. |
| popPK | Ranganath_2016 | irrelevant | 0 | 0 | The study is a dose-response pharmacodynamic trial measuring homogentisic acid excretion, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2) for nitisinone. |
| popPK | Sloboda_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting therapeutic outcomes (HGA and tyrosine levels) rather than pharmacokinetic disposition parameters (CL, V, etc.) for nitisinone. |
| PD | Sloboda_2019 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response observation (low dose reduces HGA &gt;90% without raising tyrosine) in 3 patients, but lacks numeric concentration-effect parameters, EC50/Emax values, or a fitted PD model. |
| popPK | Suwannarat_2005 | irrelevant | 0 | 0 | The study reports efficacy (HGA reduction) and safety (tyrosine levels) but does not report pharmacokinetic parameters such as clearance, volume, or half-life for nitisinone. |
| PD | Suwannarat_2005 | not_relevant | 2 | 1 | The paper reports a clinical efficacy study with dose escalation and mean effect changes (HGA reduction, tyrosine increase) but does not provide concentration-effect data, PK/PD modeling, or specific numeric PD parameters like Emax or EC50. |
| popPK | Ward_2017 | irrelevant | 2 | 0 | The paper presents a pharmacodynamic model of enzyme inhibition and tyrosinaemia rather than a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for nitisinone. |
| PGx | Yousaf_2020 | not_relevant | 0 | 0 | The paper evaluates the efficacy of nitisinone in a zebrafish model of OCA6 and finds no therapeutic effect, but it does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) modulated by specific human gene variants in a pharmacogenomic context. |
| PGx | Zatkova_2020 | not_relevant | 0 | 0 | The paper is a general review of alkaptonuria and nitisinone treatment, mentioning a genotype-phenotype study regarding disease severity but not reporting any pharmacogenomic effects on nitisinone's PK or PD parameters. |
| popPK | Zeybek_2015 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on the treatment outcomes of Hereditary Tyrosinemia Type 1 and does not report any pharmacokinetic parameters for nitisinone. |
| PD | Zeybek_2015 | not_relevant | 0 | 0 | The paper is a retrospective clinical outcome study reporting treatment duration, dosage, and clinical events (HCC, transplant) without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
