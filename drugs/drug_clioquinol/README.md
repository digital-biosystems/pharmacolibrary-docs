<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;clioquinol&quot;}]"></div>

# clioquinol

- **generic name:** clioquinol
- **ATC codes:** `D08AH30`, `D09AA10`, `G01AC02`, `P01AA02`, `S02AA05`
- **DrugBank:** [DB04815](https://go.drugbank.com/drugs/DB04815) · **PubChem:** [CID 2788](https://pubchem.ncbi.nlm.nih.gov/compound/2788)
- **molar mass:** 305.5 g/mol (C9H5ClINO) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** Clioquinol was withdrawn in 1983 due to neurotoxicity.

**Indication.** Used as a topical antifungal treatment.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:11 | 6:14 | 0/0/0 | 0/0/0 | 0/0/1 | 35,984/2,931 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **NQO1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chhetri_2022](drugs/drug_clioquinol/pgx_Chhetri_2022_NQO1_Q100.md) | Chhetri J et al., NQO1 protects against clioquinol toxici…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1000278](https://doi.org/10.3389/fphar.2022.1000278) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clioquinol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>“…ical absorption is rapid and extensive, especially when the skin is covered with an occlus…”</sub> | prose |
| metabolism | liver | `NQO1` target | paper PGx gene |

<sub>Actors without a tissue in the table: OPRK1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 70 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bondiolotti_2007.pdf` | Bondiolotti G et al., Pharmacokinetics and distribution of cl…, The Journal of pharmacy and… (2007) | popPK | 8 | [10.1211/jpp.59.3.0008](https://doi.org/10.1211/jpp.59.3.0008) | [17331342](https://pubmed.ncbi.nlm.nih.gov/17331342) | The study reports quantitative PK parameters (Tmax, half-life, AUC ratios) for clioquinol in hamsters, but lacks explicit clearance or volume values. |
| `Chen_2025.pdf` | Chen P et al., New applications of clioquinol in the t…, Journal of pharmaceutical a… (2025) | pd | 4 | [10.1016/j.jpha.2024.101069](https://doi.org/10.1016/j.jpha.2024.101069) | [39902456](https://www.ncbi.nlm.nih.gov/pubmed/39902456) | metadata signals extractable PD data (IC50) |
| `Lee_2023.pdf` | Lee H et al., Identification of small molecule inhibi…, Bioorganic & medicinal chem… (2023) | pd | 4 | [10.1016/j.bmc.2023.117289](https://doi.org/10.1016/j.bmc.2023.117289) | [37094433](https://www.ncbi.nlm.nih.gov/pubmed/37094433) | metadata signals extractable PD data (IC50) |
| `Prajapati_2026.pdf` | Prajapati AK et al., Inhibiting catalytic activity of Plasmo…, Biochimie (2026) | pd | 4 | [10.1016/j.biochi.2025.12.006](https://doi.org/10.1016/j.biochi.2025.12.006) | [41391719](https://www.ncbi.nlm.nih.gov/pubmed/41391719) | metadata signals extractable PD data (IC50) |
| `Salar_2024.pdf` | Salar U et al., Biochemical evaluation and ligand bindi…, Bioorganic chemistry (2024) | pd | 4 | [10.1016/j.bioorg.2024.107153](https://doi.org/10.1016/j.bioorg.2024.107153) | [38335754](https://www.ncbi.nlm.nih.gov/pubmed/38335754) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T18:10:53.451495+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adsule_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of copper complexes where clioquinol is used only as a comparator for proteasome inhibition, with no pharmacokinetic parameters reported. |
| popPK | Amiri_2023 | irrelevant | 0 | 0 | The paper is a computational drug repurposing study using graph embedding to predict drug-target interactions and does not report any pharmacokinetic parameters for clioquinol. |
| PD | Amiri_2023 | not_relevant | 0 | 0 | The paper describes a computational graph embedding method for predicting drug-target interactions and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for clioquinol. |
| popPK | Andersson_2009 | irrelevant | 0 | 0 | The paper is a mechanistic study on TRPA1 activation and pain pathways, not a pharmacokinetic study, and contains no disposition parameters for clioquinol. |
| popPK | Bondiolotti_2006 | irrelevant | 2 | 0 | The paper describes an analytical method for measuring clioquinol levels but does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Bowroju_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on Alzheimer's disease drug design where clioquinol is used only as a comparator for aggregation inhibition, with no pharmacokinetic data reported. |
| PD | Bowroju_2020 | not_relevant | 3 | 2 | The paper reports a single EC50 value for clioquinol as a reference standard in an in vitro assay, but does not provide a full dose-response curve, multiple data points, or a PK/PD model for clioquinol itself. |
| popPK | Cater_2011 | irrelevant | 0 | 0 | The paper is a mechanistic study on clioquinol's effect on apoptosis proteins in prostate cancer cells and does not report any pharmacokinetic parameters. |
| popPK | Chen_2008 | irrelevant | 0 | 0 | The paper is a review of anticancer mechanisms and does not report quantitative pharmacokinetic parameters for clioquinol. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of clioquinol targeting NLRP3 and does not report pharmacokinetic or pharmacodynamic exposure-response data or numeric PD parameters. |
| popPK | Cherdtrakulkiat_2016 | irrelevant | 0 | 0 | The paper is an in-vitro study on antimicrobial and antioxidant activities, containing no pharmacokinetic parameters for clioquinol. |
| PD | Cherdtrakulkiat_2016 | not_relevant | 1 | 0 | The paper reports MIC and IC50 values for antimicrobial and antioxidant assays, which are in vitro potency metrics, not pharmacodynamic (exposure-response) relationships for the drug in a biological system. |
| popPK | Choi_2013 | irrelevant | 0 | 0 | The study is a mechanistic/therapeutic evaluation of clioquinol in a mouse model of multiple sclerosis and does not report any pharmacokinetic parameters. |
| popPK | Deka_2024 | irrelevant | 0 | 0 | The paper reports on the synthesis and cytotoxicity of cobalt(III) complexes, not the pharmacokinetics of clioquinol. |
| PD | Deka_2024 | not_relevant | 0 | 0 | The paper studies cobalt(III) complexes, not clioquinol, and reports only static IC50 values without a concentration-response curve or PD model. |
| popPK | Devappa_2023 | irrelevant | 0 | 0 | The paper studies novel tetrahydroisoquinoline compounds for anti-tumor activity and does not involve clioquinol or report any pharmacokinetic parameters. |
| PD | Devappa_2023 | not_relevant | 0 | 0 | The paper studies novel tetrahydroisoquinoline compounds, not clioquinol, and reports only in vitro IC50 values without any exposure-response or PK/PD modeling. |
| popPK | Ding_2005 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study of anticancer activity and does not report any pharmacokinetic parameters for clioquinol. |
| popPK | Ekpenyong_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of CLBQ14, using clioquinol only as an internal standard for quantification. |
| popPK | Ekpenyong_2020 | irrelevant | 0 | 0 | The study investigates CLBQ14, a different drug, not clioquinol. |
| popPK | El_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro characterization of new iron chelators, containing no pharmacokinetic data for clioquinol. |
| PD | El_2024 | not_relevant | 0 | 0 | The paper reports in vitro iron chelation constants and free radical scavenging activities, but does not provide any pharmacokinetic or pharmacodynamic exposure-response or dose-response data for clioquinol. |
| popPK | Fan_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of neurotoxicity (TPP inactivation) and does not report any pharmacokinetic parameters for clioquinol. |
| popPK | Gonzalez_2017 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and mechanistic study of a new molecule inspired by clioquinol, containing no pharmacokinetic data for clioquinol. |
| PD | Gonzalez_2017 | not_relevant | 0 | 0 | The paper reports the synthesis and activity of a new triazine-bridged molecule, not clioquinol, and provides no exposure-response or dose-response PD analysis for clioquinol. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory and anti-infective mechanisms of clioquinol in sepsis models, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hazenberg_2025 | irrelevant | 0 | 0 | The study is a clinical/parasitological outcome analysis of Dientamoeba fragilis treatment and does not report any pharmacokinetic parameters for clioquinol. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro anticancer activity of calcium complexes, not the pharmacokinetics of clioquinol. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for novel calcium complexes, not for clioquinol itself, and does not provide a concentration-effect curve or PD model for the specific drug in question. |
| popPK | Jack_1973 | irrelevant | 0 | 0 | no_text gate: only 47 chars of text extracted (&lt; 400) |
| popPK | Jiang_2011 | irrelevant | 0 | 0 | The study focuses on in-vitro cytotoxicity and mechanistic comparisons (zinc ionophore activity, ROS generation) rather than pharmacokinetic disposition parameters. |
| popPK | Kaur_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on Alzheimer's disease compounds where clioquinol is used only as a reference comparator, with no pharmacokinetic data reported. |
| PD | Kaur_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a novel compound (4v) and compares it to clioquinol, but does not provide a pharmacokinetic/pharmacodynamic model, exposure-response relationship, or numeric PD parameters for clioquinol itself. |
| popPK | Kaur_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on Alzheimer's disease aggregation and does not report any pharmacokinetic parameters for clioquinol. |
| PD | Kaur_2025 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a derivative (4k) and a qualitative comparison to clioquinol, but does not provide a concentration-effect curve or numeric PD parameters for clioquinol itself. |
| popPK | Kulkarni_2010 | irrelevant | 1 | 0 | The study focuses on nanoparticle delivery and imaging of amyloid plaques using radiolabeled clioquinol as a diagnostic probe, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for the drug itself. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Lee_2023 | not_relevant | 0 | 0 | The paper focuses on high-throughput screening for MMP-14 inhibitors and does not report pharmacodynamic or exposure-response data for clioquinol. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro/in vivo biological activity of clioquinol hybrids for Alzheimer's disease, with no pharmacokinetic parameters reported. |
| PD | Li_2022 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and in vivo efficacy/toxicity data, but lacks a formal pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis linking drug concentration to effect. |
| popPK | Li_2023 | irrelevant | 1 | 0 | The paper focuses on the antifungal activity of a novel derivative (L14) using clioquinol only as a comparator, and no quantitative pharmacokinetic parameters for clioquinol are provided in the evidence. |
| popPK | Mao_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel hybrid compounds, not a pharmacokinetic study, and reports no disposition parameters for clioquinol. |
| popPK | Meade_1975 | irrelevant | 0 | 0 | The paper is an epidemiological case-history regarding the association between clioquinol and SMON, containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | Meade_1975 | not_relevant | 0 | 0 | The paper is an epidemiological case-history that explicitly states there was no dose-response relationship and provides no numeric PD parameters or concentration-effect data. |
| popPK | Moret_2006 | irrelevant | 0 | 0 | The study focuses on copper distribution and neuroprotection mechanisms, not pharmacokinetic parameters for clioquinol. |
| popPK | Park_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on autophagy and zinc ionophore activity, containing no pharmacokinetic parameters. |
| PGx | Perez_2019 | not_relevant | 2 | 0 | The text is a review highlighting hypotheses and general connections between genetic variation and clioquinol toxicity, but it does not report specific quantitative pharmacokinetic or pharmacodynamic parameter changes linked to genotypes. |
| popPK | Pippi_2017 | irrelevant | 0 | 0 | The study focuses on antifungal activity, toxicity, and permeation in Franz diffusion cells, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for clioquinol. |
| PD | Pippi_2017 | not_relevant | 2 | 1 | The paper reports MICs and qualitative time-kill/permeation data but does not provide a quantitative concentration-effect curve or numeric PD parameters (e.g., Emax, EC50) for clioquinol. |
| popPK | Pippi_2019 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (time-kill, effective concentration) and toxicology in animal models, not on quantitative pharmacokinetic disposition parameters (CL, V, ka) for clioquinol. |
| popPK | Pippi_2023 | irrelevant | 0 | 0 | The study focuses on antimicrobial activity and pharmacodynamics (MIC, cell wall damage) rather than pharmacokinetic disposition parameters. |
| popPK | Prajapati_2026 | irrelevant | 0 | 0 | The study is a biochemical/mechanistic investigation of enzyme inhibition in vitro and does not report any pharmacokinetic parameters for clioquinol. |
| PD | Prajapati_2026 | not_relevant | 0 | 0 | The paper focuses on the biochemical inhibition of plasmepsin V by clioquinol in vitro and does not report in vivo pharmacokinetic or pharmacodynamic exposure-response relationships. |
| popPK | Qin_2025 | irrelevant | 0 | 0 | The paper describes in vitro anticancer activity of calcium complexes containing clioquinol ligands, not a pharmacokinetic study of clioquinol itself. |
| popPK | Rahman_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro anti-cancer screening of quinoline derivatives, not the pharmacokinetics of clioquinol. |
| PD | Rahman_2023 | not_relevant | 0 | 0 | The paper reports IC50 values for newly synthesized quinoline-pyridine conjugates, not for the drug clioquinol. |
| popPK | Ritchie_2004 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism of action and clinical efficacy of clioquinol in Alzheimer's disease, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Salar_2024 | irrelevant | 0 | 0 | The study is an in-vitro biochemical evaluation of enzyme inhibition and ligand binding, not a pharmacokinetic study, and reports no disposition parameters for clioquinol. |
| PD | Salar_2024 | not_relevant | 0 | 0 | The paper focuses on biochemical and structural studies of an enzyme from Staphylococcus aureus and does not report any pharmacodynamic or exposure-response data for clioquinol. |
| popPK | Sampson_2008 | irrelevant | 0 | 0 | This is a Cochrane review of clinical efficacy trials for Alzheimer's disease and does not report any pharmacokinetic parameters for clioquinol. |
| popPK | Sampson_2012 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy trials for Alzheimer's disease, not a pharmacokinetic study, and it contains no quantitative PK parameters for clioquinol. |
| popPK | Sampson_2014 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy trials for Alzheimer's disease, not a pharmacokinetic study, and it reports no quantitative disposition parameters for clioquinol. |
| popPK | Sandor_2017 | irrelevant | 0 | 0 | The paper is a transcriptomic study of Parkinson's disease neurons where clioquinol is used as a therapeutic agent for gene expression comparison, not a pharmacokinetic study. |
| PD | Sandor_2017 | not_relevant | 0 | 0 | The paper uses clioquinol for transcriptomic profiling to identify gene expression changes but does not report any pharmacodynamic parameters, dose-response curves, or exposure-response relationships. |
| popPK | Scalese_2021 | irrelevant | 0 | 0 | The paper studies vanadium complexes against Trypanosoma cruzi and does not involve clioquinol or pharmacokinetic parameters. |
| PD | Scalese_2021 | not_relevant | 0 | 0 | The paper studies heteroleptic oxidovanadium(V) complexes, not clioquinol, and reports only static IC50 values for a different compound class. |
| popPK | Schimmer_2012 | irrelevant | 2 | 0 | The study is a Phase I trial that mentions measuring plasma and intracellular levels but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) in the provided evidence. |
| PD | Schimmer_2012 | not_relevant | 2 | 1 | The study reports only qualitative "minimal inhibition" of the proteasome and low intracellular levels without providing numeric concentration-effect data, dose-response curves, or derivable PD parameters like Emax or EC50. |
| popPK | Smith_2007 | irrelevant | 0 | 0 | The paper is a mechanistic review of redox chemistry in Alzheimer's disease and mentions clioquinol only as a therapeutic agent, providing no pharmacokinetic data. |
| popPK | Sousa_2019 | irrelevant | 0 | 0 | The study focuses on the antileishmanial activity of a new compound (AM1009) with clioquinol serving only as a comparator control, and no pharmacokinetic parameters are reported. |
| PD | Sousa_2019 | not_relevant | 3 | 2 | The paper focuses on a new derivative (AM1009) and only uses clioquinol as a qualitative control, reporting no specific numeric PD parameters (EC50, Emax, etc.) for clioquinol in the provided text. |
| popPK | Su_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PDE9 inhibitors where clioquinol is used only as a reference compound for in-vitro assays, with no pharmacokinetic parameters reported. |
| PD | Su_2016 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for PDE9 inhibition and qualitative metal chelation/aggregation data, but does not provide a pharmacodynamic (exposure-response) model or dose-response curve for clioquinol itself. |
| popPK | Tantimongcolwat_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of protein binding (BSA) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PD | Tantimongcolwat_2019 | not_relevant | 0 | 0 | The paper investigates the in vitro binding interaction between clioquinol and bovine serum albumin (BSA) using spectroscopy and docking, reporting binding constants but no pharmacodynamic (exposure-response or dose-response) effect on a biological target or clinical outcome. |
| popPK | Tavares_2018 | irrelevant | 0 | 0 | The study focuses on antileishmanial activity and mechanism of action (EC50, cytotoxicity) rather than pharmacokinetic disposition parameters. |
| popPK | Tsai_2018 | irrelevant | 1 | 0 | The study focuses on the physicochemical properties and drug release kinetics of a film formulation, not on the pharmacokinetic disposition parameters (CL, V, etc.) of clioquinol in a biological system. |
| popPK | Tuller_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and signaling pathways, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Wali_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro enzyme inhibition of clioquinol derivatives, containing no pharmacokinetic data. |
| PD | Wali_2022 | not_relevant | 3 | 5 | The paper reports in-vitro enzyme inhibition IC50 values and kinetic types, which are pharmacological potency metrics, but does not report in-vivo pharmacodynamic (exposure-response) or dose-response relationships for the drug in a biological system. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of WBQ5187, with clioquinol serving only as a comparator agent without reported PK parameters. |
| PD | Wang_2019 | not_relevant | 3 | 1 | The paper reports qualitative dose-response efficacy (40 mg/kg threshold) for WBQ5187 and compares it to clioquinol, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model for clioquinol. |
| popPK | Yoshinari_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfotransferase activity and does not report pharmacokinetic disposition parameters for clioquinol. |
| popPK | de_2023 | irrelevant | 0 | 0 | The study is an in vitro efficacy evaluation of fungicides against a fungus, not a pharmacokinetic study, and reports no disposition parameters for clioquinol. |
| popPK | van_2013 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatments for Blastocystis and does not report any pharmacokinetic parameters for clioquinol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
