<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oliceridine&quot;}]"></div>

# oliceridine

- **generic name:** oliceridine
- **ATC codes:** `N02AX07`
- **DrugBank:** [DB14881](https://go.drugbank.com/drugs/DB14881) · **PubChem:** not captured
- **molar mass:** 386.55 g/mol (C22H30N2O2S) — DrugBank
- **groups:** approved, investigational

## About

Oliceridine is an opioid painkiller (analgesic) used to treat pain. It is an approved medicine, but not authorised in the European Union, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17142898](https://www.wikidata.org/wiki/Q17142898) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:38 | 0:52 | 0/0/0 | 1/1/1 | 0/0/1 | 130,379/3,584 | einfracz / qwen3.8-27b | 9 | 2/10 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Simons_2023_V_E55](drugs/drug_oliceridine/pd_Simons_2023_V_E55.md) | Ventilation at an extrapolated end-tidal Pco 2 of 55 mmHg ← oliceridine · direct sigmoid Emax (Hill) effect | — | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Song_2025_successful_anesthesia_absence_of_body_movement_during_cervical_dilation](drugs/drug_oliceridine/pd_Song_2025_successful_anesthesia_absence_of_body_movement_dur.md) | successful anesthesia (absence of body movement during cervical dilation) ← oliceridine · categorical (graded) response model | — | Song CZ et al., Determination of the 90% Effective Dose…, Drug design, development an… (2025) | [10.2147/DDDT.S546489](https://doi.org/10.2147/DDDT.S546489) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buchwald_2023_Arr](drugs/drug_oliceridine/pd_Buchwald_2023_Arr.md) | β-arrestin2 recruitment ← oliceridine · delayed effect through transit (transduction) compartments | — | Buchwald P, Quantitative receptor model for respons…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1274065](https://doi.org/10.3389/fphar.2023.1274065) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buchwald_2023_Gprt](drugs/drug_oliceridine/pd_Buchwald_2023_Gprt.md) | G protein activation ← oliceridine · delayed effect through transit (transduction) compartments | — | Buchwald P, Quantitative receptor model for respons…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1274065](https://doi.org/10.3389/fphar.2023.1274065) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Simons_2023](drugs/drug_oliceridine/pgx_Simons_2023_CYP2D6_Q27.md) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oliceridine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fossler_2018.pdf` | Fossler MJ et al., Oliceridine (TRV130), a Novel G Protein…, Journal of clinical pharmac… (2018) | popPK | 9 | [10.1002/jcph.1076](https://doi.org/10.1002/jcph.1076) | [29412458](https://pubmed.ncbi.nlm.nih.gov/29412458) | The paper describes a population PK/PD model for oliceridine in humans and reports one quantitative parameter (EC50) in the text, but the specific PK parameters (CL, V, Q, etc.) are not listed in the provided evidence. |
| `Dahan_2020.pdf` | Dahan A et al., Benefit and Risk Evaluation of Biased μ…, Anesthesiology (2020) | popPK | 6 | [10.1097/ALN.0000000000003441](https://doi.org/10.1097/ALN.0000000000003441) | [32788558](https://pubmed.ncbi.nlm.nih.gov/32788558) | The study performs a population PK-PD analysis for oliceridine, but the extracted evidence only reports PD potency parameters (EC50, potency) rather than specific quantitative PK parameters (CL, V, ka) which are likely in the full text or supplementary material not provided. |
| `Lu_2026.pdf` | Lu ZQ et al., Oliceridine Reduces the EC50 of Remifen…, Neuro endocrinology letters (2026) | pd | 5 | not captured | [42460910](https://www.ncbi.nlm.nih.gov/pubmed/42460910) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T05:38:09.442016+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buchwald_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study of receptor signaling (pharmacodynamics/biochemistry) using in vitro cell assays, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dahan_2020 | relevant | 6 | 2 | The study performs a population PK-PD analysis for oliceridine, but the extracted evidence only reports PD potency parameters (EC50, potency) rather than specific quantitative PK parameters (CL, V, ka) which are likely in the full text or supplementary material not provided. |
| popPK | Fossler_2018 | relevant | 9 | 2 | The paper describes a population PK/PD model for oliceridine in humans and reports one quantitative parameter (EC50) in the text, but the specific PK parameters (CL, V, Q, etc.) are not listed in the provided evidence. |
| popPK | Fossler_2018_2 | irrelevant | 2 | 0 | The paper is a simulation study of study designs based on an existing PK/PD model and does not report new quantitative disposition parameter values (CL, V, etc.) for oliceridine in the provided evidence. |
| PGx | Fossler_2018_2 | not_relevant | 5 | 2 | The paper describes simulations involving CYP2D6 poor metabolizers, but it is a model-based study, not a report of observed pharmacogenomic data with fitted quantitative effect sizes. |
| popPK | Goudra_2021 | irrelevant | 1 | 0 | The paper is a review that discusses oliceridine's mechanism and clinical use but explicitly states that pharmacokinetic data (such as context-sensitive half-times) are not yet available for oliceridine, providing no quantitative PK parameters. |
| PD | Goudra_2021 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and general dose-dependent effects of oliceridine without providing specific numeric PD parameters or exposure-response data. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic trial measuring remifentanil EC50 and hemodynamic responses, not a pharmacokinetic study reporting disposition parameters for oliceridine. |
| popPK | Miao_2026 | irrelevant | 2 | 0 | The study reports pharmacodynamic ED50 values, not quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Moss_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (neurocognitive and analgesic) and reports effect-site concentrations (C50), but does not report quantitative population pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life for oliceridine. |
| popPK | Ok_2018 | relevant | 4 | 3 | The paper is a review that reports some quantitative PK parameters (half-life 1.6-2.7 h, clearance ~34 L/h) for oliceridine, but lacks a full compartmental or population PK model with volume of distribution or intercompartmental clearance. |
| PD | Ok_2018 | not_relevant | 2 | 0 | The paper is a review article describing the mechanism of action and general pharmacodynamics of oliceridine without reporting specific numeric PD parameters or concentration-effect curves. |
| popPK | Pedersen_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of receptor binding kinetics and biased agonism, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Simons_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic-pharmacodynamic study for oliceridine and explicitly states that parameter estimates are in Table 1, but the table content is not included in the provided evidence. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-finding trial (ED90) for anesthesia efficacy and safety, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2, etc.) for oliceridine. |
| popPK | Stahl_2022 | irrelevant | 0 | 0 | The paper is a mechanistic reanalysis of receptor signaling data (intrinsic efficacy and bias) in vitro, containing no pharmacokinetic parameters for oliceridine. |
| popPK | Wallach_2023 | irrelevant | 0 | 0 | The study focuses on 5-HT2A receptor signaling and psychedelic potential in mice and does not involve oliceridine or report any pharmacokinetic parameters. |
| PD | Wallach_2023 | not_relevant | 0 | 0 | The paper focuses on 5-HT2A receptor signaling and psychedelic potential of various ligands (e.g., 25N series, DOI, LSD) and does not mention or analyze oliceridine. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (ED50/ED95) for oliceridine, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper focuses on a novel compound (LPM3480392) and oliceridine is only used as a structural reference/comparator; no pharmacokinetic parameters for oliceridine are reported. |
| popPK | Ye_2023 | irrelevant | 0 | 0 | The study evaluates the subacute toxicity and toxicokinetics of LPM3480392, not oliceridine, which is only mentioned as a comparator or lead compound. |
| PD | Ye_2023 | not_relevant | 2 | 1 | The paper is a subacute toxicity study reporting qualitative dose-dependent adverse effects and PK parameters, but it does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring the EC50 of remifentanil, not a pharmacokinetic study reporting disposition parameters (CL, V, Q, ka) for oliceridine. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
