<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;asunaprevir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asunaprevir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asunaprevir_Zhu2018_reference&quot;,&quot;label&quot;:&quot;Zhu_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# asunaprevir

- **generic name:** asunaprevir
- **ATC codes:** `J05AP06`, `J05AP58`
- **DrugBank:** [DB11586](https://go.drugbank.com/drugs/DB11586) · **PubChem:** [CID 16076883](https://pubchem.ncbi.nlm.nih.gov/compound/16076883)
- **molar mass:** 748.286 g/mol (C35H46ClN5O9S) — DrugBank
- **groups:** approved, withdrawn

## About

Asunaprevir is an antiviral protease inhibitor that was used to treat hepatitis C virus infections. It is no longer in use, having been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4811881](https://www.wikidata.org/wiki/Q4811881) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asunaprevir | parent | 748.286 | C35H46ClN5O9S | DrugBank | [16076883](https://pubchem.ncbi.nlm.nih.gov/compound/16076883) | Osawa_2018, Zhu_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:19 | 2:09 | 2/0/0 | 0/0/0 | 0/0/0 | 80,525/14,030 | ollama / glm-5.3-flash | 6 | 0/3 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Osawa_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Osawa M et al., Population Pharmacokinetic Analysis for…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1274](https://doi.org/10.1002/jcph.1274) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhu_2018_reference](drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+2 cov.) | Zhu L et al., Population Pharmacokinetic Analysis of…, Infectious diseases and the… (2018) | [10.1007/s40121-018-0197-y](https://doi.org/10.1007/s40121-018-0197-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Osawa_2019.pdf` | Osawa M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2019) | popPK | 9 | [10.1002/cpdd.649](https://doi.org/10.1002/cpdd.649) | [30629858](https://pubmed.ncbi.nlm.nih.gov/30629858) | Population PK model of asunaprevir (2-compartment, covariates on clearance) in HCV-infected subjects, but no numeric parameter values (CL, V, Q) appear in the evidence. |

<sub>queue written 2026-10-07T15:17:37.497083+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Osawa_2019 | relevant | 9 | 2 | Population PK model of asunaprevir (2-compartment, covariates on clearance) in HCV-infected subjects, but no numeric parameter values (CL, V, Q) appear in the evidence. |
| popPK | Ueno_2018 | irrelevant | 3 | 2 | This is an exposure-response (efficacy) analysis; ASV popPK parameters (CL, V) are only referenced as being from a prior/separate popPK model (Osawa manuscript) and no ASV PK parameter values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:17 UTC</sub>
