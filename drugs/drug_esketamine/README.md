<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;esketamine&quot;}]"></div>

# esketamine

- **generic name:** esketamine
- **ATC codes:** `N01AX14`, `N06AX27`
- **DrugBank:** [DB11823](https://go.drugbank.com/drugs/DB11823) · **PubChem:** [CID 182137](https://pubchem.ncbi.nlm.nih.gov/compound/182137)
- **molar mass:** 237.73 g/mol (C13H16ClNO) — DrugBank
- **groups:** approved, investigational

## About

Esketamine is used to treat treatment-resistant depression and is also classed as a general anesthetic. It is authorised in the European Union for depressive disorder, and remains investigational for some other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2365493](https://www.wikidata.org/wiki/Q2365493) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| esnorketamine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:39 | 25:14 | 0/2/0 | 2/3/1 | 0/0/0 | 543,617/26,388 | einfracz / qwen3.8-27b | 29 | 5/14 | 27/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jonkman_2017_reference](drugs/drug_esketamine/Esketamine_Jonkman2017_reference.md) | — | parent + metabolite (no model) | 0 | Jonkman K et al., Pharmacokinetics and Bioavailability of…, Anesthesiology (2017) | [10.1097/ALN.0000000000001798](https://doi.org/10.1097/ALN.0000000000001798) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kamp_2021_reference](drugs/drug_esketamine/Esketamine_Kamp2021_reference.md) | — | 1-compartment (no model) | 2 | Kamp J et al., Stereoselective ketamine effect on card…, British journal of anaesthe… (2021) | [10.1016/j.bja.2021.02.034](https://doi.org/10.1016/j.bja.2021.02.034) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Coulter_2014_2_P05](drugs/drug_esketamine/pd_Coulter_2014_2_P05.md) | loss of response to a 5-s transcutaneous tetanus ← esketamine · direct Emax (saturable) effect | — | Coulter FL et al., Ketofol simulations for dosing in pedia…, Paediatric anaesthesia (2014) | [10.1111/pan.12386](https://doi.org/10.1111/pan.12386) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gao_2018_HCN_current](drugs/drug_esketamine/pd_Gao_2018_HCN_current.md) | HCN current ← ketamine · inhibition effect | — | Gao J et al., HCN channels contribute to the sensitiv…, Oncotarget (2018) | [10.18632/oncotarget.24408](https://doi.org/10.18632/oncotarget.24408) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gao_2018_LORR](drugs/drug_esketamine/pd_Gao_2018_LORR.md) | loss-of-righting reflex (LORR) ← ketamine · direct sigmoid Emax (Hill) effect | — | Gao J et al., HCN channels contribute to the sensitiv…, Oncotarget (2018) | [10.18632/oncotarget.24408](https://doi.org/10.18632/oncotarget.24408) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Coulter_2014_CHOWSS_2](drugs/drug_esketamine/pd_Coulter_2014_CHOWSS_2.md) | Children's Hospital of Wisconsin Sedation Scale score of less than 2 ← ketamine · categorical (graded) response model | — | Coulter FL et al., Ketofol dosing simulations for procedur…, Pediatric emergency care (2014) | [10.1097/PEC.0000000000000222](https://doi.org/10.1097/PEC.0000000000000222) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Flores_2015_HFO](drugs/drug_esketamine/pd_Flores_2015_HFO.md) | HFO power ← ketamine · stimulation effect | — | Flores FJ et al., A PK-PD model of ketamine-induced high-…, Journal of neural engineeri… (2015) | [10.1088/1741-2560/12/5/056006](https://doi.org/10.1088/1741-2560/12/5/056006) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kamp_2021_CO](drugs/drug_esketamine/pd_Kamp_2021_CO.md) | cardiac output ← S-ketamine · direct linear effect | — | Kamp J et al., Stereoselective ketamine effect on card…, British journal of anaesthe… (2021) | [10.1016/j.bja.2021.02.034](https://doi.org/10.1016/j.bja.2021.02.034) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ko_1997_KATP_channel_activity](drugs/drug_esketamine/pd_Ko_1997_KATP_channel_activity.md) | KATP channel activity ← ketamine · direct sigmoid Emax (Hill) effect | — | Ko SH et al., Blockade of myocardial ATP-sensitive po…, Anesthesiology (1997) | [10.1097/00000542-199707000-00010](https://doi.org/10.1097/00000542-199707000-00010) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=esketamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2B6` inducer/substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BDNF (target), EEF2 (inhibitor), GRIN1 (target), GRIN2B (target), NTRK2 (upregulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1245 matched, 186 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jonkman_2017.pdf` | Jonkman K et al., Pharmacokinetics and Bioavailability of…, Anesthesiology (2017) | popPK | 10 | [10.1097/ALN.0000000000001798](https://doi.org/10.1097/ALN.0000000000001798) | [28759464](https://pubmed.ncbi.nlm.nih.gov/28759464) | The study reports a population PK model for esketamine, but only specific absorption parameters (ka, bioavailability) are explicitly visible; primary disposition parameters (CL, V) are likely in the full text or tables not included in the evidence snippet. |
| `Matłoka_2022.pdf` | Matłoka M et al., Esketamine inhaled as dry powder: Pharm…, Pulmonary pharmacology & th… (2022) | popPK | 8 | [10.1016/j.pupt.2022.102127](https://doi.org/10.1016/j.pupt.2022.102127) | [35429651](https://pubmed.ncbi.nlm.nih.gov/35429651) | The paper is a preclinical PK study in rats and dogs reporting esketamine bioavailability, but specific quantitative disposition parameters (CL, V, t1/2) are not provided in the abstract text. |
| `Olofsen_2022.pdf` | Olofsen E et al., Ketamine Psychedelic and Antinociceptiv…, Anesthesiology (2022) | popPK | 8 | [10.1097/ALN.0000000000004176](https://doi.org/10.1097/ALN.0000000000004176) | [35188952](https://pubmed.ncbi.nlm.nih.gov/35188952) | The study reports a population pharmacokinetic-pharmacodynamic model for esketamine (S-ketamine), but the specific numeric PK parameters (CL, V, etc.) are not present in the provided text, which only lists pharmacodynamic parameters (C50, half-life). |

<sub>queue written 2026-10-07T04:36:39.708695+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdallah_2022 | irrelevant | 0 | 0 | This is a clinical efficacy trial for ketamine (racemic mixture) in PTSD and does not report pharmacokinetic parameters for esketamine. |
| popPK | Algera_2019 | irrelevant | 0 | 0 | The paper is a review of opioid reversal agents and does not report quantitative PK parameters for esketamine as the subject drug. |
| PGx | Anderson_2006 | not_relevant | 0 | 0 | The paper is a general review of pediatric analgesic PK/PD and does not report specific pharmacogenomic effects on esketamine. |
| PGx | Anderson_2006_2 | not_relevant | 0 | 0 | The paper is a general review of pediatric pain management and does not report specific pharmacogenomic effects on esketamine PK or PD. |
| PGx | Andrade_2017 | not_relevant | 7 | 2 | The paper mentions CYP2B6 genetic polymorphisms affect ketamine exposure, but it is a general review lacking quantitative effect sizes or specific data for esketamine. |
| PGx | Aroke_2016 | not_relevant | 0 | 0 | The paper reviews general anesthetic pharmacogenetics and mentions ketamine but does not provide specific pharmacogenomic data or effect sizes for esketamine. |
| PGx | Aroke_2017 | not_relevant | 3 | 5 | The study investigates pharmacogenetic associations with emergence phenomena (a behavioral/PD adverse event) for ketamine (the prodrug/enantiomer context of esketamine), but reports negative results and focuses on feasibility rather than providing quantitative PK/PD parameter modifications. |
| PGx | Ashraf_2018 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction (DDI) between esketamine and ticlopidine, not a pharmacogenomic effect based on genetic variants. |
| popPK | Baggot_1976 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketamine, not esketamine. |
| popPK | Bensel_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of propofol's interaction with kinesin motor proteins and does not report pharmacokinetic parameters for esketamine. |
| PGx | Björkholm_2016 | not_relevant | 0 | 0 | The paper reviews the mechanism of action of ketamine and antidepressants via BDNF signaling but does not report pharmacogenomic effects of gene variants on esketamine's PK or PD parameters. |
| PGx | Blednov_2019 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of ethanol, gaboxadol, pentobarbital, and ketamine, but does not report on esketamine. |
| PGx | Bloom_2019 | not_relevant | 0 | 0 | The paper investigates CYP2B6 variants and their effect on nicotine metabolism, not esketamine. |
| PGx | Borsato_2020 | not_relevant | 1 | 0 | The paper discusses CYP2B6 pharmacogenomics only as a future consideration for dose individualization and does not report any specific gene variant effect on PK or PD parameters. |
| popPK | Bottemanne_2021 | irrelevant | 0 | 0 | The paper is a theoretical proposal for a psychotherapy protocol and does not report any quantitative pharmacokinetic parameters for esketamine or ketamine. |
| popPK | Brown_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and distribution of the excipient benzethonium chloride (BZT), not the pharmacokinetics of esketamine. |
| popPK | Cai_1997 | irrelevant | 0 | 0 | The study investigates the cellular mechanisms of NMDA and opioid receptor interaction in vitro and does not report any pharmacokinetic parameters for esketamine. |
| popPK | Carnes_1997 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation regarding potassium current, not a pharmacokinetic study, and it uses racemic ketamine, not esketamine. |
| popPK | Cattai_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol, while ketamine is only a co-administered premedication. |
| popPK | Chamadia_2021 | irrelevant | 0 | 0 | The study investigates EEG biomarkers for ketamine anesthesia, not the pharmacokinetics of esketamine. |
| PGx | Chen_2010 | not_relevant | 0 | 0 | The paper reviews the effect of ketamine on CYP gene expression and drug interactions, not the effect of a gene variant on esketamine PK/PD. |
| popPK | Clements_1982 | irrelevant | 2 | 1 | The study investigates R(-)-ketamine (racemic mixture or unspecified enantiomer), not the specific enantiomer S(-)-esketamine, and does not report esketamine-specific PK parameters. |
| popPK | Coughlan_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular tone in canine coronary arteries, not a pharmacokinetic study of esketamine. |
| popPK | Coulter_2014 | irrelevant | 0 | 0 | The paper is a simulation study on ketofol (racemic ketamine + propofol) dosing using pharmacodynamic parameters, not a PK study of esketamine; no esketamine-specific PK parameters are reported. |
| popPK | Coulter_2014_2 | irrelevant | 0 | 0 | The study models racemic ketamine (not esketamine) and only reports PK-PD simulation parameters (EC50) rather than specific quantitative disposition parameters (CL, V) for esketamine. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The study investigates drug-drug interactions for 18 drugs (including ketamine) using urinary metabolic ratios, but does not mention esketamine, nor does it report effects of specific genetic variants on PK parameters. |
| popPK | Dakwar_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial of ketamine (not esketamine specifically, though related) that does not report any pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The text mentions esketamine only in passing regarding its approval status and does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Douglas_2015 | not_relevant | 4 | 2 | The paper studies ketamine (not esketamine) and links miRNA signatures to response, but it does not provide quantitative pharmacokinetic or pharmacodynamic effect sizes for a specific gene variant. |
| PGx | Fabbri_2021 | not_relevant | 0 | 0 | The study identifies drug candidates for depression using an in silico pharmacogenomic approach and does not report specific PK/PD effects for esketamine. |
| popPK | Flores_2015 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ketamine (the racemic parent), not esketamine (the specific enantiomer), and esketamine is not the subject drug. |
| PGx | Freye_2003 | not_relevant | 0 | 0 | The paper discusses opioid tolerance mechanisms and does not investigate esketamine pharmacogenomics. |
| popPK | Fux_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metamizole metabolites (4-MAA and 4-AA) in calves, not esketamine. |
| popPK | Gao_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of racemic ketamine and propofol in mice (specifically HCN channel mechanisms) and does not report quantitative PK parameters for esketamine. |
| popPK | Gilbert_2020 | irrelevant | 0 | 0 | The study is a neurobiological investigation of magnetoencephalographic correlates of suicidal ideation and does not report pharmacokinetic parameters for esketamine (or ketamine). |
| popPK | Gitlin_2020 | irrelevant | 0 | 0 | This is a clinical pharmacodynamic study focusing on analgesic and dissociative properties, with no reporting of pharmacokinetic parameters (CL, V, t1/2, etc.) for esketamine or ketamine. |
| popPK | Glue_2011 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | Gonzalez_2020 | irrelevant | 0 | 0 | The study focuses on cerebral blood flow changes after ketamine infusion, not esketamine pharmacokinetics, and contains no PK parameters. |
| popPK | Graham_2011 | irrelevant | 0 | 0 | The study is a functional electrophysiology investigation of glycine receptors in mouse spinal cord slices, not a pharmacokinetic study, and the reported values are synaptic currents and receptor affinity constants, not drug disposition parameters. |
| popPK | Green_2025 | irrelevant | 0 | 0 | The study investigates hemodynamic and analgesic outcomes of ketamine co-administration, not pharmacokinetic disposition parameters (CL, Vd, etc.) for esketamine. |
| popPK | Greenberg_1994 | irrelevant | 0 | 0 | The study examines the effects of alcohol and E. coli on endothelium-dependent relaxation and NO production in rat aorta, with ketamine used only as an anesthetic; it contains no pharmacokinetic data for esketamine. |
| popPK | Gurel_2022 | irrelevant | 0 | 0 | The study focuses on clinical outcomes (seizure quality and hemodynamics) during ECT, not on the pharmacokinetic parameters of esketamine or ketamine. |
| popPK | Hampton_1982 | irrelevant | 0 | 0 | The study is an in-vitro binding assay using ketamine (not esketamine) as a displaceagent, and contains no pharmacokinetic disposition parameters. |
| popPK | Heavner_1979 | irrelevant | 0 | 0 | The study investigates the racemic mixture of ketamine, not the specific S-enantiomer esketamine. |
| PGx | Hedrich_2016 | not_relevant | 0 | 0 | The paper discusses ketamine, not esketamine, and provides no data on esketamine pharmacokinetics or pharmacodynamics. |
| popPK | Herd_2007 | irrelevant | 4 | 3 | The study models the pharmacokinetics of norketamine, a metabolite of racemic ketamine, rather than esketamine itself, and esketamine is not the subject drug. |
| popPK | Hikichi_2015 | irrelevant | 0 | 0 | The study investigates a novel mGlu2 modulator (TASP0443294) and uses ketamine only as a model-inducing agent, without providing esketamine PK parameters. |
| popPK | Hornik_2018 | irrelevant | 0 | 0 | The paper studies ketamine, not esketamine, and does not report parameters for esketamine. |
| popPK | Janik_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial assessing depression symptoms (MADRS scores) and adverse events, with no pharmacokinetic data, models, or disposition parameters reported. |
| popPK | Jha_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing ketamine (not esketamine specifically) and ECT for depression, focusing on psychological outcomes rather than pharmacokinetic parameters. |
| popPK | Jonkman_2018 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (respiratory depression) and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for esketamine. |
| popPK | Kaka_1979 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ketamine, not esketamine. |
| popPK | Kaka_1980 | irrelevant | 1 | 1 | The paper studies racemic ketamine in dogs, not the specific enantiomer esketamine. |
| PGx | Kamp_2020 | not_relevant | 0 | 0 | The paper analyzes enantiomer pharmacokinetics (S vs R) and drug-drug interactions (SNP), but does not report pharmacogenomic effects of genetic variants. |
| popPK | Kamp_2021 | irrelevant | 2 | 1 | The study reports population pharmacodynamic parameters for esketamine and its metabolite, but the specific quantitative pharmacokinetic disposition parameters (clearance, volume, etc.) are referenced as coming from a companion study (Kamp et al. 2021, ref 10) rather than reported in this text. |
| PGx | Kato_2018 | not_relevant | 0 | 0 | The paper studies GLYX-13, not esketamine, and focuses on BDNF signaling mechanisms rather than pharmacogenomic effects on esketamine PK/PD. |
| popPK | Kienlen_1981 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of ketamine (not esketamine) and provides only qualitative descriptions (e.g., "tri-compartmental") without specific numeric parameter values for esketamine. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on channel blocking, not a pharmacokinetic study, and it uses racemic ketamine rather than esketamine. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of MK801 (dizocilpine) on potassium channels in rat cells, not the pharmacokinetics of esketamine. |
| popPK | Ko_1997 | irrelevant | 0 | 0 | This is a mechanistic electrophysiology study on KATP channels in rat hearts, not a pharmacokinetic study, and it involves racemic ketamine rather than esketamine. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The paper is an electrophysiological study of NMDA receptors in rat DRG neurons using ketamine as a tool compound; it does not report pharmacokinetic parameters for esketamine. |
| popPK | Lin_1992 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study on Xenopus oocytes focusing on the mechanism of GABA potentiation, not a pharmacokinetic study for esketamine. |
| popPK | Logginidou_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of propofol on somatosensory evoked potentials in rats, with no esketamine pharmacokinetic data. |
| PGx | Mahmoud_2016 | not_relevant | 0 | 0 | The paper is a general review of pediatric sedation trends and does not contain specific pharmacogenomic data or PK/PD parameters for esketamine. |
| PGx | Martin_2019 | not_relevant | 0 | 0 | The paper mentions genetic polymorphisms in the introduction as a factor for variability but does not report any pharmacogenomic results or effects on PK/PD parameters in this study. |
| popPK | Martini_2011 | irrelevant | 0 | 0 | The paper is a review article discussing PK/PD modeling techniques and does not provide original quantitative pharmacokinetic parameters for esketamine. |
| popPK | Matłoka_2022 | relevant | 8 | 2 | The paper is a preclinical PK study in rats and dogs reporting esketamine bioavailability, but specific quantitative disposition parameters (CL, V, t1/2) are not provided in the abstract text. |
| PGx | McCarthy_2023 | not_relevant | 0 | 0 | The paper discusses dextromethorphan-bupropion, not esketamine, and does not report pharmacogenomic effects on esketamine PK/PD. |
| popPK | McGrath_2020 | irrelevant | 0 | 0 | The study is a mechanistic in vitro and in vivo (zebrafish) investigation of diazepam's antagonism of etomidate, not a PK study of esketamine. |
| popPK | Merritt_1990 | irrelevant | 0 | 0 | The study investigates the vasospastic effects of monosodium glutamate in rabbit aorta and does not involve esketamine pharmacokinetics. |
| PGx | Meshkat_2022 | not_relevant | 5 | 0 | The paper is a systematic review discussing pharmacogenomic associations (e.g., CYP2B6, BDNF) rather than reporting primary quantitative PK/PD data or fitted effect sizes. |
| PGx | Meyer_2011 | not_relevant | 0 | 0 | The paper mentions ketamine but not esketamine, and is a general review of drug of abuse pharmacogenomics without specific esketamine data. |
| PGx | Meyer_2013 | not_relevant | 0 | 0 | The text describes mass spectrometry analysis of methoxetamine metabolites and contains no information on esketamine or pharmacogenomics. |
| popPK | Michalczyk_2013 | irrelevant | 0 | 0 | The study is a clinical trial measuring intracranial pressure changes during procedural sedation and does not report pharmacokinetic parameters (CL, V, ka, etc.) for esketamine or ketamine. |
| popPK | Milovanovic_2002 | irrelevant | 0 | 0 | The study investigates the pharmacological contractile effects of glutamate on isolated gut smooth muscle strips, with ketamine used only as a modulator, and contains no pharmacokinetic data for esketamine. |
| PGx | Mo_2009 | not_relevant | 0 | 0 | The paper discusses CYP2B6 polymorphisms but does not report specific PK/PD parameters for esketamine, nor does it distinguish esketamine effects from those of racemic ketamine or other substrates. |
| popPK | Moeller_2019 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of ketamine and norketamine in rats, not esketamine. |
| popPK | Murphy_1990 | irrelevant | 0 | 0 | The study focuses on Na+-H+ exchange in rat choroid plexus where ketamine is used only as an anesthetic, not as a pharmacokinetic subject. |
| popPK | Nagele_2005 | irrelevant | 0 | 0 | The study investigates the mechanism of action of xenon in *C. elegans* and does not report pharmacokinetic parameters for esketamine. |
| PGx | Nguyen_2015 | not_relevant | 0 | 0 | The paper studies dextromethorphan in mice and does not involve esketamine or pharmacogenomic effects. |
| popPK | Nielsen_2014 | irrelevant | 4 | 2 | The study focuses on ketamine (the parent drug), not esketamine (the active enantiomer), and only reports limited PK parameters (Cmax, Tmax) for ketamine without a full population model or clearance/volume estimates for esketamine. |
| PGx | Nofziger_2019 | not_relevant | 0 | 0 | The paper investigates dextromethorphan, not esketamine, and focuses on clinical outcomes in a mixed CYP2D6 population rather than a specific pharmacogenomic effect on esketamine PK/PD. |
| PGx | Noppers_2011 | not_relevant | 1 | 1 | The study assesses the effect of a pharmacokinetic drug-drug interaction (CYP enzyme induction by rifampicin) rather than a genetic variant, and therefore does not report a pharmacogenomic effect. |
| popPK | Olofsen_2022 | relevant | 8 | 0 | The study reports a population pharmacokinetic-pharmacodynamic model for esketamine (S-ketamine), but the specific numeric PK parameters (CL, V, etc.) are not present in the provided text, which only lists pharmacodynamic parameters (C50, half-life). |
| popPK | Pedersen_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological evaluation of smooth muscle relaxation potency (EC50), not a pharmacokinetic study reporting disposition parameters for esketamine. |
| popPK | Pelletier_2022 | irrelevant | 2 | 3 | This is a review article that primarily discusses ketamine (racemate) and other ACH derivatives, mentioning esketamine only to note it has a longer excretion half-life than the racemate without providing specific population PK model parameters or distinct quantitative disposition values (CL, V) for esketamine alone. |
| PGx | Peltoniemi_2016 | not_relevant | 0 | 0 | The text is a general review of ketamine pharmacology and does not report specific pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Popova_2019 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study reporting depression scores and adverse events, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Przybylo_1995 | not_relevant | 0 | 0 | The paper studies sodium nitroprusside metabolism and mentions ketamine only as part of the anesthetic regimen; it contains no pharmacogenomic data regarding esketamine. |
| popPK | Rajdev_1992 | irrelevant | 0 | 0 | This is a receptor binding study in rat brain membranes involving ketamine as a displacer, not a pharmacokinetic study of esketamine. |
| PGx | Ramos-da-Silva_2021 | not_relevant | 2 | 0 | Review of omics mechanisms for antidepressants; mentions ketamine efficacy genes but no specific esketamine PK/PD pharmacogenomic data reported. |
| PGx | Rao_2016 | not_relevant | 0 | 0 | The paper studies ketamine, not esketamine, and reports no significant pharmacogenomic effect on PK parameters. |
| PGx | Restrepo_2009 | not_relevant | 0 | 0 | The paper reviews polymorphic metabolism of anaesthetics but does not discuss esketamine or provide specific pharmacogenomic PK/PD data for it. |
| popPK | Reynolds_1994 | irrelevant | 0 | 0 | This is an in vitro radioligand binding study of NMDA receptors, not a pharmacokinetic study of esketamine. |
| popPK | Rischka_2022 | irrelevant | 0 | 0 | The study is a PET imaging trial for the radioligand (R)-11C-Me-NB1, not a pharmacokinetic study of the drug esketamine. |
| popPK | Rock_1989 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of aerosolized ketamine on airway resistance in guinea pigs and does not report pharmacokinetic parameters. |
| PGx | Saavedra_2020 | not_relevant | 0 | 0 | The study investigates dextromethorphan in mice, not esketamine, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Saba_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics in pain management generally but explicitly states there is no strong evidence of individual polymorphisms manifesting in clinical outcomes for ketamine, and it does not report specific PK/PD effects of esketamine. |
| popPK | Sabia_2011 | irrelevant | 0 | 0 | The paper is a review regarding ketamine (not specifically esketamine) in complex regional pain syndrome and contains no original quantitative pharmacokinetic parameters. |
| popPK | Salloum_2019 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of ketamine (not esketamine) in treating depression and contains no pharmacokinetic parameters or disposition data. |
| PGx | Schep_2023 | not_relevant | 1 | 0 | The paper is a general clinical toxicology review of ketamine that mentions metabolic enzymes but does not report specific pharmacogenomic effects of gene variants on PK or PD parameters for esketamine. |
| popPK | Schwieger_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of (R)-ketamine (racemic ketamine) in dogs, not esketamine, which is the specific subject required. |
| popPK | Schüttler_1987 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (Emax, IC50) for ketamine enantiomers, not quantitative population pharmacokinetic disposition parameters (CL, V) for esketamine. |
| popPK | Sedlacik_2015 | irrelevant | 0 | 0 | The study is an MRI/micro-probe correlation study in mice where ketamine was used only as an anesthetic, not as the subject drug for pharmacokinetic analysis. |
| popPK | Sharpee_2016 | irrelevant | 0 | 0 | The paper is a table of contents for a computational neuroscience meeting and contains no pharmacokinetic data or study of esketamine. |
| PGx | Sherif_2016 | not_relevant | 0 | 0 | The text discusses cannabinoids and ketamine as psychotomimetics but does not report pharmacokinetic or pharmacodynamic parameters of esketamine. |
| PGx | Stojanova_2026 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction (ketamine-induced clearance of tacrolimus/sirolimus), not a pharmacogenomic effect on esketamine. |
| PGx | Sukhram_2026 | not_relevant | 0 | 0 | The paper is a scoping review of ketamine/esketamine in diabetes and discusses metabolic interactions and clinical outcomes, but it does not report specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Timcenko_1995 | irrelevant | 1 | 0 | The study models total anesthesia depth using a cohort of drugs including racemic ketamine, not esketamine specifically, and no numeric parameter values are provided in the evidence. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study investigates the pharmacological blocking of T-type calcium currents in rat neurons by various agents, including ketamine, but does not measure esketamine pharmacokinetic parameters. |
| popPK | Tucciarone_2026 | irrelevant | 0 | 0 | This is a clinical efficacy trial investigating buprenorphine's effect on suicidal ideation after ketamine dosing; it does not report any pharmacokinetic parameters (CL, V, etc.) for esketamine or ketamine. |
| PGx | Turpeinen_2012 | not_relevant | 0 | 0 | The paper is a review of CYP2B6 mentioning ketamine but does not report specific pharmacogenomic effects on esketamine's PK/PD parameters. |
| PGx | Vaughns_2015 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetics in obese adolescents and does not report pharmacogenomic effects for esketamine. |
| PGx | Wang_2008 | not_relevant | 1 | 0 | The paper is a review of CYP2B6 and mentions ketamine as a substrate, but it does not report specific pharmacogenomic effects on the PK/PD parameters of esketamine. |
| PGx | Wang_2008_2 | not_relevant | 0 | 0 | The paper is a review on strategies and models for evaluating anesthetic neurotoxicity in the developing nervous system, mentioning ketamine as a primary example, but it does not report a pharmacogenomic effect on the PK or PD of esketamine. |
| popPK | Wendel-Garcia_2022 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect (cholestatic liver injury) of ketamine, not esketamine, and does not report pharmacokinetic parameters. |
| popPK | Wieber_1975 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketamine, not esketamine, which is the specific subject drug required. |
| PGx | Wilson_2020 | not_relevant | 0 | 0 | The paper studies the behavioral efficacy of ketamine in mouse models, not the pharmacokinetics or pharmacodynamics of esketamine in humans. |
| popPK | Yamakura_2001 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study on potassium channel effects in Xenopus oocytes, reporting no pharmacokinetic parameters for esketamine. |
| PGx | Yanagihara_2001 | not_relevant | 0 | 0 | The paper investigates the enzymatic kinetics of CYP2B6 in N-demethylation but does not report pharmacogenomic associations (gene variants) or PK/PD changes based on genotype. |
| PGx | Ying_2012 | not_relevant | 0 | 0 | The study investigates the stereoselective metabolism of racemic ketamine (not esketamine) using purified CYP3A4 enzyme and does not examine the impact of human genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Yu_2010 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of luteolin in reversing anesthesia induced by ketamine and xylazine in mice, but does not report pharmacokinetic parameters for esketamine or ketamine. |
| popPK | Yuen_2017 | irrelevant | 0 | 0 | The study focuses on ketamine (not esketamine) and uses PK only for dose prediction in a behavioral model, not for reporting disposition parameters of esketamine. |
| PGx | Zanos_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (mGlu2 receptor signaling) of a ketamine metabolite in mice, not a human pharmacogenomic effect on esketamine PK/PD. |
| PGx | Zarate_2012 | not_relevant | 0 | 0 | The study specifically investigates the pharmacokinetics and pharmacodynamics of ketamine, not esketamine, and reported no significant relationship between CYP450 gene polymorphisms and the parameters examined. |
| PGx | Zheng_2017 | not_relevant | 2 | 10 | The study investigates ketamine metabolism, not esketamine. |
| popPK | Zhou_2013 | irrelevant | 0 | 0 | The study investigates the mechanistic basis of ketamine (not esketamine) actions in mouse forebrain HCN1 channels and reports electrophysiological and behavioral data (EC50 for hypnosis), but contains no pharmacokinetic parameters. |
| PGx | Zwartsen_2019 | not_relevant | 0 | 0 | The study investigates the interaction of esketamine (or its analogs like ketamine/methoxetamine) with the dopamine transporter (DAT) in an in vitro setting, not the effect of a gene variant on the PK or PD of esketamine in humans. |
| popPK | van_2016 | irrelevant | 0 | 0 | The study investigates the PET tracer kinetics of [11C]GMOM in the brain, using S-ketamine only as a pharmacological challenge agent rather than as the subject drug for PK analysis. |
| popPK | Štefková-Mazochová_2022 | irrelevant | 0 | 0 | The study focuses on deschloroketamine (DCK), a different drug, not esketamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:36 UTC</sub>
