<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cobicistat&quot;}]"></div>

# cobicistat

- **generic name:** cobicistat
- **ATC codes:** `J05AR09`, `J05AR14`, `J05AR15`, `J05AR18`, `J05AR22`, `V03AX03`
- **DrugBank:** [DB09065](https://go.drugbank.com/drugs/DB09065) · **PubChem:** [CID 25151504](https://pubchem.ncbi.nlm.nih.gov/compound/25151504)
- **molar mass:** 776.03 g/mol (C40H53N7O5S2) — DrugBank
- **groups:** approved, investigational

## About

Cobicistat is a cytochrome P450 inhibitor used to treat human immunodeficiency virus infection. It is given orally, usually as tablets. It is authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5138908](https://www.wikidata.org/wiki/Q5138908), [Wikipedia](https://en.wikipedia.org/wiki/Cobicistat?oldid=1329247274) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cobicistat | parent | 776.03 | C40H53N7O5S2 | DrugBank | [25151504](https://pubchem.ncbi.nlm.nih.gov/compound/25151504) | Overbeek_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q3 — no SI value to build from</sub> | [Overbeek_2025_reference](drugs/drug_cobicistat/Cobicistat_Overbeek2025_reference.md) | — | 1-compartment (no model) | 5 | Overbeek JK et al., Population Pharmacokinetics of Cobicist…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01480-w](https://doi.org/10.1007/s40262-025-01480-w) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Abdalla_2024_reference](drugs/drug_cobicistat/Cobicistat_Abdalla2024_reference.md) | — | 2-compartment (no model) | 3 | Abdalla S et al., Simultaneous pharmacokinetic modeling o…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01004-23](https://doi.org/10.1128/aac.01004-23) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gallucci_2024_SARS_CoV_2_replication_inhibition_antiviral_activity_image_based_screening](drugs/drug_cobicistat/pd_Gallucci_2024_SARS_CoV_2_replication_inhibition_antiviral_ac.md) | SARS-CoV-2 replication inhibition (antiviral activity, image-based screening) ← cobicistat · inhibition effect | — | Gallucci L et al., Broad-spectrum antiviral activity of tw…, Antiviral research (2024) | [10.1016/j.antiviral.2023.105766](https://doi.org/10.1016/j.antiviral.2023.105766) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xie_2020_Nluc_signal](drugs/drug_cobicistat/pd_Xie_2020_Nluc_signal.md) | SARS-CoV-2-Nluc luciferase signal (relative luciferase signal in infected A549-hACE2 cells) ← cobicistat · direct sigmoid Emax (Hill) effect | — | Xie X et al., A nanoluciferase SARS-CoV-2 for rapid n…, Nature communications (2020) | [10.1038/s41467-020-19055-7](https://doi.org/10.1038/s41467-020-19055-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:21 | 2:19 | 1/1/0 | 2/0/0 | 0/0/0 | 6,595/545 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moltó_2018.pdf` | Moltó J et al., Pharmacokinetics of darunavir/cobicista…, The Journal of antimicrobia… (2018) | popPK | 6 | [10.1093/jac/dkx459](https://doi.org/10.1093/jac/dkx459) | [29237008](https://pubmed.ncbi.nlm.nih.gov/29237008) | Reports non-compartmental PK parameters (AUC, Cmax, Cmin) and percentage changes for cobicistat, but lacks compartmental model parameters (CL, V, ka) and specific absolute numeric values are only implied via percentages. |

<sub>queue written 2026-11-23 20:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2024 | irrelevant | 1 | 0 | The study focuses on the population pharmacokinetics of darunavir and ritonavir, with cobicistat mentioned only as a general booster alternative in the introduction and not the subject of the PK modeling or parameter estimation. |
| PGx | Abdalla_2024 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics of darunavir and ritonavir in adolescents and does not report any pharmacogenomic effects involving cobicistat. |
| PGx | Barceló_2016 | not_relevant | 0 | 0 | The study analyzes population PK for elvitegravir and cobicistat focusing on drug-drug interactions (specifically with atazanavir/darunavir) and demographic factors, but it does not report specific pharmacogenomic effects (gene variants) on their PK/PD parameters. |
| popPK | Brooks_2023 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of darunavir, with cobicistat serving as a PK enhancer/comparator; no specific quantitative PK parameters (CL, V, etc.) for cobicistat are reported in the provided evidence. |
| PGx | Brooks_2023 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (cobicistat/rifapentine) on darunavir PK, not a pharmacogenomic effect on cobicistat PK/PD. |
| popPK | Courlet_2021 | irrelevant | 0 | 0 | The subject drug is rosuvastatin; cobicistat appears only as a covariate on non-HDL-cholesterol baseline, with no cobicistat PK parameters reported. |
| PGx | Crauwels_2019 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes due to the physiological state of pregnancy, not due to any gene variant, genotype, or genotype-based phenotype (pharmacogenomics). |
| popPK | Custodio_2016 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of elvitegravir, using cobicistat only as a booster/comparator agent without reporting cobicistat's own quantitative disposition parameters. |
| PGx | Custodio_2016 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics of Elvitegravir and evaluates non-genetic covariates (e.g., weight, age, formulation); it does not report any pharmacogenomic effects on Cobicistat or Elvitegravir PK/PD. |
| popPK | De_2020 | irrelevant | 0 | 0 | The paper is an in vitro antiviral activity study of darunavir against SARS-CoV-2, where cobicistat is only mentioned as a co-formulated boost in the context of a drug indication, with no pharmacokinetic data for cobicistat reported. |
| PGx | De_2020 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of darunavir against SARS-CoV-2 and contains no data regarding cobicistat or any pharmacogenomic effects. |
| popPK | Eisenmann_2021 | irrelevant | 1 | 2 | Cobicistat is only the CYP3A-inhibiting perpetrator; the PK subject is ibrutinib (and its metabolite PCI-45227), with cobicistat's own disposition parameters not modeled, and numeric values largely in supplementary figures/tables. |
| popPK | Gallucci_2024 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50) with no PK disposition parameters for cobicistat. |
| popPK | Hsu_2022 | irrelevant | 0 | 0 | This is an observational epidemiological study on weight gain associated with antiretroviral regimens; it does not report pharmacokinetic parameters for cobicistat. |
| PGx | Hsu_2022 | not_relevant | 0 | 0 | The study investigates weight gain across different antiretroviral regimens but does not report pharmacogenomic effects or gene-specific PK/PD parameters for cobicistat. |
| popPK | Kumar_2017 | irrelevant | 2 | 0 | Cobicistat is a comparator pharmacokinetic enhancer, and the reported quantitative parameters belong to the probe drug dabigatran. |
| PGx | Kumar_2017 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (cobicistat affecting dabigatran PK/PD) rather than pharmacogenomic effects (gene variants) on cobicistat. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review of HIV reverse transcriptase inhibitors and only mentions cobicistat briefly as a booster that increases TAF absorption; it contains no population PK model or specific disposition parameters for cobicistat. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper is a review of approved HIV RT inhibitors and does not report on pharmacogenomic effects on the PK or PD parameters of cobicistat. |
| popPK | López-Ruz_2018 | irrelevant | 1 | 0 | Cobicistat is only a pharmacokinetic enhancer co-administered with darunavir; no PK disposition parameters (CL, V, half-life, model) for cobicistat are reported, only DRV seminal concentrations. |
| PGx | Moltó_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (etrazavirine vs. cobicistat) rather than pharmacogenomic effects of genetic variants on cobicistat PK. |
| popPK | Stillemans_2021 | irrelevant | 3 | 1 | Cobicistat is only the co-administered booster; a COB model was briefly developed but dropped, and no numeric COB parameter values appear (DRV parameters dominate; COB details relegated to ESM). |
| popPK | Westra_2025 | irrelevant | 2 | 3 | Cobicistat is only a co-administered CYP3A booster; the popPK model and numeric parameters (CL/F, V/F, Ka) are for osimertinib and its metabolite AZ5104, not for cobicistat itself. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | This is an in vitro SARS-CoV-2 antiviral screening study; cobicistat is only a screened inhibitor with EC50 values, no PK disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobicistat%5D&body=Drug%3A%20cobicistat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cobicistat/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 11:31 UTC</sub>
