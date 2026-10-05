<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;metoclopramide&quot;}]"></div>

# metoclopramide

- **generic name:** metoclopramide
- **ATC codes:** `A03FA01`
- **DrugBank:** [DB01233](https://go.drugbank.com/drugs/DB01233) · **PubChem:** [CID 4168](https://pubchem.ncbi.nlm.nih.gov/compound/4168)
- **molar mass:** 299.796 g/mol (C14H22ClN3O2) — DrugBank
- **groups:** approved, investigational

## About

Metoclopramide is used to treat nausea and vomiting, including postoperative nausea and vomiting, as well as gastroparesis, gastroesophageal reflux disease, and indigestion. It is widely used and is included on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421095](https://www.wikidata.org/wiki/Q421095) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| metoclopramide | parent | 299.796 | C14H22ClN3O2 | DrugBank | [4168](https://pubchem.ncbi.nlm.nih.gov/compound/4168) | Bateman_1978, Brandon_2024, Ge_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:11 | 17:43 | 0/0/3 | 1/0/0 | 0/0/3 | 218,170/55,637 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 6/7 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bateman_1978_reference](drugs/drug_metoclopramide/Metoclopramide_Bateman1978_reference.md) | — | 1-compartment (no model) | 1 | Bateman DN et al., Pharmacokinetic and concentration-effec…, British journal of clinical… (1978) | [10.1111/j.1365-2125.1978.tb04604.x](https://doi.org/10.1111/j.1365-2125.1978.tb04604.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0171)</sub><br><sub>route_to: `human_review`</sub> | [Brandon_2024_reference](drugs/drug_metoclopramide/Metoclopramide_Brandon2024_reference.md) | — | 1-compartment (no model) | 2 | Brandon AM et al., Evaluation of pharmacokinetics of metoc…, Veterinary surgery : VS (2024) | [10.1111/vsu.14128](https://doi.org/10.1111/vsu.14128) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ge_2020_reference](drugs/drug_metoclopramide/Metoclopramide_Ge2020_reference.md) | — | 1-compartment (no model) | 5 | Ge S et al., Population Pharmacokinetics of Metoclop…, Clinical and translational… (2020) | [10.1111/cts.12803](https://doi.org/10.1111/cts.12803) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Claassen_2005_I_Kr](drugs/drug_metoclopramide/pd_Claassen_2005_I_Kr.md) | HERG currents ← metoclopramide · direct sigmoid Emax (Hill) effect | — | Claassen S et al., Comparison of the effects of metoclopra…, Pharmacology (2005) | [10.1159/000083234](https://doi.org/10.1159/000083234) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q22` · CL | metabolism | [Fink_2023](drugs/drug_metoclopramide/pgx_Fink_2023_CYP2D6_Q22.md) | Fink FM et al., Case report: metoclopramide induced acu…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1201566](https://doi.org/10.3389/fphar.2023.1201566) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">mouse</span> | **Abcb1a/b** | `Q22` · CL | transport | [Hernández-Lozano_2024](drugs/drug_metoclopramide/pgx_Hern_ndez_Lozano_2024_Abcb1a_b_Q22.md) | Hernández-Lozano I et al., Performance and Sensitivity of [99mTc]T…, Molecular pharmaceutics (2024) | [10.1021/acs.molpharmaceut.3c01036](https://doi.org/10.1021/acs.molpharmaceut.3c01036) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q22` · CL | metabolism | [Wong_2021](drugs/drug_metoclopramide/pgx_Wong_2021_CYP2D6_Q22.md) | Wong DY et al., Acute pharmacogenetic dystonic reaction…, Journal of medical case rep… (2021) | [10.1186/s13256-021-03022-x](https://doi.org/10.1186/s13256-021-03022-x) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metoclopramide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB1A/B (transport), CHRM1 (target), DRD2 (target), HTR3A (target), HTR4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 158 matched, 62 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bateman_1978.pdf` | Bateman DN et al., Pharmacokinetic and concentration-effec…, British journal of clinical… (1978) | popPK | 10 | [10.1111/j.1365-2125.1978.tb04604.x](https://doi.org/10.1111/j.1365-2125.1978.tb04604.x) | [728283](https://pubmed.ncbi.nlm.nih.gov/728283) | The study reports quantitative pharmacokinetic parameters (clearance, half-lives) for metoclopramide in humans, with values explicitly provided in the text. |
| `Huhn_1992.pdf` | Huhn JC et al., Pharmacokinetics of metoclopramide in g…, Journal of veterinary pharm… (1992) | popPK | 10 | [10.1111/j.1365-2885.1992.tb00982.x](https://doi.org/10.1111/j.1365-2885.1992.tb00982.x) | [1573702](https://pubmed.ncbi.nlm.nih.gov/1573702) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution) for metoclopramide in goats, with specific numeric values provided in the text. |
| `Jones_1994.pdf` | Jones RD et al., Bioavailability and pharmacokinetics of…, Journal of veterinary pharm… (1994) | popPK | 10 | [10.1111/j.1365-2885.1994.tb00224.x](https://doi.org/10.1111/j.1365-2885.1994.tb00224.x) | [8040934](https://pubmed.ncbi.nlm.nih.gov/8040934) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives) for metoclopramide in cattle with specific numeric values provided in the text. |
| `Kearns_1988.pdf` | Kearns GL et al., Metoclopramide pharmacokinetics and pha…, Journal of pediatric gastro… (1988) | popPK | 10 | [10.1097/00005176-198811000-00005](https://doi.org/10.1097/00005176-198811000-00005) | [3199269](https://pubmed.ncbi.nlm.nih.gov/3199269) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, elimination rate constant, half-life) for metoclopramide in infants. |
| `Ross-Lee_1981.pdf` | Ross-Lee LM et al., Single-dose pharmacokinetics of metoclo…, European journal of clinica… (1981) | popPK | 10 | [10.1007/BF00542101](https://doi.org/10.1007/BF00542101) | [7286058](https://pubmed.ncbi.nlm.nih.gov/7286058) | The paper reports quantitative single-dose pharmacokinetic parameters (CL, V, t1/2) for metoclopramide in humans with all values explicitly listed in the text. |
| `Kearns_1998.pdf` | Kearns GL et al., Pharmacokinetics of metoclopramide in n…, Journal of clinical pharmac… (1998) | popPK | 9 | [10.1002/j.1552-4604.1998.tb04400.x](https://doi.org/10.1002/j.1552-4604.1998.tb04400.x) | [9549642](https://pubmed.ncbi.nlm.nih.gov/9549642) | The study reports a compartmental PK model for metoclopramide in neonates, but the specific numeric parameter values (CL, Vd, ka) are not listed in the provided abstract text, only relative comparisons to adult values. |
| `Vlase_2006.pdf` | Vlase L et al., Pharmacokinetic interaction between flu…, Biopharmaceutics & drug dis… (2006) | popPK | 9 | [10.1002/bdd.510](https://doi.org/10.1002/bdd.510) | [16770757](https://pubmed.ncbi.nlm.nih.gov/16770757) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for metoclopramide in humans. |
| `Dolton_2012.pdf` | Dolton MJ et al., Multicenter study of posaconazole thera…, Antimicrobial agents and ch… (2012) | pd | 5 | [10.1128/AAC.00802-12](https://doi.org/10.1128/AAC.00802-12) | [22890761](https://www.ncbi.nlm.nih.gov/pubmed/22890761) | metadata signals extractable PD data (exposure-response) |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Eglen_1990.pdf` | Eglen RM et al., Characterization of 5-HT3 and 'atypical…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14113.x](https://doi.org/10.1111/j.1476-5381.1990.tb14113.x) | [2076474](https://www.ncbi.nlm.nih.gov/pubmed/2076474) | metadata signals extractable PD data (EC50) |
| `Faisal_2020.pdf` | Faisal R et al., Azithromycin induced contractile respon…, Pakistan journal of pharmac… (2020) | pd | 4 | not captured | [33832879](https://www.ncbi.nlm.nih.gov/pubmed/33832879) | metadata signals extractable PD data (Emax) |
| `Bae_2020.pdf` | Bae JW et al., Effects of CYP2D6 genetic polymorphism…, Archives of pharmacal resea… (2020) | pgx | 8 | [10.1007/s12272-020-01293-4](https://doi.org/10.1007/s12272-020-01293-4) | [33247397](https://www.ncbi.nlm.nih.gov/pubmed/33247397) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Desta_2002.pdf` | Desta Z et al., The gastroprokinetic and antiemetic dru…, Drug metabolism and disposi… (2002) | pgx | 8 | [10.1124/dmd.30.3.336](https://doi.org/10.1124/dmd.30.3.336) | [11854155](https://www.ncbi.nlm.nih.gov/pubmed/11854155) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Rauers_2010.pdf` | Rauers NI et al., Antagonistic effects of ondansetron and…, The journal of pain (2010) | pgx | 8 | [10.1016/j.jpain.2010.03.003](https://doi.org/10.1016/j.jpain.2010.03.003) | [20488759](https://www.ncbi.nlm.nih.gov/pubmed/20488759) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Alotaibi_2025.pdf` | Alotaibi BS et al., Effect of chloroquine pre-treatment on…, Expert opinion on drug safe… (2025) | pgx | 7 | [10.1080/14740338.2024.2387312](https://doi.org/10.1080/14740338.2024.2387312) | [39086080](https://www.ncbi.nlm.nih.gov/pubmed/39086080) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kaukab_2019.pdf` | Kaukab I et al., Evaluation of Pharmacokinetic Interacti…, Current drug metabolism (2019) | pgx | 7 | [10.2174/1389200220666191105115805](https://doi.org/10.2174/1389200220666191105115805) | [31702486](https://www.ncbi.nlm.nih.gov/pubmed/31702486) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kaukab_2020.pdf` | Kaukab I et al., Effect of clarithromycin pre-treatment…, Expert opinion on drug meta… (2020) | pgx | 7 | [10.1080/17425255.2020.1779699](https://doi.org/10.1080/17425255.2020.1779699) | [32524862](https://www.ncbi.nlm.nih.gov/pubmed/32524862) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kotlinska-Lemieszek_2014.pdf` | Kotlinska-Lemieszek A et al., Polypharmacy in patients with advanced…, Journal of pain and symptom… (2014) | pgx | 7 | [10.1016/j.jpainsymman.2014.03.008](https://doi.org/10.1016/j.jpainsymman.2014.03.008) | [24780183](https://www.ncbi.nlm.nih.gov/pubmed/24780183) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Labbé_1999.pdf` | Labbé L et al., Clinical pharmacokinetics of mexiletine, Clinical pharmacokinetics (1999) | pgx | 7 | [10.2165/00003088-199937050-00002](https://doi.org/10.2165/00003088-199937050-00002) | [10589372](https://www.ncbi.nlm.nih.gov/pubmed/10589372) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Tod_2011.pdf` | Tod M et al., Quantitative prediction of cytochrome P…, Clinical pharmacokinetics (2011) | pgx | 7 | [10.2165/11592620-000000000-00000](https://doi.org/10.2165/11592620-000000000-00000) | [21740075](https://www.ncbi.nlm.nih.gov/pubmed/21740075) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `unknown_2016.pdf` | unknown, Metoclopramide, domperidone: sudden car…, Prescrire international (2016) | pgx | 7 | not captured | [30645828](https://www.ncbi.nlm.nih.gov/pubmed/30645828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Livezey_2014.pdf` | Livezey MR et al., Metoclopramide is metabolized by CYP2D6…, Xenobiotica; the fate of fo… (2014) | pgx | 5 | [10.3109/00498254.2013.835885](https://doi.org/10.3109/00498254.2013.835885) | [24010633](https://www.ncbi.nlm.nih.gov/pubmed/24010633) | metadata signals extractable PGX data (CYP2D6) |
| `Parkman_2012.pdf` | Parkman HP et al., Clinical response and side effects of m…, Journal of clinical gastroe… (2012) | pgx | 5 | [10.1097/MCG.0b013e3182522624](https://doi.org/10.1097/MCG.0b013e3182522624) | [22688145](https://www.ncbi.nlm.nih.gov/pubmed/22688145) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04T13:54:21.570770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alotaibi_2025 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (chloroquine inhibiting CYP2D6) rather than a pharmacogenomic effect based on genetic variants or genotypes. |
| PGx | Auvity_2018 | not_relevant | 0 | 0 | The study investigates the effect of P-glycoprotein inhibition on metoclopramide PK in nonhuman primates, not the effect of a gene variant/genotype. |
| PGx | Breuil_2023 | not_relevant | 0 | 0 | The paper focuses on parametric imaging of P-glycoprotein function using [11C]metoclopramide PET, not on the effect of gene variants on metoclopramide PK/PD. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of posaconazole, with metoclopramide serving only as a co-administered drug to test for interactions, not as the subject drug. |
| popPK | Claassen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine on the human urinary bladder and does not mention metoclopramide or report any PD parameters for it. |
| popPK | Cruz_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of serotonin receptors in human placental vein, using metoclopramide only as a receptor antagonist, with no pharmacokinetic parameters reported. |
| PD | Cruz_1998 | not_relevant | 0 | 0 | The paper studies 5-HT receptor mediation in human placental vein; metoclopramide is used only as a receptor antagonist in a functional assay, not as the drug of interest for a PD/exposure-response analysis. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The paper is a review of antiemetic therapies and does not report any pharmacogenomic effects on metoclopramide PK or PD parameters. |
| PGx | Desta_2002 | not_relevant | 2 | 0 | The paper identifies CYP2D6 as the metabolic enzyme for metoclopramide in vitro but does not report in vivo pharmacokinetic or pharmacodynamic data stratified by genotype or phenotype. |
| popPK | Dolton_2012 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Dolton_2012 | not_relevant | 0 | 0 | The paper focuses on posaconazole, not metoclopramide. |
| popPK | Eglen_1990 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Eglen_1990 | not_relevant | 0 | 0 | The paper focuses on 5-HT receptor characterization in guinea-pig ileum and does not mention metoclopramide or report any pharmacodynamic parameters for it. |
| popPK | Faisal_2020 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| PD | Faisal_2020 | not_relevant | 0 | 0 | The paper focuses on azithromycin and intestinal smooth muscle, not metoclopramide. |
| PGx | Fink_2023 | not_relevant | 5 | 2 | The paper reports a clinical adverse event (acute dystonia) in CYP2D6 poor metabolizers but does not provide quantitative pharmacokinetic or pharmacodynamic parameter data (e.g., AUC, Cmax, ED50) to quantify the effect size. |
| PGx | Gronich_2022 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effect of CYP2C19 on proton pump inhibitors (PPIs), not metoclopramide. |
| popPK | Ireland_1987 | irrelevant | 0 | 0 | The study is a pharmacological characterization of receptor antagonism (pKB values) in rat vagus nerves, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kaukab_2019 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (cilostazol) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Kaukab_2020 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Kearns_1998 | relevant | 9 | 2 | The study reports a compartmental PK model for metoclopramide in neonates, but the specific numeric parameter values (CL, Vd, ka) are not listed in the provided abstract text, only relative comparisons to adult values. |
| PGx | Kotlinska-Lemieszek_2014 | not_relevant | 0 | 0 | The paper is a cross-sectional study on polypharmacy and drug-drug interactions in cancer patients and does not report any pharmacogenomic effects on metoclopramide PK/PD parameters. |
| PGx | Labbé_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mexiletine, not metoclopramide, and only mentions metoclopramide as a drug that enhances mexiletine absorption. |
| popPK | Linnik_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor binding and gastric emptying mechanisms, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Livezey_2014 | not_relevant | 0 | 0 | The paper reports in vitro metabolic pathways and inhibition kinetics but does not report pharmacogenomic effects (genotype-based differences) on PK or PD parameters in humans. |
| PGx | Mills_2023 | not_relevant | 0 | 0 | The paper evaluates the congruence of clinical decision support alerts for metoclopramide, not the pharmacokinetic or pharmacodynamic effects of gene variants on the drug. |
| PGx | Nakamura_2026 | not_relevant | 1 | 0 | The paper is a case report of an adverse event (akathisia) and mentions a potential CYP2D6 interaction only as a hypothesis, without reporting any pharmacogenomic data or quantitative PK/PD parameters. |
| PGx | Parkman_2012 | not_relevant | 5 | 5 | The paper reports associations between genotypes and clinical outcomes (efficacy/side effects) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Pottier_2016 | not_relevant | 0 | 0 | The study investigates the effect of pharmacological P-gp inhibition (tariquidar) on metoclopramide brain kinetics in rats, not the effect of a genetic variant or genotype. |
| PGx | Rao_2010 | not_relevant | 2 | 0 | The paper is a review that mentions pharmacogenetics as a potential mechanism for tardive dyskinesia risk but does not report specific quantitative effects of gene variants on metoclopramide PK or PD parameters. |
| PGx | Rauers_2010 | not_relevant | 0 | 0 | The study analyzes CYP2D6 variants for tramadol metabolism, not metoclopramide, and does not report pharmacogenomic effects on metoclopramide PK or PD. |
| PGx | Sternieri_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and mentions metoclopramide only as a CYP substrate in the context of interaction risks, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Tod_2011 | not_relevant | 0 | 0 | The paper focuses on CYP2D6-mediated drug-drug interactions and predictive modeling, not on pharmacogenomic effects of gene variants on metoclopramide PK/PD. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The paper is a review of cardiac adverse effects and drug-drug interactions (CYP3A4 inhibition) but does not report pharmacogenomic effects of specific gene variants on metoclopramide PK/PD. |
| popPK | Walkembach_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and ion channel kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Wong_2021 | not_relevant | 2 | 0 | The paper reports a clinical adverse event (dystonia) associated with a genotype but does not report quantitative changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yang_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium mobilization where metoclopramide is used only as a receptor antagonist, not as the subject of pharmacokinetic analysis. |
| PGx | Yu_2006 | not_relevant | 2 | 0 | The paper identifies a new CYP2D6-mediated metabolite of metoclopramide and suggests a link to adverse reactions, but it does not report quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) stratified by genotype or phenotype. |
| PGx | Zoufal_2020 | not_relevant | 0 | 0 | The study investigates the effect of a drug (PCN) on P-glycoprotein activity and metoclopramide clearance in mice, not the effect of a gene variant on metoclopramide pharmacokinetics. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The paper discusses epidemiological risks of cardiac arrhythmia and the impact of CYP3A4 inhibitors on clearance, but does not report specific gene variants or genotypes affecting PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:54 UTC</sub>
