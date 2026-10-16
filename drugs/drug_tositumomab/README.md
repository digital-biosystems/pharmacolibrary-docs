<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;tositumomab&quot;}]"></div>

# tositumomab

- **generic name:** tositumomab
- **ATC codes:** `V10XA53`
- **DrugBank:** [DB00081](https://go.drugbank.com/drugs/DB00081) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Tositumomab is a monoclonal antibody radiopharmaceutical that was used to treat non-Hodgkin lymphoma. It was approved but has since been withdrawn from the market and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3995913](https://www.wikidata.org/wiki/Q3995913) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:07 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 34,015/1,597 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tositumomab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FCGR2B (unknown), MS4A1 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anizan_2014 | irrelevant | 0 | 0 | The paper is a study on gamma camera calibration factor stability and repeatability for imaging 131I-tositumomab, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Beeson_2003 | irrelevant | 2 | 1 | The paper describes a radioimmunoconjugate mechanism and biodistribution in mice, not the pharmacokinetic parameters (CL, V, etc.) of the drug tositumomab itself. |
| popPK | Bischof_2003 | irrelevant | 1 | 0 | This is a review discussing radioimmunotherapy principles that mentions tositumomab only in the context of clearance variability and dosimetry requirements, without providing quantitative population PK parameters. |
| popPK | Chamarthy_2011 | irrelevant | 2 | 0 | This is a narrative review that discusses pharmacokinetics generally but does not provide specific quantitative PK parameter values for tositumomab in the extracted evidence. |
| popPK | Davies_2005 | irrelevant | 2 | 0 | The paper is a review of clinical efficacy and safety that mentions pharmacokinetics in the context of dosing but does not report specific quantitative PK parameter values or models. |
| popPK | Davis_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing therapeutic outcomes (response rates, duration) and does not report pharmacokinetic parameters such as clearance or volume. |
| PD | Davis_2004 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (response rates, duration) comparing labeled vs. unlabeled antibody but does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Dewaraja_2010 | irrelevant | 1 | 0 | The study focuses on tumor dosimetry and dose-response correlations rather than reporting systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Guleria_2017 | irrelevant | 0 | 0 | The study focuses on 177Lu-Rituximab, not tositumomab, and provides no quantitative PK parameters for the target drug. |
| popPK | Kaminski_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of radioimmunotherapy reporting response rates and survival, containing no pharmacokinetic parameter values (CL, V, t1/2) for tositumomab. |
| popPK | Leonard_2005 | irrelevant | 0 | 0 | The paper is a general review of anti-CD20 therapies that mentions tositumomab only as an example of a radiolabeled antibody, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Lewington_2005 | irrelevant | 1 | 0 | The text is a review article discussing the clinical development and efficacy of 131I-tositumomab, containing no quantitative pharmacokinetic parameters (CL, V, ka) or model values. |
| popPK | Li_2015 | irrelevant | 2 | 0 | The paper describes a novel nanocomb construct incorporating tositumomab and provides only a qualitative statement about reduced clearance relative to free antibodies, with no quantitative PK parameters for tositumomab itself. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a pharmacodynamic analysis of progression-free survival in lymphoma and does not report pharmacokinetic parameters for tositumomab. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL using summary-level data and does not report any pharmacodynamic or exposure-response relationship for tositumomab. |
| popPK | Mirick_2004 | irrelevant | 0 | 0 | The paper is a review of human anti-globulin antibody responses and does not report quantitative pharmacokinetic parameters for tositumomab. |
| PD | Mirick_2004 | not_relevant | 0 | 0 | The paper is a review of human anti-globulin antibody (HAGA) responses to monoclonal antibodies and does not report any pharmacodynamic or exposure-response data for tositumomab. |
| popPK | Ren_2015 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of cell death pathways in lymphoma cells and does not report pharmacokinetic parameters for tositumomab. |
| popPK | Roberson_2011 | irrelevant | 0 | 0 | The study focuses on dosimetry and biological effect modeling (tumor shrinkage) rather than pharmacokinetic parameters (CL, V) for tositumomab. |
| popPK | Roberson_2014 | irrelevant | 2 | 0 | The study focuses on radiobiological parameters (alpha, lambda) for tumor response rather than standard pharmacokinetic disposition parameters (CL, V, ka) for tositumomab. |
| popPK | Scheidhauer_2002 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics and biodistribution of rituximab (a different anti-CD20 antibody), with tositumomab mentioned only as a comparator for half-life and dosimetry. |
| popPK | Schipper_2012 | irrelevant | 2 | 0 | The study focuses on tumor dosimetry and time-activity correlations rather than systemic pharmacokinetic parameters (CL, Vd) for tositumomab, and no quantitative PK values are provided in the evidence. |
| popPK | Sgouros_2003 | irrelevant | 2 | 0 | The study focuses on dosimetry and tumor response rather than reporting quantitative population-pharmacokinetic parameters (CL, V, etc.) for tositumomab. |
| PD | Sgouros_2003 | not_relevant | 2 | 0 | The paper explicitly states that no significant correlation or dose-response relationship was found between absorbed dose and tumor response, and it does not provide numeric PD parameters like Emax or EC50. |
| popPK | Smith-Jones_2004 | irrelevant | 0 | 0 | This is a review of radioimmunotherapy for prostate cancer that mentions tositumomab only as a successful comparator agent without reporting any quantitative pharmacokinetic parameters. |
| popPK | Srinivasan_2006 | irrelevant | 0 | 0 | The paper is a review of active immunotherapy and does not report quantitative pharmacokinetic parameters for tositumomab. |
| PD | Srinivasan_2006 | not_relevant | 0 | 0 | The text is a general review of active immunotherapy and does not contain any specific pharmacodynamic or exposure-response data for tositumomab. |
| popPK | Wahl_2003 | irrelevant | 2 | 0 | The text is a qualitative review of dosimetry principles in radioimmunotherapy and does not report specific quantitative pharmacokinetic parameter values (such as clearance in L/day, volume, or half-life) for tositumomab. |
| popPK | Wahl_2005 | irrelevant | 2 | 0 | The paper is a clinical review of therapeutic efficacy and toxicity, lacking specific quantitative disposition parameters (CL, V, ka) for the cold antibody. |
| popPK | Wahl_2026 | irrelevant | 0 | 0 | The paper is a review of radiopharmaceutical dosimetry and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tositumomab. |
| PD | Wahl_2026 | not_relevant | 1 | 0 | The text is a review of dosimetry principles and general dose-response concepts in radiotherapy, mentioning tositumomab only as a historical example without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Wu_2005 | irrelevant | 0 | 0 | The paper is a review on immunoconjugates and does not report original quantitative population pharmacokinetic parameters (CL, V, Q) for tositumomab. |
| popPK | Zelenetz_2020 | irrelevant | 3 | 2 | While the abstract states pharmacokinetics was investigated, only the total body residence time (a dosimetric metric) is reported, with no specific compartmental PK parameters (CL, Vd) provided in the evidence. |
| popPK | unknown_2003 | irrelevant | 0 | 0 | The text is a regulatory and commercial review of iodine-131 tositumomab containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | unknown_2003 | not_relevant | 0 | 0 | The text is a regulatory and commercial history of tositumomab, containing no pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
