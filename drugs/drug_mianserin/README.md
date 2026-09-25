<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mianserin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mianserin_Timmer1985_reference&quot;,&quot;label&quot;:&quot;Timmer_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mianserin/Mianserin_Timmer1985_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mianserin_Maguire1983_reference&quot;,&quot;label&quot;:&quot;Maguire_1983_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mianserin/Mianserin_Maguire1983_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mianserin

- **generic name:** mianserin
- **ATC codes:** `N06AX03`
- **DrugBank:** [DB06148](https://go.drugbank.com/drugs/DB06148)
- **groups:** approved, withdrawn

## About

**Description.** A tetracyclic compound with antidepressant effects. Mianserin was previously available internationally, however in most markets it has been phased out in favour of [mirtazapine].

**Indication.** For the treatment of depression.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 00:20 | 14:04 | 1/1/0 | 0/0/0 | 0/0/0 | 57,949/9,102 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: partial</span> | [Timmer_1985_reference](drugs/drug_mianserin/Mianserin_Timmer1985_reference.md) | Timmer CJ et al., Absolute bioavailability of mianserin t…, European journal of drug me… (1985) | [10.1007/BF03189759](https://doi.org/10.1007/BF03189759) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Maguire_1983_reference](drugs/drug_mianserin/Mianserin_Maguire1983_reference.md) | Maguire K et al., The pharmacokinetics of mianserin in el…, Psychiatry research (1983) | [10.1016/0165-1781(83)90016-1](https://doi.org/10.1016/0165-1781(83)90016-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mianserin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD1 (binder), DRD2 (target), DRD3 (binder), HRH1 (target), HRH4 (binder), HTR1A (blocker), HTR1F (binder), HTR2A (target), HTR2B (binder), HTR2C (target), HTR6 (binder), HTR7 (target), OPRK1 (target), SLC6A2 (inhibitor), SLC6A3 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 85 matched, 52 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maguire_1983.pdf` | Maguire K et al., The pharmacokinetics of mianserin in el…, Psychiatry research (1983) | popPK | 10 | [10.1016/0165-1781(83)90016-1](https://doi.org/10.1016/0165-1781(83)90016-1) | [6576394](https://pubmed.ncbi.nlm.nih.gov/6576394) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-lives) for mianserin in humans, and all numeric values are explicitly present in the provided text. |
| `Timmer_1985.pdf` | Timmer CJ et al., Absolute bioavailability of mianserin t…, European journal of drug me… (1985) | popPK | 10 | [10.1007/BF03189759](https://doi.org/10.1007/BF03189759) | [3830718](https://pubmed.ncbi.nlm.nih.gov/3830718) | The abstract explicitly reports quantitative pharmacokinetic parameters for mianserin, including clearance (19 l/h), volume of distribution, half-life, and absorption rates. |
| `Ananth_1987.pdf` | Ananth US et al., Stimulation of phosphoinositide hydroly…, Journal of neurochemistry (1987) | pd | 4 | [10.1111/j.1471-4159.1987.tb13156.x](https://doi.org/10.1111/j.1471-4159.1987.tb13156.x) | [3025366](https://www.ncbi.nlm.nih.gov/pubmed/3025366) | metadata signals extractable PD data (EC50) |
| `Crider_2003.pdf` | Crider JY et al., Pharmacological characterization of a s…, Investigative ophthalmology… (2003) | pd | 4 | [10.1167/iovs.02-1292](https://doi.org/10.1167/iovs.02-1292) | [14578406](https://www.ncbi.nlm.nih.gov/pubmed/14578406) | metadata signals extractable PD data (EC50) |
| `Kaufman_1995.pdf` | Kaufman MJ et al., Serotonin 5-HT2C receptor stimulates cy…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64010199.x](https://doi.org/10.1046/j.1471-4159.1995.64010199.x) | [7798914](https://www.ncbi.nlm.nih.gov/pubmed/7798914) | metadata signals extractable PD data (EC50) |
| `Bogni_2005.pdf` | Bogni A et al., Substrate specific metabolism by polymo…, Toxicology in vitro : an in… (2005) | pgx | 8 | [10.1016/j.tiv.2005.04.001](https://doi.org/10.1016/j.tiv.2005.04.001) | [15893449](https://www.ncbi.nlm.nih.gov/pubmed/15893449) | metadata signals extractable PGX data (CYP2D6*17, PK/PD-context) |
| `Dahl_1994.pdf` | Dahl ML et al., Stereoselective disposition of mianseri…, Clinical pharmacology and t… (1994) | pgx | 8 | [10.1038/clpt.1994.121](https://doi.org/10.1038/clpt.1994.121) | [8062494](https://www.ncbi.nlm.nih.gov/pubmed/8062494) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Eap_2000.pdf` | Eap CB et al., Marked increase of venlafaxine enantiom…, Pharmacopsychiatry (2000) | pgx | 8 | [10.1055/s-2000-7975](https://doi.org/10.1055/s-2000-7975) | [10855463](https://www.ncbi.nlm.nih.gov/pubmed/10855463) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kirchheiner_2003.pdf` | Kirchheiner J et al., Bupropion and 4-OH-bupropion pharmacoki…, Pharmacogenetics (2003) | pgx | 8 | [10.1097/00008571-200310000-00005](https://doi.org/10.1097/00008571-200310000-00005) | [14515060](https://www.ncbi.nlm.nih.gov/pubmed/14515060) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Mihara_1997.pdf` | Mihara K et al., The CYP2D6 genotype and plasma concentr…, Journal of clinical psychop… (1997) | pgx | 8 | [10.1097/00004714-199712000-00005](https://doi.org/10.1097/00004714-199712000-00005) | [9408809](https://www.ncbi.nlm.nih.gov/pubmed/9408809) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Szewczuk-Bogusławska_2004.pdf` | Szewczuk-Bogusławska M et al., [Assessment of CYP2D6 activity as a for…, Psychiatria polska (2004) | pgx | 8 | not captured | [15779673](https://www.ncbi.nlm.nih.gov/pubmed/15779673) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yasui_1997.pdf` | Yasui N et al., Effects of thioridazine, an inhibitor o…, Pharmacogenetics (1997) | pgx | 8 | [10.1097/00008571-199710000-00005](https://doi.org/10.1097/00008571-199710000-00005) | [9352572](https://www.ncbi.nlm.nih.gov/pubmed/9352572) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Eap_1999.pdf` | Eap CB et al., Effects of carbamazepine coadministrati…, Therapeutic drug monitoring (1999) | pgx | 7 | [10.1097/00007691-199904000-00005](https://doi.org/10.1097/00007691-199904000-00005) | [10217335](https://www.ncbi.nlm.nih.gov/pubmed/10217335) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Eap_1994.pdf` | Eap CB et al., Determination of the enantiomers of mia…, Chirality (1994) | pgx | 5 | [10.1002/chir.530060708](https://doi.org/10.1002/chir.530060708) | [7986669](https://www.ncbi.nlm.nih.gov/pubmed/7986669) | metadata signals extractable PGX data (CYP2D6) |
| `Hole_2025.pdf` | Hole K et al., Association Between CYP2D6 Genotypes an…, Basic & clinical pharmacolo… (2025) | pgx | 5 | [10.1111/bcpt.70013](https://doi.org/10.1111/bcpt.70013) | [40010695](https://www.ncbi.nlm.nih.gov/pubmed/40010695) | metadata signals extractable PGX data (CYP2D6) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-24T00:15:07.822697+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ananth_1987 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Ananth_1987 | not_relevant | 0 | 0 | The paper studies serotonin in C6 glioma cells and does not mention mianserin or report any pharmacodynamic parameters for it. |
| popPK | Banach_2016 | irrelevant | 0 | 0 | The paper is a review discussing pharmacokinetic interactions in epilepsy-depression comorbidities, and mianserin is mentioned only as a drug to avoid due to pharmacodynamic effects (lowering convulsive threshold), with no quantitative PK parameters reported. |
| PD | Banach_2016 | not_relevant | 1 | 0 | The text is a review discussing qualitative pharmacodynamic interactions and safety concerns (lowering convulsive threshold) without providing any numeric PD parameters or concentration-effect data for mianserin. |
| PGx | Baumann_2001 | not_relevant | 2 | 0 | The paper is a general review arguing for the individual evaluation of enantiomers and does not report specific pharmacogenomic data or quantitative PK/PD effects for mianserin. |
| PGx | Baumann_2002 | not_relevant | 0 | 0 | The paper is a general review on enantiomers in psychopharmacology and does not report specific pharmacogenomic effects on mianserin's PK or PD parameters. |
| PGx | Bogni_2005 | not_relevant | 2 | 5 | The paper reports in vitro metabolic activity of CYP2D6 variants on mianserin, but does not report in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Carvalho_2014 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for MDD in breast cancer and does not report pharmacogenomic effects on mianserin PK/PD parameters. |
| PGx | Chow_1999 | not_relevant | 2 | 5 | The paper investigates in vitro metabolism by CYP2D isoforms but does not report in vivo pharmacokinetic or pharmacodynamic parameters linked to human genotypes. |
| PGx | Clark_1988 | not_relevant | 2 | 0 | The paper investigates the association between sparteine oxidation phenotype and adverse drug reactions, but does not report specific pharmacokinetic or pharmacodynamic parameter changes for mianserin. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing serotonin receptors in rat stomach fundus, not a pharmacokinetic study, and mianserin is only mentioned as a noncompetitive antagonist. |
| PD | Clineschmidt_1985 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptors in rat stomach fundus and identifies mianserin as a noncompetitive antagonist, but it does not report a pharmacodynamic exposure-response or dose-response relationship for mianserin itself (e.g., Emax, EC50 for mianserin's effect, or PK/PD fit). |
| popPK | Crider_2003 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Crider_2003 | not_relevant | 0 | 0 | The paper focuses on 5-HT7 receptor pharmacology in corneal cells and does not mention mianserin or report any exposure-response or dose-response data for it. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on insect receptors where mianserin is used only as a reference antagonist, not a subject of pharmacokinetic analysis. |
| PD | Deng_2021 | not_relevant | 3 | 2 | The paper reports a single EC50 value for mianserin as an antagonist in an in vitro receptor assay, which is a pharmacological potency parameter rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect in a subject. |
| PGx | Eap_1994 | not_relevant | 2 | 5 | The study reports enantiomer ratios in a homogeneous group of CYP2D6 extensive metabolizers without comparing different genotypes to demonstrate a pharmacogenomic effect. |
| PGx | Eap_1999 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (carbamazepine inducing mianserin metabolism) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Eap_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction affecting venlafaxine PK, not a pharmacogenomic effect on mianserin. |
| popPK | Ichida_1983 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay where mianserin is used only as a competitive antagonist to determine Ki values, not as a subject drug for pharmacokinetic analysis. |
| PD | Ichida_1983 | not_relevant | 1 | 2 | The paper reports in vitro binding affinity (Ki) for mianserin, which is a pharmacological property, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for a physiological effect. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT7 receptors in porcine oviducts where mianserin is used only as a competitive antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-HT on the porcine oviduct and reports the pKb of mianserin as an antagonist, but it does not report a pharmacodynamic (exposure- or dose-response) relationship for mianserin itself. |
| popPK | Kaufman_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin receptors in porcine choroid plexus, using mianserin only as a receptor antagonist to determine binding affinity (Ki), not as a subject drug for pharmacokinetic analysis. |
| PD | Kaufman_1995 | not_relevant | 3 | 2 | The paper reports a receptor binding affinity (Ki) for mianserin in an in vitro tissue slice assay, which is a pharmacological potency measure but not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Kirchheiner_2003 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PGx | Kirchheiner_2003 | not_relevant | 0 | 0 | The paper focuses on bupropion and CYP2B6, not mianserin. |
| PGx | Koyama_1996 | not_relevant | 0 | 0 | The paper identifies CYP isoforms involved in mianserin metabolism using in vitro systems but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of an insect tyramine receptor where mianserin is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Ma_2019 | not_relevant | 1 | 0 | The paper reports qualitative antagonistic effects of mianserin on an insect receptor but provides no numeric PD parameters (e.g., Ki, IC50) or concentration-effect curves for mianserin. |
| popPK | Minguez_2014 | irrelevant | 0 | 0 | The paper is an ecotoxicology study assessing acute toxicity (EC50) in Daphnia magna, not a pharmacokinetic study reporting disposition parameters for mianserin. |
| PGx | Mitchell_2004 | not_relevant | 0 | 0 | The paper is a review of therapeutic drug monitoring that only mentions pharmacogenomics as a future application without reporting specific gene-variant effects on mianserin PK/PD. |
| PGx | Molden_2011 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between metoprolol and antidepressants (including mianserin) via CYP2D6 inhibition, but does not report pharmacogenomic effects (gene variants) on the PK/PD of mianserin. |
| PGx | Piechota_2015 | not_relevant | 0 | 0 | The paper investigates drug-induced changes in gene transcription (transcriptomics) in mice, not how genetic variants affect the pharmacokinetics or pharmacodynamics of mianserin. |
| PGx | Rangaraju_2016 | not_relevant | 0 | 0 | The paper investigates the genetic basis of longevity and mood (ANK3) and uses mianserin as a tool compound in C. elegans, but does not report pharmacogenomic effects on mianserin's PK or PD parameters in humans. |
| PGx | Sakurada_2018 | not_relevant | 0 | 0 | The paper reports an allergic hypersensitivity reaction (adverse event) associated with an HLA allele, not a change in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Sindrup_1992 | not_relevant | 2 | 5 | The paper mentions a poor metabolizer phenotype affecting mianserin plasma concentration, but it is a single case observation within a clinical trial focused on efficacy, not a study reporting a pharmacogenomic effect on PK/PD parameters. |
| PGx | Spigset_1997 | not_relevant | 2 | 0 | The paper reports an association between CYP2D6/2C19 genotypes and adverse events (seizures/myoclonus) but does not report specific pharmacokinetic or pharmacodynamic parameter changes for mianserin. |
| PGx | Szewczuk-Bogusławska_2004 | not_relevant | 2 | 0 | The text is a general review of CYP2D6 phenotyping and mentions mianserin only as a substrate, without reporting specific pharmacokinetic or pharmacodynamic data or effect sizes for mianserin. |
| PGx | Yamamoto_2003 | not_relevant | 0 | 0 | The paper describes an in vitro assay method for estimating enzyme involvement in drug metabolism and does not report pharmacogenomic effects on PK/PD parameters in humans. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 00:15 UTC</sub>
