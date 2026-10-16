<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;zavegepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zavegepant_Shahin2025_reference&quot;,&quot;label&quot;:&quot;Shahin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zavegepant

- **generic name:** zavegepant
- **ATC codes:** `N02CD08`
- **DrugBank:** [DB15688](https://go.drugbank.com/drugs/DB15688) · **PubChem:** not captured
- **molar mass:** 638.817 g/mol (C36H46N8O3) — DrugBank
- **groups:** approved, investigational

## About

Zavegepant is a CGRP antagonist used as an antimigraine medicine for the acute treatment of migraine attacks. It is an approved active ingredient, though it is not authorised in the European Union and appears to be used mainly in the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99388898](https://www.wikidata.org/wiki/Q99388898) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zavegepant | parent | 638.817 | C36H46N8O3 | DrugBank | — | Comisar_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:19 | 1/1/0 | 0/0/0 | 0/0/0 | 35,942/2,763 | einfracz / qwen3.8-27b | 4 | 0/3 | 4/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818), gpt-oss:120b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Shahin_2025_reference](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shahin MH et al., A Pharmacokinetic Study of Zavegepant N…, Clinical and translational… (2025) | [10.1111/cts.70199](https://doi.org/10.1111/cts.70199) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Comisar_2025_reference](drugs/drug_zavegepant/Zavegepant_Comisar2025_reference.md) | — | 3-compartment (no model) | 0 | Comisar CM et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zavegepant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `SLC10A1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` substrate, `SLC47A2` unknown | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bhardwaj_2024 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters (AUC, Cmax) and safety data; it does not report any pharmacodynamic (PD) or exposure-response relationship. |
| PGx | Bhardwaj_2024_2 | not_relevant | 0 | 0 | The study reports pharmacokinetic drug-drug interactions with rifampin and itraconazole, not pharmacogenomic effects based on genetic variants. |
| popPK | Hughes_2024 | irrelevant | 2 | 0 | The study is a cardiac safety assessment focusing on QTc interval and concentration-QTc relationship, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a clinical review comparing triptans and gepants and does not report pharmacogenomic variants or their effects on zavegepant's PK/PD parameters. |
| PGx | Takizawa_2023 | not_relevant | 0 | 0 | The paper is a narrative review regarding drug-drug interactions between gepants and COVID-19 treatments (Paxlovid), not a study on pharmacogenomic variants affecting zavegepant PK/PD. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or brief mention of "Drugs for migraine" without providing any specific data, models, or numeric parameters for zavegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:46 UTC</sub>
