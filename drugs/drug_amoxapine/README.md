<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amoxapine&quot;}]"></div>

# amoxapine

- **generic name:** amoxapine
- **ATC codes:** `N06AA17`
- **DrugBank:** [DB00543](https://go.drugbank.com/drugs/DB00543) · **PubChem:** [CID 2170](https://pubchem.ncbi.nlm.nih.gov/compound/2170)
- **molar mass:** 313.781 g/mol (C17H16ClN3O) — DrugBank
- **groups:** approved

## About

Amoxapine is a tricyclic antidepressant used to treat major depressive disorder, psychosis, and neurotic disorders. It is usually given by mouth, where it is well absorbed, and can also be administered as an ophthalmic solution. It is used in the United States, where it received marketing approval later than many other drugs in its class.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q58356](https://www.wikidata.org/wiki/Q58356), [Wikipedia](https://en.wikipedia.org/wiki/Amoxapine?oldid=1373846822) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ahmad_2012_GUS](drugs/drug_amoxapine/pd_Ahmad_2012_GUS.md) | bacterial β-glucuronidase activity ← amoxapine · direct Emax (saturable) effect | — | Ahmad S et al., Potential repurposing of known drugs as…, Journal of biomolecular scr… (2012) | [10.1177/1087057112444927](https://doi.org/10.1177/1087057112444927) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ahmad_2012_GUS_2](drugs/drug_amoxapine/pd_Ahmad_2012_GUS_2.md) | endogenous GUS activity ← amoxapine · direct Emax (saturable) effect | — | Ahmad S et al., Potential repurposing of known drugs as…, Journal of biomolecular scr… (2012) | [10.1177/1087057112444927](https://doi.org/10.1177/1087057112444927) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Yang_2018_glucuronidase](drugs/drug_amoxapine/pd_Yang_2018_glucuronidase.md) | E. coli β-glucuronidase ← amoxapine · direct Emax (saturable) effect | — | Yang W et al., Amoxapine Demonstrates Incomplete Inhib…, SLAS discovery : advancing… (2018) | [10.1177/2472555217725264](https://doi.org/10.1177/2472555217725264) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Gozlan_1991_5_HT3](drugs/drug_amoxapine/pd_Gozlan_1991_5_HT3.md) | 5-HT3 receptors ← amoxapine · inhibition effect | — | Gozlan H et al., [Preclinical pharmacology of amoxapine…, L'Encephale 17 Spec No (1991) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ikeda_1989_GABA_stimulated_chloride_conductance](drugs/drug_amoxapine/pd_Ikeda_1989_GABA_stimulated_chloride_conductance.md) | GABA-stimulated chloride conductance ← amoxapine · direct Emax (saturable) effect | — | Ikeda M et al., Amoxapine inhibition of GABA-stimulated…, Life sciences (1989) | [10.1016/0024-3205(89)90544-4](https://doi.org/10.1016/0024-3205(89)90544-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:03 | 0:04 | 0/0/0 | 3/2/0 | 0/0/0 | 3,981/169 | einfracz / qwen3.8-27b | 3 | 3/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 51 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akiyoshi_1996.pdf` | Akiyoshi J et al., Effects of antidepressants on intracell…, Biological psychiatry (1996) | pd | 5 | [10.1016/0006-3223(95)00309-6](https://doi.org/10.1016/0006-3223(95)00309-6) | [8780834](https://www.ncbi.nlm.nih.gov/pubmed/8780834) | metadata signals extractable PD data (EC50) |
| `Gozlan_1991.pdf` | Gozlan H et al., [Preclinical pharmacology of amoxapine…, L'Encephale (1991) | pd | 4 |  | [1666997](https://www.ncbi.nlm.nih.gov/pubmed/1666997) | metadata signals extractable PD data (IC50) |
| `Ikeda_1989.pdf` | Ikeda M et al., Amoxapine inhibition of GABA-stimulated…, Life sciences (1989) | pd | 4 | [10.1016/0024-3205(89)90544-4](https://doi.org/10.1016/0024-3205(89)90544-4) | [2557507](https://www.ncbi.nlm.nih.gov/pubmed/2557507) | metadata signals extractable PD data (IC50) |
| `Pawar_2026.pdf` | Pawar SD et al., Cytochrome P450 2D6 (CYP2D6) Inhibition…, ACS pharmacology & translat… (2026) | pgx | 7 | [10.1021/acsptsci.5c00682](https://doi.org/10.1021/acsptsci.5c00682) | [41852638](https://www.ncbi.nlm.nih.gov/pubmed/41852638) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-11-23 19:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The study reports in-vitro inhibitory activity (IC50) of amoxapine against bacterial beta-glucuronidase, not pharmacokinetic disposition parameters. |
| PGx | Ahmad_2012 | not_relevant | 0 | 0 | The paper investigates the in vitro repurposing of amoxapine as an inhibitor of bacterial beta-glucuronidase and does not report a pharmacogenomic effect on the drug's PK/PD parameters. |
| popPK | Akiyoshi_1996 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Akiyoshi_1996 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on 5-HT2C receptors in CHO cells and does not mention amoxapine or report any pharmacodynamic parameters for it. |
| PGx | Akiyoshi_1996 | not_relevant | 0 | 0 | The paper studies 5-HT2C receptor function in CHO cells and does not involve amoxapine or pharmacogenomic effects on its PK/PD. |
| popPK | Ardizzone_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study measuring glucose transport inhibition in PC12 cells, not a pharmacokinetic study reporting disposition parameters for amoxapine. |
| PGx | Ardizzone_2001 | not_relevant | 0 | 0 | The paper investigates the in vitro effect of amoxapine on glucose transport in cells but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Calvo_1985 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetic parameters in healthy volunteers but does not investigate or report any relationship between genetic variants/genotypes and amoxapine pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The study investigates the spinal anesthetic effects (pharmacodynamics) of amoxapine in rats, not its pharmacokinetic parameters. |
| PD | Chen_2004 | not_relevant | 3 | 1 | The paper reports qualitative comparisons of spinal anesthetic potency and duration for amoxapine at a single concentration (5mM) but does not provide numeric dose-response parameters (e.g., ED50, Emax) or a concentration-effect curve for amoxapine. |
| PGx | Chen_2004 | not_relevant | 0 | 0 | The study investigates the spinal anesthetic efficacy of TCAs including amoxapine, but does not report any pharmacogenomic (gene variant/genotype) effects on PK or PD parameters. |
| popPK | Dong_2017 | irrelevant | 0 | 0 | The study concerns loxapine, a different drug from amoxapine. |
| PD | Dong_2017 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic modeling and trial simulation for loxapine, not amoxapine, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Dong_2017 | not_relevant | 0 | 0 | The paper focuses on loxapine PK in pediatrics and does not mention amoxapine or any pharmacogenomic effects. |
| PGx | Eugene_2020 | not_relevant | 0 | 0 | FAERS disproportionality analysis of somnolence by drug; no gene variant/genotype/phenotype effects on amoxapine PK or PD parameters. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance disproportionality study of adverse events, not a PK study, and no amoxapine disposition parameters are reported. |
| PD | Eugene_2021 | not_relevant | 0 | 0 | The paper is a pharmacovigilance disproportionality analysis (ROR) of adverse event reports from FAERS, not a pharmacodynamic or exposure-response study. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | This is a pharmacological receptor characterization study in pig pulmonary artery where amoxapine is used only as a comparator antagonist, and no pharmacokinetic parameters are reported. |
| PD | Glusa_2000 | not_relevant | 3 | 5 | The paper reports a pA2 value (7.80) for amoxapine as a 5-HT2B antagonist in a pharmacological assay, which is a measure of affinity/potency rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Glusa_2000 | not_relevant | 0 | 0 | The paper reports the pharmacological antagonism of a 5-HT receptor by amoxapine, but it does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of amoxapine. |
| popPK | Gozlan_1991 | irrelevant | 0 | 0 | The study is a preclinical pharmacological investigation of receptor binding and in vivo reflexes, not a pharmacokinetic study reporting disposition parameters for amoxapine. |
| PGx | Gozlan_1991 | not_relevant | 0 | 0 | The paper reports preclinical pharmacology in rats without any human genetic or pharmacogenomic analysis. |
| popPK | Hoertel_2022 | irrelevant | 0 | 0 | This is an observational mortality/outcomes study of antidepressants in COVID-19 with no pharmacokinetic parameters for amoxapine. |
| PD | Hoertel_2022 | not_relevant | 0 | 0 | The paper is a large observational epidemiological study analyzing the association between antidepressant use and mortality in SARS-CoV-2 patients; it does not report pharmacokinetic data, concentration-effect relationships, or specific PD parameters (e.g., Emax, EC50) for amoxapine. |
| popPK | Ikeda_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of amoxapine's effect on GABA receptors, not a pharmacokinetic study. |
| PGx | Ikeda_1989 | not_relevant | 0 | 0 | The paper reports the pharmacodynamics of amoxapine in an isolated rat brain vesicle system (GABA receptor binding and chloride conductance) but does not investigate the impact of human genetic variants or genotypes on these parameters. |
| popPK | Inoue_2022 | relevant | 7 | 3 | The paper reports non-compartmental PK parameters (Cmax, T1/2, AUC) for amoxapine in mice, but the specific numeric values are contained in Table 2 which is not included in the evidence (only referenced and described textually). |
| PGx | Inoue_2022 | not_relevant | 0 | 0 | The study investigates toxicokinetics in mice using amoxapine but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Jat_2022 | irrelevant | 0 | 0 | The study focuses on in-vitro drug release and molecular docking, lacking in-vivo pharmacokinetic parameter estimation for amoxapine. |
| PGx | Jat_2022 | not_relevant | 0 | 0 | The paper focuses on formulating amoxapine into solid lipid nanoparticles and performing in vitro drug release and molecular docking studies; it does not report pharmacogenomic data or human pharmacokinetic/parametric studies involving genetic variants. |
| popPK | Kinney_1982 | irrelevant | 3 | 2 | The paper is a review that provides only general qualitative descriptions and a generic half-life (8 hours) without specific quantitative compartmental parameters (CL, V, Q, ka) or population PK models. |
| PGx | Kinney_1982 | not_relevant | 0 | 0 | The text is a general review of amoxapine pharmacology and kinetics without mentioning any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Kunishima_2000 | irrelevant | 0 | 0 | This is a case report of neuroleptic malignant syndrome and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for amoxapine. |
| PGx | Kunishima_2000 | not_relevant | 0 | 0 | The paper describes a case of NMS in a hemodialysis patient and mentions PK is not fully clarified, but reports no pharmacogenomic (gene variant) effects on any PK/PD parameter. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of receptor effects, not a pharmacokinetic study, and does not report any disposition parameters. |
| PGx | Liu_2003 | not_relevant | 0 | 0 | The study describes the pharmacological profile of amoxapine in a rat jejunum model but does not investigate the influence of gene variants or genotypes on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | This is a pharmacodynamic study evaluating the efficacy of amoxapine in attenuating morphine withdrawal in mice, with no pharmacokinetic parameters reported. |
| PGx | Liu_2013 | not_relevant | 0 | 0 | The study reports the efficacy of amoxapine in an animal model of morphine withdrawal without involving any genetic variants, genotypes, or pharmacogenomic factors. |
| popPK | Luo_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic identification of CYP enzymes for loxapine metabolism, not a pharmacokinetic parameter study for amoxapine. |
| PGx | Luo_2011 | not_relevant | 0 | 0 | The paper studies the metabolism of loxapine (where amoxapine is a metabolite) and does not report on how gene variants affect the PK/PD parameters of amoxapine. |
| popPK | Mika_2013 | irrelevant | 0 | 0 | The paper is a review of antidepressants in chronic pain and does not report pharmacokinetic parameters for amoxapine. |
| PD | Mika_2013 | not_relevant | 1 | 0 | The text is a narrative review of antidepressants in chronic pain and does not report any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters for amoxapine. |
| PGx | Mika_2013 | not_relevant | 0 | 0 | The paper is a general review of antidepressants for chronic pain and contains no information on pharmacogenomics or specific genetic variants. |
| popPK | Nasu_2000 | irrelevant | 1 | 0 | The paper reports pharmacodynamic receptor binding and occupancy data in mice, not pharmacokinetic parameters (CL, V, ka) for amoxapine. |
| PGx | Nasu_2000 | not_relevant | 0 | 0 | The paper discusses drug-induced pharmacodynamics in mice but does not report any genetic or pharmacogenomic effects. |
| popPK | Neukamm_2006 | irrelevant | 0 | 0 | The paper describes amoxapine as a transfection enhancer in gene therapy studies, not as a drug for which pharmacokinetic parameters are being measured. |
| PD | Neukamm_2006 | not_relevant | 1 | 0 | The paper identifies amoxapine as a transfection enhancer but does not provide specific numeric concentration-effect data, IC50 values, or PD parameters for amoxapine in the provided text. |
| PGx | Neukamm_2006 | not_relevant | 0 | 0 | The paper describes amoxapine as a transfection enhancer in a non-viral gene delivery system, not a pharmacogenomic effect on its own PK/PD parameters. |
| popPK | Obers_2010 | irrelevant | 0 | 0 | The study investigates molecular mechanisms of hERG channel inhibition and apoptosis in vitro, not pharmacokinetic disposition parameters. |
| PGx | Obers_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of amoxapine's cardiac toxicity (hERG inhibition/trafficking) in vitro but does not report a pharmacogenomic effect (gene variant changing drug PK/PD) for the drug itself. |
| popPK | Ohsuka_1995 | irrelevant | 0 | 0 | The study measures in-vitro receptor binding and signal transduction parameters (IC50) in human platelets, not pharmacokinetic disposition parameters (CL, V, ka) for amoxapine. |
| PGx | Ohsuka_1995 | not_relevant | 0 | 0 | The paper studies the biochemical effects of amoxapine on 5HT2 receptors in platelets, but does not report any gene variant or genotype affecting a PK/PD parameter of the drug. |
| popPK | Parker_2001 | irrelevant | 0 | 0 | The study focuses on clozapine and two other developmental compounds (S 16924, S 18327) in rats, not amoxapine. |
| PD | Parker_2001 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for clozapine and two developmental compounds (S 16924, S 18327), but does not mention or provide data for amoxapine. |
| PGx | Parker_2001 | not_relevant | 0 | 0 | The paper discusses PK/PD modeling of anti-psychotics in rats and does not report pharmacogenomic effects on amoxapine. |
| popPK | Pawar_2023 | relevant | 8 | 2 | Study reports in vivo PK for amoxapine in rats, but only Cmax values are present; specific clearance, volume, and half-life parameters are not listed in the evidence. |
| PGx | Pawar_2023 | not_relevant | 0 | 0 | The paper describes a formulation study on solid lipid nanoparticles to improve amoxapine delivery in rats, containing no pharmacogenomic data or analysis of gene variants. |
| popPK | Pawar_2026 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| PD | Pawar_2026 | not_relevant | 0 | 0 | The paper focuses on CYP2D6 inhibition and PK enhancement of amoxapine, not on pharmacodynamic or exposure-response modeling. |
| PGx | Pawar_2026 | not_relevant | 0 | 0 | The paper investigates the impact of non-genetic inhibitors (bergamottin and diosmetin) on CYP2D6, not the effect of a CYP2D6 genotype on amoxapine pharmacokinetics. |
| popPK | Potter_1990 | irrelevant | 0 | 0 | The paper is a review discussing the pharmacodynamic consequences of metabolism and drug resistance, not a study reporting quantitative pharmacokinetic parameters for amoxapine. |
| PD | Potter_1990 | not_relevant | 1 | 0 | The text is a qualitative review discussing the pharmacodynamic consequences of metabolism and drug resistance without providing any numeric PD parameters or concentration-effect data for amoxapine. |
| PGx | Potter_1990 | not_relevant | 2 | 0 | The paper discusses the role of metabolism in drug resistance and side effects but does not report specific gene variants or genotypes and their quantitative effect on PK or PD parameters. |
| popPK | Pérez-León_2004 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on frog retina glycine transport where amoxapine is used only as a mechanistic probe/inhibitor, not for PK parameter estimation. |
| PD | Pérez-León_2004 | not_relevant | 1 | 0 | The paper reports a single qualitative percentage inhibition (60%) of glycine uptake by amoxapine in a specific fraction, but does not provide concentration-response data, IC50/EC50 values, or a PD model. |
| PGx | Pérez-León_2004 | not_relevant | 0 | 0 | The study characterizes glycine transport in frog retina and uses amoxapine as a tool compound, but does not report pharmacogenomic effects on human PK/PD parameters. |
| popPK | Rockley_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on seizure liability and does not report pharmacokinetic disposition parameters for amoxapine. |
| popPK | Rogol_1984 | irrelevant | 3 | 0 | The paper is a case report on toxicity that mentions pharmacokinetics were described but provides no specific quantitative parameter values (CL, V, t1/2, etc.) in the evidence. |
| PGx | Rogol_1984 | not_relevant | 0 | 0 | The paper describes amoxapine intoxication in infants and compares toxicity profiles with tricyclic antidepressants, but does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Saito_2020 | irrelevant | 1 | 0 | The study investigates the chemical degradation of amoxapine in artificial gastric juice (in vitro/physicochemical) rather than in vivo pharmacokinetics, and no PK parameters (CL, V, etc.) are reported. |
| PGx | Saito_2020 | not_relevant | 0 | 0 | The paper discusses chemical degradation of amoxapine in artificial gastric juice, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Salceda_2006 | irrelevant | 0 | 0 | The paper is a pharmacological study of glycine transport in rat retina where amoxapine is used only as a tool compound/inhibitor, not as the subject of a PK study. |
| PD | Salceda_2006 | not_relevant | 2 | 2 | The paper reports qualitative inhibition percentages (40-70%) for amoxapine on glycine uptake but does not provide concentration-effect data, IC50/EC50 values, or a formal PD model. |
| PGx | Salceda_2006 | not_relevant | 0 | 0 | The paper studies glycine transport mechanisms in rat retina and does not investigate pharmacogenomic effects on the PK or PD of amoxapine in humans or other relevant models. |
| popPK | Tohda_1989 | irrelevant | 0 | 0 | The study is an in-vitro functional pharmacology experiment in Xenopus oocytes, not a pharmacokinetic study, and contains no disposition parameters for amoxapine. |
| PD | Tohda_1989 | not_relevant | 2 | 1 | The paper reports a qualitative inhibition of serotonin-evoked current by amoxapine at a single concentration (10 microM) in an in vitro oocyte assay, but provides no numeric PD parameters (such as IC50 or Emax) or dose-response curve for amoxapine. |
| PGx | Tohda_1989 | not_relevant | 0 | 0 | The paper investigates the pharmacological interaction of amoxapine with serotonin receptors in a Xenopus oocyte expression system, but it does not report any pharmacogenomic effects or genetic variants influencing its PK/PD parameters. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on in vitro enzymatic inhibition of beta-glucuronidase by amoxapine, not pharmacokinetic parameters. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The paper investigates the interaction between amoxapine and gut microbiota enzymes (microbiome pharmacology) rather than human host gene variants affecting the drug's PK or PD. |
| popPK | Ying_2025 | irrelevant | 0 | 0 | The paper studies ebselen derivatives as inhibitors of β-glucuronidase, with amoxapine used only as a reference inhibitor, and contains no pharmacokinetic parameter data for amoxapine. |
| PD | Ying_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel E. coli β-glucuronidase inhibitors and reports in vitro enzymatic inhibition parameters (IC50, Ki, kinact/KI) for new compounds, not a pharmacodynamic or exposure-response relationship for amoxapine in a biological system. |
| PGx | Ying_2025 | not_relevant | 0 | 0 | The paper reports chemical synthesis and enzyme inhibition assays for gut microbial β-glucuronidase inhibitors, not pharmacogenomic effects on human amoxapine PK/PD. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text is only a meeting title and contains no data, analysis, or parameters regarding amoxapine pharmacodynamics. |
| popPK | Zolkiewski_2026 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and SAR analysis using amoxapine as a reference compound, reporting IC50 values and toxicity mechanisms rather than pharmacokinetic disposition parameters. |
| PGx | Zolkiewski_2026 | not_relevant | 0 | 0 | The paper uses amoxapine as a reference compound to build structure-activity relationships for ion channel toxicity, rather than investigating how genetic variants affect amoxapine's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamoxapine%5D&body=Drug%3A%20amoxapine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amoxapine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
