<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dextromethorphan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dextromethorphan_Abduljalil2010_reference&quot;,&quot;label&quot;:&quot;Abduljalil_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dextromethorphan/Dextromethorphan_Abduljalil2010_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dextromethorphan

- **generic name:** dextromethorphan
- **ATC codes:** `N06AX62`, `R05DA09`
- **DrugBank:** [DB00514](https://go.drugbank.com/drugs/DB00514)
- **groups:** approved, investigational

## About

**Description.** Dextromethorphan is a levorphanol derivative and codeine analog commonly used as a cough suppressant and also a drug of abuse.[A215412] Although similar in structure to other opioids, it has minimal interaction with opioid receptors.[A215412]

Dextromethorphan was granted FDA approval before 3 December 1957.[A215412,L14997]

**Indication.** Dextromethorphan is indicated in combination with [brompheniramine] and [pseudoephedrine] in the treatment of coughs and upper respiratory symptoms associated with allergies or the common cold.[L14366] Dextromethorphan is also used in combination with [guaifenesin] as an over-the-counter product to relieve a cough.[L14369] Dextromethorphan in combination with [quinidine] is indicated in the treatment of pseudobulbar affect.[L14363]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 21:31 | 1:15:01 | 0/1/0 | 1/0/0 | 0/0/3 | 229,065/19,519 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 5/5 | 9/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Abduljalil_2010_reference](drugs/drug_dextromethorphan/Dextromethorphan_Abduljalil2010_reference.md) | Abduljalil K et al., Assessment of activity levels for CYP2D…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2010.137](https://doi.org/10.1038/clpt.2010.137) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Bespalov_2025](drugs/drug_dextromethorphan/pd_Bespalov_2025_NR1_NR2D_receptor_blockade.md) | Bespalov A et al., Deuteration may reduce the efficacy of…, Alzheimer's research & ther… (2025) | [10.1186/s13195-025-01780-0](https://doi.org/10.1186/s13195-025-01780-0) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Dodgen_2016](drugs/drug_dextromethorphan/pgx_Dodgen_2016_CYP2D6_Q27.md) | Dodgen TM et al., Pharmacogenetic comparison of CYP2D6 pr…, The pharmacogenomics journal (2016) | [10.1038/tpj.2015.76](https://doi.org/10.1038/tpj.2015.76) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ehret_2013](drugs/drug_dextromethorphan/pgx_Ehret_2013_ABCB1_Q100.md) | Ehret GB et al., Influence of CYP2D6 activity on pre-emp…, Pain physician (2013) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ehret_2013](drugs/drug_dextromethorphan/pgx_Ehret_2013_CYP2D6_Q100.md) | Ehret GB et al., Influence of CYP2D6 activity on pre-emp…, Pain physician (2013) | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dextromethorphan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate, `CYP3A7` substrate, `UGT2B15` substrate, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| target | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | ovary | `CYP19A1` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA2 (target), CHRNA3 (target), CHRNA4 (target), CHRNA7 (target), CHRNB2 (target), CHRNB4 (target), CYBA (inhibitor), GRIN3A (target), OPRD1 (target), OPRK1 (target), OPRM1 (regulator), OPRM1 (target), PGRMC1 (binder), SIGMAR1 (target), SLC6A2 (inhibitor), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1930 matched, 135 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_47 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abduljalil_2010.pdf` | Abduljalil K et al., Assessment of activity levels for CYP2D…, Clinical pharmacology and t… (2010) | popPK | 10 | [10.1038/clpt.2010.137](https://doi.org/10.1038/clpt.2010.137) | [20881950](https://pubmed.ncbi.nlm.nih.gov/20881950) | The study is a population PK analysis of dextromethorphan reporting specific clearance values for CYP2D6 variants, but standard disposition parameters like volume of distribution and half-life are not explicitly listed in the provided text. |
| `Rüdesheim_2022.pdf` | Rüdesheim S et al., Physiologically-based pharmacokinetic m…, CPT: pharmacometrics & syst… (2022) | popPK | 10 | [10.1002/psp4.12776](https://doi.org/10.1002/psp4.12776) | [35257505](https://pubmed.ncbi.nlm.nih.gov/35257505) | The paper describes a PBPK model for dextromethorphan, but the specific numeric parameter values are not present in the provided evidence text. |
| `Moghadamnia_2003.pdf` | Moghadamnia AA et al., Physiologically based modelling of inhi…, British journal of clinical… (2003) | popPK | 9 | [10.1046/j.1365-2125.2003.01853.x](https://doi.org/10.1046/j.1365-2125.2003.01853.x) | [12848776](https://pubmed.ncbi.nlm.nih.gov/12848776) | The paper reports a physiologically based PK model for dextromethorphan with specific numeric values for intrinsic clearance and effect-site rate constant, but standard disposition parameters like total clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Corado_2017.pdf` | Corado CR et al., Pharmacokinetics of dextromethorphan an…, Drug testing and analysis (2017) | popPK | 8 | [10.1002/dta.2060](https://doi.org/10.1002/dta.2060) | [27580591](https://pubmed.ncbi.nlm.nih.gov/27580591) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, t1/2, AUC) for dextromethorphan in horses, with values explicitly present in the text. |
| `Gundeti_2024.pdf` | Gundeti M et al., Evaluating gender effect in the generic…, Biopharmaceutics & drug dis… (2024) | popPK | 8 | [10.1002/bdd.2389](https://doi.org/10.1002/bdd.2389) | [38776407](https://pubmed.ncbi.nlm.nih.gov/38776407) | The paper describes a PBPK/population PK study for dextromethorphan, but the provided evidence contains only the abstract and methodology description without any specific numeric parameter values (CL, V, etc.). |
| `Zhou_2011.pdf` | Zhou J et al., Cardiac arrest and therapeutic hypother…, Drug metabolism and disposi… (2011) | popPK | 8 | [10.1124/dmd.111.040642](https://doi.org/10.1124/dmd.111.040642) | [21868471](https://pubmed.ncbi.nlm.nih.gov/21868471) | The study reports population PK parameters for dextromethorphan (specifically V1) in rats, but the specific numeric values are not provided in the text, only statistical associations. |
| `AlRabiah_2018.pdf` | AlRabiah H et al., Effect of Naltrexone Hydrochloride on C…, European journal of drug me… (2018) | pd | 5 | [10.1007/s13318-018-0482-x](https://doi.org/10.1007/s13318-018-0482-x) | [29744741](https://www.ncbi.nlm.nih.gov/pubmed/29744741) | metadata signals extractable PD data (IC50) |
| `Li_2019.pdf` | Li Z et al., Atipamezole is a promising non-discrimi…, European journal of pharmac… (2019) | pd | 5 | [10.1016/j.ejps.2019.01.010](https://doi.org/10.1016/j.ejps.2019.01.010) | [30690186](https://www.ncbi.nlm.nih.gov/pubmed/30690186) | metadata signals extractable PD data (IC50) |
| `Tan_2021.pdf` | Tan BH et al., In vitro inhibitory effects of glucosam…, Drug metabolism and persona… (2021) | pd | 5 | [10.1515/dmpt-2020-0182](https://doi.org/10.1515/dmpt-2020-0182) | [34821124](https://www.ncbi.nlm.nih.gov/pubmed/34821124) | metadata signals extractable PD data (IC50) |
| `Cole_1989.pdf` | Cole AE et al., Selective depression of N-methyl-D-aspa…, Neuropharmacology (1989) | pd | 4 | [10.1016/0028-3908(89)90100-7](https://doi.org/10.1016/0028-3908(89)90100-7) | [2657479](https://www.ncbi.nlm.nih.gov/pubmed/2657479) | metadata signals extractable PD data (EC50) |
| `Fujimaki_2001.pdf` | Fujimaki Y et al., Nefiracetam metabolism by human liver m…, The Journal of pharmacy and… (2001) | pd | 4 | [10.1211/0022357011776144](https://doi.org/10.1211/0022357011776144) | [11428655](https://www.ncbi.nlm.nih.gov/pubmed/11428655) | metadata signals extractable PD data (sigmoid) |
| `Kerry_1994.pdf` | Kerry NL et al., The role of CYP2D6 in primary and secon…, British journal of clinical… (1994) | pd | 4 | [10.1111/j.1365-2125.1994.tb04348.x](https://doi.org/10.1111/j.1365-2125.1994.tb04348.x) | [7826826](https://www.ncbi.nlm.nih.gov/pubmed/7826826) | metadata signals extractable PD data (IC50) |
| `Mangano_1991.pdf` | Mangano TJ et al., Inhibition of K(+)-evoked [3H]D-asparta…, European journal of pharmac… (1991) | pd | 4 | [10.1016/0014-2999(91)90062-u](https://doi.org/10.1016/0014-2999(91)90062-u) | [1645678](https://www.ncbi.nlm.nih.gov/pubmed/1645678) | metadata signals extractable PD data (IC50) |
| `Vaghela_2018.pdf` | Vaghela M et al., In vitro Inhibitory Effect of Gymnema s…, European journal of drug me… (2018) | pd | 4 | [10.1007/s13318-017-0443-9](https://doi.org/10.1007/s13318-017-0443-9) | [29019074](https://www.ncbi.nlm.nih.gov/pubmed/29019074) | metadata signals extractable PD data (IC50) |
| `Antunes_2015.pdf` | Antunes MV et al., Influence of CYP2D6 and CYP3A4 Phenotyp…, Therapeutic drug monitoring (2015) | pgx | 8 | [10.1097/FTD.0000000000000212](https://doi.org/10.1097/FTD.0000000000000212) | [25853922](https://www.ncbi.nlm.nih.gov/pubmed/25853922) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Bagli_1995.pdf` | Bagli M et al., Bioequivalence and absolute bioavailabi…, International journal of cl… (1995) | pgx | 8 | not captured | [8963481](https://www.ncbi.nlm.nih.gov/pubmed/8963481) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Chow_2001.pdf` | Chow MS et al., Evaluation of CYP2D6 oxidation of dextr…, Journal of clinical pharmac… (2001) | pgx | 8 | [10.1177/00912700122009737](https://doi.org/10.1177/00912700122009737) | [11144999](https://www.ncbi.nlm.nih.gov/pubmed/11144999) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Funck-Brentano_1994.pdf` | Funck-Brentano C et al., Variable disposition kinetics and elect…, Clinical pharmacology and t… (1994) | pgx | 8 | [10.1038/clpt.1994.26](https://doi.org/10.1038/clpt.1994.26) | [8143391](https://www.ncbi.nlm.nih.gov/pubmed/8143391) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Huang_1993.pdf` | Huang ML et al., Pharmacokinetics of the novel antipsych…, Clinical pharmacology and t… (1993) | pgx | 8 | [10.1038/clpt.1993.146](https://doi.org/10.1038/clpt.1993.146) | [7690693](https://www.ncbi.nlm.nih.gov/pubmed/7690693) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Härtter_1998.pdf` | Härtter S et al., Inhibition of dextromethorphan metaboli…, Psychopharmacology (1998) | pgx | 8 | [10.1007/s002130050481](https://doi.org/10.1007/s002130050481) | [9489930](https://www.ncbi.nlm.nih.gov/pubmed/9489930) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Lagishetty_2016.pdf` | Lagishetty CV et al., How Informative Are Drug-Drug Interacti…, Journal of clinical pharmac… (2016) | pgx | 8 | [10.1002/jcph.743](https://doi.org/10.1002/jcph.743) | [27040602](https://www.ncbi.nlm.nih.gov/pubmed/27040602) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Schadel_1995.pdf` | Schadel M et al., Pharmacokinetics of dextromethorphan an…, Journal of clinical psychop… (1995) | pgx | 8 | [10.1097/00004714-199508000-00005](https://doi.org/10.1097/00004714-199508000-00005) | [7593709](https://www.ncbi.nlm.nih.gov/pubmed/7593709) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Song_2020.pdf` | Song IH et al., Effects of Maribavir on P-Glycoprotein…, Journal of clinical pharmac… (2020) | pgx | 8 | [10.1002/jcph.1504](https://doi.org/10.1002/jcph.1504) | [31385617](https://www.ncbi.nlm.nih.gov/pubmed/31385617) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Vandel_1995.pdf` | Vandel S et al., Fluvoxamine and fluoxetine: interaction…, Pharmacological research (1995) | pgx | 8 | [10.1016/1043-6618(95)80088-3](https://doi.org/10.1016/1043-6618(95)80088-3) | [8685072](https://www.ncbi.nlm.nih.gov/pubmed/8685072) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yasuda_1995.pdf` | Yasuda SU et al., Chlorpheniramine plasma concentration a…, Clinical pharmacology and t… (1995) | pgx | 8 | [10.1016/0009-9236(95)90199-X](https://doi.org/10.1016/0009-9236(95)90199-X) | [7648771](https://www.ncbi.nlm.nih.gov/pubmed/7648771) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhong_2024.pdf` | Zhong YS et al., Discovery and Enzyme Kinetic Characteri…, Chemical research in toxico… (2024) | pgx | 8 | [10.1021/acs.chemrestox.4c00298](https://doi.org/10.1021/acs.chemrestox.4c00298) | [39433447](https://www.ncbi.nlm.nih.gov/pubmed/39433447) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `van_2021.pdf` | van der Lee M et al., Substrate specificity of CYP2D6 genetic…, Pharmacogenomics (2021) | pgx | 8 | [10.2217/pgs-2021-0093](https://doi.org/10.2217/pgs-2021-0093) | [34569808](https://www.ncbi.nlm.nih.gov/pubmed/34569808) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Bansal_2023.pdf` | Bansal S et al., Evaluation of Cytochrome P450-Mediated…, Clinical pharmacology and t… (2023) | pgx | 7 | [10.1002/cpt.2973](https://doi.org/10.1002/cpt.2973) | [37313955](https://www.ncbi.nlm.nih.gov/pubmed/37313955) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Cilliers_2025.pdf` | Cilliers C et al., Clinical and Physiologically Based Phar…, Clinical pharmacology and t… (2025) | pgx | 7 | [10.1002/cpt.3506](https://doi.org/10.1002/cpt.3506) | [39587812](https://www.ncbi.nlm.nih.gov/pubmed/39587812) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Coin_2016.pdf` | Coin A et al., Donepezil plasma concentrations, CYP2D6…, European journal of clinica… (2016) | pgx | 7 | [10.1007/s00228-016-2033-1](https://doi.org/10.1007/s00228-016-2033-1) | [26952092](https://www.ncbi.nlm.nih.gov/pubmed/26952092) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Dai_2021.pdf` | Dai X et al., Napabucasin Drug-Drug Interaction Poten…, Clinical pharmacology in dr… (2021) | pgx | 7 | [10.1002/cpdd.961](https://doi.org/10.1002/cpdd.961) | [34107166](https://www.ncbi.nlm.nih.gov/pubmed/34107166) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Fleishaker_2000.pdf` | Fleishaker JC, Clinical pharmacokinetics of reboxetine…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039060-00003](https://doi.org/10.2165/00003088-200039060-00003) | [11192474](https://www.ncbi.nlm.nih.gov/pubmed/11192474) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Funck-Brentano_1991.pdf` | Funck-Brentano C et al., Influence of amiodarone on genetically…, Clinical pharmacology and t… (1991) | pgx | 7 | [10.1038/clpt.1991.135](https://doi.org/10.1038/clpt.1991.135) | [1914360](https://www.ncbi.nlm.nih.gov/pubmed/1914360) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Ge_2024.pdf` | Ge M et al., Investigation of the drug-drug interact…, Journal of ethnopharmacology (2024) | pgx | 7 | [10.1016/j.jep.2024.118212](https://doi.org/10.1016/j.jep.2024.118212) | [38636577](https://www.ncbi.nlm.nih.gov/pubmed/38636577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shi_2021.pdf` | Shi Y et al., Effects of Avitinib on CYP450 Enzyme Ac…, Drug design, development an… (2021) | pgx | 7 | [10.2147/DDDT.S323186](https://doi.org/10.2147/DDDT.S323186) | [34456561](https://www.ncbi.nlm.nih.gov/pubmed/34456561) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Shiran_2009.pdf` | Shiran MR et al., Contribution of the activities of CYP3A…, British journal of clinical… (2009) | pgx | 7 | [10.1111/j.1365-2125.2008.03312.x](https://doi.org/10.1111/j.1365-2125.2008.03312.x) | [19133059](https://www.ncbi.nlm.nih.gov/pubmed/19133059) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Tanna_2021.pdf` | Tanna RS et al., Refined Prediction of Pharmacokinetic K…, The Journal of pharmacology… (2021) | pgx | 7 | [10.1124/jpet.120.000270](https://doi.org/10.1124/jpet.120.000270) | [33093187](https://www.ncbi.nlm.nih.gov/pubmed/33093187) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Tran_2016.pdf` | Tran JQ et al., Therapeutic protein-drug interaction as…, British journal of clinical… (2016) | pgx | 7 | [10.1111/bcp.12936](https://doi.org/10.1111/bcp.12936) | [26991517](https://www.ncbi.nlm.nih.gov/pubmed/26991517) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Walzer_2012.pdf` | Walzer M et al., Pharmacokinetic drug interactions betwe…, Pharmacotherapy (2012) | pgx | 7 | [10.1002/j.1875-9114.2012.01028.x](https://doi.org/10.1002/j.1875-9114.2012.01028.x) | [22422635](https://www.ncbi.nlm.nih.gov/pubmed/22422635) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `ter_2014.pdf` | ter Heine R et al., Population pharmacokinetic modelling to…, British journal of clinical… (2014) | pgx | 7 | [10.1111/bcp.12388](https://doi.org/10.1111/bcp.12388) | [24697814](https://www.ncbi.nlm.nih.gov/pubmed/24697814) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Gaedigk_2017.pdf` | Gaedigk A et al., In vivo characterization of CYP2D6*12,…, Pharmacogenomics (2017) | pgx | 5 | [10.2217/pgs-2016-0192](https://doi.org/10.2217/pgs-2016-0192) | [28290770](https://www.ncbi.nlm.nih.gov/pubmed/28290770) | metadata signals extractable PGX data (CYP2D6*12) |
| `Jacqz-Aigrain_1992.pdf` | Jacqz-Aigrain E et al., Cytochrome P450-dependent metabolism of…, Developmental pharmacology… (1992) | pgx | 5 | not captured | [1306804](https://www.ncbi.nlm.nih.gov/pubmed/1306804) | metadata signals extractable PGX data (CYP2D6) |
| `Kim_2017.pdf` | Kim EY et al., Prediction and visualization of CYP2D6…, Translational and clinical… (2017) | pgx | 5 | [10.12793/tcp.2017.25.3.147](https://doi.org/10.12793/tcp.2017.25.3.147) | [32095466](https://www.ncbi.nlm.nih.gov/pubmed/32095466) | metadata signals extractable PGX data (CYP2D6) |
| `Montané_2018.pdf` | Montané Jaime LK et al., Impact of CYP2D6 on venlafaxine metabol…, Pharmacogenomics (2018) | pgx | 5 | [10.2217/pgs-2017-0142](https://doi.org/10.2217/pgs-2017-0142) | [29327975](https://www.ncbi.nlm.nih.gov/pubmed/29327975) | metadata signals extractable PGX data (CYP2D6) |
| `Vandel_2004.pdf` | Vandel P et al., Clomipramine, fluoxetine and CYP2D6 met…, Human psychopharmacology (2004) | pgx | 5 | [10.1002/hup.598](https://doi.org/10.1002/hup.598) | [15252821](https://www.ncbi.nlm.nih.gov/pubmed/15252821) | metadata signals extractable PGX data (CYP2D6) |
| `Wadelius_1997.pdf` | Wadelius M et al., Induction of CYP2D6 in pregnancy, Clinical pharmacology and t… (1997) | pgx | 5 | [10.1016/S0009-9236(97)90118-1](https://doi.org/10.1016/S0009-9236(97)90118-1) | [9357391](https://www.ncbi.nlm.nih.gov/pubmed/9357391) | metadata signals extractable PGX data (CYP2D6) |
| `Zhao_2024.pdf` | Zhao Y et al., Effect of isotretinoin on CYP2D6 and CY…, British journal of clinical… (2024) | pgx | 5 | [10.1111/bcp.15938](https://doi.org/10.1111/bcp.15938) | [37864393](https://www.ncbi.nlm.nih.gov/pubmed/37864393) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-23T21:12:01.590485+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | AlRabiah_2018 | not_relevant | 0 | 0 | The paper investigates the effect of naltrexone on CYP450 enzyme activity in human liver microsomes and does not report any pharmacodynamic or exposure-response data for dextromethorphan. |
| PGx | Albassam_2021 | not_relevant | 0 | 0 | The study investigates the in vitro inhibitory effect of pterostilbene on CYP enzymes using dextromethorphan as a substrate, but does not report any pharmacogenomic effects (gene variants/genotypes) on dextromethorphan PK/PD. |
| PGx | Antunes_2015 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of tamoxifen metabolism, using dextromethorphan only as a probe drug for CYP2D6 phenotyping rather than as the primary drug of interest. |
| PGx | Bagli_1995 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of levomepromazine, not dextromethorphan, and concludes that levomepromazine is not significantly metabolized by CYP2D6. |
| popPK | Bansal_2023 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PGx | Bansal_2023 | not_relevant | 0 | 0 | The paper focuses on cannabinoid-drug interactions and does not report pharmacogenomic effects on dextromethorphan. |
| PGx | Baumann_1992 | not_relevant | 2 | 0 | The study investigates the effect of co-administered drugs (amitriptyline/thioridazine) on dextromethorphan metabolism, not the effect of a specific gene variant/genotype on a PK/PD parameter. |
| popPK | Berman_1999 | irrelevant | 0 | 0 | The paper is an in-vitro neurotoxicity study where dextromethorphan is used only as a mechanistic NMDA receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Berman_1999 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for brevetoxins, not dextromethorphan; dextromethorphan is only mentioned qualitatively as a neuroprotective agent. |
| popPK | Cilliers_2025 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PGx | Cilliers_2025 | not_relevant | 0 | 0 | The paper focuses on adagrasib drug-drug interactions, not dextromethorphan pharmacogenomics. |
| PD | Clark_2023 | not_relevant | 0 | 0 | The paper is a review of bupropion and does not report any pharmacodynamic or exposure-response data for dextromethorphan. |
| PGx | Coin_2016 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of donepezil, using dextromethorphan only as a probe drug to phenotype CYP2D6, rather than reporting a pharmacogenomic effect on dextromethorphan's own PK/PD parameters. |
| popPK | Cole_1989 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) affecting metabolic ratios, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PD | Cui_2022 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism and subtype selectivity of Gefapixant (a P2X3 inhibitor) and does not report any pharmacodynamic or exposure-response data for dextromethorphan. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (napabucasin affecting dextromethorphan PK) in a general healthy population, not a pharmacogenomic effect based on gene variants or genotypes. |
| PD | DeBattista_2024 | not_relevant | 1 | 0 | The text is a qualitative review of psychotropic drugs that mentions dextromethorphan's mechanism and dosing in Auvelity but provides no numeric PD parameters, concentration-effect curves, or quantitative exposure-response analysis. |
| popPK | DeCoster_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroprotection in rat neuronal cultures, not a pharmacokinetic study, and reports no disposition parameters for dextromethorphan. |
| PD | Delaporte_2001 | not_relevant | 0 | 0 | The paper describes an in vitro enzyme inhibition assay (CYP2D6) using dextromethorphan as a substrate, reporting enzyme kinetics (Vmax, Km) and inhibitor IC50s, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug itself in a biological system. |
| popPK | Ehret_2013 | relevant | 10 | 2 | The paper describes a population PK model for dextromethorphan, but the specific numeric parameter estimates are located in Table 2, which is not included in the provided evidence. |
| PGx | Ferri_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (esmethadone inhibiting CYP2D6) affecting dextromethorphan PK, but does not report a pharmacogenomic effect (gene variant/genotype) on dextromethorphan. |
| popPK | Fleishaker_2000 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of reboxetine, not dextromethorphan. |
| popPK | Fujimaki_2001 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Fujimaki_2001 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of nefiracetam and does not contain any pharmacodynamic or exposure-response data for dextromethorphan. |
| PGx | Funck-Brentano_1991 | not_relevant | 0 | 0 | The study investigates the effect of amiodarone (a drug-drug interaction) on dextromethorphan metabolism, not the effect of a genetic variant on the drug's PK/PD parameters. |
| PGx | Funck-Brentano_1994 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of flecainide, not dextromethorphan; dextromethorphan is only used as a probe drug to determine CYP2D6 phenotype. |
| PGx | Ge_2024 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between herbal extracts in rats, not the effect of a specific gene variant on dextromethorphan pharmacokinetics. |
| popPK | Giron_1991 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of dextromethorphan on exercise performance and dyspnea in COPD patients, with no pharmacokinetic parameters reported. |
| PD | Giron_1991 | not_relevant | 1 | 0 | The study reports a lack of effect for a single fixed dose (60 mg) compared to placebo without measuring plasma concentrations or fitting a dose-response curve, providing no extractable PD parameters. |
| popPK | Gundeti_2024 | relevant | 8 | 0 | The paper describes a PBPK/population PK study for dextromethorphan, but the provided evidence contains only the abstract and methodology description without any specific numeric parameter values (CL, V, etc.). |
| popPK | Henthorn_1989 | irrelevant | 0 | 0 | The study focuses on alfentanil pharmacokinetics, using dextromethorphan only as a diagnostic probe for CYP2D6 phenotype without reporting its quantitative disposition parameters. |
| PGx | Heykants_1994 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on risperidone, not dextromethorphan. |
| PD | Howland_2015 | not_relevant | 1 | 0 | The text is a general review of deuterated drugs that mentions dextromethorphan only as an example of a drug where deuteration affects PK rather than PD, without providing any specific numeric PD parameters or exposure-response data. |
| PGx | Huang_1993 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of risperidone, not dextromethorphan; dextromethorphan is only used to phenotype CYP2D6 status. |
| PGx | Härtter_1998 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (moclobemide inhibiting CYP2D6) in a specific genotype group (EMs), not the effect of the gene variant itself on PK parameters. |
| popPK | Ishibashi_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of receptor binding and current inhibition, reporting no pharmacokinetic disposition parameters. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper describes a structural molecular template for CYP2D6 substrates and does not report pharmacogenomic effects on PK or PD parameters. |
| PD | Ji_2025 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for analogs and qualitative in vivo behavioral effects, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for dextromethorphan. |
| PGx | Kazis_1996 | not_relevant | 4 | 2 | The paper mentions genetic polymorphism as a cause of variability but does not report specific genotype-stratified PK parameters or fitted effect sizes. |
| PD | Keita_2022 | not_relevant | 3 | 5 | The paper reports in vitro IC50 values for dextromethorphan and its derivatives against Plasmodium falciparum, which are static potency metrics rather than a dynamic pharmacodynamic (exposure-response) model or curve with parameters like Emax or EC50 in a PK/PD context. |
| PD | Kerry_1994 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP2D6 metabolism and does not report any pharmacodynamic or exposure-response relationships for dextromethorphan. |
| PD | Kukanich_2004 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic parameters and qualitative observations of adverse effects (rigidity, ataxia) without any quantitative concentration-effect or dose-response analysis. |
| PGx | Köppel_1989 | not_relevant | 0 | 0 | The paper studies the metabolism of ajmaline, not dextromethorphan, although it mentions dextromethorphan phenotype only to suggest co-segregation of metabolic pathways. |
| PGx | Lagishetty_2016 | not_relevant | 5 | 2 | The paper discusses dextromethorphan as a model substrate for CYP2D6 in a general framework comparing DDIs and GDIs, but does not report specific quantitative pharmacokinetic or pharmacodynamic effect sizes for dextromethorphan. |
| PGx | Larrey_1989 | not_relevant | 2 | 5 | The study reports that dextromethorphan pharmacokinetic parameters (metabolic ratio) are similar between patients and controls, finding no association with hepatotoxicity or genotype-driven differences in the patient group. |
| PD | Laurent-Kenesi_1993 | not_relevant | 0 | 0 | The paper studies metoprolol and nicardipine; dextromethorphan is used only as a CYP2D6 phenotyping probe and no PD parameters for dextromethorphan are reported. |
| PGx | Le_1993 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of CYP2D6 by anticancer drugs) in liver microsomes, not the effect of a specific gene variant/genotype on dextromethorphan PK/PD parameters. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on the metabolic inhibition of diclofenac by atipamezole and does not report any pharmacodynamic or exposure-response data for dextromethorphan. |
| PD | Li_2022 | not_relevant | 1 | 0 | The paper compares the antitussive effect of Fru-Asp to dextromethorphan at a single dose but does not report a dose-response curve or numeric PD parameters for dextromethorphan. |
| popPK | Liu_2004 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters for the metabolite dextrorphan, not the parent drug dextromethorphan. |
| popPK | Magalhães_2016 | relevant | 5 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for dextromethorphan in rats, but the specific numeric values are contained in Table 1 which is not fully provided in the evidence (only fragments and footnotes are visible). |
| PGx | Magalhães_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in rats using the CEIBA cocktail and does not report pharmacogenomic effects of gene variants on dextromethorphan PK/PD. |
| PGx | Majhi_2024 | not_relevant | 0 | 0 | The study investigates the effect of a herbal extract (Tinospora cordifolia) on dextromethorphan pharmacokinetics, not the effect of a gene variant or genotype. |
| PD | Mikus_1991 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, Ki) for codeine metabolism and dextromethorphan inhibition, but does not report any pharmacodynamic (exposure-response or dose-response) relationship for dextromethorphan itself. |
| popPK | Moghadamnia_2003 | relevant | 9 | 4 | The paper reports a physiologically based PK model for dextromethorphan with specific numeric values for intrinsic clearance and effect-site rate constant, but standard disposition parameters like total clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| PGx | Montané_2018 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of venlafaxine, using dextromethorphan only as a phenotyping probe, and does not report PK/PD parameters for dextromethorphan itself. |
| PGx | Murray_2019 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (CYP2D6 inhibition by sorafenib metabolite) in vitro, not the effect of a genetic variant on dextromethorphan PK/PD. |
| PGx | Nagai_1996 | not_relevant | 5 | 5 | The paper reports phenotyping (metabolic ratios) and identifies a poor metabolizer, but does not report specific gene variants/genotypes or fitted pharmacokinetic parameter differences (e.g., AUC, CL) associated with those genotypes. |
| popPK | Pubill_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor interactions and noradrenaline uptake in rat vas deferens, not a pharmacokinetic study, and reports no disposition parameters for dextromethorphan. |
| PGx | Rodríguez-Morató_2017 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of tyrosol to hydroxytyrosol; dextromethorphan is only used as a probe substrate for CYP2D6 activity in the methods, not as the primary drug of interest for pharmacogenomic analysis. |
| popPK | Rüdesheim_2022 | relevant | 10 | 0 | The paper describes a PBPK model for dextromethorphan, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Shaibani_2012 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for diabetic neuropathic pain and does not report any pharmacokinetic parameters for dextromethorphan. |
| popPK | Shi_2021 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PGx | Shi_2021 | not_relevant | 0 | 0 | The paper studies the effects of Avitinib on CYP450 enzymes in rats and does not mention dextromethorphan or human pharmacogenomics. |
| popPK | Shiran_2009 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PGx | Shiran_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of methadone, not dextromethorphan. |
| popPK | Shram_2023 | irrelevant | 0 | 0 | The study focuses on the abuse potential of esmethadone, with dextromethorphan serving only as an exploratory comparator for subjective effects, and no quantitative PK parameters for dextromethorphan are reported in the text. |
| PD | Shram_2023 | not_relevant | 0 | 0 | The paper focuses on esmethadone; dextromethorphan is only an exploratory comparator in a single-dose abuse potential study with no PK/PD modeling or dose-response analysis for dextromethorphan. |
| popPK | Song_2020 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PGx | Song_2020 | not_relevant | 0 | 0 | The paper investigates the effects of maribavir on P-gp and CYP2D6, not the pharmacogenomic effects of dextromethorphan. |
| PGx | Subramanian_2009 | not_relevant | 0 | 0 | The paper reports that CYP2C9 co-incubation had no effect on CYP2D6-mediated dextromethorphan metabolism, and it does not report any pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| PGx | Sun_2022 | not_relevant | 2 | 0 | The paper is a molecular docking study describing binding modes and regioselectivity mechanisms, not a clinical or in-vitro study reporting changes in PK/PD parameters based on genotype. |
| PD | Tan_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50/Ki) of CYP2D6 by antiarthritic compounds, not a pharmacodynamic exposure-response or dose-response relationship for dextromethorphan itself. |
| PGx | Tanna_2021 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic drug-drug interactions involving kratom alkaloids and does not report any pharmacogenomic effects (gene variants) on dextromethorphan. |
| popPK | Tran_2016 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Tran_2016 | not_relevant | 0 | 0 | The paper focuses on daclizumab in multiple sclerosis and does not mention dextromethorphan or its pharmacogenomics. |
| PD | Vaghela_2018 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP450 inhibition by Gymnema sylvestre and does not report any pharmacodynamic or exposure-response data for dextromethorphan. |
| PGx | Vandel_1995 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (SSRIs inhibiting CYP2D6) rather than the effect of a specific gene variant or genotype on dextromethorphan pharmacokinetics. |
| PGx | Vandel_2004 | not_relevant | 2 | 5 | The study investigates the effect of co-administered drugs (fluoxetine/clomipramine) on CYP2D6 activity, not the effect of a genetic variant on dextromethorphan PK. |
| PD | Vearrier_2021 | not_relevant | 1 | 0 | The text is a general review of opioid pharmacology and toxicity that mentions dextromethorphan only in the context of abuse potential, without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Walzer_2012 | irrelevant | 1 | 0 | Dextromethorphan is used only as a CYP2D6 probe substrate to assess clobazam's inhibitory effect, and no standalone quantitative PK parameters (CL, V, ka) for dextromethorphan are reported. |
| PGx | Walzer_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (clobazam inhibiting CYP2D6) affecting dextromethorphan PK, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (vonoprazan inhibiting CYP2D6) affecting dextromethorphan PK, but does not report pharmacogenomic effects (gene variants/genotypes) on dextromethorphan. |
| PD | Willett_2024 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical trial outcomes (MADRS/CGI-S scores) without reporting any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect data. |
| PGx | Yasuda_1995 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of chlorpheniramine, not dextromethorphan. |
| PD | Zhan_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (Ki, IC50) of vortioxetine on CYP450 enzymes, not a pharmacodynamic exposure-response or dose-response relationship for dextromethorphan. |
| PD | Zhang_2004 | not_relevant | 1 | 0 | The study reports a qualitative neuroprotective effect at a single fixed dose (10 mg/kg) and mechanistic insights regarding NADPH oxidase, but it does not provide a dose-response curve, concentration-effect data, or any numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zhao_2024 | not_relevant | 0 | 0 | The study investigates the effect of a drug (isotretinoin) on dextromethorphan metabolism, not the effect of a genetic variant on dextromethorphan pharmacokinetics. |
| popPK | Zhou_2011 | relevant | 8 | 2 | The study reports population PK parameters for dextromethorphan (specifically V1) in rats, but the specific numeric values are not provided in the text, only statistical associations. |
| popPK | ter_2014 | irrelevant | 2 | 0 | Dextromethorphan is used only as a phenotypic probe for CYP2D6/CYP3A to assess tamoxifen pharmacokinetics, and no quantitative PK parameter values for dextromethorphan are provided in the evidence. |
| PGx | ter_2014 | not_relevant | 0 | 0 | The paper uses dextromethorphan as a probe to phenotype CYP enzymes for the purpose of modeling tamoxifen pharmacokinetics, rather than reporting pharmacogenomic effects on dextromethorphan's own PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 21:12 UTC</sub>
