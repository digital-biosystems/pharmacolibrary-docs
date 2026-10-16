<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;tositumomab/iodine (131I) tositumomab&quot;}]"></div>

# tositumomab/iodine (131I) tositumomab

- **generic name:** tositumomab/iodine (131I) tositumomab
- **ATC codes:** `V10XA53`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Tositumomab, given with iodine-131 as a radiolabelled monoclonal antibody, was used to treat certain types of non-Hodgkin lymphoma. It is no longer marketed, having been withdrawn because of limited commercial demand.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3995913](https://www.wikidata.org/wiki/Q3995913) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:07 | 0:49 | 0/0/0 | 0/0/0 | 0/0/0 | 27,134/1,530 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zelenetz_2020.pdf` | Zelenetz AD et al., Phase 2 Study of Iodine-131 Tositumomab…, Clinical lymphoma, myeloma… (2020) | popPK | 6 | [10.1016/j.clml.2019.04.010](https://doi.org/10.1016/j.clml.2019.04.010) | [32800518](https://pubmed.ncbi.nlm.nih.gov/32800518) | The study includes a pharmacokinetic endpoint (total body residence time) for tositumomab iodine-131, but specific numeric PK parameter values (like CL, Vd, half-life) are not provided in the text, only the median residence time. |

<sub>queue written 2026-10-14T20:07:51.478695+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beeson_2003 | irrelevant | 3 | 2 | This is a preclinical feasibility study in mice using a novel conditional cleavage system, reporting only relative biodistribution percentages (%ID/g) and fold-changes rather than quantitative pharmacokinetic parameters (CL, V, ka) for standard tositumomab. |
| popPK | Bischof_2003 | irrelevant | 1 | 0 | The paper is a general review of nuclear medicine in NHL that discusses the mechanisms of 131I-tositumomab qualitatively but does not provide specific quantitative population PK parameters or numeric values for the drug. |
| popPK | Chamarthy_2011 | irrelevant | 1 | 0 | This is a review article discussing the role of radioimmunotherapy in lymphoma, with no original quantitative pharmacokinetic parameter values reported for tositumomab_iodine_131i_tositumomab. |
| popPK | Davies_2005 | irrelevant | 0 | 0 | This is a review article that describes the dosimetric protocol but does not report specific quantitative population-pharmacokinetic parameters or numeric values for tositumomab_iodine_131i_tositumomab. |
| popPK | Guleria_2017 | irrelevant | 0 | 0 | The study focuses on 177Lu-Rituximab, not tositumomab_iodine_131i_tositumomab, and reports no quantitative PK parameters for the target drug. |
| popPK | Kaminski_2000 | irrelevant | 1 | 0 | The paper reports clinical response rates and radiation dosimetry rather than quantitative population pharmacokinetic parameters (e.g., clearance, volume of distribution) for tositumomab. |
| popPK | Leonard_2005 | irrelevant | 0 | 0 | The paper is a review discussing anti-CD20 therapies and mentions tositumomab only in the context of its clinical utility, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Lewington_2005 | irrelevant | 0 | 0 | The paper is a clinical review discussing treatment efficacy and side effects, but it does not report quantitative pharmacokinetic disposition parameters such as clearance, volume, or compartmental models. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on a novel mAb nanocomb (PPRT) and does not report specific quantitative PK parameters for tositumomab_iodine_131i_tositumomab. |
| popPK | Ren_2015 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study focusing on cell death pathways (ceramide/lysosome) in Burkitt's lymphoma cells, not a pharmacokinetic study of tositumomab. |
| popPK | Roberson_2011 | irrelevant | 1 | 0 | The paper focuses on radiobiological modeling (absorbed dose and biological effect) rather than pharmacokinetic parameter estimation, and no quantitative PK values are reported in the evidence. |
| popPK | Roberson_2014 | irrelevant | 0 | 0 | The study focuses on biological effect modeling (radiation dose and cold effect parameters) rather than reporting quantitative pharmacokinetic parameters like clearance or volume for tositumomab. |
| popPK | Scheidhauer_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of iodine-131 labelled rituximab, with tositumomab mentioned only as a murine counterpart/comparator without providing its quantitative PK parameters. |
| popPK | Schipper_2012 | irrelevant | 2 | 0 | The paper focuses on tumor absorbed dose estimation using a biexponential model for tumor residence time, rather than reporting systemic population pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Sgouros_2003 | irrelevant | 2 | 0 | The study focuses on 3D dosimetry and dose-response relationships rather than reporting quantitative population pharmacokinetic parameters (e.g., clearance, volume) for tositumomab. |
| popPK | Smith-Jones_2004 | irrelevant | 1 | 0 | The paper is a review focused on (177)Lu-huJ591 and prostate cancer, mentioning tositumomab_iodine_131i_tositumomab only as a background example without providing quantitative PK parameters. |
| popPK | Wahl_2003 | irrelevant | 2 | 0 | The text is a review/overview discussing the clinical importance of dosimetry and mentions variable clearance rates qualitatively, but it does not report specific quantitative PK parameters (numerical CL, V, or half-life values) or a population-PK model. |
| popPK | Wahl_2005 | irrelevant | 1 | 0 | This is a review article that discusses total-body residence time and dosimetry for treatment planning but does not report quantitative compartmental PK parameters (CL, V, Q, ka) for the drug. |
| popPK | Wu_2005 | irrelevant | 0 | 0 | The paper is a general review of immunoconjugates that mentions tositumomab only in passing as an approved drug, without providing specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for it. |
| popPK | Zelenetz_2020 | relevant | 6 | 1 | The study includes a pharmacokinetic endpoint (total body residence time) for tositumomab iodine-131, but specific numeric PK parameter values (like CL, Vd, half-life) are not provided in the text, only the median residence time. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
