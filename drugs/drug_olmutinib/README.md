<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;olmutinib&quot;}]"></div>

# olmutinib

- **generic name:** olmutinib
- **ATC codes:** `L01EB06`
- **DrugBank:** [DB13164](https://go.drugbank.com/drugs/DB13164) · **PubChem:** [CID 54758501](https://pubchem.ncbi.nlm.nih.gov/compound/54758501)
- **molar mass:** 486.59 g/mol (C26H26N6O2S) — DrugBank
- **groups:** investigational

## About

Olmutinib is an investigational EGFR tyrosine kinase inhibitor studied as an anticancer drug, mainly for EGFR-mutated non-small cell lung cancer. It remains investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088175](https://www.wikidata.org/wiki/Q27088175) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:23 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 17,461/1,849 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_percentage_inhibition_of_E_histolytica_trophozoites](drugs/drug_olmutinib/pd_Sauvey_2021_percentage_inhibition_of_E_histolytica_trophozoi.md) | percentage inhibition of E. histolytica trophozoites ← Olmutinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=olmutinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: EGFR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noh_2019.pdf` | Noh YS et al., A safety, pharmacokinetic, pharmacogeno…, Basic & clinical pharmacolo… (2019) | popPK | 9 | [10.1111/bcpt.13262](https://doi.org/10.1111/bcpt.13262) | [31125491](https://pubmed.ncbi.nlm.nih.gov/31125491) | Human olmutinib PK and a population model are reported, but numeric model parameter values are not present. |

<sub>queue written 2026-10-07T03:23:19.253099+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Noh_2019 | relevant | 9 | 2 | Human olmutinib PK and a population model are reported, but numeric model parameter values are not present. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | Olmutinib is tested only for in-vitro anti-amoebic activity, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
