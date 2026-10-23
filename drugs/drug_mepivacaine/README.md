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

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 35.64 | L/h | 594 ml/min | patients undergoing lumbar epidural anesthesia | 20 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Lauven_1990_reference](drugs/drug_mepivacaine/Mepivacaine_Lauven1990_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Lauven_1990_reference](drugs/drug_mepivacaine/Mepivacaine_Lauven1990_reference.md) | — | 1-compartment (no model) | 4 | Lauven PM et al., [An infusion model for intraoperative p…, Anasthesie, Intensivtherapi… (1990) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mepivacaine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:11 | 2:56 | 1/0/0 | 0/0/0 | 0/0/0 | 14,706/32,762 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 04:11 UTC</sub>
