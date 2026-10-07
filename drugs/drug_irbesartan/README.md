<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;irbesartan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Irbesartan_Carlucci2013_reference&quot;,&quot;label&quot;:&quot;Carlucci_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_irbesartan/Irbesartan_Carlucci2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Irbesartan_Karatza2020_reference&quot;,&quot;label&quot;:&quot;Karatza_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_irbesartan/Irbesartan_Karatza2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# irbesartan

- **generic name:** irbesartan
- **ATC codes:** `C09CA04`, `C09DA04`, `C09DB05`
- **DrugBank:** [DB01029](https://go.drugbank.com/drugs/DB01029) · **PubChem:** [CID 3749](https://pubchem.ncbi.nlm.nih.gov/compound/3749)
- **molar mass:** 428.5294 g/mol (C25H28N6O) — DrugBank
- **groups:** approved, investigational

## About

Irbesartan is an angiotensin II receptor blocker used to treat high blood pressure (arterial hypertension). It is an approved medicine, authorised in the European Union, and is available both alone and in combination products with diuretics or calcium channel blockers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q947266](https://www.wikidata.org/wiki/Q947266) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| irbesartan | parent | 428.529 | C25H28N6O | DrugBank | [3749](https://pubchem.ncbi.nlm.nih.gov/compound/3749) | Karatza_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:53 | 6:18 | 2/0/0 | 2/0/1 | 0/0/1 | 94,312/14,394 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 4/4 | 6/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Carlucci_2013_reference](drugs/drug_irbesartan/Irbesartan_Carlucci2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Carlucci L et al., Pharmacokinetics and pharmacodynamics (…, Polish journal of veterinar… (2013) | [10.2478/pjvs-2013-0088](https://doi.org/10.2478/pjvs-2013-0088) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Karatza_2020_reference](drugs/drug_irbesartan/Irbesartan_Karatza2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Karatza E et al., Delay differential equations for the de…, European journal of pharmac… (2020) | [10.1016/j.ejps.2020.105498](https://doi.org/10.1016/j.ejps.2020.105498) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Elmfeldt_2002_DBP](drugs/drug_irbesartan/pd_Elmfeldt_2002_DBP.md) | reduction in trough (24 h post-dose) supine or sitting diastolic blood pressure ← irbesartan · direct Emax (saturable) effect | — | Elmfeldt D et al., The relationships between dose and anti…, Blood pressure (2002) | [10.1080/080370502320779502](https://doi.org/10.1080/080370502320779502) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hedaya_2015_DBP](drugs/drug_irbesartan/pd_Hedaya_2015_DBP.md) | diastolic blood pressure ← irbesartan · direct Emax (saturable) effect | — | Hedaya MA et al., Modeling of the pharmacokinetic/pharmac…, Biopharmaceutics & drug dis… (2015) | [10.1002/bdd.1935](https://doi.org/10.1002/bdd.1935) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hedaya_2015_SBP](drugs/drug_irbesartan/pd_Hedaya_2015_SBP.md) | systolic blood pressure ← irbesartan · direct Emax (saturable) effect | — | Hedaya MA et al., Modeling of the pharmacokinetic/pharmac…, Biopharmaceutics & drug dis… (2015) | [10.1002/bdd.1935](https://doi.org/10.1002/bdd.1935) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huang_2006_DBP](drugs/drug_irbesartan/pd_Huang_2006_DBP.md) | diastolic blood pressure ← irbesartan · direct sigmoid Emax (Hill) effect | model (no simulator) | Huang XH et al., PK-PD modeling of irbesartan in healthy…, European journal of drug me… (2006) | [10.1007/BF03190465](https://doi.org/10.1007/BF03190465) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huang_2006_SBP](drugs/drug_irbesartan/pd_Huang_2006_SBP.md) | systolic blood pressure ← irbesartan · direct sigmoid Emax (Hill) effect | model (no simulator) | Huang XH et al., PK-PD modeling of irbesartan in healthy…, European journal of drug me… (2006) | [10.1007/BF03190465](https://doi.org/10.1007/BF03190465) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **KNG1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Hu_2018](drugs/drug_irbesartan/pgx_Hu_2018_KNG1_Q100.md) | Hu S et al., A gender-specific association of the po…, Journal of human hypertensi… (2018) | [10.1038/s41371-018-0119-1](https://doi.org/10.1038/s41371-018-0119-1) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=irbesartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP3A4` inhibitor, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target), JUN (other/unknown), KNG1 (unknown), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 94 matched, 59 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karatza_2020.pdf` | Karatza E et al., Delay differential equations for the de…, European journal of pharmac… (2020) | popPK | 10 | [10.1016/j.ejps.2020.105498](https://doi.org/10.1016/j.ejps.2020.105498) | [32736091](https://pubmed.ncbi.nlm.nih.gov/32736091) | The abstract explicitly lists quantitative population PK parameters (ka, V1/F, V2/F, CL/F, Q/F) for irbesartan. |
| `Hedaya_2015.pdf` | Hedaya MA et al., Modeling of the pharmacokinetic/pharmac…, Biopharmaceutics & drug dis… (2015) | popPK | 9 | [10.1002/bdd.1935](https://doi.org/10.1002/bdd.1935) | [25545238](https://pubmed.ncbi.nlm.nih.gov/25545238) | The study reports a two-compartment PK model for irbesartan in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Huang_2005_2.pdf` | Huang XH et al., Pharmacokinetic and pharmacodynamic of…, European journal of drug me… (2005) | popPK | 9 | [10.1007/BF03226417](https://doi.org/10.1007/BF03226417) | [16010871](https://pubmed.ncbi.nlm.nih.gov/16010871) | The study reports a two-compartment PK model for irbesartan in dogs, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Huang_2006.pdf` | Huang XH et al., PK-PD modeling of irbesartan in healthy…, European journal of drug me… (2006) | popPK | 9 | [10.1007/BF03190465](https://doi.org/10.1007/BF03190465) | [17315536](https://pubmed.ncbi.nlm.nih.gov/17315536) | The study reports a two-compartment PK model for irbesartan in humans, but the specific numeric values for clearance, volume, and half-life are not explicitly listed in the provided text, only PD parameters (Emax, EC50, Keo) are given. |
| `Huang_2005.pdf` | Huang XH et al., Pharmacokinetic and pharmacodynamic int…, Journal of cardiovascular p… (2005) | pd | 5 | [10.1097/01.fjc.0000191289.35182.7e](https://doi.org/10.1097/01.fjc.0000191289.35182.7e) | [16306814](https://www.ncbi.nlm.nih.gov/pubmed/16306814) | metadata signals extractable PD data (PK/PD) |
| `García-Sáinz_1997.pdf` | García-Sáinz JA et al., Characterization of the AT1 angiotensin…, The Journal of endocrinology (1997) | pd | 4 | [10.1677/joe.0.1540133](https://doi.org/10.1677/joe.0.1540133) | [9246947](https://www.ncbi.nlm.nih.gov/pubmed/9246947) | metadata signals extractable PD data (EC50) |
| `Choi_2012.pdf` | Choi CI et al., CYP2C9 3 and 13 alleles significantly a…, European journal of clinica… (2012) | pgx | 8 | [10.1007/s00228-011-1098-0](https://doi.org/10.1007/s00228-011-1098-0) | [21842338](https://www.ncbi.nlm.nih.gov/pubmed/21842338) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Hong_2005.pdf` | Hong X et al., CYP2C9*3 allelic variant is associated…, European journal of clinica… (2005) | pgx | 8 | [10.1007/s00228-005-0976-8](https://doi.org/10.1007/s00228-005-0976-8) | [16094537](https://www.ncbi.nlm.nih.gov/pubmed/16094537) | metadata signals extractable PGX data (CYP2C9*3, PK/PD-context) |
| `Wen_2026.pdf` | Wen Y et al., Using physiologically based pharmacokin…, British journal of clinical… (2026) | pgx | 8 | [10.1002/bcp.70784](https://doi.org/10.1002/bcp.70784) | [42595332](https://www.ncbi.nlm.nih.gov/pubmed/42595332) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Li_2024.pdf` | Li Y et al., Drug-drug interaction between danshensu…, Xenobiotica; the fate of fo… (2024) | pgx | 7 | [10.1080/00498254.2024.2338183](https://doi.org/10.1080/00498254.2024.2338183) | [38591142](https://www.ncbi.nlm.nih.gov/pubmed/38591142) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Mishima_2016.pdf` | Mishima M et al., Effects of Uric Acid on the NO Producti…, Drug research (2016) | pgx | 7 | [10.1055/s-0035-1569405](https://doi.org/10.1055/s-0035-1569405) | [26909689](https://www.ncbi.nlm.nih.gov/pubmed/26909689) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Weiss_2010.pdf` | Weiss J et al., Interaction of angiotensin receptor typ…, Biopharmaceutics & drug dis… (2010) | pgx | 7 | [10.1002/bdd.699](https://doi.org/10.1002/bdd.699) | [20222053](https://www.ncbi.nlm.nih.gov/pubmed/20222053) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Yang_2016.pdf` | Yang R et al., Drug Interactions with Angiotensin Rece…, Current drug metabolism (2016) | pgx | 7 | [10.2174/1389200217666160524143843](https://doi.org/10.2174/1389200217666160524143843) | [27216792](https://www.ncbi.nlm.nih.gov/pubmed/27216792) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kurland_2002.pdf` | Kurland L et al., Polymorphisms in the angiotensinogen an…, Journal of hypertension (2002) | pgx | 5 | [10.1097/00004872-200204000-00023](https://doi.org/10.1097/00004872-200204000-00023) | [11910301](https://www.ncbi.nlm.nih.gov/pubmed/11910301) | metadata signals extractable PGX data (CYP11B2) |
| `Wen_2003.pdf` | Wen SY et al., Rapid detection of the known SNPs of CY…, World journal of gastroente… (2003) | pgx | 5 | [10.3748/wjg.v9.i6.1342](https://doi.org/10.3748/wjg.v9.i6.1342) | [12800253](https://www.ncbi.nlm.nih.gov/pubmed/12800253) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-07T07:47:42.955732+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Elmfeldt_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of antihypertensive efficacy (blood pressure reduction) and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Evans_2012 | irrelevant | 0 | 0 | The study is a clinical trial analyzing renal outcomes (eGFR decline) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for irbesartan. |
| PGx | Gallo_2013 | not_relevant | 2 | 0 | The paper is a case report hypothesizing a genetic susceptibility to oxidative stress and increased drug concentration, but it does not report specific pharmacogenomic data or quantitative PK/PD parameters for irbesartan. |
| popPK | García-Sáinz_1997 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | García-Sáinz_1997 | not_relevant | 0 | 0 | The supplied text contains only the title and reports no irbesartan-specific exposure- or dose-response data or numeric PD parameters. |
| popPK | Gradman_2002 | irrelevant | 0 | 0 | The paper is a review of receptor binding kinetics and clinical efficacy, not a pharmacokinetic study reporting disposition parameters like clearance or volume for irbesartan. |
| PD | Gradman_2002 | not_relevant | 3 | 0 | Review qualitatively mentions an Emax meta-analysis, but the provided text contains no numeric irbesartan PD parameters or extractable effect-versus-dose curve. |
| PGx | Ha_2026 | not_relevant | 2 | 5 | The paper reports clinical outcomes (BP control, adverse events) and general drug responsiveness percentages for a cohort, but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to specific gene variants for irbesartan. |
| PGx | He_2013 | not_relevant | 0 | 0 | The study explicitly reports no significant difference in drug response for irbesartan among KCNH2 genotypes. |
| popPK | Hedaya_2015 | relevant | 9 | 0 | The study reports a two-compartment PK model for irbesartan in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Huang_2005 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Huang_2005 | not_relevant | 2 | 0 | The title indicates a PK/PD interaction study, but the supplied text contains no numeric exposure- or dose-effect relationship or derivable PD parameters. |
| popPK | Huang_2005_2 | relevant | 9 | 0 | The study reports a two-compartment PK model for irbesartan in dogs, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PD | Huang_2005_2 | not_relevant | 3 | 0 | The abstract states that effects followed a sigmoid-Emax relationship with effect-compartment concentration, but reports no numeric PD parameters or extractable effect-versus-concentration curve. |
| popPK | Huang_2006 | relevant | 9 | 4 | The study reports a two-compartment PK model for irbesartan in humans, but the specific numeric values for clearance, volume, and half-life are not explicitly listed in the provided text, only PD parameters (Emax, EC50, Keo) are given. |
| popPK | Kaur_2020 | irrelevant | 2 | 0 | The study focuses on mechanistic biorelevant dissolution and PBPK modeling to understand absorption, but does not report standard quantitative population PK parameters (CL, V, Q, ka) for irbesartan in the provided evidence. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (danshensu inhibiting CYP2C9) affecting irbesartan PK, but does not report a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Mishima_2016 | not_relevant | 0 | 0 | The paper investigates the effect of uric acid on endothelial function and the protective role of irbesartan in an in vitro model, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of irbesartan. |
| popPK | Ngai_2025 | irrelevant | 0 | 0 | The study is a clinical trial comparison of kidney function outcomes (eGFR) where irbesartan serves only as a comparator drug, with no pharmacokinetic parameters reported. |
| PGx | Nijiati_2021 | not_relevant | 0 | 0 | The study is a metabolomic analysis in rats and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of irbesartan. |
| PGx | Paré_2012 | not_relevant | 0 | 0 | The paper investigates the effect of the PON1 Q192R polymorphism on the efficacy of clopidogrel, not irbesartan. |
| PGx | Peyriere_2012 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions between antiretrovirals and antihypertensives, not a study on pharmacogenomic effects of gene variants on irbesartan PK/PD. |
| popPK | Ruilope_1997 | irrelevant | 2 | 0 | The text is a review/summary that mentions qualitative PK properties (tmax, t1/2) but lacks quantitative disposition parameters (CL, V, Q, ka) or a compartmental model. |
| PD | Ruilope_1997 | not_relevant | 2 | 0 | This is a qualitative review summary; it gives timing and duration of blood-pressure effects but no extractable dose- or concentration-response relationship or numeric PD parameters. |
| PGx | Senda_2017 | not_relevant | 0 | 0 | The paper investigates the inhibition of arachidonic acid metabolism by irbesartan, not the effect of a genetic variant on irbesartan's pharmacokinetics or pharmacodynamics. |
| PGx | Taavitsainen_2000 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition by irbesartan, not the effect of a gene variant on irbesartan's PK or PD. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (succinic acid inhibiting CYP2C9) in rats, not a pharmacogenomic effect (gene variant/genotype) on irbesartan PK/PD. |
| PGx | Weiss_2010 | not_relevant | 0 | 0 | The paper investigates the effect of ARBs on ABC-transporter activity in vitro, not the effect of genetic variants on the PK/PD of irbesartan. |
| PGx | Wen_2003 | not_relevant | 2 | 5 | The study reports a null result (no significant difference) regarding the therapeutic outcome of irbesartan in CYP2C9*1/*3 carriers, without providing specific quantitative PK/PD parameter changes. |
| PGx | Wen_2026 | not_relevant | 0 | 0 | The paper reports the effect of SLCO1B1 genotype on the pharmacokinetics of repaglinide (the victim drug) when co-administered with irbesartan, not the effect of the genotype on irbesartan's own pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yan_2012 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (indapamide with irbesartan) and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions mediated by CYP enzymes and does not report pharmacogenomic effects (gene variants) on irbesartan PK/PD. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper studies acetaminophen hepatotoxicity and mentions irbesartan only as a therapeutic agent to ameliorate injury, not as the subject of a pharmacogenomic PK/PD analysis. |
| popPK | Zannad_2007 | irrelevant | 0 | 0 | The paper is a review of blood pressure efficacy (E_max model) and does not report pharmacokinetic parameters for irbesartan. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper is a statistical analysis plan for a clinical trial evaluating blood pressure efficacy, not a pharmacokinetic study, and contains no PK parameters for irbesartan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:47 UTC</sub>
