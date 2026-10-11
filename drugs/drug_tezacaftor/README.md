<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;Tezacaftor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tezacaftor_Jiang2025_reference&quot;,&quot;label&quot;:&quot;Jiang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tezacaftor/Tezacaftor_Jiang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Tezacaftor

- **generic name:** Tezacaftor
- **ATC codes:** `R07AX31`, `R07AX32`, `R07AX33`
- **DrugBank:** [DB11712](https://go.drugbank.com/drugs/DB11712) · **PubChem:** [CID 46199646](https://pubchem.ncbi.nlm.nih.gov/compound/46199646)
- **molar mass:** 520.505 g/mol (C26H27F3N2O6) — DrugBank
- **groups:** approved, investigational

## About

Tezacaftor is a CFTR corrector used, in combination with other cystic fibrosis drugs, to treat cystic fibrosis. It is an approved medicine used in combination therapy for eligible patients with cystic fibrosis, mainly in the United States and Europe.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27270940](https://www.wikidata.org/wiki/Q27270940) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tezacaftor | parent | 520.505 | C26H27F3N2O6 | DrugBank | [46199646](https://pubchem.ncbi.nlm.nih.gov/compound/46199646) | Magnas_2026, Truong_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:30 | 18:44 | 1/2/1 | 1/0/0 | 0/0/2 | 801,594/44,578 | einfracz / qwen3.8-27b | 39 | 5/31 | 39/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jiang_2025_reference](drugs/drug_tezacaftor/Tezacaftor_Jiang2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jiang L et al., Drug-Drug Interactions and Individualiz…, Drug design, development an… (2025) | [10.2147/dddt.s547878](https://doi.org/10.2147/dddt.s547878) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Magnas_2026_reference](drugs/drug_tezacaftor/Tezacaftor_Magnas2026_reference.md) | — | 1-compartment (no model) | 3 | Magnas P et al., Pregnancy-related effect on elexacaftor…, British journal of clinical… (2026) | [10.1002/bcp.70620](https://doi.org/10.1002/bcp.70620) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Magnas_2025_reference](drugs/drug_tezacaftor/Tezacaftor_Magnas2025_reference.md) | — | general linear (no model) | 0 | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Truong_2025_reference](drugs/drug_tezacaftor/Tezacaftor_Truong2025_reference.md) | — | general linear (no model) | 4 | Truong NH et al., Elexacaftor/Tezacaftor/Ivacaftor Popula…, Clinical and translational… (2025) | [10.1111/cts.70245](https://doi.org/10.1111/cts.70245) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Pigliasco_2023_Sweat_chloride_concentration](drugs/drug_tezacaftor/pd_Pigliasco_2023_Sweat_chloride_concentration.md) | Sweat chloride concentration biomarker turnover ← Tezacaftor | — | Pigliasco F et al., Simultaneous Quantification of Ivacafto…, Biomedicines (2023) | [10.3390/biomedicines11020628](https://doi.org/10.3390/biomedicines11020628) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CFTR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kogias_2026](drugs/drug_tezacaftor/pgx_Kogias_2026_CFTR_Q100.md) | Kogias C et al., Respiratory Oscillometry and Multimodal…, Pediatric pulmonology (2026) | [10.1002/ppul.71527](https://doi.org/10.1002/ppul.71527) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CFTR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kroes_2026](drugs/drug_tezacaftor/pgx_Kroes_2026_CFTR_Q100.md) | Kroes S et al., A functional comparison of vanzacaftor/…, Journal of cystic fibrosis… (2026) | [10.1016/j.jcf.2026.06.002](https://doi.org/10.1016/j.jcf.2026.06.002) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tezacaftor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` unknown, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CFTR (positive allosteric modulator), CFTR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 215 matched, 137 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guimbellot_2025.pdf` | Guimbellot JS et al., Elexacaftor-tezacaftor-ivacaftor pharma…, Journal of cystic fibrosis… (2025) | popPK | 10 | [10.1016/j.jcf.2025.03.010](https://doi.org/10.1016/j.jcf.2025.03.010) | [40121139](https://pubmed.ncbi.nlm.nih.gov/40121139) | The study reports pharmacokinetic parameters for tezacaftor in humans, but the specific numeric values are not present in the provided evidence. |
| `Kunzelmann_2026.pdf` | Kunzelmann AK et al., Real-world population pharmacokinetic m…, Journal of cystic fibrosis… (2026) | popPK | 10 | [10.1016/j.jcf.2026.07.1984](https://doi.org/10.1016/j.jcf.2026.07.1984) | [42532735](https://pubmed.ncbi.nlm.nih.gov/42532735) | The paper describes a population PK model for tezacaftor, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Magnas_2025.pdf` | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) | [40405059](https://pubmed.ncbi.nlm.nih.gov/40405059) | Study describes a population PK model for tezacaftor in humans and reports the range of AUC0-24h values (38.0-207.7 mg⋅h/L) in the evidence. |
| `Vonk_2025.pdf` | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | popPK | 10 | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) | [40089408](https://pubmed.ncbi.nlm.nih.gov/40089408) | The paper describes a population PK study for tezacaftor (as part of ETI) in humans, but the specific numeric parameter values are not present in the provided abstract evidence. |
| `Hong_2023.pdf` | Hong E et al., Safety of elexacaftor/tezacaftor/ivacaf…, Pharmacotherapy (2023) | popPK | 7 | [10.1002/phar.2786](https://doi.org/10.1002/phar.2786) | [36866442](https://pubmed.ncbi.nlm.nih.gov/36866442) | The paper describes PBPK models for tezacaftor which contain quantitative disposition parameters, but specific numeric values are not present in the provided text. |

<sub>queue written 2026-10-07T18:22:26.495986+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alicandro_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes of ETI therapy but does not investigate the effect of gene variants/genotypes on the PK or PD parameters of tezacaftor. |
| popPK | Bader-Larsen_2025 | irrelevant | 0 | 0 | The study reports anthropometric data (BMI, body composition) after ETI initiation, not pharmacokinetic parameters for tezacaftor. |
| PGx | Baroud_2023 | not_relevant | 0 | 0 | The paper focuses on the management of neuropsychiatric symptoms associated with ETI therapy and does not report any pharmacogenomic effects on tezacaftor pharmacokinetics or pharmacodynamics. |
| popPK | Bendixen_2025 | irrelevant | 0 | 0 | The study is a clinical microbiology investigation of pathogen prevalence in cystic fibrosis patients treated with ETI; it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for tezacaftor. |
| popPK | Bryrup_2024 | irrelevant | 0 | 0 | The paper reports sweat chloride concentrations as a biomarker of CFTR function, not pharmacokinetic parameters (CL, V, t1/2) for tezacaftor. |
| popPK | Burnet_2025 | irrelevant | 0 | 0 | The study evaluates glycemic outcomes (HbA1c, insulin dose) in patients with cystic fibrosis-related diabetes and contains no pharmacokinetic data for tezacaftor. |
| PGx | Castaldo_2025 | not_relevant | 2 | 5 | The paper describes the general safety and efficacy profile of ETI (including changes in bilirubin and platelets) in a specific CFTR genotype subgroup, but it does not report a pharmacogenomic study design where a specific gene variant modulates the PK or PD parameters of tezacaftor relative to other variants. |
| popPK | Chan_2025 | irrelevant | 0 | 0 | This is a clinical study focused on metabolic outcomes (glycemia/insulin) in CF patients, not a pharmacokinetic study reporting disposition parameters for tezacaftor. |
| PGx | Choong_2022 | not_relevant | 0 | 0 | The paper reviews therapeutic drug monitoring and PK variability but does not report a specific pharmacogenomic effect (e.g., CYP3A variant impact) on tezacaftor PK or PD parameters. |
| PGx | Daines_2025 | not_relevant | 0 | 0 | The study reports long-term clinical efficacy and safety, not pharmacokinetic or pharmacodynamic changes in tezacaftor induced by specific gene variants. |
| popPK | Dallmann_2026 | irrelevant | 0 | 0 | This is a general review of PBPK modeling approaches for fetal drug exposure and does not report any specific quantitative pharmacokinetic parameters for tezacaftor. |
| PGx | Donaldson_2024 | not_relevant | 0 | 0 | The paper reports clinical pharmacodynamic effects (mucociliary clearance) in a general CF population treated with elexacaftor/tezacaftor/ivacaftor, but does not analyze or report differences based on specific gene variants or genotypes (pharmacogenomics). |
| PGx | Fragoso_2024 | not_relevant | 0 | 0 | The paper reports real-world clinical efficacy and safety outcomes (FEV1, exacerbations, sweat chloride) in a mixed genotype population but does not report pharmacokinetic or pharmacodynamic parameter changes driven by specific gene variants or genotypes. |
| PGx | Furstova_2022 | not_relevant | 3 | 2 | The study measures CFTR functional activity (organoid swelling) as a pharmacodynamic effect, but does not report pharmacokinetic parameters for tezacaftor nor a quantitative pharmacokinetic/pharmacodynamic effect size. |
| popPK | García_2025 | irrelevant | 0 | 0 | The study evaluates anti-inflammatory biomarkers and clinical outcomes of triple therapy, not the pharmacokinetic disposition of tezacaftor. |
| PGx | Goralski_2023 | not_relevant | 4 | 2 | The paper reports a post hoc analysis by genotype, but the provided text does not contain the specific results or quantitative effects for that stratification, focusing instead on the pooled population PK/PD and safety data. |
| PGx | Graeber_2022 | not_relevant | 0 | 0 | The study evaluates the therapeutic efficacy of tezacaftor as part of a triple-combination modulator on clinical lung parameters (LCI, MRI) in patients with specific CFTR genotypes, but it does not report any pharmacokinetic or pharmacodynamic effects of the gene variant on tezacaftor itself. |
| PGx | Gramegna_2024 | not_relevant | 2 | 0 | The paper analyzes lung volumes as predictors of treatment response, not gene variants/genotypes affecting the PK or PD of the drug. |
| popPK | Gravelle_2025 | irrelevant | 0 | 0 | The study examines the association between vitality and systemic inflammation (CRP) in patients on tezacaftor, but does not report any pharmacokinetic parameters for tezacaftor. |
| popPK | Guimbellot_2025 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for tezacaftor in humans, but the specific numeric values are not present in the provided evidence. |
| PGx | Haq_2022 | not_relevant | 2 | 0 | The paper is a review of cystic fibrosis and CFTR modulator clinical trials, not a pharmacogenomic study reporting genotype-dependent pharmacokinetic or pharmacodynamic parameters for tezacaftor. |
| popPK | Harris_2025 | irrelevant | 0 | 0 | The paper is a retrospective clinical registry analysis of efficacy outcomes (lung function and exacerbations) rather than a pharmacokinetic study reporting disposition parameters for tezacaftor. |
| popPK | Harwood_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for tobramycin, with tezacaftor mentioned only as a concomitant CFTR modulator that did not significantly affect tobramycin PK. |
| popPK | Hinton_2026 | irrelevant | 0 | 0 | The paper is a real-world analysis of healthcare visit patterns and does not report any pharmacokinetic parameters for tezacaftor. |
| popPK | Hong_2023 | relevant | 7 | 0 | The paper describes PBPK models for tezacaftor which contain quantitative disposition parameters, but specific numeric values are not present in the provided text. |
| popPK | Hong_2024 | irrelevant | 0 | 0 | The paper is a case series and mechanistic PBPK simulation study focusing on drug-drug interactions and efficacy, not a population PK study reporting quantitative disposition parameters (CL, V, ka) for tezacaftor. |
| popPK | Hoppe_2025 | irrelevant | 4 | 0 | The paper describes a clinical trial with a planned population PK analysis, but no quantitative PK parameter values (CL, V, etc.) for tezacaftor are present in the provided text. |
| PGx | Hoppe_2025 | not_relevant | 0 | 0 | The paper reports pediatric safety, tolerability, and efficacy outcomes (including FEV1 and sweat chloride) for a CFTR modulator, but it does not report any pharmacokinetic parameters (e.g., AUC, Cmax) nor does it present any data on how genetic variants alter PK/PD. |
| PGx | Iftikhar_2025 | not_relevant | 0 | 0 | The paper is a network meta-analysis comparing the relative efficacy of CFTR modulator combinations and does not report gene-variant-specific effects on the pharmacokinetic or pharmacodynamic parameters of tezacaftor. |
| popPK | James_2024 | irrelevant | 0 | 0 | The study analyzes changes in iron status parameters (iron, ferritin, transferrin) and does not report any pharmacokinetic parameters for tezacaftor. |
| PGx | Januska_2020 | not_relevant | 0 | 0 | The paper reports on CFTR variant prevalence and diagnostic disparities in Hispanic patients but does not contain any pharmacokinetic or pharmacodynamic data for tezacaftor. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clozapine, not tezacaftor. |
| PGx | Keating_2025 | not_relevant | 0 | 0 | The paper is a Phase 3 clinical trial comparing two CFTR modulator regimens for efficacy and safety, not a pharmacogenomic study investigating how genetic variants alter the PK/PD of tezacaftor. |
| PGx | Keens_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes (ppFEV1, BMI, exacerbations) in a real-world study but does not analyze pharmacokinetic or pharmacodynamic parameters in relation to specific pharmacogenomic variants affecting drug exposure or response. |
| popPK | Kimber_2026 | irrelevant | 0 | 0 | The study investigates the effect of tezacaftor on vitamin levels, not its pharmacokinetic parameters. |
| PGx | King_2022 | not_relevant | 0 | 0 | The paper is a general review of CFTR modulator clinical trials and does not report specific pharmacogenomic effects on tezacaftor PK or PD parameters. |
| PGx | Kogias_2026 | not_relevant | 5 | 2 | The paper reports a difference in clinical response (PD) between CFTR genotype groups (F/F vs non-F), but provides no fitted quantitative effect size or parameter linking the specific variant to the magnitude of the response. |
| popPK | Kunzelmann_2026 | relevant | 10 | 0 | The paper describes a population PK model for tezacaftor, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Lonabaugh_2024 | irrelevant | 0 | 0 | The study reports on the impact of elexacaftor-tezacaftor-ivacaftor on cholesterol levels and does not contain any pharmacokinetic parameters for tezacaftor. |
| popPK | Mainz_2022 | irrelevant | 0 | 0 | The paper is a clinical study on gastrointestinal symptom scores in cystic fibrosis patients and does not report any pharmacokinetic parameters for tezacaftor. |
| PGx | Mall_2022 | not_relevant | 0 | 0 | The paper reports a clinical efficacy and safety trial in a specific CFTR genotype subgroup but does not contain pharmacokinetic or pharmacodynamic data linking specific gene variants to drug exposure or response parameters. |
| PGx | Mall_2025 | not_relevant | 0 | 0 | The paper evaluates clinical efficacy and safety in a pediatric population but does not report a pharmacokinetic or pharmacodynamic effect specifically caused by a gene variant or genotype. |
| PGx | McKone_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes for a specific genotype group but does not report a pharmacokinetic or pharmacodynamic effect mediated by a gene variant or genotype. |
| PGx | Middleton_2019 | not_relevant | 2 | 0 | The paper reports clinical efficacy in CF patients with Phe508del mutations but does not report pharmacokinetic or pharmacodynamic parameters modified by drug-metabolizing gene variants (e.g., CYP3A4). |
| popPK | Mirval_2026 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological/mechanistic characterization of CFTR modulation and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for tezacaftor. |
| PGx | Munck_2020 | not_relevant | 0 | 0 | The study evaluates clinical efficacy in a specific genotype group and notes PK parameters were "similar to those reported in prior studies," but it does not report quantitative pharmacogenomic effects on PK/PD parameters. |
| PGx | Mustafa_2026 | not_relevant | 2 | 2 | The paper discusses the clinical efficacy and fetal safety of tezacaftor-containing regimens in cystic fibrosis pregnancies but does not report specific pharmacogenomic interactions (gene variant effects) altering tezacaftor PK or PD parameters. |
| PGx | Rodriguez_2025 | not_relevant | 2 | 5 | The paper reports clinical and organoid responses to CFTR modulators and correlates them, but it does not report the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of tezacaftor itself (e.g., drug concentration or direct pharmacodynamic effect driven by genotype). |
| popPK | Rolsma_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of β-lactam antibiotics (cefepime, meropenem, piperacillin-tazobactam) in cystic fibrosis patients, not tezacaftor. |
| popPK | Rosenfeld_2018 | irrelevant | 0 | 0 | The paper studies ivacaftor, not tezacaftor, and does not report quantitative PK parameters for tezacaftor. |
| popPK | Sagel_2026 | irrelevant | 0 | 0 | The study focuses on inflammatory biomarkers and clinical outcomes, containing no pharmacokinetic parameters for tezacaftor. |
| PGx | Sala_2018 | not_relevant | 0 | 0 | The paper is a general review of tezacaftor's clinical efficacy and safety in cystic fibrosis and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Sanders_2026 | irrelevant | 0 | 0 | The paper is a PBPK simulation of drug-drug interactions and does not report original population PK parameters (CL, V, etc.) for tezacaftor. |
| popPK | Sanders_2026_2 | relevant | 4 | 2 | Reports qualitative PK changes and GMRs for tezacaftor but lacks absolute quantitative disposition parameters (CL, V, ka) as it is a drug-drug interaction study using non-compartmental analysis. |
| PGx | Sanders_2026_2 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (rifabutin), not a pharmacogenomic effect of a gene variant on PK/PD. |
| PGx | Schneider_2018 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interactions (CYP induction) and plasma levels, but does not link any gene variant or genotype to changes in the pharmacokinetics or pharmacodynamics of tezacaftor. |
| popPK | Semenchuk_2024 | irrelevant | 0 | 0 | The paper is a clinical study on the impact of COVID-19 on lung function and BMI in cystic fibrosis patients; it mentions tezacaftor only as a co-administered modulator (ETI) and reports no pharmacokinetic parameters. |
| popPK | Shirley_2026 | irrelevant | 0 | 0 | The study evaluates bone mineral density changes, not pharmacokinetic parameters. |
| popPK | Simonetti_2026 | irrelevant | 0 | 0 | The study reports clinical efficacy (sweat chloride, FEV1) and not pharmacokinetic parameters. |
| popPK | Singh_2020 | irrelevant | 0 | 0 | The study is an in-vitro biological characterization of a new corrector (ABBV-2222) comparing efficacy to tezacaftor, containing no pharmacokinetic data. |
| PGx | Sinkey_2026 | not_relevant | 0 | 1 | The study assesses pharmacokinetics in a single carrier/fetus dyad but does not report how specific genetic variants modify PK/PD parameters. |
| PGx | Smith_2022 | not_relevant | 0 | 0 | The paper reports a case of drug-drug interaction between ETI and tacrolimus, not a pharmacogenomic effect of a gene variant on PK/PD. |
| popPK | Solomon_2024 | irrelevant | 0 | 0 | The study is a clinical trial evaluating efficacy (sweat chloride, FEV1) rather than a pharmacokinetic study reporting quantitative disposition parameters for tezacaftor. |
| PGx | Solomon_2024 | not_relevant | 1 | 1 | The study measures clinical efficacy (sweat chloride, FEV1) and does not report on pharmacokinetic parameters or genotype-dependent PK/PD profiles. |
| popPK | Solís-García_2024 | irrelevant | 0 | 0 | The study analyzes the impact of CFTR modulator therapy on body mass index and lung function in cystic fibrosis patients, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for tezacaftor. |
| PGx | Stahl_2024 | not_relevant | 1 | 0 | This is a clinical study on therapeutic efficacy (LCI, MRI scores) rather than a pharmacogenomic study analyzing drug PK/PD parameters (e.g., AUC, Cmax, EC50). |
| PGx | Stanleigh_2025 | not_relevant | 0 | 0 | The paper reports on the pharmacodynamic response of specific CFTR mutations to modulator treatment (functional rescue of the protein), not how a gene variant alters the pharmacokinetics or pharmacodynamics of tezacaftor itself. |
| popPK | Steinberg_2025 | irrelevant | 0 | 0 | The study analyzes oropharyngeal metagenome changes and does not report pharmacokinetic parameters for tezacaftor. |
| popPK | Stewart_2024 | irrelevant | 0 | 0 | The study focuses on predicting weight gain and BMI changes associated with ETI therapy, not on pharmacokinetic parameters for tezacaftor. |
| popPK | Svedberg_2026 | irrelevant | 0 | 0 | The study investigates clinical outcomes (lung function) of adjunctive therapy in patients taking tezacaftor as a standard of care, and does not report any pharmacokinetic parameters. |
| PGx | Terlizzi_2021 | not_relevant | 1 | 5 | The paper reports clinical efficacy (sweat chloride, FEV1) of a drug combination in a specific patient cohort but does not analyze how genetic variants affect the pharmacokinetics (PK) of tezacaftor. |
| PGx | Truong_2025 | not_relevant | 0 | 0 | The paper investigates the population pharmacokinetics of ETI in pediatric patients, focusing on covariates like body weight and age, but it does not analyze or report any pharmacogenomic effects of gene variants or genotypes on PK or PD parameters. |
| popPK | Tsai_2020 | irrelevant | 2 | 0 | The paper is a PBPK simulation study where tezacaftor is one of four drugs modeled, and specific numeric PK parameters are not listed in the main text but are relegated to Supplementary Table S3. |
| PGx | Tümmler_2025 | not_relevant | 3 | 4 | The paper discusses the response of CF patients to tezacaftor based on CFTR mutation genotype (theratyping/PD of the target), but it is a review article that does not report specific, original quantitative pharmacogenomic data on the drug's PK/PD parameters. |
| PGx | Uluer_2023 | not_relevant | 2 | 0 | The paper reports clinical efficacy (PD) of tezacaftor/VX-121 in CF patients, but does not report pharmacokinetic (PK) parameters or specific pharmacogenomic gene variant effects on PK/PD. |
| PGx | Volpi_2025 | not_relevant | 1 | 1 | The study reports clinical outcomes and adverse events (liver enzymes) of ETI therapy in CF patients but does not analyze how specific gene variants affect the PK or PD parameters of tezacaftor. |
| PGx | Vonk_2022 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction with clofazimine, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Vonk_2025 | relevant | 10 | 2 | The paper describes a population PK study for tezacaftor (as part of ETI) in humans, but the specific numeric parameter values are not present in the provided abstract evidence. |
| popPK | Vonk_2025_2 | relevant | 10 | 3 | The paper describes a population PK model for tezacaftor in humans, but the specific numeric parameter values are in Table 2, which is not included in the provided evidence. |
| PGx | Wainwright_2023 | not_relevant | 0 | 0 | The paper reports clinical safety and efficacy outcomes in a specific genotype group (F508del) but does not analyze pharmacokinetic or pharmacodynamic parameters based on genetic variants. |
| PGx | Wainwright_2025 | not_relevant | 0 | 0 | The paper reports long-term safety and efficacy outcomes for a specific genotype group but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of tezacaftor itself. |
| PGx | Walker_2019 | not_relevant | 0 | 0 | The paper is a pediatric clinical trial evaluating safety, PK, and efficacy in children but does not report a pharmacogenomic study analyzing how genetic variants alter PK/PD parameters. |
| PGx | Weitzel_2024 | not_relevant | 2 | 0 | The paper describes clinical adverse events (hyperbilirubinemia) and dosage management in patients with Gilbert's syndrome, but does not report quantitative changes in the pharmacokinetic parameters of tezacaftor itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:22 UTC</sub>
