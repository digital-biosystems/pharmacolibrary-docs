<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;temsirolimus&quot;}]"></div>

# temsirolimus

- **generic name:** temsirolimus
- **ATC codes:** `L01EG01`, `L01XE09`
- **DrugBank:** [DB06287](https://go.drugbank.com/drugs/DB06287) · **PubChem:** [CID 23724530](https://pubchem.ncbi.nlm.nih.gov/compound/23724530)
- **molar mass:** 1030.2871 g/mol (C56H87NO16) — DrugBank
- **groups:** approved, investigational

## About

Temsirolimus is an anticancer medicine used to treat kidney cancer (renal cell carcinoma) and mantle cell lymphoma. It is an authorised medicine in the European Union and is used mainly in oncology, typically in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7699074](https://www.wikidata.org/wiki/Q7699074) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:13 | 0:51 | 0/0/0 | 1/0/0 | 0/0/0 | 26,424/3,354 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cardillo_2013_cell_growth](drugs/drug_temsirolimus/pd_Cardillo_2013_cell_growth.md) | cell growth ← temsirolimus · inhibition effect | — | Cardillo TM et al., Targeting both IGF-1R and mTOR synergis…, BMC cancer (2013) | [10.1186/1471-2407-13-170](https://doi.org/10.1186/1471-2407-13-170) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=temsirolimus).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: MTOR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mizuno_2017.pdf` | Mizuno T et al., Population pharmacokinetics of temsirol…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13181](https://doi.org/10.1111/bcp.13181) | [28000286](https://pubmed.ncbi.nlm.nih.gov/28000286) | A pediatric population-PK model is reported, but no numeric parameter values are provided in the evidence. |
| `Mbatchi_2017.pdf` | Mbatchi LC et al., Association of NR1I2, CYP3A5 and ABCB1…, Cancer chemotherapy and pha… (2017) | popPK | 9 | [10.1007/s00280-017-3379-5](https://doi.org/10.1007/s00280-017-3379-5) | [28676933](https://pubmed.ncbi.nlm.nih.gov/28676933) | The human study examines temsirolimus pharmacokinetics, but numeric disposition parameter values are not present in the evidence provided. |

<sub>queue written 2026-10-07T08:13:24.580740+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardillo_2013 | irrelevant | 0 | 0 | This is an in-vitro growth-inhibition study and reports no temsirolimus pharmacokinetic parameters. |
| popPK | Mbatchi_2017 | relevant | 9 | 2 | The human study examines temsirolimus pharmacokinetics, but numeric disposition parameter values are not present in the evidence provided. |
| popPK | Mizuno_2017 | relevant | 10 | 0 | A pediatric population-PK model is reported, but no numeric parameter values are provided in the evidence. |
| popPK | Niyomdecha_2021 | irrelevant | 0 | 0 | Temsirolimus is only an in-vitro comparator, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
