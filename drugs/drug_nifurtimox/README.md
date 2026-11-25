<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;nifurtimox&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifurtimox_Boberg2025_reference&quot;,&quot;label&quot;:&quot;Boberg_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nifurtimox/Nifurtimox_Boberg2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nifurtimox

- **generic name:** nifurtimox
- **ATC codes:** `P01CC01`
- **DrugBank:** [DB11820](https://go.drugbank.com/drugs/DB11820) · **PubChem:** [CID 6842999](https://pubchem.ncbi.nlm.nih.gov/compound/6842999)
- **molar mass:** 287.29 g/mol (C10H13N3O5S) — DrugBank
- **groups:** approved, investigational

## About

It is given by mouth.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411582](https://www.wikidata.org/wiki/Q411582), [Wikipedia](https://en.wikipedia.org/wiki/Nifurtimox?oldid=1380256740) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Boberg_2025_reference](drugs/drug_nifurtimox/Nifurtimox_Boberg2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Boberg M et al., Pharmacokinetics of Racemic Eflornithin…, The AAPS journal (2025) | [10.1208/s12248-025-01123-9](https://doi.org/10.1208/s12248-025-01123-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Garcia-Bournissen_2010_reference](drugs/drug_nifurtimox/Nifurtimox_GarciaBournissen2010_reference.md) | — | 1-compartment (no model) | 0 | Garcia-Bournissen F et al., Is use of nifurtimox for the treatment…, Archives of disease in chil… (2010) | [10.1136/adc.2008.157297](https://doi.org/10.1136/adc.2008.157297) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cortes_2015_MTT](drugs/drug_nifurtimox/pd_Cortes_2015_MTT.md) | T. cruzi trypomastigote viability (MTT reduction) ← nifurtimox · direct sigmoid Emax (Hill) effect | — | Cortes LA et al., Novel Gallate Triphenylphosphonium Deri…, PloS one (2015) | [10.1371/journal.pone.0136852](https://doi.org/10.1371/journal.pone.0136852) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:24 | 0:04 | 0/2/0 | 1/0/0 | 0/0/0 | 3,679/177 | einfracz / qwen3.8-27b | 9 | 3/6 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 17 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-Vega_2021 | irrelevant | 3 | 0 | This is a trial design/rationale paper for the TESEO study; popPK parameters (CL, Vd) for nifurtimox are only planned, with no numeric values reported. |
| popPK | Amilon_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic time-to-event model of eflornithine efficacy; nifurtimox is only a co-administered drug in the NECT arm, with no nifurtimox PK parameters reported. |
| popPK | Ballesteros-Casallas_2023 | irrelevant | 0 | 0 | This is an in vitro mechanistic and structure-activity relationship (QSAR) study evaluating trypanocidal potency (EC50), not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for nifurtimox. |
| PGx | Ballesteros-Casallas_2023 | not_relevant | 0 | 0 | The paper describes the mode of action and structure-activity relationships of p-quinone derivatives against trypanosomes, with no mention of pharmacogenomics, gene variants, or pharmacokinetic parameters. |
| popPK | Boberg_2025 | irrelevant | 0 | 0 | This is a PK model of eflornithine (L/D enantiomers); nifurtimox is only a co-administered combination partner with no nifurtimox disposition parameters reported. |
| popPK | Cortes_2015 | irrelevant | 0 | 0 | In vitro trypanocidal efficacy study of gallate TPP+ derivatives; nifurtimox is only a comparator (EC50), no PK parameters. |
| popPK | Garcia-Bournissen_2010 | relevant | 8 | 2 | The paper is a population pharmacokinetic study using NONMEM to model nifurtimox disposition, but the evidence only provides a single peak plasma concentration (1361 ng/ml) and does not explicitly list the estimated CL, V, or other specific PK parameter values derived from the model. |
| PGx | Garcia-Bournissen_2010 | not_relevant | 0 | 0 | The study focuses on population pharmacokinetics for breastfeeding exposure and does not investigate gene variants or pharmacogenomic effects. |
| popPK | Ince_2022 | relevant | 10 | 3 | The paper is a population PK study of nifurtimox in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the text, only a relative clearance estimate and covariates. |
| PGx | Ince_2022 | not_relevant | 0 | 0 | The study analyzes standard population pharmacokinetics (weight, age, food) and reports no gene variants or pharmacogenomic effects. |
| popPK | Matutino_2019 | irrelevant | 0 | 0 | This is an in-vitro natural-product enzyme-inhibition study of T. cruzi sirtuins; nifurtimox is only mentioned as background, with no PK parameters. |
| popPK | Nesic_2023 | irrelevant | 0 | 0 | In vitro/in silico study of imatinib analogues against T. cruzi; nifurtimox only mentioned as existing treatment, no PK parameters. |
| popPK | Paulos_1989 | relevant | 5 | 0 | The study describes a PK evaluation of nifurtimox in humans and lists the parameters calculated, but the specific numeric values are not provided in the extracted text. |
| PGx | Paulos_1989 | not_relevant | 0 | 0 | The study reports general pharmacokinetics in healthy volunteers without investigating any genetic variants or pharmacogenomic effects. |
| popPK | Peres_2023 | irrelevant | 0 | 0 | This is an in vitro/in silico antiparasitic study of plumbagin; nifurtimox is only mentioned as a reference treatment, with no PK parameters for it (the stray clearance line is not nifurtimox-related). |
| popPK | Silva_2023 | irrelevant | 0 | 0 | This is a natural-products isolation/antiparasitic activity study; nifurtimox is only mentioned as an existing drug, with no PK parameters reported. |
| popPK | Stass_2022 | relevant | 7 | 4 | Pediatric popPK exposure-response analysis of nifurtimox; some AUC/Cmax values (e.g., 1688–3573 µg·h/L reference range) appear, but model parameters (CL, V) live in the cited prior popPK paper/supplementary material. |
| popPK | Toro_2021 | irrelevant | 0 | 0 | The paper is a chemical synthesis and in vitro antiparasitic activity study where nifurtimox serves only as a comparator standard; no pharmacokinetic parameters are reported. |
| PGx | Toro_2021 | not_relevant | 0 | 0 | The paper reports in vitro antiparasitic activity and stability of new compounds compared to nifurtimox, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of benznidazole's mechanism of action, with nifurtimox only mentioned as a standard comparator in the background. |
| PGx | de_2021 | not_relevant | 0 | 0 | The paper evaluates the pharmacological efficacy and inflammatory modulation of benznidazole in an in vitro model, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of nifurtimox. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnifurtimox%5D&body=Drug%3A%20nifurtimox%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nifurtimox/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:24 UTC</sub>
