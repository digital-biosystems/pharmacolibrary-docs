<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zidovudine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# zidovudine

- **generic name:** zidovudine
- **ATC codes:** `J05AF01`, `J05AR01`
- **DrugBank:** [DB00495](https://go.drugbank.com/drugs/DB00495) · **PubChem:** [CID 35370](https://pubchem.ncbi.nlm.nih.gov/compound/35370)
- **molar mass:** 267.2413 g/mol (C10H13N5O4) — DrugBank
- **groups:** approved, investigational

## About

Zidovudine is a nucleoside reverse transcriptase inhibitor used to treat HIV infection and AIDS. It is typically taken by mouth or given as a slow intravenous injection. This medication is widely available and included on the World Health Organization list of essential medicines.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q198504](https://www.wikidata.org/wiki/Q198504), [Wikipedia](https://en.wikipedia.org/wiki/Zidovudine?oldid=1366106723) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zidovudine | parent | 267.241 | C10H13N5O4 | DrugBank | [35370](https://pubchem.ncbi.nlm.nih.gov/compound/35370) | Blum_1988, Fauchet_2013, Tang_2026, von_2009 |
| 3*-azido-3*-deoxy-5*-glucuronylthymidine | metabolite | — (mass units only) | — | — | — | — |
| 5'-O-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| zidovudine diphosphate | metabolite | 427.203 | C10H15N5O10P2 | PubChem | [455742](https://pubchem.ncbi.nlm.nih.gov/compound/455742) | Tang_2026 |
| zidovudine monophosphate | metabolite | 347.224 | C10H14N5O7P | PubChem | [65374](https://pubchem.ncbi.nlm.nih.gov/compound/65374) | Tang_2026, von_2009 |
| zidovudine triphosphate | metabolite | 507.182 | C10H16N5O13P3 | PubChem | [72187](https://pubchem.ncbi.nlm.nih.gov/compound/72187) | Tang_2026, von_2009 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Blum_1988_reference](drugs/drug_zidovudine/Zidovudine_Blum1988_reference.md) | — | parent + metabolite (no model) | 5 | Blum MR et al., Pharmacokinetics and bioavailability of…, The American journal of med… (1988) | — |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Fauchet_2013_reference](drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Fauchet F et al., Population pharmacokinetics study of re…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.00911-13](https://doi.org/10.1128/AAC.00911-13) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Tang_2026_reference](drugs/drug_zidovudine/Zidovudine_Tang2026_reference.md) | — | general linear (no model) | 6 | Tang F et al., The study on the transport and phosphor…, Scientific reports (2026) | [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [von_2009_reference](drugs/drug_zidovudine/Zidovudine_von2009_reference.md) | — | general linear (no model) | 4 (+2 cov.) | von Kleist M et al., Pharmacokinetic-pharmacodynamic relatio…, European journal of pharmac… (2009) | [10.1016/j.ejps.2008.12.010](https://doi.org/10.1016/j.ejps.2008.12.010) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Capparelli_2003_2_Hb](drugs/drug_zidovudine/pd_Capparelli_2003_2_Hb.md) | hemoglobin ← zidovudine · direct linear effect | — | Capparelli EV et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | [10.1177/0091270002239821](https://doi.org/10.1177/0091270002239821) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [von_2009_RT](drugs/drug_zidovudine/pd_von_2009_RT.md) | Reverse transcription ← AZT-TP · inhibition effect | — | von Kleist M et al., Pharmacokinetic-pharmacodynamic relatio…, European journal of pharmac… (2009) | [10.1016/j.ejps.2008.12.010](https://doi.org/10.1016/j.ejps.2008.12.010) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_AZT](drugs/drug_zidovudine/pd_Tang_2026_AZT.md) | intracellular AZT ← AZT · direct linear effect | model (no simulator) | Tang F et al., The study on the transport and phosphor…, Scientific reports (2026) | [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_AZT_DP](drugs/drug_zidovudine/pd_Tang_2026_AZT_DP.md) | intracellular AZT-DP ← AZT · direct linear effect | model (no simulator) | Tang F et al., The study on the transport and phosphor…, Scientific reports (2026) | [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_AZT_MP](drugs/drug_zidovudine/pd_Tang_2026_AZT_MP.md) | intracellular AZT-MP ← AZT · direct linear effect | model (no simulator) | Tang F et al., The study on the transport and phosphor…, Scientific reports (2026) | [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tang_2026_AZT_TP](drugs/drug_zidovudine/pd_Tang_2026_AZT_TP.md) | intracellular AZT-TP ← AZT · direct linear effect | model (no simulator) | Tang F et al., The study on the transport and phosphor…, Scientific reports (2026) | [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:48 | 0:06 | 0/4/0 | 6/0/0 | 0/0/0 | 3,959/171 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 224 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Blum_1988 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics but does not investigate the effect of any gene variant or genotype on these parameters. |
| popPK | Bouazza_2015 | relevant | 9 | 2 | The paper reports a population pharmacokinetic model for zidovudine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, only the resulting dose ratios and risk assessments. |
| PGx | Bouazza_2015 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics and fixed-dose combination ratios in pediatric patients based on weight, with no mention of genetic variants or pharmacogenomic effects. |
| popPK | Capparelli_2003 | relevant | 10 | 2 | The paper reports a population pharmacokinetic model for zidovudine in preterm infants, but the specific numeric parameter values (e.g., CL, V) are not provided in the text, likely residing in tables or supplementary data. |
| PGx | Capparelli_2003 | not_relevant | 0 | 0 | The study analyzes non-genetic covariates (postnatal age, gestational age, renal function) on zidovudine pharmacokinetics and does not report any gene variant or genotype effects. |
| popPK | Capparelli_2003_2 | relevant | 10 | 2 | The study reports population PK for zidovudine but specific numeric parameter values (CL, V) are not explicitly listed in the provided abstract, likely residing in the full text or figures. |
| PGx | Capparelli_2003_2 | not_relevant | 0 | 0 | The study investigates population pharmacokinetics and pharmacodynamics based on age and clinical parameters, but does not report any effect of a specific gene variant or genotype on the PK/PD of zidovudine. |
| popPK | Cressey_2017 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of Nevirapine, while zidovudine is only mentioned as a co-administered drug in the dosing regimen. |
| PGx | Cressey_2017 | not_relevant | 0 | 0 | The study evaluates nevirapine PK and does not report pharmacogenomic effects on zidovudine. |
| PGx | Fauchet_2013 | not_relevant | 0 | 0 | The study focuses on population pharmacokinetics in children and identifies body weight as a covariate, but does not report any pharmacogenomic effects (gene variants) on ZDV PK parameters. |
| popPK | Hoetelmans_1996 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetic-pharmacodynamic relationships without providing original quantitative disposition parameters. |
| PGx | Hoetelmans_1996 | not_relevant | 0 | 0 | The text is a review focusing on concentration monitoring and PK-PD relationships, with no mention of genetic variants or pharmacogenomics. |
| popPK | Legrand_2003 | irrelevant | 1 | 0 | The study describes PK/PD modeling of an antiretroviral combination in HIV patients, but no specific quantitative PK parameter values (CL, V, etc.) for zidovudine are provided in the extracted evidence. |
| PGx | Legrand_2003 | not_relevant | 0 | 0 | The study investigates PK/PD modeling in HIV patients but does not report any association with genetic variants or genotypes. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a review of newer HIV reverse transcriptase inhibitors (approved after 2010); zidovudine is only mentioned as an older drug from 1987 and no specific pharmacokinetic parameters for zidovudine are reported in this paper. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper is a review of approved HIV reverse transcriptase inhibitors and does not report pharmacogenomic effects on PK or PD parameters for zidovudine. |
| popPK | Mirochnick_1999 | relevant | 9 | 1 | The paper describes a population pharmacokinetic analysis of zidovudine in infants using a two-compartment model, but the specific numeric parameter values (estimates for Vc, k10, etc.) are not present in the provided evidence, likely residing in tables or figures not included. |
| PGx | Mirochnick_1999 | not_relevant | 0 | 0 | The study analyzes the influence of demographic and clinical factors (age, weight, gender, race) on zidovudine pharmacokinetics but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Mishra_2024 | irrelevant | 0 | 0 | The paper studies Azithromycin (abbreviated AZT in the text), not Zidovudine, and focuses on ocular PK-PD in rabbits. |
| PGx | Mishra_2024 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics of combination drugs (including Azithromycin, abbreviated AZT, but not Zidovudine) in rabbits and contains no information on gene variants or genotypes. |
| popPK | Ohrui_2001 | irrelevant | 0 | 0 | The paper is a review of 4'-C-substituted deoxynucleosides and mentions zidovudine only as a comparator, without providing any quantitative pharmacokinetic parameters. |
| PGx | Ohrui_2001 | not_relevant | 0 | 0 | The paper describes the design and in vitro antiviral activity of 4'-C-substituted nucleosides, not the pharmacogenomics of zidovudine. |
| popPK | Schinazi_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for CS-92 (AzddMeC), a different drug, with zidovudine (AZT) serving only as a structural reference and comparator. |
| PGx | Schinazi_1990 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics and pharmacodynamics of a different compound (CS-92/AzddMeC), not zidovudine, and reports no pharmacogenomic effects. |
| PGx | Tang_2026 | not_relevant | 1 | 0 | The paper studies transport kinetics in a specific ethnic population (Chinese) and correlates PK with transporter protein expression levels, but it does not analyze genetic variants (genotypes) or phenotypes. |
| popPK | Tsirizani_2024 | irrelevant | 1 | 0 | The PK model and numeric parameters are for darunavir, while zidovudine is only a co-administered backbone drug. |
| popPK | Tucci_2023 | irrelevant | 0 | 0 | This in-vitro antiviral study reports activity of zidovudine derivatives, not zidovudine disposition parameters. |
| popPK | Vanhove_1997 | irrelevant | 2 | 0 | The study investigates exposure-response relationships for saquinavir (and zalcitabine), using zidovudine as a background co-administered agent rather than the subject of the PK parameter estimation; no specific numeric PK parameters (CL, V, etc.) for zidovudine are reported in the evidence. |
| PGx | Vanhove_1997 | not_relevant | 0 | 0 | The paper investigates exposure-response relationships for saquinavir, zidovudine, and zalcitabine but does not report any pharmacogenomic effects (gene variants, genotypes, or phenotypes) on PK or PD parameters. |
| popPK | Waalewijn_2024 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of dolutegravir, with zidovudine used only as a comparator backbone drug (in the 3TC/ZDV arm). |
| PGx | Waalewijn_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of dolutegravir and drug-drug interactions with zidovudine, but it does not investigate or report pharmacogenomic effects (gene variants) on the pharmacokinetics of zidovudine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the antiviral mechanism (binding to ACE2 and entry inhibition) in vitro and reports KD/EC50 values, not pharmacokinetic disposition parameters (CL, V, half-life). |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates antiviral mechanisms and ACE2 binding kinetics, not the influence of gene variants on the pharmacokinetics or pharmacodynamics of zidovudine. |
| PGx | von_2009 | not_relevant | 0 | 0 | The paper presents an in silico PBPK model of zidovudine and does not investigate gene variants or genotypes; it focuses on dosing schedules and viral dynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidovudine%5D&body=Drug%3A%20zidovudine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zidovudine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:47 UTC</sub>
