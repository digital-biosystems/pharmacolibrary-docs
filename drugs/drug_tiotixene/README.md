<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;tiotixene&quot;}]"></div>

# tiotixene

- **generic name:** tiotixene
- **ATC codes:** `N05AF04`
- **DrugBank:** [DB01623](https://go.drugbank.com/drugs/DB01623) · **PubChem:** [CID 941651](https://pubchem.ncbi.nlm.nih.gov/compound/941651)
- **molar mass:** 443.625 g/mol (C23H29N3O2S2) — DrugBank
- **groups:** approved

## About

Tiotixene (thiothixene) is a thioxanthene antipsychotic used to treat schizophrenia and schizophreniform disorder. It is an approved antipsychotic, though it does not appear to have centralised European Union authorisation and is not among the most widely used antipsychotics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2608288](https://www.wikidata.org/wiki/Q2608288) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:44 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 7,382/493 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zeng_1997.pdf` | Zeng XP et al., Muscarinic m4 receptor activation by so…, European journal of pharmac… (1997) | pd | 4 | [10.1016/s0014-2999(96)00956-9](https://doi.org/10.1016/s0014-2999(96)00956-9) | [9085047](https://www.ncbi.nlm.nih.gov/pubmed/9085047) | metadata signals extractable PD data (EC50) |
| `Guthrie_1997.pdf` | Guthrie SK et al., The effect of paroxetine on thiothixene…, Journal of clinical pharmac… (1997) | pgx | 7 | [10.1046/j.1365-2710.1997.95175951.x](https://doi.org/10.1046/j.1365-2710.1997.95175951.x) | [9447478](https://www.ncbi.nlm.nih.gov/pubmed/9447478) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T17:44:36.396476+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1988 | irrelevant | 0 | 0 | Pharmacodynamic (HVA elevation) dose-response study in rats; no PK parameters for thiothixene are reported. |
| PGx | Guthrie_1997 | not_relevant | 0 | 0 | Paper reports a drug-drug interaction (paroxetine on thiothixene PK), not a pharmacogenomic effect of a gene variant on PK/PD parameters. |
| popPK | Schaefer_1984 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for thiothixene; only dose-response locomotor data. |
| popPK | Sheppard_1974 | irrelevant | 0 | 0 | A prescription-practice survey with no pharmacokinetic data; thiothixene only appears in a list of co-prescribed drugs. |
| PGx | Shin_1999 | not_relevant | 2 | 5 | Reports in vitro CYP2D6 inhibition Ki for cis-thiothixene, but no gene variant/genotype effect on PK/PD parameters. |
| PGx | Sun_2012 | not_relevant | 0 | 0 | Network-based database analysis of antipsychotics; no gene variant effect on tiotixene PK/PD parameters reported. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In vitro pharmacology study of muscarinic m4 receptor effects; thiothixene is only a tested compound with no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
