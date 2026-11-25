<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levomethadone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levomethadone_Gittel2021v2_reference&quot;,&quot;label&quot;:&quot;Gittel_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# levomethadone

- **generic name:** levomethadone
- **ATC codes:** `N07BC05`
- **DrugBank:** [DB13515](https://go.drugbank.com/drugs/DB13515) · **PubChem:** none
- **molar mass:** 309.453 g/mol (C21H27NO) — DrugBank
- **groups:** investigational

## About

Levomethadone is a synthetic opioid used for pain management and opioid maintenance therapy. It is administered via oral routes such as tablets, solutions, and syrups. It is marketed in Europe as an alternative to racemic methadone to avoid potential cardiotoxicity.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q6535776](https://www.wikidata.org/wiki/Q6535776), [Wikipedia](https://en.wikipedia.org/wiki/Levomethadone?oldid=1329026323) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| l-methadone | parent | 309.453 | C21H27NO | DrugBank | — | Gittel_2021_2, Sandbaumhüter_2021_2 |
| levomethadone | parent | 309.453 | C21H27NO | DrugBank | — | Gittel_2021_2, Sandbaumhüter_2021_2 |

## Start here

> **Gittel_2021_2_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> isoflurane-anaesthetized ponies. [Run it in the simulator](drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md?tab=Simulation) · [record](drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: cross_check_disputed</sub> | [Gittel_2021_2_reference](drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Gittel C et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2021) | [10.1016/j.vaa.2020.04.018](https://doi.org/10.1016/j.vaa.2020.04.018) |
| <span class="pk-rf" hidden data-species="horse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Casoni_2015_reference](drugs/drug_levomethadone/Levomethadone_Casoni2015_reference.md) | — | 2-compartment (no model) | 3 | Casoni D et al., Clinical and pharmacokinetic evaluation…, Acta veterinaria Scandinavi… (2015) | [10.1186/s13028-015-0112-4](https://doi.org/10.1186/s13028-015-0112-4) |
| <span class="pk-rf" hidden data-species="horse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Sandbaumhüter_2021_2_reference](drugs/drug_levomethadone/Levomethadone_Sandbaumhter20212_reference.md) | — | general linear (no model) | 15 | Sandbaumhüter FA et al., Stereoselective methadone disposition a…, Electrophoresis (2021) | [10.1002/elps.202100115](https://doi.org/10.1002/elps.202100115) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:01 | 0:04 | 1/2/0 | 0/0/0 | 0/0/0 | 3,105/146 | einfracz / qwen3.8-27b | 16 | 2/1 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baschirotto_2020 | irrelevant | 0 | 0 | The study is a clinical trial analyzing dose conversion ratios for opioid substitution treatment, not a pharmacokinetic study reporting disposition parameters for levomethadone. |
| PGx | Baschirotto_2020 | not_relevant | 0 | 0 | The study focuses on the clinical switching process and dosage conversion ratios between opioids, reporting no data on gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | Casoni_2015 | irrelevant | 0 | 0 | This is a population-PK study of S-ketamine/S-norketamine in horses; levomethadone (L-methadone) is only a co-administered sedative premedication, with no PK parameters for it. |
| PGx | Gittel_2021_2 | not_relevant | 0 | 0 | The study investigates the PK/PD of l-methadone in ponies under anesthesia and does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Onken_2017 | irrelevant | 1 | 0 | The paper is a clinical safety and efficacy study evaluating the tolerability of D,L-methadone in glioma patients; it does not report population pharmacokinetic parameters (CL, V, Q, ka) or a PK model, only isolated plasma concentrations in a single patient. |
| PGx | Onken_2017 | not_relevant | 0 | 0 | The paper evaluates the safety and efficacy of methadone in glioma patients but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Pfeifer_2023 | irrelevant | 2 | 0 | The study is a pharmacokinetic/pharmacodynamic TDM analysis correlating plasma levels with symptoms, but it does not report quantitative compartmental parameters (CL, V, half-life) or a population PK model for levomethadone. |
| PGx | Pfeifer_2023 | not_relevant | 0 | 0 | The study investigates therapeutic drug monitoring and correlates plasma levels with withdrawal symptoms, but it does not report any pharmacogenomic effects of gene variants on levomethadone PK or PD parameters. |
| PGx | Sandbaumhüter_2021_2 | not_relevant | 0 | 0 | The study investigates stereoselective pharmacokinetics in Shetland ponies and does not involve human gene variants or genotypes. |
| popPK | Schall_1996_2 | irrelevant | 5 | 0 | The study describes the pharmacokinetics of levomethadone in humans, but the provided evidence contains only qualitative descriptions and correlations without specific numeric parameter values (CL, V, etc.). |
| PGx | Schall_1996_2 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic and pharmacodynamic interactions with other drugs and liver function, but does not report any effects of genetic variants or genotypes. |
| popPK | Schoofs_2014 | irrelevant | 0 | 0 | The paper is a clinical survey regarding dosage and side effects, containing no pharmacokinetic parameters. |
| PGx | Schoofs_2014 | not_relevant | 0 | 0 | The paper is a clinical survey comparing dosage and side effects of methadone vs. levomethadone and does not investigate the influence of genetic variants on PK or PD parameters. |
| popPK | Staak_1993 | irrelevant | 0 | 0 | The paper reports clinical observation of plasma levels in a treatment program without quantitative PK parameters (CL, V, etc.) or a PK model. |
| PGx | Staak_1993 | not_relevant | 0 | 0 | The paper discusses plasma levels and drug use but does not report any genetic variants or pharmacogenomic effects on PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevomethadone%5D&body=Drug%3A%20levomethadone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levomethadone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 23:58 UTC</sub>
