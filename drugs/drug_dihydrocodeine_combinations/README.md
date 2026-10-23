<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dihydrocodeine, combinations&quot;}]"></div>

# dihydrocodeine, combinations

- **generic name:** dihydrocodeine, combinations
- **ATC codes:** `N02AA58`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Dihydrocodeine combinations are opioid analgesic products used to relieve moderate pain. They are used in several countries, for example in Europe and Japan, generally as prescription medicines.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">in vitro</span> | **CYP2D6** | `Q3` · CLint | metabolism | [Kirkwood_1997](drugs/drug_dihydrocodeine_combinations/pgx_Kirkwood_1997_CYP2D6_Q3.md) | Kirkwood LC et al., Characterization of the human cytochrom…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.t01-1-00626.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00626.x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q88` · AUC | formation | [Wilder-Smith_1998](drugs/drug_dihydrocodeine_combinations/pgx_Wilder_Smith_1998_CYP2D6_Q88.md) | Wilder-Smith CH et al., The visceral and somatic antinociceptiv…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00727.x](https://doi.org/10.1046/j.1365-2125.1998.00727.x) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dihydrocodeine_combinations).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism | PGx paper |
| metabolism | liver | `CYP2D6` metabolism | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 20:17 | 6:05 | 0/0/0 | 0/0/0 | 0/0/2 | 604/5,079 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 3/2 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fromm_1995.pdf` | Fromm MF et al., Dihydrocodeine: a new opioid substrate…, Clinical pharmacology and t… (1995) | pgx | 8 | [10.1016/0009-9236(95)90049-7](https://doi.org/10.1016/0009-9236(95)90049-7) | [7586928](https://www.ncbi.nlm.nih.gov/pubmed/7586928) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Leppert_2011.pdf` | Leppert W, CYP2D6 in the metabolism of opioids for…, Pharmacology (2011) | pgx | 8 | [10.1159/000326085](https://doi.org/10.1159/000326085) | [21494059](https://www.ncbi.nlm.nih.gov/pubmed/21494059) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Schmidt_2003.pdf` | Schmidt H et al., The role of active metabolites in dihyd…, International journal of cl… (2003) | pgx | 8 | [10.5414/cpp41095](https://doi.org/10.5414/cpp41095) | [12665158](https://www.ncbi.nlm.nih.gov/pubmed/12665158) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Shimizu_2018.pdf` | Shimizu M et al., Dihydrocodeine Overdoses in a Neonate a…, Therapeutic drug monitoring (2018) | pgx | 8 | [10.1097/FTD.0000000000000482](https://doi.org/10.1097/FTD.0000000000000482) | [29389842](https://www.ncbi.nlm.nih.gov/pubmed/29389842) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 |  | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hosseinnejad_2019.pdf` | Hosseinnejad K et al., Lack of Influence by CYP3A4 and CYP3A5…, The journal of applied labo… (2019) | pgx | 5 | [10.1373/jalm.2018.026070](https://doi.org/10.1373/jalm.2018.026070) | [31639687](https://www.ncbi.nlm.nih.gov/pubmed/31639687) | metadata signals extractable PGX data (CYP3A4) |
| `Schmidt_2002.pdf` | Schmidt H et al., Affinities of dihydrocodeine and its me…, Pharmacology & toxicology (2002) | pgx | 5 | [10.1034/j.1600-0773.2002.910203.x](https://doi.org/10.1034/j.1600-0773.2002.910203.x) | [12420793](https://www.ncbi.nlm.nih.gov/pubmed/12420793) | metadata signals extractable PGX data (CYP2D6) |
| `Susce_2006.pdf` | Susce MT et al., Response to hydrocodone, codeine and ox…, Progress in neuro-psychopha… (2006) | pgx | 5 | [10.1016/j.pnpbp.2006.03.018](https://doi.org/10.1016/j.pnpbp.2006.03.018) | [16631290](https://www.ncbi.nlm.nih.gov/pubmed/16631290) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27 20:16 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ammon_1999 | not_relevant | 0 | 0 | The study only includes CYP2D6 extensive metabolizers and assesses dose linearity, failing to compare different genotypes or report a pharmacogenomic effect. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype-phenotype classifications (e.g., poor/intermediate metabolizer) and prevalence in a cohort, but does not report measured changes in specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pain scores) for dihydrocodeine or its combinations. |
| PGx | Leppert_2016 | not_relevant | 2 | 0 | The paper is a general safety review that mentions CYP2D6 phenotypes qualitatively but does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| PGx | Sobczak_2020 | not_relevant | 2 | 0 | The paper is a review on drug misuse that qualitatively mentions CYP2D6 polymorphisms affecting codeine metabolism, but it does not report specific quantitative pharmacogenomic effect sizes or fitted parameters for dihydrocodeine combinations. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydrocodeine_combinations%5D&body=Drug%3A%20dihydrocodeine_combinations%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dihydrocodeine_combinations/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
