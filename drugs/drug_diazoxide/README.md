<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;diazoxide&quot;}]"></div>

# diazoxide

- **generic name:** diazoxide
- **ATC codes:** `C02DA01`, `V03AH01`
- **DrugBank:** [DB01119](https://go.drugbank.com/drugs/DB01119) · **PubChem:** [CID 3019](https://pubchem.ncbi.nlm.nih.gov/compound/3019)
- **molar mass:** 230.671 g/mol (C8H7ClN2O2S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Diazoxide is a non-diuretic benzothiadiazine derivative that activates ATP-sensitive potassium channels.[A255647,L44612] It is chemically related to thiazide diuretics but does not inhibit carbonic anhydrase and does not have chloriuretic or natriuretic activity.[A190372] Diazoxide is commonly used in the treatment of hyperinsulinaemic hypoglycemia due to its ability to inhibit insulin release.[A255647] Diazoxide also exhibits hypotensive activity and reduces arteriolar smooth muscle and vascular resistance.[A190372] When administered intravenously, diazoxide can be used to treat hypertensive emergencies;[L44622] however, this specific form of diazoxide is no longer available in the US. Diazoxide is usually well tolerated, and some of its more common side effects include fluid retention and electrolyte disturbances. In September 2015, the FDA issued a safety alert regarding post-marketing reports of pulmonary hypertension occurring in infants and neonates.[A255647,L44612]

In March 2025, an extended-release formulation of diazoxide choline was approved by the FDA for the treatment of hyperphagia in patients with Prader-Willi syndrome, becoming the first FDA-approved therapy for this condition.[L52720,L52725]

**Indication.** Oral diazoxide is indicated to manage hypoglycemia due to hyperinsulinism associated with conditions such as inoperable islet cell adenoma or carcinoma, and extrapancreatic malignancy in adults, or leucine sensitivity, islet cell hyperplasia, nesidioblastosis, extrapancreatic malignancy, islet cell adenoma, and adenomatosis in infants and children. In infants and children oral diazoxide may be used preoperatively as a temporary measure, and postoperatively, if hypoglycemia persists.[L44612] Diazoxide may also be used parentally or intravenously to treat hypertensive emergencies.[A255632,L44622]

In addition, extended-release diazoxide choline is indicated for the treatment of hyperphagia in adults and pediatric patients 4 years of age and older with Prader-Willi syndrome (PWS).[L52720]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| diazoxide | parent | 230.671 | C8H7ClN2O2S | DrugBank | [3019](https://pubchem.ncbi.nlm.nih.gov/compound/3019) | Kizu_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:01 | 1:57 | 0/1/0 | 0/0/0 | 0/0/7 | 29,344/5,344 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kizu_2017_reference](drugs/drug_diazoxide/Diazoxide_Kizu2017_reference.md) | — | 1-compartment (no model) | 0 | Kizu R et al., Population Pharmacokinetics of Diazoxid…, Hormone research in paediat… (2017) | [10.1159/000478696](https://doi.org/10.1159/000478696) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **ABCC8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Nair_2026](drugs/drug_diazoxide/pgx_Nair_2026_ABCC8_Q100.md) | Nair AK et al., Modelling the effects of human SUR1 R14…, Diabetologia (2026) | [10.1007/s00125-025-06605-1](https://doi.org/10.1007/s00125-025-06605-1) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCC8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_ABCC8_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **GLUD1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_GLUD1_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **HADH** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_HADH_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **HNF1A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_HNF1A_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **HNF4A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_HNF4A_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **KCNJ11** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Wong_2026](drugs/drug_diazoxide/pgx_Wong_2026_KCNJ11_Q100.md) | Wong T et al., From standard to individualized diazoxi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1781424](https://doi.org/10.3389/fphar.2026.1781424) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diazoxide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (target), ATP5F1A (inhibitor), GLUD1 (target), HADH (target), HNF1A (target), HNF4A (target), KCNJ11 (inducer), KCNJ11 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 27 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kizu_2017.pdf` | Kizu R et al., Population Pharmacokinetics of Diazoxid…, Hormone research in paediat… (2017) | popPK | 10 | [10.1159/000478696](https://doi.org/10.1159/000478696) | [28715810](https://pubmed.ncbi.nlm.nih.gov/28715810) | The evidence explicitly provides the quantitative population pharmacokinetic model equations for oral clearance (CL/F) and volume of distribution in children. |
| `El-Meanawy_2023.pdf` | El-Meanawy SK et al., Overexpression of a Short Sulfonylurea…, Life (Basel, Switzerland) (2023) | pgx | 5 | [10.3390/life13041015](https://doi.org/10.3390/life13041015) | [37109544](https://www.ncbi.nlm.nih.gov/pubmed/37109544) | metadata signals extractable PGX data (ABCB8) |
| `Männistö_2020.pdf` | Männistö JME et al., Clinical and Genetic Characterization o…, The Journal of clinical end… (2020) | pgx | 5 | [10.1210/clinem/dgz271](https://doi.org/10.1210/clinem/dgz271) | [32170320](https://www.ncbi.nlm.nih.gov/pubmed/32170320) | metadata signals extractable PGX data (ABCC8) |
| `Ohkubo_2005.pdf` | Ohkubo K et al., Genotypes of the pancreatic beta-cell K…, Clinical endocrinology (2005) | pgx | 5 | [10.1111/j.1365-2265.2005.02242.x](https://doi.org/10.1111/j.1365-2265.2005.02242.x) | [15807877](https://www.ncbi.nlm.nih.gov/pubmed/15807877) | metadata signals extractable PGX data (ABCC8) |

<sub>queue written 2026-09-30T06:00:46.206912+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alemzadeh_1993 | not_relevant | 0 | 0 | The study investigates the physiological effects of diazoxide on insulin resistance in rats and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Alemzadeh_1996 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of diazoxide in obese vs. lean rats, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Bessadok_2011 | not_relevant | 0 | 0 | The paper investigates the interaction of diazoxide with P-glycoprotein in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Butler_2025 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of diazoxide and the biology of the KCNJ11 gene in Prader-Willi Syndrome but does not report any pharmacogenomic study linking specific genotypes to changes in diazoxide PK or PD parameters. |
| PGx | De_2020 | not_relevant | 0 | 0 | The paper reports a case of congenital hyperinsulinism caused by a CACNA1D mutation and mentions diazoxide treatment, but it does not report any pharmacokinetic or pharmacodynamic parameters of diazoxide or how the genotype affects them. |
| popPK | Deja_2009 | irrelevant | 0 | 0 | The study is a clinical trial assessing cardioprotective efficacy and mitochondrial function, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for diazoxide. |
| PGx | El-Meanawy_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of SUR2A-55 overexpression on mitochondrial function and glucose uptake, using diazoxide only as a tool compound to probe channel activity, rather than reporting a pharmacogenomic effect on diazoxide's PK or PD parameters. |
| PGx | Flechtner_2006 | not_relevant | 2 | 0 | The paper discusses the mechanism of action of diazoxide in the context of KCNJ11 mutations but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, ED50) resulting from the genotype. |
| PGx | Laaraje_2025 | not_relevant | 0 | 0 | The paper reports a case of congenital hyperinsulinism caused by HADH and GHSR mutations, but diazoxide was not administered due to unavailability, so no pharmacokinetic or pharmacodynamic effects of the drug were measured. |
| PGx | Mouron-Hryciuk_2021 | not_relevant | 2 | 0 | The paper reports clinical outcomes (remission, side effects) and genetic associations for diazoxide in congenital hyperinsulinism, but does not report pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, ED50) driven by genotype. |
| PGx | Männistö_2020 | not_relevant | 2 | 0 | The paper reports genetic associations with the clinical diagnosis of congenital hyperinsulinism and general diazoxide responsiveness, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, ED50) linked to specific genotypes. |
| PGx | Ni_2019 | not_relevant | 0 | 0 | The paper reports clinical response to diazoxide in a cohort but does not analyze specific gene variants' effects on pharmacokinetic or pharmacodynamic parameters of the drug. |
| PGx | Ohkubo_2005 | not_relevant | 2 | 0 | The paper reports genetic mutations associated with the disease phenotype (PHHI) and clinical response to diazoxide, but does not quantify specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, insulin suppression levels) as a function of genotype. |
| PGx | Stanik_2017 | not_relevant | 2 | 0 | The paper reports a clinical response to diazoxide in a patient with an HNF4A mutation but does not measure or report specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, insulin suppression curve values) to quantify the pharmacogenomic effect. |
| PGx | Staník_2016 | not_relevant | 2 | 0 | The text is a general overview of congenital hyperinsulinism and mentions diazoxide resistance qualitatively but provides no specific pharmacokinetic or pharmacodynamic data or quantitative effect sizes for gene variants. |
| PGx | Wexler_2024 | not_relevant | 2 | 5 | The paper reports a change in pharmacodynamic sensitivity (reduced sensitivity to diazoxide) in a transgenic mouse model, but it does not report a pharmacokinetic parameter or a standard pharmacogenomic effect size for a human clinical context. |
| PGx | Wong_2026 | not_relevant | 5 | 2 | The paper discusses genotype-guided dosing and qualitative associations between genetic variants (e.g., ABCC8, HNF1A) and diazoxide response (efficacy/side effects), but it does not report specific quantitative pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, clearance, EC50) fitted to specific genotypes. |
| PGx | Yamauchi_2003 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanism of diazoxide in retinal neurons and does not report any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 22:50 UTC</sub>
