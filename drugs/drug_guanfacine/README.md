<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;guanfacine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guanfacine_Knebel2015_reference&quot;,&quot;label&quot;:&quot;Knebel_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# guanfacine

- **generic name:** guanfacine
- **ATC codes:** `C02AC02`
- **DrugBank:** [DB01018](https://go.drugbank.com/drugs/DB01018) · **PubChem:** [CID 3519](https://pubchem.ncbi.nlm.nih.gov/compound/3519)
- **molar mass:** 246.093 g/mol (C9H9Cl2N3O) — DrugBank
- **groups:** approved, investigational

## About

Guanfacine is used to treat high blood pressure and attention deficit hyperactivity disorder. It is an approved medicine, with products authorised in the European Union for ADHD, and it is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5613599](https://www.wikidata.org/wiki/Q5613599) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| guanfacine | parent | 246.093 | C9H9Cl2N3O | DrugBank | [3519](https://pubchem.ncbi.nlm.nih.gov/compound/3519) | Knebel_2015, Tsuda_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-10 17:13 | 1:43 | 1/5/0 | 0/0/1 | 0/0/1 | 84,343/5,397 | einfracz / qwen3.8-27b | 18 | 12/6 | 6/12 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Knebel_2015_reference](drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Knebel W et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0245-7](https://doi.org/10.1007/s40262-015-0245-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cherruault_1986_reference](drugs/drug_guanfacine/Guanfacine_Cherruault1986_reference.md) | — | 1-compartment (no model) | 0 | Cherruault Y et al., A three-compartment open model with fir…, International journal of bi… (1986) | [10.1016/0020-7101(86)90023-1](https://doi.org/10.1016/0020-7101(86)90023-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2018_reference](drugs/drug_guanfacine/Guanfacine_Li2018_reference.md) | — | 1-compartment (no model) | 0 | Li A et al., Correction to: Development of Guanfacin…, Paediatric drugs (2018) | [10.1007/s40272-017-0275-8](https://doi.org/10.1007/s40272-017-0275-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tsuda_2019_all](drugs/drug_guanfacine/Guanfacine_Tsuda2019_all.md) | — | 2-compartment (no model) | 4 | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tsuda_2019_child_6e12_years](drugs/drug_guanfacine/Guanfacine_Tsuda2019_child_6e12_years.md) | — | 2-compartment (no model) | 4 | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tsuda_2019_dose_group](drugs/drug_guanfacine/Guanfacine_Tsuda2019_dose_group.md) | — | 2-compartment (no model) | 4 | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed 0/2</span> | [Knebel_2015_2_ADHD_RS_IV](drugs/drug_guanfacine/pd_Knebel_2015_2_ADHD_RS_IV.md) | ADHD Rating Scale-IV ← guanfacine · model not identified | — | Knebel W et al., Modeling and simulation of the exposure…, Journal of pharmacokinetics… (2015) | [10.1007/s10928-014-9397-6](https://doi.org/10.1007/s10928-014-9397-6) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [McCracken_2010](drugs/drug_guanfacine/pgx_McCracken_2010_ABCB1_Q100.md) | McCracken JT et al., Possible influence of variant of the P-…, Journal of child and adoles… (2010) | [10.1089/cap.2009.0059](https://doi.org/10.1089/cap.2009.0059) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=guanfacine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate, `SLC22A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 37 returned
- **screened:** 17  ·  **relevant:** 1
- **records:** 6  ·  extracted 1  ·  needs_review 0  ·  rejected 5  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knebel_2014.pdf` | Knebel W et al., Population pharmacokinetic/pharmacodyna…, The AAPS journal (2014) | pd | 5 | [10.1208/s12248-014-9645-0](https://doi.org/10.1208/s12248-014-9645-0) | [25135837](https://www.ncbi.nlm.nih.gov/pubmed/25135837) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Butterworth_1993.pdf` | Butterworth JF et al., The alpha 2-adrenergic agonists clonidi…, Anesthesia and analgesia (1993) | pd | 4 | not captured | [8093828](https://www.ncbi.nlm.nih.gov/pubmed/8093828) | metadata signals extractable PD data (EC50) |
| `Pineda_1993.pdf` | Pineda J et al., Stimulatory effects of clonidine, ciraz…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00164789](https://doi.org/10.1007/BF00164789) | [7901773](https://www.ncbi.nlm.nih.gov/pubmed/7901773) | metadata signals extractable PD data (Emax) |
| `Brown_2022.pdf` | Brown JT, The Pharmacogenetic Impact on the Pharm…, Methods in molecular biolog… (2022) | pgx | 8 | [10.1007/978-1-0716-2573-6_15](https://doi.org/10.1007/978-1-0716-2573-6_15) | [36068472](https://www.ncbi.nlm.nih.gov/pubmed/36068472) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kibitov_2016.pdf` | Kibitov АО et al., [A pharmacogenetic analysis of dopamine…, Zhurnal nevrologii i psikhi… (2016) | pgx | 5 | [10.17116/jnevro201611611236-48](https://doi.org/10.17116/jnevro201611611236-48) | [28300812](https://www.ncbi.nlm.nih.gov/pubmed/28300812) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-09T06:29:51.663687+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Brown_2022 | not_relevant | 2 | 1 | The paper discusses pharmacogenetics for atomoxetine and methylphenidate, but contains no data, analysis, or specific effects reported for guanfacine. |
| popPK | Butterworth_1993 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Butterworth_1993 | not_relevant | 0 | 0 | The paper describes electrophysiological conduction block in rat sciatic nerves, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) in the context of drug efficacy or safety endpoints. |
| popPK | Cherruault_1985 | relevant | 9 | 0 | The paper describes a PK parameter estimation method tested on Guanfacine data, but the evidence text provides no specific numeric parameter values (CL, V, ka, etc.). |
| popPK | Cherruault_1986 | relevant | 8 | 0 | The paper describes a PK model for Guanfacine and states it is tested on data for the drug, but the evidence provided contains no numeric parameter values. |
| popPK | Dash_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review of TAAR-1 agonists and does not contain pharmacokinetic disposition parameters for guanfacine. |
| PD | Dash_2026 | not_relevant | 1 | 0 | The paper is a medicinal chemistry review focusing on Structure-Activity Relationships (SAR) and binding modes, not a pharmacokinetic/pharmacodynamic study reporting exposure-response or dose-response data for guanfacine. |
| PGx | De_2012 | not_relevant | 0 | 0 | The paper is a general review of ADHD treatments and only mentions the future promise of pharmacogenomics without reporting specific data on guanfacine PK/PD parameters. |
| PGx | Kibitov_2016 | not_relevant | 2 | 5 | The study reports associations between gene variants and clinical treatment outcomes (retention/relapse), not changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters like exposure or receptor response. |
| popPK | Kiechel_1986 | relevant | 10 | 2 | The abstract provides qualitative descriptions and a single half-life value (17 h), but the specific numeric values for clearance, volume, and other PK parameters are not listed in the provided text. |
| popPK | Knebel_2014 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | Knebel_2015_2 | irrelevant | 1 | 0 | The study is an exposure-response (pharmacodynamic) analysis focusing on efficacy scores and dropout patterns, not a pharmacokinetic study reporting disposition parameters like clearance or volume for guanfacine. |
| popPK | Labarrera_2018 | irrelevant | 0 | 0 | The paper is a neuroscience study focusing on the electrophysiological effects of guanfacine on neurons in mice, not a pharmacokinetic study. |
| PGx | Law_2022 | not_relevant | 0 | 0 | The paper characterizes the metabolic enzymes (CYP3A4/5) involved in guanfacine metabolism using in vitro models but does not report how genetic variants change pharmacokinetic or pharmacodynamic parameters. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The text is a copyright and licensing correction notice, not the scientific article itself, and contains no pharmacogenomic data. |
| PGx | Li_2018_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions mediated by CYP3A4 inducers/inhibitors, not the impact of a genetic variant, genotype, or phenotype on guanfacine PK/PD parameters. |
| popPK | Liu_1997 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamics study characterizing alpha-adrenoceptors in rat ileum, not a pharmacokinetic study. |
| popPK | Matsuo_2017 | relevant | 7 | 1 | The study reports guanfacine pharmacokinetics in humans, but the provided abstract contains only qualitative comparisons of AUC percentages and no specific numeric values for clearance, volume, or half-life. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and signaling analysis, not a pharmacokinetic study, and reports no disposition parameters for guanfacine. |
| PD | Newman-Tancredi_1998 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (pKi) and relative efficacies (Emax) for guanfacine at 5-HT1A receptors, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical or systemic effect. |
| popPK | Parsley_1999 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing alpha2-adrenoceptors and does not report any pharmacokinetic parameters for guanfacine. |
| PGx | Patel_2013 | not_relevant | 0 | 0 | The paper is a review discussing pharmacogenetics for methylphenidate and atomoxetine, but it does not report any gene variants affecting the PK or PD parameters of guanfacine. |
| popPK | Pineda_1993 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Pineda_1993 | not_relevant | 0 | 0 | The paper focuses on clonidine, cirazoline, and rilmenidine, and does not report any pharmacodynamic or exposure-response data for guanfacine. |
| PGx | Rizwan_2022 | not_relevant | 0 | 0 | The paper is a clinical review of treatments for Tourette's syndrome and mentions guanfacine, but it does not report any pharmacogenomic data (gene-drug interactions) affecting its PK or PD. |
| PGx | Schoretsanitis_2019 | not_relevant | 2 | 5 | The paper discusses drug-drug interactions (CYP3A4 inhibitors/inducers) for guanfacine but does not report pharmacogenomic effects (genetic variants) on its PK/PD. |
| PGx | Shim_2016 | not_relevant | 0 | 0 | The paper is a general review of ADHD treatment factors and mentions guanfacine only as a therapeutic option, without reporting any specific pharmacogenomic data or PK/PD parameters. |
| popPK | Tsuda_2019 | relevant | 10 | 0 | The paper is a population PK study of guanfacine in humans, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| PD | Tsuda_2019 | not_relevant | 5 | 3 | The paper reports a qualitative tendency for exposure-dependent reduction in ADHD RS-IV scores but does not present a formal quantitative PK/PD model fit or provide specific numeric PD parameters (e.g., Emx, EC50) or an effect-vs-concentration curve in the provided text. |
| popPK | Weiss_1979 | relevant | 10 | 2 | The study describes a two-compartment model for guanfacine with specific half-lives, but the primary quantitative parameters (clearance, volume) are not explicitly listed in the provided text. |
| PGx | Yakhchalian_2024 | not_relevant | 0 | 0 | The paper is a case report of serotonin syndrome and only mentions guanfacine as part of supportive treatment, with no pharmacogenomic analysis of guanfacine PK or PD parameters. |
| popPK | Yocca_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of dexmedetomidine, with guanfacine mentioned only as a comparator in in-vitro binding assays. |
| PD | Yocca_2025 | not_relevant | 3 | 2 | The paper focuses on dexmedetomidine; guanfacine is only used as a comparator in in vitro binding assays (Tables 1-2) without providing specific numeric PD parameters (EC50/Emax) in the text, and no in vivo PK/PD relationship is established for guanfacine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 06:32 UTC</sub>
