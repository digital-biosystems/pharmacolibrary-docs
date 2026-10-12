<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;oxaprozin&quot;}]"></div>

# oxaprozin

- **generic name:** oxaprozin
- **ATC codes:** `M01AE12`
- **DrugBank:** [DB00991](https://go.drugbank.com/drugs/DB00991) · **PubChem:** [CID 4614](https://pubchem.ncbi.nlm.nih.gov/compound/4614)
- **molar mass:** 293.3166 g/mol (C18H15NO3) — DrugBank
- **groups:** approved

## About

Oxaprozin is a non-steroidal anti-inflammatory drug used to treat osteoarthritis, rheumatoid arthritis, and juvenile rheumatoid arthritis. It is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1749609](https://www.wikidata.org/wiki/Q1749609) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxaprozin | parent | 293.317 | C18H15NO3 | DrugBank | [4614](https://pubchem.ncbi.nlm.nih.gov/compound/4614) | Janssen_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:44 | 0:44 | 0/1/0 | 1/0/0 | 0/0/0 | 25,082/938 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Janssen_1980_reference](drugs/drug_oxaprozin/Oxaprozin_Janssen1980_reference.md) | — | 1-compartment (no model) | 0 | Janssen FW et al., Metabolism and kinetics of oxaprozin in…, Clinical pharmacology and t… (1980) | [10.1038/clpt.1980.47](https://doi.org/10.1038/clpt.1980.47) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chiang_1984_C_unbound](drugs/drug_oxaprozin/pd_Chiang_1984_C_unbound.md) | unbound drug concentration in plasma ← oxaprozin · direct linear effect | — | Chiang ST et al., Oxaprozin dose proportionality, Journal of clinical pharmac… (1984) | [10.1002/j.1552-4604.1984.tb02761.x](https://doi.org/10.1002/j.1552-4604.1984.tb02761.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Janssen_1980.pdf` | Janssen FW et al., Metabolism and kinetics of oxaprozin in…, Clinical pharmacology and t… (1980) | popPK | 10 | [10.1038/clpt.1980.47](https://doi.org/10.1038/clpt.1980.47) | [7357792](https://pubmed.ncbi.nlm.nih.gov/7357792) | The abstract explicitly reports numeric values for plasma clearance (Clp), volume of distribution (VD beta), and half-life for oxaprozin in humans. |
| `Karim_1997.pdf` | Karim A et al., Oxaprozin and piroxicam, nonsteroidal a…, Journal of clinical pharmac… (1997) | pgx | 8 | [10.1002/j.1552-4604.1997.tb04302.x](https://doi.org/10.1002/j.1552-4604.1997.tb04302.x) | [9115051](https://www.ncbi.nlm.nih.gov/pubmed/9115051) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T01:44:20.900926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Karim_1997 | not_relevant | 1 | 5 | The study mentions poor metabolizers of debrisoquine (CYP2D6) in the subject cohort, but explicitly reports that their oxaprozin clearance was within +/-20% of the mean (i.e., no significant pharmacogenomic effect was observed); the main findings compare oxaprozin vs. piroxicam and focus on protein-binding/age/sex differences rather than genotype-specific PK changes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:44 UTC</sub>
