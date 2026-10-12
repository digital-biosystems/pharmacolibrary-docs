<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;idelalisib&quot;}]"></div>

# idelalisib

- **generic name:** idelalisib
- **ATC codes:** `L01EM01`, `L01XX47`
- **DrugBank:** [DB09054](https://go.drugbank.com/drugs/DB09054) · **PubChem:** [CID 11625818](https://pubchem.ncbi.nlm.nih.gov/compound/11625818)
- **molar mass:** 415.432 g/mol (C22H18FN7O) — DrugBank
- **groups:** approved, investigational

## About

Idelalisib is an anticancer medicine used to treat certain B-cell blood cancers, including chronic lymphocytic leukemia and several types of lymphoma. It is authorised in the European Union for non-Hodgkin lymphoma and chronic lymphocytic leukemia, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5908266](https://www.wikidata.org/wiki/Q5908266) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:32 | 0:51 | 0/0/0 | 1/0/0 | 0/0/0 | 51,377/3,892 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span> | [McLeod_2019_CD63](drugs/drug_idelalisib/pd_McLeod_2019_CD63.md) | CD63 activation ← Idelalisib · inhibition effect | — | McLeod RL et al., Characterizing Pharmacokinetic-Pharmaco…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252551](https://doi.org/10.1124/jpet.118.252551) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2016.pdf` | Jin F et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-015-2891-8](https://doi.org/10.1007/s00280-015-2891-8) | [26645408](https://pubmed.ncbi.nlm.nih.gov/26645408) | A human population-PK model is reported, but numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T01:31:41.697863+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jin_2016 | relevant | 10 | 1 | A human population-PK model is reported, but numeric parameter values are not present in the provided evidence. |
| popPK | McLeod_2019 | irrelevant | 1 | 0 | Idelalisib is mentioned as a clinical reference and for an in-vitro IC50, but no numeric disposition parameters are provided. |
| popPK | Montillo_2019 | irrelevant | 0 | 0 | This human trial reports quality-of-life outcomes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Ramanathan_2016 | irrelevant | 2 | 1 | This review mentions a population-PK model but provides no numeric disposition parameters. |
| popPK | Zimmerman_2023 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study and reports no idelalisib disposition parameters. |
| popPK | Zimmerman_2023_2 | irrelevant | 0 | 0 | This is an in vitro/ex vivo mechanistic study and reports no quantitative idelalisib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
