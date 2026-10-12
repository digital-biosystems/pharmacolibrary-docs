<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;mepivacaine&quot;}]"></div>

# mepivacaine

- **generic name:** mepivacaine
- **ATC codes:** `N01BB03`
- **DrugBank:** [DB00961](https://go.drugbank.com/drugs/DB00961) · **PubChem:** [CID 4062](https://pubchem.ncbi.nlm.nih.gov/compound/4062)
- **molar mass:** 246.348 g/mol (C15H22N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Mepivacaine is a local anesthetic of the amide type used to prevent or relieve pain. It is an approved medicine, also approved for veterinary use, and is used fairly widely in dental and other local anesthesia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416760](https://www.wikidata.org/wiki/Q416760) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mepivacaine | parent | 246.348 | C15H22N2O | DrugBank | [4062](https://pubchem.ncbi.nlm.nih.gov/compound/4062) | Lauven_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:11 | 2:56 | 0/0/1 | 0/0/0 | 0/0/0 | 14,706/32,762 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lauven_1990_reference](drugs/drug_mepivacaine/Mepivacaine_Lauven1990_reference.md) | — | 1-compartment (no model) | 4 | Lauven PM et al., [An infusion model for intraoperative p…, Anasthesie, Intensivtherapi… (1990) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lauven_1990.pdf` | Lauven PM et al., [An infusion model for intraoperative p…, Anasthesie, Intensivtherapi… (1990) | popPK | 10 | not captured | [2252168](https://pubmed.ncbi.nlm.nih.gov/2252168) | The paper reports specific quantitative one-compartment PK parameters (Vd, Cl, half-lives) for mepivacaine in humans. |

<sub>queue written 2026-10-07T04:09:05.210032+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bodtger_2023 | irrelevant | 0 | 0 | This is a procedural description of local anesthetic thoracoscopy where mepivacaine is used as a local anesthetic, with no pharmacokinetic data reported. |
| popPK | Boorman_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of tissue biomarkers, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ekström_1996 | not_relevant | 1 | 0 | The paper focuses on the metabolism of ropivacaine by CYP1A and CYP3A, and does not report the effects of gene variants on mepivacaine. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell viability and apoptosis, containing no pharmacokinetic disposition parameters (e.g., clearance, volume, half-life). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:11 UTC</sub>
