<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;hydroxycarbamide&quot;}]"></div>

# hydroxycarbamide

- **generic name:** hydroxycarbamide
- **ATC codes:** `L01XX05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Hydroxycarbamide is an antineoplastic and antisickling agent used for various cancers and blood disorders, including sickle cell anaemia, leukaemias, and polycythaemia vera. It is an authorised medicine in the European Union and is included on the WHO list of essential medicines, so it remains widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q212272](https://www.wikidata.org/wiki/Q212272) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:44 | 0:21 | 0/0/0 | 0/0/0 | 0/0/1 | 21,688/1,146 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **OCT1** | `Q57` · t1/2z | transport | [Allegra_2025](drugs/drug_hydroxycarbamide/pgx_Allegra_2025_OCT1_Q57.md) | Allegra S et al., Role of OCT1 and MAP3K5 Genetic Polymor…, Life (Basel, Switzerland) (2025) | [10.3390/life15081284](https://doi.org/10.3390/life15081284) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydroxycarbamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: OCT1 (transport).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Desai_2013 | irrelevant | 0 | 0 | The study investigates the effect of hydroxycarbamide treatment on tricuspid regurgitant jet velocity in sickle cell disease, reporting no pharmacokinetic parameters for the drug. |
| popPK | Dong_2018 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PGx | Egesa_2022 | not_relevant | 0 | 0 | This is a general clinical review of sickle cell disease that mentions hydroxycarbamide but does not report any pharmacogenomic studies or genotype-based changes in PK/PD parameters. |
| PGx | Ferrer-Marín_2024 | not_relevant | 5 | 3 | This is a comprehensive review article that discusses the clinical relevance of genetic subtypes in Essential Thrombocythaemia but does not report original quantitative pharmacokinetic or pharmacodynamic data for hydroxycarbamide. |
| popPK | Franquet-Griell_2015 | irrelevant | 0 | 0 | The study is an environmental risk assessment calculating predicted environmental concentrations (PECs) of hydroxycarbamide in water, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Greenfield_2018 | not_relevant | 0 | 0 | The paper discusses JAK2 mutations and ruxolitinib response in MPNs, but does not report any pharmacogenomic effects on the PK or PD of hydroxycarbamide. |
| PGx | Harrison_2023 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on the PK or PD parameters of hydroxycarbamide, focusing instead on ruxolitinib efficacy and molecular outcomes. |
| PGx | Laurance_2010 | not_relevant | 0 | 0 | The paper reports hydroxycarbamide's effect on endothelial cell gene expression but does not report any influence of a genetic variant or genotype on hydroxycarbamide's pharmacokinetics or pharmacodynamics. |
| PGx | Melikyan_2018 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing interferon and hydroxycarbamide for myeloproliferative disorders but does not report pharmacogenomic effects on hydroxycarbamide's PK or PD parameters. |
| PGx | Riley_2024 | not_relevant | 1 | 0 | The text is a narrative review discussing the clinical role of hydroxycarbamide and mentions pharmacogenomics as an area of research, but it does not report specific gene variants or their effects on PK/PD parameters. |
| PGx | da_2017 | not_relevant | 2 | 5 | The paper reports associations between genetic polymorphisms and oxidative status/biochemical markers in SCA patients, but does not report changes in hydroxycarbamide pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy and safety of ruxolitinib versus hydroxycarbamide in polycythaemia vera but does not report any pharmacogenomic studies or gene-variant effects on the PK/PD of hydroxycarbamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
