<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;}]"></div>

# palbociclib

- **generic name:** palbociclib
- **ATC codes:** `L01EF01`
- **DrugBank:** [DB09073](https://go.drugbank.com/drugs/DB09073) · **PubChem:** [CID 5330286](https://pubchem.ncbi.nlm.nih.gov/compound/5330286)
- **molar mass:** 447.5328 g/mol (C24H29N7O2) — DrugBank
- **groups:** approved, investigational

## About

Palbociclib is a protein kinase inhibitor used to treat hormone-receptor-positive and HER2-negative breast cancer. The medication is administered orally in capsule or tablet forms. It is approved for use in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q15269707](https://www.wikidata.org/wiki/Q15269707), [Wikipedia](https://en.wikipedia.org/wiki/Palbociclib?oldid=1363754282) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| palbociclib | parent | 447.533 | C24H29N7O2 | DrugBank | [5330286](https://pubchem.ncbi.nlm.nih.gov/compound/5330286) | Buijs_2025, Marouille_2021, Panetta_2024, Royer_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [Marouille_2021_final_final_population_pk_model_with_covariates](drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi.md) | held back | 1-compartment, oral | 4 | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ final](drugs/drug_palbociclib/Palbociclib_Marouille2021_final.md) | — | 1-compartment (no model) | 1 (+1 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q76, Q27 — no SI value to build from</sub> | [Panetta_2024_reference](drugs/drug_palbociclib/Palbociclib_Panetta2024_reference.md) | — | 1-compartment (no model) | 4 | Panetta JC et al., Population Pharmacokinetic and Pharmaco…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121528](https://doi.org/10.3390/pharmaceutics16121528) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Buijs_2025_reference](drugs/drug_palbociclib/Palbociclib_Buijs2025_reference.md) | — | 2-compartment (no model) | 3 (+1 cov.) | Buijs SM et al., Palbociclib exposure in relation to eff…, ESMO open (2025) | [10.1016/j.esmoop.2025.104290](https://doi.org/10.1016/j.esmoop.2025.104290) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Royer_2021_reference](drugs/drug_palbociclib/Palbociclib_Royer2021_reference.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Royer B et al., Population Pharmacokinetics of Palbocic…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14030181](https://doi.org/10.3390/ph14030181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jian_2022_ANC](drugs/drug_palbociclib/pd_Jian_2022_ANC.md) | absolute neutrophil counts ← palbociclib · delayed effect through transit (transduction) compartments | — | Jian W et al., Starting dose selection of palbociclib…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04484-6](https://doi.org/10.1007/s00280-022-04484-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Polisety_2022_MASTL](drugs/drug_palbociclib/pd_Polisety_2022_MASTL.md) | MASTL kinase activity ← Palbociclib · direct sigmoid Emax (Hill) effect | — | Polisety A et al., Therapeutic natural compounds Enzastaur…, Medical oncology (Northwood… (2022) | [10.1007/s12032-022-01701-3](https://doi.org/10.1007/s12032-022-01701-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Polisety_2022_MCF_7_cell_viability](drugs/drug_palbociclib/pd_Polisety_2022_MCF_7_cell_viability.md) | MCF-7 cell viability ← Palbociclib · direct sigmoid Emax (Hill) effect | — | Polisety A et al., Therapeutic natural compounds Enzastaur…, Medical oncology (Northwood… (2022) | [10.1007/s12032-022-01701-3](https://doi.org/10.1007/s12032-022-01701-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Sun_2017_ANC](drugs/drug_palbociclib/pd_Sun_2017_ANC.md) | absolute neutrophil count (ANC) ← palbociclib · inhibition effect | — | Sun W et al., Characterization of Neutropenia in Adva…, Journal of clinical pharmac… (2017) | [10.1002/jcph.902](https://doi.org/10.1002/jcph.902) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Marouille_2021_ANC](drugs/drug_palbociclib/pd_Marouille_2021_ANC.md) | absolute neutrophil count ← palbociclib · indirect response — drug inhibits the production of absolute neutrophil count | — | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2022_Ki67](drugs/drug_palbociclib/pd_Yu_2022_Ki67.md) | Ki67 ← palbociclib · indirect response — drug inhibits the production of Ki67 | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2022_TK1](drugs/drug_palbociclib/pd_Yu_2022_TK1.md) | thymidine kinase 1 ← palbociclib · indirect response — drug inhibits the production of thymidine kinase 1 | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2022_pRb](drugs/drug_palbociclib/pd_Yu_2022_pRb.md) | phosphor-retinoblastoma protein ← palbociclib · indirect response — drug inhibits the production of phosphor-retinoblastoma protein | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zheng_2021_PFS](drugs/drug_palbociclib/pd_Zheng_2021_PFS.md) | progression-free survival ← palbociclib · time-to-event model | — | Zheng J et al., Impact of Dose Reduction on Efficacy: I…, Targeted oncology (2021) | [10.1007/s11523-020-00771-5](https://doi.org/10.1007/s11523-020-00771-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:28 | 1:29 | 2/3/0 | 9/0/0 | 0/0/0 | 6,614/3,047 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 17 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2022 | irrelevant | 0 | 0 | This is an in-vitro transporter study and reports no quantitative palbociclib disposition parameters. |
| popPK | Hu_2025 | irrelevant | 2 | 1 | Human bioequivalence data report exposure metrics and half-life, but no qualifying disposition parameters or PK model. |
| popPK | Jian_2022 | irrelevant | 2 | 2 | The paper reports a K-PD model for neutropenia (effect) and does not report pharmacokinetic parameters (CL, V, Q, ka, t1/2) for palbociclib. |
| PGx | Jian_2022 | not_relevant | 0 | 0 | The paper reports a population K-PD model for palbociclib in Chinese patients based on ethnicity and baseline ANC, but does not analyze specific gene variants, genotypes, or pharmacogenomic phenotypes. |
| popPK | Polisety_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on MASTL kinase inhibition and cell cycle effects in MCF-7 cells, reporting no pharmacokinetic parameters (CL, V, ka, t1/2). |
| PGx | Polisety_2022 | not_relevant | 0 | 0 | The study evaluates the in vitro mechanism of action (MASTL inhibition) of palbociclib in cancer cells but does not investigate the effect of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Roncato_2022 | irrelevant | 2 | 1 | Human palbociclib concentrations are reported, but no quantitative disposition parameters or PK model values are provided. |
| popPK | Ruiz-Garcia_2017 | irrelevant | 3 | 0 | The study reports non-compartmental PK metrics (AUC, Cmax, Tmax) rather than specific disposition parameters like clearance, volume of distribution, or half-life. |
| PGx | Ruiz-Garcia_2017 | not_relevant | 0 | 0 | The paper investigates the effect of food intake on pharmacokinetics, not the effect of a genetic variant or genotype. |
| popPK | Sun_2017 | irrelevant | 2 | 0 | The paper describes a PK-PD model for neutropenia (PD) rather than reporting quantitative PK disposition parameters (CL, V, ka) for palbociclib in the provided evidence. |
| PGx | Sun_2017 | not_relevant | 0 | 0 | The paper reports a population PK-PD model for neutropenia but identifies no gene variants or genotypes as covariates influencing PK or PD parameters. |
| popPK | Yu_2022 | irrelevant | 3 | 0 | The paper is a pharmacodynamic (PD) modeling study that does not report quantitative disposition parameters (CL, V, etc.) for palbociclib in the provided text. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper reports PK/PD modeling of biomarkers in a patient population but does not investigate the effect of gene variants or genotypes (pharmacogenomics). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalbociclib%5D&body=Drug%3A%20palbociclib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palbociclib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 04:09 UTC</sub>
