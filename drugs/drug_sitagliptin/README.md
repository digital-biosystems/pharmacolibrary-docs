<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;sitagliptin&quot;}]"></div>

# sitagliptin

- **generic name:** sitagliptin
- **ATC codes:** `A10BD07`, `A10BD12`, `A10BD24`, `A10BD29`, `A10BH01`, `A10BH51`
- **DrugBank:** [DB01261](https://go.drugbank.com/drugs/DB01261) · **PubChem:** [CID 4369359](https://pubchem.ncbi.nlm.nih.gov/compound/4369359)
- **molar mass:** 407.3136 g/mol (C16H15F6N5O) — DrugBank
- **groups:** approved, investigational

## About

Sitagliptin is a DPP-4 inhibitor used to lower blood glucose in people with diabetes, including type 2 diabetes and, according to Wikidata, type 1 diabetes and maturity-onset diabetes of the young type 2. It is widely used and authorised in the European Union, available both alone and in combination products with other oral glucose-lowering drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419832](https://www.wikidata.org/wiki/Q419832) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:19 | 3:44 | 0/0/0 | 0/1/2 | 0/0/1 | 252,080/6,369 | einfracz / qwen3.8-27b | 41 | 5/33 | 39/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2021_DPP_IV_mediated_GP_BAN_hydrolysis](drugs/drug_sitagliptin/pd_Zhang_2021_DPP_IV_mediated_GP_BAN_hydrolysis.md) | DPP-IV-mediated GP-BAN hydrolysis biomarker turnover ← sitagliptin | — | Zhang J et al., A high-throughput screening assay for d…, Analytical methods : advanc… (2021) | [10.1039/d1ay00415h](https://doi.org/10.1039/d1ay00415h) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Zhou_2024_DPP_4](drugs/drug_sitagliptin/pd_Zhou_2024_DPP_4.md) | DPP-4 inhibition ← sitagliptin · direct sigmoid Emax (Hill) effect | — | Zhou C et al., Safety, tolerability, pharmacokinetics…, Frontiers in endocrinology (2024) | [10.3389/fendo.2024.1359407](https://doi.org/10.3389/fendo.2024.1359407) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kim_2013_DPP_4](drugs/drug_sitagliptin/pd_Kim_2013_DPP_4.md) | DPP-4 activity ← sitagliptin · direct sigmoid Emax (Hill) effect | — | Kim BH et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2013) | [10.1111/bcpt.12068](https://doi.org/10.1111/bcpt.12068) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kim_2013_active_GLP_1](drugs/drug_sitagliptin/pd_Kim_2013_active_GLP_1.md) | active glucagon-like peptide-1 concentrations ← sitagliptin · indirect response — drug inhibits the production of active glucagon-like peptide-1 concentrations | — | Kim BH et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2013) | [10.1111/bcpt.12068](https://doi.org/10.1111/bcpt.12068) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ABCB1** | `Q17` · AUC∞ | transport | [Hwang_2022](drugs/drug_sitagliptin/pgx_Hwang_2022_ABCB1_Q17.md) | Hwang JG et al., Common ABCB1 SNP, C3435T could affect s…, Translational and clinical… (2022) | [10.12793/tcp.2022.30.e23](https://doi.org/10.12793/tcp.2022.30.e23) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sitagliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate/transport | DrugBank actor |
| absorption | kidney | `ABCB1` substrate/transport | DrugBank actor |
| absorption | liver | `ABCB1` substrate/transport | DrugBank actor |
| absorption | placenta | `ABCB1` substrate/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate/transport | DrugBank actor |
| absorption | testis | `ABCB1` substrate/transport | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 271 matched, 162 returned
- **screened:** 7  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vélez_2014.pdf` | Vélez de Mendizábal N et al., Modelling the sitagliptin effect on dip…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-013-0109-y](https://doi.org/10.1007/s40262-013-0109-y) | [24142388](https://pubmed.ncbi.nlm.nih.gov/24142388) | The paper describes a population PK/PD model of sitagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| `Kim_2013.pdf` | Kim BH et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2013) | popPK | 5 | [10.1111/bcpt.12068](https://doi.org/10.1111/bcpt.12068) | [23510190](https://pubmed.ncbi.nlm.nih.gov/23510190) | The paper describes a population PK/PD study of sitagliptin in humans, but the evidence provided contains no numeric parameter values (CL, V, etc.). |
| `Saro_2026.pdf` | Saro A et al., Comparison of pharmacokinetics of sitag…, Indian journal of pharmacol… (2026) | popPK | 5 | [10.4103/ijp.ijp_44_26](https://doi.org/10.4103/ijp.ijp_44_26) | [42583980](https://pubmed.ncbi.nlm.nih.gov/42583980) | The study reports bioequivalence metrics (Cmax, AUC) but lacks specific compartmental PK parameters (CL, V, ka) or numeric values. |
| `Liu_2016.pdf` | Liu D et al., Quantitative prediction of human pharma…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejps.2016.04.020](https://doi.org/10.1016/j.ejps.2016.04.020) | [27108678](https://www.ncbi.nlm.nih.gov/pubmed/27108678) | metadata signals extractable PD data (PK/PD) |
| `Lu_2024.pdf` | Lu J et al., Use of a PK/PD Model to Select Cetaglip…, Clinical pharmacokinetics (2024) | pd | 5 | [10.1007/s40262-024-01427-7](https://doi.org/10.1007/s40262-024-01427-7) | [39367290](https://www.ncbi.nlm.nih.gov/pubmed/39367290) | metadata signals extractable PD data (PK/PD) |
| `Gupta_2018.pdf` | Gupta A et al., Citrus bioflavonoids dipeptidyl peptida…, Biochemical and biophysical… (2018) | pd | 4 | [10.1016/j.bbrc.2018.04.156](https://doi.org/10.1016/j.bbrc.2018.04.156) | [29698678](https://www.ncbi.nlm.nih.gov/pubmed/29698678) | metadata signals extractable PD data (IC50) |
| `Lukman_2026.pdf` | Lukman HY et al., Machine learning prediction, molecular…, Computers in biology and me… (2026) | pd | 4 | [10.1016/j.compbiomed.2025.111375](https://doi.org/10.1016/j.compbiomed.2025.111375) | [41370954](https://www.ncbi.nlm.nih.gov/pubmed/41370954) | metadata signals extractable PD data (IC50) |
| `Salar_2024.pdf` | Salar U et al., Biochemical evaluation and ligand bindi…, Bioorganic chemistry (2024) | pd | 4 | [10.1016/j.bioorg.2024.107153](https://doi.org/10.1016/j.bioorg.2024.107153) | [38335754](https://www.ncbi.nlm.nih.gov/pubmed/38335754) | metadata signals extractable PD data (IC50) |
| `Suryawanshi_2025.pdf` | Suryawanshi RM et al., ADME, Toxicity, Molecular Docking, Mole…, Chemistry & biodiversity (2025) | pd | 4 | [10.1002/cbdv.202402738](https://doi.org/10.1002/cbdv.202402738) | [39714369](https://www.ncbi.nlm.nih.gov/pubmed/39714369) | metadata signals extractable PD data (IC50) |
| `Wu_2024.pdf` | Wu W et al., Exploring dipeptidyl peptidase-IV inhib…, Journal of food science (2024) | pd | 4 | [10.1111/1750-3841.17525](https://doi.org/10.1111/1750-3841.17525) | [39617869](https://www.ncbi.nlm.nih.gov/pubmed/39617869) | metadata signals extractable PD data (IC50) |
| `Zhang_2024.pdf` | Zhang J et al., A sensitive fluorescence assay of serum…, Journal of pharmaceutical a… (2024) | pd | 4 | [10.1016/j.jpba.2024.116382](https://doi.org/10.1016/j.jpba.2024.116382) | [39098293](https://www.ncbi.nlm.nih.gov/pubmed/39098293) | metadata signals extractable PD data (IC50) |
| `Aquilante_2013.pdf` | Aquilante CL et al., Effect of ABCB1 polymorphisms and atorv…, European journal of clinica… (2013) | pgx | 8 | [10.1007/s00228-013-1475-y](https://doi.org/10.1007/s00228-013-1475-y) | [23407853](https://www.ncbi.nlm.nih.gov/pubmed/23407853) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Krishna_2007.pdf` | Krishna R et al., Effect of a single cyclosporine dose on…, Journal of clinical pharmac… (2007) | pgx | 7 | [10.1177/0091270006296523](https://doi.org/10.1177/0091270006296523) | [17244767](https://www.ncbi.nlm.nih.gov/pubmed/17244767) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mistry_2008.pdf` | Mistry GC et al., Sitagliptin, an dipeptidyl peptidase-4…, British journal of clinical… (2008) | pgx | 7 | [10.1111/j.1365-2125.2008.03148.x](https://doi.org/10.1111/j.1365-2125.2008.03148.x) | [18503607](https://www.ncbi.nlm.nih.gov/pubmed/18503607) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-07T16:18:25.081761+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Rabia_2021 | irrelevant | 0 | 0 | The study is an in-vitro formulation and antiviral efficacy study of sitagliptin-melittin nanoconjugates against SARS-CoV-2, reporting no pharmacokinetic parameters. |
| popPK | Alhakamy_2021 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Alhakamy_2021 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of a nano-conjugate against SARS-CoV-2, which is unrelated to the pharmacodynamic (glucose-lowering) profile of sitagliptin in humans. |
| popPK | Ali_2026 | irrelevant | 0 | 0 | The study is an in-silico and in-vitro drug discovery paper where sitagliptin is used only as a positive control for docking and enzyme assays, with no pharmacokinetic parameters reported. |
| PD | Ali_2026 | not_relevant | 0 | 0 | The paper focuses on the identification of Sennidin B as a DPP-4 inhibitor using machine learning and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Amanatidou_2025 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on novel DPP4 inhibitors, and sitagliptin is only mentioned as a structural reference or comparator, with no pharmacokinetic data reported. |
| popPK | Arrahman_2025 | irrelevant | 0 | 0 | The study is an in-vitro/in-silico investigation of novel DPP-4 inhibitors where sitagliptin is used only as a reference standard, with no pharmacokinetic parameters reported. |
| PD | Arrahman_2025 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for novel compounds and sitagliptin, but does not provide an exposure-response or dose-response relationship for sitagliptin itself (e.g., no PK/PD model, no concentration-effect curve for sitagliptin in vivo or in vitro beyond a single point). |
| PGx | Asakura_2015 | not_relevant | 0 | 0 | The paper focuses on the metabolism of vildagliptin, not sitagliptin. |
| popPK | Ashraf_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes (HbA1c, weight, safety) comparing empagliflozin and sitagliptin, containing no pharmacokinetic parameters (CL, V, ka, etc.) for sitagliptin. |
| popPK | Aulifa_2022 | irrelevant | 0 | 0 | The study is an in vitro and in silico investigation of a plant compound's enzyme inhibition, using sitagliptin only as a reference standard, and reports no pharmacokinetic parameters. |
| PD | Aulifa_2022 | not_relevant | 0 | 0 | The paper focuses on the inhibitory activity of xanthoangelol, not sitagliptin, and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Banu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacological and computational analysis of Abelmoschus esculentus phytochemicals, using sitagliptin only as a reference inhibitor for enzyme assays and docking, without reporting any pharmacokinetic parameters for sitagliptin. |
| popPK | Baziar_2024 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry and computational study of new DPP4 inhibitors, using sitagliptin only as a positive control for enzyme inhibition and cytotoxicity, with no pharmacokinetic parameters reported. |
| PD | Baziar_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50, Ki) for novel compounds using sitagliptin only as a positive control, but does not report any pharmacodynamic or exposure-response relationship for sitagliptin itself. |
| popPK | Beitelshees_2023 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (glucose/insulin AUCs and ratios) rather than pharmacokinetic disposition parameters (CL, V, ka) for sitagliptin. |
| PGx | Beitelshees_2023 | not_relevant | 0 | 0 | The study measures pharmacodynamic responses to sitagliptin in a general cohort but does not report any gene variant or genotype associated with these effects. |
| popPK | Beitelshees_2024 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (glucose and insulin levels) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Beitelshees_2024 | not_relevant | 0 | 0 | The paper investigates the general pharmacodynamic response of sitagliptin and mentions sex differences, but it does not report on the effect of specific gene variants or genotypes on PK/PD parameters. |
| popPK | Biftu_2007 | irrelevant | 1 | 0 | The paper focuses on the rational design and synthesis of a novel DPP-4 inhibitor analog, with sitagliptin serving only as a structural reference and comparator; no quantitative PK parameters for sitagliptin are reported. |
| PD | Biftu_2007 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for a novel analog and mentions in vivo activity, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for sitagliptin. |
| popPK | Biftu_2007_2 | irrelevant | 0 | 0 | The paper describes a different compound (a back-up candidate) and only mentions sitagliptin as a comparator for potency, without reporting any pharmacokinetic parameters for sitagliptin. |
| PD | Biftu_2007_2 | not_relevant | 1 | 0 | The text reports in vitro IC50 values for a new compound and sitagliptin, but does not provide in vivo exposure-response or dose-response data with numeric PD parameters for sitagliptin. |
| popPK | Bossi_2020 | irrelevant | 0 | 0 | The study is a real-world observational study focusing on clinical outcomes (HbA1c, cardiovascular risk) and does not report any quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Carlsson_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of semaglutide, and sitagliptin is only mentioned as a comparator in the trial design. |
| PD | Carlsson_2018 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for semaglutide, not a pharmacodynamic (PD) or exposure-response analysis, and does not provide numeric PD parameters. |
| popPK | Carpio_2025 | irrelevant | 0 | 0 | The paper describes an in silico QSAR model for predicting DPP4 inhibitors, not a pharmacokinetic study of sitagliptin. |
| PD | Carpio_2025 | not_relevant | 0 | 0 | The paper describes a QSAR web server for predicting DPP4 inhibitors and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Charoo_2022 | irrelevant | 2 | 0 | This is a BCS biowaiver monograph that reviews literature data but does not report original quantitative population-pharmacokinetic parameter values (CL, V, etc.) for sitagliptin. |
| PD | Charoo_2022 | not_relevant | 1 | 0 | The paper is a BCS biowaiver monograph that qualitatively reviews pharmacodynamic characteristics but does not report or derive numeric PD parameters or exposure-response relationships. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper describes a sensor for detecting sitagliptin activity via DPP-4 inhibition (IC50) and does not report any pharmacokinetic parameters. |
| PGx | Cheng_2022 | not_relevant | 0 | 0 | The paper describes an enzyme engineering study for the biocatalytic production of sitagliptin, not a pharmacogenomic effect on the drug's pharmacokinetics or pharmacodynamics in humans. |
| popPK | Chung_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro DPP-4 inhibition potency (IC50) of new analogs, with no pharmacokinetic parameters reported for sitagliptin. |
| PD | Chung_2024 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new analogs and sitagliptin, but does not provide an exposure-response, dose-response curve, or PK/PD model for sitagliptin. |
| PGx | Cordiner_2024 | not_relevant | 1 | 0 | The paper mentions a KNCJ11 genotype subanalysis but does not report results or effects of this genotype on sitagliptin's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dastjerdi_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and antidiabetic activity of novel DPP-4 inhibitors, using sitagliptin only as a standard comparator without reporting its pharmacokinetic parameters. |
| PD | Dastjerdi_2025 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for novel compounds and qualitative in vivo comparisons to sitagliptin, but does not provide any numeric PK/PD parameters or exposure-response analysis for sitagliptin. |
| popPK | Dawra_2019 | irrelevant | 0 | 0 | The study assesses drug-drug interactions for ertugliflozin, with sitagliptin serving as a co-administered comparator without reporting quantitative disposition parameters (CL, V, ka) for sitagliptin. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | This is a review article on sulfonamides and antioxidants for diabetes that does not contain any pharmacokinetic data or quantitative disposition parameters for sitagliptin. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides (sulfonylureas) and antioxidants, and does not mention sitagliptin or report any pharmacodynamic parameters. |
| popPK | Dong_2024 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of adefovir, with sitagliptin only mentioned as a co-administered probe drug in a cocktail, and no PK parameters for sitagliptin are reported. |
| PD | Dong_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of adefovir and does not report any pharmacodynamic or exposure-response relationship for sitagliptin. |
| popPK | Dos_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of plant extracts where sitagliptin is used only as a positive control for DPP-4 inhibition, reporting no pharmacokinetic parameters. |
| PD | Dos_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for sitagliptin as a reference standard, but does not report any pharmacokinetic data, exposure-response relationship, or pharmacodynamic model for sitagliptin in vivo or in a PK/PD context. |
| popPK | Eisa_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug synergy in cancer cells and does not report pharmacokinetic parameters for sitagliptin. |
| PGx | Eitah_2025 | not_relevant | 0 | 0 | The paper investigates the anti-tumor efficacy of sitagliptin in a liver preneoplasia model and does not assess how genetic variants affect its pharmacokinetics or pharmacodynamics. |
| popPK | El_2025 | irrelevant | 0 | 0 | The study is a materials science/nanotechnology paper on zinc oxide nanoparticles where sitagliptin is used only as a standard reference drug in in-vitro biological assays, not as a subject of pharmacokinetic analysis. |
| PD | El_2025 | not_relevant | 0 | 0 | The paper is a materials science study on green synthesis of nanoparticles; sitagliptin is used only as a standard reference drug in in vitro assays, and no pharmacokinetic or pharmacodynamic modeling of sitagliptin is performed. |
| popPK | Fayyaz_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro enzyme inhibition of novel DPP-IV inhibitors, using sitagliptin only as a standard comparator without reporting any pharmacokinetic parameters. |
| PD | Fayyaz_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel compounds and compares them to sitagliptin, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for sitagliptin. |
| popPK | Fediuk_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ertugliflozin, not sitagliptin. |
| PD | Fediuk_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for ertugliflozin, not sitagliptin, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Fuh_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological evaluation of new DPP-4 inhibitors, with no pharmacokinetic data for sitagliptin. |
| PD | Fuh_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new chemical analogs, not a pharmacodynamic or exposure-response relationship for sitagliptin itself. |
| popPK | Gibbs_2012 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis modeling HbA1c response to DPP-4 inhibition, not a pharmacokinetic study reporting sitagliptin disposition parameters. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper reviews the general clinical pharmacokinetics of DPP-4 inhibitors but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Gomha_2015 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper evaluating DPP-IV inhibitory activity (IC50) and does not report pharmacokinetic parameters for sitagliptin. |
| PD | Gomha_2015 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for novel compounds compared to sitagliptin, but does not provide a pharmacokinetic/pharmacodynamic model, exposure-response analysis, or numeric PD parameters (like Emax, EC50, or slope) for sitagliptin itself. |
| popPK | Gupta_2011 | irrelevant | 1 | 0 | The paper is a review article discussing gliptins generally and does not provide original quantitative pharmacokinetic parameter values for sitagliptin. |
| PD | Gupta_2011 | not_relevant | 1 | 0 | The text is a general review introduction discussing the mechanism of action and clinical context of gliptins, but it does not report specific numeric PD parameters or exposure-response data for sitagliptin. |
| popPK | Gupta_2018 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study investigates the dose-response relationship of DPP-4 inhibitors on glycated hemoglobin (HbA1c) using machine learning, and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for sitagliptin. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is an in vitro and computational (GaMD) study of DPP4 inhibitors (Isavuconazonium, etc.) and does not report pharmacokinetic parameters (CL, V, etc.) for sitagliptin. |
| PD | He_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro enzyme inhibition (IC50) and molecular dynamics simulations of DPP4 inhibitors, not in vivo pharmacodynamics or exposure-response relationships for sitagliptin. |
| popPK | Herman_2006 | irrelevant | 2 | 0 | The abstract describes a PK/PD study but does not report specific quantitative disposition parameters (CL, V, t1/2) in the provided text. |
| PD | Herman_2006 | not_relevant | 3 | 2 | The paper reports group-level mean effects (e.g., 90% DPP-4 inhibition, 2.7-fold GLP-1 increase) for a fixed dose, but does not provide individual concentration-effect data, a PK/PD model, or numeric parameters like Emax/EC50. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper describes a theoretical mathematical model for drug-drug interactions using generic "Drug X" and "Drug Y" and does not study or report parameters for sitagliptin. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on a coupled pharmacokinetic (PK) model for drug-drug interactions (metoprolol and captopril) and does not report any pharmacodynamic (PD) or exposure-response relationships for sitagliptin. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of pharmacodynamic efficacy (glucose lowering) of antidiabetic classes, not a pharmacokinetic study reporting disposition parameters for sitagliptin. |
| popPK | Jadhav_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of new carbohydrazide derivatives, using sitagliptin only as a positive control for antidiabetic activity without reporting any pharmacokinetic parameters for sitagliptin. |
| PD | Jadhav_2022 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values for novel compounds and compares in vivo glucose levels of a single dose of sitagliptin to controls, but does not provide an exposure-response or dose-response curve or numeric PD parameters (Emax, EC50, slope) for sitagliptin. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The study is a mechanistic investigation of sitagliptin's therapeutic effects on Parkinson's disease pathology in mice and does not report any pharmacokinetic parameters. |
| PD | Jeong_2026 | not_relevant | 1 | 0 | The paper reports qualitative therapeutic effects of sitagliptin in a PD model but does not provide any numeric concentration-effect data, dose-response curves, or PD parameters. |
| PGx | Jia_2025 | not_relevant | 0 | 0 | The paper describes enzyme engineering for the chemical synthesis of sitagliptin analogs, not human pharmacogenomics or clinical PK/PD outcomes. |
| popPK | Jiang_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new DPP-4 inhibitors, using sitagliptin only as a comparator for in vivo efficacy, with no PK parameters reported. |
| PD | Jiang_2015 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for new compounds and a qualitative in vivo comparison to sitagliptin, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for sitagliptin. |
| popPK | Kakara_2016 | irrelevant | 0 | 0 | The study is a population pharmacodynamic (PPD) analysis of HbA1c-lowering effects, not a pharmacokinetic study, and does not report disposition parameters for sitagliptin. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 polymorphism is unlikely to affect the response to sitagliptin because the liver is not important for its elimination or action. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding the efficacy of semaglutide for MASH and does not contain pharmacokinetic data for sitagliptin. |
| PD | Kan_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of semaglutide, not sitagliptin, and does not report pharmacodynamic parameters for the target drug. |
| popPK | Kang_2023 | irrelevant | 2 | 0 | The study is a formulation and bioequivalence trial that reports qualitative equivalence and dissolution data, but does not provide quantitative population PK parameters (CL, V, ka) for sitagliptin in the evidence. |
| PD | Kang_2023 | not_relevant | 1 | 0 | The paper focuses on formulation development and bioequivalence, mentioning "pharmacodynamic characteristics" only qualitatively without providing any numeric PD parameters or exposure-response data. |
| popPK | Kasahara_2016 | irrelevant | 2 | 0 | Sitagliptin is a co-administered drug in a tofogliflozin DDI study, not the primary subject, and no quantitative PK parameters for sitagliptin are reported. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study is a drug-drug interaction trial focusing on tofogliflozin; it reports no concentration-effect or dose-response modeling for sitagliptin, only qualitative statements that sitagliptin did not affect tofogliflozin's pharmacodynamics. |
| popPK | Kashmoola_2026 | irrelevant | 0 | 0 | The paper is a narrative review on polypharmacy and bone health in diabetes, with no quantitative PK parameters for sitagliptin. |
| PD | Kashmoola_2026 | not_relevant | 0 | 0 | The paper is a narrative review on polypharmacy and bone health in T2DM and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sitagliptin. |
| popPK | Kaur_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new DPP-4 inhibitors, using sitagliptin only as a comparator for IC50 values, and contains no pharmacokinetic data. |
| PD | Kaur_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new peptide esters compared to sitagliptin, but does not provide a pharmacokinetic/pharmacodynamic model, exposure-response relationship, or numeric PD parameters (like Emax, EC50 in vivo, or slope) for sitagliptin. |
| popPK | Khamees_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and synthetic chemistry paper where sitagliptin is used only as a comparator for enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Khamees_2024 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values for sitagliptin as a reference control, but does not present a pharmacokinetic or pharmacodynamic model, exposure-response analysis, or dose-response curve for sitagliptin in vivo or in a PK/PD context. |
| popPK | Khan_2025 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of a plant extract's DPP-4 inhibitory activity, using sitagliptin only as a positive control, and does not report any pharmacokinetic parameters for sitagliptin. |
| popPK | Kim_2013 | relevant | 5 | 0 | The paper describes a population PK/PD study of sitagliptin in humans, but the evidence provided contains no numeric parameter values (CL, V, etc.). |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacology of a novel GPR119 agonist (DA-1241) and its combination with sitagliptin for glycemic control in mice, without reporting any population pharmacokinetic or disposition parameters (CL, V, ka, etc.) for sitagliptin. |
| PD | Kim_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of DA-1241; sitagliptin is only used as a comparator in combination studies without any reported exposure-response or dose-response analysis for sitagliptin itself. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of evogliptin, not sitagliptin. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper reports a PD model for evogliptin, not sitagliptin. |
| popPK | Koomen_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics of dapagliflozin, not the pharmacokinetics of sitagliptin. |
| PD | Koomen_2020 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for dapagliflozin, not sitagliptin. |
| PGx | Krishna_2007 | not_relevant | 0 | 0 | The study examines the pharmacokinetic interaction between cyclosporine and sitagliptin, not a pharmacogenomic effect based on genetic variants. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/chemical synthesis paper comparing DPP-4 inhibition potency (IC50) of new compounds to sitagliptin, reporting no pharmacokinetic parameters. |
| PD | Kumar_2025 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for sitagliptin as a reference standard but does not provide a concentration-effect curve, dose-response analysis, or PK/PD model for the drug. |
| popPK | La_2025 | irrelevant | 0 | 0 | The study focuses on GPR119 agonists, and sitagliptin is only used as a comparator agent; no quantitative PK parameters for sitagliptin are reported. |
| PD | La_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of GPR119 agonists and only uses sitagliptin as a qualitative comparator in efficacy studies, without reporting any exposure-response or dose-response PD parameters for sitagliptin. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The study focuses on isobavachalcone as a DPP4 inhibitor, with sitagliptin serving only as a positive control/comparator, and no PK parameters for sitagliptin are reported. |
| PD | Lee_2026 | not_relevant | 3 | 2 | The paper reports an IC50 for isobavachalcone and compares its in vivo efficacy to sitagliptin, but it does not provide a concentration-effect or dose-response curve or numeric PD parameters (Emax, EC50, slope) for sitagliptin itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of novel peptides, and sitagliptin is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data for novel peptides and only mentions sitagliptin as a single-target comparator without providing any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Lim_2026 | irrelevant | 0 | 0 | The study is an imaging trial assessing renal effects of empagliflozin, with sitagliptin serving only as an active comparator and no PK parameters reported. |
| PD | Lim_2026 | not_relevant | 0 | 0 | The paper focuses on the renal effects of empagliflozin using MRI and does not report any pharmacodynamic or exposure-response relationship for sitagliptin. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Liu_2016 | not_relevant | 0 | 0 | The paper focuses on imigliptin, not sitagliptin, and does not report PD parameters for the target drug. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study focuses on dorzagliatin and empagliflozin; sitagliptin is not the subject drug nor mentioned in the evidence. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic and pharmacodynamic interaction between dorzagliatin and empagliflozin, not sitagliptin. |
| popPK | Lu_2022 | irrelevant | 1 | 0 | The study focuses on cetagliptin as the subject drug, with sitagliptin serving only as a positive control, and no quantitative PK parameters for sitagliptin are provided in the evidence. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Lu_2024 | not_relevant | 0 | 0 | The paper focuses on cetagliptin, not sitagliptin, and does not report PD parameters for the specified drug. |
| popPK | Lukman_2026 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Lukman_2026 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of DPP-4 by citrus metabolites and does not report any pharmacokinetic or pharmacodynamic data for sitagliptin. |
| PGx | Mashayekhi_2025 | not_relevant | 0 | 0 | The paper evaluates the pharmacogenomic effect of the GLP-1R variant on liraglutide efficacy, not on sitagliptin. |
| popPK | Maslov_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a novel DPP-4 inhibitor (neogliptin) with sitagliptin used only as a comparator for potency and ADME, reporting no PK parameters for sitagliptin. |
| PD | Maslov_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a novel compound (neogliptin) and compares it to sitagliptin, but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for sitagliptin itself. |
| popPK | Melin_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dapagliflozin, not sitagliptin. |
| PD | Melin_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of dapagliflozin and does not report any pharmacodynamic (PD) or exposure-response analysis for sitagliptin or any other drug. |
| PGx | Meng_2025 | not_relevant | 0 | 0 | The study evaluates therapeutic efficacy in a disease model, not the impact of specific human gene variants on sitagliptin pharmacokinetics or pharmacodynamics. |
| popPK | Mengesha_2025 | irrelevant | 0 | 0 | The study is a cross-sectional epidemiological survey of drug interactions and does not report any quantitative pharmacokinetic parameters for sitagliptin. |
| popPK | Mhadhbi_2025 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| PD | Mhadhbi_2025 | not_relevant | 0 | 0 | The paper discusses a cobalt complex as a photocatalyst and enzyme inhibitor, not sitagliptin, and contains no pharmacodynamic or exposure-response data for the target drug. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of GLP-1 receptor agonists and DPP-4 inhibition mechanisms, but it does not report quantitative pharmacokinetic parameters for sitagliptin. |
| PD | Min_2025 | not_relevant | 0 | 0 | The paper is a review of GLP-1 receptor agonists and does not contain any pharmacodynamic or exposure-response data for sitagliptin. |
| PGx | Mistry_2008 | not_relevant | 0 | 10 | The paper investigates a drug-drug interaction (sitagliptin on glyburide PK) in a non-genotyped population, rather than reporting a pharmacogenomic effect. |
| popPK | Mobeen_2024 | irrelevant | 0 | 0 | The study focuses on the discovery and in-vitro/in-vivo efficacy of new DPP-4 inhibitors, with sitagliptin serving only as a reference comparator for potency and glucose control, reporting no pharmacokinetic parameters. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review on DPP-4 inhibitors for cancer repurposing and does not report quantitative pharmacokinetic parameters for sitagliptin. |
| PD | Muddather_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing epidemiological and preclinical evidence without presenting specific PK/PD data, models, or numeric parameters for sitagliptin. |
| popPK | Naeem_2026 | irrelevant | 0 | 0 | The paper is a review of Terminalia arjuna in ulcerative colitis and does not report any pharmacokinetic data for sitagliptin. |
| PD | Naeem_2026 | not_relevant | 0 | 0 | The paper is a review of Terminalia arjuna for ulcerative colitis and does not mention sitagliptin or report any pharmacodynamic parameters. |
| popPK | Nagao_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial (STREAM study) reporting glycemic outcomes and adverse events, with no pharmacokinetic parameters (CL, V, t1/2) measured or reported. |
| popPK | Nidhar_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo efficacy of novel DPP-4 inhibitors, using sitagliptin only as a comparator for IC50 values, with no pharmacokinetic parameters reported. |
| PD | Nidhar_2023 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for novel compounds compared to sitagliptin, but does not provide an exposure-response or dose-response analysis for sitagliptin itself. |
| popPK | Ortiz-Seller_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical trials assessing the risk of diabetic retinopathy, not a pharmacokinetic study, and contains no PK parameters for sitagliptin. |
| PD | Ortiz-Seller_2026 | not_relevant | 1 | 0 | The paper is a network meta-analysis of clinical outcomes (diabetic retinopathy) and explicitly reports no dose-response relationship; it does not contain pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| popPK | Othman_2026 | irrelevant | 1 | 1 | The study investigates the pharmacokinetics of linagliptin and cefixime in rats, not sitagliptin. |
| PD | Othman_2026 | not_relevant | 0 | 0 | The paper focuses on the development and validation of an HPLC method and reports only pharmacokinetic parameters (Cmax, AUC) for linagliptin and cefixime, with no pharmacodynamic or exposure-response analysis. |
| popPK | Park_2015 | irrelevant | 0 | 0 | The paper is about glucokinase activators where sitagliptin is used only as a positive control in oral glucose tolerance tests (OGTT), with no pharmacokinetic parameters (CL, V, etc.) reported for sitagliptin. |
| PD | Park_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel glucokinase activators; sitagliptin is mentioned only as a qualitative comparator in an OGTT study, with no PD model or exposure-response analysis for sitagliptin. |
| popPK | Passari_2020 | irrelevant | 0 | 0 | The study focuses on the antioxidant properties of a bacterial extract, using sitagliptin only as a positive control for lipid profile changes, with no pharmacokinetic parameters reported. |
| PD | Passari_2020 | not_relevant | 0 | 0 | The paper studies the bioactive properties of a bacterial extract (Streptomyces sp. DBT34) and only mentions sitagliptin as a standard control in a rat study without providing any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Posada_2025 | irrelevant | 0 | 0 | The study investigates the effect of dulaglutide on gastric emptying and its impact on generic small molecules, with no specific data or focus on sitagliptin. |
| PD | Posada_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dulaglutide and its effect on gastric emptying and co-administered drugs, not on the pharmacodynamics of sitagliptin. |
| popPK | Prajapati_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro enzymatic activity of novel boronic acid compounds, using sitagliptin only as a comparator for IC50 values without reporting any pharmacokinetic parameters for sitagliptin. |
| PD | Prajapati_2024 | not_relevant | 1 | 1 | The paper reports an IC50 for sitagliptin (17.3 nM) as a reference standard for new compounds, but does not report a PD model, exposure-response relationship, or dose-response curve for sitagliptin itself. |
| popPK | Quek_2020 | irrelevant | 0 | 0 | no_text gate: only 204 chars of text extracted (&lt; 400) |
| PD | Quek_2020 | not_relevant | 0 | 0 | The paper focuses on the identification of natural product inhibitors of DPP-4 and alpha-amylase from Melicope glabra, not on the pharmacodynamics or exposure-response of the drug sitagliptin. |
| popPK | Qureshi_2026 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Qureshi_2026 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, concentration-effect curves, or dose-response data for sitagliptin. |
| popPK | Rizk_2026 | irrelevant | 0 | 0 | The study is a medicinal chemistry and in-vitro pharmacological evaluation of novel compounds, using sitagliptin only as a positive control for DPP-4 inhibition, with no pharmacokinetic data reported. |
| popPK | Rjoob_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study using a knowledge graph for drug repurposing and does not report any pharmacokinetic parameters or disposition data for sitagliptin. |
| PD | Rjoob_2025 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing, mentioning gliptins only as a candidate therapy without providing any pharmacokinetic or pharmacodynamic data for sitagliptin. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper is a computational study on knowledge graphs for cardiovascular disease prediction and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Rjoob_2026 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing predictions but does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Saito_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ipragliflozin, not sitagliptin. |
| PD | Saito_2019 | not_relevant | 0 | 0 | The paper reports a PK/PD model for ipragliflozin, not sitagliptin. |
| popPK | Salar_2024 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PD | Salar_2024 | not_relevant | 0 | 0 | The paper focuses on biochemical and structural studies of a Staphylococcus aureus enzyme using NMR and docking, and does not contain any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Salvatore_2026 | irrelevant | 0 | 0 | The paper is a phenome-wide association study (PheWAS) on health outcomes (diagnoses) and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Salvatore_2026 | not_relevant | 0 | 0 | The paper is a phenome-wide association study using electronic health records to compare clinical outcomes (diagnoses) between drug classes; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for sitagliptin. |
| popPK | Sanches_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics study on biomarkers for papillary thyroid carcinoma and does not contain pharmacokinetic data for sitagliptin. |
| PD | Sanches_2026 | not_relevant | 0 | 0 | The paper focuses on biomarker discovery for papillary thyroid cancer using machine learning and omics data, and does not contain any pharmacodynamic or exposure-response analysis for sitagliptin. |
| popPK | Saro_2026 | irrelevant | 5 | 0 | The study reports bioequivalence metrics (Cmax, AUC) but lacks specific compartmental PK parameters (CL, V, ka) or numeric values. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibitors/inducers, P-gp) and does not report pharmacogenomic effects of gene variants on sitagliptin PK/PD. |
| popPK | Schultz_2026 | irrelevant | 0 | 0 | The paper is a Raman spectroscopy study of a FLAP antagonist (BRP-685) in macrophages and does not investigate sitagliptin pharmacokinetics. |
| PD | Schultz_2026 | not_relevant | 0 | 0 | The paper focuses on the intracellular localization of a 5-lipoxygenase-activating protein antagonist (BRP-685) using Raman spectroscopy and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| PGx | Seo_2020 | not_relevant | 0 | 0 | The paper focuses on machine learning for drug side effect prediction and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sitagliptin. |
| popPK | Sever_2020 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry paper evaluating DPP-4 inhibitory activity (IC50) and does not report any pharmacokinetic parameters for sitagliptin. |
| PD | Sever_2020 | not_relevant | 3 | 2 | The paper reports an IC50 for sitagliptin as a reference standard in an in vitro assay, but does not provide a concentration-effect curve, slope, or any other numeric PD parameters for sitagliptin itself, nor does it model its PK/PD. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The paper focuses on the antidiabetic properties of a plant extract in rats and only mentions sitagliptin as a class example in the introduction, with no pharmacokinetic data for sitagliptin. |
| PD | Shahzadi_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Fraxinus xanthoxyloides) and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Shaikh_2022 | irrelevant | 0 | 0 | The study is an in silico and in vitro investigation of DPP-4 inhibition by natural compounds, using sitagliptin only as a positive control for binding interactions, with no pharmacokinetic parameters reported. |
| popPK | Singh_2020 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of DPP-IV inhibition and antioxidant properties where sitagliptin is used only as a standard comparator, and no pharmacokinetic parameters are reported. |
| PD | Singh_2020 | not_relevant | 0 | 0 | The paper focuses on the in silico, in vitro, and ex vivo inhibition of DPP-IV by quercetin and coumarin, and does not report any pharmacokinetic or pharmacodynamic data for sitagliptin. |
| PD | Siva_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic interaction between Corilagin and Sitagliptin using CYP450 and network pharmacology, with no report of pharmacodynamic or exposure-response relationships. |
| PGx | Siva_2025 | not_relevant | 0 | 0 | The study investigates herb-drug interaction (corilagin effect on sitagliptin PK), not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions (falls and bleeding) using regression models, and does not contain any pharmacokinetic parameters for sitagliptin. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reactions in polypharmacy using regression models on real-world data and does not report any pharmacodynamic, exposure-response, or dose-response relationships for sitagliptin. |
| popPK | Soni_2025 | irrelevant | 0 | 0 | The study is a mechanistic neuroprotection investigation in mice that reports behavioral and molecular outcomes, not quantitative pharmacokinetic parameters for sitagliptin. |
| popPK | Sura_2026 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry and docking study of novel DPP-4 inhibitors, with sitagliptin used only as a reference comparator and no pharmacokinetic parameters reported. |
| PD | Sura_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds and compares them to sitagliptin, but does not provide a pharmacodynamic model, exposure-response relationship, or numeric PD parameters for sitagliptin itself. |
| popPK | Suryawanshi_2025 | irrelevant | 0 | 0 | no_text gate: only 188 chars of text extracted (&lt; 400) |
| PGx | Syam_2019 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro/in vivo evaluation of new DPP-4 inhibitors, not pharmacogenomic effects on sitagliptin's PK/PD parameters. |
| PGx | Tallón_2014 | not_relevant | 0 | 0 | The paper discusses the potential antidiabetic effect of telaprevir and its interaction with sitagliptin therapy, but it does not report any pharmacogenomic variants or genotypes affecting sitagliptin's PK/PD parameters. |
| popPK | Tasnim_2024 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report original quantitative pharmacokinetic parameters for sitagliptin. |
| PD | Tasnim_2024 | not_relevant | 1 | 0 | The paper is a qualitative review of drug-drug interactions and does not report any numeric pharmacodynamic parameters or concentration-effect relationships for sitagliptin. |
| popPK | Tatosian_2013 | relevant | 8 | 2 | Study reports non-compartmental PK parameters (AUC, Cmax) for sitagliptin, but the specific numeric values are in Table 2 which is cut off in the provided evidence. |
| popPK | Tham_2022 | irrelevant | 0 | 0 | The paper models glycaemic control and body weight for semaglutide and dulaglutide, and does not involve sitagliptin or its pharmacokinetics. |
| PD | Tham_2022 | not_relevant | 0 | 0 | The paper focuses on dulaglutide and semaglutide, not sitagliptin, and does not report PD parameters for the target drug. |
| popPK | Tyurenkov_2018 | irrelevant | 0 | 0 | The study focuses on the novel GPR119 agonist ZB-16, with sitagliptin used only as a comparator for hypoglycemic efficacy in rats; no pharmacokinetic parameters for sitagliptin are reported. |
| PD | Tyurenkov_2018 | not_relevant | 0 | 0 | The paper focuses on the novel compound ZB-16; sitagliptin is used only as a single-dose comparator in efficacy studies without any exposure-response modeling or derivation of PD parameters for sitagliptin. |
| popPK | Utzschneider_2025 | irrelevant | 0 | 0 | The study analyzes model-based parameters of β-cell function (ISR, sensitivity) rather than sitagliptin pharmacokinetic parameters (CL, Vd, t1/2). |
| popPK | Vawhal_2023 | irrelevant | 0 | 0 | The study is an in vitro enzyme assay and computational analysis of new compounds, using sitagliptin only as a reference standard for IC50, with no pharmacokinetic parameters reported. |
| PD | Vawhal_2023 | not_relevant | 1 | 1 | The paper reports a single IC50 value for sitagliptin as a reference standard in an in vitro enzyme assay, but does not provide an exposure-response or dose-response curve, nor does it report PK/PD modeling parameters. |
| PGx | Vincent_2007 | not_relevant | 0 | 0 | The paper describes general metabolism and excretion of sitagliptin in a small human study without reporting any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Vogel_2024 | irrelevant | 0 | 0 | The paper focuses on wastewater-based epidemiology and substance use monitoring, not the pharmacokinetic parameters of sitagliptin. |
| PD | Vogel_2024 | not_relevant | 0 | 0 | The paper focuses on wastewater-based epidemiology and analytical methods for substance detection, containing no pharmacokinetic or pharmacodynamic data for sitagliptin. |
| popPK | Vélez_2014 | relevant | 10 | 0 | The paper describes a population PK/PD model of sitagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| PD | Vélez_2014 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or results necessary to verify the presence of numeric PD parameters or an exposure-response relationship. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study investigates cetagliptin as the subject drug, with sitagliptin serving only as a positive control/comparator. |
| popPK | Wright_2009 | irrelevant | 0 | 0 | The study assesses the pharmacokinetics of warfarin (the subject drug) in the presence of sitagliptin (a co-administered agent), and does not report quantitative PK parameters for sitagliptin itself. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | Wu_2024 | not_relevant | 0 | 0 | The paper focuses on the enzymatic inhibition of DPP-IV by peptides from Tartary Buckwheat protein, not the pharmacodynamics of the drug sitagliptin. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new dual-target compounds, not a pharmacokinetic study of sitagliptin, and reports no sitagliptin disposition parameters. |
| PD | Yang_2025 | not_relevant | 3 | 2 | The paper reports in vitro potency (IC50/EC50) for a new dual-target compound, not a pharmacodynamic exposure-response or dose-response relationship for sitagliptin itself. |
| popPK | Yang_2025_2 | irrelevant | 0 | 0 | The paper is a review of in silico and AI models for drug disposition across the lifespan and does not report quantitative pharmacokinetic parameters for sitagliptin. |
| PD | Yang_2025_2 | not_relevant | 0 | 0 | The paper is a review of in silico and AI modeling methods and does not report specific PD or exposure-response data for sitagliptin. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | The paper focuses on SGLT2 inhibitors (dapagliflozin, canagliflozin, empagliflozin) and does not mention sitagliptin or provide PK parameters for it. |
| PD | Yao_2023 | not_relevant | 0 | 0 | The paper focuses on SGLT2 inhibitors (dapagliflozin, canagliflozin, empagliflozin) and does not report any pharmacodynamic or exposure-response data for sitagliptin. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic assay measuring IC50 and inhibition kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper discusses sitagliptin only as a potential drug target for CAA based on molecular docking, not as a study of pharmacogenomic effects on its PK or PD. |
| popPK | Zhou_2024 | irrelevant | 2 | 1 | The study evaluates cetagliptin as the subject drug, with sitagliptin serving only as a positive control and no population PK parameters (CL, V, etc.) are reported for sitagliptin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
