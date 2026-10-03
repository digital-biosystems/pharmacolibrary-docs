<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;irbesartan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Irbesartan_Carlucci2013_reference&quot;,&quot;label&quot;:&quot;Carlucci_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_irbesartan/Irbesartan_Carlucci2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Irbesartan_Karatza2020_reference&quot;,&quot;label&quot;:&quot;Karatza_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_irbesartan/Irbesartan_Karatza2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# irbesartan

- **generic name:** irbesartan
- **ATC codes:** `C09CA04`, `C09DA04`, `C09DB05`
- **DrugBank:** [DB01029](https://go.drugbank.com/drugs/DB01029) · **PubChem:** [CID 3749](https://pubchem.ncbi.nlm.nih.gov/compound/3749)
- **molar mass:** 428.5294 g/mol (C25H28N6O) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Irbesartan is an angiotensin receptor blocker (ARB) indicated to treat hypertension or diabetic nephropathy.[L7456,L7459] It can also be used as part of a combination product with [hydrochlorothiazide] for patients not well controlled or not expected to be well controlled on monotherapy.[L7459] Unlike angiotensin converting enzyme inhibitors, ARBs are not associated with a dry cough.[L7456,L7459]

Irbesartan was granted FDA approval on 30 September 1997.[L7456,L7459]

**Indication.** Irbesartan is indicated to treat hypertension and diabetic nephropathy in hypertensive patients with type 2 diabetes, elevated serum creatinine, and proteinuria.[L7456] A combination product with hydrochlorothiazide is indicated for hypertension in patients with uncontrolled hypertension with monotherapy or first line in patients not expected to be well controlled with monotherapy.[L7459]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| irbesartan | parent | 428.529 | C25H28N6O | DrugBank | [3749](https://pubchem.ncbi.nlm.nih.gov/compound/3749) | Karatza_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 17:13 | 12:50 | 2/0/0 | 1/0/0 | 0/0/1 | 85,327/27,843 | openai / gpt-6-luna | 6 | 4/2 | 4/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | [Carlucci_2013_reference](drugs/drug_irbesartan/Irbesartan_Carlucci2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Carlucci L et al., Pharmacokinetics and pharmacodynamics (…, Polish journal of veterinar… (2013) | [10.2478/pjvs-2013-0088](https://doi.org/10.2478/pjvs-2013-0088) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Karatza_2020_reference](drugs/drug_irbesartan/Irbesartan_Karatza2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Karatza E et al., Delay differential equations for the de…, European journal of pharmac… (2020) | [10.1016/j.ejps.2020.105498](https://doi.org/10.1016/j.ejps.2020.105498) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | [Carlucci_2013_SBP](drugs/drug_irbesartan/pd_Carlucci_2013_SBP.md) | systolic blood pressure ← irbesartan · delayed effect through an effect compartment | — | Carlucci L et al., Pharmacokinetics and pharmacodynamics (…, Polish journal of veterinar… (2013) | [10.2478/pjvs-2013-0088](https://doi.org/10.2478/pjvs-2013-0088) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **KNG1** | `Q37` · Ctrough | unknown | [Hu_2018](drugs/drug_irbesartan/pgx_Hu_2018_KNG1_Q37.md) | Hu S et al., A gender-specific association of the po…, Journal of human hypertensi… (2018) | [10.1038/s41371-018-0119-1](https://doi.org/10.1038/s41371-018-0119-1) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=irbesartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…single or multiple oral doses of 150mg, 300mg, 600mg, and 900mg of irbesartan…”</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP3A4` inhibitor, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…20% of a radiolabelled oral dose of irbesartan is recovered in urine…”</sub> | prose |
| excretion | small intestine | <sub>“…the rest is recovered in the feces…”</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target), JUN (other/unknown), KNG1 (unknown), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 94 matched, 59 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Karatza_2020.pdf` | Karatza E et al., Delay differential equations for the de…, European journal of pharmac… (2020) | popPK | 10 | [10.1016/j.ejps.2020.105498](https://doi.org/10.1016/j.ejps.2020.105498) | [32736091](https://pubmed.ncbi.nlm.nih.gov/32736091) | The population-PK model reports numeric irbesartan disposition parameters directly in the evidence. |
| `Hedaya_2015.pdf` | Hedaya MA et al., Modeling of the pharmacokinetic/pharmac…, Biopharmaceutics & drug dis… (2015) | popPK | 9 | [10.1002/bdd.1935](https://doi.org/10.1002/bdd.1935) | [25545238](https://pubmed.ncbi.nlm.nih.gov/25545238) | Irbesartan is the subject of a two-compartment PK/PD study, but its numeric disposition parameters are not provided in the evidence. |
| `Huang_2005_2.pdf` | Huang XH et al., Pharmacokinetic and pharmacodynamic of…, European journal of drug me… (2005) | popPK | 9 | [10.1007/BF03226417](https://doi.org/10.1007/BF03226417) | [16010871](https://pubmed.ncbi.nlm.nih.gov/16010871) | Irbesartan PK was modeled in dogs, but no numeric disposition parameters appear in the provided evidence. |
| `Huang_2006.pdf` | Huang XH et al., PK-PD modeling of irbesartan in healthy…, European journal of drug me… (2006) | popPK | 8 | [10.1007/BF03190465](https://doi.org/10.1007/BF03190465) | [17315536](https://pubmed.ncbi.nlm.nih.gov/17315536) | The study reports a two-compartment irbesartan model, but the evidence gives only numeric PD parameters, not numeric PK disposition values. |
| `Kaur_2020.pdf` | Kaur N et al., Understanding the Oral Absorption of Ir…, AAPS PharmSciTech (2020) | popPK | 8 | [10.1208/s12249-020-01643-x](https://doi.org/10.1208/s12249-020-01643-x) | [32152915](https://pubmed.ncbi.nlm.nih.gov/32152915) | Irbesartan is modeled with PBPK, but no numeric disposition parameter values appear in the provided evidence. |
| `Huang_2005.pdf` | Huang XH et al., Pharmacokinetic and pharmacodynamic int…, Journal of cardiovascular p… (2005) | pd | 5 | [10.1097/01.fjc.0000191289.35182.7e](https://doi.org/10.1097/01.fjc.0000191289.35182.7e) | [16306814](https://www.ncbi.nlm.nih.gov/pubmed/16306814) | metadata signals extractable PD data (PK/PD) |
| `García-Sáinz_1997.pdf` | García-Sáinz JA et al., Characterization of the AT1 angiotensin…, The Journal of endocrinology (1997) | pd | 4 | [10.1677/joe.0.1540133](https://doi.org/10.1677/joe.0.1540133) | [9246947](https://www.ncbi.nlm.nih.gov/pubmed/9246947) | metadata signals extractable PD data (EC50) |
| `Choi_2012.pdf` | Choi CI et al., CYP2C9 3 and 13 alleles significantly a…, European journal of clinica… (2012) | pgx | 8 | [10.1007/s00228-011-1098-0](https://doi.org/10.1007/s00228-011-1098-0) | [21842338](https://www.ncbi.nlm.nih.gov/pubmed/21842338) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Hong_2005.pdf` | Hong X et al., CYP2C9*3 allelic variant is associated…, European journal of clinica… (2005) | pgx | 8 | [10.1007/s00228-005-0976-8](https://doi.org/10.1007/s00228-005-0976-8) | [16094537](https://www.ncbi.nlm.nih.gov/pubmed/16094537) | metadata signals extractable PGX data (CYP2C9*3, PK/PD-context) |
| `Wen_2026.pdf` | Wen Y et al., Using physiologically based pharmacokin…, British journal of clinical… (2026) | pgx | 8 | [10.1002/bcp.70784](https://doi.org/10.1002/bcp.70784) | [42595332](https://www.ncbi.nlm.nih.gov/pubmed/42595332) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Li_2024.pdf` | Li Y et al., Drug-drug interaction between danshensu…, Xenobiotica; the fate of fo… (2024) | pgx | 7 | [10.1080/00498254.2024.2338183](https://doi.org/10.1080/00498254.2024.2338183) | [38591142](https://www.ncbi.nlm.nih.gov/pubmed/38591142) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Mishima_2016.pdf` | Mishima M et al., Effects of Uric Acid on the NO Producti…, Drug research (2016) | pgx | 7 | [10.1055/s-0035-1569405](https://doi.org/10.1055/s-0035-1569405) | [26909689](https://www.ncbi.nlm.nih.gov/pubmed/26909689) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Wang_2021.pdf` | Wang Y et al., Pharmacokinetic study on the interactio…, Pharmaceutical biology (2021) | pgx | 7 | [10.1080/13880209.2021.2002370](https://doi.org/10.1080/13880209.2021.2002370) | [34818122](https://www.ncbi.nlm.nih.gov/pubmed/34818122) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Weiss_2010.pdf` | Weiss J et al., Interaction of angiotensin receptor typ…, Biopharmaceutics & drug dis… (2010) | pgx | 7 | [10.1002/bdd.699](https://doi.org/10.1002/bdd.699) | [20222053](https://www.ncbi.nlm.nih.gov/pubmed/20222053) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Yang_2016.pdf` | Yang R et al., Drug Interactions with Angiotensin Rece…, Current drug metabolism (2016) | pgx | 7 | [10.2174/1389200217666160524143843](https://doi.org/10.2174/1389200217666160524143843) | [27216792](https://www.ncbi.nlm.nih.gov/pubmed/27216792) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Kurland_2002.pdf` | Kurland L et al., Polymorphisms in the angiotensinogen an…, Journal of hypertension (2002) | pgx | 5 | [10.1097/00004872-200204000-00023](https://doi.org/10.1097/00004872-200204000-00023) | [11910301](https://www.ncbi.nlm.nih.gov/pubmed/11910301) | metadata signals extractable PGX data (CYP11B2) |
| `Wang_2022.pdf` | Wang Q et al., Influence of AGTR1 and ABCB1 Gene Polym…, International journal of hy… (2022) | pgx | 5 | [10.1155/2022/4278675](https://doi.org/10.1155/2022/4278675) | [36404948](https://www.ncbi.nlm.nih.gov/pubmed/36404948) | metadata signals extractable PGX data (ABCB1) |
| `Wen_2003.pdf` | Wen SY et al., Rapid detection of the known SNPs of CY…, World journal of gastroente… (2003) | pgx | 5 | [10.3748/wjg.v9.i6.1342](https://doi.org/10.3748/wjg.v9.i6.1342) | [12800253](https://www.ncbi.nlm.nih.gov/pubmed/12800253) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-09-30T17:08:54.913950+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Elmfeldt_2002 | irrelevant | 0 | 0 | This is an antihypertensive dose-response analysis, not a PK study, and reports no irbesartan disposition parameters. |
| popPK | Evans_2012 | irrelevant | 0 | 0 | This is an outcomes analysis and reports no irbesartan pharmacokinetic disposition parameters. |
| PGx | Gallo_2013 | not_relevant | 2 | 1 | The case speculates that an unspecified hepatic-metabolism variant may increase concentrations of several agents, including irbesartan, but reports no irbesartan-specific PK/PD parameter or genotype effect. |
| popPK | García-Sáinz_1997 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | García-Sáinz_1997 | not_relevant | 0 | 0 | The supplied text contains only the title and reports no irbesartan-specific exposure- or dose-response data or numeric PD parameters. |
| popPK | Gradman_2002 | irrelevant | 0 | 0 | This review reports no irbesartan disposition parameters, and the referenced Table 1 contains only a caption, not readable numeric values. |
| PD | Gradman_2002 | not_relevant | 3 | 0 | Review qualitatively mentions an Emax meta-analysis, but the provided text contains no numeric irbesartan PD parameters or extractable effect-versus-dose curve. |
| PGx | Ha_2026 | not_relevant | 1 | 1 | Reports overall irbesartan responsiveness but does not link a specific genotype or phenotype to a change in an irbesartan PK or PD parameter. |
| PGx | He_2013 | not_relevant | 0 | 8 | The paper reports no significant KCNH2 genotype difference in irbesartan response; the HR association was reported for a pooled group receiving irbesartan, candesartan, or imidapril. |
| popPK | Hedaya_2015 | relevant | 9 | 1 | Irbesartan is the subject of a two-compartment PK/PD study, but its numeric disposition parameters are not provided in the evidence. |
| popPK | Huang_2005 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Huang_2005 | not_relevant | 2 | 0 | The title indicates a PK/PD interaction study, but the supplied text contains no numeric exposure- or dose-effect relationship or derivable PD parameters. |
| popPK | Huang_2005_2 | relevant | 9 | 0 | Irbesartan PK was modeled in dogs, but no numeric disposition parameters appear in the provided evidence. |
| PD | Huang_2005_2 | not_relevant | 3 | 0 | The abstract states that effects followed a sigmoid-Emax relationship with effect-compartment concentration, but reports no numeric PD parameters or extractable effect-versus-concentration curve. |
| popPK | Huang_2006 | relevant | 8 | 1 | The study reports a two-compartment irbesartan model, but the evidence gives only numeric PD parameters, not numeric PK disposition values. |
| popPK | Kaur_2020 | relevant | 8 | 0 | Irbesartan is modeled with PBPK, but no numeric disposition parameter values appear in the provided evidence. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper examines a drug–drug interaction between danshensu and irbesartan, not a gene variant, genotype, or phenotype effect. |
| PGx | Mishima_2016 | not_relevant | 0 | 0 | The paper studies uric acid effects on endothelial nitric oxide production, not genetic effects on an irbesartan PK or PD parameter. |
| popPK | Ngai_2025 | irrelevant | 0 | 0 | Irbesartan is only a comparator in a kidney-outcomes analysis, and no pharmacokinetic parameter values are reported. |
| PGx | Nijiati_2021 | not_relevant | 0 | 0 | The study reports irbesartan effects in a rat disease model but no genetic or phenotypic differences in its PK or PD. |
| PGx | Paré_2012 | not_relevant | 0 | 0 | The study reports PON1 genotype associations with clopidogrel outcomes, not an effect on any irbesartan PK or PD parameter. |
| PGx | Peyriere_2012 | not_relevant | 0 | 0 | The review mentions possible drug interactions involving irbesartan but reports no gene variant, genotype, or phenotype effect on its PK or PD parameters. |
| popPK | Ruilope_1997 | irrelevant | 1 | 2 | This review gives only summary Tmax and half-life values, not qualifying disposition or population-PK parameters; no such values are relegated to missing supplementary material or figures. |
| PD | Ruilope_1997 | not_relevant | 2 | 0 | This is a qualitative review summary; it gives timing and duration of blood-pressure effects but no extractable dose- or concentration-response relationship or numeric PD parameters. |
| PGx | Senda_2017 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of arachidonic acid metabolism by irbesartan, but no gene variant, genotype, or phenotype effect on irbesartan PK or PD. |
| PGx | Taavitsainen_2000 | not_relevant | 0 | 0 | The study measures in vitro CYP inhibition by irbesartan, not a gene variant or phenotype effect on an irbesartan PK/PD parameter. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper studies a succinic acid–irbesartan interaction in rats, not a genetic effect on irbesartan PK or PD. |
| PGx | Weiss_2010 | not_relevant | 0 | 0 | The study tests irbesartan’s effects on ABC-transporter activity in vitro, but reports no genetic variant, genotype, or phenotype effect on an irbesartan PK or PD parameter. |
| PGx | Wen_2003 | not_relevant | 0 | 0 | The paper describes detecting CYP2C9 SNPs and does not report an irbesartan pharmacokinetic or pharmacodynamic effect. |
| PGx | Wen_2026 | not_relevant | 0 | 0 | The genotype-dependent exposure effect reported is for repaglinide, not irbesartan. |
| PGx | Yan_2012 | not_relevant | 0 | 0 | The paper studies drug–drug effects on indapamide metabolism, not genetic effects on irbesartan pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The provided text identifies a review of CYP-mediated drug interactions, not a pharmacogenomic effect of a gene variant, genotype, or phenotype on irbesartan. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The study examines NTCP deficiency and irbesartan treatment in APAP-induced hepatotoxicity, but does not report a genetic effect on irbesartan PK or PD parameters. |
| popPK | Zannad_2007 | irrelevant | 0 | 0 | This is an efficacy overview, not a PK study, and reports no irbesartan disposition parameters. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | This is a blood-pressure trial, not a PK study, and it reports no irbesartan disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 17:09 UTC</sub>
