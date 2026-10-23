<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;pidotimod&quot;}]"></div>

# pidotimod

- **generic name:** pidotimod
- **ATC codes:** `L03AX05`
- **DrugBank:** [DB11364](https://go.drugbank.com/drugs/DB11364) · **PubChem:** [CID 65944](https://pubchem.ncbi.nlm.nih.gov/compound/65944)
- **molar mass:** 244.27 g/mol (C9H12N2O4S) — DrugBank
- **groups:** investigational

## About

Pidotimod is an immunostimulant drug investigated as an immune-boosting agent, acting as an immunologic adjuvant. It is not approved by the European Medicines Agency and remains investigational rather than in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3902720](https://www.wikidata.org/wiki/Q3902720) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">mouse</span> | [Wu_2020_Tumor_volume](drugs/drug_pidotimod/pd_Wu_2020_Tumor_volume.md) | Tumor volume ← Pidotimod · disease-progression model | — | Wu T et al., Pidotimod enhanced the anti-growth effe…, Biochemical and biophysical… (2020) | [10.1016/j.bbrc.2020.05.117](https://doi.org/10.1016/j.bbrc.2020.05.117) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:03 | 2:22 | 0/0/0 | 1/0/0 | 0/0/0 | 59,028/853 | einfracz / qwen3.8-27b | 7 | 0/1 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2016.pdf` | Huang J et al., Advantage of population pharmacokinetic…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202548](https://doi.org/10.5414/CP202548) | [27390049](https://pubmed.ncbi.nlm.nih.gov/27390049) | The study models pidotimod's pharmacokinetics in humans, but specific parameter values (CL, V, etc.) are not provided in the text. |

<sub>queue written 2026-10-06T23:03:14.066134+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2016 | relevant | 10 | 0 | The study models pidotimod's pharmacokinetics in humans, but specific parameter values (CL, V, etc.) are not provided in the text. |
| PGx | Ucciferri_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy (HPV clearance) of pidotimod but does not assess pharmacogenomic variants or their effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
