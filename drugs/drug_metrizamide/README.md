<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;metrizamide&quot;}]"></div>

# metrizamide

- **generic name:** metrizamide
- **ATC codes:** `V08AB01`
- **DrugBank:** [DB01578](https://go.drugbank.com/drugs/DB01578) · **PubChem:** [CID 20056604](https://pubchem.ncbi.nlm.nih.gov/compound/20056604)
- **molar mass:** 789.1 g/mol (C18H22I3N3O8) — DrugBank
- **groups:** experimental

## About

Metrizamide is an iodinated, water-soluble X-ray contrast agent used to make body structures visible during imaging. It is no longer in routine clinical use and is regarded as an experimental agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6824399](https://www.wikidata.org/wiki/Q6824399) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:17 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 12,381/1,362 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Golman_1975.pdf` | Golman K, Absorption of metrizamide from cereb ro…, Journal of pharmaceutical s… (1975) | popPK | 9 | [10.1002/jps.2600640310](https://doi.org/10.1002/jps.2600640310) | [1151624](https://pubmed.ncbi.nlm.nih.gov/1151624) | A human one-compartment PK model is reported, but the mean absorption-rate value is not stated numerically. |
| `Elliott_1999.pdf` | Elliott P et al., Ionic mechanisms underlying excitatory…, Neuroscience (1999) | pd | 4 | [10.1016/s0306-4522(98)00534-x](https://doi.org/10.1016/s0306-4522(98)00534-x) | [10338299](https://www.ncbi.nlm.nih.gov/pubmed/10338299) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T17:17:18.143504+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cortijo_1997 | irrelevant | 0 | 0 | Metrizamide is only used to isolate human eosinophils; no metrizamide disposition parameters are reported. |
| popPK | Elliott_1999 | irrelevant | 0 | 0 | Metrizamide was used only for density-gradient cell isolation; no metrizamide pharmacokinetic parameters are reported. |
| popPK | Golman_1975 | relevant | 9 | 2 | A human one-compartment PK model is reported, but the mean absorption-rate value is not stated numerically. |
| popPK | Turner_1994 | irrelevant | 0 | 0 | Metrizamide was only used to isolate human granulocytes; no metrizamide disposition parameters are reported. |
| popPK | Winkler_1980 | irrelevant | 0 | 0 | This review reports no quantitative metrizamide disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
