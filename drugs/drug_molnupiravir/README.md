<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;molnupiravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Molnupiravir_Bihorel2023_reference&quot;,&quot;label&quot;:&quot;Bihorel_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Gouda2022_reference&quot;,&quot;label&quot;:&quot;Gouda_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# molnupiravir

- **generic name:** molnupiravir
- **ATC codes:** `J05AB18`
- **DrugBank:** [DB15661](https://go.drugbank.com/drugs/DB15661) · **PubChem:** none
- **molar mass:** 329.309 g/mol (C13H19N3O7) — DrugBank
- **groups:** investigational

## About

Molnupiravir is an antiviral medication used to treat severe respiratory illness caused by certain RNA viruses. It is administered orally in capsule form, which is its standard method of delivery. Regulatory status is complex, with approvals in specific jurisdictions while applications elsewhere have been withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q96376832](https://www.wikidata.org/wiki/Q96376832), [Wikipedia](https://en.wikipedia.org/wiki/Molnupiravir?oldid=1378360857) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| molnupiravir | parent | 329.309 | C13H19N3O7 | DrugBank | — | Bihorel_2023, Gouda_2022 |
| NHC | metabolite | 259.2 | — | the paper | — | Bihorel_2023 |

## Start here

> **Gouda_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy adults. [Run it in the simulator](drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md?tab=Simulation) · [record](drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: cross_check_disputed</sub> | [Bihorel_2023_reference](drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 (+5 cov.) | Bihorel S et al., Population pharmacokinetics of molnupir…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: cross_check_disputed</sub> | [Gouda_2022_reference](drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 (+2 cov.) | Gouda AS et al., A validated LC-MS/MS method for determi…, Journal of chromatography.… (2022) | [10.1016/j.jchromb.2022.123363](https://doi.org/10.1016/j.jchromb.2022.123363) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Lv_2025_reference](drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Lv D et al., Population Pharmacokinetic Modeling Ana…, Drug design, development an… (2025) | [10.2147/DDDT.S517282](https://doi.org/10.2147/DDDT.S517282) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Chi_2026_GGNNV_propagation_in_GB_cells](drugs/drug_molnupiravir/pd_Chi_2026_GGNNV_propagation_in_GB_cells.md) | GGNNV propagation in GB cells ← Molnupiravir · inhibition effect | — | Chi CK et al., Molnupiravir: A Prodrug of the Ribonucl…, Journal of fish diseases (2026) | [10.1111/jfd.70121](https://doi.org/10.1111/jfd.70121) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Chawla_2023_hospitalization](drugs/drug_molnupiravir/pd_Chawla_2023_hospitalization.md) | hospitalization (COVID-19 clinical outcome) ← β-D-N4-hydroxycytidine (NHC) · direct Emax (saturable) effect | — | Chawla A et al., Factors Influencing COVID-19 Risk: Insi…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2895](https://doi.org/10.1002/cpt.2895) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:18 | 0:14 | 2/1/0 | 1/1/0 | 0/0/0 | 6,377/1,552 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bihorel_2023 | not_relevant | 0 | 0 | The study performs a population pharmacokinetic analysis for molnupiravir but does not assess genetic variants or pharmacogenomic covariates; the primary focus is on non-genetic factors like body weight, sex, and food status. |
| popPK | Chawla_2023 | irrelevant | 3 | 2 | Exposure-response analysis using PK exposures but no disposition parameters (CL, V, ka, half-life) are reported; AUC50 is a pharmacodynamic parameter, not a PK parameter. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper focuses on the design and SAR of new xanthine derivatives (e.g., compound 10o), using molnupiravir only as a comparator in mechanism and combination studies without reporting its PK parameters. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper reports the design and activity of a novel xanthine antiviral (10o) and compares its mechanism to molnupiravir, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of molnupiravir. |
| popPK | Chi_2026 | irrelevant | 0 | 0 | The study is an in vitro antiviral efficacy assessment (EC50, viral titre reduction) and does not report any pharmacokinetic parameters (CL, V, ka, t1/2) for molnupiravir. |
| PGx | Chi_2026 | not_relevant | 0 | 0 | The paper studies antiviral efficacy in fish cells and does not report any human pharmacogenomic effects on PK or PD parameters. |
| popPK | Gidari_2022 | irrelevant | 1 | 2 | In-vitro antiviral potency study (EC50/EC90) with only literature-derived Cmax ratios; no PK disposition parameters for molnupiravir. |
| PGx | Gouda_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic study in healthy volunteers using non-genomic covariates (e.g., body weight) and does not investigate any gene variants or genotypes. |
| popPK | Jade_2023 | irrelevant | 0 | 0 | Computational docking/virtual screening study; molnupiravir only a comparator with EC50 values, no PK disposition parameters. |
| popPK | Li_2022 | irrelevant | 1 | 1 | This is an in vitro/in vivo antiviral efficacy study; no PK disposition parameters (CL, V, ka, half-life, model) are reported, and the only PK mention (Cmax) refers to a figure not included. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of molnupiravir against influenza; no PK disposition parameters (CL, V, ka, half-life, or PK model) for molnupiravir are reported. |
| popPK | Malune_2025 | irrelevant | 0 | 0 | In silico drug-discovery study of RdRp inhibitors; molnupiravir is only mentioned as an approved comparator, with no PK parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study on coronavirus replication and drug interactions, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for molnupiravir. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between immunosuppressants and antivirals in cell models, containing no genetic or pharmacogenomic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmolnupiravir%5D&body=Drug%3A%20molnupiravir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_molnupiravir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 14:56 UTC</sub>
