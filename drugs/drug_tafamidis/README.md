<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tafamidis&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafamidis_Parkinson2013_reference&quot;,&quot;label&quot;:&quot;Parkinson_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tafamidis

- **generic name:** tafamidis
- **ATC codes:** `N07XX08`
- **DrugBank:** [DB11644](https://go.drugbank.com/drugs/DB11644) · **PubChem:** [CID 11001318](https://pubchem.ncbi.nlm.nih.gov/compound/11001318)
- **molar mass:** 308.116 g/mol (C14H7Cl2NO3) — DrugBank
- **groups:** approved, investigational

## About

Tafamidis is a nervous system drug used to treat amyloidosis. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q519447](https://www.wikidata.org/wiki/Q519447) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tafamidis | parent | 308.116 | C14H7Cl2NO3 | DrugBank | [11001318](https://pubchem.ncbi.nlm.nih.gov/compound/11001318) | Ulaszek_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:59 | 13:55 | 1/3/0 | 2/0/1 | 0/0/1 | 511,337/31,208 | ollama / glm-5.3-flash | 27 | 10/11 | 27/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Parkinson_2013_reference](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Parkinson J et al., Modeling of age-dependent amyloid accum…, Pharmacology research & per… (2013) | [10.1002/prp2.12](https://doi.org/10.1002/prp2.12) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Scala_2018_reference](drugs/drug_tafamidis/Tafamidis_Scala2018_reference.md) | — | 2-compartment (no model) | 3 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/rli.0000000000000412](https://doi.org/10.1097/rli.0000000000000412) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ulaszek_2026_dosing_regimen](drugs/drug_tafamidis/Tafamidis_Ulaszek2026_dosing_regimen.md) | — | general linear (no model) | 0 | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ulaszek_2026_value](drugs/drug_tafamidis/Tafamidis_Ulaszek2026_value.md) | — | general linear (no model) | 4 (+3 cov.) | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tess_2023_TTR](drugs/drug_tafamidis/pd_Tess_2023_TTR.md) | unbound TTR tetramer (TTR stabilisation) ← tafamidis · inhibition effect | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ulaszek_2026_TTR](drugs/drug_tafamidis/pd_Ulaszek_2026_TTR.md) | Total transthyretin (TTR) concentration in plasma biomarker turnover ← tafamidis | — | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vong_2021_All_cause_mortality_survival](drugs/drug_tafamidis/pd_Vong_2021_All_cause_mortality_survival.md) | All-cause mortality (survival) ← tafamidis · time-to-event model | — | Vong C et al., Modeling of Survival and Frequency of C…, American journal of cardiov… (2021) | [10.1007/s40256-021-00464-y](https://doi.org/10.1007/s40256-021-00464-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vong_2021_Cardiovascular_related_hospitalization](drugs/drug_tafamidis/pd_Vong_2021_Cardiovascular_related_hospitalization.md) | Cardiovascular-related hospitalization ← tafamidis · time-to-event model | — | Vong C et al., Modeling of Survival and Frequency of C…, American journal of cardiov… (2021) | [10.1007/s40256-021-00464-y](https://doi.org/10.1007/s40256-021-00464-y) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tess_2023_6MWT](drugs/drug_tafamidis/pd_Tess_2023_6MWT.md) | rate of change in six-minute walk test disease progression measure ← TTR stabilisation (tafamidis-bound TTR tetramer) · disease-progression model | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tess_2023_KCCQ_OS](drugs/drug_tafamidis/pd_Tess_2023_KCCQ_OS.md) | rate of change in KCCQ-OS disease progression measure ← TTR stabilisation (tafamidis-bound TTR tetramer) · disease-progression model | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tess_2023_NT_proBNP](drugs/drug_tafamidis/pd_Tess_2023_NT_proBNP.md) | rate of change in NT-proBNP disease progression measure ← TTR stabilisation (tafamidis-bound TTR tetramer) · disease-progression model | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **TTR** | `Q321` · EC50 | target | [Judge_2026](drugs/drug_tafamidis/pgx_Judge_2026_TTR_Q321.md) | Judge DP et al., Differential Transthyretin Stabilizatio…, JACC. CardioOncology (2026) | [10.1016/j.jaccao.2026.04.006](https://doi.org/10.1016/j.jaccao.2026.04.006) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tafamidis) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TTR (chaperone), TTR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huh_2021.pdf` | Huh Y et al., Population pharmacokinetic modelling an…, British journal of clinical… (2021) | popPK | 10 | [10.1111/bcp.14773](https://doi.org/10.1111/bcp.14773) | [33586186](https://pubmed.ncbi.nlm.nih.gov/33586186) | A population PK model of tafamidis is clearly the subject, but the abstract only gives covariate effect percentages; the actual CL/V/Q parameter values are not shown in the provided evidence. |
| `Tess_2023.pdf` | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | popPK | 7 | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) | [36399070](https://pubmed.ncbi.nlm.nih.gov/36399070) | Population PK-PD modelling of tafamidis in ATTR-CM patients, but the evidence shows only PD effect percentages, not numeric PK parameters (CL/V), which likely reside in supplementary material. |

<sub>queue written 2026-10-07T04:51:39.378880+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amass_2018 | irrelevant | 0 | 0 | This is a disease-progression (MMRM) efficacy analysis of neurologic scores, not a pharmacokinetic study; no CL, V, ka, half-life, or PK model parameters for tafamidis are reported. |
| PGx | Ando_2016 | not_relevant | 3 | 0 | Study compares Val30Met vs non-Val30Met genotypes only for efficacy/safety outcomes, not for any PK or PD parameter of tafamidis. |
| popPK | Conceição_2018 | irrelevant | 0 | 0 | Clinical outcomes study of tafamidis efficacy with no pharmacokinetic parameters reported. |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | This is a PK/PD study of vutrisiran (TTR knockdown), not tafamidis; tafamidis appears only as a concomitant-therapy subgroup with no tafamidis PK parameters reported. |
| PGx | Fontana_2026 | not_relevant | 2 | 3 | The paper examines vutrisiran (not tafamidis) TTR knockdown; TTR genotype was only a subgroup covariate with no meaningful effect reported, and tafamidis use was merely a baseline characteristic, not a pharmacogenomic effect on tafamidis PK/PD. |
| PGx | Fontana_2026_2 | not_relevant | 0 | 0 | Paper reports coramitug trial results in ATTR-CM; tafamidis is only background therapy with no gene variant effect on its PK/PD. |
| popPK | Gundapaneni_2018 | irrelevant | 0 | 0 | This is a clinical efficacy (NIS-LL neurological progression) post hoc analysis with no PK parameters for tafamidis. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Gómez_2025 | irrelevant | 0 | 0 | This is a transcriptomic study of cutaneous leishmaniasis treatment with meglumine antimoniate; tafamidis is not mentioned and no PK parameters for it appear. |
| popPK | Huh_2021 | relevant | 10 | 3 | A population PK model of tafamidis is clearly the subject, but the abstract only gives covariate effect percentages; the actual CL/V/Q parameter values are not shown in the provided evidence. |
| PGx | Ji_2025 | not_relevant | 2 | 3 | In vitro drug–TTR binding comparison; T119M variant mentioned only as design rationale, no genotype effect on tafamidis PK/PD parameters reported. |
| popPK | Kittrell_2020 | irrelevant | 0 | 0 | This is a population PK study of flunixin meglumine in piglets, not tafamidis; tafamidis is not mentioned at all. |
| PGx | Laird_2020 | not_relevant | 2 | 3 | Case report of tafamidis–statin–amiodarone DDI via BCRP inhibition; no gene variant/genotype effect on tafamidis PK/PD parameters reported. |
| popPK | Liu_2026 | irrelevant | 1 | 1 | This is a PET tracer kinetic imaging study; tafamidis is only the treatment intervention, and no tafamidis PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | In silico structural/docking study of TTR variants; tafamidis is only a docked ligand, no PK parameters (CL, V, ka, half-life, population-PK model) reported. |
| popPK | Madelain_2017 | irrelevant | 0 | 0 | The paper models favipiravir PK in cynomolgus macaques; tafamidis is not the subject drug and no tafamidis parameters appear. |
| PGx | Merlini_2013 | not_relevant | 5 | 5 | Reports tafamidis PD (TTR stabilization) across various TTR genotypes but does not compare pharmacodynamic effects by genotype/phenotype; no genotype-stratified effect estimates. |
| popPK | Parkinson_2013 | irrelevant | 0 | 0 | This is a PKPD model of MRK-560 and amyloid-beta in Tg2576 mice; tafamidis is not mentioned at all. |
| popPK | Santos_2026 | irrelevant | 0 | 0 | This is an in silico ADMET/docking study of clomiphene, not tafamidis; no PK disposition parameters for tafamidis appear. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | This is a population PK study of gadoterate meglumine (a gadolinium contrast agent), not tafamidis; tafamidis is not mentioned at all. |
| PGx | Sha_2024 | not_relevant | 0 | 0 | not captured |
| popPK | Tess_2023 | relevant | 7 | 3 | Population PK-PD modelling of tafamidis in ATTR-CM patients, but the evidence shows only PD effect percentages, not numeric PK parameters (CL/V), which likely reside in supplementary material. |
| popPK | Testani_2026 | irrelevant | 0 | 0 | Study of acoramidis effects on kidney function; tafamidis is only a co-administered drop-in comparator with no PK parameters (CL, V, half-life, or PK model) reported for it. |
| PGx | Vong_2021 | not_relevant | 3 | 5 | TTR genotype (wild-type vs variant) is a disease-genotype prognostic factor for clinical outcomes (mortality/hospitalization hazard), not a pharmacogenomic effect on tafamidis PK or a drug-specific PD parameter. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | This is a review of silibinin combined with EGFR-TKIs in NSCLC; tafamidis is not the subject drug and no PK parameters for it appear. |
| PGx | Witteles_2024 | not_relevant | 0 | 0 | Paper examines AF/AFL as prognostic factor for mortality and tafamidis efficacy; no gene variant effect on PK/PD parameters reported. |
| PGx | Xiao_2026 | not_relevant | 2 | 3 | Reports tafamidis clinical efficacy in a TTR p.Val40Ile genotype case, but no PK/PD parameter (e.g., AUC, clearance, response biomarker effect size) is quantified by genotype. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:51 UTC</sub>
