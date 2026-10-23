<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;PSMA-1007 (18F)&quot;}]"></div>

# PSMA-1007 (18F)

- **generic name:** PSMA-1007 (18F)
- **ATC codes:** `V09IX17`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This fluorine-labelled radiopharmaceutical is used as an imaging agent to detect tumours, targeting the prostate-specific membrane antigen. It is used in diagnostic nuclear medicine for tumour detection, mainly in specialised centres.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:21 | 2:38 | 0/0/0 | 0/0/0 | 0/0/0 | 36,043/897 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sachpekidis_2020.pdf` | Sachpekidis C et al., 18F-PSMA-1007 multiparametric, dynamic…, European journal of nuclear… (2020) | popPK | 8 | [10.1007/s00259-019-04569-0](https://doi.org/10.1007/s00259-019-04569-0) | [31728588](https://pubmed.ncbi.nlm.nih.gov/31728588) | The study reports quantitative PK parameters (influx, compartmental model) for 18F-PSMA-1007 in humans, but specific numeric values for clearance or volume are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T16:21:30.988623+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardoza-Ochoa_2022 | irrelevant | 0 | 0 | The paper is a diagnostic imaging case report comparing two radiotracers and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for 18F-PSMA-1007. |
| popPK | Dias_2023 | relevant | 8 | 2 | The study reports quantitative pharmacokinetic parameters (Ki, DV, k1-k4) for [18F]PSMA-1007 using compartmental models, but the specific numeric values are primarily presented in figures and supplementary material not included in the evidence. |
| popPK | Geis_2026 | irrelevant | 0 | 0 | The study investigates novel PSMA-617 analogues (PS1-PS11) and does not report pharmacokinetic parameters for the specific drug psma_1007_18f. |
| popPK | Giesel_2017 | irrelevant | 2 | 1 | The study reports radiation dosimetry and biodistribution (SUV, absorbed dose) rather than compartmental pharmacokinetic parameters (CL, V, Q) for psma_1007_18f. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The study focuses on a different drug (18F-Bi-PSMA) and only uses 18F-PSMA-1007 as a comparator without reporting its specific quantitative PK parameters. |
| popPK | Pasini_2022 | irrelevant | 0 | 0 | The paper is a review discussing radiopharmaceuticals for imaging and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for psma_1007_18f. |
| popPK | Sachpekidis_2020 | relevant | 8 | 2 | The study reports quantitative PK parameters (influx, compartmental model) for 18F-PSMA-1007 in humans, but specific numeric values for clearance or volume are not explicitly listed in the provided text. |
| popPK | Sharma_2022 | irrelevant | 2 | 0 | The study reports biodistribution (SUV) and internal dosimetry (mSv/MBq, mGy/MBq) rather than compartmental pharmacokinetic parameters (CL, V, Q, ka). |
| popPK | Tulipan_2022 | irrelevant | 0 | 0 | The study investigates imaging artifacts (tracer layering) in PET/CT and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wurzer_2020 | irrelevant | 2 | 0 | The study focuses on novel radiohybrid ligands with 18F-PSMA-1007 serving only as a comparator in biodistribution studies, and no quantitative PK parameters (CL, V, etc.) for PSMA-1007 are reported in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
