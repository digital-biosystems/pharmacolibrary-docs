<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tisotumab vedotin&quot;}]"></div>

# tisotumab vedotin

- **generic name:** tisotumab vedotin
- **ATC codes:** `L01FX23`
- **DrugBank:** [DB16732](https://go.drugbank.com/drugs/DB16732) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tisotumab vedotin is an antibody-drug conjugate used to treat cervical cancer. It is authorised in the European Union and also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q108670929](https://www.wikidata.org/wiki/Q108670929) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| monomethyl auristatin E | metabolite | 1250 | — | the paper | — | Gibiansky_2022 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.05917 | L/h | 1.42 L/day | patients with locally advanced and/or metastatic solid tumors | &gt;=399 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gibiansky_2022_reference](drugs/drug_tisotumab_vedotin/TisotumabVedotin_Gibiansky2022_reference.md) |
| V | V1 | 3.1 | L | 3.10 L | patients with locally advanced and/or metastatic solid tumors | &gt;=399 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gibiansky_2022_reference](drugs/drug_tisotumab_vedotin/TisotumabVedotin_Gibiansky2022_reference.md) |
| t½ | t1/2z | 100.6 | h | 4.19 day | patients with locally advanced and/or metastatic solid tumors | &gt;=399 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gibiansky_2022_reference](drugs/drug_tisotumab_vedotin/TisotumabVedotin_Gibiansky2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66 — no SI value to build from</sub> | [Gibiansky_2022_reference](drugs/drug_tisotumab_vedotin/TisotumabVedotin_Gibiansky2022_reference.md) | — | parent + metabolite (no model) | 14 | Gibiansky L et al., Population pharmacokinetic analysis for…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12850](https://doi.org/10.1002/psp4.12850) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tisotumab_vedotin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: F3 (binder), F3 (transporter).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:18 | 2:58 | 1/0/0 | 0/0/0 | 0/0/0 | 59,927/6,874 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Passey_2023 | irrelevant | 2 | 0 | The paper reports exposure-response (safety/efficacy) relationships using PK parameters but does not report the quantitative population PK model parameters (CL, V, Q, etc.) for tisotumab vedotin, which are referenced as being in a separate report (Ref 25) or supplementary material not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:16 UTC</sub>
