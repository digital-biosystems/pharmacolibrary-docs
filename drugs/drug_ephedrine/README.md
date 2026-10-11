<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;ephedrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ephedrine_Tran2020_reference&quot;,&quot;label&quot;:&quot;Tran_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ephedrine

- **generic name:** ephedrine
- **ATC codes:** `C01CA26`, `R01AA03`, `R01AB05`, `R03CA02`, `S01FB02`
- **DrugBank:** [DB01364](https://go.drugbank.com/drugs/DB01364) · **PubChem:** [CID 9294](https://pubchem.ncbi.nlm.nih.gov/compound/9294)
- **molar mass:** 165.2322 g/mol (C10H15NO) — DrugBank
- **groups:** approved, investigational

## About

Ephedrine is a sympathomimetic used for conditions such as asthma, rhinitis, and orthostatic hypotension, and as a nasal decongestant, cardiac stimulant, and pupil-dilating agent. It remains an approved medicine and is included on the WHO list of essential medicines, so it is still in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q219626](https://www.wikidata.org/wiki/Q219626) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ephedrine | parent | 165.232 | C10H15NO | DrugBank | [9294](https://pubchem.ncbi.nlm.nih.gov/compound/9294) | Csajka_2005 |
| norephedrine | metabolite | 151.209 | C9H13NO | PubChem | [26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934) | Csajka_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 19:54 | 0:40 | 1/1/0 | 0/0/0 | 0/0/2 | 12,481/1,159 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Tran_2020_reference](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Tran QT et al., Clinical Evaluation of Acetaminophen-Ga…, Pharmaceutics (2020) | [10.3390/pharmaceutics12121182](https://doi.org/10.3390/pharmaceutics12121182) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Csajka_2005_reference](drugs/drug_ephedrine/Ephedrine_Csajka2005_reference.md) | — | parent + metabolite (no model) | 6 | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **SLC22A1** | `Q1` · Km | transport | [Jensen_2020](drugs/drug_ephedrine/pgx_Jensen_2020_SLC22A1_Q1.md) | Jensen O et al., Cellular Uptake of Psychostimulants - A…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.609811](https://doi.org/10.3389/fphar.2020.609811) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **SLC22A2** | `Q1` · Km | transport | [Jensen_2020](drugs/drug_ephedrine/pgx_Jensen_2020_SLC22A2_Q1.md) | Jensen O et al., Cellular Uptake of Psychostimulants - A…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.609811](https://doi.org/10.3389/fphar.2020.609811) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ephedrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate, `SLC22A1` transport | DrugBank actor |
| excretion | kidney | `SLC22A2` transport | paper PGx gene |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), ADRB2 (target), DRD2 (target), SLC18A2 (inhibitor), SLC6A2 (inverse agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 38 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Csajka_2005.pdf` | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) | [15752380](https://pubmed.ncbi.nlm.nih.gov/15752380) | The study reports quantitative population PK parameters (clearance, volume) for ephedrine in healthy human subjects, with key values provided in the abstract. |
| `Yafune_2001.pdf` | Yafune A et al., Population pharmacokinetic analysis of…, International journal of cl… (2001) | popPK | 10 | not captured | [11824653](https://pubmed.ncbi.nlm.nih.gov/11824653) | The paper is a population PK study of ephedrine in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| `Atsumi_2026.pdf` | Atsumi T et al., Effect of pre- and postprandial adminis…, Journal of natural medicines (2026) | popPK | 9 | [10.1007/s11418-025-01980-w](https://doi.org/10.1007/s11418-025-01980-w) | [41276775](https://pubmed.ncbi.nlm.nih.gov/41276775) | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine in humans, but the specific numeric values are not present in the provided abstract text. |
| `Marvola_1978.pdf` | Marvola M et al., Pharmacokinetics and locomotor activity…, Acta pharmacologica et toxi… (1978) | popPK | 9 | [10.1111/j.1600-0773.1978.tb02282.x](https://doi.org/10.1111/j.1600-0773.1978.tb02282.x) | [726903](https://pubmed.ncbi.nlm.nih.gov/726903) | The study reports a compartmental PK model for ephedrine in mice, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| `Wan_2019.pdf` | Wan JY et al., [Pharmacokinetics of compatible effecti…, Zhongguo Zhong yao za zhi =… (2019) | popPK | 8 | [10.19540/j.cnki.cjcmm.20190125.002](https://doi.org/10.19540/j.cnki.cjcmm.20190125.002) | [31355574](https://pubmed.ncbi.nlm.nih.gov/31355574) | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Persky_2004.pdf` | Persky AM et al., Modelling the cardiovascular effects of…, British journal of clinical… (2004) | pd | 5 | [10.1111/j.1365-2125.2003.02062.x](https://doi.org/10.1111/j.1365-2125.2003.02062.x) | [15089807](https://www.ncbi.nlm.nih.gov/pubmed/15089807) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Song_2024.pdf` | Song D et al., Natural Binary Herbal Small Molecules S…, ACS biomaterials science &… (2024) | pd | 5 | [10.1021/acsbiomaterials.4c01227](https://doi.org/10.1021/acsbiomaterials.4c01227) | [39324477](https://www.ncbi.nlm.nih.gov/pubmed/39324477) | metadata signals extractable PD data (EC50) |
| `Xu_2024.pdf` | Xu HC et al., The EC50 of propofol with different dos…, Medicine (2024) | pd | 5 | [10.1097/MD.0000000000038421](https://doi.org/10.1097/MD.0000000000038421) | [38847682](https://www.ncbi.nlm.nih.gov/pubmed/38847682) | metadata signals extractable PD data (EC50) |
| `Alexander_2005.pdf` | Alexander M et al., Noradrenergic and dopaminergic effects…, Synapse (New York, N.Y.) (2005) | pd | 4 | [10.1002/syn.20126](https://doi.org/10.1002/syn.20126) | [15729739](https://www.ncbi.nlm.nih.gov/pubmed/15729739) | metadata signals extractable PD data (EC50) |
| `Jing_2010.pdf` | Jing H et al., Ephedrine controls heart rhythms by act…, Journal of cardiovascular p… (2010) | pd | 4 | [10.1097/FJC.0b013e3181ce965c](https://doi.org/10.1097/FJC.0b013e3181ce965c) | [20040889](https://www.ncbi.nlm.nih.gov/pubmed/20040889) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T08:57:37.164757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Alexander_2005 | not_relevant | 0 | 0 | The paper focuses on amphetamine-like stimulants in baboons and does not report pharmacodynamic or exposure-response data for ephedrine. |
| popPK | Atsumi_2026 | relevant | 9 | 2 | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Cardozo_2024 | irrelevant | 0 | 0 | Ephedrine is used only as a rescue vasopressor for hypotension, and no pharmacokinetic parameters are reported. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The study investigates the EC50 of propofol, and ephedrine is only mentioned as a rescue medication for hypotension, not as the subject of pharmacokinetic analysis. |
| PD | Guo_2020 | not_relevant | 0 | 0 | The paper reports an EC50 for propofol, not ephedrine; ephedrine is only mentioned as a rescue medication with no dose-response or PD analysis. |
| popPK | He_2005 | irrelevant | 0 | 0 | The study investigates pseudo-ephedrine, not ephedrine, which is a distinct chemical entity. |
| popPK | Jing_2010 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Jing_2010 | not_relevant | 0 | 0 | The provided text is a title/abstract snippet describing a mechanism of action (activation of Iks currents) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of Akrinor (cafedrine/theodrenaline) on human atrial tissue and does not report pharmacokinetic parameters for ephedrine. |
| PGx | Kocyigit_2026 | not_relevant | 0 | 0 | The paper is a review of herb-drug interactions and does not report pharmacogenomic effects (gene variants) on ephedrine PK/PD parameters. |
| popPK | Kubo_2023 | irrelevant | 0 | 0 | The study evaluates cerebral oxygenation changes using near-infrared spectroscopy and does not report pharmacokinetic parameters (CL, V, ka, etc.) for ephedrine. |
| PGx | Landau_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics in obstetric anesthesia and does not mention ephedrine or specific pharmacokinetic/pharmacodynamic parameters for it. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic study of ephedrine in rats but does not investigate any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Marvola_1978 | relevant | 9 | 0 | The study reports a compartmental PK model for ephedrine in mice, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| popPK | Munhall_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ephedrine's mechanism of action on dopamine neurons, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Nayar_2022 | not_relevant | 0 | 0 | The paper is a review of nuclear imaging in Takotsubo cardiomyopathy and does not report pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Persky_2004 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics for natural products and does not report specific data or effects for ephedrine. |
| popPK | Song_2024 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Song_2024 | not_relevant | 0 | 0 | The paper focuses on a nanogel formulation for RSV inhibition and does not report any pharmacodynamic or exposure-response data for ephedrine. |
| PGx | Takei_2023 | not_relevant | 0 | 0 | The paper is a forensic case report on drug overdose and interaction, containing no data on gene variants or pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Tong_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity and does not report pharmacokinetic parameters. |
| popPK | Tran_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of acetaminophen (AAP), with ephedrine serving only as a covariate to explain changes in AAP parameters; no quantitative PK parameters for ephedrine itself are reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for theophylline and explicitly states that ephedrine was not found to influence its disposition kinetics, with no mention of pharmacogenomics. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic potency (EC50) of ephedrine isomers on beta-adrenergic receptors, not pharmacokinetic disposition parameters. |
| PGx | Villar-Quiles_2026 | not_relevant | 0 | 0 | The paper is a review of congenital myasthenic syndromes and mentions ephedrine only as a general therapeutic option, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Wan_2019 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Wei_2021 | not_relevant | 0 | 0 | The paper is a protocol for a study on differential sensitivity to sevoflurane and does not report pharmacogenomic effects on ephedrine PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the PD of propofol and dexmedetomidine, not ephedrine. |
| popPK | Yafune_2001 | relevant | 10 | 0 | The paper is a population PK study of ephedrine in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates the metabolomic effects of acteoside on cancer-related fatigue in mice; ephedrine is merely identified as a differentially regulated metabolite, and there is no study of pharmacogenomic effects on ephedrine PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 08:57 UTC</sub>
