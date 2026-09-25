<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;droxidopa&quot;}]"></div>

# droxidopa

- **generic name:** droxidopa
- **ATC codes:** `C01CA27`
- **DrugBank:** [DB06262](https://go.drugbank.com/drugs/DB06262)
- **groups:** approved, investigational

## About

**Description.** Droxidopa is a precursor of noradrenaline that is used in the treatment of Parkinsonism. It is approved for use in Japan and is currently in trials in the U.S. The racaemic form (dl-threo-3,4-dihydroxyphenylserine) has also been used, and has been investigated in the treatment of orthostatic hypotension. There is a deficit of noradrenaline as well as of dopamine in Parkinson's disease and it has been proposed that this underlies the sudden transient freezing seen usually in advanced disease.

Though L-DOPS has been used in Japan and Southeast Asia already for some time, it is also currently in clinical trials at the phase III point in the United States (U.S.), Canada, Australia, and throughout Europe. Provided L-DOPS successfully completes clinical trials, it could be approved for the treatment of neurogenic orthostatic hypotension (NOH) as early as 2011. Additionally, phase II clinical trials for intradialytic hypotension are also underway. Chelsea Therapeutics obtained orphan drug status (ODS) for L-DOPS in the U.S. for NOH, and that of which associated with Parkinson's disease , pure autonomic failure, and multiple system atrophy, and is the pharmaceutical company developing it in that country.

**Indication.** For treatment of neurogenic orthostatic hypotension (NOH) associated with various disorders including Multiple System Atrophy, Familial Amyloid Polyneuropathy, hemodialysis induced hypotension and Parkinson's Disease. Also investigated for use/treatment in neurologic disorders, nephropathy, blood (blood forming organ disorders, unspecified), and dizzy/fainting spells.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 18:00 | 3:56 | 0/0/0 | 1/0/0 | 0/0/0 | 147,349/2,470 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/8 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kanodia_2021](drugs/drug_droxidopa/pd_Kanodia_2021_norepinephrine_transporter_occupancy.md) | Kanodia J et al., Pharmacokinetics of Ampreloxetine, a No…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00918-7](https://doi.org/10.1007/s40262-020-00918-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=droxidopa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Droxidopa is mainly excreted in the urine, with the main metabolite being 3-O-methyldihydr…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), ADRB3 (target), DDC (substrate), PAH (inhibitor), SLC16A10 (inhibitor), SLC6A2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abrahamsen_2005 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR genotype on bone mineral density (BMD) and fracture risk, not on the pharmacokinetics or pharmacodynamics of droxidopa. |
| PGx | Ando_1995 | not_relevant | 0 | 0 | The paper discusses the clinical management of FAP and the use of L-threo-DOPS (droxidopa) for autonomic symptoms, but it does not report any pharmacogenomic effects or genetic variants influencing the drug's PK or PD parameters. |
| popPK | Castillo-Mancilla_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of atazanavir, not droxidopa. |
| PD | Castillo-Mancilla_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of atazanavir (PK parameters like CL/F and C24) and does not involve droxidopa or report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Cha_1991 | irrelevant | 0 | 0 | The paper studies the neurotoxic mechanism of 6-hydroxy-DOPA (a different compound) in rat brain and does not report pharmacokinetic parameters for droxidopa. |
| PD | Cha_1991 | not_relevant | 0 | 0 | The paper studies 6-hydroxy-DOPA (TOPA), not droxidopa, and reports in vitro binding data (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Cheshire_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapy for orthostatic hypotension and does not report specific pharmacogenomic effects on droxidopa PK/PD parameters. |
| popPK | Cummings_2022 | irrelevant | 0 | 0 | The paper is a review of basket trial designs in neurodegenerative disorders and does not report any quantitative pharmacokinetic parameters for droxidopa. |
| PD | Cummings_2022 | not_relevant | 0 | 0 | The paper is a review of clinical trial designs (basket trials) for neurodegenerative disorders and does not report any pharmacokinetic or pharmacodynamic data, models, or parameters for droxidopa or any other drug. |
| PGx | Egle_2008 | not_relevant | 0 | 0 | The paper focuses on gene delivery systems for TPMT and thiopurine drugs, not droxidopa. |
| PGx | Kaler_2026 | not_relevant | 0 | 0 | The paper reports the efficacy of droxidopa in patients with ATP7A variants (Menkes/OHS) but does not report how a gene variant affects the PK or PD parameters of droxidopa itself (e.g., it does not compare droxidopa's metabolism or response in ATP7A variants vs. wild-type controls). |
| popPK | Kanodia_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ampreloxetine, not droxidopa, which is only mentioned as a comparator drug. |
| PD | Kanodia_2021 | not_relevant | 4 | 4 | The paper is about ampreloxetine, not droxidopa, and while it reports a PD simulation using an IC50, it does not contain data for the requested drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a computational study on network pharmacology for Traditional Chinese Medicine and does not contain any pharmacokinetic data for droxidopa. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper describes a network-based computational model (Meta-DEP) for predicting drug efficacy in Traditional Chinese Medicine and does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for droxidopa. |
| popPK | Sagar_2017 | irrelevant | 0 | 0 | The paper describes a mathematical model of the human complement system (C3a/C5a) and does not study the pharmacokinetics of droxidopa. |
| PD | Sagar_2017 | not_relevant | 0 | 0 | The paper models the human complement system using ODEs and does not involve the drug droxidopa or report any pharmacodynamic parameters for it. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper studies Dendrobium officinale polysaccharides and oxidative stress in C. elegans, and does not involve the drug droxidopa or its pharmacokinetics. |
| PD | Tang_2023 | not_relevant | 0 | 0 | The paper studies Dendrobium officinale Polysaccharides (DOPs), not the drug droxidopa. |
| PGx | Vincent_2002 | not_relevant | 0 | 0 | The paper discusses DBH deficiency and orthostatic intolerance but does not report pharmacogenomic effects on the PK or PD of droxidopa. |
| popPK | White_2018 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for droxidopa, but lacks compartmental model parameters (CL, V, Q) and the specific numeric values for t1/2 and tmax are only described qualitatively in the text rather than listed in a table. |
| popPK | Yamamoto_1988 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats involving serotonin antagonists and L-threo-DOPS, with no pharmacokinetic analysis or data for droxidopa. |
| PD | Yamamoto_1988 | not_relevant | 0 | 0 | The paper studies muricide in rats using serotonin antagonists and methamphetamine; it does not mention droxidopa or report any pharmacodynamic parameters for it. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a medical education study on peer-assisted learning and contains no pharmacokinetic data or mention of droxidopa. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, analysis, or mention of droxidopa pharmacodynamics. |
| PGx | van_2018 | not_relevant | 0 | 0 | The paper describes a genetic cause of orthostatic hypotension (CYB561 mutations) and does not mention droxidopa or its pharmacokinetics/pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
