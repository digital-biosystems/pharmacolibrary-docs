<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;riociguat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Riociguat_Saleh2016_reference&quot;,&quot;label&quot;:&quot;Saleh_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_riociguat/Riociguat_Saleh2016_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# riociguat

- **generic name:** riociguat
- **ATC codes:** `C02KX05`
- **DrugBank:** [DB08931](https://go.drugbank.com/drugs/DB08931) · **PubChem:** [CID 11304743](https://pubchem.ncbi.nlm.nih.gov/compound/11304743)
- **molar mass:** 422.4157 g/mol (C20H19FN8O2) — DrugBank
- **groups:** approved, investigational

## About

Riociguat is a drug used to treat pulmonary hypertension and chronic pulmonary heart disease. It is authorised in the European Union for pulmonary hypertension and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2154494](https://www.wikidata.org/wiki/Q2154494) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| riociguat | parent | 422.416 | C20H19FN8O2 | DrugBank | [11304743](https://pubchem.ncbi.nlm.nih.gov/compound/11304743) | Michaličková_2020, Saleh_2016, Saleh_2016_2, Willmann_2023 |
| M1 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:31 | 13:37 | 1/0/3 | 0/0/0 | 0/0/0 | 181,583/46,214 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385), gpt-oss:120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Saleh_2016_reference](drugs/drug_riociguat/Riociguat_Saleh2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Saleh S et al., Population pharmacokinetics and the pha…, Pulmonary circulation 6(Sup… (2016) | [10.1086/685404](https://doi.org/10.1086/685404) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Michaličková_2020_reference](drugs/drug_riociguat/Riociguat_Michalikov2020_reference.md) | — | parent + metabolite (no model) | 3 | Michaličková D et al., Population pharmacokinetics of riocigua…, Pulmonary circulation (2020) | [10.1177/2045894019898031](https://doi.org/10.1177/2045894019898031) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Saleh_2016_2_reference](drugs/drug_riociguat/Riociguat_Saleh2016v2_reference.md) | — | 1-compartment (no model) | 4 | Saleh S et al., Population pharmacokinetics of single-d…, Pulmonary circulation 6(Sup… (2016) | [10.1086/685647](https://doi.org/10.1086/685647) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Willmann_2023_reference](drugs/drug_riociguat/Riociguat_Willmann2023_reference.md) | — | parent + metabolite (no model) | 1 | Willmann S et al., Population pharmacokinetics of riocigua…, Pediatric pulmonology (2023) | [10.1002/ppul.26277](https://doi.org/10.1002/ppul.26277) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=riociguat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP2J2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GUCY1A2 (stimulator), GUCY1A2 (target), GUCY2D (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 3  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Saleh_2016.pdf` | Saleh S et al., Population pharmacokinetics and the pha…, Pulmonary circulation 6(Sup… (2016) | popPK | 10 | [10.1086/685404](https://doi.org/10.1086/685404) | [27162632](https://pubmed.ncbi.nlm.nih.gov/27162632) | The abstract explicitly reports quantitative population PK parameters (ka, CL, V) for riociguat and its metabolite M1 in human patients. |
| `Saleh_2016_2.pdf` | Saleh S et al., Population pharmacokinetics of single-d…, Pulmonary circulation 6(Sup… (2016) | popPK | 10 | [10.1086/685647](https://doi.org/10.1086/685647) | [27162631](https://pubmed.ncbi.nlm.nih.gov/27162631) | The paper reports a population PK model for riociguat with specific numeric values for total clearance (1.912 L/h), metabolic clearance (1.2 L/h), and renal clearance (0.242 L/h) directly in the abstract. |
| `Willmann_2023.pdf` | Willmann S et al., Population pharmacokinetics of riocigua…, Pediatric pulmonology (2023) | popPK | 10 | [10.1002/ppul.26277](https://doi.org/10.1002/ppul.26277) | [36507572](https://pubmed.ncbi.nlm.nih.gov/36507572) | The paper reports a population PK model for riociguat in humans, but the evidence only provides median apparent clearance values, lacking specific model parameter estimates (V, Q, ka) or full numeric parameter tables. |

<sub>queue written 2026-10-06T16:19:14.918161+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Frey_2018 | irrelevant | 2 | 3 | The paper is a clinical review summarizing pharmacokinetic properties (clearance, half-life, bioavailability) rather than reporting original quantitative population-PK model parameters (e.g., typical CL, V, Q, ka estimates with variability). |
| PD | Saleh_2016 | not_relevant | 4 | 2 | The abstract describes a PK/PD analysis but only reports qualitative correlations (6MWD vs. hemodynamics) and PK parameters, without providing specific numeric PD parameters (e.g., Emax, EC50) or a defined concentration-effect curve. |
| popPK | Shimokawahara_2023 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for a hemodynamic efficacy study (peak cardiac index) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Smith_2016 | relevant | 4 | 6 | The paper is a review that cites specific PK parameters (Vd, t1/2, Tmax) for riociguat in CTEPH patients from a Phase II study, but lacks a full compartmental model or clearance values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:19 UTC</sub>
