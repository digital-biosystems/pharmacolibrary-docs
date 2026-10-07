<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;clonazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonazepam_Kruizinga2022_reference&quot;,&quot;label&quot;:&quot;Kruizinga_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clonazepam

- **generic name:** clonazepam
- **ATC codes:** `N03AE01`
- **DrugBank:** [DB01068](https://go.drugbank.com/drugs/DB01068) · **PubChem:** [CID 2802](https://pubchem.ncbi.nlm.nih.gov/compound/2802)
- **molar mass:** 315.711 g/mol (C15H10ClN3O3) — DrugBank
- **groups:** approved, illicit, investigational

## About

Clonazepam is a benzodiazepine anticonvulsant used to treat epilepsy, including myoclonic and childhood absence epilepsy, as well as panic disorder, anxiety, insomnia, and restless legs syndrome. It is an approved medicine used widely in clinical practice, though it carries a boxed warning and also has investigational and illicit uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407988](https://www.wikidata.org/wiki/Q407988) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clonazepam | parent | 315.711 | C15H10ClN3O3 | DrugBank | [2802](https://pubchem.ncbi.nlm.nih.gov/compound/2802) | Hampton_2024, Kruizinga_2022, Yukawa_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:38 | 2:48 | 1/3/1 | 1/0/0 | 0/0/3 | 146,911/10,190 | einfracz / qwen3.8-27b | 10 | 3/7 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kruizinga_2022_reference](drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 6 | Kruizinga MD et al., Population pharmacokinetics of clonazep…, British journal of clinical… (2022) | [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Hampton_2024_reference](drugs/drug_clonazepam/Clonazepam_Hampton2024_reference.md) | — | 1-compartment (no model) | 3 | Hampton CE et al., Pharmacokinetics of oral clonazepam in…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13451](https://doi.org/10.1111/jvp.13451) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yukawa_2001_reference](drugs/drug_clonazepam/Clonazepam_Yukawa2001_reference.md) | — | 1-compartment (no model) | 0 | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical psychop… (2001) | [10.1097/00004714-200112000-00008](https://doi.org/10.1097/00004714-200112000-00008) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yukawa_2002_reference](drugs/drug_clonazepam/Clonazepam_Yukawa2002_reference.md) | — | 1-compartment (no model) | 0 | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical pharmac… (2002) | [10.1177/0091270002042001009](https://doi.org/10.1177/0091270002042001009) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2018_reference](drugs/drug_clonazepam/Clonazepam_van2018_reference.md) | — | 1-compartment (no model) | 0 | van Dijkman SC et al., Pharmacokinetic interactions and dosing…, British journal of clinical… (2018) | [10.1111/bcp.13400](https://doi.org/10.1111/bcp.13400) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [dos_2009_DSST](drugs/drug_clonazepam/pd_dos_2009_DSST.md) | Digit Symbol Substitution Test ← clonazepam · direct sigmoid Emax (Hill) effect | — | dos Santos FM et al., Pharmacokinetic/pharmacodynamic modelin…, Therapeutic drug monitoring (2009) | [10.1097/FTD.0b013e3181b1dd76](https://doi.org/10.1097/FTD.0b013e3181b1dd76) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q34` · Css | metabolism | [Tóth_2016](drugs/drug_clonazepam/pgx_T_th_2016_CYP3A4_Q34.md) | Tóth K et al., Optimization of Clonazepam Therapy Adju…, The international journal o… (2016) | [10.1093/ijnp/pyw083](https://doi.org/10.1093/ijnp/pyw083) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Tóth_2016](drugs/drug_clonazepam/pgx_T_th_2016_CYP3A5_Q100.md) | Tóth K et al., Optimization of Clonazepam Therapy Adju…, The international journal o… (2016) | [10.1093/ijnp/pyw083](https://doi.org/10.1093/ijnp/pyw083) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **NAT2** | `Q22` · CL | metabolism | [Tóth_2016](drugs/drug_clonazepam/pgx_T_th_2016_NAT2_Q22.md) | Tóth K et al., Optimization of Clonazepam Therapy Adju…, The international journal o… (2016) | [10.1093/ijnp/pyw083](https://doi.org/10.1093/ijnp/pyw083) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clonazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` unknown | paper PGx gene |
| metabolism | liver | `CYP2E1` inhibitor, `CYP3A4` metabolism/substrate, `CYP3A5` unknown, `NAT2` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism/substrate, `CYP3A5` unknown, `NAT2` metabolism/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), NR1I2 (partial agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 93 matched, 60 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hampton_2024.pdf` | Hampton CE et al., Pharmacokinetics of oral clonazepam in…, Journal of veterinary pharm… (2024) | popPK | 10 | [10.1111/jvp.13451](https://doi.org/10.1111/jvp.13451) | [38706125](https://pubmed.ncbi.nlm.nih.gov/38706125) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, t1/2, MRT, Vd) for clonazepam in pigs, and the numeric values are explicitly provided in the text. |
| `Yukawa_2001.pdf` | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical psychop… (2001) | popPK | 10 | [10.1097/00004714-200112000-00008](https://doi.org/10.1097/00004714-200112000-00008) | [11763006](https://pubmed.ncbi.nlm.nih.gov/11763006) | The evidence contains explicit quantitative parameters for a population PK model of clonazepam clearance, including the equation and specific coefficient values. |
| `Yukawa_2002.pdf` | Yukawa E et al., Pharmacoepidemiologic investigation of…, Journal of clinical pharmac… (2002) | popPK | 10 | [10.1177/0091270002042001009](https://doi.org/10.1177/0091270002042001009) | [11808828](https://pubmed.ncbi.nlm.nih.gov/11808828) | The paper presents a population pharmacokinetic model for clonazepam with explicit numeric parameters for clearance (CL) and drug interaction factors in the evidence provided. |
| `dos_2009.pdf` | dos Santos FM et al., Pharmacokinetic/pharmacodynamic modelin…, Therapeutic drug monitoring (2009) | popPK | 9 | [10.1097/FTD.0b013e3181b1dd76](https://doi.org/10.1097/FTD.0b013e3181b1dd76) | [19730280](https://pubmed.ncbi.nlm.nih.gov/19730280) | The study describes a population PK/PD model for clonazepam in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| `Klein_1994.pdf` | Klein RL et al., Benzodiazepine treatment causes uncoupl…, Journal of neurochemistry (1994) | pd | 5 | [10.1046/j.1471-4159.1994.63062349.x](https://doi.org/10.1046/j.1471-4159.1994.63062349.x) | [7964756](https://www.ncbi.nlm.nih.gov/pubmed/7964756) | metadata signals extractable PD data (EC50) |
| `Louiset_2000.pdf` | Louiset E et al., Subunit composition and pharmacological…, Endocrinology (2000) | pd | 5 | [10.1210/endo.141.3.7397](https://doi.org/10.1210/endo.141.3.7397) | [10698184](https://www.ncbi.nlm.nih.gov/pubmed/10698184) | metadata signals extractable PD data (EC50) |
| `McEachern_1988.pdf` | McEachern AE et al., Benzodiazepine interactions with GABAA…, Molecular pharmacology (1988) | pd | 4 | not captured | [2842652](https://www.ncbi.nlm.nih.gov/pubmed/2842652) | metadata signals extractable PD data (EC50) |
| `Forget_2008.pdf` | Forget P et al., Life-threatening dextromethorphan intox…, Journal of pain and symptom… (2008) | pgx | 8 | [10.1016/j.jpainsymman.2007.09.006](https://doi.org/10.1016/j.jpainsymman.2007.09.006) | [18359183](https://www.ncbi.nlm.nih.gov/pubmed/18359183) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kadono_2010.pdf` | Kadono K et al., Quantitative prediction of intestinal m…, Drug metabolism and disposi… (2010) | pgx | 7 | [10.1124/dmd.109.029322](https://doi.org/10.1124/dmd.109.029322) | [20354105](https://www.ncbi.nlm.nih.gov/pubmed/20354105) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ogawa_2013.pdf` | Ogawa K et al., A new approach to predicting human hepa…, Xenobiotica; the fate of fo… (2013) | pgx | 7 | [10.3109/00498254.2012.733831](https://doi.org/10.3109/00498254.2012.733831) | [23153054](https://www.ncbi.nlm.nih.gov/pubmed/23153054) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klieber_2015.pdf` | Klieber M et al., CYP2C19 Phenoconversion by Routinely Pr…, The Journal of pharmacology… (2015) | pgx | 5 | [10.1124/jpet.115.225680](https://doi.org/10.1124/jpet.115.225680) | [26159874](https://www.ncbi.nlm.nih.gov/pubmed/26159874) | metadata signals extractable PGX data (CYP2C19) |
| `Modak_2016.pdf` | Modak AS et al., The effect of proton pump inhibitors on…, Journal of breath research (2016) | pgx | 5 | [10.1088/1752-7163/10/4/046017](https://doi.org/10.1088/1752-7163/10/4/046017) | [27991432](https://www.ncbi.nlm.nih.gov/pubmed/27991432) | metadata signals extractable PGX data (CYP2C19) |
| `Olivera_2007.pdf` | Olivera M et al., Effect of common NAT2 variant alleles i…, Drug metabolism letters (2007) | pgx | 5 | [10.2174/187231207779814283](https://doi.org/10.2174/187231207779814283) | [19356010](https://www.ncbi.nlm.nih.gov/pubmed/19356010) | metadata signals extractable PGX data (NAT2) |
| `Pesce_2025.pdf` | Pesce AJ et al., CYP450-based reclassification of urinar…, Journal of opioid management (2025) | pgx | 5 | [10.5055/jom.1001](https://doi.org/10.5055/jom.1001) | [42429026](https://www.ncbi.nlm.nih.gov/pubmed/42429026) | metadata signals extractable PGX data (CYP450) |

<sub>queue written 2026-10-07T07:36:09.877943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2022 | not_relevant | 0 | 0 | The paper reports the prescription rates of psychotropic drugs (including clonazepam) to patients with autism but does not report any pharmacogenomic effect on a PK or PD parameter for clonazepam or any other drug. |
| popPK | Bae_2016 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of topiramate, with clonazepam mentioned only as a covariate for co-medication. |
| popPK | Besson_2015 | irrelevant | 0 | 0 | The study is primarily a pharmacodynamic investigation of antihyperalgesia and sedation, and no quantitative pharmacokinetic parameters (CL, V, ka, half-life) for clonazepam are reported in the provided evidence. |
| popPK | Bond_1985 | irrelevant | 0 | 0 | The study focuses on in vitro receptor binding affinity (Kd) of diazepam on granulocytes, not the pharmacokinetic disposition parameters (CL, V, T1/2) of clonazepam. |
| PD | Bond_1985 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (Ki, KD, Bmax) for clonazepam, which is a pharmacological binding parameter, not a pharmacodynamic exposure-response or dose-response relationship for a physiological effect. |
| PGx | Cerveny_2006 | not_relevant | 0 | 0 | The study investigates BCRP transporter interactions in cell lines and finds no interaction, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Charasson_2002 | not_relevant | 0 | 0 | The paper studies drug-drug interactions involving irinotecan metabolism in microsomes; clonazepam is merely a co-substrate used to test UGT/CYP activity, and no pharmacogenomic effect on clonazepam PK/PD is reported. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 induction/inhibition, not pharmacogenomic genetic variants affecting clonazepam PK/PD. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) affecting urinary metabolic ratios, not pharmacogenomic variants/genotypes. |
| PGx | Forget_2008 | not_relevant | 0 | 0 | The paper focuses on dextromethorphan PK/PD effects in a CYP2D6 poor metabolizer; clonazepam is only mentioned as a background medication and no pharmacogenomic effect on clonazepam is reported. |
| PGx | Glue_1997 | not_relevant | 0 | 0 | The paper describes drug-drug interactions involving felbamate and explicitly states there were no clinically relevant pharmacokinetic interactions with clonazepam; it does not discuss genetic variants affecting clonazepam. |
| PGx | Ho_2019 | not_relevant | 5 | 5 | The paper describes a single case report of prolonged withdrawal symptoms linked to NAT2 genotype but does not report quantified changes in specific PK or PD parameters (e.g., Cmax, AUC, ED50). |
| popPK | Hoogerkamp_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic concentration-effect relationships in rats rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for clonazepam. |
| PGx | Kadono_2010 | not_relevant | 0 | 0 | The paper focuses on a general physiological model for predicting intestinal availability in humans and does not report any specific pharmacogenomic gene variants or their effects on clonazepam PK/PD. |
| popPK | Kecskeméti_2005 | irrelevant | 0 | 0 | Clonazepam is used only as a positive control in a pharmacological study of norfluoxetine and fluoxetine, with no PK parameters reported. |
| PD | Kecskeméti_2005 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for fluoxetine and norfluoxetine, but only provides qualitative/relative efficacy data for clonazepam without numeric concentration-effect parameters. |
| PGx | Kelly_2002 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between ritonavir/indinavir and risperidone, not a pharmacogenomic effect on clonazepam. |
| popPK | Klein_1994 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Klein_1994 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of benzodiazepine action (uncoupling of GABAA receptors) in transfected cells and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for clonazepam in a biological system. |
| PGx | Klieber_2015 | not_relevant | 1 | 0 | The paper discusses CYP2C19 phenoconversion using pantoprazole as a probe and mentions clonazepam only as an example of a drug metabolized by the enzyme, providing no pharmacokinetic or pharmacodynamic data for clonazepam. |
| popPK | Louiset_2000 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Louiset_2000 | not_relevant | 0 | 0 | The paper focuses on GABA-A receptor subunits in frog pituitary cells and does not mention clonazepam or report any pharmacodynamic parameters for it. |
| PGx | Lubet_1992 | not_relevant | 1 | 0 | The paper focuses on phenobarbital-induced enzyme expression (CYP2B1) and mentions clonazepam only as a secondary inducer to demonstrate the genetic model's insensitivity, without reporting pharmacokinetic or pharmacodynamic parameters of clonazepam itself. |
| PGx | Luszczki_2005 | not_relevant | 0 | 0 | The study focuses on pharmacodynamic interactions between vigabatrin and other antiepileptics (including clonazepam) in mice, with no mention of gene variants or genotypes. |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The study evaluates the effect of perampanel on the clearance of clonazepam but does not report pharmacogenomic effects based on gene variants. |
| PGx | Marvanova_2019 | not_relevant | 0 | 0 | The paper reports a case of food aversion induced by perampanel and does not analyze gene variants or their effects on pharmacokinetic or pharmacodynamic parameters of clonazepam. |
| popPK | McEachern_1988 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | McEachern_1988 | not_relevant | 0 | 0 | The paper studies benzodiazepine interactions with GABAA receptors in chick neurons and does not report pharmacodynamic or exposure-response data for clonazepam. |
| popPK | Mehta_1992 | irrelevant | 0 | 0 | This is an in vitro receptor binding study using clonazepam only as a ligand, containing no pharmacokinetic disposition parameters. |
| PD | Mehta_1992 | not_relevant | 3 | 2 | The paper reports receptor binding parameters (Kd, Bmax) and GABA EC50, but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for clonazepam itself. |
| PGx | Modak_2016 | not_relevant | 0 | 0 | The paper focuses on CYP2C19 activity changes in GERD patients due to PPIs; clonazepam is only mentioned as an example of a drug metabolized by CYP2C19. |
| popPK | Nakashima_2015 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics and pharmacodynamics of valproic acid (VPA), with clonazepam mentioned only as a co-administered antiepileptic drug that affects VPA clearance or seizure reduction probability. |
| PGx | Nakashima_2015 | not_relevant | 0 | 0 | The study focuses on valproic acid; clonazepam is included only as a covariate for drug-drug interactions, and no pharmacogenomic effects on clonazepam are reported. |
| PGx | Ogawa_2013 | not_relevant | 0 | 0 | The paper describes a cross-species extrapolation method for predicting human clearance using monkey data, but does not report pharmacogenomic effects or genotype-based variations in PK parameters for clonazepam. |
| PGx | Park_2023 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between rifampin and psychiatric medications, not a pharmacogenomic effect involving a gene variant. |
| PGx | Pesce_2025 | not_relevant | 0 | 0 | The paper reports reference intervals for urinary metabolic ratios but does not report specific genotype-to-phenotype effects or pharmacokinetic parameters for clonazepam. |
| PGx | Pesce_2025_2 | not_relevant | 2 | 5 | The paper focuses on reclassifying urine drug testing (UDT) metabolic ratio cutoffs rather than reporting specific pharmacokinetic or pharmacodynamic parameter changes for clonazepam in relation to genotype. |
| popPK | Rui_1995 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for phenytoin, while clonazepam is only mentioned as a co-administered drug affecting phenytoin clearance. |
| popPK | Schönrock_1993 | irrelevant | 0 | 0 | This is an in vitro electrophysiological study of GABA receptors where clonazepam is used only as a pharmacological tool, not a PK study. |
| PD | Schönrock_1993 | not_relevant | 1 | 0 | The paper reports qualitative differences in benzodiazepine sensitivity (clonazepam) between receptor subtypes but does not provide numeric dose-response parameters (EC50, Emax) or concentration-effect curves for clonazepam. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The text discusses drug-drug interactions affecting carbamazepine and clonazepam metabolism, but does not report pharmacogenomic effects based on gene variants. |
| PGx | Tanwir_2022 | not_relevant | 0 | 0 | The text is a case report describing a drug-drug interaction (Cannabidiol/Tiagabine) or adverse effect, with no mention of pharmacogenomic factors affecting clonazepam PK/PD. |
| popPK | Uges_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levetiracetam, with clonazepam only mentioned as part of the standard treatment protocol for status epilepticus. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | The study investigates CYP enzyme induction by benzodiazepines but does not assess pharmacogenomic effects of genetic variants on clonazepam's PK or PD parameters. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenytoin, with clonazepam only serving as a co-administered drug. |
| PGx | Xiao_2026 | not_relevant | 1 | 1 | The paper reports a pharmacovigilance signal for severe cutaneous adverse reactions associated with clonazepam but does not report any gene-specific effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper describes the genetic diagnosis of Lesch-Nyhan syndrome and clinical outcomes, but does not report any pharmacokinetic or pharmacodynamic changes of clonazepam associated with a specific gene variant or genotype. |
| popPK | dos_2009 | relevant | 9 | 2 | The study describes a population PK/PD model for clonazepam in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:36 UTC</sub>
