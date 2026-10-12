<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;triflusal&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triflusal_Park2014_reference&quot;,&quot;label&quot;:&quot;Park_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# triflusal

- **generic name:** triflusal
- **ATC codes:** `B01AC18`
- **DrugBank:** [DB08814](https://go.drugbank.com/drugs/DB08814) · **PubChem:** [CID 9458](https://pubchem.ncbi.nlm.nih.gov/compound/9458)
- **molar mass:** 248.157 g/mol (C10H7F3O4) — DrugBank
- **groups:** approved, withdrawn

## About

Triflusal is an antiplatelet drug that was used to prevent blood clots in conditions such as stroke. It was approved in some countries but has since been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1758668](https://www.wikidata.org/wiki/Q1758668) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triflusal | parent | 248.157 | C10H7F3O4 | DrugBank | [9458](https://pubchem.ncbi.nlm.nih.gov/compound/9458) | Park_2014 |
| HTB | metabolite | 206.119 | C8H5F3O3 | PubChem | [164578](https://pubchem.ncbi.nlm.nih.gov/compound/164578) | Park_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:02 | 5:47 | 0/1/0 | 0/1/0 | 0/0/0 | 100,640/14,113 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308), gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Park_2014_reference](drugs/drug_triflusal/Triflusal_Park2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Park SM et al., Population pharmacokinetic and pharmaco…, BMC pharmacology & toxicolo… (2014) | [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> | [Park_2014_IPA](drugs/drug_triflusal/pd_Park_2014_IPA.md) | inhibition of platelet aggregation ← HTB · direct sigmoid Emax (Hill) effect | model (no simulator) | Park SM et al., Population pharmacokinetic and pharmaco…, BMC pharmacology & toxicolo… (2014) | [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=triflusal).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NFKB1 (target), NOS2 (target), PDE10A (target), PTGS1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Valle_2005.pdf` | Valle M et al., Access of HTB, main metabolite of trifl…, European journal of clinica… (2005) | popPK | 9 | [10.1007/s00228-004-0887-0](https://doi.org/10.1007/s00228-004-0887-0) | [15711832](https://pubmed.ncbi.nlm.nih.gov/15711832) | The study reports a population PK model for triflusal and its metabolite HTB, but specific numeric values for triflusal clearance or volume are not explicitly listed in the provided text, only HTB partition coefficients and rate constants. |
| `Yun_2014.pdf` | Yun HY et al., Semi-mechanistic modelling and simulati…, Basic & clinical pharmacolo… (2014) | popPK | 8 | [10.1111/bcpt.12222](https://doi.org/10.1111/bcpt.12222) | [24612881](https://pubmed.ncbi.nlm.nih.gov/24612881) | The paper describes a semi-mechanistic PK/PD model for triflusal (parent-metabolite, two-compartment) but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-10-05T16:56:50.793730+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Valle_2005 | relevant | 9 | 3 | The study reports a population PK model for triflusal and its metabolite HTB, but specific numeric values for triflusal clearance or volume are not explicitly listed in the provided text, only HTB partition coefficients and rate constants. |
| popPK | Yun_2014 | relevant | 8 | 0 | The paper describes a semi-mechanistic PK/PD model for triflusal (parent-metabolite, two-compartment) but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 16:56 UTC</sub>
