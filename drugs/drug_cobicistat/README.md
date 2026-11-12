<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cobicistat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cobicistat_Barcel2016_reference&quot;,&quot;label&quot;:&quot;Barcel\u00f3_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobicistat/Cobicistat_Barcel2016_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cobicistat

- **generic name:** cobicistat
- **ATC codes:** `J05AR09`, `J05AR14`, `J05AR15`, `J05AR18`, `J05AR22`, `V03AX03`
- **DrugBank:** [DB09065](https://go.drugbank.com/drugs/DB09065) · **PubChem:** [CID 25151504](https://pubchem.ncbi.nlm.nih.gov/compound/25151504)
- **molar mass:** 776.03 g/mol (C40H53N7O5S2) — DrugBank
- **groups:** approved, investigational

## About

Cobicistat is an anti-HIV medicine used in the treatment of HIV infection, where it acts as a booster that inhibits the CYP3A enzyme to raise levels of other antiviral drugs. It is authorised in the European Union and is used in combination antiviral products for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5138908](https://www.wikidata.org/wiki/Q5138908) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cobicistat | parent | 776.03 | C40H53N7O5S2 | DrugBank | [25151504](https://pubchem.ncbi.nlm.nih.gov/compound/25151504) | Barceló_2016, Overbeek_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q3 — no SI value to build from</sub> | [Overbeek_2025_reference](drugs/drug_cobicistat/Cobicistat_Overbeek2025_reference.md) | — | 1-compartment (no model) | 5 | Overbeek JK et al., Population Pharmacokinetics of Cobicist…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01480-w](https://doi.org/10.1007/s40262-025-01480-w) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Abdalla_2024_reference](drugs/drug_cobicistat/Cobicistat_Abdalla2024_reference.md) | — | 2-compartment (no model) | 3 | Abdalla S et al., Simultaneous pharmacokinetic modeling o…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01004-23](https://doi.org/10.1128/aac.01004-23) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Barceló_2016_reference](drugs/drug_cobicistat/Cobicistat_Barcel2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Barceló C et al., Population pharmacokinetic analysis of…, The Journal of antimicrobia… (2016) | [10.1093/jac/dkw050](https://doi.org/10.1093/jac/dkw050) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gallucci_2024_SARS_CoV_2_replication_inhibition_antiviral_activity_image_based_screening](drugs/drug_cobicistat/pd_Gallucci_2024_SARS_CoV_2_replication_inhibition_antiviral_ac.md) | SARS-CoV-2 replication inhibition (antiviral activity, image-based screening) ← cobicistat · inhibition effect | — | Gallucci L et al., Broad-spectrum antiviral activity of tw…, Antiviral research (2024) | [10.1016/j.antiviral.2023.105766](https://doi.org/10.1016/j.antiviral.2023.105766) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xie_2020_Nluc_signal](drugs/drug_cobicistat/pd_Xie_2020_Nluc_signal.md) | SARS-CoV-2-Nluc luciferase signal (relative luciferase signal in infected A549-hACE2 cells) ← cobicistat · direct sigmoid Emax (Hill) effect | — | Xie X et al., A nanoluciferase SARS-CoV-2 for rapid n…, Nature communications (2020) | [10.1038/s41467-020-19055-7](https://doi.org/10.1038/s41467-020-19055-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cobicistat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:33 | 7:36 | 1/2/0 | 2/0/0 | 0/0/0 | 446,827/23,793 | ollama / glm-5.3-flash | 10 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barceló_2016.pdf` | Barceló C et al., Population pharmacokinetic analysis of…, The Journal of antimicrobia… (2016) | popPK | 10 | [10.1093/jac/dkw050](https://doi.org/10.1093/jac/dkw050) | [27029846](https://pubmed.ncbi.nlm.nih.gov/27029846) | Population PK model for cobicistat with CL 16.0 L/h (CV 41.9%) and V 88.3 L reported directly in the abstract. |

<sub>queue written 2026-10-07 15:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2024 | irrelevant | 0 | 0 | This is a population PK study of darunavir and ritonavir in adolescents; cobicistat is only mentioned as an alternative booster, with no cobicistat PK parameters reported. |
| popPK | Brooks_2023 | irrelevant | 2 | 1 | Cobicistat is only co-administered; PK results (AUC, Cmax, C24h) are reported for darunavir, with no cobicistat disposition parameters given. |
| popPK | Courlet_2021 | irrelevant | 0 | 0 | The subject drug is rosuvastatin; cobicistat appears only as a covariate on non-HDL-cholesterol baseline, with no cobicistat PK parameters reported. |
| popPK | Crauwels_2019 | relevant | 4 | 3 | Human NCA PK study of cobicistat in pregnant women, but only percent exposure changes are given; full parameter values (CL, V, half-life) are not in the evidence. |
| popPK | Custodio_2016 | irrelevant | 2 | 1 | Cobicistat is only the boosting co-administered agent; the population PK model and parameters are for elvitegravir, not cobicistat, and no numeric values are provided. |
| popPK | De_2020 | irrelevant | 0 | 0 | In vitro antiviral study of darunavir against SARS-CoV-2; cobicistat is only mentioned as a pharmacoenhancer with no PK parameters for it. |
| popPK | Eisenmann_2021 | irrelevant | 1 | 2 | Cobicistat is only the CYP3A-inhibiting perpetrator; the PK subject is ibrutinib (and its metabolite PCI-45227), with cobicistat's own disposition parameters not modeled, and numeric values largely in supplementary figures/tables. |
| popPK | Gallucci_2024 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50) with no PK disposition parameters for cobicistat. |
| popPK | Hsu_2022 | irrelevant | 0 | 0 | Clinical outcomes study of weight gain with cobicistat-containing regimens; no PK parameters reported. |
| popPK | Kumar_2017 | irrelevant | 2 | 2 | Cobicistat is only a co-administered perpetrator; the PK parameters reported (exposure ratios, half-life) are for dabigatran, not cobicistat's own disposition. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of HIV reverse transcriptase inhibitors; cobicistat is only mentioned as a pharmacokinetic booster, with no PK parameters for cobicistat itself. |
| popPK | López-Ruz_2018 | irrelevant | 1 | 0 | Cobicistat is only a pharmacokinetic enhancer co-administered with darunavir; no PK disposition parameters (CL, V, half-life, model) for cobicistat are reported, only DRV seminal concentrations. |
| popPK | Moltó_2018 | relevant | 4 | 3 | Human PK study with cobicistat as subject drug, but only percentage changes in AUC/Cmax/C24 are given, not full disposition parameters (CL, V, t½), and no numeric absolute values appear. |
| popPK | Stillemans_2021 | irrelevant | 3 | 1 | Cobicistat is only the co-administered booster; a COB model was briefly developed but dropped, and no numeric COB parameter values appear (DRV parameters dominate; COB details relegated to ESM). |
| popPK | Westra_2025 | irrelevant | 2 | 3 | Cobicistat is only a co-administered CYP3A booster; the popPK model and numeric parameters (CL/F, V/F, Ka) are for osimertinib and its metabolite AZ5104, not for cobicistat itself. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | This is an in vitro SARS-CoV-2 antiviral screening study; cobicistat is only a screened inhibitor with EC50 values, no PK disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobicistat%5D&body=Drug%3A%20cobicistat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cobicistat/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 15:26 UTC</sub>
