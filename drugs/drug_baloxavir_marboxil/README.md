<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# baloxavir marboxil

- **generic name:** baloxavir marboxil
- **ATC codes:** `J05AX25`
- **DrugBank:** [DB13997](https://go.drugbank.com/drugs/DB13997) · **PubChem:** none
- **molar mass:** 571.55 g/mol (C27H23F2N3O7S) — DrugBank
- **groups:** approved, investigational

## About

Baloxavir marboxil is a direct-acting antiviral agent used to treat infections caused by influenza A and influenza B. It is administered orally as a tablet or granule for reconstitution into a liquid suspension. The medication is approved for use in Japan and the United States and is authorized in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q48333728](https://www.wikidata.org/wiki/Q48333728), [Wikipedia](https://en.wikipedia.org/wiki/Baloxavir_marboxil?oldid=1362104172) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| baloxavir marboxil | parent | 571.55 | C27H23F2N3O7S | DrugBank | — | Koshimichi_2020, Retout_2026 |
| baloxavir acid | metabolite | 483.489 | C24H19F2N3O4S | PubChem | [134817204](https://pubchem.ncbi.nlm.nih.gov/compound/134817204) | Koshimichi_2020, Retout_2026 |
| baloxavir_marboxil | metabolite | 571.55 | C27H23F2N3O7S | DrugBank | — | Kim_2022 |

## Start here

> **Kim_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy Korean and Japanese adults. [Run it in the simulator](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md?tab=Simulation) · [record](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T3_param_coverage</sub> | [Kim_2022_reference](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 9 (+2 cov.) | Kim Y et al., Pharmacokinetics and safety of a novel…, Clinical and translational… (2022) | [10.1111/cts.13160](https://doi.org/10.1111/cts.13160) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_param_coverage</sub> | [Retout_2026_reference](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+5 cov.) | Retout S et al., Population Pharmacokinetic and Exposure…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70204](https://doi.org/10.1002/cpt.70204) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Koshimichi_2020_reference](drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Koshimichi2020_reference.md) | — | 1-compartment (no model) | 8 (+5 cov.) | Koshimichi H et al., Population Pharmacokinetics and Exposur…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.00119-20](https://doi.org/10.1128/AAC.00119-20) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watanabe_2019_TTAS](drugs/drug_baloxavir_marboxil/pd_Watanabe_2019_TTAS.md) | time to alleviation of symptoms ← baloxavir · direct linear effect | — | Watanabe A et al., Baloxavir marboxil in Japanese patients…, Antiviral research (2019) | [10.1016/j.antiviral.2019.01.012](https://doi.org/10.1016/j.antiviral.2019.01.012) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watanabe_2019_change_in_virus_titer](drugs/drug_baloxavir_marboxil/pd_Watanabe_2019_change_in_virus_titer.md) | change in virus titer ← baloxavir · direct Emax (saturable) effect | — | Watanabe A et al., Baloxavir marboxil in Japanese patients…, Antiviral research (2019) | [10.1016/j.antiviral.2019.01.012](https://doi.org/10.1016/j.antiviral.2019.01.012) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:44 | 0:16 | 2/1/0 | 0/2/0 | 0/0/0 | 5,975/1,531 | einfracz / qwen3.8-27b | 8 | 3/5 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Checkmahomed_2020 | irrelevant | 0 | 0 | In vitro antiviral combination study reporting EC50/CI values, not PK disposition parameters (CL, V, half-life, or PK model) for baloxavir. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of new spirocyclic inhibitors and their in vitro/efficacy profiles, reporting no pharmacokinetic parameters for baloxavir marboxil. |
| PGx | He_2025 | not_relevant | 0 | 0 | The paper reports the discovery of a new spirocyclic influenza inhibitor and its activity, but it does not contain any data on pharmacogenomics, genetic variants, or the effect of genotype on the PK/PD of baloxavir marboxil. |
| PGx | Kim_2022 | not_relevant | 0 | 0 | The study compares pharmacokinetics between Korean and Japanese populations based on body weight and does not involve any genetic variants, genotypes, or pharmacogenomic markers. |
| popPK | Koshimichi_2019 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for baloxavir acid (the active metabolite of baloxavir marboxil) in humans, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Koshimichi_2019 | not_relevant | 0 | 0 | The study describes population pharmacokinetics based on body weight but does not report the effect of any gene variant or genotype on PK/PD parameters. |
| popPK | Koshimichi_2019_2 | relevant | 5 | 0 | The abstract describes a population PK model for baloxavir marboxil's active metabolite but does not provide the specific numeric parameter values (CL, V, Q, ka), which are likely in the full text or figures not provided. |
| PGx | Koshimichi_2019_2 | not_relevant | 0 | 0 | The paper analyzes population PK and exposure-response but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Koszalka_2019 | irrelevant | 0 | 0 | The evidence contains only GROBID boilerplate with no paper content, so no PK parameters for baloxavir marboxil are present. |
| popPK | Lou_2021 | relevant | 4 | 4 | The paper reports sparse plasma concentration data (trough levels) for baloxavir acid in humans to compare with EC50, but does not provide full population-PK model parameters like CL, V, or ka. |
| PGx | Lou_2021 | not_relevant | 0 | 0 | The paper reports a clinical trial evaluating the efficacy of baloxavir marboxir in COVID-19 and measures its plasma concentration, but it does not study the impact of any gene variant, genotype, or phenotype on the drug's PK or PD parameters. |
| popPK | Luo_2023 | irrelevant | 0 | 0 | The study characterizes the antiviral efficacy and resistance mechanisms of a novel drug (ZX-7101) using baloxavir as a control, without reporting any pharmacokinetic parameters (CL, V, etc.) for baloxavir. |
| PGx | Luo_2023 | not_relevant | 0 | 0 | The paper reports on viral resistance mutations (influenza PA gene) affecting drug efficacy, not human host pharmacogenomics affecting PK or PD parameters. |
| popPK | Omoto_2018 | irrelevant | 0 | 0 | This is a virology/resistance study of baloxavir (EC50 susceptibility, crystal structures) with no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Retout_2022 | relevant | 8 | 3 | Population PK model of baloxavir acid in influenza patients, but the actual PK parameter values (CL, V, etc.) are not shown in the evidence, only AUC exposure ranges. |
| popPK | Takashita_2025 | irrelevant | 0 | 0 | This is a virology susceptibility study with no pharmacokinetic parameters for baloxavir marboxil. |
| popPK | Watanabe_2019 | irrelevant | 2 | 0 | The paper focuses on efficacy and dose-response PK/PD relationships (Cmax, virus titer) rather than reporting standard quantitative disposition parameters (CL, V, half-life) for baloxavir marboxil. |
| PGx | Watanabe_2019 | not_relevant | 0 | 0 | The paper reports a dose-response relationship in Japanese patients, but does not analyze or report any pharmacogenomic effect of specific gene variants on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaloxavir_marboxil%5D&body=Drug%3A%20baloxavir_marboxil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baloxavir_marboxil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 11:40 UTC</sub>
