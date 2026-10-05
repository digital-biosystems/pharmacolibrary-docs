<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;valsartan&quot;}]"></div>

# valsartan

- **generic name:** valsartan
- **ATC codes:** `C09CA03`, `C09DA03`, `C09DB01`, `C09DB08`, `C09DX02`, `C09DX04`, `C09DX05`, `C10BX10`
- **DrugBank:** [DB00177](https://go.drugbank.com/drugs/DB00177) · **PubChem:** [CID 60846](https://pubchem.ncbi.nlm.nih.gov/compound/60846)
- **molar mass:** 435.5188 g/mol (C24H29N5O3) — DrugBank
- **groups:** approved, investigational

## About

Valsartan is an angiotensin II receptor blocker used to treat high blood pressure and heart conditions such as congestive heart failure. It is an approved medicine, widely used alone and in combination products, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q155472](https://www.wikidata.org/wiki/Q155472) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 19:56 | 46:35 | 0/0/0 | 0/0/1 | 0/2/2 | 299,865/71,896 | openai / gpt-6-luna | 21 | 10/15 | 20/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Shimizu_2021_IA_rupture_status](drugs/drug_valsartan/pd_Shimizu_2021_IA_rupture_status.md) | intracranial aneurysm rupture status ← unknown · categorical (graded) response model | — | Shimizu K et al., Candidate drugs for preventive treatmen…, PloS one (2021) | [10.1371/journal.pone.0246865](https://doi.org/10.1371/journal.pone.0246865) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ACE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Baig_2026](drugs/drug_valsartan/pgx_Baig_2026_ACE_Q100.md) | Baig A et al., Pharmacogenetics of RAS-affecting AGT a…, Scientific reports (2026) | [10.1038/s41598-026-42902-4](https://doi.org/10.1038/s41598-026-42902-4) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **AGT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Baig_2026](drugs/drug_valsartan/pgx_Baig_2026_AGT_Q100.md) | Baig A et al., Pharmacogenetics of RAS-affecting AGT a…, Scientific reports (2026) | [10.1038/s41598-026-42902-4](https://doi.org/10.1038/s41598-026-42902-4) |
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> | **ABCB1** | `Q22` · CL | transport | [Soria-Chacartegui_2023](drugs/drug_valsartan/pgx_Soria_Chacartegui_2023_ABCB1_Q22.md) | Soria-Chacartegui P et al., Impact of Sex and Genetic Variation in…, International journal of mo… (2023) | [10.3390/ijms242015265](https://doi.org/10.3390/ijms242015265) |
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> | **SLC22A1** | `Q22` · CL | transport | [Soria-Chacartegui_2023](drugs/drug_valsartan/pgx_Soria_Chacartegui_2023_SLC22A1_Q22.md) | Soria-Chacartegui P et al., Impact of Sex and Genetic Variation in…, International journal of mo… (2023) | [10.3390/ijms242015265](https://doi.org/10.3390/ijms242015265) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=valsartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | liver | `CYP2C9` substrate, `SLC22A1` transport, `SLCO1B1` inhibitor/substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (target), AGT (target), AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 261 matched, 153 returned
- **screened:** 10  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_30 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Habtemariam_2009.pdf` | Habtemariam B et al., Population pharmacokinetics of valsarta…, Drug metabolism and pharmac… (2009) | popPK | 10 | [10.2133/dmpk.24.145](https://doi.org/10.2133/dmpk.24.145) | [19430170](https://pubmed.ncbi.nlm.nih.gov/19430170) | This is a valsartan population-PK study, but the supplied evidence lacks numeric PK parameter estimates. |
| `Ngo_2018.pdf` | Ngo L et al., Effects of hydrochlorothiazide and amlo…, European journal of pharmac… (2018) | popPK | 10 | [10.1016/j.ejps.2018.03.031](https://doi.org/10.1016/j.ejps.2018.03.031) | [29604332](https://pubmed.ncbi.nlm.nih.gov/29604332) | Valsartan is the subject of a population-PK study, but numeric model parameter values are not present in the evidence. |
| `Yang_2023.pdf` | Yang H et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1181](https://doi.org/10.1002/cpdd.1181) | [36285517](https://pubmed.ncbi.nlm.nih.gov/36285517) | This is a valsartan population-PK study, but no numeric parameter values are present in the provided evidence. |
| `Baek_2013.pdf` | Baek IH et al., Pharmacokinetics of angiotensin II rece…, Drug research (2013) | popPK | 9 | [10.1055/s-0033-1341424](https://doi.org/10.1055/s-0033-1341424) | [23539423](https://pubmed.ncbi.nlm.nih.gov/23539423) | Valsartan is studied in dogs with compartmental PK analysis, but numeric disposition parameters are not provided in the evidence. |
| `Jin_2026.pdf` | Jin Y et al., Population Pharmacokinetics of Sacubitr…, Clinical pharmacokinetics (2026) | popPK | 9 | [10.1007/s40262-026-01647-z](https://doi.org/10.1007/s40262-026-01647-z) | [42053769](https://pubmed.ncbi.nlm.nih.gov/42053769) | Valsartan is modeled as a subject drug, but numeric PK parameter values are absent; the forest plot is mentioned but not provided. |
| `Lim_2007.pdf` | Lim HS et al., Angiotensin II type 1 receptor 1166A/C…, European journal of clinica… (2007) | popPK | 9 | [10.1007/s00228-006-0228-6](https://doi.org/10.1007/s00228-006-0228-6) | [17146658](https://pubmed.ncbi.nlm.nih.gov/17146658) | Valsartan is modeled with a two-compartment model, but no numeric PK parameter values are provided. |
| `Poirier_2009.pdf` | Poirier A et al., Prediction of pharmacokinetic profile o…, Chemistry & biodiversity (2009) | popPK | 9 | [10.1002/cbdv.200900116](https://doi.org/10.1002/cbdv.200900116) | [19937834](https://pubmed.ncbi.nlm.nih.gov/19937834) | Numeric in-vitro transport parameters are provided, but no numeric in-vivo clearance values are shown. |
| `Ménochet_2012.pdf` | Ménochet K et al., Use of mechanistic modeling to assess i…, Drug metabolism and disposi… (2012) | popPK | 8 | [10.1124/dmd.112.046193](https://doi.org/10.1124/dmd.112.046193) | [22665271](https://pubmed.ncbi.nlm.nih.gov/22665271) | Valsartan uptake clearance is studied, but its numeric parameter values are not present in the provided evidence and may be in tables or figures not provided. |
| `Ayalasomayajula_2016.pdf` | Ayalasomayajula S et al., In vitro and clinical evaluation of OAT…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1111/jcpt.12408](https://doi.org/10.1111/jcpt.12408) | [27321165](https://www.ncbi.nlm.nih.gov/pubmed/27321165) | metadata signals extractable PD data (IC50) |
| `Derobertmasure_2023.pdf` | Derobertmasure A et al., Dried Urine Spot Analysis for assessing…, Journal of chromatography.… (2023) | pd | 5 | [10.1016/j.jchromb.2022.123539](https://doi.org/10.1016/j.jchromb.2022.123539) | [36867996](https://www.ncbi.nlm.nih.gov/pubmed/36867996) | metadata signals extractable PD data (PK/PD) |
| `Heo_2016.pdf` | Heo YA et al., Quantitative model for the blood pressu…, British journal of clinical… (2016) | pd | 5 | [10.1111/bcp.13082](https://doi.org/10.1111/bcp.13082) | [27504853](https://www.ncbi.nlm.nih.gov/pubmed/27504853) | metadata signals extractable PD data (PKPD) |
| `Hjermitslev_2017.pdf` | Hjermitslev M et al., Azilsartan Medoxomil, an Angiotensin II…, Basic & clinical pharmacolo… (2017) | pd | 5 | [10.1111/bcpt.12800](https://doi.org/10.1111/bcpt.12800) | [28444983](https://www.ncbi.nlm.nih.gov/pubmed/28444983) | metadata signals extractable PD data (IC50) |
| `Jeon_2020.pdf` | Jeon JH et al., Herb-Drug Interaction of Red Ginseng Ex…, Molecules (Basel, Switzerla… (2020) | pd | 5 | [10.3390/molecules25030622](https://doi.org/10.3390/molecules25030622) | [32023909](https://www.ncbi.nlm.nih.gov/pubmed/32023909) | metadata signals extractable PD data (IC50) |
| `Müller_1994.pdf` | Müller P et al., Angiotensin II receptor blockade with s…, European journal of clinica… (1994) | pd | 5 | [10.1007/BF02570503](https://doi.org/10.1007/BF02570503) | [7867676](https://www.ncbi.nlm.nih.gov/pubmed/7867676) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Shaddy_2024.pdf` | Shaddy R et al., Sacubitril/Valsartan in Pediatric Heart…, Circulation (2024) | pd | 5 | [10.1161/CIRCULATIONAHA.123.066605](https://doi.org/10.1161/CIRCULATIONAHA.123.066605) | [39319469](https://www.ncbi.nlm.nih.gov/pubmed/39319469) | metadata signals extractable PD data (PK/PD) |
| `Watanabe_2015.pdf` | Watanabe T et al., Utility of bilirubins and bile acids as…, Drug metabolism and disposi… (2015) | pd | 5 | [10.1124/dmd.114.061051](https://doi.org/10.1124/dmd.114.061051) | [25581390](https://www.ncbi.nlm.nih.gov/pubmed/25581390) | metadata signals extractable PD data (IC50) |
| `Lu_2021.pdf` | Lu B et al., Huoxue Qianyang Qutan recipe attenuates…, Pharmaceutical biology (2021) | pd | 4 | [10.1080/13880209.2021.1953541](https://doi.org/10.1080/13880209.2021.1953541) | [34362291](https://www.ncbi.nlm.nih.gov/pubmed/34362291) | metadata signals extractable PD data (IC50) |
| `Cabaleiro_2013.pdf` | Cabaleiro T et al., Evaluation of the relationship between…, Drug metabolism and disposi… (2013) | pgx | 8 | [10.1124/dmd.112.046292](https://doi.org/10.1124/dmd.112.046292) | [23118328](https://www.ncbi.nlm.nih.gov/pubmed/23118328) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Cai_2011.pdf` | Cai J et al., Comparing antihypertensive effect and p…, American journal of cardiov… (2011) | pgx | 8 | [10.2165/11593800-000000000-00000](https://doi.org/10.2165/11593800-000000000-00000) | [22149319](https://www.ncbi.nlm.nih.gov/pubmed/22149319) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Li_2025.pdf` | Li X et al., The Effect of Kaempferol on Valsartan M…, Biomedical chromatography :… (2025) | pgx | 8 | [10.1002/bmc.70184](https://doi.org/10.1002/bmc.70184) | [40771041](https://www.ncbi.nlm.nih.gov/pubmed/40771041) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Pei_2018.pdf` | Pei Q et al., Repaglinide-irbesartan drug interaction…, European journal of clinica… (2018) | pgx | 8 | [10.1007/s00228-018-2477-6](https://doi.org/10.1007/s00228-018-2477-6) | [29748863](https://www.ncbi.nlm.nih.gov/pubmed/29748863) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Song_2021.pdf` | Song G et al., Effects of SLCO1B1 and SLCO1B3 Genetic…, Journal of personalized med… (2021) | pgx | 8 | [10.3390/jpm11090862](https://doi.org/10.3390/jpm11090862) | [34575639](https://www.ncbi.nlm.nih.gov/pubmed/34575639) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Yuan_2022.pdf` | Yuan LJ et al., Enzymatic activity on valsartan of 38 C…, Chemico-biological interact… (2022) | pgx | 8 | [10.1016/j.cbi.2022.109799](https://doi.org/10.1016/j.cbi.2022.109799) | [34998819](https://www.ncbi.nlm.nih.gov/pubmed/34998819) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Daneshtalab_2006.pdf` | Daneshtalab N et al., Drug-disease interactions: losartan eff…, Journal of clinical pharmac… (2006) | pgx | 7 | [10.1177/0091270006292163](https://doi.org/10.1177/0091270006292163) | [17050800](https://www.ncbi.nlm.nih.gov/pubmed/17050800) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kwon_2020.pdf` | Kwon M et al., The Development and Validation of a Nov…, Pharmaceutics (2020) | pgx | 7 | [10.3390/pharmaceutics12100938](https://doi.org/10.3390/pharmaceutics12100938) | [33007943](https://www.ncbi.nlm.nih.gov/pubmed/33007943) | metadata signals extractable PGX data (Cyp1a2, PK/PD-context) |
| `Liu_2020.pdf` | Liu Y et al., Pharmacokinetic interaction study betwe…, Pharmaceutical biology (2020) | pgx | 7 | [10.1080/13880209.2020.1859554](https://doi.org/10.1080/13880209.2020.1859554) | [33355495](https://www.ncbi.nlm.nih.gov/pubmed/33355495) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Storelli_2024.pdf` | Storelli F et al., Toward improved predictions of pharmaco…, CPT: pharmacometrics & syst… (2024) | pgx | 7 | [10.1002/psp4.13062](https://doi.org/10.1002/psp4.13062) | [37833845](https://www.ncbi.nlm.nih.gov/pubmed/37833845) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Trujillo_2023.pdf` | Trujillo ME et al., Vericiguat, a novel sGC stimulator: Mec…, Clinical and translational… (2023) | pgx | 7 | [10.1111/cts.13677](https://doi.org/10.1111/cts.13677) | [37997225](https://www.ncbi.nlm.nih.gov/pubmed/37997225) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Yang_2016.pdf` | Yang R et al., Drug Interactions with Angiotensin Rece…, Current drug metabolism (2016) | pgx | 7 | [10.2174/1389200217666160524143843](https://doi.org/10.2174/1389200217666160524143843) | [27216792](https://www.ncbi.nlm.nih.gov/pubmed/27216792) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Jarrar_2026.pdf` | Jarrar YB et al., Lack of association between the Cytochr…, Prostaglandins & other lipi… (2026) | pgx | 5 | [10.1016/j.prostaglandins.2026.107091](https://doi.org/10.1016/j.prostaglandins.2026.107091) | [42402272](https://www.ncbi.nlm.nih.gov/pubmed/42402272) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-09-30T19:45:41.307924+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Alnajjar_2020 | not_relevant | 0 | 0 | Valsartan is assessed only by molecular docking; no valsartan dose- or concentration-effect relationship or numeric PD parameters are reported. |
| PGx | Arsenault_2010 | not_relevant | 0 | 0 | The variant reduced affinity for losartan and EXP3174, but the text reports no pharmacogenomic effect on a valsartan PK or PD parameter. |
| PD | Ayalasomayajula_2016 | not_relevant | 0 | 0 | No valsartan PD or exposure-response relationship is reported; the IC50 values are for sacubitril-mediated transporter inhibition, not valsartan. |
| PD | Azizi_2013 | not_relevant | 2 | 0 | Valsartan’s renin response is measured under different sodium diets, but no valsartan-specific exposure- or dose-response analysis or numeric PD parameters are reported; the stated exposure-variance analysis is for candesartan only. |
| popPK | Baek_2013 | relevant | 9 | 1 | Valsartan is studied in dogs with compartmental PK analysis, but numeric disposition parameters are not provided in the evidence. |
| PD | Bavishi_2015 | not_relevant | 2 | 0 | This is a review that discusses valsartan/sacubitril pharmacodynamics qualitatively, but reports no numeric valsartan exposure- or dose-response relationship or derivable PD parameters. |
| popPK | Beltrán_2018 | irrelevant | 0 | 0 | This is a clinical exercise-capacity study and reports no valsartan pharmacokinetic parameters or values. |
| PD | Boettcher_2021 | not_relevant | 0 | 0 | Valsartan was given only as fixed-dose sacubitril/valsartan; reported blood-pressure differences assess vericiguat coadministration, not a valsartan dose- or exposure-response relationship. |
| PGx | Cai_2011 | not_relevant | 0 | 0 | The reported CYP3A5 association with DBP reduction is not attributed to valsartan; no valsartan pharmacogenomic effect is reported. |
| PGx | Challa_2013 | not_relevant | 0 | 0 | The study examines a quercetin–valsartan interaction in rats, not an effect of a gene variant, genotype, or phenotype. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | Valsartan is only mentioned as a tested drug candidate, and no valsartan pharmacokinetic parameter values are reported. |
| PD | Chen_2022 | not_relevant | 0 | 0 | Valsartan is only mentioned as a tested candidate; no valsartan-specific dose- or exposure-response data or numeric PD parameters are reported. |
| popPK | Chrysant_2017 | irrelevant | 1 | 0 | The excerpt is a narrative overview and contains no numeric valsartan disposition parameters. |
| PD | Chrysant_2017 | not_relevant | 2 | 0 | The text qualitatively describes valsartan’s mechanism and antihypertensive effects but reports no exposure- or dose-response analysis or numeric PD parameters. |
| PGx | Daneshtalab_2006 | not_relevant | 0 | 0 | The study examines losartan and rheumatoid arthritis, not a pharmacogenomic effect on valsartan PK or PD. |
| PD | Derobertmasure_2023 | not_relevant | 0 | 0 | The paper concerns dried-urine measurement of cardiovascular drug exposure and reports no valsartan dose- or concentration-effect analysis or numeric PD parameters. |
| PD | Di_2026 | not_relevant | 0 | 0 | Valsartan is mentioned only as a comparator; no valsartan-specific exposure- or dose-response analysis or numeric PD parameters are reported. |
| popPK | Dogan_2023 | irrelevant | 0 | 0 | This in-vitro study reports cellular effects of sacubitril/valsartan, not valsartan pharmacokinetic parameters or values. |
| PD | Dogan_2023 | not_relevant | 3 | 0 | S/V concentration-response testing and IC50/EC50 estimation are mentioned, but no numeric values or extractable curve are provided, and the combination does not isolate valsartan’s effect. |
| PD | Eads_2020 | not_relevant | 0 | 0 | Valsartan is mentioned only in the context of NDMA contamination; no valsartan PD or exposure-response relationship or numeric PD parameters are reported. |
| popPK | El-Say_2023 | irrelevant | 2 | 1 | Valsartan PK is studied, but the evidence gives only Cmax, Tmax, and relative bioavailability—not disposition parameters. |
| PD | Elder_2021 | not_relevant | 0 | 0 | This commentary discusses nitrosamine contamination and toxicological risk, not a valsartan exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Elmfeldt_2002 | irrelevant | 0 | 0 | Reports antihypertensive dose-response effects, not valsartan pharmacokinetic parameters. |
| popPK | Erbe_2006 | irrelevant | 0 | 0 | Valsartan is only mentioned as a negative comparator, and no pharmacokinetic parameter values are reported. |
| PD | Erbe_2006 | not_relevant | 0 | 0 | Valsartan is only reported as not activating PPARγ; no valsartan dose- or concentration-response relationship or numeric PD parameters are reported. |
| PGx | Farrera_2025 | not_relevant | 0 | 0 | The study examines disease-related changes in transporter expression and valsartan pharmacokinetics, not effects of a genetic variant, genotype, or phenotype. |
| PD | Gora_2016 | not_relevant | 2 | 0 | Reports only a qualitative blood-pressure comparison; no numeric PD effects or exposure-/dose-response relationship is stated or derivable. |
| popPK | Gradman_2002 | irrelevant | 0 | 0 | This is a pharmacology and efficacy review, not a valsartan disposition-PK study; the referenced table is incomplete and concerns receptor dissociation, not PK parameters. |
| PD | Gradman_2002 | not_relevant | 2 | 0 | The review mentions dose-response behavior and an Emax meta-analysis qualitatively, but the supplied text provides no valsartan-specific numeric PD parameters or extractable effect-versus-dose curve. |
| PGx | Guo_2015 | not_relevant | 0 | 0 | The text evaluates valsartan effectiveness using CYP2C9 as a target protein but reports no gene variant/genotype/phenotype effect on a PK or PD parameter. |
| popPK | Habtemariam_2009 | relevant | 10 | 2 | This is a valsartan population-PK study, but the supplied evidence lacks numeric PK parameter estimates. |
| PGx | He_2012 | not_relevant | 0 | 0 | The text discusses vildagliptin and a drug-interaction study involving valsartan, but reports no genotype- or phenotype-related effect on valsartan PK or PD. |
| PD | He_2023 | not_relevant | 0 | 0 | Reports aggregate pre/post pharmacodynamic changes, but no valsartan dose- or exposure-response analysis or derivable PD parameters. |
| popPK | Heo_2016 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Hjermitslev_2017 | not_relevant | 0 | 0 | The provided text is only a title and reports no valsartan exposure- or dose-response relationship or numeric PD parameters. |
| PD | Hsiao_2018 | not_relevant | 1 | 0 | Reports blood-pressure changes between treatment regimens, but no valsartan-specific exposure- or dose-response analysis or derivable PD parameters. |
| PD | Iacoviello_2022 | not_relevant | 2 | 0 | This review mentions gender-related treatment responses qualitatively but reports no valsartan exposure- or dose-response analysis or numeric PD parameters. |
| PGx | Jarrar_2026_2 | not_relevant | 0 | 0 | The study reports an AGT genotype association with blood pressure response to amlodipine, not valsartan. |
| PD | Jeon_2020 | not_relevant | 0 | 0 | The study concerns the pharmacokinetic interaction of red ginseng extract or ginsenoside Rc with valsartan and reports no numeric valsartan PD or exposure-response relationship. |
| popPK | Jin_2026 | relevant | 9 | 2 | Valsartan is modeled as a subject drug, but numeric PK parameter values are absent; the forest plot is mentioned but not provided. |
| PD | Jing_2014 | not_relevant | 0 | 0 | The paper measures valsartan binding to HSA and concentration-dependent fluorescence quenching, not a pharmacodynamic effect or drug exposure-response relationship; the binding constants are not PD parameters. |
| PD | Jung_2015 | not_relevant | 1 | 0 | Blood pressure and lipid endpoints were measured, but no valsartan exposure- or dose-response analysis or numeric PD parameters are reported. |
| PGx | Kacha_2026 | not_relevant | 0 | 0 | The variants are bacterial PBP3 mutations evaluated for valsartan binding in silico, not pharmacogenomic effects on valsartan PK or PD parameters. |
| PGx | Kamiyama_2007 | not_relevant | 0 | 0 | The study tests valsartan’s in-vitro inhibition of CYP2C9, not a gene variant/genotype/phenotype effect on valsartan PK or PD. |
| popPK | Kitamura_2007 | irrelevant | 0 | 0 | This study examines glucose outcomes, not valsartan pharmacokinetics, and reports no valsartan disposition parameter values. |
| PD | Kobalava_2016 | not_relevant | 1 | 0 | Reports biomarker changes during fixed LCZ696 dosing, but no valsartan-specific dose/exposure–effect analysis or numeric PD parameters are stated or derivable. |
| PGx | Krittanawong_2017 | not_relevant | 0 | 0 | The paper discusses NEP polymorphisms and potential long-term side effects of sacubitril/valsartan, but reports no genotype-related change in a valsartan PK or PD parameter. |
| PGx | Kwon_2020 | not_relevant | 0 | 0 | The title describes a probe cocktail for drug and herb interactions, not a gene variant or phenotype effect on valsartan PK/PD. |
| PD | Leifert_2009 | not_relevant | 2 | 0 | Valsartan is mentioned as an example antagonist, but no valsartan concentration-effect results or numeric PD parameters are reported or derivable. |
| popPK | Li_2000 | irrelevant | 0 | 0 | Valsartan is only a comparator, and no valsartan pharmacokinetic values are reported. |
| PD | Li_2000 | not_relevant | 0 | 0 | Valsartan is only noted to have no effect in a comparator test; no valsartan exposure- or dose-response relationship or numeric PD parameters are reported. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The study examines kaempferol-mediated CYP inhibition, not how a genetic variant, genotype, or phenotype affects valsartan PK or PD. |
| PD | Li_2026 | not_relevant | 2 | 0 | This review qualitatively mentions sacubitril/valsartan and natriuretic-peptide responses but reports no valsartan exposure- or dose-response analysis or numeric PD parameters. |
| popPK | Lill_2000 | irrelevant | 0 | 0 | The reported PK values are for cyclosporine; valsartan is only listed as an interacting medication. |
| popPK | Lim_2007 | relevant | 9 | 0 | Valsartan is modeled with a two-compartment model, but no numeric PK parameter values are provided. |
| PGx | Lim_2007 | not_relevant | 0 | 0 | Genotype affected the angiotensin II ED50, but valsartan EC50 was similar between genotypes and no genotype effect on valsartan PK was reported. |
| PGx | Liu_2020 | not_relevant | 0 | 0 | The paper studies a drug–drug interaction in rats, not a genetic effect on valsartan PK or PD. |
| PD | Lu_2021 | not_relevant | 0 | 0 | The paper evaluates a treatment comparison in rats, but reports no valsartan exposure- or dose-response analysis or derivable numeric PD parameters. |
| PGx | Luo_2023 | not_relevant | 0 | 0 | The study reports genotype associations with clinical efficacy of sacubitril/valsartan, not a pharmacokinetic or pharmacodynamic parameter of valsartan. |
| popPK | Matsuda_2004 | irrelevant | 0 | 0 | Valsartan is only used as an AT₁ receptor blocker, with no valsartan pharmacokinetic parameters reported. |
| PD | Matsuda_2004 | not_relevant | 2 | 0 | Valsartan is mentioned only as blocking Ang II’s effect; no valsartan dose- or concentration-response relationship or numeric PD parameters are reported. |
| popPK | Mei_2025 | irrelevant | 2 | 1 | The valsartan bioequivalence study gives AUC exposure values but no quantitative disposition or compartmental-model parameters. |
| PD | Mittal_2025 | not_relevant | 1 | 0 | This is a study protocol that mentions dose-related outcomes but reports no completed exposure/dose-response analysis or numeric PD parameters. |
| PD | Mohamed_2022 | not_relevant | 2 | 0 | This review qualitatively discusses RAAS-blocker drug interactions but reports no valsartan exposure- or dose-response analysis or numeric PD parameters. |
| popPK | Morrison_2026 | irrelevant | 0 | 0 | This is a hemodynamic-response study, not a pharmacokinetic study, and reports no valsartan disposition parameters. |
| popPK | Ménochet_2012 | relevant | 8 | 1 | Valsartan uptake clearance is studied, but its numeric parameter values are not present in the provided evidence and may be in tables or figures not provided. |
| popPK | Ménochet_2012_2 | irrelevant | 1 | 2 | This is an in-vitro hepatocyte uptake study; it gives only a valsartan Kₘ,u bound (&lt;10 μM), not full numeric parameter values. |
| popPK | Müller_1994 | irrelevant | 2 | 0 | Valsartan levels are used in PK–PD analysis, but no quantitative disposition parameters appear in the supplied evidence. |
| PD | Müller_1994 | not_relevant | 5 | 0 | The abstract describes a small-n PK/PD Emax analysis and dose-response assessments, but gives no numeric PD parameters or effect-versus-concentration results to extract or derive. |
| popPK | Nagahiro_2026 | irrelevant | 0 | 0 | The paper reports blood-pressure changes after ARNI initiation, not quantitative valsartan pharmacokinetic parameters. |
| PGx | Nakashima_2005 | not_relevant | 0 | 0 | The study identifies CYP2C9-mediated valsartan metabolism in vitro but does not assess gene variants, genotypes, or phenotypes and their effects on a PK/PD parameter. |
| popPK | Namikawa_2026 | irrelevant | 0 | 0 | This is a clinical outcomes study of sacubitril/valsartan and reports no valsartan pharmacokinetic parameters. |
| popPK | Nederend_2023 | irrelevant | 0 | 0 | This clinical treatment study reports no valsartan disposition parameters or numeric PK values. |
| popPK | Neijenhuis_2025 | irrelevant | 0 | 0 | This is a quality-of-life study, with no valsartan pharmacokinetic parameters or numeric disposition values reported. |
| PD | Newhard_2018 | not_relevant | 2 | 0 | The study reports treatment-versus-placebo changes in pharmacodynamic endpoints for sacubitril/valsartan, but no valsartan exposure- or dose-response analysis or numeric PD parameters/curve. |
| popPK | Ngo_2018 | relevant | 10 | 0 | Valsartan is the subject of a population-PK study, but numeric model parameter values are not present in the evidence. |
| PD | Nie_2012 | not_relevant | 0 | 0 | Valsartan is mentioned only as an LD50 toxicity comparator; no valsartan dose- or exposure-response relationship or numeric PD parameters are reported. |
| PD | Ogura_2025 | not_relevant | 1 | 0 | The study compares FAERS adverse-event reporting proportions across ARBs; it reports no valsartan dose- or concentration-effect relationship or numeric PD parameters. |
| popPK | Pantev_2002 | irrelevant | 0 | 0 | This is an in-vitro receptor study and reports no valsartan pharmacokinetic parameters or values. |
| PGx | Pei_2018 | not_relevant | 0 | 0 | The genotype-associated PK/PD effects reported are for repaglinide with irbesartan, not for valsartan. |
| popPK | Poirier_2009 | relevant | 9 | 4 | Numeric in-vitro transport parameters are provided, but no numeric in-vivo clearance values are shown. |
| PD | Pottegård_2018 | not_relevant | 0 | 0 | The dose-response analysis concerns NDMA contamination and cancer risk, not a valsartan pharmacodynamic or exposure-effect relationship; no numeric PD parameters or effect-versus-concentration curve are reported. |
| PD | Raschi_2022 | not_relevant | 2 | 0 | This is a narrative review that mentions pharmacodynamics but reports no numeric valsartan exposure- or dose-response relationship or derivable PD parameters. |
| PD | Rump_2008 | not_relevant | 2 | 0 | Valsartan is associated with BP reduction, but the study reports no extractable valsartan dose- or exposure-response relationship or numeric PD parameters. |
| PGx | Sato_2017 | not_relevant | 0 | 0 | The paper mentions a suspected drug interaction with valsartan but reports no genetic or phenotypic effect on its PK or PD parameters. |
| PGx | Senda_2017 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on a valsartan PK or PD parameter is reported. |
| PD | Shaddy_2017 | not_relevant | 2 | 0 | This is a study-design report that plans PK/PD assessment but reports no valsartan exposure- or dose-response relationship or numeric PD parameters. |
| PD | Shaddy_2024 | not_relevant | 0 | 0 | The trial reports comparative clinical outcomes, but no valsartan exposure- or dose-response analysis with numeric PD parameters. |
| PGx | Shen_2022 | not_relevant | 0 | 0 | The case reports a drug-substitution strategy and gefitinib concentration changes, but no genetic effect on valsartan pharmacokinetics or pharmacodynamics. |
| popPK | Sheng_2026 | irrelevant | 1 | 10 | Valsartan is used as a probe substrate in a drug-interaction study, though its numeric PK parameters are present in the evidence. |
| popPK | Sison_2018 | irrelevant | 0 | 0 | This compares blood-pressure outcomes and reports no valsartan pharmacokinetic parameters. |
| PGx | Storelli_2024 | not_relevant | 0 | 0 | The paper concerns hepatic impairment and drug transport, not genetic variation affecting valsartan PK or PD. |
| popPK | Sunkara_2014 | irrelevant | 2 | 1 | Valsartan is studied, but only food-effect AUC and Cmax ratios are reported, not disposition parameters. |
| popPK | Sánchez-Dengra_2026 | irrelevant | 2 | 0 | The study focuses on dissolution and formulation PBBM, and no numeric valsartan disposition parameters appear in the supplied evidence. |
| PGx | Taavitsainen_2000 | not_relevant | 0 | 0 | The study measures in vitro CYP inhibition by valsartan, not a gene-variant or phenotype effect on a valsartan PK/PD parameter. |
| PGx | Tan_2018 | not_relevant | 0 | 0 | The study measures compound-mediated CYP2C9 inhibition using valsartan as an in vitro probe, not a gene variant/genotype/phenotype effect on valsartan PK or PD. |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The paper mentions HLA-Cw*0602 only as a possible psoriasis risk factor and reports no pharmacogenomic effect on valsartan PK or PD parameters. |
| PD | Tayag_2023 | not_relevant | 1 | 0 | Valsartan is included in mixed antihypertensive groups, but the paper reports no valsartan-specific dose/exposure-response analysis or numeric PD parameters. |
| PGx | Tayag_2023 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype is analyzed; the paper reports blood pressure changes with 5-FU co-administration, not a pharmacogenomic effect on valsartan. |
| PD | Trujillo_2023 | not_relevant | 0 | 0 | This review concerns vericiguat and reports no extractable valsartan exposure- or dose-response relationship or numeric PD parameters. |
| PGx | Trujillo_2023 | not_relevant | 0 | 0 | The paper concerns vericiguat and does not report a pharmacogenomic effect on valsartan PK or PD. |
| PD | Tschudi_1994 | not_relevant | 2 | 0 | Valsartan was tested at one chronic dose; the reported 13-fold shift is in the acetylcholine response after treatment, not a valsartan exposure- or dose-response relationship. |
| PD | Türk_2019 | not_relevant | 2 | 0 | The case report qualitatively describes physiological improvements during sacubitril/valsartan treatment but provides no numeric exposure- or dose-response relationship or derivable PD parameters. |
| PD | Udelson_2026 | not_relevant | 0 | 0 | The reported cGMP pharmacodynamic effects are for CRD-740; valsartan appears only as part of background sacubitril/valsartan therapy, with no valsartan dose- or exposure-response relationship or numeric PD parameters. |
| PD | Wang_2026 | not_relevant | 0 | 0 | Valsartan is mentioned only as a single-dose positive control; no valsartan dose- or concentration-effect relationship or numeric PD parameters are reported or derivable. |
| PD | Watanabe_2015 | not_relevant | 1 | 0 | The paper concerns endogenous biomarkers of hepatic transporter inhibition and does not report a numeric valsartan exposure- or dose-response relationship or derivable PD parameters. |
| PD | Wehland_2020 | not_relevant | 2 | 0 | This review qualitatively notes blood-pressure lowering at 200- and 400-mg doses but reports no extractable valsartan exposure- or dose-response relationship or numeric PD parameters. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The dose-response study evaluates valsartan's interference with immunoassays, not a pharmacodynamic or clinical exposure-response effect. |
| PGx | Yan_2012 | not_relevant | 0 | 0 | The study reports no gene variant, genotype, or phenotype effects on valsartan PK/PD; valsartan is only included as a drug in an in vitro study of indapamide metabolism. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The review discusses drug interactions and CYP metabolism but reports no gene variant, genotype, or phenotype effect on valsartan PK or PD parameters. |
| popPK | Yang_2023 | relevant | 10 | 0 | This is a valsartan population-PK study, but no numeric parameter values are present in the provided evidence. |
| popPK | Zankov_2006 | irrelevant | 0 | 0 | This electrophysiology study uses valsartan only as an antagonist and reports no valsartan PK parameters. |
| PD | Zankov_2006 | not_relevant | 1 | 0 | Valsartan is tested only at a single concentration as an AT1-receptor antagonist; no valsartan exposure-response curve or numeric antagonist PD parameter is reported or derivable. The reported EC50 is for Ang II. |
| popPK | Zannad_2007 | irrelevant | 0 | 0 | This is an efficacy overview, not a valsartan pharmacokinetic study, and it reports no disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
