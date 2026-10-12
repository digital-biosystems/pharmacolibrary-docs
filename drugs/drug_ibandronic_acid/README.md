<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;ibandronic acid&quot;}]"></div>

# ibandronic acid

- **generic name:** ibandronic acid
- **ATC codes:** `M05BA06`, `M05BB09`
- **DrugBank:** [DB00710](https://go.drugbank.com/drugs/DB00710) · **PubChem:** [CID 60852](https://pubchem.ncbi.nlm.nih.gov/compound/60852)
- **molar mass:** 319.2289 g/mol (C9H23NO7P2) — DrugBank
- **groups:** approved, investigational

## About

Ibandronic acid is a bisphosphonate used to treat postmenopausal osteoporosis and other bone diseases, and to prevent bone complications from breast cancer. It is an approved medicine with several products still authorised in the European Union, though some EU marketing authorisations have lapsed or been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q166825](https://www.wikidata.org/wiki/Q166825) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:40 | 1:13 | 0/0/0 | 0/0/0 | 0/0/1 | 25,553/933 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **VDR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Mondockova_2023](drugs/drug_ibandronic_acid/pgx_Mondockova_2023_VDR_Q100.md) | Mondockova V et al., Vitamin D Receptor Gene Polymorphisms A…, Genes (2023) | [10.3390/genes14010193](https://doi.org/10.3390/genes14010193) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ibandronic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FDPS (inhibitor), GGPS1 (inhibitor), Hydroxylapatite (target), VDR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pillai_2006.pdf` | Pillai G et al., Population pharmacokinetics of ibandron…, International journal of cl… (2006) | popPK | 10 | [10.5414/cpp44655](https://doi.org/10.5414/cpp44655) | [17190376](https://pubmed.ncbi.nlm.nih.gov/17190376) | The paper describes a population PK model for ibandronate with numeric parameters mentioned (e.g., CLCR influence) but specific parameter values (CL, V, Q) are not fully provided in the text, likely residing in tables or figures not fully extracted. |
| `Jordan_2005.pdf` | Jordan P et al., Explicit solutions for a class of indir…, Computer methods and progra… (2005) | pd | 5 | [10.1016/j.cmpb.2004.02.002](https://doi.org/10.1016/j.cmpb.2004.02.002) | [15652631](https://www.ncbi.nlm.nih.gov/pubmed/15652631) | metadata signals extractable PD data (indirectresponse) |
| `Marathe_2011.pdf` | Marathe DD et al., Integrated model for denosumab and iban…, Biopharmaceutics & drug dis… (2011) | pd | 5 | [10.1002/bdd.770](https://doi.org/10.1002/bdd.770) | [21953540](https://www.ncbi.nlm.nih.gov/pubmed/21953540) | metadata signals extractable PD data (turnovermodel) |
| `Pillai_2004.pdf` | Pillai G et al., A semimechanistic and mechanistic popul…, British journal of clinical… (2004) | pd | 5 | [10.1111/j.1365-2125.2004.02224.x](https://doi.org/10.1111/j.1365-2125.2004.02224.x) | [15563360](https://www.ncbi.nlm.nih.gov/pubmed/15563360) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-10-07T03:40:44.414846+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ayturk_2025 | not_relevant | 4 | 5 | The study investigates the association between VDR/ER1/Col1a1 polymorphisms and bone mineral density response, not the specific pharmacokinetics or pharmacodynamics of ibandronic acid itself. |
| popPK | Jordan_2005 | irrelevant | 0 | 0 | The paper presents mathematical explicit solutions for indirect response models and mentions ibandronate only as a case study for model evaluation speed, without reporting specific quantitative pharmacokinetic parameter values (CL, V, etc.). |
| PGx | Liubimova_2000 | not_relevant | 0 | 0 | The paper discusses bone markers in cancer patients and mentions ibandronate but contains no information on gene variants, genotypes, or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Lühe_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of FPP synthase inhibition and cytotoxicity, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| popPK | Mandema_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of bone mineral density outcomes, not a pharmacokinetic study, and provides no disposition parameters for ibandronic acid. |
| popPK | Marathe_2011 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Pillai_2006 | relevant | 10 | 2 | The paper describes a population PK model for ibandronate with numeric parameters mentioned (e.g., CLCR influence) but specific parameter values (CL, V, Q) are not fully provided in the text, likely residing in tables or figures not fully extracted. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model-based meta-analysis of bone mineral density and bone turnover markers, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for ibandronate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
