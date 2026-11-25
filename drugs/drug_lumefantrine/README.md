<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Lumefantrine

- **generic name:** Lumefantrine
- **ATC codes:** `P01BF01`
- **DrugBank:** [DB06708](https://go.drugbank.com/drugs/DB06708) · **PubChem:** [CID 6437380](https://pubchem.ncbi.nlm.nih.gov/compound/6437380)
- **molar mass:** 528.94 g/mol (C30H32Cl3NO) — DrugBank
- **groups:** approved, investigational

## About

Lumefantrine is an antimalarial medication used to treat malaria. It is given orally, typically in tablet form. It is used mainly in combination with artemether as a first-line treatment for specific malaria types.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q904464](https://www.wikidata.org/wiki/Q904464), [Wikipedia](https://en.wikipedia.org/wiki/Lumefantrine?oldid=1343037699) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lumefantrine | parent | 528.94 | C30H32Cl3NO | DrugBank | [6437380](https://pubchem.ncbi.nlm.nih.gov/compound/6437380) | Ding_2026, Ezzet_2000, Francis_2020, Hoglund_2015, Kloprogge_2018, Sugiarto_2022 |
| artemether | metabolite | 298.379 | C16H26O5 | PubChem | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ezzet_1998, Sugiarto_2022 |
| desbutyllumefantrine (desbutyl-lumefantrine) | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Ding_2026, Hoglund_2015, Kloprogge_2018 |
| desethylamodiaquine | metabolite | — (mass units only) | — | — | — | — |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ezzet_1998, Sugiarto_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub><br><sub>blocking: C2_base_Q40 failed (ratio 79.3)</sub> | [Ding_2026_reference](drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference.md) | — | general linear (no model) | 25 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ezzet_1998_reference](drugs/drug_lumefantrine/Lumefantrine_Ezzet1998_reference.md) | — | parent + metabolite (no model) | 4 | Ezzet F et al., Population pharmacokinetics and therape…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00830.x](https://doi.org/10.1046/j.1365-2125.1998.00830.x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Ezzet_2000_reference](drugs/drug_lumefantrine/Lumefantrine_Ezzet2000_reference.md) | — | 1-compartment (no model) | 3 | Ezzet F et al., Pharmacokinetics and pharmacodynamics o…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.3.697-704.2000](https://doi.org/10.1128/AAC.44.3.697-704.2000) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Francis_2020_reference](drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference.md) | — | 2-compartment (no model) | 11 (+2 cov.) | Francis J et al., An Individual Participant Data Populati…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02394-19](https://doi.org/10.1128/AAC.02394-19) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hoglund_2015_reference](drugs/drug_lumefantrine/Lumefantrine_Hoglund2015_reference.md) | — | general linear (no model) | 4 | Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015) | [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub> | [Kloprogge_2018_reference](drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 10 | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Sugiarto_2022_reference](drugs/drug_lumefantrine/Lumefantrine_Sugiarto2022_reference.md) | — | general linear (no model) | 3 | Sugiarto SR et al., The pharmacokinetic properties of artem…, British journal of clinical… (2022) | [10.1111/bcp.15001](https://doi.org/10.1111/bcp.15001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kloprogge_2018_recrudescence](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence.md) | PCR-corrected recrudescent infection (cure) at day 42 ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kloprogge_2018_recrudescence_2](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence_2.md) | PCR-corrected recrudescent infection (cure) at day 42 — African children &lt;15 kg ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kloprogge_2018_recrudescence_3](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence_3.md) | PCR-corrected recrudescent infection (cure) at day 42 — African children 15–25 kg ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kloprogge_2018_recrudescence_4](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence_4.md) | PCR-corrected recrudescent infection (cure) at day 42 — Southeast Asian pregnant women ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Simeon_2024_malaria_reinfection_free_survival_remaining_malaria_free_for_42_days](drugs/drug_lumefantrine/pd_Simeon_2024_malaria_reinfection_free_survival_remaining_mala.md) | malaria reinfection-free survival (remaining malaria free for 42 days) ← lumefantrine · time-to-event model | — | Simeon S et al., Optimizing Lumefantrine Dosing for Youn…, Open forum infectious disea… (2024) | [10.1093/ofid/ofae627](https://doi.org/10.1093/ofid/ofae627) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:50 | 0:06 | 2/5/0 | 5/0/0 | 0/0/0 | 3,640/173 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs review 2  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | relevant | 10 | 2 | The paper describes a population PK model for lumefantrine, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the extracted evidence text. |
| PGx | Akinrinade_2026 | not_relevant | 5 | 2 | The study tested CYP3A5 genotype but explicitly reported that it was NOT a significant covariate for lumefantrine pharmacokinetic parameters. |
| popPK | Borrmann_2010 | irrelevant | 5 | 0 | The study describes a two-compartment model but the evidence only reports relative bioavailability changes and mean concentrations, lacking specific numeric PK parameter values (CL, V, Q, ka). |
| PGx | Borrmann_2010 | not_relevant | 0 | 0 | The paper reports the effect of food consumption on lumefantrine bioavailability, but does not investigate or report on the impact of any gene variant, genotype, or phenotype (pharmacogenomics). |
| popPK | Cao_2020 | irrelevant | 1 | 0 | The study focuses on in vitro anti-viral activity of artemisinins, with lumefantrine only mentioned as a comparative reference without original quantitative PK parameters reported in the provided evidence. |
| PGx | Cao_2020 | not_relevant | 0 | 0 | The paper evaluates anti-viral activity and PK predictions but does not investigate gene variants or genotypes. |
| popPK | Ezzet_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of artemether and benflumetol, not lumefantrine. |
| PGx | Ezzet_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of artemether and benflumetol, not lumefantrine, and does not report any pharmacogenomic effects. |
| PGx | Ezzet_2000 | not_relevant | 0 | 0 | The study reports PK/PD data and the impact of food intake on lumefantrine, but it does not investigate or report pharmacogenomic effects (gene variants). |
| popPK | Kawuma_2021 | irrelevant | 1 | 0 | The study models the pharmacokinetics of dolutegravir, with lumefantrine acting only as a co-administered comparator agent. |
| PGx | Kawuma_2021 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (dolutegravir and antimalarials) and contains no information on genetic variants or genotypes. |
| popPK | Kyavar_2006 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of artemisinin, chloroquine, and desbutyl-benflumetol in Plasmodium vivax, and contains no data for lumefantrine. |
| PGx | Kyavar_2006 | not_relevant | 0 | 0 | The paper discusses in vitro interactions of artemisinin, chloroquine, and desbutylbenflumetol in P. vivax, but does not involve lumefantrine or any pharmacogenomic variants. |
| popPK | Müller_2008 | irrelevant | 0 | 0 | The paper is an in-vitro study on Plasmodium falciparum regarding artemisinin and benflumetol derivatives, with no mention of lumefantrine or its pharmacokinetics. |
| PGx | Müller_2008 | not_relevant | 0 | 0 | The paper investigates drug interaction synergism between artemisinin and monodesbutyl-benflumetol, not the pharmacogenomic effect on lumefantrine. |
| popPK | Noedl_2001 | irrelevant | 0 | 0 | The study is an in vitro antimalarial activity assay for a metabolite of lumefantrine, not a pharmacokinetic study of lumefantrine. |
| PGx | Noedl_2001 | not_relevant | 0 | 0 | The paper analyzes the in vitro susceptibility of *P. falciparum* isolates to desbutyl-benflumetol (DBB) based on geographic origin and cross-resistance, without investigating human gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | Pirker-Krassnig_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring parasite inhibition concentrations (EC50/EC90), not a pharmacokinetic study reporting disposition parameters. |
| PGx | Pirker-Krassnig_2004 | not_relevant | 0 | 0 | The study compares in vitro drug susceptibility of the parasite to two compounds but does not report human pharmacogenomic effects on PK or PD parameters. |
| popPK | Samal_2005 | irrelevant | 0 | 0 | The study is an in vitro assessment of desbutyl-benflumetol and retinol activity against Plasmodium falciparum and does not involve lumefantrine pharmacokinetics. |
| PGx | Samal_2005 | not_relevant | 0 | 0 | The study investigates in vitro antimalarial activity and synergy of desbutyl-benflumetol and retinol, not pharmacogenomic effects on lumefantrine. |
| popPK | Simeon_2024 | relevant | 7 | 2 | A population PK-PD simulation study of lumefantrine in young children using a published 2-compartment model, but the actual numeric PK parameter values (CL, V, ka, IIV) are not shown in the evidence — they reside in the cited Chotsiri et al. publication/supplementary material. |
| popPK | Starzengruber_2007 | irrelevant | 0 | 0 | The study reports in-vitro antimalarial efficacy (EC50/EC90) rather than pharmacokinetic disposition parameters. |
| PGx | Starzengruber_2007 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions with P. falciparum isolates, not human pharmacogenomics or host genetic variants affecting lumefantrine PK/PD. |
| PGx | Sugiarto_2022 | not_relevant | 0 | 0 | The study reports population pharmacokinetic parameters for lumefantrine in P. knowlesi malaria but does not assess or report any association with genetic variants, genotypes, or pharmacogenomic factors. |
| popPK | Wernsdorfer_1998 | irrelevant | 0 | 0 | The study focuses on benflumetol, not lumefantrine, and reports in vitro antimalarial activity rather than pharmacokinetic parameters. |
| PGx | Wernsdorfer_1998 | not_relevant | 0 | 0 | The paper investigates the antimalarial drug benflumetol, not lumefantrine, and focuses on enantiomer activity in P. falciparum, not pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumefantrine%5D&body=Drug%3A%20lumefantrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumefantrine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:48 UTC</sub>
