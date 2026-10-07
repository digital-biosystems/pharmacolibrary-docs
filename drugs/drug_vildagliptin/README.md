<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;vildagliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vildagliptin_Dias2026_reference&quot;,&quot;label&quot;:&quot;Dias_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vildagliptin

- **generic name:** vildagliptin
- **ATC codes:** `A10BD08`, `A10BH02`
- **DrugBank:** [DB04876](https://go.drugbank.com/drugs/DB04876) · **PubChem:** [CID 6918537](https://pubchem.ncbi.nlm.nih.gov/compound/6918537)
- **molar mass:** 303.3993 g/mol (C17H25N3O2) — DrugBank
- **groups:** approved, investigational

## About

Vildagliptin is a DPP-4 inhibitor used to lower blood glucose in adults with type 2 diabetes. It is authorised in the European Union and widely used as an oral diabetes medicine, often in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421042](https://www.wikidata.org/wiki/Q421042) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vildagliptin | parent | 303.399 | C17H25N3O2 | DrugBank | [6918537](https://pubchem.ncbi.nlm.nih.gov/compound/6918537) | Dias_2026, He_2007_2, Landersdorfer_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:23 | 1:46 | 1/1/1 | 0/0/0 | 0/0/1 | 145,292/8,826 | einfracz / qwen3.8-27b | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Dias_2026_reference](drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Dias BB et al., Preclinical Modeling and Simulation to…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70165](https://doi.org/10.1002/psp4.70165) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.231). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [He_2007_2_reference](drugs/drug_vildagliptin/Vildagliptin_He2007v2_reference.md) | — | 1-compartment (no model) | 4 | He YL et al., The absolute oral bioavailability and p…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746090-00006](https://doi.org/10.2165/00003088-200746090-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Landersdorfer_2012_reference](drugs/drug_vildagliptin/Vildagliptin_Landersdorfer2012_reference.md) | — | general linear (no model) | 3 | Landersdorfer CB et al., Mechanism-based population pharmacokine…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2011.04108.x](https://doi.org/10.1111/j.1365-2125.2011.04108.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CREBRF** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Toomata_2025](drugs/drug_vildagliptin/pgx_Toomata_2025_CREBRF_Q100.md) | Toomata ZLL et al., Reduced Weight Gain with Pioglitazone v…, Diabetes, metabolic syndrom… (2025) | [10.2147/DMSO.S500336](https://doi.org/10.2147/DMSO.S500336) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vildagliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CREBRF (target), DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2007_2.pdf` | He YL et al., The absolute oral bioavailability and p…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746090-00006](https://doi.org/10.2165/00003088-200746090-00006) | [17713976](https://pubmed.ncbi.nlm.nih.gov/17713976) | The abstract provides explicit quantitative PK parameters including total systemic clearance (41 L/h), renal clearance (13 L/h), absorption rate constants, and bioavailability for vildagliptin in humans. |
| `Landersdorfer_2012.pdf` | Landersdorfer CB et al., Mechanism-based population pharmacokine…, British journal of clinical… (2012) | popPK | 10 | [10.1111/j.1365-2125.2011.04108.x](https://doi.org/10.1111/j.1365-2125.2011.04108.x) | [22442826](https://pubmed.ncbi.nlm.nih.gov/22442826) | The paper reports quantitative population pharmacokinetic parameters (clearance, volume, half-lives) for vildagliptin in humans with values explicitly provided in the abstract. |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:22:02.825676+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chitnis_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin as the subject drug for bioequivalence, while vildagliptin is only a component of the formulation and not the subject of PK modeling or reporting. |
| popPK | Fang_2020 | irrelevant | 0 | 0 | The paper focuses on the design and synthesis of new DPP-4 inhibitors and compares their glucose-lowering efficacy in mice to vildagliptin, but does not report pharmacokinetic parameters for vildagliptin. |
| PD | Fang_2020 | not_relevant | 1 | 0 | The paper reports in vitro potency (EC50) and a single-point in vivo efficacy comparison (AUC reduction) for a new compound against vildagliptin, but does not provide an exposure-response or dose-response curve or numeric PD parameters for vildagliptin. |
| popPK | Fang_2020_2 | irrelevant | 0 | 0 | The study focuses on the development of GPR119 agonists and uses vildagliptin only as a reference for hypoglycemic effect, without reporting any pharmacokinetic parameters. |
| PD | Fang_2020_2 | not_relevant | 2 | 1 | The paper reports in vitro EC50 values for novel GPR119 agonists and a single-point in vivo efficacy comparison against vildagliptin, but does not provide a dose-response curve or numeric PD parameters for vildagliptin itself. |
| popPK | Gibbs_2012 | irrelevant | 2 | 0 | The paper is a pharmacodynamic meta-analysis modeling HbA1c response to DPP-4 inhibitors, not a study reporting quantitative pharmacokinetic parameters (CL, V, ka) for vildagliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper is a review comparing the general pharmacokinetics of DPP-4 inhibitors and does not report any specific gene variants or genotypes affecting vildagliptin. |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study evaluates the dose-response relationship of DPP-4 inhibitors on HbA1c levels using machine learning models and does not report any pharmacokinetic parameters (e.g., CL, V, ka) for vildagliptin. |
| PGx | He_2012 | not_relevant | 0 | 0 | The paper describes general PK/PD and notes that ethnicity does not influence PK/PD, but it does not report specific pharmacogenomic variants or gene-based effects. |
| popPK | Horie_2014 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (insulin sensitivity, C-peptide secretion) and clinical outcomes, not vildagliptin pharmacokinetic parameters (CL, V, ka). |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 polymorphism is unlikely to affect the response to vildagliptin because the liver is not important for its elimination or action. |
| popPK | Landersdorfer_2012_2 | irrelevant | 3 | 0 | The study focuses on a mechanism-based population pharmacodynamic (PD) model for GLP-1, glucose, and insulin, and while vildagliptin concentrations were co-modelled, no quantitative PK parameter values (CL, V, etc.) are reported in the provided evidence. |
| popPK | Madny_2022 | irrelevant | 2 | 0 | The study uses a physiologically based biopharmaceutics model to predict PK parameters for a new formulation, but the specific numeric parameter values for vildagliptin are not present in the provided evidence text. |
| PGx | Mostafa_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction between vildagliptin and pravastatin in a cell model, but does not report any genetic variants or genotypes affecting vildagliptin's PK or PD. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for DPP-4 inhibitors and does not report pharmacogenomic effects (gene variants) on the PK/PD of vildagliptin. |
| popPK | Tatosian_2013 | irrelevant | 2 | 0 | The study is primarily a pharmacodynamic comparison of DPP-4 inhibition; while it mentions non-compartmental PK analysis, the table containing the specific vildagliptin PK values (Cmax, AUC, half-life) is truncated in the provided evidence. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new dual-target compounds and does not report population-pharmacokinetic parameters for vildagliptin. |
| PD | Yang_2025 | not_relevant | 2 | 1 | The paper reports in vitro potency (IC50/EC50) for a new dual-target compound, not a pharmacodynamic exposure-response or dose-response relationship for vildagliptin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:22 UTC</sub>
