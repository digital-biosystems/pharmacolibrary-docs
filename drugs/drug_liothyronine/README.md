<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Liothyronine&quot;}]"></div>

# Liothyronine

- **generic name:** Liothyronine
- **ATC codes:** `H03AA02`, `H03AA03`
- **DrugBank:** [DB00279](https://go.drugbank.com/drugs/DB00279) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Liothyronine is a thyroid hormone preparation used in thyroid therapy. It is an approved medicine and is also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q930170](https://www.wikidata.org/wiki/Q930170) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:00 | 4:33 | 0/0/0 | 0/0/0 | 0/0/1 | 153,855/2,211 | einfracz / qwen3.8-27b | 12 | 3/7 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | **DIO2** | `Q305` · kfm | formation | [Jo_2019](drugs/drug_liothyronine/pgx_Jo_2019_DIO2_Q305.md) | Jo S et al., Type 2 deiodinase polymorphism causes E…, The Journal of clinical inv… (2019) | [10.1172/JCI123176](https://doi.org/10.1172/JCI123176) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=liothyronine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `SLC10A1` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DIO2 (formation), PCNA (target), SERPINA7 (substrate), SLC16A10 (inhibitor), SLC7A5 (unknown), SLCO1C1 (inhibitor), SLCO1C1 (substrate), SLCO4A1 (inhibitor), SLCO4A1 (substrate), SLCO4C1 (substrate), THRA (target), THRB (target), TTR (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taylor_1997.pdf` | Taylor AH et al., Beneficial effects of a novel thyromime…, Molecular pharmacology (1997) | pd | 5 | [10.1124/mol.52.3.542](https://doi.org/10.1124/mol.52.3.542) | [9281617](https://www.ncbi.nlm.nih.gov/pubmed/9281617) | metadata signals extractable PD data (EC50) |
| `Egnell_2003.pdf` | Egnell AC et al., Generation and evaluation of a CYP2C9 h…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.103.054999](https://doi.org/10.1124/jpet.103.054999) | [14557374](https://www.ncbi.nlm.nih.gov/pubmed/14557374) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T09:59:17.718225+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Almohammadi_2025 | not_relevant | 2 | 3 | The paper reports clinical response to liothyronine in a specific genetic disease but does not report pharmacokinetic or pharmacodynamic parameters modified by the genotype in a pharmacogenomic context. |
| PGx | Caron_2022 | not_relevant | 0 | 0 | The paper is a review of factors influencing levothyroxine (LT4) dose and metabolism; it does not report specific pharmacogenomic effects on liothyronine PK/PD, and liothyronine is only mentioned as a metabolite. |
| PGx | Dumitrescu_2006 | not_relevant | 0 | 0 | The paper studies thyroid hormone transporter deficiency and endogenous thyroid hormone metabolism in mice, not the pharmacokinetics or pharmacodynamics of the exogenous drug liothyronine. |
| PGx | Egnell_2003 | not_relevant | 0 | 0 | The paper describes liothyronine as a CYP2C9 heteroactivator in an in vitro model, not a drug whose PK/PD is altered by a gene variant. |
| PGx | Gatta_2025 | not_relevant | 1 | 0 | The paper proposes a digital health device for dosing and mentions DIO2 gene involvement generally, but does not report specific pharmacogenomic data or quantify PK/PD changes for liothyronine. |
| PGx | Haberkorn_2001 | not_relevant | 0 | 0 | The paper reports the effects of L-T3 and vitamin A on UGT gene expression in rats, not pharmacogenomic effects on Liothyronine's pharmacokinetics or pharmacodynamics. |
| PGx | Haberkorn_2003 | not_relevant | 0 | 0 | The paper investigates the regulation of UGT isoforms by retinoic acid in rats and does not mention liothyronine or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Hoermann_2023 | irrelevant | 0 | 0 | The paper presents a mathematical model of HPT axis homeostasis and does not report pharmacokinetic parameters for liothyronine. |
| popPK | Jenner_2021 | irrelevant | 0 | 0 | The paper is a mechanistic mathematical model of SARS-CoV-2 immune response and contains no data or parameters for liothyronine. |
| PGx | Laurberg_2005 | not_relevant | 0 | 0 | The paper is a general review of hypothyroidism management in the elderly and does not report any pharmacogenomic effects on the PK or PD of liothyronine. |
| popPK | Lin_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of tetraiodothyroacetic acid (tetrac) in cell culture, not the pharmacokinetics of liothyronine. |
| PGx | Mazza_2025 | not_relevant | 0 | 0 | The paper discusses the role of the DIO2 gene in T4-to-T3 conversion but does not report specific pharmacokinetic or pharmacodynamic data demonstrating that the variant alters the PK/PD parameters of liothyronine itself. |
| PGx | Paragliola_2020 | not_relevant | 4 | 0 | The text is a review abstract describing the role of deiodinases in thyroid hormone sensitivity but does not report a specific pharmacogenomic study or quantitative effect size for liothyronine. |
| PGx | Premawardhana_2023 | not_relevant | 2 | 0 | The paper is a methodological review discussing trial design for liothyronine and mentions the D2 Thr92Ala polymorphism, but it does not report primary pharmacokinetic or pharmacodynamic data quantifying how this variant alters liothyronine's PK/PD parameters. |
| popPK | Simonetti_2026 | irrelevant | 0 | 0 | The study focuses on cystic fibrosis treatment response (sweat chloride) and does not involve liothyronine or any pharmacokinetic parameters. |
| PGx | Simonetti_2026 | not_relevant | 0 | 0 | The study focuses on cystic fibrosis treatment with elexacaftor/tezacaftor/ivacaftor and does not involve liothyronine. |
| popPK | Taylor_1997 | irrelevant | 0 | 0 | The paper studies a thyromimetic (CGS 23425) and uses L-T3 only as a comparator in in-vitro and functional assays, providing no pharmacokinetic parameters for liothyronine. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational network analysis tool (PathFX) for drug safety and efficacy signals and does not contain pharmacokinetic data or mention liothyronine. |
| popPK | Wooliscroft_2020 | irrelevant | 0 | 0 | The study is a Phase I safety and dosing trial focused on visual outcomes and adverse events, reporting no quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Yang_2026 | not_relevant | 1 | 0 | The paper reports a congenital enzyme defect (selenoprotein pathway) affecting endogenous thyroid hormone metabolism, not a pharmacogenomic effect on the PK or PD of exogenous liothyronine. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | This is an in vivo screening assay study for thyroid hormone signaling disruption in frogs, not a pharmacokinetic study of liothyronine (T3) as a drug with quantitative disposition parameters. |
| popPK | Zhou-Li_1991 | irrelevant | 0 | 0 | The study investigates the effects of L-triiodothyronine on cell proliferation in vitro, not its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
