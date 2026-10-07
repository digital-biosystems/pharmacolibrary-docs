<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;Olmesartan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olmesartan_Kodati2017_reference&quot;,&quot;label&quot;:&quot;Kodati_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/Olmesartan_Kodati2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olmesartan_Ren2022_reference&quot;,&quot;label&quot;:&quot;Ren_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/Olmesartan_Ren2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olmesartan_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/Olmesartan_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Olmesartan

- **generic name:** Olmesartan
- **ATC codes:** `C09CA08`, `C09DA08`, `C09DB02`, `C09DX03`
- **DrugBank:** [DB00275](https://go.drugbank.com/drugs/DB00275) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Olmesartan is an angiotensin II receptor blocker used to treat high blood pressure (arterial hypertension) and congestive heart failure. It is an approved medicine, available alone and in combination products with diuretics or calcium channel blockers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421156](https://www.wikidata.org/wiki/Q421156) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olmesartan | parent | 446.511 | C24H26N6O3 | PubChem | [158781](https://pubchem.ncbi.nlm.nih.gov/compound/158781) | Kodati_2017, Yoshihara_2005 |
| olmesartan medoxomil | metabolite | 558.595 | C29H30N6O6 | PubChem | [130881](https://pubchem.ncbi.nlm.nih.gov/compound/130881) | Kodati_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:15 | 12:30 | 3/0/1 | 4/0/0 | 2/0/1 | 189,193/33,446 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 2/12 | 11/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kodati_2017_reference](drugs/drug_olmesartan/Olmesartan_Kodati2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Kodati D et al., Population Pharmacokinetic Modeling of…, European journal of drug me… (2017) | [10.1007/s13318-016-0371-0](https://doi.org/10.1007/s13318-016-0371-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ren_2022_reference](drugs/drug_olmesartan/Olmesartan_Ren2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ren T et al., Pharmacodynamic model of slow reversibl…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-022-09822-y](https://doi.org/10.1007/s10928-022-09822-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Thoueille_2023_reference](drugs/drug_olmesartan/Olmesartan_Thoueille2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Thoueille P et al., Population pharmacokinetic modelling to…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad103](https://doi.org/10.1093/jac/dkad103) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yoshihara_2005_reference](drugs/drug_olmesartan/Olmesartan_Yoshihara2005_reference.md) | — | 1-compartment (no model) | 5 | Yoshihara K et al., Population pharmacokinetics of olmesart…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544120-00011](https://doi.org/10.2165/00003088-200544120-00011) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rohatagi_2008_trough_seated_diastolic_blood_pressure](drugs/drug_olmesartan/pd_Rohatagi_2008_trough_seated_diastolic_blood_pressure.md) | change in trough seated diastolic blood pressure ← olmesartan · direct Emax (saturable) effect | — | Rohatagi S et al., Evaluation of population pharmacokineti…, Journal of clinical pharmac… (2008) | [10.1177/0091270008317847](https://doi.org/10.1177/0091270008317847) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yatabe_2009_p_ERK](drugs/drug_olmesartan/pd_Yatabe_2009_p_ERK.md) | phosphorylated ERK (p-ERK) to total ERK expression ratio ← olmesartan · direct Emax (saturable) effect | — | Yatabe J et al., Angiotensin II type 1 receptor blocker…, American journal of physiol… (2009) | [10.1152/ajprenal.00580.2007](https://doi.org/10.1152/ajprenal.00580.2007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zakrocka_2019_KAT_II](drugs/drug_olmesartan/pd_Zakrocka_2019_KAT_II.md) | KAT II activity ← olmesartan · direct Emax (saturable) effect | — | Zakrocka I et al., Angiotensin II type 1 receptor blockers…, Naunyn-Schmiedeberg's archi… (2019) | [10.1007/s00210-018-1572-7](https://doi.org/10.1007/s00210-018-1572-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zannad_2007_DBP](drugs/drug_olmesartan/pd_Zannad_2007_DBP.md) | diastolic blood pressure ← olmesartan · direct Emax (saturable) effect | — | Zannad F et al., Blood pressure-lowering efficacy of olm…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2007.00464.x](https://doi.org/10.1111/j.1472-8206.2007.00464.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zannad_2007_SBP](drugs/drug_olmesartan/pd_Zannad_2007_SBP.md) | systolic blood pressure ← olmesartan · direct Emax (saturable) effect | — | Zannad F et al., Blood pressure-lowering efficacy of olm…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2007.00464.x](https://doi.org/10.1111/j.1472-8206.2007.00464.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zakrocka_2019_KYNA](drugs/drug_olmesartan/pd_Zakrocka_2019_KYNA.md) | KYNA production ← olmesartan · direct Emax (saturable) effect | model (no simulator) | Zakrocka I et al., Angiotensin II type 1 receptor blockers…, Naunyn-Schmiedeberg's archi… (2019) | [10.1007/s00210-018-1572-7](https://doi.org/10.1007/s00210-018-1572-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green" title="the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.">quantitative</span> | **ABCB1** | `Q22` · CL | transport | [Soria-Chacartegui_2023](drugs/drug_olmesartan/pgx_Soria_Chacartegui_2023_ABCB1_Q22.md) | Soria-Chacartegui P et al., Impact of Sex and Genetic Variation in…, International journal of mo… (2023) | [10.3390/ijms242015265](https://doi.org/10.3390/ijms242015265) |
| <span class="pk-badge pk-badge--green" title="the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.">quantitative</span> | **SLC22A1** | `Q22` · CL | transport | [Soria-Chacartegui_2023](drugs/drug_olmesartan/pgx_Soria_Chacartegui_2023_SLC22A1_Q22.md) | Soria-Chacartegui P et al., Impact of Sex and Genetic Variation in…, International journal of mo… (2023) | [10.3390/ijms242015265](https://doi.org/10.3390/ijms242015265) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **SLCO1B1** | `Q27` · CL/F | transport | [Suwannakul_2008](drugs/drug_olmesartan/pgx_Suwannakul_2008_SLCO1B1_Q27.md) | Suwannakul S et al., Pharmacokinetic interaction between pra…, Journal of human genetics (2008) | [10.1007/s10038-008-0324-9](https://doi.org/10.1007/s10038-008-0324-9) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olmesartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | liver | `SLC22A1` transport, `SLCO1B1` substrate/transport, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inducer/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 121 matched, 57 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 3  ·  needs_review 1  ·  rejected 0  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chae_2014.pdf` | Chae JW et al., Development of a population pharmacokin…, International journal of cl… (2014) | popPK | 10 | [10.5414/CP202046](https://doi.org/10.5414/CP202046) | [24849193](https://pubmed.ncbi.nlm.nih.gov/24849193) | The study is a population PK model for olmesartan medoxomil, but the specific numeric parameter values are not present in the provided evidence. |
| `Kodati_2017.pdf` | Kodati D et al., Population Pharmacokinetic Modeling of…, European journal of drug me… (2017) | popPK | 10 | [10.1007/s13318-016-0371-0](https://doi.org/10.1007/s13318-016-0371-0) | [27535556](https://pubmed.ncbi.nlm.nih.gov/27535556) | The study reports a population PK model for olmesartan with specific numeric values for CL/F and V/F provided in the abstract. |
| `Rohatagi_2008.pdf` | Rohatagi S et al., Evaluation of population pharmacokineti…, Journal of clinical pharmac… (2008) | popPK | 10 | [10.1177/0091270008317847](https://doi.org/10.1177/0091270008317847) | [18490496](https://pubmed.ncbi.nlm.nih.gov/18490496) | The paper describes a population PK model for olmesartan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Yoshihara_2005.pdf` | Yoshihara K et al., Population pharmacokinetics of olmesart…, Clinical pharmacokinetics (2005) | popPK | 10 | [10.2165/00003088-200544120-00011](https://doi.org/10.2165/00003088-200544120-00011) | [16372830](https://pubmed.ncbi.nlm.nih.gov/16372830) | The paper reports a population pharmacokinetic model for olmesartan with specific numeric values for CL/F, absorption rate, and elimination rate constants in the abstract. |
| `Tanigawara_2009.pdf` | Tanigawara Y et al., Comparative pharmacodynamics of olmesar…, Drug metabolism and pharmac… (2009) | popPK | 8 | [10.2133/dmpk.24.376](https://doi.org/10.2133/dmpk.24.376) | [19745564](https://pubmed.ncbi.nlm.nih.gov/19745564) | The study is a population PK/PD analysis of olmesartan in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| `Derobertmasure_2023.pdf` | Derobertmasure A et al., Dried Urine Spot Analysis for assessing…, Journal of chromatography.… (2023) | pd | 5 | [10.1016/j.jchromb.2022.123539](https://doi.org/10.1016/j.jchromb.2022.123539) | [36867996](https://www.ncbi.nlm.nih.gov/pubmed/36867996) | metadata signals extractable PD data (PK/PD) |
| `Floerl_2022.pdf` | Floerl S et al., Functional characterization and compari…, European journal of pharmac… (2022) | pd | 4 | [10.1016/j.ejps.2022.106217](https://doi.org/10.1016/j.ejps.2022.106217) | [35644507](https://www.ncbi.nlm.nih.gov/pubmed/35644507) | metadata signals extractable PD data (IC50) |
| `Endo_2012.pdf` | Endo S et al., Association study of genetic polymorphi…, Journal of human genetics (2012) | pgx | 8 | [10.1038/jhg.2012.63](https://doi.org/10.1038/jhg.2012.63) | [22695893](https://www.ncbi.nlm.nih.gov/pubmed/22695893) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Kim_2012.pdf` | Kim CO et al., Influence of ABCC2, SLCO1B1, and ABCG2…, Journal of cardiovascular p… (2012) | pgx | 8 | [10.1097/FJC.0b013e3182576098](https://doi.org/10.1097/FJC.0b013e3182576098) | [22494992](https://www.ncbi.nlm.nih.gov/pubmed/22494992) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Pei_2018.pdf` | Pei Q et al., Repaglinide-irbesartan drug interaction…, European journal of clinica… (2018) | pgx | 8 | [10.1007/s00228-018-2477-6](https://doi.org/10.1007/s00228-018-2477-6) | [29748863](https://www.ncbi.nlm.nih.gov/pubmed/29748863) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Weiss_2010.pdf` | Weiss J et al., Interaction of angiotensin receptor typ…, Biopharmaceutics & drug dis… (2010) | pgx | 7 | [10.1002/bdd.699](https://doi.org/10.1002/bdd.699) | [20222053](https://www.ncbi.nlm.nih.gov/pubmed/20222053) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Yang_2016.pdf` | Yang R et al., Drug Interactions with Angiotensin Rece…, Current drug metabolism (2016) | pgx | 7 | [10.2174/1389200217666160524143843](https://doi.org/10.2174/1389200217666160524143843) | [27216792](https://www.ncbi.nlm.nih.gov/pubmed/27216792) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-07T08:04:43.233842+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abd_2026 | not_relevant | 2 | 1 | The study reports antihypertensive effect-time summaries for two formulations, but no dose- or exposure-response analysis or numeric concentration-effect parameters. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The paper describes a machine learning method for drug-drug interaction signal detection in the FAERS database and does not report any pharmacokinetic parameters for olmesartan. |
| PD | Battini_2024 | not_relevant | 0 | 0 | This FAERS DDI signal-detection study does not analyze an olmesartan dose- or concentration-effect relationship or report derivable PD parameters. |
| PD | Busby_2018 | not_relevant | 0 | 0 | The study reports an observational, class-level association between ARB prescription duration and cancer mortality, not an Olmesartan-specific pharmacodynamic or dose-response relationship. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for olmesartan. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text reports no Olmesartan exposure- or dose-response analysis or numeric PD parameters. |
| popPK | Chae_2014 | relevant | 10 | 0 | The study is a population PK model for olmesartan medoxomil, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Derobertmasure_2023 | not_relevant | 0 | 0 | The paper assesses olmesartan exposure using dried urine spot analysis but reports no dose- or concentration-effect relationship or numeric PD parameters. |
| PGx | Endo_2012 | not_relevant | 0 | 0 | The study reports no significant association between the tested transporter gene polymorphisms and olmesartan pharmacokinetic parameters. |
| popPK | Erbe_2006 | irrelevant | 0 | 0 | The study is a mechanistic investigation of PPARgamma activation and insulin sensitivity, not a pharmacokinetic study, and olmesartan is only mentioned as a negative control. |
| PD | Erbe_2006 | not_relevant | 0 | 0 | Olmesartan showed no PPARγ ligand activity, and the paper reports no olmesartan-specific dose- or exposure-response relationship or numeric PD parameters. |
| PD | Floerl_2022 | not_relevant | 0 | 0 | The paper characterizes OAT1-mediated drug uptake, not an olmesartan pharmacodynamic or dose/exposure-response relationship. |
| PGx | Floerl_2025 | not_relevant | 0 | 0 | The paper characterizes OATP transporter function in rodents and humans but does not report pharmacogenomic effects of gene variants on olmesartan PK/PD parameters. |
| PD | Hsieh_2017 | not_relevant | 1 | 0 | A single case reports improvement after stopping fixed-dose Sevikar and speculates about causation, but provides no dose- or concentration-response analysis or derivable numeric PD parameters for olmesartan. |
| PGx | Kamiyama_2007 | not_relevant | 0 | 0 | The paper investigates in vitro CYP2C9 inhibition by olmesartan and analogs, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The study is a neuroprotective screening assay in zebrafish and does not report pharmacokinetic parameters for olmesartan. |
| PD | Kim_2022 | not_relevant | 1 | 0 | Olmesartan is reported to protect dopamine neurons, but no dose- or concentration-response relationship or numeric PD parameters are provided. |
| popPK | Kitamura_2007 | irrelevant | 0 | 0 | The study investigates the effect of ARBs on blood glucose levels and does not report any pharmacokinetic parameters for olmesartan. |
| PGx | Kwon_2018 | not_relevant | 0 | 0 | The study investigates the mechanism of olmesartan-induced enteropathy and the protective effect of linalyl acetate in rats, with no mention of genetic variants or pharmacogenomics. |
| PGx | Lambert_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between ibrutinib and verapamil, not a pharmacogenomic effect on olmesartan. |
| popPK | Morita_2026 | irrelevant | 0 | 0 | The study focuses on pemetrexed pharmacokinetics and neutropenia risk, not olmesartan. |
| PD | Morita_2026 | not_relevant | 0 | 0 | The model relates pemetrexed exposure to neutrophil dynamics; renin-angiotensin system inhibitors are only a covariate, with no Olmesartan-specific exposure- or dose-response relationship. |
| PD | Nakamura_2005 | not_relevant | 3 | 0 | Reports dose-dependent retinal effects and a dose associated with near-normalization, but provides no numeric effect-versus-dose or exposure relationship or derivable PD parameters. |
| PGx | Pei_2018 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on repaglinide, not olmesartan. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on pharmacodynamic models of slow reversible binding; olmesartan is mentioned only as an example of a drug with slow dissociation kinetics, and no quantitative PK parameters (CL, V, etc.) for olmesartan are reported. |
| PD | Ren_2022 | not_relevant | 1 | 0 | The PK/PD fits and numeric response parameters are for candesartan and noberastine, not olmesartan; any mention or binding-kinetic listing for olmesartan does not provide an olmesartan exposure- or dose-response relationship. |
| popPK | Rohatagi_2008 | relevant | 10 | 0 | The paper describes a population PK model for olmesartan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Senda_2017 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of CYP enzymes by ARBs, not the effect of a gene variant on the PK or PD of olmesartan. |
| PD | Shimizu_2021 | not_relevant | 3 | 1 | The study reports an inverse olmesartan dose-response direction, but provides no olmesartan dose-specific effect estimates, dose levels, or trend-test statistic; the ARB-class OR is not an extractable olmesartan dose-response parameter. |
| PD | Shukla_2023 | not_relevant | 0 | 0 | The study reports only in-silico docking and molecular-dynamics binding results for olmesartan medoxomil; it provides no dose- or exposure-effect analysis or numeric PD parameters. |
| popPK | Song_2016 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PGx | Soria-Chacartegui_2023 | not_relevant | 0 | 0 | The study reports no significant associations between genetic variants and olmesartan pharmacokinetic parameters. |
| popPK | Srinivas_2017 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The paper reports a case of drug-induced psoriasis associated with sacubitril/valsartan and mentions olmesartan only as a previous medication, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tanigawara_2009 | relevant | 8 | 0 | The study is a population PK/PD analysis of olmesartan in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| PD | Tanigawara_2009 | not_relevant | 8 | 1 | A population PK/PD model and an olmesartan Emax effect are described, but no numeric PD parameters or effect-versus-exposure values are stated or derivable from the text. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The study investigates the antimicrobial mechanism of candesartan cilexetil against MRSA, not the pharmacokinetics of olmesartan. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper studies candesartan cilexetil, not olmesartan, and reports no olmesartan exposure- or dose-response relationship. |
| popPK | Thoueille_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tenofovir and tenofovir alafenamide, not olmesartan. |
| PD | Thoueille_2023 | not_relevant | 0 | 0 | The paper models tenofovir pharmacokinetics and renal-function effects on exposure; it contains no olmesartan analysis or pharmacodynamic exposure-response relationship. |
| popPK | Tonial_2025 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of adverse events (hyperkalemia/AKI) and does not report any pharmacokinetic parameters for olmesartan. |
| PD | Tonial_2025 | not_relevant | 0 | 0 | The study reports clinical outcome risk ratios for co-prescribed ARBs and antibiotics, not an olmesartan dose- or concentration-effect relationship or numeric PD parameters. |
| PGx | Weiss_2010 | not_relevant | 0 | 0 | The paper investigates the effect of olmesartan on ABC-transporter activity in vitro, not the effect of a gene variant on olmesartan's PK/PD. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions mediated by CYP enzymes and explicitly states that CYP has no influence on olmesartan metabolism; it does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review on in silico and AI modeling tools and does not report specific quantitative pharmacokinetic parameters for olmesartan. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The text does not mention olmesartan or report an olmesartan exposure–response or dose–response relationship. |
| popPK | Yatabe_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in rat mesangial cells, not a pharmacokinetic study, and reports no disposition parameters for olmesartan. |
| popPK | Zannad_2007 | irrelevant | 0 | 0 | The paper is a review of blood pressure efficacy (pharmacodynamics) and does not report pharmacokinetic parameters for olmesartan. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on PDE5 inhibitors (sildenafil, tadalafil, etc.) and does not involve olmesartan or report its pharmacokinetic parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper analyzes FAERS hearing-impairment signals for PDE5 inhibitors, not olmesartan, and reports no numeric PD or exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:04 UTC</sub>
