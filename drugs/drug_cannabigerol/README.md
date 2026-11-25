<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Cannabigerol&quot;}]"></div>

# Cannabigerol

- **generic name:** Cannabigerol
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB14734](https://go.drugbank.com/drugs/DB14734) · **PubChem:** none
- **molar mass:** 316.485 g/mol (C21H32O2) — DrugBank
- **groups:** investigational

## About

**Description.** A natural product found in Cannabis sativa and Helichrysum species.

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB14734">DrugBank DB14734</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cannabigerol | parent | 316.485 | C21H32O2 | DrugBank | — | Serrano-Rodríguez_2025 |
| cannabigerol-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub> | [Serrano-Rodríguez_2025_estimate](drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_estimate.md) | — | parent + metabolite (no model) | 10 | Serrano-Rodríguez JM et al., Metabolism, pharmacokinetics, and bioav…, Frontiers in veterinary sci… (2025) | [10.3389/fvets.2025.1688214](https://doi.org/10.3389/fvets.2025.1688214) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ cbg_estimate](drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_cbg_estimate.md) | — | parent + metabolite (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ cbg_g_estimate](drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_cbg_g_estimate.md) | — | parent + metabolite (no model) | 3 |  |  |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ iv_formulation_of_cbg_at_1_0_mg_kg_cbg](drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1.md) | — | parent + metabolite (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ iv_formulation_of_cbg_at_1_0_mg_kg_cbg_g](drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1.md) | — | parent + metabolite (no model) | 6 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-25 05:37 | 4:36 | 1/4/0 | 0/0/0 | 0/0/0 | 87,614/20,542 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Classen_2024 | irrelevant | 0 | 0 | The study focuses on in-vitro antiviral activity and mechanism of action (membrane fusion inhibition) of cannabigerol, not pharmacokinetics or disposition parameters. |
| PGx | Classen_2024 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism of action of cannabigerol but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Roy_2022 | irrelevant | 3 | 1 | The study focuses on metabolic identification and bioactivity in vitro and in vivo without reporting quantitative population pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| PGx | Roy_2022 | not_relevant | 0 | 0 | The paper describes the metabolic pathways of cannabigerol by CYP enzymes but does not investigate the impact of specific human genetic variants (polymorphisms) on these parameters. |
| PGx | Serrano-Rodríguez_2025 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and metabolism of CBG in horses; it does not investigate the influence of specific gene variants, genotypes, or phenotypes on drug disposition. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabigerol%5D&body=Drug%3A%20cannabigerol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabigerol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-25 05:34 UTC</sub>
