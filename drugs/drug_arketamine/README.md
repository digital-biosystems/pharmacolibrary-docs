<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Arketamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arketamine_Fux2022_reference&quot;,&quot;label&quot;:&quot;Fux_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arketamine/Arketamine_Fux2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Arketamine

- **generic name:** Arketamine
- **ATC codes:** not captured
- **DrugBank:** [DB19150](https://go.drugbank.com/drugs/DB19150) · **PubChem:** not captured
- **molar mass:** 237.73 g/mol (C13H16ClNO) — DrugBank
- **groups:** investigational

## About

**Description.** Arketamine is under investigation in clinical trial NCT05414422 (A Randomized, Placebo-controlled, Double-blind Study to Assess Safety and Efficacy of PCN-101 in TRD).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB19150">DrugBank DB19150</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arketamine | parent | 237.73 | C13H16ClNO | DrugBank | — | Kaka_1979, Stojanova_2026, Weiss_2023 |
| cyclohexene metabolite | metabolite | — (mass units only) | — | — | — | — |
| ketamine | metabolite | 237.727 | C13H16ClNO | PubChem | [3821](https://pubchem.ncbi.nlm.nih.gov/compound/3821) | Weiss_2023 |
| N-demethylketamine | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Fux_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_arketamine/Arketamine_Fux2022_reference.md?tab=Simulation) · [record](drugs/drug_arketamine/Arketamine_Fux2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.42 ‡ | L/h | 0.1 ml/min/kg | review reference | cattle | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fux_2022_reference](drugs/drug_arketamine/Arketamine_Fux2022_reference.md) |
| V | V | 5.375 | L | 5.3746 L | review reference | cattle | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Fux_2022_reference](drugs/drug_arketamine/Arketamine_Fux2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Fux_2022_reference](drugs/drug_arketamine/Arketamine_Fux2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fux D et al., Pharmacokinetics of metamizole (dipyron…, PloS one (2022) | [10.1371/journal.pone.0265305](https://doi.org/10.1371/journal.pone.0265305) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kaka_1979_reference](drugs/drug_arketamine/Arketamine_Kaka1979_reference.md) | — | 1-compartment (no model) | 2 | Kaka JS et al., Pharmacokinetics of ketamine in the hor…, American journal of veterin… (1979) | — |
| <span class="pk-rf" hidden data-species="cat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Heavner_1979_reference](drugs/drug_arketamine/Arketamine_Heavner1979_reference.md) | — | 1-compartment (no model) | 0 | Heavner JE et al., Ketamine kinetics: decerebrate vs. inta…, Canadian journal of physiol… (1979) | [10.1139/y79-134](https://doi.org/10.1139/y79-134) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kaka_1980_reference](drugs/drug_arketamine/Arketamine_Kaka1980_reference.md) | — | general linear (no model) | 0 | Kaka JS et al., Pharmacokinetics of ketamine and two me…, Journal of pharmacokinetics… (1980) | [10.1007/BF01065193](https://doi.org/10.1007/BF01065193) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Stojanova_2026_reference](drugs/drug_arketamine/Arketamine_Stojanova2026_reference.md) | — | 2-compartment (no model) | 8 | Stojanova J et al., Continuous Subcutaneous Ketamine Infusi…, Pharmacotherapy (2026) | [10.1002/phar.70150](https://doi.org/10.1002/phar.70150) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Weiss_2023_ketamine](drugs/drug_arketamine/Arketamine_Weiss2023_ketamine.md) | — | general linear (no model) | 1 | Weiss M, Is the One-Compartment Model with First…, Pharmaceutical research (2023) | [10.1007/s11095-023-03582-1](https://doi.org/10.1007/s11095-023-03582-1) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ propiverine](drugs/drug_arketamine/Arketamine_Weiss2023_propiverine.md) | — | general linear (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ trospium](drugs/drug_arketamine/Arketamine_Weiss2023_trospium.md) | — | general linear (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wieber_1975_reference](drugs/drug_arketamine/Arketamine_Wieber1975_reference.md) | — | 1-compartment (no model) | 0 | Wieber J et al., Pharmacokinetics of ketamine in man, Der Anaesthesist (1975) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gao_2018_LORR](drugs/drug_arketamine/pd_Gao_2018_LORR.md) | loss-of-righting reflex (LORR) ← ketamine · direct sigmoid Emax (Hill) effect | — | Gao J et al., HCN channels contribute to the sensitiv…, Oncotarget (2018) | [10.18632/oncotarget.24408](https://doi.org/10.18632/oncotarget.24408) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 09:37 | 5:37 | 1/7/1 | 1/0/0 | 0/0/0 | 339,536/21,458 | einfracz / qwen3.8-27b | 29 | 3/26 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 1533 matched, 186 returned
- **screened:** 35  ·  **relevant:** 4
- **records:** 9  ·  extracted 1  ·  needs_review 1  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heavner_1979.pdf` | Heavner JE et al., Ketamine kinetics: decerebrate vs. inta…, Canadian journal of physiol… (1979) | popPK | 10 | [10.1139/y79-134](https://doi.org/10.1139/y79-134) | [497902](https://pubmed.ncbi.nlm.nih.gov/497902) | Study reports quantitative PK parameters (Vd, t1/2, compartmental model) for arketamine (ketamine) in cats, consistent with its known pharmacokinetics. |
| `Nielsen_2014.pdf` | Nielsen BN et al., Intranasal sufentanil/ketamine analgesi…, Paediatric anaesthesia (2014) | popPK | 10 | [10.1111/pan.12268](https://doi.org/10.1111/pan.12268) | [24118506](https://pubmed.ncbi.nlm.nih.gov/24118506) | The study reports a compartmental PK analysis for ketamine (the R-enantiomer of arketamine) in children with quantitative parameters (bioavailability, Cmax) and implies clearance/volume via the model, although specific CL/V values are not explicitly listed in the abstract text provided. |
| `Schwieger_1991.pdf` | Schwieger IM et al., The pharmacokinetics and pharmacodynami…, Journal of pharmacokinetics… (1991) | popPK | 9 | [10.1007/BF01073866](https://doi.org/10.1007/BF01073866) | [2013837](https://pubmed.ncbi.nlm.nih.gov/2013837) | The study reports quantitative pharmacokinetic parameters (CL, t1/2 beta) for the subject drug (ketamine/arketamine) in dogs. |
| `Kaka_1980.pdf` | Kaka JS et al., Pharmacokinetics of ketamine and two me…, Journal of pharmacokinetics… (1980) | popPK | 8 | [10.1007/BF01065193](https://doi.org/10.1007/BF01065193) | [7431222](https://pubmed.ncbi.nlm.nih.gov/7431222) | The paper reports quantitative PK parameters for ketamine, but the subject drug arketamine (the S-enantiomer) is not explicitly distinguished from racemic ketamine, which may be a minor mismatch. |

<sub>queue written 2026-10-22T09:34:03.257290+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdallah_2022 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial of ketamine for PTSD and reports no pharmacokinetic parameters (CL, V, ka, etc.) for arketamine. |
| PGx | Anderson_2006 | not_relevant | 0 | 0 | The paper is a general review of paediatric analgesics and mentions pharmacogenomics only as a broad concept without reporting specific quantitative PK/PD effects for any drug, including ketamine. |
| PGx | Anderson_2006_2 | not_relevant | 2 | 1 | The text mentions ketamine in the context of developmental pharmacokinetics and pharmacogenomics but does not report specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Andrade_2017 | not_relevant | 5 | 0 | Mentions potential genetic polymorphisms affecting exposure, but provides no specific data, table, or quantitative effect size. |
| PGx | Aroke_2016 | not_relevant | 6 | 3 | The paper discusses ketamine, not "arketamine," and provides only qualitative associations without fitted effect sizes. |
| PGx | Aroke_2017 | not_relevant | 5 | 0 | The study reports a null association (p &gt; .10) between specific SNPs and ketamine-induced emergence phenomena, providing no fitted pharmacogenomic effect size for a PK or PD parameter. |
| PGx | Ashraf_2018 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ticlopidine inhibiting CYP2B6) rather than a genetic variant or pharmacogenomic effect on ketamine pharmacokinetics. |
| popPK | Baggot_1976 | irrelevant | 1 | 2 | The study reports pharmacokinetic parameters for ketamine, not arketamine. |
| popPK | Bensel_2017 | irrelevant | 0 | 0 | The study focuses on the molecular mechanism of propofol on kinesin motor proteins and does not report any pharmacokinetic parameters for arketamine. |
| PGx | Björkholm_2016 | not_relevant | 2 | 0 | The paper discusses the mechanism of ketamine involving BDNF and mentions BDNF genotypes (met/met) affecting response, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., Cmax, T1/2, specific receptor binding metrics) for the drug arketamine itself, nor does it provide extractable data tables. |
| PGx | Bloom_2019 | not_relevant | 0 | 0 | The study investigates nicotine metabolism, not the pharmacokinetics or pharmacodynamics of arketamine. |
| PGx | Borsato_2020 | not_relevant | 1 | 0 | The paper mentions CYP2B6 as a future consideration for dose individualization but does not report any specific pharmacogenomic effect on PK or PD parameters. |
| popPK | Bottemanne_2021 | irrelevant | 0 | 0 | The paper is a theoretical proposal for a treatment protocol and does not report quantitative pharmacokinetic parameters. |
| popPK | Cai_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signal transduction and does not report pharmacokinetic parameters for arketamine. |
| popPK | Carnes_1997 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study assessing the effect of ketamine (related to arketamine) on potassium currents, not a pharmacokinetic study. |
| popPK | Cattai_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol in cats; ketamine is only mentioned as a premedication agent. |
| popPK | Chamadia_2021 | irrelevant | 0 | 0 | The study focuses on EEG biomarkers for ketamine-induced dissociation and does not report pharmacokinetic parameters such as clearance or volume for arketamine. |
| PGx | Chen_2010 | not_relevant | 0 | 0 | The paper is a review of how ketamine regulates CYP gene expression, which concerns drug interactions and the enzyme's activity, not the effect of a genetic variant on ketamine's PK or PD parameters. |
| popPK | Clements_1982 | irrelevant | 2 | 0 | The study investigates ketamine, not the distinct drug arketamine, and no quantitative disposition parameters (CL, V) for arketamine are reported. |
| popPK | Coughlan_1992 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring vasorelaxant effects on canine arteries, not a pharmacokinetic study for arketamine. |
| popPK | Coulter_2014 | irrelevant | 2 | 1 | The paper is a simulation study for a ketamine-propofol mixture ("ketofol") that reports pharmacodynamic (EC50) and dosing parameters, not the specific population-pharmacokinetic disposition parameters (CL, V, Q) for arketamine. |
| popPK | Coulter_2014_2 | irrelevant | 0 | 0 | The paper focuses on racemic ketamine and propofol, and does not report pharmacokinetic parameters for the specific enantiomer arketamine. |
| popPK | Dahan_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic parameters for ketamine, not arketamine. |
| popPK | Dakwar_2020 | irrelevant | 0 | 0 | This is a clinical trial focused on behavioral outcomes for alcohol use disorder, not a pharmacokinetic study of arketamine (ketamine is the subject, but no disposition parameters are reported). |
| PGx | Desta_2021 | not_relevant | 5 | 2 | The paper is a review of CYP2B6 genetics and allele frequencies, mentioning ketamine as a substrate but not reporting specific pharmacokinetic or pharmacodynamic effect sizes or changes for ketamine. |
| PGx | Douglas_2015 | not_relevant | 5 | 5 | The study reports a biomarker (miRNA) associated with treatment outcome but does not provide pharmacogenomic evidence of a specific gene variant altering a quantifiable PK or PD parameter. |
| PGx | Fabbri_2021 | not_relevant | 0 | 0 | The paper is an in silico drug repurposing study linking TRD genes to drug targets and does not report PK or PD parameters for ketamine. |
| popPK | Flores_2015 | irrelevant | 0 | 0 | The study models ketamine, not arketamine (esketamine). |
| PGx | Freye_2003 | not_relevant | 0 | 0 | The paper discusses general molecular mechanisms of opioid tolerance and does not report pharmacogenomic data or specific PK/PD effects for ketamine. |
| popPK | Fux_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metamizole and its metabolites (4-MAA, 4-AA) in calves, not for arketamine (which is not a real drug; the paper mentions ketamine only as a co-anesthetic agent). |
| popPK | Gao_2018 | irrelevant | 0 | 0 | The study is a mechanistic pharmacodynamics investigation of HCN channels in mice using ketamine as a probe drug, reporting EC50 and CSF concentrations rather than quantitative PK disposition parameters (CL, V, etc.) for arketamine. |
| popPK | Gilbert_2020 | irrelevant | 0 | 0 | The study investigates magnetoencephalographic correlates and neurobiological mechanisms of suicide in depression, containing no pharmacokinetic parameters for ketamine. |
| popPK | Gitlin_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic relationship between dissociation and analgesia using behavioral scores and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for ketamine. |
| popPK | Gonzalez_2020 | irrelevant | 0 | 0 | The study measures cerebral blood flow (neuroimaging) and does not report pharmacokinetic parameters for arketamine or ketamine. |
| popPK | Graham_2011 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study of glycine receptors in mice, and arketamine is not the subject drug (ketamine is used only for anesthesia). |
| popPK | Greenberg_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study on nitric oxide and endothelium relaxation in rats, and ketamine is mentioned only as an anesthetic agent, not as the subject of pharmacokinetic analysis. |
| popPK | Gurel_2022 | irrelevant | 0 | 0 | The paper is a clinical study on ECT seizure quality using ketamine as a comparator/anesthetic, not a pharmacokinetic study of arketamine. |
| popPK | Hampton_1982 | irrelevant | 0 | 0 | The study investigates stereospecific binding of phencyclidine in brain membranes using ketamine as a comparator, and does not report pharmacokinetic parameters for arketamine. |
| PGx | Hedrich_2016 | not_relevant | 3 | 2 | The text is a general review of CYP2B6 mechanisms and drug-drug interactions, mentioning ketamine as a substrate without reporting specific pharmacogenomic changes to its PK/PD parameters. |
| popPK | Herd_2007 | irrelevant | 1 | 0 | The paper reports population pharmacokinetic parameters for norketamine (a metabolite of ketamine), not arketamine, which is a different drug (a stereoisomer/analogue often confused in naming but distinct in this context of racemic ketamine studies). |
| popPK | Hikichi_2015 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of a novel mGlu2 modulator (TASP0443294), not the pharmacokinetics of arketamine. |
| popPK | Hornik_2018 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ketamine, not arketamine. |
| popPK | Jha_2024 | irrelevant | 0 | 0 | The paper is a clinical trial comparing ketamine and ECT for depression efficacy, containing no pharmacokinetic parameters or models. |
| popPK | Kaka_1979 | irrelevant | 2 | 2 | The study is a pharmacokinetic study of ketamine, not arketamine (the active metabolite), and does not report parameters for arketamine. |
| PGx | Kamp_2020_2 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of ketamine and metabolites using a population model but does not report on the influence of specific gene variants, genotypes, or phenotypes (pharmacogenomics) on these parameters. |
| PGx | Kato_2018 | not_relevant | 1 | 0 | The paper investigates the mechanism of action (BDNF signaling) for GLYX-13, but it does not report pharmacogenomic effects on PK parameters (e.g., Cmax, AUC) or PD parameters for ketamine/arketamine, nor does it provide a fitted pharmacokinetic effect size. |
| popPK | Kienlen_1981 | irrelevant | 1 | 0 | The paper is a general review of non-steroidal anesthetics that mentions ketamine but does not provide specific quantitative population-pharmacokinetic parameters for arketamine (e.g., CL, V, Q values) in the provided text. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of electrophysiological effects (channel blocking) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of MK801 (dizocilpine) on potassium channels in rat cells, and does not report pharmacokinetic parameters for arketamine. |
| popPK | Ko_1997 | irrelevant | 0 | 0 | This is a mechanistic study investigating the electrophysiological effects of ketamine on potassium channels in rat heart tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Li_2004 | irrelevant | 0 | 0 | This is an electrophysiological study of NMDA receptors in rat DRG neurons where ketamine is used as a pharmacological antagonist, not a pharmacokinetic study of arketamine disposition. |
| popPK | Lin_1992 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study on Xenopus oocytes investigating the mechanism of anesthetic action on GABA receptors, not a pharmacokinetic study of arketamine (or ketamine) disposition. |
| popPK | Logginidou_2003 | irrelevant | 0 | 0 | The paper studies the effect of propofol on evoked potentials in rats, with ketamine used only for initial anesthesia; it does not report pharmacokinetic parameters for ketamine. |
| PGx | Mahmoud_2016 | not_relevant | 0 | 0 | The paper is a general review of pediatric sedation trends and mentions pharmacogenetics only as a broad research area, without reporting specific gene-variant effects on ketamine PK or PD. |
| PGx | Martin_2019 | not_relevant | 0 | 0 | The paper mentions pharmacogenetics only as a suggestion for future studies and does not report any gene-drug interactions or genotypic effects on the PK/PD of ketamine. |
| popPK | Martini_2011 | irrelevant | 0 | 0 | This is a review article discussing PKPD modeling in pain management, and the provided evidence contains no quantitative pharmacokinetic parameters for arketamine. |
| PGx | McCarthy_2023 | not_relevant | 0 | 0 | The paper reviews dextromethorphan-bupropion and does not report pharmacogenomic effects of arketamine. |
| popPK | McGrath_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction of diazepam and etomidate on GABAA receptors in vitro and in zebrafish, with no pharmacokinetic analysis or data for arketamine. |
| popPK | Merritt_1990 | irrelevant | 0 | 0 | The paper is an in-vitro study on glutamate-induced vasospasm in rabbit aorta and uses ketamine only as a pharmacological antagonist, containing no arketamine PK data. |
| PGx | Meshkat_2022 | not_relevant | 5 | 1 | The paper is a systematic review describing qualitative associations between genotypes and clinical outcomes/adverse effects, but it does not report specific fitted quantitative changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Meyer_2011 | not_relevant | 2 | 1 | The paper is a general review of the pharmacogenomics of drugs of abuse; it discusses ketamine only briefly and does not report specific gene variant-PK/PD associations or fitted effect sizes for ketamine. |
| PGx | Meyer_2013 | not_relevant | 0 | 0 | The paper focuses on the metabolism and detection of methoxetamine (a designer drug), not pharmacogenomic effects on ketamine. |
| popPK | Michalczyk_2013 | irrelevant | 0 | 0 | The study evaluates the effect of midazolam on intracranial pressure during ketamine sedation and reports no pharmacokinetic parameters (CL, V, etc.) for ketamine. |
| popPK | Milovanovic_2002 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of glutamate on gut smooth muscle and uses ketamine (not arketamine) only as a pharmacological antagonist, reporting no PK parameters. |
| PGx | Mo_2009 | not_relevant | 0 | 0 | The paper discusses CYP2B6 polymorphisms and mentions ketamine as a substrate, but it does not report any specific pharmacokinetic or pharmacodynamic data for ketamine based on genotype. |
| popPK | Moeller_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketamine, not arketamine. |
| popPK | Murphy_1990 | irrelevant | 0 | 0 | The paper studies Na+ transport in rat choroid plexus using ketamine as an anesthetic, not the pharmacokinetics of ketamine. |
| popPK | Nagele_2005 | irrelevant | 0 | 0 | The study investigates the mechanism of action of xenon in Caenorhabditis elegans and does not report pharmacokinetic parameters for arketamine. |
| PGx | Nguyen_2015 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of dextromethorphan (not arketamine) in mice and does not report pharmacogenomic effects on a PK or PD parameter. |
| PGx | Nofziger_2019 | not_relevant | 0 | 0 | The paper studies dextromethorphan (a ketamine analog/antagonist) and depression outcomes, not the pharmacokinetics or pharmacodynamics of ketamine itself, and does not report genotype-specific effects on PK parameters. |
| PGx | Noppers_2011 | not_relevant | 0 | 0 | The paper studies the effect of rifampicin (a drug) on ketamine PK, not a genetic variant or genotype. |
| popPK | Pedersen_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pelletier_2022 | irrelevant | 3 | 5 | The paper is a review that provides general pharmacokinetic parameters for racemic ketamine rather than specific population PK models for arketamine as the distinct subject drug. |
| PGx | Peltoniemi_2016 | not_relevant | 0 | 0 | The text describes general pharmacokinetics and pharmacodynamics of ketamine but does not report any specific pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Popova_2019 | irrelevant | 0 | 0 | This is a clinical efficacy study for esketamine (the S-enantiomer of ketamine) in treatment-resistant depression, not a pharmacokinetic study for arketamine (racemic ketamine), and reports no PK parameters. |
| PGx | Przybylo_1995 | not_relevant | 0 | 0 | The study focuses on sodium nitroprusside metabolism and cyanide toxicity, not arketamine, and contains no pharmacogenomic data. |
| PGx | Qian_2019 | not_relevant | 0 | 0 | The paper models drug-drug interactions involving rifampicin and various substrates (including S-ketamine, not arketamine) but does not report pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Rajdev_1992 | irrelevant | 0 | 0 | The paper is a receptor binding study (in vitro) and does not report pharmacokinetic parameters for arketamine. |
| PGx | Ramos-da-Silva_2021 | not_relevant | 0 | 0 | The text is a review of molecular mechanisms of antidepressants in depression and does not report specific gene variant effects on the pharmacokinetic or pharmacodynamic parameters of arketamine. |
| PGx | Rao_2016 | not_relevant | 2 | 0 | The study reports a negative finding, stating there was no significant difference in ketamine metabolism or clearance between CYP2B6 genotypes. |
| PGx | Restrepo_2009 | not_relevant | 2 | 0 | The text mentions ketamine metabolism enzymes but contains no specific data, effect sizes, or analysis of genotype effects on PK/PD parameters. |
| popPK | Reynolds_1994 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study investigating NMDA receptor modulation, not a pharmacokinetic study of arketamine. |
| popPK | Rischka_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (VT, k1/k2) for the radiotracer (R)-11C-Me-NB1, not for the drug arketamine. |
| popPK | Rock_1989 | irrelevant | 0 | 0 | The study investigates bronchial resistance in guinea pigs, not the pharmacokinetic disposition parameters of arketamine. |
| PGx | Saavedra_2020 | not_relevant | 0 | 0 | The study investigates the behavioral effects of dextromethorphan in mice and does not report pharmacokinetic/pharmacodynamic effects of ketamine (arketamine) or its metabolite. |
| PGx | Saba_2017 | not_relevant | 4 | 0 | The paper mentions that cytochrome enzymes are involved with ketamine but explicitly states there is no strong evidence of individual polymorphisms manifesting in clinical outcomes, and does not report any specific PK/PD effect for a variant. |
| popPK | Sabia_2011 | irrelevant | 0 | 0 | This is a review article on ketamine (not arketamine) for CRPS treatment, and it contains no quantitative PK parameter values or data for the specific subject drug arketamine. |
| PGx | Sabia_2011 | not_relevant | 1 | 0 | The text is a review mentioning pharmacogenetics as a hypothesis but does not report specific gene variants or quantitative PK/PD changes. |
| popPK | Salloum_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of ketamine (not arketamine) for depression and does not report pharmacokinetic parameters. |
| PGx | Schep_2023 | not_relevant | 0 | 0 | The paper is a review of clinical toxicology and general pharmacokinetics of ketamine, mentioning metabolic enzymes (CYPs) but not reporting any specific gene variants or genotypes that alter PK or PD parameters. |
| popPK | Schüttler_1987 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic modeling (EEG effects, Emax, IC50) and does not report population pharmacokinetic parameters (CL, V, ka) for arketamine. |
| popPK | Sedlacik_2015 | irrelevant | 0 | 0 | The study focuses on MRI perfusion and oxygenation parameters in mice brains, using ketamine only as an anesthetic agent without reporting its pharmacokinetic parameters. |
| popPK | Sharpee_2016 | irrelevant | 0 | 0 | The paper is a list of abstracts from a Computational Neuroscience meeting and does not contain any pharmacokinetic data for arketamine. |
| PGx | Sherif_2016 | not_relevant | 0 | 0 | The paper discusses cannabinoids and ketamine as psychotomimetic drugs but does not report pharmacogenomic effects on ketamine's PK or PD parameters. |
| PGx | Stojanova_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ketamine inducing tacrolimus clearance) but does not investigate or report any genetic variants or genotypes affecting pharmacokinetics. |
| PGx | Sukhram_2026 | not_relevant | 1 | 0 | This paper is a scoping review of ketamine in diabetes; it mentions pharmacogenomics (e.g., CYP2B6/CYP3A4) only as a future research agenda item and does not report any quantitative data or fitted effect sizes showing how genetic variants change PK/PD parameters. |
| popPK | Timcenko_1995 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of ketamine (not arketamine) and other anesthetics for predicting anesthesia depth; arketamine is not the subject drug. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The paper reports in-vitro electrophysiological data (EC50 values) for T-type calcium currents in rat neurons, not pharmacokinetic parameters for arketamine. |
| popPK | Tucciarone_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of buprenorphine as a follow-on treatment to ketamine, and it does not report any pharmacokinetic parameters for arketamine (or ketamine). |
| PGx | Turpeinen_2012 | not_relevant | 4 | 5 | The text is a general review of CYP2B6 genetics and mentions ketamine (corrected from typo 'arketamine') as a substrate, but does not report specific pharmacogenomic effect sizes or fitted parameters for PK/PD. |
| PGx | Vaughns_2015 | not_relevant | 0 | 0 | The paper is a review article concerning pharmacokinetics in obese adolescents and does not report specific pharmacogenomic effects on PK parameters for ketamine. |
| PGx | Wang_2008 | not_relevant | 2 | 0 | The text is a general review of CYP2B6 and mentions ketamine as a substrate, but it does not report specific pharmacogenomic effects on PK/PD parameters in the provided excerpt. |
| PGx | Wang_2008_2 | not_relevant | 1 | 0 | The paper is a review on developmental neurotoxicity of anesthetics (including ketamine) and does not report gene-specific changes in PK or PD parameters. |
| popPK | Wendel-Garcia_2022 | irrelevant | 0 | 0 | The study investigates the association between ketamine infusion and cholestatic liver injury (toxicity) but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Wieber_1975 | irrelevant | 1 | 0 | The paper studies ketamine, which is the parent drug, not the specific enantiomer arketamine (S-ketamine) as the subject drug. |
| PGx | Wilson_2020 | not_relevant | 6 | 5 | The paper reports a pharmacodynamic difference (antidepressant-like effect/behavior) between genotypes, but it does not report a pharmacokinetic parameter or a quantified pharmacodynamic biomarker fitted with an effect size. |
| popPK | Yamakura_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on potassium channels, not a pharmacokinetic study of arketamine. |
| PGx | Yanagihara_2001 | not_relevant | 0 | 0 | The paper describes general metabolic enzymes (CYP2B6, etc.) using pooled microsomes and cDNA expression systems, but does not investigate specific gene variants, genotypes, or phenotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ying_2012 | not_relevant | 0 | 0 | The paper investigates the stereoselectivity of CYP3A4-mediated metabolism of ketamine using a microanalysis technique but does not report pharmacogenomic effects (genotype-based differences) or clinical PK/PD parameters. |
| popPK | Yu_2010 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of luteolin on phosphodiesterases and its ability to reverse anesthesia, and does not report pharmacokinetic parameters for arketamine. |
| popPK | Yuen_2017 | irrelevant | 1 | 0 | The paper focuses on pharmacodynamic translation of antidepressant effects in mice and does not report quantitative pharmacokinetic disposition parameters for arketamine. |
| PGx | Zanos_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of ketamine's metabolite (HNK) in mice, not human pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhou_2013 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ketamine's hypnotic actions in mice using electrophysiology and behavioral assays, reporting no pharmacokinetic parameters. |
| PGx | Zwartsen_2019 | not_relevant | 1 | 0 | The study does not investigate the pharmacokinetics or pharmacodynamics of arketing; it focuses on the T356M variant of the dopamine transporter. |
| popPK | van_2016 | irrelevant | 0 | 0 | The study is a PET pharmacokinetic evaluation of the radiotracer [11C]GMOM, with S-ketamine (arketamine) used only as a pharmacological challenge agent, not as the subject of PK modeling. |
| popPK | Štefková-Mazochová_2022 | irrelevant | 0 | 0 | The study investigates deschloroketamine (DCK), a different drug, not arketamine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-22 09:34 UTC</sub>
