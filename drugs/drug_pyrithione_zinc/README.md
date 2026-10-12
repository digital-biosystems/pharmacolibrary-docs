<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;pyrithione zinc&quot;}]"></div>

# pyrithione zinc

- **generic name:** pyrithione zinc
- **ATC codes:** `D11AX12`
- **DrugBank:** [DB06815](https://go.drugbank.com/drugs/DB06815) · **PubChem:** [CID 26041](https://pubchem.ncbi.nlm.nih.gov/compound/26041)
- **molar mass:** 127.16 g/mol (C5H5NOS) — DrugBank
- **groups:** approved

## About

Zinc pyrithione is an antifungal agent used in skin preparations, notably against dandruff and seborrhoeic dermatitis. It is an approved dermatological ingredient, widely used in over-the-counter products such as anti-dandruff shampoos.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27116892](https://www.wikidata.org/wiki/Q27116892) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:51 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 7,714/272 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diamond_2017.pdf` | Diamond GL et al., A physiologically based pharmacokinetic…, Journal of toxicology and e… (2017) | popPK | 9 | [10.1080/15287394.2016.1245123](https://doi.org/10.1080/15287394.2016.1245123) | [28085645](https://pubmed.ncbi.nlm.nih.gov/28085645) | The paper describes a relevant rat PBPK model for zinc pyrithione, but the specific numeric parameter values are not included in the provided evidence text. |
| `Jung_2017.pdf` | Jung SM et al., Acute toxicity of organic antifouling b…, Marine pollution bulletin (2017) | pd | 4 | [10.1016/j.marpolbul.2016.11.047](https://doi.org/10.1016/j.marpolbul.2016.11.047) | [27919420](https://www.ncbi.nlm.nih.gov/pubmed/27919420) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T07:51:46.191777+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Diamond_2017 | relevant | 9 | 0 | The paper describes a relevant rat PBPK model for zinc pyrithione, but the specific numeric parameter values are not included in the provided evidence text. |
| popPK | Jung_2017 | irrelevant | 0 | 0 | The paper reports toxicity endpoints (EC50/LC50) for environmental organisms, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Okamura_2002 | irrelevant | 0 | 0 | The study is an in vitro toxicity evaluation measuring EC50 values for antifouling compounds, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
