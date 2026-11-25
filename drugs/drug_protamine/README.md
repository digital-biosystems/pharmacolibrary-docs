<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;protamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Protamine_Butterworth2002_reference&quot;,&quot;label&quot;:&quot;Butterworth_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protamine/Protamine_Butterworth2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# protamine

- **generic name:** protamine
- **ATC codes:** `V03AB14`
- **DrugBank:** [DB13700](https://go.drugbank.com/drugs/DB13700) · **PubChem:** none
- **groups:** approved, investigational, withdrawn

## About

Protamine is a protein class classified as an antidote. It is given intravenously. Protamine is currently investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5449573](https://www.wikidata.org/wiki/Q5449573), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Butterworth_2002_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers, n = 18. [Run it in the simulator](drugs/drug_protamine/Protamine_Butterworth2002_reference.md?tab=Simulation) · [record](drugs/drug_protamine/Protamine_Butterworth2002_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Butterworth_2002_reference](drugs/drug_protamine/Protamine_Butterworth2002_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Butterworth J et al., The pharmacokinetics and cardiovascular…, Anesthesia and analgesia (2002) | [10.1097/00000539-200203000-00008](https://doi.org/10.1097/00000539-200203000-00008) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Lanoiselée_2026_reference](drugs/drug_protamine/Protamine_Lanoisele2026_reference.md) | — | general linear (no model) | 2 | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lanoiselée_2026_ACT](drugs/drug_protamine/pd_Lanoisel_e_2026_ACT.md) | activated clotting time ← unfractionated heparin (anti-Xa activity) · direct sigmoid Emax (Hill) effect | — | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:12 | 0:04 | 1/1/0 | 1/0/0 | 0/0/0 | 3,981/175 | einfracz / qwen3.8-27b | 5 | 5/0 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Sallami_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of unfractionated heparin, using a protamine titration assay only as a quantification method for heparin, not as the subject drug. |
| PGx | Al-Sallami_2016 | not_relevant | 0 | 0 | The study develops a PKPD model for unfractionated heparin and uses protamine only as part of the quantification assay; it does not report pharmacogenomic effects on protamine's PK/PD. |
| popPK | Bellvé_1992 | irrelevant | 0 | 0 | The study is a structural/molecular biology investigation of the mouse sperm nucleus involving the displacement of protamines from DNA, not a pharmacokinetic study of protamine as a drug. |
| PGx | Bellvé_1992 | not_relevant | 0 | 0 | The paper focuses on the physical structure of mouse sperm and the displacement of protamines by chemicals, not on human pharmacokinetics, pharmacodynamics, or gene-variant effects on drug response. |
| PGx | Butterworth_2002 | not_relevant | 0 | 0 | The study reports general pharmacokinetics in normal volunteers and a sex-based difference, but does not investigate genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Chang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of insulin analogs, not protamine, and reports parameters for insulin (Smax, SC50), not for protamine. |
| PGx | Chang_2025 | not_relevant | 0 | 0 | The study compares insulin analogs, not protamine, and reports no pharmacogenomic effects. |
| popPK | Jia_2015 | irrelevant | 0 | 0 | This is a population PK study of unfractionated heparin; protamine is only the neutralizing co-agent, with no protamine disposition parameters reported. |
| popPK | Kulesh_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of insulin aspart, where protamine is only part of the formulation (insulin aspart protamine), not the subject drug. |
| PGx | Kulesh_2022 | not_relevant | 0 | 0 | The paper models the pharmacokinetics of insulin aspart and biphasic insulin aspart 30/70, not protamine, and does not report any pharmacogenomic effects. |
| popPK | Miles_2021 | irrelevant | 2 | 1 | This is a clinical trial of protamine dosing guided by a heparin PK model; no protamine disposition parameters (CL, V, half-life) for protamine itself are reported. |
| popPK | Moreira-Ludewig_1992 | irrelevant | 0 | 0 | Protamine is used only as a C5a receptor antagonist/inhibitor in an in-vitro assay for lysozyme release, not as a subject drug for PK analysis. |
| PGx | Moreira-Ludewig_1992 | not_relevant | 0 | 0 | The paper reports an assay method and pharmacodynamic data for protamine as a C5a inhibitor, but contains no pharmacogenomic analysis of genetic variants. |
| popPK | Morris_2007 | irrelevant | 0 | 0 | The paper describes a simulation system for training and mentions protamine is included with a 3-compartment model, but no quantitative PK parameter values (CL, V, etc.) for protamine are reported in the evidence. |
| PGx | Morris_2007 | not_relevant | 0 | 0 | The paper describes a simulation system for cardiopulmonary bypass training and does not report any pharmacogenomic effects on protamine pharmacokinetics or pharmacodynamics. |
| popPK | Orescanin-Dusić_2009 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of action (uterine relaxation) of protamine in an in vitro rat model, not its pharmacokinetic parameters. |
| PGx | Orescanin-Dusić_2009 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of protamine on rat uterine smooth muscle (pharmacodynamics) but does not involve any gene variants or genotypes. |
| popPK | Raner_2024 | irrelevant | 1 | 0 | This is a meta-analysis of heparin/protamine dosing strategies for CPB outcomes; no protamine PK parameters (CL, V, half-life, compartmental model) are reported, only dose ratios and clinical outcomes. |
| popPK | Rüdiger_1999 | irrelevant | 0 | 0 | The study investigates the mechanism of protamine-induced calcium signaling in podocytes (in vitro/toxicology) and does not report any pharmacokinetic parameters. |
| PGx | Rüdiger_1999 | not_relevant | 0 | 0 | The study investigates the cellular mechanism of action of protamine on podocytes (calcium signaling) but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Saville_1993 | irrelevant | 0 | 0 | The study focuses on the mechanism of tyrosyl phosphorylation of calmodulin by the insulin receptor, using protamine only as a polybasic reagent to facilitate aggregation, not for pharmacokinetic evaluation. |
| PGx | Saville_1993 | not_relevant | 0 | 0 | The paper discusses protamine sulphate as a polybasic compound in a biochemical assay and does not report any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Tallant_1984 | irrelevant | 0 | 0 | The paper characterizes a bovine brain enzyme and lists protamine only as a dephosphorylation substrate, not as a drug subject to pharmacokinetic analysis. |
| PGx | Tallant_1984 | not_relevant | 0 | 0 | The paper characterizes a bovine brain enzyme where protamine is used as a substrate; it does not study pharmacogenomics of protamine as a drug in humans. |
| popPK | Tham_2017 | irrelevant | 0 | 0 | The study models the pharmacokinetics of insulin formulations (including those containing protamine as a stabilizer, such as NPH or lispro protamine suspensions), not protamine itself as the subject drug. |
| PGx | Tham_2017 | not_relevant | 0 | 0 | The paper focuses on insulin pharmacokinetics and mentions protamine only as part of insulin formulation names (NPH, lispro mix), with no analysis of protamine's PK/PD or any genetic variants. |
| popPK | Vespe_2024 | irrelevant | 0 | 0 | The study is a clinical quality improvement investigation regarding protamine dosing accuracy and bleeding outcomes, containing no pharmacokinetic modeling or quantitative disposition parameters (CL, V, t1/2) for protamine. |
| PGx | Vespe_2024 | not_relevant | 0 | 0 | The paper discusses protamine dosing strategies and clinical outcomes (bleeding) but contains no information regarding gene variants, genotypes, or pharmacogenomic effects on protamine pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprotamine%5D&body=Drug%3A%20protamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_protamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:11 UTC</sub>
