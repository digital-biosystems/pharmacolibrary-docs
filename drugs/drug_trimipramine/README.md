<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;trimipramine&quot;}]"></div>

# trimipramine

- **generic name:** trimipramine
- **ATC codes:** `N06AA06`
- **DrugBank:** [DB00726](https://go.drugbank.com/drugs/DB00726)
- **groups:** approved, investigational

## About

**Description.** Tricyclic antidepressant similar to imipramine, but with more antihistaminic and sedative properties.

**Indication.** For the treatment of depression and depression accompanied by anxiety, agitation or sleep disturbance

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 18:07 | 13:19 | 0/0/0 | 0/0/0 | 0/0/14 | 49,123/4,614 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_3.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_4.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_5.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2C19_PA166105001_6.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_3.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_4.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_5.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2D6** | `Q22` · CL | metabolism | [guideline](drugs/drug_trimipramine/pgx_guideline_CYP2D6_PA166105001_6.md) | guideline | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimipramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` metabolism/substrate, `CYP2C9` substrate, `CYP2D6` metabolism/substrate | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA2A (target), ADRA2B (other/unknown), ADRB1 (binder), CHRM1 (binder), DRD1 (binder), DRD2 (other/unknown), HRH1 (target), HTR1A (target), HTR1D (binder), HTR2A (target), HTR2C (target), HTR3A (binder), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 56 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abernethy_1984.pdf` | Abernethy DR et al., Trimipramine kinetics and absolute bioa…, Clinical pharmacology and t… (1984) | popPK | 10 | [10.1038/clpt.1984.42](https://doi.org/10.1038/clpt.1984.42) | [6697642](https://pubmed.ncbi.nlm.nih.gov/6697642) | The evidence explicitly reports quantitative pharmacokinetic parameters for trimipramine, including elimination half-life, volume of distribution, and clearance. |
| `Kirchheiner_2003_2.pdf` | Kirchheiner J et al., Effects of polymorphisms in CYP2D6, CYP…, Journal of clinical psychop… (2003) | popPK | 10 | [10.1097/01.jcp.0000088909.24613.92](https://doi.org/10.1097/01.jcp.0000088909.24613.92) | [14520122](https://pubmed.ncbi.nlm.nih.gov/14520122) | The study reports quantitative pharmacokinetic parameters for trimipramine, specifically median oral clearance values for different genotype groups, directly in the text. |
| `Kirchheiner_2003_3.pdf` | Kirchheiner J et al., Trimipramine pharmacokinetics after int…, Pharmacogenetics (2003) | popPK | 9 | [10.1097/00008571-200312000-00003](https://doi.org/10.1097/00008571-200312000-00003) | [14646691](https://pubmed.ncbi.nlm.nih.gov/14646691) | The study reports quantitative pharmacokinetic parameters (systemic clearance, bioavailability) for trimipramine in humans, with specific numeric values provided in the abstract text. |
| `Degen_1993.pdf` | Degen J et al., [Comparative study of the pharmacokinet…, Medizinische Klinik (Munich… (1993) | popPK | 8 | not captured | [8474401](https://pubmed.ncbi.nlm.nih.gov/8474401) | The study reports pharmacokinetic parameters for trimipramine, but the specific numeric values are not present in the provided text, only qualitative comparisons and statistical significance statements. |
| `Eap_1992_2.pdf` | Eap CB et al., Influence of quinidine on the pharmacok…, Neuropsychobiology (1992) | popPK | 8 | [10.1159/000118840](https://doi.org/10.1159/000118840) | [1454163](https://pubmed.ncbi.nlm.nih.gov/1454163) | The study reports quantitative PK parameters (half-life, clearance, volume) for trimipramine, but the specific numeric values are not present in the provided evidence text. |
| `Ochs_1985.pdf` | Ochs HR et al., Cerebrospinal fluid uptake and peripher…, The Journal of pharmacy and… (1985) | popPK | 8 | [10.1111/j.2042-7158.1985.tb03030.x](https://doi.org/10.1111/j.2042-7158.1985.tb03030.x) | [2862269](https://pubmed.ncbi.nlm.nih.gov/2862269) | The study reports pharmacokinetic parameters (volume of distribution, half-life) for trimipramine in dogs, but the specific numeric values are not present in the provided evidence. |
| `Beil_1987.pdf` | Beil W et al., The gastric proton pump, a target for n…, Alimentary pharmacology & t… (1987) | pd | 4 | [10.1111/j.1365-2036.1987.tb00613.x](https://doi.org/10.1111/j.1365-2036.1987.tb00613.x) | [2908748](https://www.ncbi.nlm.nih.gov/pubmed/2908748) | metadata signals extractable PD data (IC50) |
| `Randrup_1977.pdf` | Randrup A et al., Uptake inhibition of biogenic amines by…, Psychopharmacology (1977) | pd | 4 | [10.1007/BF00492370](https://doi.org/10.1007/BF00492370) | [408861](https://www.ncbi.nlm.nih.gov/pubmed/408861) | metadata signals extractable PD data (IC50) |
| `Eap_2000.pdf` | Eap CB et al., Steady state plasma levels of the enant…, Therapeutic drug monitoring (2000) | pgx | 8 | [10.1097/00007691-200004000-00012](https://doi.org/10.1097/00007691-200004000-00012) | [10774635](https://www.ncbi.nlm.nih.gov/pubmed/10774635) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hicks_2017.pdf` | Hicks JK et al., Clinical pharmacogenetics implementatio…, Clinical pharmacology and t… (2017) | pgx | 8 | [10.1002/cpt.597](https://doi.org/10.1002/cpt.597) | [27997040](https://www.ncbi.nlm.nih.gov/pubmed/27997040) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Jessel_2020.pdf` | Jessel CD et al., Use of antidepressants with pharmacogen…, Pharmacogenetics and genomi… (2020) | pgx | 5 | [10.1097/FPC.0000000000000406](https://doi.org/10.1097/FPC.0000000000000406) | [32433340](https://www.ncbi.nlm.nih.gov/pubmed/32433340) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-24T18:04:43.061112+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996_2 | irrelevant | 0 | 0 | The paper is a review of SSRIs and their interactions, mentioning trimipramine only as a co-administered drug in interaction studies without reporting its own pharmacokinetic parameters. |
| PD | Baumann_1996_2 | not_relevant | 0 | 0 | The text is a review of SSRIs and mentions trimipramine only in the context of CYP2D6 inhibition by paroxetine, without reporting any pharmacodynamic or exposure-response data for trimipramine. |
| PGx | Baumann_1996_2 | not_relevant | 0 | 0 | The paper discusses SSRIs and their interactions with tricyclic antidepressants (including trimipramine) but does not report a pharmacogenomic effect of a gene variant on the PK/PD of trimipramine itself. |
| popPK | Baumann_2001_2 | irrelevant | 1 | 0 | The paper is a review discussing the principles of enantiomeric evaluation for antidepressants including trimipramine, but it does not report original quantitative pharmacokinetic parameter values. |
| PD | Baumann_2001_2 | not_relevant | 1 | 0 | The text is a review article discussing the general principles of evaluating enantiomers of chiral antidepressants, including trimipramine, but it does not report specific numeric pharmacodynamic parameters or exposure-response data for trimipramine. |
| PGx | Baumann_2001_2 | not_relevant | 2 | 0 | The paper is a general review arguing for the individual evaluation of enantiomers and does not report specific pharmacogenomic data or quantitative effects for trimipramine. |
| PGx | Baumann_2002_2 | not_relevant | 0 | 0 | The paper is a general review on enantiomers in psychopharmacology and does not report specific pharmacogenomic effects on trimipramine PK/PD parameters. |
| popPK | Beauchamp_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium uptake inhibition in rat brain synaptosomes and does not report pharmacokinetic parameters. |
| popPK | Beauchamp_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockade in synaptosomes and does not report pharmacokinetic parameters for trimipramine. |
| popPK | Beil_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for trimipramine. |
| PGx | Bolaji_1993 | not_relevant | 2 | 0 | The study is an in vitro investigation of CYP2D6 metabolism and does not report in vivo pharmacokinetic or pharmacodynamic parameters influenced by genotype. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The study evaluates the spinal anesthetic effect of trimipramine in rats and does not report any pharmacokinetic parameters. |
| PD | Chen_2004 | not_relevant | 2 | 1 | The paper reports qualitative comparisons of spinal anesthetic effects and mentions dose-response studies for other drugs (amitriptyline, bupivacaine, lidocaine), but provides no numeric PD parameters or extractable concentration-effect data for trimipramine. |
| popPK | Chouinard_1999_2 | irrelevant | 0 | 0 | The paper is a review of benzodiazepines and other anxiolytics where trimipramine is only mentioned as a co-administered drug in the context of zopiclone interactions, with no PK parameters reported for trimipramine. |
| popPK | Degen_1993 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for trimipramine, but the specific numeric values are not present in the provided text, only qualitative comparisons and statistical significance statements. |
| popPK | Eap_1992_2 | relevant | 8 | 0 | The study reports quantitative PK parameters (half-life, clearance, volume) for trimipramine, but the specific numeric values are not present in the provided evidence text. |
| PD | Eap_1992_2 | not_relevant | 4 | 2 | The study is a pilot with n=2 subjects reporting qualitative changes in EEG variables (alpha/theta power) and PK parameters, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the abstract. |
| popPK | Eap_1992_3 | irrelevant | 2 | 0 | The study focuses on an analytical method for measuring enantiomers of metabolites in four patients and reports qualitative concentration ratios rather than quantitative pharmacokinetic parameters like clearance or volume. |
| PD | Eap_1992_3 | not_relevant | 1 | 0 | The paper describes a PK analytical method and reports plasma concentrations in four patients, but it does not provide any pharmacodynamic data, effect measurements, or numeric PD parameters. |
| popPK | Fernandez_1995_2 | irrelevant | 0 | 0 | The paper is a review of zopiclone pharmacokinetics, and trimipramine is only mentioned as a drug interacting with zopiclone, not as the subject of PK analysis. |
| popPK | Haenisch_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition (IC50) and does not report pharmacokinetic disposition parameters for trimipramine. |
| popPK | Haenisch_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition (IC50 values) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Haenisch_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition (IC50 values) and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for trimipramine. |
| PGx | Jessel_2020 | not_relevant | 0 | 0 | The paper reports on medication usage patterns and guideline adherence in a cohort, not on the specific pharmacokinetic or pharmacodynamic effects of gene variants on trimipramine. |
| popPK | Joshi_2023 | irrelevant | 0 | 0 | The paper is an in silico study on drug targets in Neisseria meningitidis where trimipramine is only mentioned as a potential therapeutic candidate, with no pharmacokinetic parameters reported. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adrenergic receptor sensitivity in rat brain tissue and does not report quantitative pharmacokinetic parameters for trimipramine. |
| popPK | Kowalewski_2019_2 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetic interaction of trimipramine with venlafaxine, reporting only plasma concentrations and ratios for venlafaxine, not quantitative disposition parameters (CL, V, etc.) for trimipramine itself. |
| popPK | Kristiansen_1989 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay measuring antimicrobial activity (IC50) of trimipramine, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lavoie_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium uptake inhibition and does not report pharmacokinetic parameters for trimipramine. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice assessing efficacy on morphine withdrawal, not a pharmacokinetic study, and reports no disposition parameters for trimipramine. |
| popPK | Martin_1992 | irrelevant | 1 | 0 | The study focuses on trazodone post-mortem toxicokinetics, with trimipramine serving only as a comparator for redistribution, and no quantitative PK parameters (CL, V, etc.) are reported for trimipramine. |
| popPK | Ochs_1985 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (volume of distribution, half-life) for trimipramine in dogs, but the specific numeric values are not present in the provided evidence. |
| popPK | Randrup_1977 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Randrup_1977 | not_relevant | 0 | 0 | The paper is a review discussing the dopamine hypothesis and amine uptake inhibition mechanisms, without reporting specific PK/PD data or numeric exposure-response parameters for trimipramine. |
| popPK | Reis_2009 | irrelevant | 2 | 0 | The paper is a compilation of therapeutic drug monitoring data (concentrations and coefficients of variation) rather than a study reporting quantitative disposition parameters like clearance, volume, or half-life for trimipramine. |
| popPK | Rüther_1989_2 | irrelevant | 0 | 0 | The paper discusses the pharmacodynamic effects of trimipramine on sleep and circadian rhythms, but contains no pharmacokinetic parameters or quantitative disposition data. |
| PD | Rüther_1989_2 | not_relevant | 1 | 0 | The text provides a qualitative description of trimipramine's unique pharmacodynamic profile regarding REM sleep but contains no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Schlienger_2000_2 | irrelevant | 0 | 0 | The paper is a case report on seizures associated with drug use and does not report any quantitative pharmacokinetic parameters for trimipramine. |
| PD | Schlienger_2000_2 | not_relevant | 0 | 0 | The paper is a single case report of an adverse event (seizure) without any pharmacokinetic data, concentration measurements, or quantitative dose-response analysis. |
| PGx | Schlienger_2000_2 | not_relevant | 0 | 0 | The paper is a case report of a seizure event and hypothesizes a CYP2D6 interaction, but it does not report any measured pharmacokinetic or pharmacodynamic parameters or genotype-specific effect sizes. |
| popPK | Schoretsanitis_2020_2 | irrelevant | 2 | 0 | The paper is a systematic review and meta-analysis that reports alteration ratios of dose-adjusted concentrations rather than original quantitative pharmacokinetic parameters (CL, V, ka) for trimipramine. |
| popPK | Sudoh_2003 | irrelevant | 0 | 0 | The study investigates the local anesthetic efficacy of trimipramine via nerve blockade and does not report any pharmacokinetic parameters. |
| PD | Sudoh_2003 | not_relevant | 2 | 1 | The paper reports qualitative comparisons of nerve blockade duration at a single concentration (5 mM) and mentions in vitro IC50 values for a different target (Nav1.5), but does not provide a dose-response curve or numeric PD parameters for trimipramine's local anesthetic effect. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
