<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) succimer&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Technetium99mtcSuccimer_Storgaard2026v2_reference&quot;,&quot;label&quot;:&quot;Storgaard_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# technetium (99mTc) succimer

- **generic name:** technetium (99mTc) succimer
- **ATC codes:** `V09CA02`
- **DrugBank:** [DB09436](https://go.drugbank.com/drugs/DB09436) · **PubChem:** none
- **groups:** approved

## About

Technetium 99mtc succimer is a diagnostic radiopharmaceutical used for imaging the kidneys.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium-99m DMSA (technetium_99mtc_succimer) (technetium_99mtc_succimer) | metabolite | 477.415 | C8H12O9S4Tc+3 | PubChem | [134694302](https://pubchem.ncbi.nlm.nih.gov/compound/134694302) | Plyku_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Gracia_2025_reference](drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Gracia2025_reference.md) | — | 1-compartment (no model) | 2 | Gracia M et al., A population pharmacokinetic approach t…, Pediatric nephrology (Berli… (2025) | [10.1007/s00467-025-06828-9](https://doi.org/10.1007/s00467-025-06828-9) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Plyku_2021_reference](drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Plyku2021_reference.md) | — | 1-compartment (no model) | 0 | Plyku D et al., Renal 99mTc-DMSA pharmacokinetics in pe…, EJNMMI physics (2021) | [10.1186/s40658-021-00401-7](https://doi.org/10.1186/s40658-021-00401-7) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Storgaard_2026_2_reference](drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Storgaard IK et al., Population pharmacokinetic modelling re…, British journal of clinical… (2026) | [10.1002/bcp.70284](https://doi.org/10.1002/bcp.70284) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:35 | 0:03 | 0/3/0 | 0/0/0 | 0/0/0 | 3,945/178 | einfracz / qwen3.8-27b | 13 | 2/11 | 12/1 | 0 |

## Coverage

- **PubMed hits:** 70 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakirtas_2009 | irrelevant | 0 | 0 | The study uses (99m)Tc-DMSA (a different radiopharmaceutical than Tc-99mTc succimer) as a diagnostic imaging agent to assess renal function, not as a subject of pharmacokinetic modeling. |
| PGx | Bakirtas_2009 | not_relevant | 0 | 0 | The paper evaluates surgical outcomes using a radiotracer and does not report any pharmacogenomic effects. |
| popPK | Chan_2016 | irrelevant | 1 | 0 | 99mTc-DMSA is used only as a renal imaging agent, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Chaves_2010 | irrelevant | 1 | 0 | 99mTc-succimer is used only for diagnostic scintigraphy, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The paper describes a statistical framework for evaluating diagnostic devices and does not report pharmacokinetic parameters for technetium_99mtc_succimer. |
| PGx | Cui_2025 | not_relevant | 0 | 0 | The paper discusses a statistical framework for evaluating diagnostic device reliability using nuclear medicine images, and contains no information regarding pharmacogenomics or pharmacokinetics of technetium_99mtc_succimer. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | This review reports no pharmacokinetic parameters for technetium-99m succimer; the numeric values concern other radionuclides. |
| popPK | Funeh_2025 | irrelevant | 0 | 0 | This studies technetium-99m-labeled antibody fragments in mice, not technetium-99m succimer, and reports no quantitative PK disposition parameters. |
| popPK | Gracia_2025 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters for 99mTc-DTPA, not technetium-99m succimer. |
| popPK | Hooper_2025 | irrelevant | 0 | 0 | The study models iohexol and iopamidol, while technetium-99m agents are only mentioned as other filtration markers. |
| popPK | Jouret_2010 | irrelevant | 0 | 0 | The study uses 99mTc-DMSA and 99mTc-MAG3 as diagnostic imaging tracers for renal function in mice, not as subjects for pharmacokinetic parameter extraction (CL, V, etc.). |
| PGx | Jouret_2010 | not_relevant | 0 | 0 | The paper evaluates renal function in mice using various SPECT tracers but does not report pharmacogenomic effects (e.g., gene variants) on the PK or PD of 99mTc-succimer specifically. |
| popPK | Kaikousidis_2023 | irrelevant | 0 | 0 | The paper models Tc99m-tetrofosmin, not succimer; parameter estimates are not readable here and some data are referenced in supplementary tables. |
| popPK | Lee_2009 | irrelevant | 0 | 0 | The study investigates (99m)Tc-DMSA, a different radiopharmaceutical, rather than the target drug technetium-99mtc_succimer. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The text consists solely of a list of gene variants and rsIDs with no mention of technetium_99mtc_succimer or any pharmacokinetic/pharmacodynamic data. |
| popPK | Rajic_2007 | irrelevant | 1 | 1 | The study uses a different radiotracer (Tc-99m-DMSA) to assess renal function and does not report pharmacokinetic parameters for technetium-99mtc-succimer. |
| PGx | Rajic_2007 | not_relevant | 0 | 0 | The paper does not report on the impact of a gene variant on the pharmacokinetics of technetium_99mtc_succimer. |
| popPK | Rajić_2002 | irrelevant | 0 | 0 | The study investigates the biodistribution of Technetium-99m DMSA (dimercapto-succimer), not Technetium-99m succimer, which is a distinct radiopharmaceutical, and it does not report compartmental PK parameters (CL, V, t1/2) for the target drug. |
| PGx | Rajić_2002 | not_relevant | 0 | 0 | The study investigates biodistribution changes due to glomerulonephritis pathology, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Samad_2007 | irrelevant | 0 | 0 | The paper investigates renal scarring using technetium-99m dimercaptosuccinic acid as a diagnostic imaging agent, not pharmacokinetic parameters of technetium_99mtc_succimer. |
| PGx | Samad_2007 | not_relevant | 0 | 0 | The paper investigates renal damage from percutaneous nephrolithotomy in children using Tc-99m DMSA as an imaging agent and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Spiliotopoulou_2024 | irrelevant | 0 | 0 | DMSA is only a reference comparator; no quantitative disposition parameters for technetium-99m succimer are reported. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The study models gentamicin, while 99mTc-DTPA is only used to measure GFR; no succimer PK values are reported. |
| popPK | Storgaard_2026_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of THC and its metabolite, not technetium-99mtc succimer. |
| PGx | Storgaard_2026_2 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of THC, not technetium_99mtc_succimer, and does not report pharmacogenomic effects. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The paper is a review on gold nanoclusters and does not contain pharmacokinetic data for technetium_99mtc_succimer. |
| PGx | Sun_2025 | not_relevant | 0 | 0 | The paper is a review on gold nanoclusters and does not discuss pharmacogenomics or technetium_99mtc_succimer. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_succimer%5D&body=Drug%3A%20technetium_99mtc_succimer%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_succimer/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 15:44 UTC</sub>
