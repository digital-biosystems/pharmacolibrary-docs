<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;patisiran&quot;}]"></div>

# patisiran

- **generic name:** patisiran
- **ATC codes:** `N07XX12`
- **DrugBank:** [DB14582](https://go.drugbank.com/drugs/DB14582) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Patisiran is a medicine used to treat hereditary amyloidosis, a rare nerve-related condition. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q40441442](https://www.wikidata.org/wiki/Q40441442) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:08 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 28,004/563 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

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

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Goel_2020.pdf` | Goel V et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | popPK | 7 | [10.1089/nat.2019.0841](https://doi.org/10.1089/nat.2019.0841) | [32175804](https://pubmed.ncbi.nlm.nih.gov/32175804) | Population PK-PD model of patisiran (ALN-18328) with PD parameters (Hill, IC50) reported, but PK disposition parameters (CL, V) values appear not given in the evidence, likely in supplementary material. |

<sub>queue written 2026-10-07T05:08:13.563874+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goel_2020 | relevant | 7 | 4 | Population PK-PD model of patisiran (ALN-18328) with PD parameters (Hill, IC50) reported, but PK disposition parameters (CL, V) values appear not given in the evidence, likely in supplementary material. |
| popPK | Jeon_2022 | irrelevant | 3 | 0 | A minireview of siRNA PK/PD modeling with no original numeric patisiran parameters in the evidence. |
| popPK | Zhang_2020 | relevant | 4 | 4 | Reports patisiran (ALN-18328) PK concentration parameters (Cmax, Cp(30min), Cmin, accumulation ratio) in humans, but no CL/V/compartmental disposition parameters; some values (e.g., full Table 2) appear truncated or in supplementary tables. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
