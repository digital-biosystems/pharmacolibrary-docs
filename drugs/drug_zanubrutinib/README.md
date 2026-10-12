<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;zanubrutinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zanubrutinib_Ou2021_reference&quot;,&quot;label&quot;:&quot;Ou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# zanubrutinib

- **generic name:** zanubrutinib
- **ATC codes:** `L01EL03`
- **DrugBank:** [DB15035](https://go.drugbank.com/drugs/DB15035) · **PubChem:** not captured
- **molar mass:** 471.561 g/mol (C27H29N5O3) — DrugBank
- **groups:** approved, investigational

## About

Zanubrutinib is a Bruton's tyrosine kinase inhibitor used to treat blood cancers, including mantle cell lymphoma and Waldenstrom macroglobulinemia. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q75192022](https://www.wikidata.org/wiki/Q75192022) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zanubrutinib | parent | 471.561 | C27H29N5O3 | DrugBank | — | Ou_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:58 | 1:50 | 0/0/1 | 0/0/0 | 0/0/0 | 23,792/9,220 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Ou_2021_reference](drugs/drug_zanubrutinib/Zanubrutinib_Ou2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Ou YC et al., Population Pharmacokinetic Analysis of…, Clinical and translational… (2021) | [10.1111/cts.12948](https://doi.org/10.1111/cts.12948) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ou_2021_2.pdf` | Ou YC et al., Rationale for once-daily or twice-daily…, Leukemia & lymphoma (2021) | popPK | 8 | [10.1080/10428194.2021.1929961](https://doi.org/10.1080/10428194.2021.1929961) | [34159878](https://pubmed.ncbi.nlm.nih.gov/34159878) | Human zanubrutinib population-PK analyses are described, but no numeric disposition parameter values are provided. |

<sub>queue written 2026-10-07T08:56:42.646879+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ou_2021_2 | relevant | 8 | 0 | Human zanubrutinib population-PK analyses are described, but no numeric disposition parameter values are provided. |
| popPK | Tam_2021 | irrelevant | 1 | 0 | This is a clinical pharmacology review, and no numeric zanubrutinib disposition parameters are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:56 UTC</sub>
