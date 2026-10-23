<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;droxidopa&quot;}]"></div>

# droxidopa

- **generic name:** droxidopa
- **ATC codes:** `C01CA27`
- **DrugBank:** [DB06262](https://go.drugbank.com/drugs/DB06262) · **PubChem:** [CID 92974](https://pubchem.ncbi.nlm.nih.gov/compound/92974)
- **molar mass:** 213.189 g/mol (C9H11NO5) — DrugBank
- **groups:** approved, investigational

## About

Droxidopa, a synthetic amino acid that the body converts into norepinephrine, is used to treat Parkinson's disease and multiple system atrophy. It is an approved medicine, though it also remains under investigation for other uses and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907853](https://www.wikidata.org/wiki/Q907853) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [White_2018_QTcI](drugs/drug_droxidopa/pd_White_2018_QTcI.md) | QTcI ← droxidopa · direct linear effect | — | White WB et al., Impact of the Norepinephrine Prodrug Dr…, Clinical pharmacology in dr… (2018) | [10.1002/cpdd.393](https://doi.org/10.1002/cpdd.393) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=droxidopa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), ADRB3 (target), DDC (substrate), PAH (inhibitor), SLC16A10 (inhibitor), SLC6A2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 19:52 | 1:12 | 0/0/0 | 1/0/0 | 0/0/0 | 12,287/1,267 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/9 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 21 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abrahamsen_2005 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR genotype on bone mineral density (BMD) and fracture risk, not on the pharmacokinetics or pharmacodynamics of droxidopa. |
| PGx | Ando_1995 | not_relevant | 0 | 0 | The paper discusses the clinical management of FAP and the use of L-threo-DOPS (droxidopa) for autonomic symptoms, but it does not report any pharmacogenomic effects or genetic variants influencing the drug's PK or PD parameters. |
| popPK | Castillo-Mancilla_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atazanavir, not droxidopa. |
| PD | Castillo-Mancilla_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of atazanavir (PK parameters like CL/F and C24) and does not involve droxidopa or report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Cha_1991 | irrelevant | 0 | 0 | The paper studies the neurotoxic mechanism of 6-hydroxy-DOPA (a different compound) in rat brain and does not report pharmacokinetic parameters for droxidopa. |
| PD | Cha_1991 | not_relevant | 0 | 0 | The paper studies 6-hydroxy-DOPA (TOPA), not droxidopa, and reports in vitro binding data (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Cheshire_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapy for orthostatic hypotension and does not report specific pharmacogenomic effects on droxidopa PK/PD parameters. |
| popPK | Cummings_2022 | irrelevant | 0 | 0 | The paper is a review of basket trial designs in neurodegenerative disorders and contains no pharmacokinetic data or parameters for droxidopa. |
| PD | Cummings_2022 | not_relevant | 0 | 0 | The paper is a review of clinical trial designs (basket trials) for neurodegenerative disorders and does not report any pharmacokinetic or pharmacodynamic data, models, or parameters for droxidopa or any other drug. |
| PGx | Egle_2008 | not_relevant | 0 | 0 | The paper focuses on gene delivery systems for TPMT and thiopurine drugs, not droxidopa. |
| PGx | Kaler_2026 | not_relevant | 0 | 0 | The paper reports the efficacy of droxidopa in patients with ATP7A variants (Menkes/OHS) but does not report how a gene variant affects the PK or PD parameters of droxidopa itself (e.g., it does not compare droxidopa's metabolism or response in ATP7A variants vs. wild-type controls). |
| popPK | Kanodia_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ampreloxetine, not droxidopa (which is only mentioned as a comparator). |
| PD | Kanodia_2021 | not_relevant | 4 | 4 | The paper is about ampreloxetine, not droxidopa, and while it reports a PD simulation using an IC50, it does not contain data for the requested drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper describes a computational model for drug efficacy prediction in traditional Chinese medicine and does not contain any pharmacokinetic data for droxidopa. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper describes a network-based computational model (Meta-DEP) for predicting drug efficacy in Traditional Chinese Medicine and does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for droxidopa. |
| popPK | Sagar_2017 | irrelevant | 0 | 0 | The paper describes a mathematical model of the human complement system and does not involve the drug droxidopa or its pharmacokinetics. |
| PD | Sagar_2017 | not_relevant | 0 | 0 | The paper models the human complement system using ODEs and does not involve the drug droxidopa or report any pharmacodynamic parameters for it. |
| popPK | Sordo_2026 | irrelevant | 0 | 0 | The paper is a scoping review of mathematical models of the complement system and does not contain any pharmacokinetic data for droxidopa. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper studies the antioxidant effects of D. officinale polysaccharides in C. elegans and does not involve the drug droxidopa or its pharmacokinetics. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper studies Dendrobium officinale Polysaccharides (DOPs), not the drug droxidopa. |
| PGx | Vincent_2002 | not_relevant | 0 | 0 | The paper discusses DBH deficiency and orthostatic intolerance but does not report pharmacogenomic effects on the PK or PD of droxidopa. |
| popPK | White_2018 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for droxidopa, but lacks compartmental model parameters (CL, V, Q) and the specific numeric values for t1/2 and tmax are only described qualitatively in the text rather than listed in a table. |
| popPK | Yamamoto_1988 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats involving serotonin antagonists and L-threo-DOPS, with no pharmacokinetic analysis or data for droxidopa. |
| PD | Yamamoto_1988 | not_relevant | 0 | 0 | The paper studies muricide in rats using serotonin antagonists and methamphetamine; it does not mention droxidopa or report any pharmacodynamic parameters for it. |
| popPK | Yin_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of neuroprotection in a Parkinson's disease model and does not report any pharmacokinetic parameters for droxidopa. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a medical education study on peer-assisted learning and contains no pharmacokinetic data for droxidopa. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, analysis, or mention of droxidopa pharmacodynamics. |
| PGx | van_2018 | not_relevant | 0 | 0 | The paper describes a genetic cause of orthostatic hypotension (CYB561 mutations) and does not mention droxidopa or its pharmacokinetics/pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
