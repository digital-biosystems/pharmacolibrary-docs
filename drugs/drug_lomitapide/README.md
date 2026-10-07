<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;lomitapide&quot;}]"></div>

# lomitapide

- **generic name:** lomitapide
- **ATC codes:** `C10AX12`
- **DrugBank:** [DB08827](https://go.drugbank.com/drugs/DB08827) · **PubChem:** [CID 9853053](https://pubchem.ncbi.nlm.nih.gov/compound/9853053)
- **molar mass:** 693.7204 g/mol (C39H37F6N3O2) — DrugBank
- **groups:** approved, investigational

## About

Lomitapide is a lipid-modifying medicine used to treat hypercholesterolaemia. It is authorised in the European Union, where one product is on the market, and is used only in a limited way for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1268941](https://www.wikidata.org/wiki/Q1268941) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:31 | 7:07 | 0/0/0 | 0/0/0 | 1/0/0 | 154,087/2,898 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/11 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **MTTP** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Kolovou_2025](drugs/drug_lomitapide/pgx_Kolovou_2025_MTTP_safety.md) | Kolovou G et al., Lomitapide response in a cohort of pati…, Orphanet journal of rare di… (2025) | [10.1186/s13023-025-04033-3](https://doi.org/10.1186/s13023-025-04033-3) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lomitapide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MTTP (inhibitor), MTTP (safety_allele), MTTP (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bihorel_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for evinacumab, not lomitapide. |
| PGx | DErasmo_2017 | not_relevant | 0 | 0 | The study reports clinical efficacy in HoFH patients but explicitly states that LDL-C reduction was not related to genotype, and it does not report pharmacokinetic parameters or genotype-specific pharmacodynamic effects. |
| PGx | DErasmo_2021 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of lomitapide versus lipoprotein apheresis in HoFH patients but does not report pharmacogenomic effects (gene variant impact) on lomitapide's PK or PD parameters. |
| PGx | DErasmo_2022_2 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of lomitapide in patients with a specific genetic disease (ARH) but does not report a pharmacogenomic effect of a gene variant on the drug's PK or PD parameters. |
| PGx | Davis_2014 | not_relevant | 0 | 0 | The paper is a general review of lomitapide's pharmacology and clinical use, mentioning CYP3A4 metabolism but not reporting specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Dingman_2024 | irrelevant | 0 | 0 | The paper is a review of evinacumab, and lomitapide is only mentioned as a comparator therapy without any pharmacokinetic data provided for it. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | The paper is an in silico study focusing on montelukast binding to Cav3.1 calcium channels and does not contain any pharmacokinetic data for lomitapide. |
| PGx | Hang_2026 | not_relevant | 0 | 0 | The paper is a review of plozasiran and other therapies for familial chylomicronemia syndrome; it mentions lomitapide only as a non-traditional therapy but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Huang_2025 | not_relevant | 0 | 0 | The paper is a general review of HoFH treatments and mentions lomitapide as a therapeutic option but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Iannuzzo_2024 | not_relevant | 0 | 0 | The paper is a clinical review and case series on the management and monitoring of side effects in HoFH patients, and does not report pharmacogenomic effects of gene variants on lomitapide PK or PD parameters. |
| PGx | Jianu_2025 | not_relevant | 0 | 0 | The paper is a general review of lipid-lowering therapies and does not report specific pharmacogenomic effects on the PK or PD parameters of lomitapide. |
| PGx | Marbach_2014 | not_relevant | 0 | 0 | The text is a general review of novel treatments for familial hypercholesterolemia and does not report specific pharmacogenomic effects on lomitapide's PK or PD parameters. |
| PGx | Marbach_2015 | not_relevant | 0 | 0 | The paper describes the mechanism of action and clinical use of lomitapide in HoFH patients but does not report any pharmacogenomic analysis or specific gene variants affecting its PK/PD parameters. |
| PGx | Nohara_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of lomitapide in HoFH patients but does not analyze the impact of specific gene variants (e.g., MTP, LDLR, CYP3A4) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Raper_2015 | not_relevant | 0 | 0 | The paper reports clinical outcomes of MTP inhibitor therapy in a patient with HoFH but does not report pharmacogenomic effects on PK/PD parameters of lomitapide. |
| PGx | Reiner_2014 | not_relevant | 0 | 0 | The paper discusses statin resistance and intolerance, mentioning lomitapide only as a future alternative therapy without reporting any pharmacogenomic data for it. |
| PGx | Sanna_2016 | not_relevant | 0 | 0 | The paper mentions lomitapide only as a future therapeutic option and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Schaduangrat_2023 | irrelevant | 0 | 0 | The paper is a machine learning study for predicting estrogen receptor inhibitors and mentions lomitapide only as a reference in the bibliography, containing no pharmacokinetic data. |
| PGx | Tuteja_2014 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (lomitapide affecting statins) in healthy volunteers and does not report any pharmacogenomic effects (gene variants) on lomitapide's PK or PD parameters. |
| PGx | Vrablík_2016 | not_relevant | 0 | 0 | The text is a general review of familial hypercholesterolemia treatment and mentions lomitapide only as a therapeutic option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper describes a glioblastoma organoid model and drug screening for lomitapide but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Zubielienė_2022 | not_relevant | 0 | 0 | The paper is a general review of familial hypercholesterolemia and does not report pharmacogenomic effects on lomitapide PK/PD. |
| PGx | unknown_2015 | not_relevant | 0 | 0 | The text is a clinical review discussing efficacy and safety in a specific disease population (HoFH) and mentions CYP3A4 metabolism, but it does not report any pharmacogenomic study linking specific gene variants to changes in lomitapide PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
