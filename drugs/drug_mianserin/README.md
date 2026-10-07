<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mianserin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mianserin_Timmer1985_reference&quot;,&quot;label&quot;:&quot;Timmer_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mianserin/Mianserin_Timmer1985_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mianserin

- **generic name:** mianserin
- **ATC codes:** `N06AX03`
- **DrugBank:** [DB06148](https://go.drugbank.com/drugs/DB06148) · **PubChem:** [CID 4184](https://pubchem.ncbi.nlm.nih.gov/compound/4184)
- **molar mass:** 264.3648 g/mol (C18H20N2) — DrugBank
- **groups:** approved, withdrawn

## About

Mianserin is an antidepressant used to treat depression. It has been withdrawn in some markets but remains approved and used in others.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416701](https://www.wikidata.org/wiki/Q416701) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mianserin | parent | 264.365 | C18H20N2 | DrugBank | [4184](https://pubchem.ncbi.nlm.nih.gov/compound/4184) | Maguire_1983, Timmer_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:38 | 10:14 | 1/1/0 | 0/0/0 | 0/0/0 | 179,251/9,459 | ollama / glm-5.3-flash | 11 | 6/5 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Timmer_1985_reference](drugs/drug_mianserin/Mianserin_Timmer1985_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Timmer CJ et al., Absolute bioavailability of mianserin t…, European journal of drug me… (1985) | [10.1007/BF03189759](https://doi.org/10.1007/BF03189759) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Maguire_1983_reference](drugs/drug_mianserin/Mianserin_Maguire1983_reference.md) | — | 1-compartment (no model) | 7 | Maguire K et al., The pharmacokinetics of mianserin in el…, Psychiatry research (1983) | [10.1016/0165-1781(83)90016-1](https://doi.org/10.1016/0165-1781(83)90016-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mianserin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD1 (binder), DRD2 (target), DRD3 (binder), HRH1 (target), HRH4 (binder), HTR1A (blocker), HTR1F (binder), HTR2A (target), HTR2B (binder), HTR2C (target), HTR6 (binder), HTR7 (target), OPRK1 (target), SLC6A2 (inhibitor), SLC6A3 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 237 matched, 111 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maguire_1983.pdf` | Maguire K et al., The pharmacokinetics of mianserin in el…, Psychiatry research (1983) | popPK | 10 | [10.1016/0165-1781(83)90016-1](https://doi.org/10.1016/0165-1781(83)90016-1) | [6576394](https://pubmed.ncbi.nlm.nih.gov/6576394) | Full PK parameter values (ka, Vd, CL, half-lives) for mianserin are reported directly in the abstract. |
| `Timmer_1985.pdf` | Timmer CJ et al., Absolute bioavailability of mianserin t…, European journal of drug me… (1985) | popPK | 10 | [10.1007/BF03189759](https://doi.org/10.1007/BF03189759) | [3830718](https://pubmed.ncbi.nlm.nih.gov/3830718) | Human PK study reporting CL, volumes, half-life, absorption half-life and bioavailability directly in the abstract. |
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

<sub>queue written 2026-10-06T23:36:19.514535+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyoshi_1995 | irrelevant | 0 | 0 | In vitro receptor pharmacology study; mianserin is only a blocking agent, no PK parameters. |
| popPK | Ananth_1987 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Ananth_1987 | not_relevant | 0 | 0 | The paper studies serotonin in C6 glioma cells and does not mention mianserin or report any pharmacodynamic parameters for it. |
| popPK | Balfanz_2014 | irrelevant | 0 | 0 | Mianserin is only used as a pharmacological antagonist probe on honeybee octopamine receptors; no PK parameters for mianserin are reported. |
| popPK | Banach_2016 | irrelevant | 0 | 0 | This is a narrative review on PK/PD interactions of antiepileptics and antidepressants; mianserin is only mentioned as a comparator with no quantitative PK parameters reported. |
| PD | Banach_2016 | not_relevant | 1 | 0 | The text is a review discussing qualitative pharmacodynamic interactions and safety concerns (lowering convulsive threshold) without providing any numeric PD parameters or concentration-effect data for mianserin. |
| PGx | Baumann_2001 | not_relevant | 3 | 1 | Abstract only mentions pharmacogenetic characteristics of mianserin enantiomers in general terms with no gene variant or PK/PD effect data. |
| PGx | Baumann_2002 | not_relevant | 3 | 1 | Review mentions mianserin's stereoselective properties only in passing, with no pharmacogenomic effect on PK/PD parameters reported. |
| PGx | Carvalho_2014 | not_relevant | 0 | 0 | Systematic review of antidepressant efficacy in breast cancer; no gene variant effect on mianserin PK/PD reported. |
| PGx | Chow_1999 | not_relevant | 3 | 5 | In vitro recombinant CYP2D isoform catalytic activities, not a gene variant/genotype/phenotype effect on in vivo PK/PD parameters of mianserin. |
| PGx | Clark_1988 | not_relevant | 4 | 1 | Abstract only mentions mianserin among drugs investigated for oxidation polymorphism association with ADRs, with no PK/PD parameter effect reported. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | In vitro receptor pharmacology study in rat stomach fundus; mianserin is only a noncompetitive antagonist tested, with no PK parameters. |
| PD | Clineschmidt_1985 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptors in rat stomach fundus and identifies mianserin as a noncompetitive antagonist, but it does not report a pharmacodynamic exposure-response or dose-response relationship for mianserin itself (e.g., Emax, EC50 for mianserin's effect, or PK/PD fit). |
| popPK | Conn_1986 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; mianserin is only an antagonist probe with binding potencies, no PK disposition parameters. |
| popPK | Crider_2003 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Crider_2003 | not_relevant | 0 | 0 | The paper focuses on 5-HT7 receptor pharmacology in corneal cells and does not mention mianserin or report any exposure-response or dose-response data for it. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | Mianserin is only used as a comparator antagonist in an in vitro receptor assay; no PK parameters for mianserin are reported. |
| PD | Deng_2021 | not_relevant | 3 | 2 | The paper reports a single EC50 value for mianserin as an antagonist in an in vitro receptor assay, which is a pharmacological potency parameter rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect in a subject. |
| PGx | Eap_1994 | not_relevant | 3 | 5 | All patients were CYP2D6 extensive metabolizers, so no genotype contrast or variant effect on mianserin PK/PD parameters is reported. |
| PGx | Eap_1999 | not_relevant | 2 | 5 | Effect is from carbamazepine coadministration (drug–drug interaction), not a gene variant/genotype/phenotype; CYP3A4 involvement is only inferred. |
| PGx | Eap_2000 | not_relevant | 2 | 3 | The paper concerns venlafaxine PK; mianserin appears only as a comedic interaction, with no gene variant altering mianserin's PK/PD parameters. |
| popPK | Feldman_1994 | irrelevant | 0 | 0 | Mianserin is only used as a 5-HT2 antagonist tool in an in-vitro rat brainstem slice electrophysiology study; no PK parameters reported. |
| popPK | Flores_1995 | irrelevant | 0 | 0 | Mianserin is only used as a serotonin antagonist tool in an in vitro electrophysiology study; no PK parameters reported. |
| popPK | Gendelev_2024 | irrelevant | 0 | 0 | This is a zebrafish behavioral phenotypic screening/ML paper; mianserin is only a screened compound with no PK parameters reported. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | In-vitro pharmacology study of 5-HT receptor antagonism in pig pulmonary artery; mianserin appears only as a receptor antagonist with a pA2 value, no PK parameters. |
| popPK | Hengartner_2020 | irrelevant | 0 | 0 | This is a study of antidepressant withdrawal symptoms from forum narratives; mianserin is only mentioned once as a co-treatment, with no PK parameters. |
| popPK | Hirst_1997 | irrelevant | 0 | 0 | Mianserin appears only as an antagonist pKi in a receptor pharmacology study; no PK parameters. |
| popPK | Hoertel_2022 | irrelevant | 0 | 0 | Observational COVID-19/antidepressant study with no mianserin PK parameters; mianserin not even mentioned. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | Mianserin is only used as an antagonist in an in-vitro receptor pharmacology assay; no PK parameters for mianserin are reported. |
| popPK | Ichida_1983 | irrelevant | 0 | 0 | In-vitro receptor binding study; mianserin only a Ki comparator, no PK parameters. |
| PD | Ichida_1983 | not_relevant | 1 | 2 | The paper reports in vitro binding affinity (Ki) for mianserin, which is a pharmacological property, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for a physiological effect. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | Mianserin appears only as an antagonist with a pKb value in an in vitro receptor study; no pharmacokinetic parameters for mianserin are reported. |
| PD | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-HT on the porcine oviduct and reports the pKb of mianserin as an antagonist, but it does not report a pharmacodynamic (exposure- or dose-response) relationship for mianserin itself. |
| popPK | Kaufman_1995 | irrelevant | 0 | 0 | Mianserin appears only as a receptor antagonist Ki in an in vitro pharmacology study, with no PK parameters. |
| PD | Kaufman_1995 | not_relevant | 3 | 2 | The paper reports a receptor binding affinity (Ki) for mianserin in an in vitro tissue slice assay, which is a pharmacological potency measure but not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Kirchheiner_2003 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PGx | Kirchheiner_2003 | not_relevant | 0 | 0 | Paper concerns bupropion/CYP2B6 pharmacokinetics, not mianserin. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | Mianserin is only used as a 5-HT receptor antagonist (pA2 value) in an in vitro pharmacology study; no PK parameters. |
| PGx | Koyama_1996 | not_relevant | 2 | 3 | In vitro enzyme-phenotyping of mianserin metabolism; no gene variant/genotype/phenotype effect on in vivo PK/PD parameters is reported. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | In-vitro receptor antagonism study in rat jejunum; no pharmacokinetic parameters for mianserin are reported. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | Mianserin is only used as a pharmacological antagonist probe on an insect receptor; no PK parameters for mianserin are reported. |
| PD | Ma_2019 | not_relevant | 1 | 0 | The paper reports qualitative antagonistic effects of mianserin on an insect receptor but provides no numeric PD parameters (e.g., Ki, IC50) or concentration-effect curves for mianserin. |
| popPK | McDermott-Rouse_2021 | irrelevant | 0 | 0 | This is a C. elegans behavioral mode-of-action screening study; mianserin is only one screened compound and no PK parameters are reported. |
| popPK | Mikuni_1987 | irrelevant | 0 | 0 | Receptor pharmacology study with no PK parameters for mianserin. |
| popPK | Minguez_2014 | irrelevant | 0 | 0 | Ecotoxicity study reporting EC50 values in Daphnia magna, not pharmacokinetic disposition parameters for mianserin. |
| PGx | Mitchell_2004 | not_relevant | 3 | 1 | Abstract only mentions potential future TDM/genotyping applications for mianserin without reporting any gene-variant effect on PK/PD parameters. |
| PGx | Molden_2011 | not_relevant | 0 | 0 | Paper reviews metoprolol–antidepressant drug interactions, not pharmacogenomic effects on mianserin PK/PD. |
| popPK | Odagaki_1993 | irrelevant | 0 | 0 | In vitro receptor pharmacology study; mianserin is only an antagonist in a potency ranking, no PK parameters. |
| popPK | Paluzzi_2015 | irrelevant | 0 | 0 | Mianserin is only used as a serotonin receptor antagonist in an insect receptor pharmacology study; no PK parameters for mianserin. |
| PGx | Piechota_2015 | not_relevant | 0 | 0 | Study of drug-induced transcript isoform regulation in mouse striatum, not gene variants affecting mianserin PK/PD parameters. |
| popPK | Raiteri_1992 | irrelevant | 0 | 0 | In vitro receptor pharmacology study in human brain slices; mianserin is only an antagonist tool, no PK parameters. |
| PGx | Rangaraju_2016 | not_relevant | 2 | 3 | Mianserin's effect on lifespan depends on ANK3/unc-44 genotype, but lifespan is not a PK/PD parameter and no fitted pharmacogenomic effect size is reported. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in rat aorta; mianserin is only an antagonist potency comparator, no PK parameters. |
| PGx | Sakurada_2018 | not_relevant | 2 | 3 | Case report links HLA-B*4601 to allergic reactions (including mianserin cross-reactivity) but reports no PK/PD parameter change for mianserin. |
| popPK | Schoeffter_1988 | irrelevant | 0 | 0 | In vitro receptor pharmacology study; mianserin is only an antagonist tested, no PK parameters. |
| popPK | Shimizu_1996 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in rat astrocytes; no PK disposition parameters for mianserin. |
| PGx | Sindrup_1992 | not_relevant | 3 | 4 | Mentions a poor metabolizer having the highest mianserin concentration, but no fitted genotype effect on a PK/PD parameter is reported. |
| PGx | Spigset_1997 | not_relevant | 3 | 2 | Study examines CYP2D6/CYP2C19 genotype association with seizure/myoclonus occurrence in mianserin users, but reports no PK/PD parameter changes or effect sizes. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | In vitro secondary pharmacology/ADR association study; mianserin not a PK subject and no disposition parameters reported. |
| PGx | Szewczuk-Bogusławska_2004 | not_relevant | 3 | 2 | Only a general statement that CYP2D6 PM/IM may raise plasma concentrations of mianserin; no drug-specific quantitative PK/PD effect reported. |
| popPK | Terai_1989 | irrelevant | 0 | 0 | In-vitro receptor binding study; mianserin is only an inhibitory ligand, no PK parameters. |
| popPK | Terrón_1996 | irrelevant | 0 | 0 | In-vitro pharmacology study using mianserin only as an antagonist tool; no PK parameters. |
| popPK | Tokmakjian_2026 | irrelevant | 0 | 0 | Mianserin is only mentioned as a CAD used in a published expression dataset; no PK parameters for mianserin are reported. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | Mianserin is only used as an antagonist in an in-vitro receptor pharmacology study; no PK parameters for mianserin are reported. |
| PGx | Yamamoto_2003 | not_relevant | 2 | 5 | In vitro CYP2D6 inhibition IC50 data for mianserin; no gene variant/genotype effect on mianserin PK/PD in vivo. |
| popPK | Yang_1994 | irrelevant | 0 | 0 | Mianserin is only used as a 5-HT2A antagonist in an in-vitro calcium mobilization assay; no pharmacokinetic parameters are reported. |
| popPK | Yang_1998 | irrelevant | 0 | 0 | Mianserin is only used as a non-selective 5-HT antagonist tool in an in vitro receptor study; no PK parameters for mianserin are reported. |
| popPK | Zhu_1996 | irrelevant | 0 | 0 | Mianserin is only used as an in-vitro 5-HT receptor antagonist in rat gastric fundus strips; no pharmacokinetic parameters for mianserin are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:36 UTC</sub>
