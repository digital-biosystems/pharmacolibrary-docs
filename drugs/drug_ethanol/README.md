<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;ethanol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethanol_Holford1987_reference&quot;,&quot;label&quot;:&quot;Holford_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ethanol/Ethanol_Holford1987_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ethanol

- **generic name:** ethanol
- **ATC codes:** `D08AX08`, `V03AB16`, `V03AZ01`
- **DrugBank:** [DB00898](https://go.drugbank.com/drugs/DB00898) · **PubChem:** [CID 702](https://pubchem.ncbi.nlm.nih.gov/compound/702)
- **molar mass:** 46.0684 g/mol (C2H6O) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A clear, colorless liquid rapidly absorbed from the gastrointestinal tract and distributed throughout the body. It has bactericidal activity and is used often as a topical disinfectant. It is widely used as a solvent and preservative in pharmaceutical preparations as well as serving as the primary ingredient in alcoholic beverages.

**Indication.** For therapeutic neurolysis of nerves or ganglia for the relief of intractable chronic pain in such conditions as inoperable cancer and trigeminal neuralgia (tic douloureux), in patients for whom neurosurgical procedures are contraindicated.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ethanol | parent | 46.0684 | C2H6O | DrugBank | [702](https://pubchem.ncbi.nlm.nih.gov/compound/702) | Holford_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 20:36 | 27:01 | 1/0/0 | 0/0/0 | 0/0/2 | 112,056/12,306 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 5/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span> | [Holford_1987_reference](drugs/drug_ethanol/Ethanol_Holford1987_reference.md) | — | 1-compartment (no model) | 6 | Holford NH, Clinical pharmacokinetics of ethanol, Clinical pharmacokinetics (1987) | [10.2165/00003088-198713050-00001](https://doi.org/10.2165/00003088-198713050-00001) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ADH3** | `Q26` · CLR | metabolism | [Couzigou_1991](drugs/drug_ethanol/pgx_Couzigou_1991_ADH3_Q26.md) | Couzigou P et al., Role of alcohol dehydrogenase polymorph…, Advances in experimental me… (1991) | [10.1007/978-1-4684-5901-2_28](https://doi.org/10.1007/978-1-4684-5901-2_28) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Heilig_2011](drugs/drug_ethanol/pgx_Heilig_2011_OPRM1_Q100.md) | Heilig M et al., Pharmacogenetic approaches to the treat…, Nature reviews. Neuroscience (2011) | [10.1038/nrn3110](https://doi.org/10.1038/nrn3110) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ethanol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | liver | `ADH1B` substrate, `CYP1A2` substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2E1` inducer/substrate, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| target | blood | `ACHE` activator | DrugBank actor |
| target | neuromuscular junction | `ACHE` activator | DrugBank actor |

<sub>Actors without a tissue in the table: ADH1A (substrate), ADH1C (substrate), ADH3 (metabolism), ADH4 (substrate), ADH5 (substrate), ADH6 (substrate), ADH7 (substrate), AKR1A1 (substrate), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1S (inhibitor), CACNB1 (inhibitor), CACNG1 (unknown), CACNG2 (unknown), CHRNA10 (unknown), CHRNA2 (unknown), CHRNA3 (unknown), CHRNA4 (unknown), CHRNA5 (unknown), CHRNA6 (unknown), CHRNA7 (unknown), CHRNA9 (unknown), CHRNB2 (unknown), CHRNB3 (unknown), CHRNB4 (unknown), CYP4A11 (inducer), GABRA1 (target), GABRA2 (unknown), GABRA3 (unknown), GABRA4 (unknown), GABRA5 (unknown), GABRA6 (unknown), GABRB1 (unknown), GABRB2 (unknown), GABRB3 (unknown), GABRD (unknown), GABRE (unknown), GABRG1 (unknown), GABRG3 (unknown), GABRP (unknown), GABRQ (unknown), GLRA1 (target), GLRA2 (target), GRIA1 (unknown), GRIA2 (unknown), GRIA3 (unknown), GRIA4 (unknown), GRIN3A (target), HTR3A (unknown), HTR3B (unknown), HTR3C (unknown), HTR3D (unknown), HTR3E (unknown), KCNJ3 (unknown), KCNJ5 (unknown), KCNJ6 (unknown), KCNJ9 (unknown), L1CAM (unknown), OPRM1 (target), SLC29A2 (unknown), VCAM1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5300 matched, 87 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Holford_1987.pdf` | Holford NH, Clinical pharmacokinetics of ethanol, Clinical pharmacokinetics (1987) | popPK | 10 | [10.2165/00003088-198713050-00001](https://doi.org/10.2165/00003088-198713050-00001) | [3319346](https://pubmed.ncbi.nlm.nih.gov/3319346) | The text explicitly provides quantitative pharmacokinetic parameters for ethanol, including volume of distribution (37 L/70 kg), Vmax (8.5 g/h/70 kg), Km (80 mg/L), and specific clearance values. |
| `Holford_1997.pdf` | Holford NH, Complex PK/PD models--an alcoholic expe…, International journal of cl… (1997) | pd | 5 | not captured | [9352397](https://www.ncbi.nlm.nih.gov/pubmed/9352397) | metadata signals extractable PD data (PK/PD) |
| `Honoré_2014.pdf` | Honoré PM et al., What do we know about steroids metaboli…, Blood purification (2014) | pd | 5 | [10.1159/000368390](https://doi.org/10.1159/000368390) | [25471548](https://www.ncbi.nlm.nih.gov/pubmed/25471548) | metadata signals extractable PD data (PK/PD) |
| `Furie_2021.pdf` | Furie RA et al., Phase 2, randomized, placebo-controlled…, Rheumatology (Oxford, Engla… (2021) | pd | 4 | [10.1093/rheumatology/keab381](https://doi.org/10.1093/rheumatology/keab381) | [33956056](https://www.ncbi.nlm.nih.gov/pubmed/33956056) | metadata signals extractable PD data (Emax) |
| `Miranda_2026.pdf` | Miranda ÉM et al., Ecotoxicological Assessment and Biodegr…, International journal of en… (2026) | pd | 4 | [10.3390/ijerph23040530](https://doi.org/10.3390/ijerph23040530) | [42074468](https://www.ncbi.nlm.nih.gov/pubmed/42074468) | metadata signals extractable PD data (EC50) |
| `Wang_2023.pdf` | Wang Z et al., Extraction optimization, structure feat…, PloS one (2023) | pd | 4 | [10.1371/journal.pone.0284413](https://doi.org/10.1371/journal.pone.0284413) | [37053219](https://www.ncbi.nlm.nih.gov/pubmed/37053219) | metadata signals extractable PD data (EC50) |
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
| `Fekete_2022.pdf` | Fekete F et al., CYP1A2 mRNA Expression Rather than Gene…, Pharmaceutics (2022) | pgx | 5 | [10.3390/pharmaceutics14030532](https://doi.org/10.3390/pharmaceutics14030532) | [35335907](https://www.ncbi.nlm.nih.gov/pubmed/35335907) | metadata signals extractable PGX data (CYP1A2) |
| `Nakamura_2011.pdf` | Nakamura S et al., Ipso substitution of bisphenol A cataly…, Toxicology letters (2011) | pgx | 5 | [10.1016/j.toxlet.2011.03.010](https://doi.org/10.1016/j.toxlet.2011.03.010) | [21402134](https://www.ncbi.nlm.nih.gov/pubmed/21402134) | metadata signals extractable PGX data (CYP3A4) |
| `Sam_2011.pdf` | Sam WJ et al., Associations of ABCB1 3435C&gt;T and IL-10…, Transplantation (2011) | pgx | 5 | [10.1097/TP.0b013e3182384ae2](https://doi.org/10.1097/TP.0b013e3182384ae2) | [22094953](https://www.ncbi.nlm.nih.gov/pubmed/22094953) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-29T20:27:17.578667+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bansal_2023 | not_relevant | 0 | 0 | The paper investigates cannabinoid-drug interactions (pharmacokinetic inhibition of CYP enzymes) and does not report any pharmacogenomic effects (gene variants) on ethanol PK/PD. |
| PGx | Barletta_2025 | not_relevant | 0 | 0 | The paper focuses on fentanyl pharmacogenetics and does not report pharmacogenomic effects on ethanol PK/PD parameters. |
| PGx | Bean_2000 | not_relevant | 0 | 0 | The paper discusses the interaction between alcohol use and HIV pharmacotherapy, not the pharmacogenomics of ethanol itself. |
| popPK | Bergmann_2012 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of prednisolone and prednisone, not ethanol. |
| PGx | Boniforti_1979 | not_relevant | 0 | 0 | The paper describes a method for identifying anaerobic bacteria using gas chromatography and does not discuss pharmacogenomics or ethanol pharmacokinetics. |
| popPK | Brosnan_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-carvone, not ethanol, which is only used as a solvent in the formulation. |
| PGx | Busto_2000 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the body of the paper, so no specific pharmacogenomic effects on ethanol PK/PD parameters can be extracted or verified. |
| PGx | Całka_2022 | not_relevant | 0 | 0 | The study analyzes the association between ADH7 genotypes and the risk of alcohol abuse/dependence (a disease outcome), but does not report changes in pharmacokinetic or pharmacodynamic parameters of ethanol. |
| PGx | Couzigou_1991 | not_relevant | 8 | 0 | The text describes the study design and genotyping methods for ADH polymorphisms in ethanol metabolism but does not contain the results or data showing the effect on PK parameters. |
| PGx | Crabbe_1986 | not_relevant | 2 | 5 | The paper reports genetic differences in behavioral response (locomotor activity) to ethanol, which is a pharmacodynamic effect, but it does not report specific PK parameters or quantitative pharmacogenomic effect sizes (theta) for a specific gene variant. |
| PGx | Crabbe_2004 | not_relevant | 0 | 0 | The paper title indicates a review of alcohol self-administration and withdrawal, which are behavioral outcomes, not pharmacokinetic or pharmacodynamic parameters of ethanol. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polatuzumab vedotin, not ethanol. |
| PD | Deng_2024 | not_relevant | 3 | 1 | The paper reports a qualitative exposure-response association (AUC vs. survival) with p-values but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative dose-response curve. |
| popPK | Doggrell_2001 | irrelevant | 0 | 0 | The paper is a review of moxonidine, and ethanol is only mentioned as a condition (withdrawal) for which animal studies suggest moxonidine may be effective, with no PK parameters for ethanol reported. |
| PGx | Eriksson_1968 | not_relevant | 0 | 0 | The paper focuses on measurement validity in albino rats and does not report pharmacogenomic effects of gene variants on ethanol PK/PD parameters. |
| PGx | Fekete_2022 | not_relevant | 0 | 0 | The paper investigates CYP1A2 activity using phenacetin as a probe substrate, not ethanol, and focuses on drug metabolism rather than ethanol pharmacokinetics. |
| PGx | Florek_2015 | not_relevant | 0 | 0 | The study investigates the effect of tobacco smoke exposure and behavioral phenotype (alcohol preference) on ethanol pharmacokinetics, not the effect of a specific gene variant or genotype. |
| popPK | Furie_2021 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Furie_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of dapirolizumab pegol in SLE, not a pharmacodynamic or exposure-response analysis for ethanol. |
| PGx | Gaither_2025 | not_relevant | 0 | 0 | The study investigates the effect of chronic alcohol consumption on liver enzyme expression, not the effect of a gene variant on ethanol pharmacokinetics or pharmacodynamics. |
| PGx | Gogolewska_2023 | not_relevant | 0 | 0 | The paper investigates the association between gene polymorphisms and the risk of head and neck cancer, not the pharmacokinetic or pharmacodynamic parameters of ethanol. |
| PGx | Goodman_1992 | not_relevant | 2 | 0 | The text is an abstract or summary discussing the biological mechanism (toxicity vs behavior) of a gene association, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., clearance, Cmax, ED50) for ethanol. |
| popPK | Grasmäder_2004 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| PGx | Grasmäder_2004 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of mirtazapine, not ethanol. |
| popPK | Harmon_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and potency of phosphoantigen prodrugs for T-cell stimulation and does not involve ethanol pharmacokinetics. |
| PGx | Hashimoto_2025 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the clinical efficacy (drinking behavior) of nalmefene, not on the pharmacokinetic or pharmacodynamic parameters of ethanol itself. |
| popPK | Holford_1997 | irrelevant | 0 | 0 | no_text gate: only 45 chars of text extracted (&lt; 400) |
| PD | Holford_1997 | not_relevant | 1 | 0 | The text is only a title suggesting a review or conceptual discussion of PK/PD models for alcohol, with no data, numeric parameters, or derivable concentration-effect relationships provided. |
| popPK | Honoré_2014 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Honoré_2014 | not_relevant | 0 | 0 | The paper is a review of steroid metabolism and PK/PD approaches in renal failure, not a study reporting specific PD parameters for ethanol. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | The paper is a review of Patchouli Alcohol, not ethanol, and does not report pharmacokinetic parameters for ethanol. |
| popPK | Jogiraju_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of lenacapavir, where ethanol is only a formulation excipient, not the subject drug. |
| PGx | Jörnvall_2000 | not_relevant | 2 | 0 | The text is a general overview/abstract of the ADH system and does not report specific quantitative pharmacogenomic effects on ethanol PK/PD parameters. |
| PGx | Kuehn_2009 | not_relevant | 0 | 0 | The text is a title/summary regarding alcohol dependence therapies and does not report specific pharmacogenomic effects on ethanol PK/PD parameters. |
| PGx | Kukowka_2023 | not_relevant | 0 | 0 | The study reports no statistically significant differences in genotypes and does not provide quantitative pharmacokinetic or pharmacodynamic data for ethanol. |
| popPK | Liang_2023 | irrelevant | 0 | 0 | The paper studies triterpenoids isolated from an ethanol extract of a plant, not the pharmacokinetics of ethanol itself. |
| PGx | Lingford-Hughes_2017 | not_relevant | 0 | 0 | The paper is a commentary on the status of addiction research and does not report specific pharmacogenomic effects on ethanol PK/PD parameters. |
| PGx | Lucotte_1975 | not_relevant | 0 | 0 | The paper discusses biochemical polymorphisms in Japanese quail, not human pharmacogenomics or ethanol PK/PD parameters. |
| PGx | Mansour_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of clozapine, not ethanol. |
| PGx | Markel_1999 | not_relevant | 2 | 0 | The paper describes a statistical method for QTL mapping in mice and discusses ethanol sensitivity as a complex trait, but it does not report specific pharmacogenomic effects of gene variants on ethanol PK/PD parameters. |
| PGx | McClearn_1993 | not_relevant | 2 | 0 | The text is a conceptual introduction to applying complex systems theory to alcohol pharmacogenetics and does not report specific gene variants or quantitative PK/PD parameter changes. |
| PGx | McDonald_2025 | not_relevant | 0 | 0 | The study investigates the effect of ashwagandha extracts on CYP enzymes and cytotoxicity, not the effect of a gene variant on ethanol pharmacokinetics or pharmacodynamics. |
| popPK | Miranda_2026 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Miranda_2026 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicology and biodegradation of prednisone, not ethanol, and does not report any pharmacodynamic or exposure-response relationships for ethanol. |
| popPK | Miskovic-Stankovic_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin in a hydrogel, not ethanol. |
| PGx | Myers_1968 | not_relevant | 0 | 0 | The paper focuses on measurement validity in albino rats and does not report pharmacogenomic effects of gene variants on ethanol PK/PD parameters. |
| PGx | Nakamura_2011 | not_relevant | 0 | 0 | The paper investigates the metabolism of bisphenol A, not ethanol, and does not report pharmacogenomic effects on ethanol PK/PD. |
| PGx | Nobili_2014 | not_relevant | 0 | 0 | The paper studies pharmacogenomic markers for chemotherapy efficacy in lymphoma, not ethanol PK/PD. |
| PGx | Norberg_2003 | not_relevant | 3 | 0 | The paper is a general review of ethanol pharmacokinetic variability and mentions ADH polymorphism qualitatively, but it does not report specific quantitative pharmacogenomic effect sizes or fitted parameters for a specific genotype. |
| popPK | North_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of celastrol on cerebral arteries and ethanol-induced constriction, not the pharmacokinetic disposition parameters of ethanol. |
| PGx | Park_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of glucocorticoids (prednisone) affecting bone mineral density, not ethanol. |
| PGx | Parkhomenko_2022 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the PK of haloperidol, not ethanol. |
| PGx | Pilla_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) involving vincristine and kinase inhibitors, not ethanol pharmacokinetics or pharmacodynamics. |
| PGx | Propping_1983 | not_relevant | 6 | 2 | The paper discusses genetic influence on the pharmacodynamic response (EEG) to ethanol but does not report specific quantitative effect sizes or fitted parameters for a defined genotype. |
| PGx | Propping_1983_2 | not_relevant | 2 | 0 | The text is a title indicating a review/digest of pharmacogenetics, but it does not report specific fitted effect sizes or quantitative PK/PD parameters for ethanol in the provided snippet. |
| PGx | Reséndiz-Galván_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for mycophenolic acid, not ethanol. |
| PGx | Riglet_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on mycophenolic acid, not ethanol. |
| popPK | Sacre_2017 | irrelevant | 0 | 0 | The study focuses on the toxicodynetics of benzodiazepine overdoses (oxazepam and nordiazepam) and explicitly excludes concomitant alcohol ingestion, so it does not report pharmacokinetic parameters for ethanol. |
| PD | Sacre_2017 | not_relevant | 2 | 1 | The paper reports toxicodynetics (time to effect and qualitative severity) for benzodiazepines, not ethanol, and lacks numeric exposure-response parameters. |
| PGx | Sam_2011 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of sirolimus, not ethanol. |
| PGx | Santoro_2011 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of calcineurin inhibitors (cyclosporine/tacrolimus), not ethanol. |
| PGx | Sennesael_2018 | not_relevant | 0 | 0 | The paper investigates rivaroxaban pharmacokinetics and ABCB1 genotypes, not ethanol. |
| PGx | Shirasu_2024 | not_relevant | 0 | 0 | The paper describes a laboratory exercise protocol for genotyping and a qualitative ethanol patch test, but does not report quantitative pharmacokinetic or pharmacodynamic data linking specific genotypes to ethanol metabolism parameters. |
| PGx | Skryabin_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on diazepam, not ethanol. |
| popPK | Spinola_2022 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of cognitive effects (working memory) of alcohol, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Sung_2026 | not_relevant | 0 | 0 | The study reports a clinical outcome (age at stroke onset) rather than a pharmacokinetic or pharmacodynamic parameter of ethanol. |
| PGx | Taylor_2003 | not_relevant | 2 | 1 | The paper discusses methodological and cultural issues in clinical trials regarding race and ethnicity, rather than reporting specific pharmacogenomic effects on ethanol PK/PD parameters. |
| PGx | Testoni_2015 | not_relevant | 0 | 0 | The paper reviews genetic lesions in diffuse large B-cell lymphoma and does not discuss ethanol pharmacokinetics or pharmacodynamics. |
| PGx | Varajti_2026 | not_relevant | 0 | 0 | The study investigates the association between VEGF polymorphisms and colorectal cancer risk, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of ethanol. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper focuses on the extraction, structure, and bioactivities of polysaccharides from Corydalis decumbens, not on the pharmacodynamics of ethanol. |
| PGx | Wang_2023_2 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not ethanol. |
| PGx | Wei_2020 | not_relevant | 0 | 0 | The paper describes a statistical method for subgroup identification and mentions an application to an alcohol trial, but it does not report specific pharmacogenomic effects on ethanol PK/PD parameters. |
| PGx | Weiner_1994 | not_relevant | 2 | 0 | The text describes the mechanism of aldehyde dehydrogenase variants and mutagenesis experiments but does not report quantitative pharmacokinetic or pharmacodynamic parameter changes in human subjects. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of the BEACOPP chemotherapy regimen (bleomycin, etoposide, etc.) in Hodgkin's lymphoma, not ethanol. |
| PGx | Zastrozhin_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of fluvoxamine, not ethanol. |
| PGx | Zastrozhin_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of escitalopram, not ethanol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 20:27 UTC</sub>
