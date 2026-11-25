<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;Hyperici herba&quot;}]"></div>

# Hyperici herba

- **generic name:** Hyperici herba
- **ATC codes:** `N06AX25`
- **DrugBank:** [DB01323](https://go.drugbank.com/drugs/DB01323) · **PubChem:** none
- **groups:** approved, investigational, nutraceutical

## About

St. John's wort is a plant-based antidepressant used to treat mild to moderate depression. It is usually taken orally in capsule, tablet, or liquid form, though it can also be applied topically. This substance is authorized for use in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q158289](https://www.wikidata.org/wiki/Q158289), [Wikipedia](https://en.wikipedia.org/wiki/Hypericum_perforatum?oldid=1375575520) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="unknown" data-status="" data-sim="no"></span><span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>stale — current check: </sub> | [Biber_1998_reference](drugs/drug_hyperici_herba/HypericiHerba_Biber1998_reference.md) | — | — (no model) | 0 | Biber A et al., Oral bioavailability of hyperforin from…, Pharmacopsychiatry 31 Suppl (1998) | [10.1055/s-2007-979344](https://doi.org/10.1055/s-2007-979344) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:42 | 0:04 | 0/0/1 | 0/0/0 | 0/0/0 | 3,937/164 | einfracz / qwen3.8-27b | 3 | 3/0 | 1/2 | 0 |

## Coverage

- **PubMed hits:** 183 matched, 15 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alahmad_2022 | irrelevant | 0 | 0 | The paper is an in-vitro phytochemical study identifying compounds in plant extracts via HPLC-MS, containing no pharmacokinetic data, clearance, volume, or half-life measurements. |
| PD | Alahmad_2022 | not_relevant | 0 | 0 | The paper focuses on the chemical identification of constituents and their in vitro antioxidant activities, not on pharmacokinetic or pharmacodynamic modeling in biological systems. |
| PGx | Alahmad_2022 | not_relevant | 0 | 0 | The paper focuses on the chemical identification and antioxidant activity of Hypericum perforatum extracts, not on pharmacogenomics or pharmacokinetic/pharmacodynamic parameters. |
| PGx | Biber_1998 | not_relevant | 0 | 1 | The paper reports general pharmacokinetic parameters of hyperforin in rats and healthy volunteers but does not investigate or report any specific gene variants, genotypes, or phenotypes affecting these parameters. |
| popPK | Boyle_2024 | irrelevant | 0 | 0 | The paper is a nursing review discussing St. John's Wort (hyperici_herba) in cancer care and lacks specific quantitative pharmacokinetic parameter values (CL, V, etc.) required for extraction. |
| PGx | Boyle_2024 | not_relevant | 0 | 0 | The paper is a nursing review discussing general interactions and toxicity of St. John's wort in cancer care, with no focus on pharmacogenomic effects. |
| popPK | Cheng_2023 | irrelevant | 2 | 0 | This is a review article summarizing mechanisms of herb-drug interactions without providing original quantitative pharmacokinetic parameter values for hyperici_herba (St. John's wort). |
| PGx | Cheng_2023 | not_relevant | 0 | 0 | The paper is a general review of herb-drug interactions and does not report pharmacogenomic effects of hyperici_herba. |
| popPK | Dimpfel_1997 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (EEG changes) in rats, not pharmacokinetic parameters (CL, V, ka) for hyperici_herba. |
| PD | Dimpfel_1997 | not_relevant | 2 | 0 | The paper describes qualitative EEG changes (delta/alpha waves) and trends in discriminant analysis but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) that can be extracted. |
| PGx | Dimpfel_1997 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects (EEG changes) in rats but contains no pharmacogenomic data regarding gene variants or genotypes. |
| popPK | Goey_2014 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of docetaxel in the presence of St. John's wort as an interaction perpetrator, rather than reporting quantitative disposition parameters for St. John's wort itself. |
| PGx | Goey_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (St John's Wort affecting docetaxel PK), not a pharmacogenomic effect of a gene variant on the PK/PD of hyperici_herba (St John's Wort). |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | The paper is a review of clinical interactions and case reports for various herbal medicines (including St John's Wort/hyperici_herba) and prescribed drugs, but it does not report quantitative population-pharmacokinetic parameters (CL, V, etc.) for hyperici_herba itself. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports clinical case series of herb-drug interactions (e.g., St John's wort and Ciclosporin) involving environmental induction of enzymes, not specific gene variants/genotypes altering PK/PD. |
| popPK | Kladar_2020 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| PD | Kladar_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and antioxidant assays for various Hypericum samples, but does not contain any pharmacokinetic (PK) data, exposure-response analysis, or pharmacodynamic (PD) modeling. |
| PGx | Kladar_2020 | not_relevant | 0 | 0 | The paper characterizes the chemical composition and biological activity of *Hypericum* samples from different geographical origins but does not study human pharmacokinetics, pharmacodynamics, or the influence of genetic variants on the response to the drug. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | The paper is a review of beta-blocker interactions and does not report quantitative PK parameters for hyperici_herba (St. John's Wort). |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper discusses drug-herb interactions involving St. John's Wort (Hypericum) and beta-blockers, but it is a general review of pharmacokinetic and pharmacodynamic interactions, not a pharmacogenomic study reporting specific genotype effects on parameters. |
| popPK | Mohammadinia_2018 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of the probe drug Technetium-99-sesamibi (Tc-MIBI) in the presence of St. John's Wort (Hyperici Herba), rather than measuring the pharmacokinetic parameters of St. John's Wort itself. |
| PGx | Mohammadinia_2018 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (St. John's Wort inducing P-gp to alter Tc-99m Sestamibi kinetics), not a pharmacogenomic effect (gene variant/genotype) on the pharmacokinetics of hyperici_herba itself. |
| popPK | Neagoe_2004 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the interaction of the extract with artificial lipid bilayers, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Neagoe_2004 | not_relevant | 0 | 0 | The study investigates the effect of Hyperici herba on artificial lipid bilayers in vitro and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Nicolussi_2020 | irrelevant | 1 | 0 | A review of SJW's interactions with OTHER drugs; no PK parameters for hyperici_herba itself and no numeric values present. |
| popPK | Staffeldt_1994 | irrelevant | 2 | 6 | The study measures the pharmacokinetics of the constituents hypericin and pseudohypericin, not the extract itself as a whole, and does not report specific values for clearance, volume of distribution, or absorption rate constants. |
| PGx | Staffeldt_1994 | not_relevant | 0 | 0 | The study investigates the general pharmacokinetics of hypericin and pseudohypericin in healthy volunteers but does not report any pharmacogenomic effects based on gene variants. |
| popPK | Tan_2021 | irrelevant | 0 | 0 | The paper is a systematic review of warfarin interactions and does not report original quantitative pharmacokinetic parameters for hyperici_herba (St. John's Wort) as the subject drug. |
| PGx | Tan_2021 | not_relevant | 0 | 0 | The paper is a systematic review on drug-herb interactions and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Wise_2019 | irrelevant | 0 | 0 | The study is an in silico prediction of phytochemical absorption times and does not report actual quantitative pharmacokinetic parameters (e.g., CL, V, ka) from experimental data. |
| PGx | Wise_2019 | not_relevant | 0 | 0 | The paper focuses on general pharmacokinetic modeling of phytochemicals in Hypericum perforatum and does not report any pharmacogenomic effects of genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhyperici_herba%5D&body=Drug%3A%20hyperici_herba%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hyperici_herba/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:41 UTC</sub>
