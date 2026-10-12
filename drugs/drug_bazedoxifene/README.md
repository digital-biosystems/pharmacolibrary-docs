<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03C&quot;,&quot;href&quot;:&quot;atc/G03C.md&quot;},{&quot;label&quot;:&quot;bazedoxifene&quot;}]"></div>

# bazedoxifene

- **generic name:** bazedoxifene
- **ATC codes:** `G03CC07`, `G03XC02`
- **DrugBank:** [DB06401](https://go.drugbank.com/drugs/DB06401) · **PubChem:** [CID 154257](https://pubchem.ncbi.nlm.nih.gov/compound/154257)
- **molar mass:** 470.613 g/mol (C30H34N2O3) — DrugBank
- **groups:** approved, investigational

## About

Bazedoxifene is a selective estrogen receptor modulator used to treat postmenopausal osteoporosis. It remains authorised in the European Union, though one marketing application there was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4875166](https://www.wikidata.org/wiki/Q4875166) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:37 | 0:39 | 0/0/0 | 0/0/0 | 1/0/0 | 18,880/900 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lušin_2015](drugs/drug_bazedoxifene/pgx_Lu_in_2015_UGT1A1_safety.md) | Lušin TT et al., UGT1A1*28 polymorphism influences glucu…, Die Pharmazie (2015) | — |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bazedoxifene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `UGT1A1` safety_allele, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` safety_allele | paper PGx gene |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target), ESR2 (modulator), UGT1A10 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dudenko_2021.pdf` | Dudenko D et al., Bazedoxifene increases the proliferatio…, Gynecological endocrinology… (2021) | pd | 4 | [10.1080/09513590.2021.1876653](https://doi.org/10.1080/09513590.2021.1876653) | [33480311](https://www.ncbi.nlm.nih.gov/pubmed/33480311) | metadata signals extractable PD data (EC50) |
| `McKeand_2018.pdf` | McKeand W et al., Pharmacokinetic Drug Interaction Study…, Clinical pharmacology in dr… (2018) | pgx | 8 | [10.1002/cpdd.433](https://doi.org/10.1002/cpdd.433) | [29389076](https://www.ncbi.nlm.nih.gov/pubmed/29389076) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-07T08:37:07.796113+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bondy_2025 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the therapeutic efficacy of bazedoxifene on mood and menopausal symptoms, and it reports no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Dudenko_2021 | irrelevant | 0 | 0 | This is an in vitro mechanistic study investigating the effect of bazedoxifene on cell proliferation and gene expression, not a pharmacokinetic study, and it reports no disposition parameters. |
| PGx | Hodnik_2014 | not_relevant | 0 | 0 | The paper describes the development of novel PXR antagonists using a bazedoxifene scaffold, but it does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of bazedoxifene itself. |
| popPK | Hodnik_2015 | irrelevant | 0 | 0 | This is an in-vitro study on the pharmacodynamics of PXR modulators, not a pharmacokinetic study reporting disposition parameters for bazedoxifene. |
| PGx | Hodnik_2015 | not_relevant | 0 | 0 | The paper describes the discovery of new PXR modulators using bazedoxifene as a scaffold but does not report pharmacogenomic effects on the PK or PD of bazedoxifene itself. |
| PGx | McKeand_2018 | not_relevant | 1 | 10 | The study reports that UGT1A1 genotype has no relationship with bazedoxifene clearance, failing to report a pharmacogenomic effect. |
| PGx | Patra_2026 | not_relevant | 0 | 0 | The paper reports structure-activity relationship and metabolic optimization of analogs, not the effect of a human gene variant on pharmacokinetics or pharmacodynamics. |
| popPK | Ranjan_2023 | irrelevant | 0 | 0 | The study investigates bazedoxifene's anti-leishmanial activity and cytotoxicity (IC50/EC50) rather than its pharmacokinetic disposition parameters. |
| PGx | Shen_2010 | not_relevant | 0 | 0 | The paper characterizes in vitro metabolism and transport of bazedoxifene using human enzymes and cell lines, but does not report the effects of genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
