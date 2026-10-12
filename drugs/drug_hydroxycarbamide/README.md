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
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **OCT1** | `Q57` · t1/2z | transport | [Allegra_2025](drugs/drug_hydroxycarbamide/pgx_Allegra_2025_OCT1_Q57.md) | Allegra S et al., Role of OCT1 and MAP3K5 Genetic Polymor…, Life (Basel, Switzerland) (2025) | [10.3390/life15081284](https://doi.org/10.3390/life15081284) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hydroxycarbamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: OCT1 (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
