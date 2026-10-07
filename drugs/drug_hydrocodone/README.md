<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;hydrocodone&quot;}]"></div>

# hydrocodone

- **generic name:** hydrocodone
- **ATC codes:** `N02AJ22`, `N02AJ23`, `R05DA03`
- **DrugBank:** [DB00956](https://go.drugbank.com/drugs/DB00956) · **PubChem:** [CID 5284569](https://pubchem.ncbi.nlm.nih.gov/compound/5284569)
- **molar mass:** 299.3642 g/mol (C18H21NO3) — DrugBank
- **groups:** approved, illicit, investigational

## About

Hydrocodone is an opioid used to treat pain and to suppress cough. It is an approved medicine, typically given in combination with non-opioid painkillers, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411441](https://www.wikidata.org/wiki/Q411441) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydrocodone | parent | 299.364 | C18H21NO3 | DrugBank | [5284569](https://pubchem.ncbi.nlm.nih.gov/compound/5284569) | Melhem_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:06 | 1:11 | 0/1/0 | 0/0/0 | 0/0/4 | 107,882/6,204 | einfracz / qwen3.8-27b | 20 | 2/7 | 12/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Melhem_2013_reference](drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference.md) | — | 1-compartment (no model) | 0 | Melhem MR et al., Population pharmacokinetic analysis for…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0081-6](https://doi.org/10.1007/s40262-013-0081-6) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Armstrong_2025](drugs/drug_hydrocodone/pgx_Armstrong_2025_CYP2D6_Q100.md) | Armstrong SJ et al., Precision medicine for Defence?, BMJ military health (2025) | [10.1136/military-2024-002721](https://doi.org/10.1136/military-2024-002721) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **COMT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Crews_2021](drugs/drug_hydrocodone/pgx_Crews_2021_COMT_Q100.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | formation | [Crews_2021](drugs/drug_hydrocodone/pgx_Crews_2021_CYP2D6_Q27.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **OPRM1** | `Q38` · E | target | [Crews_2021](drugs/drug_hydrocodone/pgx_Crews_2021_OPRM1_Q38.md) | Crews KR et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2149](https://doi.org/10.1002/cpt.2149) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydrocodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `COMT` metabolism, `CYP2D6` formation/substrate | DrugBank actor |
| metabolism | kidney | `COMT` metabolism | paper PGx gene |
| metabolism | liver | `COMT` metabolism, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2D6` formation/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRM1 (target), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 186 matched, 69 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bond_2017.pdf` | Bond M et al., Effect of Food on the Pharmacokinetics…, Clinical drug investigation (2017) | popPK | 8 | [10.1007/s40261-017-0575-3](https://doi.org/10.1007/s40261-017-0575-3) | [28948482](https://pubmed.ncbi.nlm.nih.gov/28948482) | The study reports population PK modeling for hydrocodone, but the specific numeric parameter values (CL, V, Q, ka) are not listed in the provided text, only summary ratios (Cmax, AUC) and model predictions. |
| `Graziani_2016.pdf` | Graziani M et al., Gender difference in prescription opioi…, Pharmacological research (2016) | pgx | 8 | [10.1016/j.phrs.2016.04.012](https://doi.org/10.1016/j.phrs.2016.04.012) | [27107788](https://www.ncbi.nlm.nih.gov/pubmed/27107788) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Linares_2015.pdf` | Linares OA et al., Individualized Hydrocodone Therapy Base…, The Clinical journal of pain (2015) | pgx | 8 | [10.1097/AJP.0000000000000214](https://doi.org/10.1097/AJP.0000000000000214) | [25621429](https://www.ncbi.nlm.nih.gov/pubmed/25621429) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nahid_2025.pdf` | Nahid NA et al., CYP2D6 Phenotypes and Emergency Departm…, JAMA network open (2025) | pgx | 8 | [10.1001/jamanetworkopen.2025.23543](https://doi.org/10.1001/jamanetworkopen.2025.23543) | [40720122](https://www.ncbi.nlm.nih.gov/pubmed/40720122) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nahid_2026.pdf` | Nahid NA et al., Hydrocodone vs Oxycodone and Postoperat…, JAMA network open (2026) | pgx | 8 | [10.1001/jamanetworkopen.2026.23079](https://doi.org/10.1001/jamanetworkopen.2026.23079) | [42446879](https://www.ncbi.nlm.nih.gov/pubmed/42446879) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Otton_1993.pdf` | Otton SV et al., CYP2D6 phenotype determines the metabol…, Clinical pharmacology and t… (1993) | pgx | 8 | [10.1038/clpt.1993.177](https://doi.org/10.1038/clpt.1993.177) | [7693389](https://www.ncbi.nlm.nih.gov/pubmed/7693389) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Reizine_2021.pdf` | Reizine N et al., Impact of CYP2D6 Pharmacogenomic Status…, The oncologist (2021) | pgx | 8 | [10.1002/onco.13953](https://doi.org/10.1002/onco.13953) | [34423496](https://www.ncbi.nlm.nih.gov/pubmed/34423496) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Stauble_2014.pdf` | Stauble ME et al., Hydrocodone in postoperative personaliz…, Clinica chimica acta; inter… (2014) | pgx | 8 | [10.1016/j.cca.2013.11.015](https://doi.org/10.1016/j.cca.2013.11.015) | [24269714](https://www.ncbi.nlm.nih.gov/pubmed/24269714) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Overholser_2011.pdf` | Overholser BR et al., Opioid pharmacokinetic drug-drug intera…, The American journal of man… (2011) | pgx | 7 | not captured | [21999760](https://www.ncbi.nlm.nih.gov/pubmed/21999760) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Cavallari_2026.pdf` | Cavallari LH et al., CYP2D6-Guided Opioid Management and Pos…, JAMA network open (2026) | pgx | 5 | [10.1001/jamanetworkopen.2025.58299](https://doi.org/10.1001/jamanetworkopen.2025.58299) | [41719044](https://www.ncbi.nlm.nih.gov/pubmed/41719044) | metadata signals extractable PGX data (CYP2D6) |
| `Grimsrud_2022.pdf` | Grimsrud KN et al., Pharmacogenetic Gene-Drug Associations…, Journal of burn care & rese… (2022) | pgx | 5 | [10.1093/jbcr/irac062](https://doi.org/10.1093/jbcr/irac062) | [35639664](https://www.ncbi.nlm.nih.gov/pubmed/35639664) | metadata signals extractable PGX data (CYP2C9) |
| `Patel_2021.pdf` | Patel JN et al., Potentially actionable pharmacogenetic…, Supportive care in cancer :… (2021) | pgx | 5 | [10.1007/s00520-021-06170-4](https://doi.org/10.1007/s00520-021-06170-4) | [33758969](https://www.ncbi.nlm.nih.gov/pubmed/33758969) | metadata signals extractable PGX data (CYP2B6) |
| `Stamer_2010.pdf` | Stamer UM et al., Personalized therapy in pain management…, Pharmacogenomics (2010) | pgx | 5 | [10.2217/pgs.10.47](https://doi.org/10.2217/pgs.10.47) | [20504256](https://www.ncbi.nlm.nih.gov/pubmed/20504256) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T05:05:37.003275+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al_2026 | not_relevant | 0 | 0 | The paper evaluates the acceptance of pharmacogenomic recommendations (concordance of prescriptions) and does not report any changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Armstrong_2025 | not_relevant | 7 | 0 | The text is a review/position paper describing the general pharmacogenomic mechanism of CYP2D6 on hydrocodone but does not report specific quantitative PK/PD parameter data or effect sizes. |
| PD | Bea_2025 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological cohort study using claims data to assess comparative overdose risk; it does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| PD | Bell_2015 | not_relevant | 1 | 0 | The paper is a review of pharmacogenomic associations with opioid response and does not report any concentration-effect or dose-response PD models or numeric PD parameters for hydrocodone. |
| PGx | Bell_2015 | not_relevant | 2 | 1 | The text only mentions hydrocodone in passing when listing CYP2D6 substrates, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Bond_2017 | relevant | 8 | 2 | The study reports population PK modeling for hydrocodone, but the specific numeric parameter values (CL, V, Q, ka) are not listed in the provided text, only summary ratios (Cmax, AUC) and model predictions. |
| PGx | Cavallari_2026 | not_relevant | 1 | 0 | The paper is a clinical trial on prescribing behavior and pain outcomes, not a study characterizing the pharmacokinetic or pharmacodynamic parameters of hydrocodone itself. |
| PGx | Chanfreau-Coffinier_2022 | not_relevant | 0 | 0 | The paper describes an epidemiological analysis of prescription patterns and prevalence of CYP2D6 phenotypes/interactions, but does not report specific PK or PD parameter changes resulting from these genetic variants. |
| PD | Coates_2023 | not_relevant | 2 | 0 | The paper is a minireview of drug-drug interactions and metabolism; it does not report original pharmacodynamic data or numeric PD parameters (e.g., Emax, EC50) for hydrocodone. |
| PGx | Crews_2021 | not_relevant | 5 | 2 | While the paper discusses CYP2D6 effects on hydrocodone, it states the data is limited/weak and provides specific PK/PD effect sizes only for codeine and tramadol. |
| PGx | Cua_2025 | not_relevant | 1 | 0 | The paper focuses on drug-drug interactions affecting metabolic ratios rather than the effects of specific gene variants or genotypes on pharmacokinetic parameters. |
| PGx | DePriest_2015 | not_relevant | 3 | 2 | The text is a general review stating that CYP2D6 polymorphisms affect opioids and testing has been investigated, but it does not report specific quantitative pharmacokinetic or pharmacodynamic changes for hydrocodone. |
| popPK | Devarakonda_2015 | irrelevant | 0 | 0 | The study reports subjective drug effects (abuse potential) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Graziani_2016 | not_relevant | 3 | 2 | The paper is a qualitative review focusing on gender differences rather than specific pharmacogenomic effects of gene variants on hydrocodone PK/PD parameters. |
| PGx | Grimsrud_2022 | not_relevant | 1 | 0 | The paper identifies patients with CYP2D6 variants who took hydrocodone but does not report any pharmacokinetic or pharmacodynamic data, nor does it quantify the effect of the genotype on the drug's parameters. |
| popPK | Guenther_2018 | irrelevant | 3 | 0 | The study focuses on bioavailability and abuse potential (Cmax, AUC comparisons) rather than reporting specific pharmacokinetic disposition parameters (CL, V, ka, or compartmental models). |
| PD | Guenther_2018 | not_relevant | 2 | 1 | The study reports PK parameters and PD endpoint means (Drug Liking VAS) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable exposure-response curve. |
| PGx | Hendrickson_2012 | not_relevant | 0 | 0 | The paper is a review of opioid transfer into breast milk and does not report specific pharmacogenomic effect sizes or quantitative data on how CYP2D6 genotypes alter hydrocodone PK parameters. |
| PGx | Kleine-Brueggeney_2010 | not_relevant | 2 | 0 | The text is a general review mentioning hydrocodone as a substrate of CYP2D6 but provides no specific pharmacokinetic or pharmacodynamic data or effect sizes. |
| PD | Manca_2023 | not_relevant | 0 | 0 | The paper describes a UHPLC-MS/MS analytical method for quantifying opioids in tissues and reports concentration data, but it does not model or report any pharmacodynamic (exposure-response or dose-response) relationships or PD parameters. |
| PD | Manchikanti_2015 | not_relevant | 2 | 1 | The paper is a narrative review discussing the history, regulation, and general pharmacology of hydrocodone, but it does not present original data or specific numeric PD parameters (e.g., EC50, Emax) for an exposure-response relationship. |
| PGx | Meyer_2011 | not_relevant | 4 | 2 | The paper is a broad review of pharmacogenomics for various drugs of abuse, including hydrocodone, but lacks specific, quantitative PK/PD effect sizes for hydrocodone genotypes in the provided abstract. |
| PGx | Michaud_2021 | not_relevant | 2 | 0 | The study focuses on healthcare costs and medication risk scores associated with CYP2D6 drug-drug interactions, not the effect of specific genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PD | Mickle_2018 | not_relevant | 3 | 2 | The study compares PK and PD (Drug Liking) between two formulations but does not model the relationship between hydrocodone concentration and effect (no Emax/EC50 or concentration-effect curve), only reporting group-level differences in exposure and subjective scores. |
| PGx | Mikus_1991 | not_relevant | 2 | 0 | The paper discusses the general polymorphic metabolism of opioids but only hypothesizes that hydrocodone metabolism *might* be under genetic control; it does not report any actual pharmacokinetic or pharmacodynamic data for hydrocodone. |
| PGx | Monte_2014 | not_relevant | 0 | 0 | The study investigates CYP2D6 drug-drug interactions rather than the effect of a genetic variant (genotype) on pharmacokinetics or pharmacodynamics. |
| PGx | Nahid_2025 | not_relevant | 5 | 7 | The study measures a clinical outcome (emergency department visits) rather than a direct pharmacokinetic or pharmacodynamic parameter (such as AUC, Cmax, or measured pain scores). |
| PGx | Nahid_2026 | not_relevant | 0 | 0 | The study compares hydrocodone and oxycodone within a specific CYP2D6 genotype group (Normal Metabolizers) but does not report a pharmacogenomic effect (i.e., it does not compare outcomes across different genotypes to show how a variant changes PK/PD). |
| PGx | Nimmagadda_2020 | not_relevant | 0 | 0 | The paper reports on the prevalence of drug-drug interactions (CYP inhibitors/inducers) rather than the effect of a specific genetic variant (pharmacogenomics) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Overholser_2011 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions, not pharmacogenomic (gene variant) effects on hydrocodone PK. |
| PGx | Patel_2021 | not_relevant | 0 | 0 | The paper reports the prevalence of patients prescribed CYP2D6 substrates like hydrocodone and estimates the population frequency of variants, but does not measure or report specific changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Peiró_2018_2 | not_relevant | 0 | 0 | The text is a general review of pharmacogenetics in pain management and mentions CYP2D6's role in hydrocodone metabolism in the context of general principles, but it does not report specific data, effect sizes, or study results linking a genotype to a PK/PD parameter. |
| PGx | Reizine_2021 | not_relevant | 2 | 5 | Reports clinical outcomes (hospitalizations, opioid count) for a cohort including hydrocodone, but does not report specific PK/PD parameters (e.g., AUC, Cmax, analgesic efficacy score) for hydrocodone itself. |
| popPK | Rivas_2021 | irrelevant | 0 | 0 | The paper describes a compartmental model of opioid abuse and addiction probabilities, not the pharmacokinetics of hydrocodone. |
| popPK | Schoedel_2019_2 | irrelevant | 2 | 0 | The paper reports only correlation coefficients between PK and PD parameters for an abuse potential study, without providing specific numeric values for clearance, volume, or half-life. |
| PD | Singla_2013 | not_relevant | 2 | 1 | The paper is a review summarizing general knowledge and does not report a specific new PD model or extractable numeric PD parameters for hydrocodone. |
| PGx | Smith_2025 | not_relevant | 2 | 0 | The paper reports clinical outcomes (pain intensity) and implementation metrics, not direct pharmacokinetic or pharmacodynamic parameters like Cmax, AUC, or receptor affinity changes. |
| PGx | Stamer_2010 | not_relevant | 1 | 0 | This is a general review of pain pharmacogenetics that mentions CYP2D6 metabolizes hydrocodone but provides no specific study data, effect sizes, or quantitative PK/PD parameters. |
| PGx | Whitt_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (Diphenhydramine inhibiting CYP2D6) in a single case, not a pharmacogenomic effect based on the patient's genetic genotype. |
| PD | Yuan_2026 | not_relevant | 0 | 0 | The paper is a review of suzetrigine, not hydrocodone, and does not report specific numeric PD parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:05 UTC</sub>
