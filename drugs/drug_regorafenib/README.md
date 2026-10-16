<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;}]"></div>

# regorafenib

- **generic name:** regorafenib
- **ATC codes:** `L01EX05`
- **DrugBank:** [DB08896](https://go.drugbank.com/drugs/DB08896) · **PubChem:** [CID 11167602](https://pubchem.ncbi.nlm.nih.gov/compound/11167602)
- **molar mass:** 482.815 g/mol (C21H15ClF4N4O3) — DrugBank
- **groups:** approved, investigational

## About

Regorafenib is a protein kinase inhibitor used to treat colorectal cancer and gastrointestinal stromal tumours. It is authorised in the European Union for colorectal cancer and remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3891664](https://www.wikidata.org/wiki/Q3891664) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| regorafenib | parent | 482.815 | C21H15ClF4N4O3 | DrugBank | [11167602](https://pubchem.ncbi.nlm.nih.gov/compound/11167602) | Casanova_2023, Fu_2019, Keunecke_2020, Schmulenson_2022 |
| 5'-deoxy-5-fluorocytidine | metabolite | — (mass units only) | — | — | — | — |
| 5'-deoxy-5-fluorouridine | metabolite | — (mass units only) | — | — | — | — |
| M-2 | metabolite | — (mass units only) | — | — | — | — |
| M-5 | metabolite | — (mass units only) | — | — | — | — |
| regorafenib-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| regorafenib-N-oxide | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:03 | 11:32 | 0/3/1 | 0/0/0 | 0/0/0 | 198,610/60,419 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.806). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Keunecke_2020_reference](drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference.md) | — | general linear (no model) | 11 (+2 cov.) | Keunecke A et al., Population pharmacokinetics of regorafe…, British journal of clinical… (2020) | [10.1111/bcp.14334](https://doi.org/10.1111/bcp.14334) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Casanova_2023_reference](drugs/drug_regorafenib/Regorafenib_Casanova2023_reference.md) | — | 1-compartment (no model) | 2 | Casanova M et al., Regorafenib plus Vincristine and Irinot…, Clinical cancer research :… (2023) | [10.1158/1078-0432.CCR-23-0257](https://doi.org/10.1158/1078-0432.CCR-23-0257) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Fu_2019_reference](drugs/drug_regorafenib/Regorafenib_Fu2019_reference.md) | — | general linear (no model) | 7 | Fu Q et al., Interaction Between Sex and Organic Ani…, Clinical and translational… (2019) | [10.1111/cts.12630](https://doi.org/10.1111/cts.12630) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schmulenson_2022_reference](drugs/drug_regorafenib/Regorafenib_Schmulenson2022_reference.md) | — | general linear (no model) | 11 | Schmulenson E et al., Population pharmacokinetic analyses of…, British journal of clinical… (2022) | [10.1111/bcp.15461](https://doi.org/10.1111/bcp.15461) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=regorafenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor, `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), BRAF (inhibitor), CSF1R (inhibitor), DDR2 (inhibitor), EPHA2 (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FLT1 (inhibitor), FLT4 (inhibitor), FRK (inhibitor), KDR (inhibitor), KIT (inhibitor), MAPK11 (inhibitor), NTRK1 (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor), RAF1 (inhibitor), RET (inhibitor), TEK (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 8  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geoerger_2021.pdf` | Geoerger B et al., Phase 1 dose-escalation and pharmacokin…, European journal of cancer… (2021) | popPK | 10 | [10.1016/j.ejca.2021.05.023](https://doi.org/10.1016/j.ejca.2021.05.023) | [34157616](https://pubmed.ncbi.nlm.nih.gov/34157616) | The study reports a population PK model for regorafenib, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract evidence, likely residing in figures or supplementary data. |

<sub>queue written 2026-10-14T20:52:25.698376+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Casanova_2023 | relevant | 6 | 1 | The study uses a population PK model for regorafenib and reports aggregate exposure metrics (AUC, half-life) in the text, but specific individual parameter values (CL, V) are not listed in the provided evidence, likely residing in figures or supplementary data not included. |
| popPK | Delahousse_2024 | relevant | 4 | 4 | The paper is a systematic review that cites a population PK parameter (CL/F 4.02 L/h) for regorafenib, but lacks detailed disposition parameters like volume or intercompartmental clearance. |
| popPK | Geoerger_2021 | relevant | 10 | 2 | The study reports a population PK model for regorafenib, but specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract evidence, likely residing in figures or supplementary data. |
| popPK | He_2023 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening assay for chikungunya virus where regorafenib is only listed as a compound in the library, with no pharmacokinetic parameters reported. |
| popPK | Kojima_2021 | irrelevant | 1 | 0 | The study describes in-vitro microsomal metabolism kinetics (Vmax, Km) of regorafenib metabolite formation rather than systemic population pharmacokinetic parameters (CL, V, Q, t1/2) of the parent drug. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | The paper is a patient-reported outcomes (QoL) analysis of the CodeBreaK 300 trial where regorafenib is a comparator, and it contains no pharmacokinetic parameters. |
| popPK | Solms_2017 | irrelevant | 1 | 0 | This is an exposure-response analysis evaluating the correlation between exposure categories and clinical efficacy (OS/TTP), not a pharmacokinetic study reporting quantitative disposition parameters such as clearance, volume of distribution, or rate constants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:52 UTC</sub>
