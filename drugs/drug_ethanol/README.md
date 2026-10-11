<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;ethanol&quot;}]"></div>

# ethanol

- **generic name:** ethanol
- **ATC codes:** `D08AX08`, `V03AB16`, `V03AZ01`
- **DrugBank:** [DB00898](https://go.drugbank.com/drugs/DB00898) · **PubChem:** [CID 702](https://pubchem.ncbi.nlm.nih.gov/compound/702)
- **molar mass:** 46.0684 g/mol (C2H6O) — DrugBank
- **groups:** approved, investigational

## About

Ethanol is used as an antiseptic and disinfectant for the skin, and as an antidote, for example in poisoning by toxic alcohols. It is widely used, mainly in topical antiseptic products, and is also approved for other therapeutic uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q153](https://www.wikidata.org/wiki/Q153) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ethanol | parent | 46.0684 | C2H6O | DrugBank | [702](https://pubchem.ncbi.nlm.nih.gov/compound/702) | Holford_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:47 | 2:12 | 0/1/0 | 1/0/0 | 0/0/4 | 142,181/7,521 | einfracz / qwen3.8-27b | 18 | 2/16 | 15/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Holford_1987_reference](drugs/drug_ethanol/Ethanol_Holford1987_reference.md) | — | 1-compartment (no model) | 6 | Holford NH, Clinical pharmacokinetics of ethanol, Clinical pharmacokinetics (1987) | [10.2165/00003088-198713050-00001](https://doi.org/10.2165/00003088-198713050-00001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [North_2020_middle_cerebral_arteries_constriction](drugs/drug_ethanol/pd_North_2020_middle_cerebral_arteries_constriction.md) | middle cerebral arteries constriction ← ethanol · inhibition effect | — | North K et al., Celastrol Dilates and Counteracts Ethan…, The Journal of pharmacology… (2020) | [10.1124/jpet.120.000152](https://doi.org/10.1124/jpet.120.000152) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ADH3** | `Q26` · CLR | metabolism | [Couzigou_1991](drugs/drug_ethanol/pgx_Couzigou_1991_ADH3_Q26.md) | Couzigou P et al., Role of alcohol dehydrogenase polymorph…, Advances in experimental me… (1991) | [10.1007/978-1-4684-5901-2_28](https://doi.org/10.1007/978-1-4684-5901-2_28) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Heilig_2011](drugs/drug_ethanol/pgx_Heilig_2011_OPRM1_Q100.md) | Heilig M et al., Pharmacogenetic approaches to the treat…, Nature reviews. Neuroscience (2011) | [10.1038/nrn3110](https://doi.org/10.1038/nrn3110) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ALDH2** | `Q61` · V | metabolism | [Nemoto_2017](drugs/drug_ethanol/pgx_Nemoto_2017_ALDH2_Q61.md) | Nemoto A et al., A Bayesian Approach for Population Phar…, Current therapeutic researc… (2017) | [10.1016/j.curtheres.2017.04.001](https://doi.org/10.1016/j.curtheres.2017.04.001) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Sennesael_2018](drugs/drug_ethanol/pgx_Sennesael_2018_ABCB1_Q100.md) | Sennesael AL et al., Rivaroxaban plasma levels in patients a…, Thrombosis journal (2018) | [10.1186/s12959-018-0183-3](https://doi.org/10.1186/s12959-018-0183-3) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ethanol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| distribution | blood | `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | liver | `ADH1B` substrate, `ALDH2` metabolism, `CYP1A2` substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2E1` inducer/substrate, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| — | blood | `ACHE` activator | DrugBank actor |
| — | neuromuscular junction | `ACHE` activator | DrugBank actor |

<sub>Actors without a tissue in the table: ADH1A (substrate), ADH1C (substrate), ADH3 (metabolism), ADH4 (substrate), ADH5 (substrate), ADH6 (substrate), ADH7 (substrate), AKR1A1 (substrate), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1S (inhibitor), CACNB1 (inhibitor), CACNG1 (unknown), CACNG2 (unknown), CHRNA10 (unknown), CHRNA2 (unknown), CHRNA3 (unknown), CHRNA4 (unknown), CHRNA5 (unknown), CHRNA6 (unknown), CHRNA7 (unknown), CHRNA9 (unknown), CHRNB2 (unknown), CHRNB3 (unknown), CHRNB4 (unknown), CYP4A11 (inducer), GABRA1 (target), GABRA2 (unknown), GABRA3 (unknown), GABRA4 (unknown), GABRA5 (unknown), GABRA6 (unknown), GABRB1 (unknown), GABRB2 (unknown), GABRB3 (unknown), GABRD (unknown), GABRE (unknown), GABRG1 (unknown), GABRG3 (unknown), GABRP (unknown), GABRQ (unknown), GLRA1 (target), GLRA2 (target), GRIA1 (unknown), GRIA2 (unknown), GRIA3 (unknown), GRIA4 (unknown), GRIN3A (target), HTR3A (unknown), HTR3B (unknown), HTR3C (unknown), HTR3D (unknown), HTR3E (unknown), KCNJ3 (unknown), KCNJ5 (unknown), KCNJ6 (unknown), KCNJ9 (unknown), L1CAM (unknown), OPRM1 (target), SLC29A2 (unknown), VCAM1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5300 matched, 87 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Holford_1987.pdf` | Holford NH, Clinical pharmacokinetics of ethanol, Clinical pharmacokinetics (1987) | popPK | 9 | [10.2165/00003088-198713050-00001](https://doi.org/10.2165/00003088-198713050-00001) | [3319346](https://pubmed.ncbi.nlm.nih.gov/3319346) | The text provides specific quantitative parameters including volume of distribution (37 L/70 kg), Vmax (8.5 g/h/70 kg), and Km (80 mg/L) for ethanol. |
| `Holford_1997.pdf` | Holford NH, Complex PK/PD models--an alcoholic expe…, International journal of cl… (1997) | pd | 5 | not captured | [9352397](https://www.ncbi.nlm.nih.gov/pubmed/9352397) | metadata signals extractable PD data (PK/PD) |
| `Honoré_2014.pdf` | Honoré PM et al., What do we know about steroids metaboli…, Blood purification (2014) | pd | 5 | [10.1159/000368390](https://doi.org/10.1159/000368390) | [25471548](https://www.ncbi.nlm.nih.gov/pubmed/25471548) | metadata signals extractable PD data (PK/PD) |
| `Grasmäder_2004.pdf` | Grasmäder K et al., Population pharmacokinetic analysis of…, European journal of clinica… (2004) | pgx | 8 | [10.1007/s00228-004-0737-0](https://doi.org/10.1007/s00228-004-0737-0) | [15289959](https://www.ncbi.nlm.nih.gov/pubmed/15289959) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mansour_2024.pdf` | Mansour K et al., Exploring clozapine pharmacokinetics in…, Basic & clinical pharmacolo… (2024) | pgx | 8 | [10.1111/bcpt.14009](https://doi.org/10.1111/bcpt.14009) | [38599832](https://www.ncbi.nlm.nih.gov/pubmed/38599832) | metadata signals extractable PGX data (CYP1A2*1C, PK/PD-context) |
| `Santoro_2011.pdf` | Santoro A et al., Pharmacogenetics of calcineurin inhibit…, Pharmacogenomics (2011) | pgx | 8 | [10.2217/pgs.11.70](https://doi.org/10.2217/pgs.11.70) | [21806386](https://www.ncbi.nlm.nih.gov/pubmed/21806386) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Seng_2013.pdf` | Seng KY et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2013) | pgx | 8 | [10.1111/jcpt.12003](https://doi.org/10.1111/jcpt.12003) | [23240771](https://www.ncbi.nlm.nih.gov/pubmed/23240771) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Skryabin_2022.pdf` | Skryabin VY et al., Effects of CYP2C19*17 genetic polymorph…, Psychiatric genetics (2022) | pgx | 8 | [10.1097/YPG.0000000000000306](https://doi.org/10.1097/YPG.0000000000000306) | [35001019](https://www.ncbi.nlm.nih.gov/pubmed/35001019) | metadata signals extractable PGX data (CYP2C19*17, PK/PD-context) |
| `Zastrozhin_2021.pdf` | Zastrozhin M et al., Effect of Genetic Polymorphism of the C…, American journal of therape… (2021) | pgx | 8 | [10.1097/MJT.0000000000001388](https://doi.org/10.1097/MJT.0000000000001388) | [34117140](https://www.ncbi.nlm.nih.gov/pubmed/34117140) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zastrozhin_2022.pdf` | Zastrozhin MS et al., Influence of CYP2C19*17 Genetic Polymor…, Psychopharmacology bulletin (2022) | pgx | 8 | [10.64719/pb.4440](https://doi.org/10.64719/pb.4440) | [35815173](https://www.ncbi.nlm.nih.gov/pubmed/35815173) | metadata signals extractable PGX data (CYP2C19*17, PK/PD-context) |
| `Bansal_2023.pdf` | Bansal S et al., Evaluation of Cytochrome P450-Mediated…, Clinical pharmacology and t… (2023) | pgx | 7 | [10.1002/cpt.2973](https://doi.org/10.1002/cpt.2973) | [37313955](https://www.ncbi.nlm.nih.gov/pubmed/37313955) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Florek_2015.pdf` | Florek E et al., Influence of tobacco smoke exposure on…, Pharmacological reports : PR (2015) | pgx | 7 | [10.1016/j.pharep.2015.02.007](https://doi.org/10.1016/j.pharep.2015.02.007) | [26398386](https://www.ncbi.nlm.nih.gov/pubmed/26398386) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Wilde_2007.pdf` | Wilde S et al., Population pharmacokinetics of the BEAC…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746040-00005](https://doi.org/10.2165/00003088-200746040-00005) | [17375983](https://www.ncbi.nlm.nih.gov/pubmed/17375983) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nakamura_2011.pdf` | Nakamura S et al., Ipso substitution of bisphenol A cataly…, Toxicology letters (2011) | pgx | 5 | [10.1016/j.toxlet.2011.03.010](https://doi.org/10.1016/j.toxlet.2011.03.010) | [21402134](https://www.ncbi.nlm.nih.gov/pubmed/21402134) | metadata signals extractable PGX data (CYP3A4) |
| `Sam_2011.pdf` | Sam WJ et al., Associations of ABCB1 3435C&gt;T and IL-10…, Transplantation (2011) | pgx | 5 | [10.1097/TP.0b013e3182384ae2](https://doi.org/10.1097/TP.0b013e3182384ae2) | [22094953](https://www.ncbi.nlm.nih.gov/pubmed/22094953) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-07T21:45:26.929650+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bansal_2023 | not_relevant | 0 | 0 | The study evaluates cannabinoid-drug interactions on CYP enzymes and does not investigate the pharmacokinetics or pharmacodynamics of ethanol or its metabolic pathways. |
| PGx | Barletta_2025 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of fentanyl, not ethanol. |
| PGx | Bean_2000 | not_relevant | 0 | 0 | The paper focuses on the association between alcohol use and HIV therapy outcomes, not on how genetic variants affect the PK or PD of ethanol. |
| popPK | Bergmann_2012 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of prednisolone and prednisone, not ethanol. |
| PGx | Boniforti_1979 | not_relevant | 0 | 0 | The paper focuses on using gas-liquid chromatography to identify anaerobic bacteria, not on the pharmacokinetics or pharmacogenomics of ethanol. |
| popPK | Brosnan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of L-carvone, and ethanol is only mentioned as a solvent in the formulation, not as the subject drug. |
| PGx | Busto_2000 | not_relevant | 5 | 2 | The text is a title without body content, so specific PK/PD parameters or quantitative effect sizes for ethanol cannot be assessed. |
| PGx | Całka_2022 | not_relevant | 0 | 0 | The study investigates the association between ADH7 SNPs and the risk of alcohol abuse (a behavioral outcome), not the effect of these variants on ethanol pharmacokinetic or pharmacodynamic parameters. |
| PGx | Couzigou_1991 | not_relevant | 7 | 4 | This is a methods/introduction draft section describing the study design and genotyping strategies for ADH polymorphism on ethanol metabolism and liver disease, but it lacks a results section with quantitative data comparing PK/PD parameters between genotypes. |
| PGx | Crabbe_1986 | not_relevant | 2 | 1 | The paper reports a genetic influence on behavioral response (locomotor activity) to ethanol, but it does not define or quantify a specific pharmacokinetic (PK) or pharmacodynamic (PD) parameter (e.g., AUC, Cmax, EC50, Kd) as required. |
| PGx | Crabbe_2004 | not_relevant | 5 | 2 | The provided text is a title only and does not contain the results, tables, or quantitative data required to extract specific pharmacokinetic or pharmacodynamic parameter changes for ethanol. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of polatuzumab vedotin (an antibody-drug conjugate) and its payload MMAE, not ethanol. |
| PD | Deng_2024 | not_relevant | 3 | 1 | The paper reports a qualitative exposure-response association (AUC vs. survival) with p-values but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative dose-response curve. |
| popPK | Doggrell_2001 | irrelevant | 0 | 0 | The paper reviews moxonidine, and ethanol is only mentioned as a context for withdrawal studies, with no PK parameters reported. |
| PGx | Eriksson_1968 | not_relevant | 0 | 0 | The paper focuses on the methodology of measuring ethyl alcohol consumption in albino rats and does not investigate any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Fekete_2022 | not_relevant | 0 | 0 | The paper investigates CYP1A2 pharmacogenomics, which is unrelated to the pharmacokinetics of ethanol. |
| PGx | Florek_2015 | not_relevant | 0 | 0 | The study investigates the effect of tobacco smoke exposure and behavioral alcohol preference on ethanol pharmacokinetics, but it does not report any pharmacogenomic effects driven by specific gene variants, genotypes, or genetic phenotypes. |
| popPK | Furie_2021 | irrelevant | 0 | 0 | The paper is a clinical trial for dapirolizumab pegol in SLE and does not study ethanol pharmacokinetics. |
| PD | Furie_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of dapirolizumab pegol in SLE, not a pharmacodynamic or exposure-response analysis for ethanol. |
| PGx | Gaither_2025 | not_relevant | 0 | 0 | The study investigates the effect of chronic alcohol exposure on drug-metabolizing enzyme protein levels, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of ethanol. |
| PGx | Gogolewska_2023 | not_relevant | 0 | 0 | The study examines the association between gene polymorphisms and head and neck cancer incidence, not the pharmacokinetic or pharmacodynamic parameters of ethanol. |
| PGx | Goodman_1992 | not_relevant | 4 | 4 | The abstract suggests a gene is associated with ethanol toxicity (a toxic effect) rather than a specific pharmacokinetic or pharmacodynamic parameter of ethanol metabolism/absorption. |
| popPK | Grasmäder_2004 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| PGx | Grasmäder_2004 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of mirtazapine, not ethanol. |
| popPK | Harmon_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and immunological potency of phosphoantigen prodrugs and does not involve ethanol pharmacokinetics. |
| popPK | Holford_1997 | irrelevant | 0 | 0 | no_text gate: only 45 chars of text extracted (&lt; 400) |
| PD | Holford_1997 | not_relevant | 1 | 0 | The text is only a title suggesting a review or conceptual discussion of PK/PD models for alcohol, with no data, numeric parameters, or derivable concentration-effect relationships provided. |
| popPK | Honoré_2014 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Honoré_2014 | not_relevant | 0 | 0 | The paper is a review of steroid metabolism and PK/PD approaches in renal failure, not a study reporting specific PD parameters for ethanol. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | The paper is a review of Patchouli Alcohol (PA), not ethanol, and contains no pharmacokinetic parameters for ethanol. |
| popPK | Jogiraju_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of lenacapavir, an antiretroviral drug, where ethanol is merely an excipient in the formulation. |
| PGx | Jörnvall_2000 | not_relevant | 2 | 1 | The text is a high-level abstract describing the complexity of the ADH enzyme system and suggesting future research directions, without reporting specific quantitative pharmacogenomic effects on PK/PD parameters for ethanol. |
| PGx | Kuehn_2009 | not_relevant | 0 | 0 | The paper discusses alcohol dependence and targeted therapies but does not report pharmacogenomic effects on the PK or PD parameters of ethanol itself. |
| PGx | Kukowka_2023 | not_relevant | 0 | 0 | The study investigates the association between genotypes and the risk of FASD, not pharmacokinetic or pharmacodynamic parameters of ethanol. |
| popPK | Liang_2023 | irrelevant | 0 | 0 | The study is about triterpenoid compounds isolated from an ethanol plant extract acting on PC12 cells (in vitro), not the pharmacokinetics of the drug ethanol. |
| PGx | Lingford-Hughes_2017 | not_relevant | 0 | 0 | The text is a title of a review or perspective on addiction medicine and does not report specific pharmacogenomic data or PK/PD parameters for ethanol. |
| PGx | Lucotte_1975 | not_relevant | 0 | 0 | The paper describes general biochemical polymorphisms in quails, including alcohol dehydrogenase, but does not report a specific pharmacogenomic effect on ethanol pharmacokinetics or pharmacodynamics. |
| PGx | Mansour_2024 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of clozapine, not ethanol. |
| PGx | Markel_1999 | not_relevant | 2 | 2 | The paper describes a method for allele dose analysis and QTL mapping strategies for ethanol sensitivity and neurotensin levels, but does not report specific pharmacokinetic parameters or fitted pharmacogenomic effect sizes. |
| PGx | McClearn_1993 | not_relevant | 2 | 0 | The text is a conceptual review regarding systems biology and alcohol pharmacogenetics, lacking specific data on gene variants or PK/PD parameters. |
| PGx | McDonald_2025 | not_relevant | 0 | 0 | The study investigates the effect of ashwagandha extracts on CYP450 enzymes in hepatocytes, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of ethanol. |
| popPK | Miranda_2026 | irrelevant | 0 | 0 | The study focuses on the ecotoxicity and biodegradation of prednisone in aquatic organisms, not the pharmacokinetics of ethanol. |
| PD | Miranda_2026 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicology and biodegradation of prednisone, not ethanol, and does not report any pharmacodynamic or exposure-response relationships for ethanol. |
| popPK | Miskovic-Stankovic_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the antibiotic gentamicin, not ethanol. |
| PGx | Myers_1968 | not_relevant | 0 | 0 | The paper focuses on the methodology of measuring ethyl alcohol consumption in albino rats and does not investigate any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Nakamura_2011 | not_relevant | 0 | 0 | The paper investigates the metabolism of bisphenol A (BPA) and its metabolites' estrogenic activity, and does not report on ethanol pharmacokinetics or pharmacodynamics. |
| PGx | Nobili_2014 | not_relevant | 0 | 0 | The study investigates pharmacogenomic markers of clinical efficacy in diffuse large B-cell lymphoma (DLBCL), not the pharmacokinetic or pharmacodynamic effects of ethanol. |
| PGx | Norberg_2003 | not_relevant | 7 | 0 | The text discusses ADH polymorphism and ethnic variations but does not report specific fitted pharmacogenomic effect sizes. |
| popPK | North_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vasodilation where ethanol is used as a constricting agent, not as a subject drug for pharmacokinetic analysis. |
| PGx | Park_2017 | not_relevant | 0 | 0 | The paper reports the association between a genetic variant and bone mineral density in response to glucocorticoid treatment, which is not a pharmacokinetic or pharmacodynamic parameter of ethanol. |
| PGx | Parkhomenko_2022 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on Haloperidol, not on ethanol. |
| PGx | Pilla_2021 | not_relevant | 0 | 0 | The paper focuses on vincristine pharmacokinetics and interactions with kinase inhibitors, not ethanol. |
| PGx | Propping_1983 | not_relevant | 5 | 2 | The paper discusses a pharmacogenomic effect (genetic control of EEG response to ethanol) on a pharmacodynamic parameter, but it is a qualitative study without fitted effect sizes or specific genotype-parameter correlations. |
| PGx | Propping_1983_2 | not_relevant | 7 | 5 | It is a general review/digest of the field and does not report a specific fitted pharmacogenomic effect size on ethanol PK/PD parameters. |
| PGx | Reséndiz-Galván_2020 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid, not ethanol. |
| PGx | Riglet_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of mycophenolic acid, not ethanol. |
| popPK | Sacre_2017 | irrelevant | 0 | 0 | The study focuses on the toxicodynetics of oxazepam and nordiazepam overdoses, not the pharmacokinetics of ethanol. |
| PD | Sacre_2017 | not_relevant | 2 | 1 | The paper reports toxicodynetics (time to effect and qualitative severity) for benzodiazepines, not ethanol, and lacks numeric exposure-response parameters. |
| PGx | Sam_2011 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of sirolimus, not ethanol. |
| PGx | Santoro_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of calcineurin inhibitors (Cyclosporine and Tacrolimus), not ethanol. |
| PGx | Sennesael_2018 | not_relevant | 5 | 4 | The study investigates the pharmacokinetics of rivaroxaban (not ethanol) and reports only a small-case observational association between ABCB1 genotypes and higher-than-expected plasma levels, without fitted quantitative effect sizes. |
| PGx | Shirasu_2024 | not_relevant | 0 | 0 | The paper describes a teaching laboratory protocol for genotyping ethanol metabolism genes and performing an ethanol patch test for student comparison, but it does not report any data or fitted effect sizes quantifying how genotypes change pharmacokinetic or pharmacodynamic parameters. |
| PGx | Skryabin_2022 | not_relevant | 0 | 0 | The paper studies diazepam pharmacokinetics, not ethanol. |
| popPK | Spinola_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of working memory outcomes (cognitive effects) following alcohol administration and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Sung_2026 | not_relevant | 0 | 0 | The paper reports a clinical association between genotype and stroke onset age, not a pharmacokinetic or pharmacodynamic parameter of ethanol. |
| PGx | Taylor_2003 | not_relevant | 5 | 5 | This is a review discussing cultural and pharmacological considerations in alcohol trials, not reporting specific quantitative pharmacogenomic effect sizes. |
| PGx | Testoni_2015 | not_relevant | 0 | 0 | The paper reviews genetic lesions in diffuse large B-cell lymphoma and the efficacy of R-CHOP therapy, containing no information regarding ethanol pharmacokinetics or pharmacodynamics. |
| PGx | Varajti_2026 | not_relevant | 0 | 0 | The study analyzes the association of SNPs with colorectal cancer risk, not the effect of genetic variants on ethanol pharmacokinetics or pharmacodynamics. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper focuses on the extraction and bioactivity of polysaccharides from Corydalis decumbens and contains no pharmacokinetic data or parameters for ethanol. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper focuses on the extraction, structure, and bioactivities of polysaccharides from Corydalis decumbens, not on the pharmacodynamics of ethanol. |
| PGx | Wang_2023_2 | not_relevant | 0 | 0 | The study investigates the pharmacogenetics of tacrolimus, not ethanol. |
| PGx | Weiner_1994 | not_relevant | 4 | 0 | The text discusses the mechanism and potential variants of aldehyde dehydrogenase affecting acetaldehyde metabolism, but it is a qualitative description of enzyme biochemistry and does not report quantitative pharmacokinetic or pharmacodynamic data for ethanol in a human population. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | The paper studies the BEACOPP chemotherapy regimen in Hodgkin's lymphoma, not ethanol, and does not report pharmacogenomic effects on ethanol PK/PD. |
| PGx | Zastrozhin_2021 | not_relevant | 0 | 0 | The study reports on the pharmacogenomics of fluvoxamine in patients with alcohol use disorder, not on the pharmacokinetics or pharmacodynamics of ethanol itself. |
| PGx | Zastrozhin_2022 | not_relevant | 0 | 10 | The paper investigates the drug escitalopram, not ethanol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:45 UTC</sub>
