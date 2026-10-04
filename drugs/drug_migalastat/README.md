<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;migalastat&quot;}]"></div>

# migalastat

- **generic name:** migalastat
- **ATC codes:** `A16AX14`
- **DrugBank:** [DB05018](https://go.drugbank.com/drugs/DB05018) · **PubChem:** [CID 176077](https://pubchem.ncbi.nlm.nih.gov/compound/176077)
- **molar mass:** 163.1717 g/mol (C6H13NO4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Fabry disease is a rare, progressive genetic disorder characterized by a defective GLA gene that causes a deficiency in the enzyme alpha-Galactosidase A (alpha-Gal A). This enzyme is responsible for breaking down glycosphingolipid substrate that, when deficient in patients with Fabry disease, builds up in the blood vessels, the kidneys, the nerves, the heart, and other organs.[L47036,L47057,L4274,L4278] In the U.S., it is estimated that more than 3,000 people are living with Fabry disease, and an estimated more than 50 percent of these diagnosed patients are currently untreated.[L4274]

Migalastat (approved and sold under Amicus Therapeutics' brand name Galafold) is subsequently an oral pharmacological chaperone of alpha-Gal A for the treatment of Fabry disease in adults who have amenable GLA variants.[L47036,L47057,L4274,L4278] In these patients, migalastat works by stabilizing the body’s dysfunctional alpha-Gal A enzyme so that it can clear the accumulation of glycosphingolipid disease substrate.[L47036,L47057,L4274,L4278] Globally, it is estimated that approximately 35 to 50 percent of Fabry patients may have amenable GLA variants that are treatable with migalastat. [L4274]

Given the rarity of Fabry disease and the proportion of Fabry disease patients that could benefit from migalastat therapy, Amicus Therapeutics' brand name Galafold was approved using the Accelerated Approval pathway, under which the FDA may approve drugs for serious conditions where there is an unmet medical need and where a drug is shown to have certain effects that are reasonably likely to predict a clinical benefit to patients.[L47036,L47057,L4274,L4278] A further study is required to verify and describe the clinical benefits of Galafold, and the sponsor will be conducting a confirmatory clinical trial of Galafold in adults with Fabry disease.[L47036,L47057,L4274,L4278]

Additionally, Galafold was also granted Priority Review designation, under which the FDA’s goal is to take action

**Indication.** Migalastat is approved by the FDA for the treatment of adults with a confirmed diagnosis of Fabry disease and an amenable galactosidase alpha gene (GLA) variant based on in vitro assay data.[L47036] 

This indication is approved under accelerated approval based on a reduction in kidney interstitial capillary cell globotriaosylceramide (KIC GL-3) substrate. Continued approval for this indication may be contingent upon verification and description of clinical benefit in confirmatory trials.[L47036]

Migalastat is also approved by the EMA and Health Canada to treat the same disease, although it is approved for both adults and adolescents aged 16 years and older in Europe.[L47057,L47087]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:57 | 4:26 | 0/0/0 | 0/0/0 | 0/0/1 | 12,895/1,382 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/6 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **GLA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Germain_2012](drugs/drug_migalastat/pgx_Germain_2012_GLA_Q100.md) | Germain DP et al., Safety and pharmacodynamic effects of a…, Orphanet journal of rare di… (2012) | [10.1186/1750-1172-7-91](https://doi.org/10.1186/1750-1172-7-91) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=migalastat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…absorption occurring largely in the gut…”</sub> | prose |
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…20% of the total radiolabeled dose was recovered in feces…”</sub> | prose |
| excretion | kidney | <sub>“…approximately 77% of the total radiolabeled dose was recovered in urine…”</sub> | prose |

<sub>Actors without a tissue in the table: GLA (stabilization), GLA (target), SLC5A1 (inhibitor), SLC5A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 40 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Leonowens_2022.pdf` | Leonowens C et al., Population Pharmacokinetics of Oral Mig…, Clinical pharmacology in dr… (2022) | popPK | 10 | [10.1002/cpdd.1160](https://doi.org/10.1002/cpdd.1160) | [36331497](https://pubmed.ncbi.nlm.nih.gov/36331497) | The paper describes a population PK model for migalastat, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Bach_2023.pdf` | Bach T et al., Pharmacometric model of agalsidase-miga…, Journal of pharmacokinetics… (2023) | popPK | 8 | [10.1007/s10928-022-09830-y](https://doi.org/10.1007/s10928-022-09830-y) | [36376611](https://pubmed.ncbi.nlm.nih.gov/36376611) | The paper describes a pharmacometric model for migalastat, but the specific numeric parameter values are not present in the provided evidence text. |
| `Johnson_2013.pdf` | Johnson FK et al., Pharmacokinetics and Safety of Migalast…, Clinical pharmacology in dr… (2013) | popPK | 8 | [10.1002/cpdd.1](https://doi.org/10.1002/cpdd.1) | [27121667](https://pubmed.ncbi.nlm.nih.gov/27121667) | The paper reports key PK parameters (AUC, Cmax, t1/2) for migalastat, but lacks specific clearance (CL) or volume (V) values required for full population PK modeling. |
| `Johnson_2024.pdf` | Johnson FK et al., Pharmacokinetic evaluation of single-do…, PloS one (2024) | pd | 5 | [10.1371/journal.pone.0314030](https://doi.org/10.1371/journal.pone.0314030) | [39636942](https://www.ncbi.nlm.nih.gov/pubmed/39636942) | metadata signals extractable PD data (EC50) |
| `Gossan_2015.pdf` | Gossan DP et al., Glycosidase inhibitors from the roots o…, Phytochemistry (2015) | pd | 4 | [10.1016/j.phytochem.2014.10.029](https://doi.org/10.1016/j.phytochem.2014.10.029) | [25468536](https://www.ncbi.nlm.nih.gov/pubmed/25468536) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T02:57:24.691570+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asano_2000 | irrelevant | 0 | 0 | The paper studies 1-deoxygalactonojirimycin (miglustat) in vitro for Fabry disease, not migalastat, and contains no pharmacokinetic parameters. |
| popPK | Bach_2023 | relevant | 8 | 0 | The paper describes a pharmacometric model for migalastat, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Battaglia_2026 | irrelevant | 0 | 0 | The study evaluates dapagliflozin in Fabry disease patients, with migalastat serving only as a background therapy/comparator, and no pharmacokinetic parameters for migalastat are reported. |
| popPK | Benjamin_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study assessing enzyme activity and substrate reduction in cell lines, not a pharmacokinetic study reporting disposition parameters for migalastat. |
| popPK | Benjamin_2017 | irrelevant | 0 | 0 | The paper describes a pharmacogenetic assay for patient selection and reports pharmacodynamic outcomes, not pharmacokinetic parameters for migalastat. |
| PD | Benjamin_2017 | not_relevant | 2 | 1 | The paper validates a pharmacogenetic assay using clinical PD outcomes (WBC activity, biomarkers) but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for migalastat. |
| PGx | Besada_2021 | not_relevant | 0 | 0 | The paper evaluates new pharmacological chaperones (PBXs) for Fabry disease and does not report pharmacogenomic effects on the PK or PD parameters of migalastat. |
| popPK | Bichet_2021 | irrelevant | 0 | 0 | The paper is a pharmacodynamic biomarker study assessing lyso-Gb3 levels and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for migalastat. |
| PD | Bichet_2021 | not_relevant | 2 | 0 | The paper assesses the correlation between a biomarker (lyso-Gb3) and clinical outcomes, finding no significant relationship, and does not report a concentration-effect or dose-response model with numeric PD parameters for migalastat. |
| PGx | Bichet_2021 | not_relevant | 0 | 0 | The paper evaluates the utility of a biomarker (lyso-Gb3) for monitoring treatment response in Fabry disease patients but does not report how specific gene variants or genotypes alter the pharmacokinetic or pharmacodynamic parameters of migalastat. |
| popPK | Bichet_2023 | irrelevant | 0 | 0 | The paper is a Delphi consensus study on clinical management and monitoring guidelines for Fabry disease, not a pharmacokinetic study, and contains no quantitative PK parameters for migalastat. |
| PD | Bichet_2023 | not_relevant | 0 | 0 | The paper is a consensus guideline (Delphi study) regarding clinical management and monitoring, containing no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| PGx | Eleftheriadis_2025 | not_relevant | 0 | 0 | The paper is a clinical case report describing the efficacy and safety of migalastat in a patient with a specific GLA mutation, but it does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Fantur_2012 | not_relevant | 0 | 0 | The paper discusses pharmacological chaperones for GM1-gangliosidosis and Morquio B disease, not migalastat. |
| popPK | Germain_2012 | irrelevant | 1 | 0 | The paper is a pharmacodynamic study reporting enzyme activity and substrate levels, not a pharmacokinetic study with quantitative disposition parameters (CL, V, Q, ka) for migalastat. |
| PGx | Germain_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (PD) of migalastat in Fabry disease patients but does not report pharmacokinetic (PK) parameters or specific pharmacogenomic effects on PK/PD metrics. |
| popPK | Giugliani_2013 | irrelevant | 0 | 0 | The study reports safety and pharmacodynamic effects (GL-3 levels, enzyme activity) but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for migalastat. |
| PD | Giugliani_2013 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (decreases in GL-3) and dose trends in a small cohort but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Gossan_2015 | irrelevant | 0 | 0 | The paper describes the isolation and enzymatic inhibition of natural products from Glyphaea brevis and does not involve migalastat or pharmacokinetic parameters. |
| PD | Gossan_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) for natural products from Glyphaea brevis, not pharmacodynamic or exposure-response data for the drug migalastat. |
| PD | Johnson_2013 | not_relevant | 3 | 2 | The paper mentions dose-related increases in alpha-Gal A activity but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | no_text gate: only 231 chars of text extracted (&lt; 400) |
| PD | Johnson_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (PK) and dose selection based on PK parameters (e.g., AUC, Cmax) in ESRD patients, without reporting any pharmacodynamic (PD) or exposure-response relationship with numeric PD parameters. |
| PGx | Johnson_2024 | not_relevant | 0 | 0 | The paper evaluates pharmacokinetics in subjects with ESRD and dialysis, focusing on renal impairment rather than genetic variants or pharmacogenomics. |
| popPK | Kato_2005 | irrelevant | 0 | 0 | The paper discusses the biological properties and enzyme inhibition of 1-deoxyazasugars, not the pharmacokinetics of migalastat. |
| PD | Kato_2005 | not_relevant | 0 | 0 | The paper discusses the biological properties and enzyme inhibition (Ki/IC50) of 1-deoxyazasugars (DNJ derivatives) but does not mention migalastat or report any pharmacodynamic exposure-response or dose-response relationship for it. |
| popPK | Leonowens_2022 | relevant | 10 | 0 | The paper describes a population PK model for migalastat, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Leonowens_2022 | not_relevant | 0 | 0 | The paper investigates the impact of renal function (eGFR) and demographics on migalastat PK, but does not report any pharmacogenomic effects (gene variants/genotypes). |
| PGx | Lukas_2013 | not_relevant | 0 | 0 | The paper characterizes GLA mutations and their response to the pharmacological chaperone DGJ (1-deoxygalactonojirimycin), not migalastat. |
| PGx | Lukas_2020 | not_relevant | 0 | 0 | The paper discusses 1-deoxygalactonojirimycin (DGJ), not migalastat, and focuses on in vitro enzyme activity rather than clinical PK/PD parameters. |
| PGx | McCarron_2026 | not_relevant | 2 | 5 | The paper reports clinical outcomes and biomarker changes in a real-world cohort but does not analyze how specific genotypes quantitatively alter pharmacokinetic or pharmacodynamic parameters of migalastat. |
| PGx | Monticelli_2023 | not_relevant | 0 | 0 | The paper investigates curcumin for Fabry disease and does not mention migalastat or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Nisticò_2021 | irrelevant | 0 | 0 | The paper is a review focusing on the pharmacokinetics of agalsidase alpha and beta (ERT), with migalastat mentioned only as a background therapy without any quantitative PK parameters reported. |
| PD | Nisticò_2021 | not_relevant | 1 | 0 | The paper is a review focusing on enzyme replacement therapy (agalsidase) and only qualitatively mentions migalastat without providing any numeric PD parameters or exposure-response data. |
| PGx | Perretta_2025 | not_relevant | 0 | 0 | The paper is a general review of Fabry disease treatments and does not report specific pharmacogenomic effects of gene variants on the PK or PD parameters of migalastat. |
| popPK | Ramaswami_2025 | irrelevant | 2 | 0 | The paper explicitly states that pharmacokinetic results were reported previously and focuses on safety and efficacy outcomes, with no quantitative PK parameter values present in the provided evidence. |
| PD | Ramaswami_2025 | not_relevant | 1 | 0 | The text reports qualitative stability of pharmacodynamic markers (lyso-Gb3) and clinical outcomes but does not provide numeric PD parameters or an exposure-response relationship. |
| PGx | Ramaswami_2025 | not_relevant | 0 | 0 | The paper reports safety and efficacy outcomes in a general adolescent population with Fabry disease, but does not analyze how specific gene variants or genotypes alter the pharmacokinetic or pharmacodynamic parameters of migalastat. |
| PGx | Saeed_2022 | not_relevant | 0 | 0 | The paper is a review of Fabry disease and its cardiac manifestations, mentioning migalastat only as a treatment option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Welford_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lucerastat, with migalastat serving only as a comparator and no pharmacokinetic parameters reported. |
| PD | Welford_2018 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, % reduction) for lucerastat, not migalastat; migalastat is only mentioned as a comparator without specific numeric PD data provided in the text. |
| PGx | Yam_2005 | not_relevant | 0 | 0 | The paper describes the mechanism of action of a chemical chaperone (1-deoxygalactonojirimycin) in Fabry disease, not the pharmacogenomics of migalastat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
