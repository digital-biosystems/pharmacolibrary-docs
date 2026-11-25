<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;quazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quazepam_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quazepam/Quazepam_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# quazepam

- **generic name:** quazepam
- **ATC codes:** `N05CD10`
- **DrugBank:** [DB01589](https://go.drugbank.com/drugs/DB01589) · **PubChem:** [CID 4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999)
- **molar mass:** 386.794 g/mol (C17H11ClF4N2S) — DrugBank
- **groups:** approved, illicit

## About

Quazepam is a benzodiazepine derivative used to treat insomnia and sleep disorders. It is administered orally in tablet form. It is approved for medical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3927403](https://www.wikidata.org/wiki/Q3927403), [Wikipedia](https://en.wikipedia.org/wiki/Quazepam?oldid=1373108225) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quazepam | parent | 386.794 | C17H11ClF4N2S | DrugBank | [4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999) | Hilbert_1984, Hilbert_1984_2 |
| 2-oxoquazepam | metabolite | 370.73 | C17H11ClF4N2O | PubChem | [93250](https://pubchem.ncbi.nlm.nih.gov/compound/93250) | Hilbert_1984 |
| N-desalkyl-2-oxoquazepam | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Hilbert_1984_2_reference](drugs/drug_quazepam/Quazepam_Hilbert1984v2_reference.md) | — | 1-compartment (no model) | 1 | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Cha_2024_reference](drugs/drug_quazepam/Quazepam_Cha2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cha HJ et al., Development of a Web Application for Si…, Pharmaceutics (2024) | [10.3390/pharmaceutics16050689](https://doi.org/10.3390/pharmaceutics16050689) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chung_1984_reference](drugs/drug_quazepam/Quazepam_Chung1984_reference.md) | — | general linear (no model) | 0 | Chung M et al., Multiple-dose quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.70](https://doi.org/10.1038/clpt.1984.70) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hilbert_1984_reference](drugs/drug_quazepam/Quazepam_Hilbert1984_reference.md) | — | general linear (no model) | 4 | Hilbert JM et al., Quazepam kinetics in the elderly, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.220](https://doi.org/10.1038/clpt.1984.220) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:49 | 0:03 | 1/3/0 | 0/0/0 | 0/0/0 | 3,715/153 | einfracz / qwen3.8-27b | 3 | 2/1 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 50 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ankier_1988 | irrelevant | 2 | 0 | This is a review article that cites a range for the half-life (27-41 hours) but lacks the compartmental parameters (CL, V, Q) or original PK model data required for population pharmacokinetic extraction. |
| PGx | Ankier_1988 | not_relevant | 0 | 0 | The paper provides a general pharmacokinetic and pharmacodynamic review of quazepam but does not mention any genetic variants or pharmacogenomic effects. |
| popPK | Arnold_1991 | irrelevant | 0 | 0 | The text describes in vitro lipophilicity studies and discusses pharmacodynamic concepts, but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for quazepam. |
| PGx | Arnold_1991 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetic principles of benzodiazepines and lipophilicity, but does not report any genetic variants or pharmacogenomic effects on quazepam parameters. |
| popPK | Cha_2024 | irrelevant | 0 | 0 | This is a population PK study of zolpidem; quazepam is only mentioned as a comparator benzodiazepine with no quazepam parameters. |
| popPK | Chung_1984 | relevant | 10 | 3 | The study reports PK parameters for quazepam, but the evidence only lists half-lives and model descriptions, lacking the specific numeric values for clearance, volume, or intercompartmental clearance. |
| PGx | Chung_1984 | not_relevant | 0 | 0 | The paper reports multiple-dose pharmacokinetics of quazepam in normal subjects but does not investigate any gene variants or pharmacogenomic factors. |
| popPK | Fujimiya_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethanol in rabbits, not quazepam. |
| PGx | Fujimiya_1995 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of ethanol in rabbits and does not mention quazepam or any pharmacogenomic factors. |
| popPK | Fukasawa_2007 | irrelevant | 0 | 0 | The paper is a review discussing the general effects of CYP polymorphisms on benzodiazepines and does not report original quantitative pharmacokinetic parameters for quazepam. |
| PGx | Fukasawa_2007 | not_relevant | 7 | 0 | The paper is a narrative review discussing the effects of CYP2C19 polymorphism on quazepam PK, but it does not present original data, tables, or specific quantitative effect sizes from a fitted model. |
| popPK | Hara_2005 | irrelevant | 0 | 0 | The study is an in-vitro inhibition assay of mexiletine metabolism where quazepam serves only as a potential inhibitor, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Hara_2005 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interactions affecting mexiletine metabolism, with no focus on pharmacogenomic variants or PK/PD effects for quazepam. |
| PGx | Hilbert_1984 | not_relevant | 0 | 0 | The study investigates the effect of age on quazepam kinetics, not the effect of a specific gene variant or genotype. |
| PGx | Hilbert_1984_2 | not_relevant | 0 | 0 | The study investigates the effect of sleep state (time of dosing) on quazepam kinetics, not the effect of a genetic variant or genotype. |
| popPK | Hilbert_1991 | irrelevant | 0 | 0 | The provided text is an abstract or summary discussing pharmacokinetic properties generally but contains no quantitative parameter values (CL, V, t1/2) or specific PK model data. |
| PGx | Hilbert_1991 | not_relevant | 0 | 0 | The paper compares the pharmacokinetic and pharmacodynamic properties of quazepam and flurazepam but does not report on the impact of specific gene variants or genotypes. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | The paper is a review of herbal medicine-drug interactions and does not contain pharmacokinetic data for quazepam. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports interactions between herbal medicines and prescribed drugs, but it does not mention quazepam or any pharmacogenomic effects. |
| popPK | Jochemsen_1984 | irrelevant | 1 | 0 | The paper is a review of benzodiazepine pharmacokinetics without original quantitative parameter values for quazepam in the provided evidence. |
| PGx | Jochemsen_1984 | not_relevant | 0 | 0 | The paper is a general review of benzodiazepine pharmacokinetics and metabolism, mentioning quazepam only to note its active metabolites, without reporting any genetic variants or pharmacogenomic effects. |
| popPK | Kales_1981 | irrelevant | 0 | 0 | The paper reports clinical efficacy and side effects (dose-response in insomnia) but contains no pharmacokinetic parameters (CL, V, t1/2) for quazepam. |
| PGx | Kales_1981 | not_relevant | 0 | 0 | The paper reports dose-response effects of quazepam but contains no pharmacogenomic data regarding gene variants or genotypes. |
| popPK | Kawaguchi_2004 | irrelevant | 2 | 0 | The study reports only summary exposure metrics (Cmax, AUC differences) for a drug interaction study, lacking the specific disposition parameters (CL, V, ka, half-life) or compartmental/population PK model values required. |
| PGx | Kawaguchi_2004 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (St. John's Wort vs. quazepam), not a pharmacogenomic effect caused by a specific gene variant/genotype. |
| popPK | Lader_1992 | irrelevant | 0 | 0 | The paper is a review focusing on rebound insomnia and does not report quantitative pharmacokinetic parameters for quazepam. |
| PGx | Lader_1992 | not_relevant | 0 | 0 | The paper discusses the clinical efficacy and rebound insomnia of quazepam, not the effects of gene variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Liu_2025 | irrelevant | 2 | 0 | The study focuses on a methodological approach to improve stomach solubilization modeling in a pharmacokinetic simulation for quazepam, but the provided evidence contains no quantitative disposition parameters (CL, V, ka, etc.) or specific numeric PK values. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper discusses modeling of stomach pH and solubilization on food effects for quazepam, not pharmacogenomic effects. |
| popPK | Martinez_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy/safety trial for insomnia that does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Martinez_1982 | not_relevant | 0 | 0 | The paper is a clinical trial assessing the efficacy and safety of quazepam in geriatric patients but does not report any pharmacogenomic analysis or the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Miura_2004 | irrelevant | 1 | 0 | The study is explicitly in vitro and reports Ki values for enzyme inhibition, not in vivo disposition parameters (CL, V, ka) for quazepam. |
| PGx | Miura_2004 | not_relevant | 0 | 0 | The study examines in vitro drug metabolism and enzyme inhibition by itraconazole, but does not report any pharmacogenomic effects (gene variants/genotypes) on quazepam's PK or PD parameters. |
| popPK | Nakamura_2004 | irrelevant | 1 | 0 | The study investigates the effect of quazepam on balance, and while it measures blood concentrations, it does not report quantitative pharmacokinetic parameters like clearance, volume of distribution, or a compartmental model for quazepam. |
| PGx | Nakamura_2004 | not_relevant | 0 | 0 | The study investigates pharmacokinetics and pharmacodynamics (balance) of quazepam but does not assess any genetic or pharmacogenomic influences on these parameters. |
| popPK | Otani_2003 | irrelevant | 0 | 0 | The text is a general review of CYP3A4 metabolism mechanisms and does not report any quantitative pharmacokinetic parameters for quazepam. |
| PGx | Otani_2003 | not_relevant | 0 | 0 | The paper discusses CYP3A4 inhibition and induction by co-medications but does not report specific effects of gene variants (pharmacogenomics) on quazepam's PK/PD parameters. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | The paper is a population PK-PD study of ibandronate, not quazepam. |
| PGx | Pillai_2004 | not_relevant | 0 | 0 | The paper focuses on the PK-PD modeling of ibandronate and does not mention quazepam or any pharmacogenomic effects. |
| popPK | Schaffler_1989 | irrelevant | 2 | 0 | The study discusses pharmacokinetics but the provided text contains no quantitative PK parameter values (CL, V, etc.), only qualitative descriptions of steady-state attainment. |
| PGx | Schaffler_1989 | not_relevant | 0 | 0 | The study reports PK/PD of quazepam in healthy volunteers but does not investigate genetic variants or pharmacogenomics. |
| popPK | Scharf_1993 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing sleep quality and subjective effectiveness, not a pharmacokinetic study, and it reports no quantitative disposition parameters for quazepam. |
| PGx | Scharf_1993 | not_relevant | 0 | 0 | The paper reports on clinical efficacy and sleep patterns of quazepam in insomnia patients but does not mention any genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Sharma_2017 | irrelevant | 0 | 0 | The paper studies the toxicological effects of anti-tuberculosis drugs in rats and contains no pharmacokinetic data for quazepam. |
| PGx | Sharma_2017 | not_relevant | 0 | 0 | The paper studies the toxicity of anti-TB drugs on rats and does not mention quazepam, gene variants, or pharmacogenomics. |
| popPK | Sugimoto_2006 | relevant | 5 | 2 | The study measures quazepam pharmacokinetics (AUC changes) in humans, but specific numeric parameter values (like absolute CL or V) are not explicitly listed, only percentage changes in AUC. |
| PGx | Sugimoto_2006 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (grapefruit juice) rather than a pharmacogenomic effect involving gene variants or genotypes. |
| popPK | Tietz_1981 | irrelevant | 1 | 0 | The study focuses on clinical efficacy and sleep staging parameters rather than quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| PGx | Tietz_1981 | not_relevant | 0 | 0 | The paper investigates dose-response effects of quazepam on sleep in chronic insomniacs but does not report any genetic variants or pharmacogenomic data. |
| popPK | Wang_2003 | irrelevant | 2 | 0 | The paper is a review of sedative hypnotics including quazepam, but the provided evidence contains only the abstract/introductory text and no specific quantitative pharmacokinetic parameter values. |
| PGx | Wang_2003 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetics and drug interactions for sedative hypnotics, but it does not report any pharmacogenomic effects (gene variants/genotypes) on quazepam parameters. |
| popPK | Wettstein_1988 | irrelevant | 0 | 0 | The paper reports behavioral effects (suppressed responding) of quazepam in monkeys and does not contain any pharmacokinetic parameters or disposition data. |
| PGx | Wettstein_1988 | not_relevant | 0 | 0 | The paper describes behavioral pharmacology in animal models (monkeys) and does not report pharmacogenomic effects or human PK/PD parameter changes linked to genetic variants. |
| popPK | Yamazaki_2007 | relevant | 7 | 3 | The study is a pharmacokinetic analysis of quazepam in humans, but the evidence only provides summary statistics (Cmax, AUC) and fold-changes, lacking explicit values for disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| PGx | Yamazaki_2007 | not_relevant | 0 | 0 | The study assesses the effect of food on pharmacokinetics, not the effect of genetic variants. |
| popPK | Yasui-Furukori_2003 | relevant | 9 | 2 | The study reports quantitative PK data (Cmax, AUC ratios) for quazepam, but specific absolute values (e.g., ng/mL) or derived clearance/volume parameters are not explicitly stated in the text, likely residing in tables not provided. |
| PGx | Yasui-Furukori_2003 | not_relevant | 0 | 0 | The paper investigates the effect of food intake on quazepam pharmacokinetics, not the effect of genetic variants. |
| popPK | Zheng_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis focused on pharmacodynamic efficacy (sleep outcomes) for insomnia, not a pharmacokinetic study reporting disposition parameters for quazepam. |
| PGx | Zheng_2020 | not_relevant | 0 | 0 | The paper compares the efficacy of insomnia drugs based on population-level pharmacodynamic models but does not report any pharmacogenomic analysis or gene variant-specific effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquazepam%5D&body=Drug%3A%20quazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:45 UTC</sub>
