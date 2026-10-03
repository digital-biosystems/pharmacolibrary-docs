<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;tositumomab&quot;}]"></div>

# tositumomab

- **generic name:** tositumomab
- **ATC codes:** `V10XA53`
- **DrugBank:** [DB00081](https://go.drugbank.com/drugs/DB00081) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

**Description.** Murine IgG2a lambda monoclonal antibody against CD20 antigen (2 heavy chains of 451 residues, 2 lambda chains of 220 residues). It is produced in an antibiotic-free culture of mammalian cells. It can be covalently linked to Iodine 131 (a radioactive isotope of iodine).

**Indication.** For treatment of non-Hodgkin's lymphoma (CD20 positive, follicular)

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 20:27 | 2:44 | 0/0/0 | 0/0/0 | 0/0/0 | 11,438/540 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tositumomab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…mination of Iodine-131 occurs by decay and excretion in the urine.…”</sub> | prose |

<sub>Actors without a tissue in the table: FCGR2B (unknown), MS4A1 (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anizan_2014 | irrelevant | 0 | 0 | The paper focuses on gamma camera calibration factors and imaging stability for 131I-tositumomab dosimetry, not on the pharmacokinetic disposition parameters (CL, V, etc.) of the drug itself. |
| popPK | Beeson_2003 | irrelevant | 2 | 0 | The paper describes a novel radioimmunoconjugate mechanism and reports biodistribution data (%ID/g) rather than quantitative pharmacokinetic parameters (CL, V, ka) for tositumomab. |
| popPK | Bischof_2003 | irrelevant | 2 | 0 | The paper is a review of nuclear medicine in NHL that discusses tositumomab's mechanism and dosimetry requirements but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for the drug. |
| popPK | Chamarthy_2011 | irrelevant | 1 | 0 | The paper is a review of radioimmunotherapy that discusses pharmacokinetics generally but does not provide specific quantitative PK parameter values for tositumomab in the provided text. |
| popPK | Davies_2005 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and safety without reporting original quantitative pharmacokinetic parameter values for tositumomab. |
| popPK | Davis_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing therapeutic outcomes (response rates, duration) and does not report pharmacokinetic parameters such as clearance or volume. |
| PD | Davis_2004 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (response rates, duration) comparing labeled vs. unlabeled antibody but does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Dewaraja_2010 | irrelevant | 1 | 0 | The study focuses on tumor dosimetry and dose-response correlations rather than reporting systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Guleria_2017 | irrelevant | 0 | 0 | The study focuses on Rituximab, not tositumomab, and does not report quantitative PK parameters for the target drug. |
| popPK | Kaminski_2000 | irrelevant | 2 | 0 | The paper is a clinical efficacy study of radioimmunotherapy that mentions clearance rates for dosimetry but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for tositumomab. |
| popPK | Leonard_2005 | irrelevant | 0 | 0 | The paper is a review discussing anti-CD20 therapies and does not report original quantitative pharmacokinetic parameters for tositumomab. |
| popPK | Lewington_2005 | irrelevant | 0 | 0 | The paper is a review of the development and clinical efficacy of 131I-tositumomab, reporting response rates and toxicity rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Li_2015 | irrelevant | 2 | 0 | The study focuses on a novel nanocomb construct (PPRT) rather than tositumomab as the subject drug, and no quantitative PK parameters (CL, V, etc.) for tositumomab are provided in the evidence. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of progression-free survival in non-Hodgkin lymphoma and does not report pharmacokinetic parameters for tositumomab. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL using summary-level data and does not report any pharmacodynamic or exposure-response relationship for tositumomab. |
| popPK | Mirick_2004 | irrelevant | 0 | 0 | The paper is a review of human anti-globulin antibody responses and does not report quantitative pharmacokinetic parameters for tositumomab. |
| PD | Mirick_2004 | not_relevant | 0 | 0 | The paper is a review of human anti-globulin antibody (HAGA) responses to monoclonal antibodies and does not report any pharmacodynamic or exposure-response data for tositumomab. |
| popPK | Ren_2015 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on cell death pathways and does not report any pharmacokinetic parameters for tositumomab. |
| popPK | Roberson_2011 | irrelevant | 2 | 0 | The paper focuses on a bio-effect model for radioimmunotherapy dosimetry and tumor response, not on the pharmacokinetic disposition parameters (CL, V, etc.) of tositumomab. |
| popPK | Roberson_2014 | irrelevant | 2 | 0 | The study focuses on biological-effect modeling (radiation dose and cold effect parameters) rather than standard pharmacokinetic disposition parameters (CL, V, t1/2) for tositumomab. |
| popPK | Scheidhauer_2002 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of rituximab, with tositumomab mentioned only as a comparator for half-life without providing specific quantitative PK parameters for it. |
| popPK | Schipper_2012 | irrelevant | 2 | 0 | The study focuses on tumor dosimetry and time-activity curve fitting for I-131 tositumomab rather than systemic pharmacokinetic parameters (CL, V, Q), and no quantitative PK values are provided in the evidence. |
| popPK | Sgouros_2003 | irrelevant | 2 | 0 | The study focuses on dosimetry and tumor response rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for tositumomab. |
| PD | Sgouros_2003 | not_relevant | 2 | 0 | The paper explicitly states that no significant correlation or dose-response relationship was found between absorbed dose and tumor response, and it does not provide numeric PD parameters like Emax or EC50. |
| popPK | Smith-Jones_2004 | irrelevant | 0 | 0 | The paper is a review of radioimmunotherapy for prostate cancer that mentions tositumomab only as a background example, without reporting any quantitative pharmacokinetic parameters for it. |
| popPK | Srinivasan_2006 | irrelevant | 0 | 0 | The paper is a review of active immunotherapy and does not report quantitative pharmacokinetic parameters for tositumomab. |
| PD | Srinivasan_2006 | not_relevant | 0 | 0 | The text is a general review of active immunotherapy and does not contain any specific pharmacodynamic or exposure-response data for tositumomab. |
| popPK | Wahl_2003 | irrelevant | 2 | 0 | The paper is a review discussing the clinical importance of dosimetry and mentions qualitative variability in clearance but provides no quantitative PK parameter values for tositumomab. |
| popPK | Wahl_2005 | irrelevant | 2 | 0 | The paper is a clinical review of radioimmunotherapy outcomes and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for tositumomab. |
| popPK | Wahl_2026 | irrelevant | 0 | 0 | The paper is a review of radiopharmaceutical dosimetry and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tositumomab. |
| PD | Wahl_2026 | not_relevant | 1 | 0 | The text is a review of dosimetry principles and general dose-response concepts in radiotherapy, mentioning tositumomab only as a historical example without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Wu_2005 | irrelevant | 1 | 0 | The paper is a review of immunoconjugates that mentions tositumomab only as an approved agent without reporting original quantitative pharmacokinetic parameters (CL, V, etc.) for it. |
| popPK | Zelenetz_2020 | irrelevant | 2 | 0 | The study reports efficacy and total body residence time (a dosimetric parameter) but does not provide quantitative compartmental PK parameters (CL, V, Q, ka) for tositumomab. |
| popPK | unknown_2003 | irrelevant | 0 | 0 | The text is a regulatory and commercial review of iodine-131 tositumomab containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | unknown_2003 | not_relevant | 0 | 0 | The text is a regulatory and commercial history of tositumomab, containing no pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
