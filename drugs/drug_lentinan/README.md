<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;lentinan&quot;}]"></div>

# lentinan

- **generic name:** lentinan
- **ATC codes:** `L03AX01`
- **DrugBank:** [DB13480](https://go.drugbank.com/drugs/DB13480) · **PubChem:** not captured
- **groups:** investigational

## About

Lentinan is a polysaccharide immunostimulant that has been investigated as an immunologic adjuvant and antineoplastic agent for cancer treatment. It remains investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419019](https://www.wikidata.org/wiki/Q419019) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 23:19 | 4:26 | 0/0/0 | 0/0/0 | 0/0/0 | 73,818/1,104 | einfracz / qwen3.8-27b | 13 | 2/0 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2018.pdf` | Zhang Y et al., A sensitive and rapid radiolabelling me…, Food & function (2018) | popPK | 8 | [10.1039/c8fo00272j](https://doi.org/10.1039/c8fo00272j) | [29876541](https://pubmed.ncbi.nlm.nih.gov/29876541) | The paper is a PK study of lentinan in mice and rats using a radiolabelled derivative, but specific quantitative parameters (CL, V, t1/2) are not listed in the abstract or provided evidence. |

<sub>queue written 2026-10-06T23:19:32.907404+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Fan_2023 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the safety and efficacy of lentinan nasal drops in treating COVID-19; it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lin_2019 | not_relevant | 0 | 0 | The study investigates lentinan's effect on CYP enzyme activities (drug-drug interaction) using probe drugs in rats, but does not report any pharmacogenomic effect (gene variant/genotype/phenotype) on the PK/PD of lentinan. |
| popPK | Zhang_2018 | relevant | 8 | 2 | The paper is a PK study of lentinan in mice and rats using a radiolabelled derivative, but specific quantitative parameters (CL, V, t1/2) are not listed in the abstract or provided evidence. |
| PGx | Zheng_2021 | not_relevant | 0 | 0 | The paper studies the metabolic degradation of lentinan in rats, reporting CYP involvement, but it does not assess any gene variant or genotype effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
