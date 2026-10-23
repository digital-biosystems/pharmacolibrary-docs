<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Liothyronine&quot;}]"></div>

# Liothyronine

- **generic name:** Liothyronine
- **ATC codes:** `H03AA02`, `H03AA03`
- **DrugBank:** [DB00279](https://go.drugbank.com/drugs/DB00279) · **PubChem:** none
- **groups:** approved, investigational, vet_approved

## About

Liothyronine is a thyroid hormone preparation used in thyroid therapy. It is an approved medicine and is also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q930170](https://www.wikidata.org/wiki/Q930170) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.30).">human + animal</span> | **DIO2** | `Q305` · kfm | formation | [Jo_2019](drugs/drug_liothyronine/pgx_Jo_2019_DIO2_Q305.md) | Jo S et al., Type 2 deiodinase polymorphism causes E…, The Journal of clinical inv… (2019) | [10.1172/JCI123176](https://doi.org/10.1172/JCI123176) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=liothyronine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | liver | `SLC10A1` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: DIO2 (formation), PCNA (target), SERPINA7 (substrate), SLC16A10 (inhibitor), SLC7A5 (unknown), SLCO1C1 (inhibitor), SLCO1C1 (substrate), SLCO4A1 (inhibitor), SLCO4A1 (substrate), SLCO4C1 (substrate), THRA (target), THRB (target), TTR (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:00 | 4:33 | 0/0/0 | 0/0/0 | 0/0/1 | 153,855/2,211 | einfracz / qwen3.8-27b | 12 | 3/7 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 54 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taylor_1997.pdf` | Taylor AH et al., Beneficial effects of a novel thyromime…, Molecular pharmacology (1997) | pd | 5 | [10.1124/mol.52.3.542](https://doi.org/10.1124/mol.52.3.542) | [9281617](https://www.ncbi.nlm.nih.gov/pubmed/9281617) | metadata signals extractable PD data (EC50) |
| `Egnell_2003.pdf` | Egnell AC et al., Generation and evaluation of a CYP2C9 h…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.103.054999](https://doi.org/10.1124/jpet.103.054999) | [14557374](https://www.ncbi.nlm.nih.gov/pubmed/14557374) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 09:59 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bliothyronine%5D&body=Drug%3A%20liothyronine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_liothyronine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
