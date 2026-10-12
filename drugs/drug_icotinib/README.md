<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;icotinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Icotinib_Hu2015_reference&quot;,&quot;label&quot;:&quot;Hu_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_icotinib/Icotinib_Hu2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# icotinib

- **generic name:** icotinib
- **ATC codes:** `L01EB08`
- **DrugBank:** [DB11737](https://go.drugbank.com/drugs/DB11737) · **PubChem:** [CID 22024915](https://pubchem.ncbi.nlm.nih.gov/compound/22024915)
- **molar mass:** 391.427 g/mol (C22H21N3O4) — DrugBank
- **groups:** investigational

## About

Icotinib is an EGFR tyrosine kinase inhibitor investigated for treating non-small-cell lung cancer. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q16868421](https://www.wikidata.org/wiki/Q16868421) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| icotinib | parent | 391.427 | C22H21N3O4 | DrugBank | [22024915](https://pubchem.ncbi.nlm.nih.gov/compound/22024915) | Hu_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:31 | 0:33 | 1/0/0 | 0/0/0 | 0/0/0 | 23,020/2,700 | openai / gpt-6-luna | 4 | 0/0 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span> | [Hu_2015_reference](drugs/drug_icotinib/Icotinib_Hu2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Hu P et al., Development of population pharmacokinet…, European journal of clinica… (2015) | [10.1007/s00228-015-1864-5](https://doi.org/10.1007/s00228-015-1864-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=icotinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hu_2015.pdf` | Hu P et al., Development of population pharmacokinet…, European journal of clinica… (2015) | popPK | 10 | [10.1007/s00228-015-1864-5](https://doi.org/10.1007/s00228-015-1864-5) | [25995169](https://pubmed.ncbi.nlm.nih.gov/25995169) | The paper reports numeric population-PK parameters for icotinib in the provided evidence. |
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 9 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | PopPK models were constructed for icotinib, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T01:30:45.461793+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Yong_2025 | relevant | 9 | 0 | PopPK models were constructed for icotinib, but no numeric parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:30 UTC</sub>
