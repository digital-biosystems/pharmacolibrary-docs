<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin detemir&quot;}]"></div>

# insulin detemir

- **generic name:** insulin detemir
- **ATC codes:** `A10AE05`
- **DrugBank:** [DB01307](https://go.drugbank.com/drugs/DB01307) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Insulin detemir is a long-acting insulin used to treat diabetes, including type-1 diabetes and maturity-onset diabetes of the young type 2. It is an approved anti-diabetic medicine authorised in the European Union for diabetes mellitus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410965](https://www.wikidata.org/wiki/Q410965) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:00 | 3:21 | 0/0/0 | 0/2/1 | 0/0/1 | 127,005/3,843 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 1/5 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Warnken_2010_3_H_thymidine_incorporation](drugs/drug_insulin_detemir/pd_Warnken_2010_3_H_thymidine_incorporation.md) | [(3)H]-thymidine incorporation ← insulin detemir · direct Emax (saturable) effect | — | Warnken M et al., Characterization of proliferative effec…, Naunyn-Schmiedeberg's archi… (2010) | [10.1007/s00210-010-0561-2](https://doi.org/10.1007/s00210-010-0561-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Haahr_2016_GIR](drugs/drug_insulin_detemir/pd_Haahr_2016_GIR.md) | glucose infusion rate ← insulin degludec · indirect response — drug inhibits the production of glucose infusion rate | — | Haahr H et al., Insulin degludec/insulin aspart in Japa…, Journal of diabetes investi… (2016) | [10.1111/jdi.12461](https://doi.org/10.1111/jdi.12461) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Haahr_2016_GIR_2](drugs/drug_insulin_detemir/pd_Haahr_2016_GIR_2.md) | glucose infusion rate ← insulin aspart · indirect response — drug inhibits the production of glucose infusion rate | — | Haahr H et al., Insulin degludec/insulin aspart in Japa…, Journal of diabetes investi… (2016) | [10.1111/jdi.12461](https://doi.org/10.1111/jdi.12461) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Heise_2014_GIR](drugs/drug_insulin_detemir/pd_Heise_2014_GIR.md) | glucose infusion rate ← insulin degludec · delayed effect through an effect compartment | — | Heise T et al., Distinct Prandial and Basal Glucose-Low…, Diabetes therapy : research… (2014) | [10.1007/s13300-014-0070-2](https://doi.org/10.1007/s13300-014-0070-2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Heise_2014_GIR_2](drugs/drug_insulin_detemir/pd_Heise_2014_GIR_2.md) | glucose infusion rate ← insulin aspart · delayed effect through an effect compartment | — | Heise T et al., Distinct Prandial and Basal Glucose-Low…, Diabetes therapy : research… (2014) | [10.1007/s13300-014-0070-2](https://doi.org/10.1007/s13300-014-0070-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **COMT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bozek_2017](drugs/drug_insulin_detemir/pgx_Bozek_2017_COMT_Q100.md) | Bozek T et al., The influence of dopamine-beta-hydroxyl…, Diabetology & metabolic syn… (2017) | [10.1186/s13098-017-0295-0](https://doi.org/10.1186/s13098-017-0295-0) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_detemir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | adipose tissue | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `COMT` target | paper PGx gene |
| metabolism | kidney | `COMT` target | paper PGx gene |
| metabolism | liver | `COMT` target, `CYP1A2` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (activator), INS (modulator), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 119 matched, 53 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2019.pdf` | van Noorden B et al., A subcutaneous insulin pharmacokinetic…, Computer methods and progra… (2019) | popPK | 9 | [10.1016/j.cmpb.2019.06.007](https://doi.org/10.1016/j.cmpb.2019.06.007) | [31416537](https://pubmed.ncbi.nlm.nih.gov/31416537) | The paper describes a compartmental PK model for insulin detemir, but the specific numeric parameter values are not present in the provided evidence text. |
| `Chang_2025.pdf` | Chang YC et al., Comparing the Efficacy of Various Insul…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70010](https://doi.org/10.1002/jcph.70010) | [39982761](https://www.ncbi.nlm.nih.gov/pubmed/39982761) | metadata signals extractable PD data (PharmacodynamicModel) |

<sub>queue written 2026-10-04T21:58:39.594067+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atkin_2015 | irrelevant | 0 | 0 | The paper is a review of insulin degludec and aspart, mentioning insulin detemir only as a comparator without providing any quantitative pharmacokinetic parameters for it. |
| PD | Atkin_2015 | not_relevant | 1 | 0 | The text is a qualitative review of insulin degludec and aspart that mentions pharmacodynamic profiles but does not provide specific numeric PD parameters or exposure-response data for insulin detemir. |
| popPK | Bilz_2018 | relevant | 4 | 5 | The study reports a terminal half-life for insulin detemir (16.2 hours) derived from plasma concentration data, but lacks a full compartmental model or clearance/volume parameters. |
| popPK | Bodenlenz_2015 | irrelevant | 2 | 0 | The study reports interstitial fluid concentrations and qualitative clearance comparisons but does not provide quantitative compartmental PK parameters (CL, V, ka) for insulin detemir. |
| PD | Bodenlenz_2015 | not_relevant | 3 | 2 | The study compares tissue concentrations at matched pharmacodynamic endpoints (euglycemic clamp) to explain potency differences, but it does not report a fitted concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for insulin detemir. |
| popPK | Bott_2006 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (glucose infusion rates) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin detemir. |
| popPK | Cengiz_2012 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamics (glucose infusion rate) of insulin aspart when mixed with detemir, and does not report quantitative pharmacokinetic parameters (CL, V, ka) for detemir. |
| popPK | Chang_2025 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| popPK | Cook_2018 | irrelevant | 0 | 0 | The study is a clinical evaluation of unit equivalency and glycemic control (pharmacodynamics) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dorchy_2006 | irrelevant | 1 | 0 | The text is a qualitative review discussing clinical efficacy and safety, lacking any quantitative pharmacokinetic parameters (CL, V, ka) for insulin detemir. |
| PD | Dorchy_2006 | not_relevant | 2 | 1 | The text is a qualitative review that mentions a dose-response relationship exists but provides no numeric PD parameters, curves, or quantitative exposure-response data. |
| popPK | Ellmerer_2003 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the novel insulin analog O346 in dogs, using insulin detemir only as a comparator for which no quantitative parameter values are provided. |
| popPK | Fink_2018 | relevant | 5 | 2 | The study reports pharmacokinetic data for insulin detemir in dogs, but the evidence provided lacks specific quantitative disposition parameters (CL, V, ka) and relies on figures/tables not fully included in the text. |
| popPK | Gilor_2010 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (onset, duration, time-to-peak) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin detemir. |
| PD | Gilor_2010 | not_relevant | 3 | 2 | The study reports time-based pharmacodynamic parameters (onset, peak, duration) from a single-dose clamp study but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Glenn_2010 | irrelevant | 0 | 0 | The study assesses assay cross-reactivity (analytical performance) rather than pharmacokinetic disposition parameters. |
| PD | Glenn_2010 | not_relevant | 0 | 0 | The paper reports assay cross-reactivity percentages for insulin preparations, not a pharmacodynamic exposure-response or dose-response relationship for the drug's biological effect. |
| popPK | Guerci_2005 | irrelevant | 2 | 0 | The paper is a review discussing insulin analogs including detemir, but it does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for insulin_detemir. |
| PD | Guerci_2005 | not_relevant | 2 | 0 | The text is a review discussing the general pharmacokinetic and pharmacodynamic characteristics of insulin analogs, including detemir, but does not report specific numeric PD parameters or extractable exposure-response data. |
| popPK | Haahr_2016 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of insulin degludec/insulin aspart (IDegAsp) and insulin detemir is only mentioned as a washout/replacement insulin, not as the subject drug. |
| popPK | Heise_2014 | irrelevant | 0 | 0 | The study investigates insulin degludec/aspart (IDegAsp), not insulin detemir, which is only mentioned in the introduction as a comparator with unsuitable co-formulation properties. |
| popPK | Hemmingsen_2021 | irrelevant | 0 | 0 | This is a clinical systematic review focusing on efficacy and safety outcomes (HbA1c, hypoglycemia) rather than pharmacokinetic parameters. |
| PD | Hemmingsen_2021 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical outcomes (HbA1c, hypoglycemia) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Henao-Carrillo_2018 | irrelevant | 0 | 0 | The study is a clinical trial assessing glycemic variability and hypoglycemia with insulin degludec, where insulin detemir is only a comparator, and no pharmacokinetic parameters are reported. |
| PD | Henao-Carrillo_2018 | not_relevant | 0 | 0 | The paper is a clinical trial assessing the effect of insulin degludec on glycemic variability and hypoglycemia, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for insulin detemir or any other drug. |
| popPK | Hompesch_2014 | irrelevant | 1 | 0 | The study focuses on insulin degludec as the subject drug, with insulin detemir serving only as a comparator, and no specific quantitative PK parameters for detemir are reported in the evidence. |
| PD | Hompesch_2014 | not_relevant | 0 | 0 | The paper investigates insulin degludec (IDeg) and compares it to insulin detemir, but it does not report a pharmacodynamic (exposure- or dose-response) model or numeric PD parameters (e.g., Emax, EC50) for insulin detemir; it only reports mean glucose-lowering effect (AUCGIR) values for a fixed dose. |
| popPK | Ikushima_2016 | irrelevant | 0 | 0 | The study focuses on insulin degludec (IDeg) as the subject drug, with insulin detemir serving only as a comparator for which no quantitative PK parameters are reported. |
| popPK | Jhee_2004 | relevant | 8 | 2 | The study is a PK comparison of insulin detemir, but the provided text only describes the study design and qualitative results (linear dose-response) without listing specific numeric PK parameters like clearance, volume, or half-life. |
| PD | Jhee_2004 | not_relevant | 2 | 1 | The paper reports a linear dose-response relationship for pharmacokinetic exposure (AUC), not a pharmacodynamic (concentration-effect) relationship, and provides no numeric PD parameters. |
| popPK | Kildemoes_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of somapacitan (a growth hormone analog), not insulin_detemir. |
| PD | Kildemoes_2023 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for somapacitan (a growth hormone derivative), not insulin detemir; insulin detemir is only mentioned in the introduction as an example of albumin-binding technology. |
| popPK | Kiss_2014 | irrelevant | 0 | 0 | The study investigates insulin degludec, not insulin detemir. |
| PD | Kiss_2014 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, CL/F) for insulin degludec in renal impairment but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters. |
| popPK | Koehler_2014 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (duration of action, AUCGIR) rather than pharmacokinetic disposition parameters (CL, V, ka) for insulin detemir. |
| popPK | Kulozik_2013 | irrelevant | 1 | 0 | The study reports clinical insulin dosage requirements relative to renal function, not quantitative pharmacokinetic parameters (CL, V, ka, etc.) for insulin_detemir. |
| PD | Kulozik_2013 | not_relevant | 2 | 1 | The study reports observational dose adjustments based on eGFR categories (dose-response to renal function) but does not provide concentration-effect data, PK/PD modeling, or standard PD parameters (Emax, EC50) for insulin detemir. |
| popPK | Kurtzhals_2007 | irrelevant | 1 | 0 | The paper is a review of the pharmacology and pharmacodynamics of insulin detemir without reporting original quantitative pharmacokinetic parameters. |
| PD | Kurtzhals_2007 | not_relevant | 2 | 0 | The text is a qualitative review of the pharmacology and properties of insulin detemir and does not report specific numeric PD parameters or exposure-response data. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes/CKD, not a pharmacokinetic study reporting disposition parameters for insulin_detemir. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for insulin detemir. |
| popPK | Lucidi_2011 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (GIR, EGP) and qualitative PK comparisons, but does not provide quantitative compartmental PK parameters (CL, V, ka) for insulin_detemir in the provided text. |
| popPK | Luzio_2013 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (GIR, C-peptide) rather than pharmacokinetic disposition parameters (CL, V, ka) for insulin detemir. |
| popPK | Mannucci_2015 | irrelevant | 1 | 0 | The paper is a review of cardiovascular safety and clinical trial outcomes, not a pharmacokinetic study, and it lacks quantitative disposition parameters (CL, V, ka) for insulin_detemir. |
| PD | Mannucci_2015 | not_relevant | 2 | 0 | The paper is a narrative review discussing cardiovascular safety and general pharmacokinetic profiles (onset, peak, duration) of basal insulins, but it does not report any specific exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for insulin detemir. |
| popPK | Mathiesen_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial comparing insulin degludec and detemir, reporting HbA1c outcomes rather than quantitative pharmacokinetic parameters like clearance or volume. |
| PD | Mathiesen_2023 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and safety outcomes (HbA1c) and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| popPK | Mehta_2021 | irrelevant | 0 | 0 | The paper is a narrative review providing clinical dosing and titration guidance, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Mehta_2021 | not_relevant | 1 | 0 | The paper is a narrative review providing clinical guidance on insulin initiation and titration; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters. |
| popPK | Morrow_2011 | irrelevant | 2 | 1 | The study is a bioequivalence interaction trial reporting only AUC and Cmax ratios, lacking compartmental PK parameters (CL, V, ka) or absolute numeric values for insulin detemir. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not contain pharmacokinetic data for insulin_detemir. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a review on DPP-4 inhibitors in cancer and does not report any pharmacodynamic or exposure-response data for insulin detemir. |
| popPK | Petri_2015 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of liraglutide, not insulin_detemir. |
| PD | Petri_2015 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of liraglutide, not insulin detemir, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Plum-Mörschel_2023 | irrelevant | 0 | 0 | The study investigates insulin icodec, not insulin detemir. |
| PD | Plum-Mörschel_2023 | not_relevant | 2 | 1 | The paper reports PK parameters and a single-point PD metric (glucose clamp AUC) for insulin icodec, but does not provide an exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for insulin detemir or any other drug. |
| popPK | Poon_2010 | irrelevant | 2 | 1 | The paper is a review article that summarizes pharmacokinetic and pharmacodynamic properties of insulin detemir but does not report original quantitative population PK parameters (CL, V, Q, ka) or compartmental model estimates for the drug. |
| PD | Poon_2010 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively summarizes PK/PD properties (e.g., duration of action, flatter profile) but does not provide specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for insulin detemir. |
| popPK | Porcellati_2007 | irrelevant | 2 | 0 | The study reports pharmacodynamic endpoints (glucose, GIR, FFA) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin_detemir. |
| popPK | Rendell_2013 | irrelevant | 1 | 0 | The paper is a review of insulin degludec, mentioning insulin detemir only as a structural comparator without providing specific quantitative PK parameters for detemir. |
| PD | Rendell_2013 | not_relevant | 1 | 0 | The text is a qualitative review of insulin degludec that mentions insulin detemir only for structural comparison and provides no numeric PD parameters or exposure-response data. |
| popPK | Roach_2008 | irrelevant | 1 | 0 | The paper is a narrative review discussing clinical considerations and general pharmacodynamic profiles without reporting specific quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for insulin detemir. |
| PD | Roach_2008 | not_relevant | 1 | 0 | The text is a qualitative review summarizing clinical characteristics and relative efficacy of insulin analogues without providing specific numeric PD parameters or concentration-effect curves for insulin detemir. |
| popPK | Sciacca_2012 | irrelevant | 0 | 0 | The paper is a review on the oncogenic potential of insulin analogs and reports in-vitro receptor binding affinities (EC50), not quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin_detemir. |
| PD | Sciacca_2012 | not_relevant | 2 | 0 | The paper is a review article discussing the molecular mechanisms and cancer risk of insulin analogs, but it does not report any original pharmacokinetic or pharmacodynamic data, nor does it provide numeric PD parameters (e.g., Emax, EC50) for insulin detemir. |
| popPK | Sebastian_2023 | irrelevant | 1 | 0 | The paper is a review article discussing insulin analogs generally and does not report original quantitative pharmacokinetic parameters for insulin_detemir. |
| PD | Sebastian_2023 | not_relevant | 1 | 0 | The text is a general review of insulin analogs and does not report specific numeric PD parameters or exposure-response data for insulin detemir. |
| popPK | Sokolov_2023 | relevant | 8 | 2 | The paper develops a one-compartment PK model for insulin detemir in humans, but the specific numeric parameter values are located in Table S1 (supplementary material) which is not provided in the evidence. |
| PD | Sokolov_2023 | not_relevant | 0 | 0 | The paper focuses on a mechanistic model for dapagliflozin in T1DM; while it includes PK models for insulin detemir, it does not report a pharmacodynamic (exposure-response) relationship or numeric PD parameters for detemir itself. |
| popPK | Sävendahl_2020 | irrelevant | 0 | 0 | The study evaluates the efficacy of somapacitan (a growth hormone derivative) in children and does not report pharmacokinetic parameters for insulin_detemir. |
| PD | Sävendahl_2020 | not_relevant | 0 | 0 | The paper reports clinical efficacy (height velocity) for somapacitan, not insulin detemir, and does not provide a pharmacodynamic model or exposure-response analysis for the target drug. |
| popPK | Sørensen_2010 | irrelevant | 1 | 0 | The study focuses on receptor binding and metabolic efficacy (dose-response) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Warnken_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of proliferative effects and receptor signaling, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper studies albumin-binding macrocyclic peptides and apelin-17 analogues, not insulin_detemir. |
| PD | Wong_2023 | not_relevant | 0 | 0 | The paper reports the discovery of albumin-binding macrocyclic peptides and their PK half-life, but does not contain any pharmacodynamic (PD) or exposure-response analysis for insulin detemir or any other drug. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a narrative review of real-world evidence regarding adherence and cost-effectiveness, containing no pharmacokinetic parameters or quantitative disposition data for insulin_detemir. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a narrative review on real-world evidence, adherence, and cost-effectiveness of insulin and biosimilars, containing no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | van_2019 | relevant | 9 | 2 | The paper describes a compartmental PK model for insulin detemir, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
