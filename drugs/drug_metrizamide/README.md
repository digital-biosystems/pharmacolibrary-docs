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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:17 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 12,381/1,362 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
