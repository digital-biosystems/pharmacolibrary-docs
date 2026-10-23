<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;selpercatinib&quot;}]"></div>

# selpercatinib

- **generic name:** selpercatinib
- **ATC codes:** `L01EX22`
- **DrugBank:** [DB15685](https://go.drugbank.com/drugs/DB15685) · **PubChem:** none
- **molar mass:** 525.613 g/mol (C29H31N7O3) — DrugBank
- **groups:** approved, investigational

## About

Selpercatinib is a protein kinase inhibitor used to treat medullary thyroid cancer and non-small-cell lung cancer. It is approved and authorised in the European Union for these cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q96405266](https://www.wikidata.org/wiki/Q96405266) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selpercatinib | parent | 525.613 | C29H31N7O3 | DrugBank | — | Liu_2025 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 5.94 | L/h | 5.94 L/h | adult and pediatric patients with advanced solid tumors | 830 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Liu_2025_reference](drugs/drug_selpercatinib/Selpercatinib_Liu2025_reference.md) |
| F | Fab | 1 |  | 100 % | adult and pediatric patients with advanced solid tumors | 830 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Liu_2025_reference](drugs/drug_selpercatinib/Selpercatinib_Liu2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Liu_2025_reference](drugs/drug_selpercatinib/Selpercatinib_Liu2025_reference.md) | — | 1-compartment (no model) | 2 | Liu D et al., Population Pharmacokinetics Modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70042](https://doi.org/10.1002/psp4.70042) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=selpercatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FLT1 (inhibitor), FLT4 (inhibitor), RET (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:48 | 1:19 | 1/0/0 | 0/0/0 | 0/0/0 | 31,021/6,473 | openai / gpt-6-luna | 5 | 0/1 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselpercatinib%5D&body=Drug%3A%20selpercatinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_selpercatinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 06:47 UTC</sub>
