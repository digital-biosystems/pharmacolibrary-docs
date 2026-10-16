<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;teduglutide&quot;}]"></div>

# teduglutide

- **generic name:** teduglutide
- **ATC codes:** `A16AX08`
- **DrugBank:** [DB08900](https://go.drugbank.com/drugs/DB08900) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teduglutide is a glucagon-like peptide-2 analogue used to treat short bowel syndrome. It is authorised in the European Union for short bowel syndrome and related malabsorption conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7694156](https://www.wikidata.org/wiki/Q7694156) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| teduglutide | parent | 3752.13 | C164H252N44O55S | PubChem | [16139605](https://pubchem.ncbi.nlm.nih.gov/compound/16139605) | Marier_2010, Marier_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:56 | 0:51 | 0/3/1 | 1/0/0 | 0/0/0 | 79,509/3,756 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Marier_2010_reference](drugs/drug_teduglutide/Teduglutide_Marier2010_reference.md) | — | 1-compartment (no model) | 1 | Marier JF et al., Population pharmacokinetics of teduglut…, Journal of clinical pharmac… (2010) | [10.1177/0091270009342252](https://doi.org/10.1177/0091270009342252) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Marier_2021_adults_0_05_mg_kg](drugs/drug_teduglutide/Teduglutide_Marier2021_adults_0_05_mg_kg.md) | — | 1-compartment (no model) | 0 | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Marier_2021_pediatrics_0_05_mg_kg](drugs/drug_teduglutide/Teduglutide_Marier2021_pediatrics_0_05_mg_kg.md) | — | 1-compartment (no model) | 0 | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Marier_2021_typical_values_rse](drugs/drug_teduglutide/Teduglutide_Marier2021_typical_values_rse.md) | — | 1-compartment (no model) | 1 | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Marier_2021_PPSV](drugs/drug_teduglutide/pd_Marier_2021_PPSV.md) | prescribed PS volume (i.e., PN/IV volume) ← teduglutide · direct Emax (saturable) effect | — | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teduglutide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GLP2R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marier_2010.pdf` | Marier JF et al., Population pharmacokinetics of teduglut…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009342252](https://doi.org/10.1177/0091270009342252) | [19773525](https://pubmed.ncbi.nlm.nih.gov/19773525) | The evidence contains a population PK model description and explicit numeric values for apparent clearance (12.4 and 10.5 L/h) and half-life (0.897 and 2.99 hours). |
| `Roepcke_2014.pdf` | Roepcke S et al., Utility of a population pharmacokinetic…, International journal of cl… (2014) | popPK | 9 | [10.5414/CP201942](https://doi.org/10.5414/CP201942) | [25066226](https://pubmed.ncbi.nlm.nih.gov/25066226) | The paper describes a population PK model for teduglutide but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative descriptions and covariate effects. |

<sub>queue written 2026-10-07T17:55:35.189751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alters_2012 | not_relevant | 0 | 0 | The paper describes the PK/PD of a novel drug formulation (GLP2-2G-XTEN) compared to teduglutide but does not report any genetic or pharmacogenomic variations affecting these parameters. |
| PGx | Gadgaard_2023 | not_relevant | 0 | 0 | The paper focuses on the structure-activity relationship of novel GLP-2 analogs, not the impact of human genetic variants on the pharmacokinetics or pharmacodynamics of teduglutide. |
| PGx | Gu_2017 | not_relevant | 0 | 0 | The paper describes the development of a new GLP-2 analogue (GLP-2②) and its superior pharmacokinetics compared to teduglutide, but it does not investigate the effect of human gene variants on teduglutide's PK or PD parameters. |
| popPK | Micic_2024 | irrelevant | 0 | 0 | The study is a post-hoc analysis of liver chemistries (safety/efficacy) and does not report any pharmacokinetic parameters for teduglutide. |
| popPK | Roepcke_2014 | relevant | 9 | 2 | The paper describes a population PK model for teduglutide but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative descriptions and covariate effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:55 UTC</sub>
