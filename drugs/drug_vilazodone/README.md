<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vilazodone&quot;}]"></div>

# vilazodone

- **generic name:** vilazodone
- **ATC codes:** `N06AX24`
- **DrugBank:** [DB06684](https://go.drugbank.com/drugs/DB06684)
- **groups:** approved, investigational

## About

**Description.** Vilazodone is a novel compound with combined high affinity and selectivity for the 5-hydroxytryptamine (5-HT) transporter and 5-HT(1A) receptors[Label,A177622]. Vilazodone may also be associated with less sexual dysfunction and weight gain[A6947]. Vilazodone was given FDA approval on January 21, 2011[L6046,A177622].

**Indication.** Vilazodone is approved for treatment of major depressive disorder.[Label,A38477,A177622]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 21:22 | 15:25 | 0/0/0 | 0/0/0 | 0/0/5 | 84,098/5,194 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2B6** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_vilazodone/pgx_Bousman_2023_CYP2B6_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_vilazodone/pgx_Bousman_2023_CYP2C19_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_vilazodone/pgx_Bousman_2023_CYP2D6_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **HTR2A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bousman_2023](drugs/drug_vilazodone/pgx_Bousman_2023_HTR2A_Q100.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **SLC6A4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bousman_2023](drugs/drug_vilazodone/pgx_Bousman_2023_SLC6A4_Q100.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vilazodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` metabolism, `CYP2C19` metabolism/substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…the urine and 2% of the dose is recovered unchanged in the feces[Label,A38477,A177628].…”</sub> | prose |
| excretion | kidney | <sub>“…1% of the dose is recovered unchanged in the urine and 2% of the dose is recovered unchang…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor/target | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor/target | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (target), HTR2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bundgaard_2016.pdf` | Bundgaard C et al., P-glycoprotein differentially affects e…, Neuropharmacology (2016) | pd | 5 | [10.1016/j.neuropharm.2015.12.009](https://doi.org/10.1016/j.neuropharm.2015.12.009) | [26700248](https://www.ncbi.nlm.nih.gov/pubmed/26700248) | metadata signals extractable PD data (EC50) |
| `Edwards_2013.pdf` | Edwards J et al., Vilazodone lacks proarrhythmogenic pote…, International journal of cl… (2013) | pd | 5 | [10.5414/CP201826](https://doi.org/10.5414/CP201826) | [23611569](https://www.ncbi.nlm.nih.gov/pubmed/23611569) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Jiménez_2023.pdf` | Jiménez EM et al., Drug Repurposing to Inhibit Histamine N…, Molecules (Basel, Switzerla… (2023) | pd | 4 | [10.3390/molecules28020576](https://doi.org/10.3390/molecules28020576) | [36677633](https://www.ncbi.nlm.nih.gov/pubmed/36677633) | metadata signals extractable PD data (IC50) |
| `Ali_2026.pdf` | Ali A et al., Unraveling Protracted Neuropsychiatric…, Case reports in psychiatry (2026) | pgx | 8 | [10.1155/crps/8340699](https://doi.org/10.1155/crps/8340699) | [42306637](https://www.ncbi.nlm.nih.gov/pubmed/42306637) | metadata signals extractable PGX data (SLC6A4, PK/PD-context) |

<sub>queue written 2026-09-24T21:19:41.490730+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_2026 | not_relevant | 0 | 0 | The paper is a case report of serotonin toxicity and FND; it mentions vilazodone only in the context of adverse events (parasomnias) without reporting any pharmacogenomic effect on PK or PD parameters. |
| popPK | Bousman_2023 | irrelevant | 1 | 0 | This is a pharmacogenetics guideline (CPIC) focusing on genotype-based dosing recommendations rather than a study reporting quantitative pharmacokinetic parameters (CL, V, etc.) for vilazodone. |
| PD | Bousman_2023 | not_relevant | 1 | 0 | The paper is a clinical pharmacogenetics guideline (CPIC) focusing on genotype-based dosing recommendations and does not report primary pharmacodynamic modeling or numeric exposure-response parameters for vilazodone. |
| PGx | Bousman_2023 | not_relevant | 5 | 5 | The paper is a clinical guideline summarizing existing evidence rather than reporting new primary data on pharmacokinetic or pharmacodynamic parameters for vilazodone. |
| popPK | Bundgaard_2016 | irrelevant | 2 | 0 | The study is an animal mechanistic investigation of P-gp transport at the blood-brain barrier, reporting exposure ratios and Kp,uu values rather than standard quantitative population pharmacokinetic parameters (CL, V, ka) for vilazodone. |
| PD | Bundgaard_2016 | not_relevant | 0 | 0 | The paper focuses on P-glycoprotein transport kinetics at the blood-brain barrier, not on pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Cantwell_2026 | irrelevant | 0 | 0 | The paper describes a GlyT2 inhibitor (RPI-GLYT2-82) and does not involve vilazodone or report any pharmacokinetic parameters for it. |
| popPK | Cheng_2020 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of antidepressant efficacy and safety, not a pharmacokinetic study, and contains no PK parameters for vilazodone. |
| PD | Cheng_2020 | not_relevant | 2 | 1 | The paper is a meta-analysis that explicitly states no significant dose-response relationship was observed for the antidepressants, and it does not provide specific numeric PD parameters (like Emax or EC50) for vilazodone. |
| popPK | Citrome_2016_2 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability comparison (NNT/NNH) and does not report any pharmacokinetic parameters for vilazodone. |
| PD | Citrome_2016_2 | not_relevant | 0 | 0 | The paper is an indirect comparison of clinical trial outcomes (NNT/NNH) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for vilazodone. |
| popPK | Cohen_2022 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats assessing the anti-dyskinetic effects of vilazodone, with no pharmacokinetic parameters or disposition data reported. |
| popPK | Croft_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for major depressive disorder and does not report any pharmacokinetic parameters for vilazodone. |
| popPK | Durgam_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for generalized anxiety disorder and does not report any pharmacokinetic parameters for vilazodone. |
| popPK | Edwards_2013 | irrelevant | 2 | 0 | The study is a thorough QT/ECG safety assessment, not a PK study, and no quantitative disposition parameters (CL, V, ka, etc.) for vilazodone are reported in the provided text. |
| PGx | El-Kasaby_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of trazodone and nefazodone on the serotonin transporter and does not report pharmacogenomic effects on the PK or PD of vilazodone. |
| popPK | Gommoll_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for generalized anxiety disorder and does not report any pharmacokinetic parameters or disposition data for vilazodone. |
| popPK | Guay_2012_2 | irrelevant | 2 | 0 | The paper is a narrative review of vilazodone that summarizes general pharmacokinetic properties (e.g., metabolism, food effect) but does not report specific quantitative disposition parameters (CL, V, ka) in the provided text. |
| PD | Guay_2012_2 | not_relevant | 2 | 1 | The paper is a general review of vilazodone's chemistry, PK, and clinical efficacy, lacking specific numeric PD parameters or detailed exposure-response modeling. |
| popPK | Heinrich_2004 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study reporting in vitro receptor binding affinities, not pharmacokinetic disposition parameters. |
| PD | Heinrich_2004 | not_relevant | 1 | 2 | The paper reports in vitro binding affinities (IC50) and functional potency (ED50) for receptor interactions, which are pharmacological parameters, but it does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., effect vs. plasma concentration or dose) for the drug in a biological system. |
| popPK | Italiano_2014_2 | irrelevant | 0 | 0 | The paper is a review article discussing drug interactions and does not report original quantitative pharmacokinetic parameters for vilazodone. |
| PD | Italiano_2014_2 | not_relevant | 1 | 0 | The paper is a review of PK/PD interactions that explicitly states the absence of PD DI studies and provides no numeric PD parameters or concentration-effect data for vilazodone. |
| popPK | Jiménez_2023 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Jiménez_2023 | not_relevant | 0 | 0 | The paper focuses on drug repurposing for histamine N-methyl transferase inhibition and does not report pharmacodynamic or exposure-response data for vilazodone. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper describes the design and in vitro/in vivo biological evaluation of novel hybrid compounds, not the pharmacokinetic disposition of vilazodone itself. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel vilazodone-tacrine hybrids and reports in-vitro pharmacological activities, not pharmacokinetic parameters for vilazodone. |
| PD | Liu_2018 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological potency (EC50/IC50) for novel vilazodone-tacrine hybrids, not a pharmacodynamic or exposure-response relationship for the drug vilazodone itself. |
| popPK | Mandrioli_2012 | irrelevant | 1 | 0 | The paper is a review article describing general properties of SSRIs including vilazodone, but it does not report original quantitative pharmacokinetic parameter values for vilazodone. |
| PD | Mandrioli_2012 | not_relevant | 1 | 0 | The text is a review abstract describing general properties and TDM for SSRIs, including vilazodone, but does not report specific numeric PD parameters or exposure-response relationships. |
| popPK | Mandrioli_2018 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetics and TDM for various antidepressants, and the provided evidence contains no original quantitative PK parameter values for vilazodone. |
| PD | Mandrioli_2018 | not_relevant | 2 | 1 | The paper is a review focusing on therapeutic drug monitoring, pharmacokinetics, and medicinal chemistry, lacking specific numeric pharmacodynamic or exposure-response modeling for vilazodone. |
| popPK | McKean_2015_2 | irrelevant | 0 | 0 | The paper is a case report regarding adverse events (seizures) and contains no pharmacokinetic parameters or quantitative disposition data for vilazodone. |
| PD | McKean_2015_2 | not_relevant | 1 | 0 | The paper is a single case report describing an adverse event (seizures) without providing any concentration-effect data, dose-response curves, or numeric pharmacodynamic parameters. |
| popPK | Park_2014_2 | irrelevant | 0 | 0 | The paper is a review of case reports regarding serotonin syndrome and does not report any quantitative pharmacokinetic parameters for vilazodone. |
| PD | Park_2014_2 | not_relevant | 0 | 0 | The paper is a qualitative review of case reports regarding serotonin syndrome risk and does not contain any quantitative pharmacodynamic or exposure-response modeling for vilazodone. |
| PGx | Park_2014_2 | not_relevant | 0 | 0 | The paper is a review of case reports regarding serotonin syndrome risk with tramadol and antidepressants, not a study on pharmacogenomic effects on vilazodone PK/PD. |
| PGx | Rickels_2009 | not_relevant | 0 | 0 | The text is an abstract or introduction that mentions the existence of pharmacogenetic data but does not report specific gene variants or their effects on PK/PD parameters. |
| popPK | Schwartz_2011_2 | irrelevant | 0 | 0 | The paper is a pharmacological and clinical review focusing on mechanism of action and efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Schwartz_2011_2 | not_relevant | 1 | 0 | The paper is a qualitative pharmacological and clinical review that describes the mechanism of action but does not report any numeric PD parameters, exposure-response curves, or dose-effect data. |
| popPK | Singh_2012 | irrelevant | 0 | 0 | The paper is a narrative review of clinical utility and mechanism of action, containing no original quantitative pharmacokinetic parameters for vilazodone. |
| PD | Singh_2012 | not_relevant | 1 | 0 | The paper is a narrative review discussing the mechanism of action and clinical utility of vilazodone without presenting any original pharmacokinetic or pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Spina_2012 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for vilazodone. |
| PD | Spina_2012 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and does not report any numeric pharmacodynamic parameters or exposure-response relationships for vilazodone. |
| popPK | Stuivenga_2019_2 | irrelevant | 3 | 4 | The paper is a clinical review that reports general PK parameters (Vd, t1/2, bioavailability) but lacks the specific quantitative disposition parameters (CL, Q, ka) or population-PK model estimates required for extraction. |
| PD | Stuivenga_2019_2 | not_relevant | 2 | 0 | The paper is a narrative review discussing the clinical utility and general pharmacodynamics of vilazodone, but it does not present original data, specific numeric PD parameters (e.g., EC50, Emax), or extractable concentration-effect curves. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The study focuses on the mechanisms of a traditional Chinese medicine decoction (Ganmai Dazao) and does not involve vilazodone or report any pharmacokinetic parameters. |
| PD | Wei_2025 | not_relevant | 0 | 0 | The paper studies Ganmai Dazao Decoction, not vilazodone, and does not report any exposure-response or dose-response PD parameters for vilazodone. |
| popPK | Wen_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of gastrointestinal adverse effects (safety) and does not report any pharmacokinetic parameters for vilazodone. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel dual inhibitors where vilazodone is only used as a pharmacophore reference, and no PK parameters for vilazodone are reported. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel dual RAGE/SERT inhibitors and reports in vitro IC50 values for these new compounds, but does not report any pharmacodynamic or exposure-response analysis for vilazodone itself. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding vilazodone or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
