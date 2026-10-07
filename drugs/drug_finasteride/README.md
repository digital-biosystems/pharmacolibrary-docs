<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;finasteride&quot;}]"></div>

# finasteride

- **generic name:** finasteride
- **ATC codes:** `D11AX10`, `G04CA51`, `G04CA55`, `G04CB01`, `G04CB51`
- **DrugBank:** [DB01216](https://go.drugbank.com/drugs/DB01216) · **PubChem:** [CID 57363](https://pubchem.ncbi.nlm.nih.gov/compound/57363)
- **molar mass:** 372.5441 g/mol (C23H36N2O2) — DrugBank
- **groups:** approved, investigational

## About

Finasteride is used for prostate conditions such as benign prostatic enlargement and prostate cancer, and also for male pattern baldness. It is an approved medicine, widely used in urology and dermatology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424167](https://www.wikidata.org/wiki/Q424167) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:10 | 19:48 | 0/0/0 | 1/1/1 | 0/0/9 | 862,542/8,987 | einfracz / qwen3.8-27b | 29 | 1/27 | 29/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Ko_1995_DHT](drugs/drug_finasteride/pd_Ko_1995_DHT.md) | DHT concentrations ← finasteride · indirect response — drug inhibits the production of DHT concentrations | — | Ko HC et al., Pharmacodynamic modeling of finasteride…, Pharmacotherapy (1995) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_1999_LDL_stimulated_cholesterol_esterification](drugs/drug_finasteride/pd_Zhang_1999_LDL_stimulated_cholesterol_esterification.md) | LDL-stimulated cholesterol esterification biomarker turnover ← finasteride | — | Zhang J et al., Progesterone metabolism in human fibrob…, The Journal of steroid bioc… (1999) | [10.1016/s0960-0760(99)00107-7](https://doi.org/10.1016/s0960-0760(99)00107-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ngampanya_2021_DHT](drugs/drug_finasteride/pd_Ngampanya_2021_DHT.md) | dihydrotestosterone (DHT) levels in plasma and scalp ← finasteride · indirect response — drug inhibits the production of dihydrotestosterone (DHT) levels in plasma and scalp | — | Ngampanya A et al., Development and Qualification of a Phys…, Journal of pharmaceutical s… (2021) | [10.1016/j.xphs.2021.02.016](https://doi.org/10.1016/j.xphs.2021.02.016) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Chau_2015](drugs/drug_finasteride/pgx_Chau_2015_CYP3A4_Q100.md) | Chau CH et al., Finasteride concentrations and prostate…, PloS one (2015) | [10.1371/journal.pone.0126672](https://doi.org/10.1371/journal.pone.0126672) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Chau_2015](drugs/drug_finasteride/pgx_Chau_2015_CYP3A5_Q100.md) | Chau CH et al., Finasteride concentrations and prostate…, PloS one (2015) | [10.1371/journal.pone.0126672](https://doi.org/10.1371/journal.pone.0126672) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ACE** | `Q322` · IC50 | target | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_ACE_Q322.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PTGDR2** | `Q322` · IC50 | target | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_PTGDR2_Q322.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PTGES2** | `Q322` · IC50 | target | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_PTGES2_Q322.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PTGFR** | `Q322` · IC50 | target | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_PTGFR_Q322.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SRD5A1** | `Q321` · EC50 | metabolism | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_SRD5A1_Q321.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SRD5A2** | `Q321` · EC50 | metabolism | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_SRD5A2_Q321.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SULT1A1** | `Q305` · kfm | formation | [Torres_2026](drugs/drug_finasteride/pgx_Torres_2026_SULT1A1_Q305.md) | Torres de Souza G et al., Use of genetics in the prediction of su…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1765808](https://doi.org/10.3389/fphar.2026.1765808) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=finasteride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` metabolism/substrate, `CYP3A5` metabolism/substrate, `CYP3A7` substrate, `SULT1A1` formation | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism/substrate, `CYP3A5` metabolism/substrate, `SULT1A1` formation | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | liver | `SRD5A1` inhibitor/metabolism | DrugBank actor |
| — | prostate gland | `SRD5A1` inhibitor/metabolism, `SRD5A2` inhibitor/metabolism | DrugBank actor |
| — | skin | `SRD5A1` inhibitor/metabolism | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (target), AKR1D1 (inhibitor), PTGDR2 (target), PTGES2 (target), PTGFR (target), SRD5A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 208 matched, 125 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2024.pdf` | Kim H et al., A Phase I, Open-Label, Sequential, Sing…, Advances in therapy (2024) | popPK | 9 | [10.1007/s12325-024-02890-1](https://doi.org/10.1007/s12325-024-02890-1) | [38833144](https://pubmed.ncbi.nlm.nih.gov/38833144) | The study is a Phase I clinical trial evaluating the PK of a finasteride formulation, but the abstract lacks specific numeric parameter values (CL, V, half-life), which are likely in the full text or supplementary tables not provided. |
| `Olsson_1999.pdf` | Olsson Gisleskog P et al., Validation of a population pharmacokine…, European journal of pharmac… (1999) | popPK | 8 | [10.1016/s0928-0987(99)00024-x](https://doi.org/10.1016/s0928-0987(99)00024-x) | [10425379](https://pubmed.ncbi.nlm.nih.gov/10425379) | The study validates a population PK/PD model for finasteride, but the abstract does not provide specific numeric parameter values (CL, V, etc.) for finasteride, referring instead to general validation metrics. |
| `Samara_1996.pdf` | Samara EE et al., Assessment of the pharmacokinetic-pharm…, Journal of clinical pharmac… (1996) | popPK | 8 | [10.1002/j.1552-4604.1996.tb04172.x](https://doi.org/10.1002/j.1552-4604.1996.tb04172.x) | [9013375](https://pubmed.ncbi.nlm.nih.gov/9013375) | Although the study involves finasteride PK, the provided evidence text contains no specific quantitative parameter values (CL, V, etc.) for finasteride. |
| `Kang_2021.pdf` | Kang DW et al., Pharmacokinetic-pharmacodynamic modelin…, International journal of ph… (2021) | popPK | 7 | [10.1016/j.ijpharm.2021.120527](https://doi.org/10.1016/j.ijpharm.2021.120527) | [33781881](https://pubmed.ncbi.nlm.nih.gov/33781881) | The paper describes a PK-PD modeling study in beagle dogs but provides no specific numeric PK parameter values (CL, V, half-life) in the abstract or evidence; results are summarized qualitatively as model predictions. |
| `Almeida_2005.pdf` | Almeida A et al., Bioequivalence study of two different c…, Arzneimittel-Forschung (2005) | popPK | 5 | [10.1055/s-0031-1296848](https://doi.org/10.1055/s-0031-1296848) | [15901045](https://pubmed.ncbi.nlm.nih.gov/15901045) | Study is a human bioequivalence analysis using non-compartmental methods (AUC, Cmax), which are PK parameters, but specific individual or group mean values for clearance, volume, or half-life are not explicitly listed in the provided text, only confidence intervals for the ratio of metrics. |
| `Kim_2016.pdf` | Kim SE et al., Compartmental approach to assess bioequ…, International journal of cl… (2016) | popPK | 5 | [10.5414/CP202525](https://doi.org/10.5414/CP202525) | [27087152](https://pubmed.ncbi.nlm.nih.gov/27087152) | While finasteride is a subject drug, the paper is a methodological comparison of bioequivalence analysis techniques and does not report the specific quantitative PK parameter values (CL, V, etc.) for finasteride. |
| `Suzuki_2010.pdf` | Suzuki R et al., Saturable binding of finasteride to ste…, Drug metabolism and pharmac… (2010) | pd | 5 | [10.2133/dmpk.25.208](https://doi.org/10.2133/dmpk.25.208) | [20460827](https://www.ncbi.nlm.nih.gov/pubmed/20460827) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Berthaut_1997.pdf` | Berthaut I et al., Pharmacological and molecular evidence…, The Prostate (1997) | pd | 4 | [10.1002/(sici)1097-0045(19970801)32:3&lt;155::aid-pros1&gt;3.0.co;2-k](https://doi.org/10.1002/(sici)1097-0045(19970801)32:3<155::aid-pros1>3.0.co;2-k) | [9254894](https://www.ncbi.nlm.nih.gov/pubmed/9254894) | metadata signals extractable PD data (IC50) |
| `Boudon_1995.pdf` | Boudon C et al., 5 alpha-reductase activity in cultured…, Cellular and molecular biol… (1995) | pd | 4 | not captured | [8747081](https://www.ncbi.nlm.nih.gov/pubmed/8747081) | metadata signals extractable PD data (IC50) |
| `Hirosumi_1995.pdf` | Hirosumi J et al., FK143, a novel nonsteroidal inhibitor o…, The Journal of steroid bioc… (1995) | pd | 4 | [10.1016/0960-0760(94)00187-q](https://doi.org/10.1016/0960-0760(94)00187-q) | [7734404](https://www.ncbi.nlm.nih.gov/pubmed/7734404) | metadata signals extractable PD data (IC50) |
| `Ko_1995.pdf` | Ko HC et al., Pharmacodynamic modeling of finasteride…, Pharmacotherapy (1995) | pd | 4 | not captured | [7479205](https://www.ncbi.nlm.nih.gov/pubmed/7479205) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Krieg_1995.pdf` | Krieg M et al., Potential activities of androgen metabo…, The Journal of steroid bioc… (1995) | pd | 4 | [10.1016/0960-0760(95)00085-e](https://doi.org/10.1016/0960-0760(95)00085-e) | [7542902](https://www.ncbi.nlm.nih.gov/pubmed/7542902) | metadata signals extractable PD data (IC50) |
| `Mellin_1993.pdf` | Mellin TN et al., Azasteroids as inhibitors of testostero…, The Journal of steroid bioc… (1993) | pd | 4 | [10.1016/0960-0760(93)90019-s](https://doi.org/10.1016/0960-0760(93)90019-s) | [8439517](https://www.ncbi.nlm.nih.gov/pubmed/8439517) | metadata signals extractable PD data (IC50) |
| `Srivilai_2016.pdf` | Srivilai J et al., A new label-free screen for steroid 5α-…, Steroids (2016) | pd | 4 | [10.1016/j.steroids.2016.10.007](https://doi.org/10.1016/j.steroids.2016.10.007) | [27789379](https://www.ncbi.nlm.nih.gov/pubmed/27789379) | metadata signals extractable PD data (IC50) |
| `Wang_2015.pdf` | Wang LL et al., [Study of gonadal hormone drugs in bloc…, Yao xue xue bao = Acta phar… (2015) | pd | 4 | not captured | [27169275](https://www.ncbi.nlm.nih.gov/pubmed/27169275) | metadata signals extractable PD data (IC50) |
| `Weisser_1994.pdf` | Weisser H et al., 5 alpha-reductase inhibition by finaste…, Steroids (1994) | pd | 4 | [10.1016/0039-128x(94)90016-7](https://doi.org/10.1016/0039-128x(94)90016-7) | [7535480](https://www.ncbi.nlm.nih.gov/pubmed/7535480) | metadata signals extractable PD data (IC50) |
| `di_1993.pdf` | di Salle E et al., Hormonal effects of turosteride, a 5 al…, The Journal of steroid bioc… (1993) | pd | 4 | [10.1016/0960-0760(93)90181-u](https://doi.org/10.1016/0960-0760(93)90181-u) | [8240976](https://www.ncbi.nlm.nih.gov/pubmed/8240976) | metadata signals extractable PD data (IC50) |
| `Yasumori_2006.pdf` | Yasumori T et al., Finasteride 1 mg has no inhibitory effe…, European journal of clinica… (2006) | pgx | 8 | [10.1007/s00228-006-0189-9](https://doi.org/10.1007/s00228-006-0189-9) | [16953457](https://www.ncbi.nlm.nih.gov/pubmed/16953457) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Fleishaker_1998.pdf` | Fleishaker JC et al., Biotransformation of tirilazad in human…, The Journal of pharmacology… (1998) | pgx | 7 | not captured | [9808685](https://www.ncbi.nlm.nih.gov/pubmed/9808685) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Li_2026.pdf` | Li Z et al., Identification of Metabolites for the N…, Drug testing and analysis (2026) | pgx | 7 | [10.1002/dta.3969](https://doi.org/10.1002/dta.3969) | [41242714](https://www.ncbi.nlm.nih.gov/pubmed/41242714) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Wienkers_1998.pdf` | Wienkers LC et al., Biotransformation of tirilazad in human…, The Journal of pharmacology… (1998) | pgx | 7 | not captured | [9808684](https://www.ncbi.nlm.nih.gov/pubmed/9808684) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Price_2016.pdf` | Price DK et al., Association of androgen metabolism gene…, Cancer (2016) | pgx | 5 | [10.1002/cncr.30071](https://doi.org/10.1002/cncr.30071) | [27164191](https://www.ncbi.nlm.nih.gov/pubmed/27164191) | metadata signals extractable PGX data (CYP1B1) |
| `Tang_2011.pdf` | Tang L et al., Repeat polymorphisms in estrogen metabo…, Carcinogenesis (2011) | pgx | 5 | [10.1093/carcin/bgr139](https://doi.org/10.1093/carcin/bgr139) | [21771722](https://www.ncbi.nlm.nih.gov/pubmed/21771722) | metadata signals extractable PGX data (CYP11A1) |

<sub>queue written 2026-10-07T08:06:59.368906+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adcock_2017 | irrelevant | 0 | 0 | The paper reports in vitro anti-Zika virus activity (EC50) for finasteride, not pharmacokinetic disposition parameters. |
| popPK | Almeida_2005 | relevant | 5 | 4 | Study is a human bioequivalence analysis using non-compartmental methods (AUC, Cmax), which are PK parameters, but specific individual or group mean values for clearance, volume, or half-life are not explicitly listed in the provided text, only confidence intervals for the ratio of metrics. |
| popPK | Ayodeji_2025 | irrelevant | 0 | 0 | The study focuses on fluorescent androgen receptor imaging probes (ARi-FL) in mice and cell lines, not the pharmacokinetics of the drug finasteride. |
| PGx | Cecchin_2014 | not_relevant | 2 | 4 | The paper analyzes genetic association with susceptibility to adverse effects (PFS) and disease phenotype (AGA), not PK or PD parameters of finasteride. |
| PGx | Chortis_2013 | not_relevant | 0 | 0 | The paper studies the pharmacological effect of Mitotane and only mentions Finasteride as a comparator control group. |
| popPK | Dahleh_2025 | irrelevant | 0 | 0 | The paper is a computational study on SARMs where finasteride is used only as a reference ligand for docking validation, and no pharmacokinetic parameters are reported. |
| PGx | Dai_2019 | not_relevant | 3 | 8 | The study reports a genetic interaction with clinical efficacy (prostate cancer risk), not a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of the drug itself (e.g., serum testosterone reduction or finasteride concentration). |
| popPK | De_2025 | irrelevant | 0 | 0 | The study investigates novel liver fibrosis compounds (LIFR/GPBAR1 modulators) and does not report pharmacokinetic data for finasteride. |
| popPK | Del_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of opticin (a glycoprotein) in rabbits, not the drug finasteride. |
| PGx | Ellis_1998 | not_relevant | 0 | 0 | The paper investigates genetic associations with the disease (male pattern baldness), not pharmacogenomic effects on finasteride's pharmacokinetics or pharmacodynamics. |
| PGx | Fleishaker_1998 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (finasteride affecting tirilazad PK) in a general population, not a pharmacogenomic effect. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SSR504734, not finasteride, which is not mentioned in the text. |
| popPK | Gisleskog_1998 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic modeling of enzyme inhibition and DHT turnover rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for finasteride, and no PK numeric values are provided in the evidence. |
| popPK | Gisleskog_1999 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for dutasteride (GI198745), not finasteride. |
| popPK | Haymer_2026 | irrelevant | 0 | 0 | The paper focuses on cannabinoid receptor 2 (CB2) agonists derived from amprenavir and does not study the pharmacokinetics of finasteride. |
| popPK | Heverhagen_2004 | irrelevant | 0 | 0 | This is a DCE-MRI perfusion study in beagles; the pharmacokinetic parameters reported are for tissue perfusion/extraction (amplitude, k_ep), not systemic finasteride disposition (CL, V, t1/2). |
| PGx | Hoque_2001 | not_relevant | 0 | 0 | The paper is a protocol for the SELECT trial and does not report pharmacokinetic or pharmacodynamic data for finasteride; it only mentions finasteride in the context of another trial's cancer incidence estimates. |
| PGx | Hoque_2008 | not_relevant | 0 | 0 | The paper evaluates methods for DNA extraction and genotyping reliability, not the effect of genetic variants on finasteride's pharmacokinetics or pharmacodynamics. |
| PGx | Hulin-Curtis_2010 | not_relevant | 0 | 0 | The paper is a review summarizing literature and potential associations but does not report new experimental data or fitted effect sizes for finasteride PK/PD. |
| PGx | Huskey_1995 | not_relevant | 1 | 0 | The paper identifies CYP3A4 as the enzyme responsible for finasteride metabolism but does not report on genetic variants or their effect on pharmacokinetic parameters. |
| popPK | Kang_2021 | irrelevant | 7 | 0 | The paper describes a PK-PD modeling study in beagle dogs but provides no specific numeric PK parameter values (CL, V, half-life) in the abstract or evidence; results are summarized qualitatively as model predictions. |
| popPK | Kim_2016 | irrelevant | 5 | 0 | While finasteride is a subject drug, the paper is a methodological comparison of bioequivalence analysis techniques and does not report the specific quantitative PK parameter values (CL, V, etc.) for finasteride. |
| popPK | Kim_2024 | relevant | 9 | 1 | The study is a Phase I clinical trial evaluating the PK of a finasteride formulation, but the abstract lacks specific numeric parameter values (CL, V, half-life), which are likely in the full text or supplementary tables not provided. |
| popPK | Ko_1995 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic modeling of the metabolite DHT (inhibition rates, IC50) rather than the pharmacokinetic disposition parameters (CL, V, ka) of finasteride itself. |
| popPK | Korstanje_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and tissue distribution of tamsulosin, not finasteride. |
| popPK | Lambright_2000 | irrelevant | 0 | 0 | The study investigates the mechanism of action of linuron, and finasteride is only mentioned as a comparator agent for antiandrogenic effects, with no pharmacokinetic data provided. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | The study evaluates the UGT inhibitory potential of finasteride in vitro to predict drug-drug interactions, rather than reporting the effect of a gene variant on finasteride's PK/PD. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper studies epristeride, not finasteride, and focuses on metabolite identification for doping testing rather than pharmacogenomics. |
| PGx | Livingstone_2015 | not_relevant | 0 | 10 | The paper investigates metabolic outcomes (insulin resistance, steatosis) of 5αR1 deficiency or finasteride use, not pharmacogenomic effects on finasteride's own pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lolli_2017 | not_relevant | 0 | 0 | The paper is a review of the pathophysiology and genetics of androgenetic alopecia, not the pharmacogenomics of finasteride. |
| PGx | Lundahl_2014 | not_relevant | 0 | 0 | The paper describes metabolite identification in pig models and CYP enzyme characterization, but does not report any genetic variation effects on finasteride PK or PD parameters. |
| popPK | Luttens_2022 | irrelevant | 0 | 0 | The paper describes the virtual screening and discovery of SARS-CoV-2 main protease inhibitors and contains no data regarding the pharmacokinetics of finasteride. |
| popPK | McComic_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the novel ectoparasiticide mCMV280 and its isoxazoline analogs, not finasteride. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and metabolomic prediction of busulfan, not finasteride. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel CAR agonists and contains no pharmacokinetic data for finasteride. |
| popPK | Meyer_2024 | irrelevant | 0 | 0 | The study is an environmental analysis of pharmaceutical metabolites in wastewater, not a pharmacokinetic study reporting disposition parameters for finasteride. |
| popPK | Moinpour_2012 | irrelevant | 0 | 0 | The paper reports health-related quality-of-life outcomes, not pharmacokinetic parameters for finasteride. |
| popPK | Ngampanya_2021 | irrelevant | 4 | 0 | The study develops a PBPK model but the abstract only describes the methodology and validation strategy without providing the specific numeric disposition parameter values (CL, V, etc.) required for extraction. |
| popPK | Novotná_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of glutamine antagonist prodrugs (DON derivatives) in mice, not finasteride. |
| popPK | Ollivier_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftriaxone, not finasteride. |
| popPK | Olsson_1999 | relevant | 8 | 0 | The study validates a population PK/PD model for finasteride, but the abstract does not provide specific numeric parameter values (CL, V, etc.) for finasteride, referring instead to general validation metrics. |
| popPK | Panel_2026 | irrelevant | 0 | 0 | The paper describes small-molecule agonists for neurotensin receptors and does not involve finasteride. |
| PGx | Perezcano_2026 | not_relevant | 3 | 2 | The paper discusses the association between CYP2D6 genotypes and suicide risk (an adverse event/outcome) in finasteride users, rather than reporting changes in PK or PD parameters (e.g., Cmax, AUC, testosterone levels). |
| popPK | Plachká_2025 | irrelevant | 0 | 0 | The paper investigates supercritical fluid chromatography retention mechanisms using neural networks and does not report any pharmacokinetic parameters for finasteride. |
| PGx | Platz_2004 | not_relevant | 1 | 0 | The paper is an epidemiological review of sex steroid hormones and prostate cancer etiology, mentioning finasteride only in the context of trial outcomes regarding tumor grade, without reporting pharmacogenomic effects on PK or PD parameters. |
| PGx | Price_2016 | not_relevant | 2 | 5 | The study reports associations between genotypes and androgen concentrations, but does not provide data on the pharmacokinetics or pharmacodynamics of finasteride itself (e.g., drug levels, clearance, or specific inhibitory effect). |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The paper focuses on transporter polypharmacology and inhibitor identification, containing no data for finasteride. |
| PGx | Rathnayake_2010 | not_relevant | 0 | 0 | The text is a review of the etiology and treatment of androgenetic alopecia and does not report any pharmacogenomic data affecting the PK or PD of finasteride. |
| PGx | Reddy_2017 | not_relevant | 0 | 0 | The study investigates the neurobiological mechanism of finasteride in modulating GABA-A receptor expression, not the effect of genetic variants on finasteride's pharmacokinetics or pharmacodynamics. |
| popPK | Samara_1996 | irrelevant | 8 | 0 | Although the study involves finasteride PK, the provided evidence text contains no specific quantitative parameter values (CL, V, etc.) for finasteride. |
| popPK | Specht_2024 | irrelevant | 0 | 0 | The paper concerns H1-receptor antagonists (antihistamines) and drug repurposing methods, and does not contain any pharmacokinetic data for finasteride. |
| popPK | Stamos_2025 | irrelevant | 0 | 0 | The paper focuses on the crystallization and stereochemistry of bRo5 compounds ACBI1 and BI201335, with no mention of finasteride or its pharmacokinetics. |
| PGx | Söderström_2002 | not_relevant | 0 | 0 | The paper investigates the association between SRD5A2 genotypes and prostate cancer risk/staging, not the pharmacokinetic or pharmacodynamic parameters of finasteride treatment. |
| PGx | Tang_2011 | not_relevant | 0 | 0 | The paper focuses on the association between estrogen metabolism gene polymorphisms and prostate cancer risk, not on pharmacokinetic or pharmacodynamic parameters of finasteride. |
| PGx | Tang_2018 | not_relevant | 0 | 0 | The paper investigates the association between estrogen metabolism gene variants and prostate cancer risk, not the pharmacokinetics or pharmacodynamics of finasteride. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper is a comparative metabolomics study of breath and blood in healthy volunteers and does not report any pharmacokinetic parameters or data for finasteride. |
| popPK | Tantiyavarong_2024 | irrelevant | 0 | 0 | This is a clinical study on LED light therapy for hair loss that mentions finasteride only as a background comparator and contains no pharmacokinetic data. |
| popPK | Tonduru_2023 | irrelevant | 0 | 0 | The paper investigates OATP1C1-mediated transport of novel anti-inflammatory prodrugs (ketoprofen, naproxen, etc.) and does not mention finasteride or report its pharmacokinetic parameters. |
| popPK | Valle_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of exemestane, not finasteride. |
| popPK | Vogel_2024 | irrelevant | 0 | 0 | The paper is a wastewater-based epidemiology study analyzing opioids and lifestyle substances, and does not report pharmacokinetic parameters for finasteride. |
| PGx | Wienkers_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of tirilazad, not finasteride. |
| PGx | Wigle_2008 | not_relevant | 0 | 0 | The paper is an epidemiological review of prostate cancer risk factors (including genetic polymorphisms and endocrine function) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of finasteride. |
| PGx | Yasumori_2006 | not_relevant | 0 | 0 | The study examines the effect of finasteride on the PK of omeprazole, not the effect of a genotype on the PK/PD of finasteride. |
| popPK | Zager_2012 | irrelevant | 2 | 1 | The paper is a mechanistic modeling study in rats that references a separate two-compartment PK model for finasteride (Stuart [26]) without providing the specific clearance, volume, or rate constant values for finasteride itself, focusing instead on prostatic hormone dynamics. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study for olanzapine (with aripiprazole interaction), where finasteride is merely listed as one of many concomitant medications, and no finasteride PK parameters are reported. |
| popPK | Zhang_2024_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for aripiprazole, not finasteride. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a dataset of acid dissociation constants (pKa) and contains no pharmacokinetic data or parameters for finasteride. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
