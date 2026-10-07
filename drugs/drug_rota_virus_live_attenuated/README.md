<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;rota virus, live attenuated&quot;}]"></div>

# rota virus, live attenuated

- **generic name:** rota virus, live attenuated
- **ATC codes:** `J07BH01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This live attenuated rotavirus vaccine is used to immunise against rotavirus infections, which cause diarrhoea. It is authorised in the European Union as a viral vaccine for immunisation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:04 | 2:38 | 0/0/0 | 0/0/0 | 0/0/2 | 46,408/1,478 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABO** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bucardo_2018](drugs/drug_rota_virus_live_attenuated/pgx_Bucardo_2018_ABO_Q100.md) | Bucardo F et al., The Lewis A phenotype is a restriction…, Scientific reports (2018) | [10.1038/s41598-018-19718-y](https://doi.org/10.1038/s41598-018-19718-y) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **FUT1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bucardo_2018](drugs/drug_rota_virus_live_attenuated/pgx_Bucardo_2018_FUT1_Q100.md) | Bucardo F et al., The Lewis A phenotype is a restriction…, Scientific reports (2018) | [10.1038/s41598-018-19718-y](https://doi.org/10.1038/s41598-018-19718-y) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rota_virus_live_attenuated) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ABO (target), FUT1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdel-Haq_2011 | not_relevant | 0 | 0 | The paper studies wild-type rotavirus genotypes in children, not the pharmacogenomics of the rotavirus live attenuated vaccine. |
| PGx | Alekseev_2016 | not_relevant | 0 | 0 | The paper is a review of rotavirus epidemiology and vaccine history, providing no data on pharmacogenomic effects on PK/PD parameters. |
| PGx | Amood_2016 | not_relevant | 0 | 0 | The study analyzes epidemiological trends of rotavirus genotypes and hospitalization rates in a population, containing no pharmacogenomic data or individual-level PK/PD parameters. |
| PGx | Borges_2011 | not_relevant | 0 | 0 | The paper evaluates rotavirus epidemiology and vaccination status, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Bucardo_2012 | not_relevant | 0 | 0 | The paper reports on viral reassortment and vaccine failure mechanisms, containing no pharmacogenomic or PK/PD analysis. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper reports epidemiological prevalence and viral genotype analysis of rotavirus infections in children, not pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the rotavirus vaccine. |
| PGx | De_2024 | not_relevant | 0 | 0 | The paper reports on the epidemiology and genomic sequencing of wild-type rotavirus strains, not on pharmacogenomic effects on PK/PD parameters of the attenuated vaccine. |
| PGx | Gómez_2013 | not_relevant | 0 | 0 | The paper analyzes rotavirus strains isolated from vaccinated children to investigate breakthrough infections; it does not study how human gene variants affect the pharmacokinetics or pharmacodynamics of the vaccine. |
| PGx | Kozawa_2022 | not_relevant | 0 | 0 | The paper reports clinical outcomes and viral genotypes following rotavirus vaccination, not the pharmacogenomic impact of human gene variants on the pharmacokinetics or pharmacodynamics of the vaccine. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The paper studies rotavirus genotypes in the population to estimate vaccine efficacy, not human genetic variants affecting the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Matthijnssens_2012 | not_relevant | 0 | 0 | The paper discusses the impact of vaccination on viral genotype prevalence (population-level viral evolution), not the influence of human genetic variants on the pharmacokinetics or pharmacodynamics of the vaccine. |
| PGx | Motamedi-Rad_2020 | not_relevant | 0 | 0 | The paper analyzes rotavirus genotypes and compares them to vaccine strains but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Pérez-Ortín_2019 | not_relevant | 0 | 0 | The paper studies rotavirus epidemiology and vaccine efficacy but does not report pharmacogenomic effects on the PK or PD of the rotavirus vaccine. |
| PGx | Redda_2025 | not_relevant | 0 | 0 | The paper analyzes the genetic diversity of the rotavirus pathogen itself, not human host genetics or pharmacogenomic effects on the vaccine's PK/PD. |
| PGx | Shange_2025 | not_relevant | 0 | 0 | The paper describes the genomic evolution and antigenicity of wild-type rotavirus strains in South Africa, not the pharmacokinetics or pharmacodynamics of the live attenuated rotavirus vaccine in relation to host genetics. |
| PGx | Soeorg_2012 | not_relevant | 0 | 0 | The paper describes rotavirus genotype distribution in children, not the effect of human genetic variants on the PK/PD of rotavirus vaccines. |
| PGx | Steele_2012 | not_relevant | 0 | 0 | This study evaluates the clinical efficacy of the rotavirus vaccine against diverse viral strains in infants and does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Vesikari_2012 | irrelevant | 0 | 0 | The paper is a narrative review of rotavirus vaccination history and efficacy, containing no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Vizzi_2017 | not_relevant | 0 | 0 | The paper reports epidemiological surveillance of rotavirus genotypes in Venezuela post-vaccination; it does not report pharmacokinetic or pharmacodynamic parameters of the vaccine, nor any association with host gene variants or genotypes. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
